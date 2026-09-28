import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { MagneticButton } from "@/components/shared/MagneticButton"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.8])

  const springImageScale = useSpring(imageScale, { stiffness: 100, damping: 30 })

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ scale: springImageScale, opacity: imageOpacity }}
        className="absolute inset-0"
      >
        <img
          src="/hero-bg.webp"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90"
      />

      {/* Noise grain */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')] pointer-events-none" />

      {/* Corner grid decoration */}
      <div className="absolute top-28 left-6 lg:left-12 w-24 h-24 border-l border-t border-gold/20 pointer-events-none" />
      <div className="absolute bottom-16 right-6 lg:right-12 w-24 h-24 border-r border-b border-gold/20 pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full mx-auto max-w-[1440px] px-6 lg:px-12"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">
              Water Transfer Technology
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[clamp(3rem,8vw,8rem)] font-black leading-none tracking-tight uppercase text-foreground"
            >
              Engineered
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[clamp(3rem,8vw,8rem)] font-black leading-none tracking-tight uppercase text-gradient-gold"
            >
              Surfaces.
            </motion.h1>
          </div>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base lg:text-lg text-foreground/60 max-w-xl leading-relaxed mb-12"
          >
            Professional hydrographic films, precision chemistry, and industrial equipment 
            — delivering extraordinary surface finishes at any scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton href="/products" variant="primary">
              Explore Products
            </MagneticButton>
            <MagneticButton href="/technology" variant="outline">
              Our Technology
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4 text-foreground/40" />
        </motion.div>
        <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/30">Scroll</span>
      </motion.div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
