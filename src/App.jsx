import Layout from './components/Layout'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import DondeEstamos from './pages/DondeEstamos'
import QueNecesito from './pages/QueNecesito'
import OtrosLinks from './pages/OtrosLinks'

function App() {
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
