import { useEffect } from 'react'
import { X, Mail, Receipt } from 'lucide-react'
import { CONTACT_EMAIL } from '../config/constants'
import GlowCard from './GlowCard'

export default function ImageModal({ isOpen, onClose, image, title, subtitle }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300 overflow-y-auto"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-background/90 backdrop-blur-md transition-opacity" />

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 p-3 rounded-full bg-accents-2/50 text-foreground hover:bg-accents-3 transition-colors z-[110]"
        aria-label="Cerrar"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal Content - Copied exactly from ProductPage.jsx layout */}
      <div 
        className="relative z-[105] max-w-7xl w-full my-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-accents-5 font-light tracking-wide">
              {subtitle}
            </p>
          )}
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Image Card */}
          <div className="lg:col-span-8">
            <GlowCard>
              <div className="relative overflow-hidden rounded-[7px] bg-black flex justify-center items-center min-h-[400px]">
                <img 
                  src={image} 
                  alt={title} 
                  className="max-h-[600px] w-auto object-contain p-4"
                />
              </div>
            </GlowCard>
          </div>

          {/* Action Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <GlowCard>
              <div className="p-8 flex flex-col items-start">
                <div className="w-10 h-10 border border-accents-3 rounded flex items-center justify-center mb-6">
                  <Receipt className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold tracking-tight text-xl text-foreground mb-3">¿Necesitás este trabajo?</h3>
                <p className="text-accents-5 text-sm mb-8 leading-relaxed">
                  Solicitá cantidades mínimas y tiempos de entrega exactos a través de nuestro formulario de cotización.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Presupuesto%20-%20${encodeURIComponent(title)}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-foreground hover:bg-gray-200 text-background rounded-md text-sm font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Solicitar Presupuesto
                </a>
              </div>
            </GlowCard>

            <GlowCard>
              <div className="p-6 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-sm text-accents-5">Atención rápida por WhatsApp</p>
                  <p className="text-foreground font-semibold mt-0.5">011 4954-3444</p>
                </div>
              </div>
            </GlowCard>
          </div>

        </div>
      </div>
    </div>
  )
}
