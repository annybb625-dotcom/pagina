import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw, Download, Maximize2, Sparkles } from 'lucide-react';

interface SlideLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string | null;
}

export const SlideLightboxModal: React.FC<SlideLightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  imageSrc,
}) => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  if (!isOpen || !imageSrc) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => {
    setZoom(1);
    setRotation(0);
  };
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `${title.toLowerCase().replace(/\s+/g, '_')}.jpeg`;
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-3 sm:p-5 overflow-hidden animate-in fade-in duration-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white pb-3 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
            HD
          </div>
          <div>
            <h3 className="font-black text-sm sm:text-base text-white truncate max-w-sm sm:max-w-xl">
              {title}
            </h3>
            <span className="text-[11px] text-purple-300">
              Vista en Alta Resolución • Zoom: {Math.round(zoom * 100)}%
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Alejar (Zoom Out)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetZoom}
            className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
            title="Restablecer tamaño"
          >
            100%
          </button>
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Acercar (Zoom In)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleRotate}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Girar 90°"
          >
            <RotateCw className="w-4 h-4" />
          </button>
          <button
            onClick={handleDownload}
            className="p-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-colors shadow-xs"
            title="Descargar lámina"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white transition-colors ml-2"
            title="Cerrar visor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image Canvas */}
      <div className="flex-1 flex items-center justify-center overflow-auto p-4 select-none cursor-grab active:cursor-grabbing">
        <div
          className="transition-transform duration-200 flex items-center justify-center max-w-full max-h-full"
          style={{
            transform: `scale(${zoom}) rotate(${rotation}deg)`,
          }}
        >
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[82vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/20"
          />
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="pt-2 text-center text-xs text-purple-300/80 shrink-0 border-t border-white/10 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Puedes hacer clic en los controles de zoom para examinar todos los detalles del afiche</span>
      </div>
    </div>
  );
};
