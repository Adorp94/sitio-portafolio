
import { useRef } from "react"
import Navbar from '../components/Navbar'
import PixelateSvgFilter from '../components/PixelateSvgFilter'
import { useMousePosition } from '../hooks/useMousePosition'

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition(containerRef)
  const pixelSize = Math.min(Math.max(mousePosition.x / 30, 1), 64)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 px-24">
        <div className="max-w-[1400px] mx-auto min-h-[calc(100vh-8rem)] flex items-center justify-center" ref={containerRef}>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <PixelateSvgFilter id="pixelate-filter" size={pixelSize} crossLayers />
            <div
              className="w-full h-full"
              style={{ filter: "url(#pixelate-filter)" }}
            >
              <video
                src="https://cdn.cosmos.so/96ae0b34-289d-489d-94a1-c68925ddd3a9.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                loop
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
