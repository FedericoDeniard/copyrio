import { ExternalLink, CheckCircle2, Phone, MessageCircle } from 'lucide-react'
import GlowCard from '../components/GlowCard'
import ProductCarousel from '../components/ProductCarousel'
import { CONTACT_EMAIL } from '../config/constants'

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

  const productGroups = [
    {
      title: "Documentos Comerciales",
      items: [
        { title: "Facturas", subtitle: '"A" · "B" · "C" · "E" · "M"', image: "/imagenes/facturas.jpg" },
        { title: "Recibos", subtitle: 'Muestras de Recibos "A" · "B" · "C" · "X"', image: "/imagenes/recibos.jpg" },
        { title: "Remitos", subtitle: "Muestras de Remitos", image: "/imagenes/remitos.jpg" }
      ]
    },
    {
      title: "Impresión y Encuadernación",
      items: [
        { title: "Encuadernación", subtitle: "Encuadernación artesanal de libros y fascículos", image: "/imagenes/encuadernacion.jpg" },
        { title: "Volantes", subtitle: "Volantes y folletos publicitarios", image: "/imagenes/volantes.jpg" }
      ]
    },
    {
      title: "Merchandising y Publicidad",
      items: [
        { title: "Botones Publicitarios", subtitle: "Botones personalizados para publicidad y eventos", image: "/imagenes/botones-publicitarios.jpg" },
        { title: "Remeras Publicitarias", subtitle: "Personalización de remeras para publicidad", image: "/imagenes/remera.jpg" }
      ]
    },
    {
      title: "Tarjetería Social y Corporativa",
      items: [
        { title: "Tarjetas Blanco y Negro", subtitle: "Tarjetas personales en blanco y negro láser", image: "/imagenes/tarjetas-blanco-y-negro.jpg" },
        { title: "Tarjetas Full Color", subtitle: "Tarjetas personales a todo color · Láser", image: "/imagenes/muestras-tarjetas-pagina.jpg" }
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <GlowCard className="mb-16">
        <div className="p-8 sm:p-12">
        <div className="max-w-4xl">
          <h1 className="font-display font-semibold tracking-tight text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Imprenta y encuadernación profesional
          </h1>
          <p className="text-xl text-accents-5 mb-10 max-w-2xl leading-relaxed font-light tracking-wide">
            Más de 40 años brindando soluciones gráficas, comerciales y editoriales de alto rendimiento en la zona de Once, Buenos Aires.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href={`mailto:${CONTACT_EMAIL}?subject=Presupuesto`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground hover:bg-gray-200 text-background rounded-md font-semibold transition-colors"
            >
              Consultar Presupuesto
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </a>
            <a 
              href="https://wa.me/5491149543444" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-accents-2 text-foreground rounded-md font-medium transition-colors border border-accents-2 group"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
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
      </GlowCard>

      {/* Product Categories */}
      <div id="productos" className="mb-20 scroll-mt-24">
        <div className="mb-12">
          <h2 className="font-display tracking-tight text-3xl font-bold text-white mb-4">
            Nuestros Productos
          </h2>
          <p className="text-accents-5 text-lg max-w-2xl font-light">
            Explorá nuestra variedad de productos diseñados para cada necesidad, desde opciones comerciales y publicitarias hasta invitaciones personalizadas.
          </p>
        </div>
        
        {productGroups.map((group, idx) => (
          <ProductCarousel key={idx} title={group.title} items={group.items} />
        ))}
      </div>

      {/* Services Grid */}
      <div className="mb-20">
        <h2 className="font-display tracking-tight text-2xl font-semibold text-white mb-8">
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <GlowCard key={i} className="group/card">
              <div className="flex items-start gap-4 p-5 h-full">
                <CheckCircle2 className="w-5 h-5 text-accents-4 shrink-0 mt-0.5 group-hover/card:text-foreground transition-colors" />
                <span className="text-sm font-medium text-accents-5 group-hover/card:text-foreground transition-colors leading-relaxed">{service}</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="border-t border-accents-2 pt-16">
        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-8">Equipamiento tecnológico</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 rounded-2xl border border-accents-2 bg-accents-1/10 backdrop-blur-sm transition-all hover:bg-accents-1/20 hover:border-accents-3">
          {[
            { src: "/imagenes/Ricoh_logo_2005.png", alt: "Ricoh", className: "h-6 sm:h-8" },
            { src: "/imagenes/aficio.svg", alt: "Aficio", className: "h-16 sm:h-24" },
            { src: "/imagenes/Logo_Konica_Minolta.png", alt: "Konica Minolta", className: "h-14 sm:h-20" },
            { src: "/imagenes/Canon_wordmark.png", alt: "Canon", className: "h-7 sm:h-9" }
          ].map((brand) => (
            <div key={brand.alt} className="flex items-center justify-center h-24">
              <img 
                src={brand.src} 
                alt={brand.alt} 
                className={`${brand.className} object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 transform hover:scale-110`} 
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

