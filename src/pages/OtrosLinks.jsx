import { ExternalLink, Landmark, FileText, Globe } from 'lucide-react'
import GlowCard from '../components/GlowCard'

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
    <div className="animate-in fade-in duration-500">
      
      <div className="mb-12">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">Links Útiles</h1>
        <p className="text-lg text-accents-5 font-light tracking-wide">Recursos y organismos gubernamentales para gestiones fiscales</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, i) => {
          const Icon = link.icon
          return (
            <GlowCard key={i} as="a" href={link.url} target="_blank" rel="noopener noreferrer" className="block group/link">
              <div className="flex flex-col p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 border border-accents-2 bg-accents-1 text-foreground rounded flex items-center justify-center shrink-0 group-hover/link:bg-foreground group-hover/link:text-background transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-accents-3 group-hover/link:text-foreground transition-colors" />
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 group-hover/link:underline decoration-accents-3 underline-offset-4">
                  {link.title}
                </h3>
                
                <p className="text-accents-5 text-sm leading-relaxed mt-auto">
                  {link.desc}
                </p>
              </div>
            </GlowCard>
          )
        })}
      </div>
    </div>
  )
}
