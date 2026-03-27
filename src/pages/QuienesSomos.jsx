import { ShieldCheck, History, Clock } from 'lucide-react'
import GlowCard from '../components/GlowCard'

export default function QuienesSomos() {
  const features = [
    {
      icon: History,
      title: 'Trayectoria',
      desc: 'Más de 40 años en el mercado gráfico avalan la calidad y responsabilidad en nuestro trabajo.'
    },
    {
      icon: ShieldCheck,
      title: 'Cumplimiento',
      desc: 'Nuestro principal objetivo es satisfacer las necesidades del cliente en tiempo y forma.'
    },
    {
      icon: Clock,
      title: 'Tecnología',
      desc: 'Equipos láser digitales, color y B/N de última generación, listos para altas exigencias.'
    }
  ]

  return (
    <div className="animate-in fade-in duration-500">
      
      <div className="mb-12">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">Quiénes Somos</h1>
        <p className="text-lg text-accents-5 font-light tracking-wide">Más de 46 años en el mercado de la gráfica</p>
      </div>

      <GlowCard className="mb-12">
        <div className="p-8 lg:p-12">
          <p className="text-xl text-foreground leading-relaxed font-light max-w-4xl">
            Somos una empresa que hace más de 46 años estamos en el mercado de la gráfica
            y encuadernación, cubriendo todos los rubros que figuran en este sitio.
            <br /><br />
            <span className="text-accents-5">
              Contamos con equipos de impresión de Blanco y Negro y Color de última
              tecnología, digitales y con conectividad, para poder satisfacer a todos
              nuestros clientes y cumplir sus necesidades en tiempo y forma.
            </span>
          </p>
        </div>
      </GlowCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <GlowCard key={i} className="group/feat">
              <div className="p-8">
                <div className="w-10 h-10 border border-accents-2 rounded bg-accents-1 flex items-center justify-center mb-6 text-foreground group-hover/feat:bg-foreground group-hover/feat:text-background transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg tracking-tight text-foreground mb-3">{f.title}</h3>
                <p className="text-accents-5 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </GlowCard>
          )
        })}
      </div>
      
    </div>
  )
}
