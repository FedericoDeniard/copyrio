import { FileQuestion, AlertTriangle, PlayCircle } from 'lucide-react'

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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-10 pl-3 border-l-4 border-brand-accent">
        <h1 className="font-display text-4xl font-black text-brand-text tracking-tight">¿Qué necesito para hacer Facturas?</h1>
        <p className="text-lg text-brand-primary mt-2">Requisitos legales para encargar facturación (A · B · C · E · M)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main List */}
        <div className="lg:col-span-8 space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 p-5 bg-brand-card rounded-2xl border border-white/5 shadow-2xl group hover:border-brand-primary/30 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-brand-dark border border-brand-primary/20 text-brand-primary font-bold font-display group-hover:bg-brand-primary/10 transition-colors">
                {i + 1}
              </div>
              <div>
                <strong className="block text-brand-text mb-1 text-lg group-hover:text-brand-primary transition-colors">{item.label}</strong>
                <p className="text-brand-muted leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}

          {/* Special Warning Item */}
          <div className="mt-8 p-6 bg-brand-dark rounded-2xl border border-yellow-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500/50" />
            <div className="flex gap-4 items-start pl-2">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-yellow-500 mb-2 text-lg">¿Es la primera vez que hacés facturas?</strong>
                <p className="text-brand-muted leading-relaxed mb-4">
                  Necesitás descargar dos aplicativos desde la página de AFIP usando tu CUIT y Clave Fiscal:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-brand-muted">
                    <PlayCircle className="w-5 h-5 flex-shrink-0 text-yellow-500/70" />
                    <span>Administración de Punto de Venta y Domicilios</span>
                  </li>
                  <li className="flex gap-2 text-brand-muted">
                    <PlayCircle className="w-5 h-5 flex-shrink-0 text-yellow-500/70" />
                    <span>Autorización de Impresión de Comprobantes. <strong className="text-brand-text">Importante:</strong> tenés 10 días corridos para validar el trabajo. Si se vence el plazo, la autorización se anula y hay que volver a pedirla.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4">
          <div className="bg-brand-card text-brand-text p-6 rounded-2xl sticky top-8 shadow-2xl border border-white/5">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-4">
              <FileQuestion className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3 text-brand-text">¿Tenés alguna duda?</h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              Los trámites pueden ser confusos. Si tenés dudas sobre qué comprobante necesitás o cómo hacer el trámite, comunicate con nosotros y te asesoramos rápidamente.
            </p>
            <a
              href="https://wa.me/5491149543444" 
              target="_blank" 
              rel="noreferrer"
              className="block w-full text-center py-3 bg-brand-primary hover:bg-brand-primaryHover text-black rounded-xl font-black tracking-wide transition-all shadow-[0_0_15px_rgba(0,255,0,0.3)] hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}
