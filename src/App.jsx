import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import DondeEstamos from './pages/DondeEstamos'
import Facturas from './pages/Facturas'
import Recibos from './pages/Recibos'
import Remitos from './pages/Remitos'
import Encuadernacion from './pages/Encuadernacion'
import BotonesPublicitarios from './pages/BotonesPublicitarios'
import RemerasPublicitarias from './pages/RemerasPublicitarias'
import TarjetasBlancoNegro from './pages/TarjetasBlancoNegro'
import TarjetasFullColor from './pages/TarjetasFullColor'
import Volantes from './pages/Volantes'
import EstampasComunion from './pages/EstampasComunion'
import Bautismo from './pages/Bautismo'
import CartelesInmobiliarias from './pages/CartelesInmobiliarias'
import QueNecesito from './pages/QueNecesito'
import OtrosLinks from './pages/OtrosLinks'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="donde-estamos" element={<DondeEstamos />} />
          <Route path="facturas" element={<Facturas />} />
          <Route path="recibos" element={<Recibos />} />
          <Route path="remitos" element={<Remitos />} />
          <Route path="encuadernacion" element={<Encuadernacion />} />
          <Route path="botones-publicitarios" element={<BotonesPublicitarios />} />
          <Route path="remeras-publicitarias" element={<RemerasPublicitarias />} />
          <Route path="tarjetas-bco-negro" element={<TarjetasBlancoNegro />} />
          <Route path="tarjetas-full-color" element={<TarjetasFullColor />} />
          <Route path="volantes" element={<Volantes />} />
          <Route path="estampas-comunion" element={<EstampasComunion />} />
          <Route path="bautismo" element={<Bautismo />} />
          <Route path="carteles-inmobiliarias" element={<CartelesInmobiliarias />} />
          <Route path="que-necesito" element={<QueNecesito />} />
          <Route path="otros-links" element={<OtrosLinks />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
