import { FileQuestion, AlertTriangle, PlayCircle } from 'lucide-react'
import GlowCard from '../components/GlowCard'

export default function QueNecesito() {
  const items = [
    {
      label: 'Tipo de comprobante',
      text: 'Facturas, Recibos o Notas de Crédito / Débito de letra "A" · "B" · "C" · "E" · "M" · "R". Para Recibos "X" no requiere autorización previa.',
    },
    {
      label: 'Número de CUIT',
      text: 'La constancia de inscripción o el Formulario 160/162 de inscripción.',
    },
    {
      label: 'Ingresos Brutos',
      text: 'Debés presentar la inscripción en Ingresos Brutos (excepto profesionales que estén exentos).',
    },
    {
      label: 'Fecha de inicio de actividades',
      text: 'Dato obligatorio para poder imprimir comprobantes fiscales oficiales.',
    },
  ]

  return (
    <div className="animate-in fade-in duration-500">
      
      <div className="mb-12">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">¿Qué necesito para hacer Facturas?</h1>
        <p className="text-lg text-accents-5 font-light tracking-wide">Requisitos legales para encargar facturación (A · B · C · E · M)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Main List */}
        <div className="lg:col-span-8 space-y-4">
          {items.map((item, i) => (
            <GlowCard key={i} className="group/item">
              <div className="flex gap-4 p-5">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded border border-accents-2 bg-accents-1 text-foreground font-semibold text-sm group-hover/item:bg-foreground group-hover/item:text-background transition-colors">
                  {i + 1}
                </div>
                <div>
                  <strong className="block text-foreground mb-1 text-sm">{item.label}</strong>
                  <p className="text-accents-5 leading-relaxed text-sm">{item.text}</p>
                </div>
              </div>
            </GlowCard>
          ))}

          {/* Warning Card */}
          <GlowCard className="mt-8">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded border border-yellow-500/30 bg-yellow-500/10 text-yellow-500">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-foreground mb-2">¿Es la primera vez que hacés facturas?</strong>
                  <p className="text-accents-5 leading-relaxed text-sm mb-5">
                    Necesitás descargar dos aplicativos desde la página de AFIP usando tu CUIT y Clave Fiscal:
                  </p>
                  <div className="space-y-3">
                    <GlowCard>
                      <div className="flex gap-3 items-start p-3">
                        <PlayCircle className="w-4 h-4 flex-shrink-0 text-foreground mt-0.5" />
                        <span className="text-sm text-accents-5"><strong className="text-foreground font-medium">1.</strong> Administración de Punto de Venta y Domicilios</span>
                      </div>
                    </GlowCard>
                    <GlowCard>
                      <div className="flex gap-3 items-start p-3">
                        <PlayCircle className="w-4 h-4 flex-shrink-0 text-foreground mt-0.5" />
                        <span className="text-sm text-accents-5">
                          <strong className="text-foreground font-medium">2.</strong> Autorización de Impresión de Comprobantes.
                          <span className="block mt-1 text-xs text-brand-danger">Atención: tenés 10 días corridos para validar el trabajo, o la autorización se anula.</span>
                        </span>
                      </div>
                    </GlowCard>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4">
          <GlowCard className="sticky top-8">
            <div className="p-8 flex flex-col items-start">
              <div className="w-10 h-10 border border-accents-2 rounded bg-accents-1 flex items-center justify-center mb-6">
                <FileQuestion className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-semibold tracking-tight text-xl text-foreground mb-3">¿Tenés alguna duda?</h3>
              <p className="text-accents-5 text-sm leading-relaxed mb-8">
                Los trámites gubernamentales pueden ser confusos. Si tenés dudas sobre qué comprobante necesitás o cómo hacer el trámite, comunicate con nosotros.
              </p>
              <a
                href="https://wa.me/5491149543444" 
                target="_blank" 
                rel="noreferrer"
                className="w-full text-center py-2.5 bg-foreground hover:bg-gray-200 text-background rounded-md text-sm font-semibold transition-colors"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </GlowCard>
        </div>

      </div>

    </div>
  )
}
