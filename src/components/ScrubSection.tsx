import { useEffect, useRef } from "react";
import { motion, type Variants } from "motion/react";
import { ScrollTrigger } from "../lib/gsap";
import type { ScrubContent } from "../data/content";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

type Props = {
  section: ScrubContent;
  scrubLength?: string;
  /** Render the title as the page's <h1> (used by the hero). */
  primary?: boolean;
};

export function ScrubSection({ section, scrubLength = "+=120%", primary = false }: Props) {
  const wrapperRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentTargetRef = useRef(0);
  const seekPendingRef = useRef(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    if (!wrapper || !video) return;

    let trigger: ScrollTrigger | null = null;

    const doSeek = () => {
      // Re-seeking while a seek is in flight cancels the pending request and
      // can stall the video at readyState 0 under fast scrolling.
      if (video.seeking) {
        seekPendingRef.current = true;
        return;
      }
      video.currentTime = currentTargetRef.current;
    };

    const onSeeked = () => {
      if (seekPendingRef.current) {
        seekPendingRef.current = false;
        doSeek();
      }
    };

    const setup = () => {
      if (trigger) return;
      trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: scrubLength,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          if (!Number.isFinite(video.duration)) return;
          currentTargetRef.current = self.progress * video.duration;
          doSeek();
        },
      });
      // Pins are created asynchronously (after metadata loads), so re-sort and
      // recompute every trigger to account for the new pin spacing.
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    };

    video.addEventListener("seeked", onSeeked);
    if (video.readyState >= 1) {
      setup();
    } else {
      video.addEventListener("loadedmetadata", setup, { once: true });
    }

    return () => {
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("loadedmetadata", setup);
      trigger?.kill();
    };
  }, [scrubLength]);

  const Title = primary ? motion.h1 : motion.h2;

  return (
    // React-owned wrapper: GSAP inserts its pin-spacer inside this div, so
    // React never has to remove a node GSAP has re-parented.
    <div>
      <section
        ref={wrapperRef}
        id={section.id}
        className="relative h-screen w-full overflow-hidden bg-neutral-900"
      >
        <video
          ref={videoRef}
          src={section.video}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <motion.div
          className="relative flex h-full flex-col items-start justify-end px-6 pb-24 md:px-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.span variants={child} className="mb-4 text-sm tracking-[0.3em] text-gold uppercase">
            {section.eyebrow}
          </motion.span>
          <Title variants={child} className="max-w-3xl font-serif text-4xl text-white md:text-6xl">
            {section.title}
          </Title>
          {section.copy && (
            <motion.p variants={child} className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
              {section.copy}
            </motion.p>
          )}
        </motion.div>
      </section>
    </div>
  );
}
