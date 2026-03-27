import { Mail, Receipt } from 'lucide-react'
import GlowCard from './GlowCard'

export default function ProductPage({ title, subtitle, image, alt }) {
  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-accents-5 font-light tracking-wide">
            {subtitle}
          </p>
        )}
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Image Card */}
        <div className="lg:col-span-8">
          <GlowCard>
            <div className="relative overflow-hidden rounded-[7px] bg-black flex justify-center items-center min-h-[400px]">
              <img 
                src={image} 
                alt={alt || title} 
                className="max-h-[600px] w-auto object-contain p-4"
              />
            </div>
          </GlowCard>
        </div>

        {/* Action Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <GlowCard>
            <div className="p-8 flex flex-col items-start">
              <div className="w-10 h-10 border border-accents-3 rounded flex items-center justify-center mb-6">
                <Receipt className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-semibold tracking-tight text-xl text-foreground mb-3">¿Necesitás este trabajo?</h3>
              <p className="text-accents-5 text-sm mb-8 leading-relaxed">
                Solicitá cantidades mínimas y tiempos de entrega exactos a través de nuestro formulario de cotización.
              </p>
              <a
                href={`mailto:copyrio@copyrio.ar?subject=Presupuesto%20-%20${encodeURIComponent(title)}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-foreground hover:bg-gray-200 text-background rounded-md text-sm font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                Solicitar Presupuesto
              </a>
            </div>
          </GlowCard>

          <GlowCard>
            <div className="p-6 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse flex-shrink-0" />
              <div>
                <p className="text-sm text-accents-5">Atención rápida por WhatsApp</p>
                <p className="text-foreground font-semibold mt-0.5">011 4954-3444</p>
              </div>
            </div>
          </GlowCard>
        </div>

      </div>

    </div>
  )
}
