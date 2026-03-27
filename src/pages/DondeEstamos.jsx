import { Building2, MessagesSquare } from 'lucide-react'

export default function DondeEstamos() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-8 pl-3 border-l-4 border-brand-accent">
        <h1 className="font-display text-4xl font-black text-brand-text tracking-tight">Dónde Estamos</h1>
        <p className="text-lg text-brand-primary mt-2">Zona de Once · Ciudad Autónoma de Buenos Aires</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contact Info Card */}
        <div className="bg-brand-card rounded-3xl p-8 border border-white/10 shadow-2xl">
          
          <div className="flex items-start gap-4 mb-8 pb-8 border-b border-white/10">
            <div className="w-12 h-12 bg-brand-dark border border-brand-primary/30 text-brand-primary rounded-xl flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-brand-accent mb-1">
                Av. Corrientes 2330
              </h3>
              <p className="text-brand-muted leading-relaxed">
                Piso 9° · Oficina 904<br/>
                Entre Pasteur y Azcuénaga<br/>
                C.A.B.A., Argentina
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-dark border border-white/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
              <MessagesSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-brand-text mb-1">
                Contacto
              </h3>
              <p className="text-brand-muted leading-relaxed mb-1">
                <strong className="text-brand-text">Tel. / WhatsApp:</strong> <span className="text-brand-primary">011 4954-3444</span>
              </p>
              <p className="text-brand-muted">
                <strong className="text-brand-text">Horario:</strong> Lunes a Viernes de 10:30 a 19:00 Hs.
              </p>
            </div>
          </div>

        </div>

        {/* Map Container */}
        <div className="bg-brand-dark rounded-3xl overflow-hidden border border-white/10 opacity-90 hover:opacity-100 transition-opacity">
          <iframe
            title="Ubicación Copyrio"
            src="https://maps.google.com/maps?q=Av.+Corrientes+2330,+Buenos+Aires,+Argentina&output=embed"
            className="w-full h-full min-h-[400px] filter invert contrast-100 hue-rotate-180 dark-map-hack"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </div>
  )
}
