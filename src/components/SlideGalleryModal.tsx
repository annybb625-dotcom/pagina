import React, { useState } from 'react';
import { TopicSection } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Upload,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sparkles,
  Layers,
  Image as ImageIcon,
  CheckCircle2,
  Trash2,
} from 'lucide-react';
import { InfographicDiagram } from './InfographicDiagram';

interface SlideGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  topics: TopicSection[];
  initialSlideIndex?: number;
  uploadedImages: Record<number, string>;
  onUploadImage: (slideNumber: number, dataUrl: string) => void;
  onRemoveImage: (slideNumber: number) => void;
  onOpenTopicModal: (topic: TopicSection) => void;
}

export const SlideGalleryModal: React.FC<SlideGalleryModalProps> = ({
  isOpen,
  onClose,
  topics,
  initialSlideIndex = 0,
  uploadedImages,
  onUploadImage,
  onRemoveImage,
  onOpenTopicModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlideIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [viewMode, setViewMode] = useState<'poster' | 'uploaded'>('uploaded');

  if (!isOpen || topics.length === 0) return null;

  const currentTopic = topics[currentIndex] || topics[0];
  const slideNum = currentTopic.topicNumber;
  const slideFileName = `imagen${slideNum}.jpeg`;
  const imageSource = uploadedImages[slideNum] || currentTopic.uploadedImageUrl || `/assets/${slideFileName}`;
  const hasUploaded = Boolean(uploadedImages[slideNum]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % topics.length);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + topics.length) % topics.length);
    setZoomLevel(1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        onUploadImage(slideNum, dataUrl);
        setViewMode('uploaded');
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      id="slide-gallery-modal-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 overflow-hidden animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white pb-3 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-600/80 border border-purple-400 flex items-center justify-center font-black text-sm">
            {slideNum}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-300 border border-purple-400/40">
                {slideFileName} • Lámina {slideNum} de {topics.length}
              </span>
              {hasUploaded && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Imagen cargada
                </span>
              )}
            </div>
            <h3 className="font-black text-sm sm:text-base text-white truncate max-w-md sm:max-w-xl">
              {currentTopic.title}
            </h3>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Toggle between rendered poster and slide photo */}
          <div className="flex items-center bg-white/10 rounded-xl p-0.5 border border-white/20 text-xs">
            <button
              onClick={() => setViewMode('uploaded')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                viewMode === 'uploaded' ? 'bg-purple-600 text-white shadow-sm' : 'text-purple-200 hover:text-white'
              }`}
            >
              Diapositiva ({slideFileName})
            </button>
            <button
              onClick={() => setViewMode('poster')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                viewMode === 'poster' ? 'bg-purple-600 text-white shadow-sm' : 'text-purple-200 hover:text-white'
              }`}
            >
              Póster Interactivo
            </button>
          </div>

          {/* Upload Button */}
          <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md">
            <Upload className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Subir mi {slideFileName}</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {/* Remove custom image */}
          {hasUploaded && (
            <button
              onClick={() => onRemoveImage(slideNum)}
              title="Restaurar a imagen por defecto"
              className="p-1.5 rounded-xl bg-red-600/30 hover:bg-red-600/60 text-red-200 border border-red-500/40 text-xs"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Open detailed topic modal */}
          <button
            onClick={() => onOpenTopicModal(currentTopic)}
            className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold flex items-center gap-1.5 transition-all border border-white/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span className="hidden md:inline">Ver Infografía Completa</span>
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all ml-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Viewer Canvas */}
      <div className="relative flex-1 my-3 flex items-center justify-center overflow-auto rounded-2xl bg-purple-950/40 border border-purple-900/60 p-2 sm:p-4">
        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          title="Lámina anterior"
          className="absolute left-2 sm:left-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-purple-600 text-white transition-all border border-white/20 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          title="Lámina siguiente"
          className="absolute right-2 sm:right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-purple-600 text-white transition-all border border-white/20 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Area */}
        <div
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
          className="transition-transform duration-150 max-w-4xl w-full"
        >
          {viewMode === 'uploaded' ? (
            <div className="flex flex-col items-center">
              <img
                src={imageSource}
                alt={`Lámina ${slideNum} - ${slideFileName}`}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] object-contain rounded-xl shadow-2xl border-2 border-purple-400"
                onError={(e) => {
                  // If physical image fails, switch back to interactive poster
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  setViewMode('poster');
                }}
              />
              <div className="mt-2 text-xs text-purple-300 font-mono flex items-center gap-2">
                <span>Archivo: {slideFileName} • Lámina {slideNum} de 8</span>
                {hasUploaded && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px]">
                    Personalizada por ti
                  </span>
                )}
              </div>
            </div>
          ) : (
            /* Rendered Academic Poster */
            <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 p-5 sm:p-7 rounded-2xl border-2 border-purple-500/60 shadow-2xl text-white">
              {/* Slide Header */}
              <div className="flex items-center justify-between border-b border-purple-700/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-purple-600 text-white font-mono text-xs font-black">
                    LÁMINA {slideNum} / 8
                  </span>
                  <span className="text-xs text-purple-300 font-mono">
                    [{slideFileName}]
                  </span>
                </div>
                <div className="text-xs text-purple-300 font-medium">
                  {currentTopic.bt21Character} • Base de Datos I (UPLA)
                </div>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 mb-1">
                {currentTopic.title}
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/90 mb-4">
                {currentTopic.subtitle}
              </p>

              {/* Diagram Presentation */}
              <div className="my-4 bg-white/5 p-3 rounded-2xl border border-white/10">
                <InfographicDiagram topic={currentTopic} />
              </div>

              {/* Summary & Key points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
                <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-700/40">
                  <h4 className="font-black text-purple-300 mb-1">Concepto Clave</h4>
                  <p className="text-purple-100/90 leading-relaxed text-[11px]">
                    {currentTopic.summary}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-700/40">
                  <h4 className="font-black text-purple-300 mb-1">Frase Borahae ✨</h4>
                  <p className="italic text-purple-200 text-[11px]">
                    "{currentTopic.characterQuote}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Thumbnail Strip & Controls */}
      <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
        {/* Zoom controls */}
        <div className="flex items-center gap-1.5 text-white text-xs">
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.15))}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            title="Reducir zoom"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="font-mono text-[11px] px-1">{Math.round(zoomLevel * 100)}%</span>
          <button
            onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.15))}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            title="Aumentar zoom"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all ml-1"
            title="Restablecer tamaño"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 8 Thumbnail buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
          {topics.map((t, index) => {
            const isSelected = index === currentIndex;
            const hasImg = Boolean(uploadedImages[t.topicNumber]);
            return (
              <button
                key={t.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setZoomLevel(1);
                }}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 border ${
                  isSelected
                    ? 'bg-purple-600 text-white border-purple-400 ring-2 ring-purple-300'
                    : 'bg-white/10 text-purple-200 border-white/10 hover:bg-white/20'
                }`}
              >
                <span>Lámina {t.topicNumber}</span>
                {hasImg && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
              </button>
            );
          })}
        </div>

        {/* Status */}
        <div className="text-[11px] text-purple-300 font-mono">
          Semana 2 • Actividad 1
        </div>
      </div>
    </div>
  );
};
