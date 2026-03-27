import { Building2, MessagesSquare } from 'lucide-react'

export default function DondeEstamos() {
  return (
    <div className="animate-in fade-in duration-500">
      
      <div className="mb-12">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">Dónde Estamos</h1>
        <p className="text-lg text-accents-5 font-light tracking-wide">Zona de Once · Ciudad Autónoma de Buenos Aires</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contact Info Card */}
        <div className="bg-background rounded-xl p-8 border-vercel flex flex-col justify-center">
          
          <div className="flex items-start gap-5 mb-10">
            <div className="w-10 h-10 border border-accents-2 rounded bg-accents-1 text-foreground flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold tracking-tight text-xl text-foreground mb-2">
                Av. Corrientes 2330
              </h3>
              <p className="text-accents-5 leading-relaxed text-sm">
                Piso 9° · Oficina 904<br/>
                Entre Pasteur y Azcuénaga<br/>
                C.A.B.A., Argentina
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-accents-2 mb-10" />

          <div className="flex items-start gap-5">
            <div className="w-10 h-10 border border-accents-2 rounded bg-accents-1 text-foreground flex items-center justify-center shrink-0">
              <MessagesSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold tracking-tight text-xl text-foreground mb-2">
                Contacto
              </h3>
              <p className="text-accents-5 leading-relaxed text-sm mb-2">
                <span className="text-foreground font-medium">Tel./WhatsApp:</span> 011 4954-3444
              </p>
              <p className="text-accents-5 leading-relaxed text-sm">
                <span className="text-foreground font-medium">Horario:</span> Lun a Vie de 10:30 a 19:00 Hs.
              </p>
            </div>
          </div>

        </div>

        {/* Map Container */}
        <div className="bg-accents-1 rounded-xl overflow-hidden border border-accents-2 relative group min-h-[400px]">
          <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent pointer-events-none transition-colors duration-500 z-10" />
          <iframe
            title="Ubicación Copyrio"
            src="https://maps.google.com/maps?q=Av.+Corrientes+2330,+Buenos+Aires,+Argentina&output=embed"
            className="w-full h-full absolute inset-0 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 mix-blend-screen"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </div>
  )
}
