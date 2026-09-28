import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FadeIn, LineReveal } from "@/components/shared/Animations"
import { ArrowButton } from "@/components/shared/MagneticButton"
import { productCategories } from "@/data/content"

export function ProductCategories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-32 lg:py-48 relative bg-card">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <FadeIn direction="up" delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Products</span>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-none tracking-tight uppercase">
                The Complete
                <span className="block text-foreground/30">System</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.2}>
            <ArrowButton href="/products">
              View all products
            </ArrowButton>
          </FadeIn>
        </div>

        <LineReveal className="mb-16" />

        {/* Category grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border">
          {productCategories.map((cat, i) => (
            <Link
              key={cat.id}
              to={cat.href}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative border-b border-r border-border overflow-hidden ${
                i % 2 === 1 ? "border-r-0" : ""
              } ${i >= 2 ? "border-b-0" : ""}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredId === cat.id ? 1.05 : 1 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <motion.div
                  className="absolute inset-0 bg-background/70"
                  animate={{ opacity: hoveredId === cat.id ? 0.5 : 0.7 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Tag */}
                <div className="absolute top-6 left-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-gold border border-gold/40 px-3 py-1">
                    {cat.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 bg-card">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-gold transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap mt-1">
                    {cat.subtitle}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {cat.description}
                </p>
                <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-gold group-hover:gap-5 transition-all duration-300">
                  Explore
                  <span className="w-6 h-px bg-gold" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
