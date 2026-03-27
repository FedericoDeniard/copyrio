import { useState, useEffect } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Inicio', exact: true },
  { to: '/donde-estamos', label: 'Dónde estamos' },
  { to: '/quienes-somos', label: 'Quiénes somos' },
  { to: '/facturas', label: 'Facturas' },
  { to: '/recibos', label: 'Recibos' },
  { to: '/remitos', label: 'Remitos' },
  { to: '/encuadernacion', label: 'Encuadernación' },
  { to: '/botones-publicitarios', label: 'Botones Publicitarios' },
  { to: '/remeras-publicitarias', label: 'Remeras Publicitarias' },
  { to: '/tarjetas-bco-negro', label: 'Tarjetas Bco. y Negro' },
  { to: '/tarjetas-full-color', label: 'Tarjetas Full Color' },
  { to: '/volantes', label: 'Volantes' },
  { to: '/estampas-comunion', label: 'Estampas Comunión' },
  { to: '/bautismo', label: 'Bautismo' },
  { to: '/carteles-inmobiliarias', label: 'Carteles Inmobiliarias' },
  { to: '/que-necesito', label: '¿Qué necesito para Facturas?' },
  { to: '/otros-links', label: 'Otros Links' },
]

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setSidebarOpen(false)
  }, [location])

  return (
    <div className="layout">
      {/* Mobile hamburger */}
      <button
        className="hamburger"
        onClick={() => setSidebarOpen(o => !o)}
        aria-label="Abrir menú"
        id="hamburger-btn"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay for mobile */}
      <div
        className={`overlay${sidebarOpen ? ' open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="sidebar-logo">
          <img src="/imagenes/logo-copyrio.gif" alt="Copyrio logo" />
        </div>

        <nav className="sidebar-nav">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="mailto:copyrio@copyrio.ar?subject=Presupuesto"
            className="nav-presupuesto"
          >
            ✉ Solicitar Presupuesto
          </a>
        </nav>

        <div className="sidebar-footer">
          © {new Date().getFullYear()} Copyrio
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}
