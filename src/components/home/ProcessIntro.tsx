import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn, LineReveal } from "@/components/shared/Animations"

const steps = [
  {
    id: "surface",
    label: "Surface",
    icon: "◻",
    description: "A bare substrate — metal, plastic, wood, composite. Any shape, any scale.",
    color: "text-foreground/40",
  },
  {
    id: "film",
    label: "Film",
    icon: "⬛",
    description: "Premium PVA hydrographic film is precisely cut and laid on tempered water.",
    color: "text-foreground/60",
  },
  {
    id: "activation",
    label: "Activation",
    icon: "⚡",
    description: "A precision activator spray dissolves the PVA carrier, activating the floating ink.",
    color: "text-gold-muted",
  },
  {
    id: "transfer",
    label: "Transfer",
    icon: "●",
    description: "The part is submerged through the active ink — which wraps every contour perfectly.",
    color: "text-gold",
  },
  {
    id: "finish",
    label: "Finish",
    icon: "◆",
    description: "After rinsing and clear coat, the result is a durable, flawless engineered surface.",
    color: "text-foreground",
  },
]

export function ProcessIntro() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-32 lg:py-48 bg-background relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-foreground/[0.015] uppercase select-none pointer-events-none whitespace-nowrap">
        Process
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <FadeIn direction="up" delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">
                  The Science
                </span>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-none tracking-tight uppercase mb-0">
                Surface
                <span className="block text-foreground/30">
                  Transformation
                </span>
              </h2>
            </FadeIn>
          </div>
          <div className="flex items-end">
            <FadeIn direction="up" delay={0.25}>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                Hydrographics is not printing — it is engineering. Every step in the process requires 
                precision chemistry, controlled conditions, and technical knowledge. The result is a 
                surface that can't be achieved by any other method.
              </p>
            </FadeIn>
          </div>
        </div>

        <LineReveal className="mb-24" />

        {/* Interactive step flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={containerRef}>
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                className={`group flex items-center gap-6 py-6 border-b border-border cursor-pointer transition-all duration-300 ${
                  activeStep === i ? "border-gold/40" : ""
                }`}
                onHoverStart={() => setActiveStep(i)}
                onClick={() => setActiveStep(i)}
              >
                {/* Step number */}
                <span className={`text-xs tracking-[0.2em] font-medium w-8 transition-colors duration-300 ${
                  activeStep === i ? "text-gold" : "text-muted-foreground/40"
                }`}>
                  0{i + 1}
                </span>

                {/* Arrow indicator */}
                <motion.div
                  animate={{ scaleX: activeStep === i ? 1 : 0, opacity: activeStep === i ? 1 : 0 }}
                  style={{ originX: 0 }}
                  className="w-6 h-px bg-gold"
                />

                {/* Label */}
                <span className={`text-2xl lg:text-3xl font-bold uppercase tracking-tight transition-colors duration-300 flex-1 ${
                  activeStep === i ? "text-foreground" : "text-foreground/30"
                }`}>
                  {step.label}
                </span>

                <span className={`text-xl transition-all duration-300 ${
                  activeStep === i ? step.color : "text-foreground/10"
                }`}>
                  {step.icon}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Description panel */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] relative overflow-hidden bg-card border border-border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12"
                >
                  {/* Step visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.06 }}
                      className="text-[12rem] font-black select-none"
                    >
                      {steps[activeStep].icon}
                    </motion.span>
                  </div>

                  <div className="relative z-10">
                    <div className={`text-xs tracking-[0.3em] uppercase font-medium mb-3 ${steps[activeStep].color}`}>
                      Step 0{activeStep + 1}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold uppercase mb-4">
                      {steps[activeStep].label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {steps[activeStep].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="flex gap-2 mt-4 justify-center">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`transition-all duration-300 rounded-full ${
                    activeStep === i ? "w-6 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
