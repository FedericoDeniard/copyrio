import { ExternalLink, CheckCircle2, Phone, MessageCircle } from 'lucide-react'

export default function Home() {
  const services = [
    'Facturas "A - B - C - E - M"',
    'Recibos "A - B - C - E - M - X"',
    'Remitos "R - X"',
    'Nota de Crédito "A - B - C"',
    'Órdenes de Compra "X"',
    'Fotocopias Blanco y Negro / Color',
    'Ampliaciones y Reducciones',
    'Digitalización de Documentos en PDF',
    'Corte x Contorno de Imágenes',
    'Generación de Códigos QR',
    'Bajadas Láser Color hasta 12×18 pulgadas',
    'Impresión en Papel Fotográfico de alto Brillo',
    'Impresión en tamaños 100×150 mm hasta 210×297 mm',
    'Impresión de CD y DVD',
    'Bajadas en Papel Vegetal',
    'Encuadernación Artesanal de Libros y Fascículos',
    'Tarjetas Personales Blanco & Negro / Full Color',
    'Copiado Directo en Libros Contables',
    'Plastificado hasta Tamaño A3+ y Credenciales',
    'Sellos en Polímero',
  ]

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <div className="border-vercel rounded-xl p-8 sm:p-12 mb-16 bg-accents-1/30">
        <div className="max-w-3xl">
          <h1 className="font-display font-extrabold tracking-tight text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6">
            Imprenta y encuadernación profesional
          </h1>
          <p className="text-xl text-accents-5 mb-10 max-w-2xl leading-relaxed font-light tracking-wide">
            Más de 40 años brindando soluciones gráficas, comerciales y editoriales de alto rendimiento en la zona de Once, Buenos Aires.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="mailto:copyrio@copyrio.ar?subject=Presupuesto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground hover:bg-gray-200 text-background rounded-md font-semibold transition-colors"
            >
              Consultar Presupuesto
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </a>
            <a 
              href="https://wa.me/5491149543444" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-accents-2 text-foreground rounded-md font-medium transition-colors border border-accents-2"
            >
              <MessageCircle className="w-4 h-4 text-brand-accent group-hover:text-brand-accent" />
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium text-accents-5 group">
            <Phone className="w-4 h-4 text-accents-5 group-hover:text-foreground transition-colors" />
            <span className="text-foreground">011 4954-3444</span>
            <span className="w-1 h-1 bg-accents-3 rounded-full" />
            <span>Lu a Vi 10:30 a 19:00 Hs</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-20">
        <h2 className="font-display tracking-tight text-2xl font-semibold text-foreground mb-8">
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 group/grid">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="border-t border-accents-2 pt-16">
        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-accents-4 mb-8">Equipamiento tecnológico</h3>
        <div className="inline-flex items-center justify-center p-8 rounded-lg border border-accents-2 bg-accents-1/20 transition-colors hover:border-accents-3">
          <img 
            src="/imagenes/marcas.gif" 
            alt="Marcas: Ricoh, Aficio, Minolta, Canon" 
            className="h-10 object-contain filter invert opacity-60 hover:opacity-100 transition-opacity" 
          />
        </div>
      </div>

    </div>
  )
}

function ServiceCard({ service }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative rounded-lg p-[1px] bg-accents-2 overflow-hidden group/card"
    >
      {/* Dynamic Border Glow */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.5), transparent 40%)`
        }}
      />
      
      {/* Inner solid content */}
      <div className="relative z-10 flex items-start gap-4 p-5 h-full rounded-[7px] bg-background">
        <CheckCircle2 className="w-5 h-5 text-accents-4 shrink-0 mt-0.5 group-hover/card:text-foreground transition-colors" />
        <span className="text-sm font-medium text-accents-5 group-hover/card:text-foreground transition-colors leading-relaxed">{service}</span>
      </div>
    </div>
  )
}
