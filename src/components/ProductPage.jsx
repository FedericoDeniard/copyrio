export default function ProductPage({ title, subtitle, image, alt }) {
  return (
    <div className="product-page">
      <div className="page-header">
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>

      <div className="product-image-wrap">
        <img src={image} alt={alt || title} />
      </div>

      <div className="card" style={{ marginTop: '8px' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
          ¿Necesitás un presupuesto o tenés alguna consulta sobre este producto?
        </p>
        <a
          href="mailto:copyrio@copyrio.ar?subject=Presupuesto"
          className="presupuesto-cta"
        >
          ✉ Solicitar Presupuesto
        </a>
      </div>
    </div>
  )
}
