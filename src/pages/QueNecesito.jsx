export default function QueNecesito() {
  const items = [
    {
      label: 'Tipo de comprobante',
      text: 'Facturas "A" · "B" · "C" · "E" · "M" — Recibos "A" · "B" · "C" · "E" · "M" — Nota de Crédito / Nota de Débito "A" · "B" · "C" · "E" · "M" · "R" — Remitos "R" — Recibos "X" (no requiere autorización previa).',
    },
    {
      label: 'Número de CUIT',
      text: 'O el Formulario 160/162 de inscripción.',
    },
    {
      label: 'Ingresos Brutos',
      text: 'Si sos profesional estás exento. Si no sos profesional, deberás inscribirte en Ingresos Brutos.',
    },
    {
      label: 'Fecha de inicio de actividades',
      text: 'Es obligatoria para la impresión de comprobantes fiscales.',
    },
    {
      label: 'Primera vez que hacés facturas',
      highlight: true,
      text: 'Necesitás descargar dos aplicativos desde la página de AFIP (con tu CUIT y Clave Fiscal):',
      sub: [
        'Administración de Punto de Venta y Domicilios',
        'Autorización de Impresión de Comprobantes — Tener en cuenta que tenés 10 días corridos para validar el trabajo, de lo contrario la autorización se da de baja automáticamente y tendrás que solicitarla nuevamente.',
      ],
    },
  ]

  return (
    <div>
      <div className="page-header">
        <h1>¿Qué necesito para hacer Facturas?</h1>
        <p className="subtitle">Requisitos para tipos "A" · "B" · "C" · "E" · "M"</p>
      </div>

      <div className="requisitos-list">
        {items.map((item, i) => (
          <div className="requisito-item" key={i}>
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <strong style={{ color: item.highlight ? 'var(--accent-red)' : 'var(--accent-green)', display: 'block', marginBottom: '4px' }}>
                {item.label}
              </strong>
              {item.text}
              {item.sub && (
                <ul style={{ marginTop: '8px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {item.sub.map((s, j) => (
                    <li key={j} style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                      <span className="highlight">{j === 0 ? '1. ' : '2. '}</span>{s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
          ¿Tenés dudas? Consultanos sin compromiso.
        </p>
        <a
          href="mailto:copyrio@copyrio.ar?subject=Consulta+Facturas"
          className="presupuesto-cta"
        >
          ✉ Consultanos
        </a>
      </div>
    </div>
  )
}
