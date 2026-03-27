import { Mail, Receipt } from 'lucide-react'

export default function ProductPage({ title, subtitle, image, alt }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="mb-8 pl-3 border-l-4 border-brand-accent">
        <h1 className="font-display text-3xl sm:text-4xl font-black text-brand-text tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-brand-primary mt-2 flex items-center gap-2 font-medium">
            {subtitle}
          </p>
        )}
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Image Card */}
        <div className="lg:col-span-8">
          <div className="bg-brand-card p-2 rounded-2xl shadow-xl border border-white/10 overflow-hidden group">
            <div className="relative overflow-hidden rounded-xl bg-white flex justify-center items-center">
              <img 
                src={image} 
                alt={alt || title} 
                className="max-h-[600px] w-auto object-contain transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-brand-card p-6 rounded-2xl shadow-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary rounded-full blur-[60px] opacity-10 pointer-events-none" />
            
            <div className="w-12 h-12 bg-brand-dark border border-brand-primary/20 rounded-xl flex items-center justify-center mb-4">
              <Receipt className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="font-bold text-lg text-brand-text mb-2 relative z-10">¿Necesitás este trabajo?</h3>
            <p className="text-brand-muted text-sm mb-6 leading-relaxed relative z-10">
              Contactanos para conocer cantidades mínimas, tiempos de entrega y solicitar un presupuesto a medida.
            </p>
            
            <a
              href={`mailto:copyrio@copyrio.ar?subject=Presupuesto%20-%20${encodeURIComponent(title)}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold transition-all shadow-sm hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] relative z-10"
            >
              <Mail className="w-4 h-4" />
              Solicitar Presupuesto
            </a>
          </div>

          <div className="bg-brand-dark p-6 rounded-2xl border border-brand-primary/20 border-dashed">
             <p className="text-sm text-brand-muted font-medium text-center">
               Atención rápida por WhatsApp al <br/>
               <span className="text-brand-primary font-bold block mt-1 text-lg">011 4954-3444</span>
             </p>
          </div>
        </div>

      </div>

    </div>
  )
}
