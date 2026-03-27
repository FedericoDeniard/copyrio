import { useState, useEffect } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import {
  Home, MapPin, Users, FileText, FileCheck2, Package, BookOpen,
  Mail, HelpCircle, ExternalLink, Menu, X, CreditCard, Image as ImageIcon,
  Tag, Sticker, ShoppingBag
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Inicio', icon: Home, exact: true },
  { to: '/donde-estamos', label: 'Dónde estamos', icon: MapPin },
  { to: '/quienes-somos', label: 'Quiénes somos', icon: Users },
  { to: '/facturas', label: 'Facturas', icon: FileText },
  { to: '/recibos', label: 'Recibos', icon: FileCheck2 },
  { to: '/remitos', label: 'Remitos', icon: Package },
  { to: '/encuadernacion', label: 'Encuadernación', icon: BookOpen },
  { to: '/botones-publicitarios', label: 'Botones', icon: Tag },
  { to: '/remeras-publicitarias', label: 'Remeras', icon: ShoppingBag },
  { to: '/tarjetas-bco-negro', label: 'Tarjetas B/N', icon: CreditCard },
  { to: '/tarjetas-full-color', label: 'Tarjetas Color', icon: CreditCard },
  { to: '/volantes', label: 'Volantes', icon: ImageIcon },
  { to: '/estampas-comunion', label: 'Comunión', icon: Sticker },
  { to: '/bautismo', label: 'Bautismo', icon: Sticker },
  { to: '/carteles-inmobiliarias', label: 'Carteles', icon: ImageIcon },
  { to: '/que-necesito', label: '¿Qué necesito?', icon: HelpCircle },
  { to: '/otros-links', label: 'Otros Links', icon: ExternalLink },
]

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const location = useLocation()

  useEffect(() => {
    setSidebarOpen(false)
  }, [location])

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div 
      className="flex min-h-screen font-sans bg-grid relative"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)`
        }}
      />
      
      {/* Bottom Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 pointer-events-none z-0" />
      
      {/* Mobile Header & Hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass z-40 flex items-center justify-between px-4 border-b border-accents-2">
        <div className="flex items-center gap-3">
          <img src="/imagenes/logo-copyrio.gif" alt="Copyrio" className="h-8 object-contain filter invert opacity-90" />
        </div>
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 bg-transparent rounded-md border border-accents-2 text-accents-5 hover:text-foreground hover:border-accents-3 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 bottom-0 w-72 bg-background border-r border-accents-2 z-50
        flex flex-col transition-transform duration-300 ease-in-out lg:shadow-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-center h-24 border-b border-accents-2 px-6">
          <img src="/imagenes/logo-copyrio.gif" alt="Copyrio Logo" className="w-full max-w-[180px] object-contain filter invert opacity-90" />
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.exact}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${isActive 
                    ? 'bg-accents-2 text-foreground' 
                    : 'text-accents-5 hover:bg-accents-1 hover:text-foreground'}
                `}
              >
                {({ isActive }) => (
                  <>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-foreground' : 'text-accents-5'}`} />
                    {item.label}
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>

        <div className="p-4 border-t border-accents-2 bg-background">
          <a
            href="mailto:copyrio@copyrio.ar?subject=Presupuesto"
            className="flex items-center justify-center gap-2 w-full py-2 bg-foreground hover:bg-gray-200 text-background rounded-md text-sm font-semibold transition-colors"
          >
            <Mail className="w-4 h-4" />
            Solicitar Presupuesto
          </a>
          <p className="text-center text-xs text-accents-4 mt-6 mb-2">
            © {new Date().getFullYear()} Copyrio
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-72 min-h-screen pt-16 lg:pt-0 pb-20">
        <div className="max-w-5xl mx-auto p-4 sm:p-8 lg:p-12">
          <Outlet />
        </div>
      </main>

    </div>
  )
}
