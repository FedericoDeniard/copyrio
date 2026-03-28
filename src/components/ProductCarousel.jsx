import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import GlowCard from './GlowCard'
import ImageModal from './ImageModal'

export default function ProductCarousel({ title, items }) {
  const scrollContainerRef = useRef(null)

  const [selectedItem, setSelectedItem] = useState(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  return (
    <div className="mb-16">
      {/* Lightbox Modal */}
      <ImageModal 
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        image={selectedItem?.image}
        title={selectedItem?.title}
        subtitle={selectedItem?.subtitle}
      />
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display tracking-tight text-xl font-semibold text-foreground">
          {title}
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={scrollLeft}
            className="p-2 rounded-full border border-accents-2 text-accents-5 hover:text-foreground hover:border-accents-3 transition-colors bg-accents-1/30"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 rounded-full border border-accents-2 text-accents-5 hover:text-foreground hover:border-accents-3 transition-colors bg-accents-1/30"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <GlowCard 
            key={index} 
            className="flex-none w-[280px] sm:w-[320px] snap-start group/product cursor-pointer h-full"
            onClick={() => handleItemClick(item)}
          >
            <div className="flex flex-col h-full rounded-md overflow-hidden bg-background">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-accents-1 flex items-center justify-center p-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-sm filter brightness-90 group-hover/product:brightness-100 transition-all duration-300 group-hover/product:scale-105"
                  loading="lazy"
                />
                
                {/* Maximize Indicator Overlay */}
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover/product:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-background/40 backdrop-blur-md border border-accents-2 flex items-center justify-center text-foreground transform scale-75 group-hover/product:scale-100 transition-transform">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-5 flex-grow border-t border-accents-2">
                <h4 className="font-semibold text-foreground mb-1 group-hover/product:text-foreground transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-accents-5 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  )
}
