const links = [
  {
    title: 'AFIP – Portal de contribuyentes',
    url: 'https://auth.afip.gob.ar/contribuyente_/login.xhtml',
    desc: 'Acceso al portal de la AFIP para gestionar trámites fiscales.',
  },
  {
    title: 'Constancia de Inscripción – CUIT',
    url: 'https://seti.afip.gob.ar/padron-puc-constancia-internet/jsp/Constancia.jsp',
    desc: 'Descargá tu constancia de inscripción con CUIT.',
  },
  {
    title: 'AGIP – Dirección General de Rentas',
    url: 'https://www.agip.gob.ar/',
    desc: 'Página oficial de la AGIP de la Ciudad de Buenos Aires.',
  },
  {
    title: 'Constancia de Ingresos Brutos',
    url: 'https://lb.agip.gob.ar/ConstanciaIB/',
    desc: 'Obtené tu constancia de inscripción en Ingresos Brutos.',
  },
]

export default function OtrosLinks() {
  return (
    <div>
      <div className="page-header">
        <h1>Links Útiles</h1>
        <p className="subtitle">Recursos y organismos para gestiones fiscales</p>
      </div>

      <div className="links-list">
        {links.map((link, i) => (
          <div className="link-card" key={i}>
            <h3>{link.title}</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '10px' }}>{link.desc}</p>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.url}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
