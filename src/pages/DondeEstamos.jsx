export default function DondeEstamos() {
  return (
    <div>
      <div className="page-header">
        <h1>Dónde Estamos</h1>
        <p className="subtitle">Zona de Once · Ciudad Autónoma de Buenos Aires</p>
      </div>

      <div className="card">
        <div className="location-info">
          <div className="address">Av. Corrientes 2330</div>
          <div>Piso 9° · Oficina 904</div>
          <div>Entre Pasteur y Azcuénaga</div>
          <div style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
            Ciudad Autónoma de Buenos Aires
          </div>
        </div>

        <div style={{ marginTop: '24px', fontSize: '15px' }}>
          <strong style={{ color: 'var(--accent-green)' }}>Tel. y WhatsApp:</strong>{' '}
          (011) 4954-3444 &nbsp;·&nbsp; Líneas Rotativas
        </div>
        <div style={{ fontSize: '15px', marginTop: '6px', color: 'var(--accent-yellow)' }}>
          Horario: Lunes a Viernes de 10:30 a 19:00 Hs.
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Ubicación Copyrio"
          src="https://maps.google.com/maps?q=Av.+Corrientes+2330,+Buenos+Aires,+Argentina&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
