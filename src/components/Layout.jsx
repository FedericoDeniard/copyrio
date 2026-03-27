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
  const location = useLocation()

  useEffect(() => {
    setSidebarOpen(false)
  }, [location])

  return (
    <div className="flex min-h-screen bg-brand-black font-sans text-brand-text">
      
      {/* Mobile Header & Hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass z-40 flex items-center justify-between px-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src="/imagenes/logo-copyrio.gif" alt="Copyrio" className="h-8 object-contain" />
        </div>
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 bg-brand-dark rounded-lg border border-white/10 text-brand-text hover:bg-white/5 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 bottom-0 w-72 bg-brand-dark border-r border-white/10 z-50
        flex flex-col transition-transform duration-300 ease-in-out lg:shadow-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-center p-6 border-b border-white/10">
          <img src="/imagenes/logo-copyrio.gif" alt="Copyrio Logo" className="w-full max-w-[200px] object-contain" />
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.exact}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-brand-primary/10 text-brand-primary shadow-sm border border-brand-primary/20' 
                    : 'text-brand-muted hover:bg-white/5 hover:text-brand-text'}
                `}
              >
                {({ isActive }) => (
                  <>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-brand-primary' : 'text-brand-muted'}`} />
                    {item.label}
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10 bg-brand-dark">
          <a
            href="mailto:copyrio@copyrio.ar?subject=Presupuesto"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-sm font-bold transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4" />
            Solicitar Presupuesto
          </a>
          <p className="text-center text-xs text-brand-muted mt-4">
            © {new Date().getFullYear()} Copyrio
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-72 min-h-screen pt-16 lg:pt-0 pb-12">
        <div className="max-w-5xl mx-auto p-4 sm:p-8 lg:p-12">
          <Outlet />
        </div>
      </main>

    </div>
  )
}
