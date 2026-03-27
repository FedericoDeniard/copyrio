/**
 * GlowCard — Vercel-style glowing border spotlight component.
 * The border nearest to the mouse cursor lights up dynamically.
 * Usage: <GlowCard className="..." style={{...}}>...</GlowCard>
 */
export default function GlowCard({ children, className = '', as: Tag = 'div', ...props }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <Tag
      onMouseMove={handleMouseMove}
      className={`relative rounded-lg p-[1px] overflow-hidden group/glow bg-accents-2 ${className}`}
      {...props}
    >
      {/* Dynamic border glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover/glow:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.5), transparent 40%)`
        }}
      />
      {/* Inner content (solid black bg) */}
      <div className="relative z-10 h-full rounded-[7px] bg-background">
        {children}
      </div>
    </Tag>
  )
}
