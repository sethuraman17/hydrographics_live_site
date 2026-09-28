import { useRef, type ReactNode, type MouseEvent } from "react"
import { motion, useSpring } from "framer-motion"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  variant?: "primary" | "outline" | "ghost"
  strength?: number
  asChild?: boolean
  type?: "button" | "submit"
  disabled?: boolean
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  strength = 0.3,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 300, damping: 20 })
  const y = useSpring(0, { stiffness: 300, damping: 20 })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const variantClasses = {
    primary: "bg-foreground text-background hover:bg-gold hover:text-background",
    outline: "border border-border hover:border-gold text-foreground hover:text-gold",
    ghost: "text-foreground hover:text-gold",
  }

  const inner = (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "relative inline-flex items-center gap-3 px-7 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          className
        )}
      >
        {children}
      </button>
    </motion.div>
  )

  if (href) {
    return (
      <motion.div
        ref={ref}
        style={{ x, y }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <Link
          to={href}
          className={cn(
            "relative inline-flex items-center gap-3 px-7 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer",
            variantClasses[variant],
            className
          )}
        >
          {children}
        </Link>
      </motion.div>
    )
  }

  return inner
}

export function ArrowButton({
  children,
  href,
  onClick,
  className,
}: {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
}) {
  const inner = (
    <span
      className={cn(
        "group inline-flex items-center gap-3 text-sm tracking-wider uppercase font-medium text-foreground/70 hover:text-gold transition-colors duration-300 cursor-pointer",
        className
      )}
    >
      {children}
      <span className="relative inline-block w-8 h-px bg-current overflow-hidden">
        <span className="absolute inset-0 w-full h-px bg-current transition-transform duration-300 group-hover:translate-x-full" />
        <span className="absolute inset-0 w-full h-px bg-gold -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
      </span>
    </span>
  )

  if (href) {
    return <Link to={href}>{inner}</Link>
  }

  return <button onClick={onClick}>{inner}</button>
}
