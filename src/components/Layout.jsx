import { useState, useEffect } from 'react'
import { Mail, Menu, X } from 'lucide-react'

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'productos', label: 'Productos' },
  { id: 'quienes-somos', label: 'Nosotros' },
  { id: 'donde-estamos', label: 'Ubicación' },
  { id: 'que-necesito', label: '¿Qué necesito?' },
  { id: 'otros-links', label: 'Links' },
]

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )

    const observeSections = () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.id)
        if (el) observer.observe(el)
      })
    }

    setTimeout(observeSections, 100)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="min-h-screen font-sans bg-grid relative"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      {/* Bottom Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 pointer-events-none z-0" />

      {/* ─── Top Navbar ─── */}
      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-accents-2 shadow-[0_1px_3px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'}
      `}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="flex items-center shrink-0">
              <img
                src="/imagenes/logo-copyrio.gif"
                alt="Copyrio"
                className="h-7 object-contain filter invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`
                    px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200
                    ${activeSection === item.id
                      ? 'text-foreground'
                      : 'text-accents-4 hover:text-foreground'}
                  `}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="mailto:copyrio@copyrio.ar?subject=Presupuesto"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground hover:bg-gray-200 text-background rounded-md text-sm font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Presupuesto
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-accents-5 hover:text-foreground transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? 'max-h-[400px] border-t border-accents-2' : 'max-h-0'}
        `}>
          <div className="bg-background/95 backdrop-blur-xl px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`
                  block px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                  ${activeSection === item.id
                    ? 'bg-accents-2 text-foreground'
                    : 'text-accents-5 hover:bg-accents-1 hover:text-foreground'}
                `}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-accents-2 mt-3">
              <a
                href="mailto:copyrio@copyrio.ar?subject=Presupuesto"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-foreground hover:bg-gray-200 text-background rounded-md text-sm font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="min-h-screen pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-accents-2 py-8">
        <p className="text-center text-xs text-accents-4">
          © {new Date().getFullYear()} Copyrio · Av. Corrientes 2330, Piso 9°, Of. 904 – C.A.B.A.
        </p>
      </footer>
    </div>
  )
}
