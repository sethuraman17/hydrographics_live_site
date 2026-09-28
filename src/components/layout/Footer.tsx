import { Link } from "react-router-dom"
import { navLinks } from "@/data/content"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8">
                <img src="/logo-mark.webp" alt="" className="w-full h-full object-contain opacity-90" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-foreground">Hydra</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold-muted">Surface Tech</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-8">
              Engineering premium surface transformations through precision hydrographic technology.
              Film, chemistry, equipment — everything you need to deliver exceptional results.
            </p>
            <a className="footer-email" href="mailto:hello@hydrasurfacetech.com">hello@hydrasurfacetech.com <span>↗</span></a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-foreground mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                { label: "Hydrographic Films", href: "/products/films" },
                { label: "Activators", href: "/products/chemicals" },
                { label: "Base Coats", href: "/products/chemicals" },
                { label: "Clear Coats", href: "/products/chemicals" },
                { label: "Machines", href: "/products/machines" },
                { label: "Accessories", href: "/products/accessories" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Hydra Surface Technology. All rights reserved.
          </p>
          <span className="footer-signoff">FILM / CHEMISTRY / EQUIPMENT</span>
        </div>
      </div>
    </footer>
  )
}
