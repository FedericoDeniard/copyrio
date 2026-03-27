export default function Home() {
  const services = [
    'Facturas "A - B - C - E - M"',
    'Recibos "A - B - C - E - M - X"',
    'Remitos "R - X"',
    'Nota de Crédito "A - B - C"',
    'Órdenes de Compra "X"',
    'Fotocopias Blanco y Negro / Color',
    'Ampliaciones y Reducciones',
    'Digitalización de Documentos en PDF',
    'Corte x Contorno de Imágenes',
    'Generación de Códigos QR',
    'Bajadas Láser Color hasta 12×18 pulgadas',
    'Impresión en Papel Fotográfico de alto Brillo',
    'Impresión en tamaños 100×150 mm hasta 210×297 mm',
    'Impresión de CD y DVD',
    'Bajadas en Papel Vegetal',
    'Encuadernación Artesanal de Libros y Fascículos',
    'Tarjetas Personales Blanco y Negro / Full Láser Color',
    'Copiado Directo en Libros Contables',
    'Plastificado hasta Tamaño A3+ y Credenciales',
    'Sellos en Polímero',
  ]

  return (
    <div>
      <div className="page-header">
        <h1>Copyrio</h1>
        <p className="subtitle">Imprenta y encuadernación · Buenos Aires</p>
      </div>

      <div className="card">
        <div className="hero-contact">
          <div className="whatsapp-badge">
            <span>●</span> WhatsApp &amp; Teléfono
          </div>
          <div className="phone">011 4954-3444</div>
          <div className="horario">Lunes a Viernes de 10:30 a 19:00 Hs.</div>
        </div>

        <a
          href="mailto:copyrio@copyrio.ar?subject=Presupuesto"
          className="presupuesto-cta"
        >
          ✉ Solicitar Presupuesto
        </a>
      </div>

      <div className="divider" />

      <div className="page-header">
        <h1 style={{ fontSize: '24px' }}>Nuestros Servicios</h1>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-item" key={i}>{s}</div>
        ))}
      </div>

      <div className="brands-section" style={{ marginTop: '48px' }}>
        <h3>Marcas con las que trabajamos</h3>
        <div className="product-image-wrap" style={{ padding: '16px' }}>
          <img src="/imagenes/marcas.gif" alt="Marcas" />
        </div>
      </div>
    </div>
  )
}
