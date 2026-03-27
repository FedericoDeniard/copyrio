import { ExternalLink, Landmark, FileText, Globe } from 'lucide-react'

const links = [
  {
    title: 'AFIP – Portal de contribuyentes',
    url: 'https://auth.afip.gob.ar/contribuyente_/login.xhtml',
    desc: 'Acceso directo con Clave Fiscal al portal de la AFIP para gestionar todos los trámites a nivel nacional.',
    icon: Landmark
  },
  {
    title: 'Constancia de Inscripción – CUIT',
    url: 'https://seti.afip.gob.ar/padron-puc-constancia-internet/jsp/Constancia.jsp',
    desc: 'Búsqueda e impresión oficial de constancia de CUIT para facturación.',
    icon: FileText
  },
  {
    title: 'AGIP – Dirección General de Rentas (CABA)',
    url: 'https://www.agip.gob.ar/',
    desc: 'Página oficial de la AGIP para trámites impositivos de la Ciudad Autónoma de Buenos Aires.',
    icon: Globe
  },
  {
    title: 'Constancia de Ingresos Brutos (CABA)',
    url: 'https://lb.agip.gob.ar/ConstanciaIB/',
    desc: 'Consultá y descargá gratis tu constancia de inscripción en Ingresos Brutos online.',
    icon: FileText
  },
]

export default function OtrosLinks() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-10 pl-3 border-l-4 border-brand-accent">
        <h1 className="font-display text-4xl font-black text-brand-text tracking-tight">Links Útiles</h1>
        <p className="text-lg text-brand-primary mt-2">Recursos y organismos gubernamentales para gestiones fiscales</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {links.map((link, i) => {
          const Icon = link.icon
          return (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-card p-6 rounded-2xl border border-white/5 shadow-2xl hover:border-brand-primary/50 transition-all group block h-full flex flex-col relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-primary opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 bg-brand-dark border border-white/10 text-brand-muted rounded-xl flex items-center justify-center shrink-0 group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-text leading-tight group-hover:text-brand-primary transition-colors">
                  {link.title}
                </h3>
              </div>
              
              <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-1 relative z-10">
                {link.desc}
              </p>

              <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-accent group-hover:text-yellow-400 relative z-10">
                 Acceder al sitio <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
