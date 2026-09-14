import { useEffect } from 'react'
import { toast } from 'sonner'
import { X } from 'lucide-react'
import Layout from './components/Layout'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import DondeEstamos from './pages/DondeEstamos'
import QueNecesito from './pages/QueNecesito'
import OtrosLinks from './pages/OtrosLinks'

function App() {
  useEffect(() => {
    toast.custom(
      (t) => (
        <div className="relative w-[440px] max-w-[90vw] rounded-lg border border-accents-2 bg-accents-1 px-6 py-5 shadow-2xl shadow-black/60">
          <button
            onClick={() => toast.dismiss(t)}
            className="absolute top-3 right-3 p-1.5 rounded-md text-accents-4 hover:text-foreground hover:bg-accents-2 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="font-display font-semibold text-lg tracking-tight text-foreground pr-8">
            Nos mudamos!
          </p>
          <p className="text-accents-5 text-sm leading-relaxed mt-1.5">
            Nueva dirección:{' '}
            <span className="text-foreground font-medium">
              Av. Corrientes 2294, Piso 3°, Of. 16
            </span>{' '}
            — Entre Pasteur y Uriburu, C.A.B.A.
          </p>
        </div>
      ),
      { id: 'mudanza', duration: Infinity }
    )
  }, [])

  return (
    <Layout>
      <div className="flex flex-col gap-24">
        <section id="inicio" className="scroll-mt-8">
          <Home />
        </section>
        
        <div className="w-full h-px bg-accents-2" />
        
        <section id="quienes-somos" className="scroll-mt-8">
          <QuienesSomos />
        </section>

        <div className="w-full h-px bg-accents-2" />
        
        <section id="donde-estamos" className="scroll-mt-8">
          <DondeEstamos />
        </section>

        <div className="w-full h-px bg-accents-2" />
        
        <section id="que-necesito" className="scroll-mt-8">
          <QueNecesito />
        </section>

        <div className="w-full h-px bg-accents-2" />
        
        <section id="otros-links" className="scroll-mt-8">
          <OtrosLinks />
        </section>
      </div>
    </Layout>
  )
}

export default App
