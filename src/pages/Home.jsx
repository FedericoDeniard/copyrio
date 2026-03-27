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
      <div className="bg-brand-card rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full blur-[100px] -mr-20 -mt-20 opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-text tracking-tight leading-tight mb-4">
            Imprenta y <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-400">encuadernación</span> profesional.
          </h1>
          <p className="text-lg text-brand-muted mb-8 max-w-lg leading-relaxed">
            Más de 40 años brindando soluciones gráficas, comerciales y editoriales en la zona de Once, Buenos Aires.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="mailto:copyrio@copyrio.ar?subject=Presupuesto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold transition-all hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:-translate-y-0.5"
            >
              Consultar Presupuesto
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </a>
            <a 
              href="https://wa.me/5491149543444" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-dark hover:bg-white/5 text-brand-primary rounded-xl font-bold transition-all border border-brand-primary/30 hover:border-brand-primary hover:shadow-[0_0_15px_rgba(0,255,0,0.2)]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium text-brand-muted bg-brand-dark w-fit px-4 py-2.5 rounded-lg border border-white/5">
            <Phone className="w-4 h-4 text-brand-primary" />
            <span className="text-brand-text">011 4954-3444</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>Lun a Vie 10:30 a 19:00 Hs</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-12">
        <h2 className="font-display text-2xl font-bold text-brand-accent mb-6 flex items-center gap-2">
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="flex items-start gap-3 p-4 bg-brand-card rounded-xl border border-white/5 hover:border-brand-primary/30 hover:bg-white/5 transition-all group"
            >
              <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-brand-text leading-snug group-hover:text-brand-primary transition-colors">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="text-xs font-bold tracking-widest uppercase text-brand-muted mb-6">Equipamiento de primer nivel</h3>
        <div className="bg-white rounded-2xl p-8 border border-white/10 shadow-sm inline-block opacity-90 hover:opacity-100 transition-opacity">
          <img 
            src="/imagenes/marcas.gif" 
            alt="Marcas: Ricoh, Aficio, Minolta, Canon" 
            className="h-12 object-contain" 
          />
        </div>
      </div>

    </div>
  )
}
