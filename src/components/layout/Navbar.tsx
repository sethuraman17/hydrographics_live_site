import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { navLinks } from "@/data/content"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
  }, [location.pathname, reduceMotion])

  const primaryLinks = navLinks

  return <>
    <motion.header className={`site-nav ${scrolled ? "is-scrolled" : ""}`} initial={reduceMotion ? false : { y: -76 }} animate={{ y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
      <div className="nav-inner">
        <Link className="brand-mark" to="/" aria-label="Hydra Surface Technology home"><span className="brand-symbol"><i /><i /><i /></span><span className="brand-type"><strong>HYDRA</strong><small>SURFACE TECHNOLOGY</small></span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{primaryLinks.map((item, i) => <Link className={location.pathname === item.href || (item.href === "/products" && location.pathname.startsWith("/products")) ? "active" : ""} key={item.href} to={item.href}><span>{`0${i + 1}`}</span>{item.label}</Link>)}</nav>
        <Link className="nav-contact" to="/contact">Let’s talk <ArrowUpRight size={14} /></Link>
        <button className="menu-trigger" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
      <div className="nav-bottom-line" />
    </motion.header>
    <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}><nav>{primaryLinks.map((item, i) => <motion.div key={item.href} initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.045 }}><Link to={item.href}><span>0{i + 1}</span>{item.label}<ArrowUpRight size={16} /></Link></motion.div>)}<div className="mobile-products">{navLinks.find((item) => item.children)?.children?.map((child) => <Link to={child.href} key={child.href}>{child.label}<ArrowUpRight size={13} /></Link>)}</div></nav><span className="mobile-menu-note">HYDRA / SURFACE TECHNOLOGY — GLOBAL</span></motion.div>}</AnimatePresence>
  </>
}
