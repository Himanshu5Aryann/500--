import { motion } from "framer-motion";

const HERO_VIDEO = "/videoplayback.webm";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-forest-deep">
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <video
          className="h-full w-full object-cover scale-110"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            filter: "brightness(0.7) contrast(1.1)",
          }}
        >
          <source src={HERO_VIDEO} type="video/webm" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="label-caps text-gold-light mb-6"
        >
          The Interior & Exterior Solution &nbsp;—&nbsp; Interior Design Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-ivory text-[13vw] leading-[1.02] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] max-w-6xl text-balance"
        >
          Spaces, crafted
          <br />
          with <span className="italic text-gold-light">intention.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-lg text-ivory/80 text-base md:text-lg font-light"
        >
          A luxury interior design studio shaping refined residences, workplaces and
          hospitality spaces in Batala and surrounding areas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href="#featured-work"
            className="label-caps px-8 py-4 min-h-[48px] bg-ivory text-forest hover:bg-gold transition-colors duration-500 inline-flex items-center"
          >
            Explore Our Work
          </a>
          <a
            href="/contact"
            className="label-caps px-8 py-4 min-h-[48px] border border-ivory/50 text-ivory hover:bg-ivory/10 transition-colors duration-500 inline-flex items-center"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-ivory/70"
      >
        <span className="label-caps text-[10px]">Scroll to Explore</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block h-8 w-px bg-ivory/50"
        />
      </motion.div>
    </section>
  );
}
