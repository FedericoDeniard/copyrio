import { ShieldCheck, History, Clock } from 'lucide-react'

export default function QuienesSomos() {
  const features = [
    {
      icon: History,
      title: 'Más de 40 años',
      desc: 'Larga trayectoria en el mercado gráfico que avala la calidad y responsabilidad en nuestro trabajo.'
    },
    {
      icon: ShieldCheck,
      title: 'Cumplimiento',
      desc: 'Nuestro principal objetivo es satisfacer las necesidades del cliente en el tiempo y forma pactados.'
    },
    {
      icon: Clock,
      title: 'Tecnología',
      desc: 'Equipos láser digitales, color y B/N de última generación, listos para altas exigencias.'
    }
  ]

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-10 pl-3 border-l-4 border-brand-accent">
        <h1 className="font-display text-4xl font-black text-brand-text tracking-tight">Quiénes Somos</h1>
        <p className="text-lg text-brand-primary mt-2">Más de 46 años en el mercado de la gráfica</p>
      </div>

      <div className="bg-brand-card rounded-3xl p-8 lg:p-12 border border-white/5 shadow-2xl mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent rounded-full blur-[100px] opacity-5 pointer-events-none" />
        
        <p className="text-xl text-brand-text leading-relaxed font-light max-w-4xl mx-auto text-center relative z-10">
          Somos una empresa que hace más de 46 años estamos en el mercado de la gráfica
          y encuadernación, cubriendo todos los rubros que figuran en este sitio.
          <br /><br />
          Contamos con equipos de impresión de Blanco y Negro y Color de última
          tecnología, digitales y con conectividad, para poder satisfacer a todos
          nuestros clientes y cumplir sus necesidades en tiempo y forma.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <div key={i} className="bg-brand-dark rounded-2xl p-6 border border-white/10 text-center hover:border-brand-primary/30 transition-colors group">
              <div className="w-14 h-14 bg-brand-card border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-primary shadow-sm group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-text mb-2 group-hover:text-brand-accent transition-colors">{f.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}
