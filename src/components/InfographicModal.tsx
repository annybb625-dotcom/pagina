import React from 'react';
import { TopicSection } from '../types';
import { InfographicDiagram } from './InfographicDiagram';
import { X, ChevronLeft, ChevronRight, Printer, Sparkles, Heart, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';

interface InfographicModalProps {
  topic: TopicSection | null;
  onClose: () => void;
  onPrevTopic?: () => void;
  onNextTopic?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  imageSrc?: string;
  onPreviewImage?: (title: string, dataUrl: string) => void;
}

export const InfographicModal: React.FC<InfographicModalProps> = ({
  topic,
  onClose,
  onPrevTopic,
  onNextTopic,
  hasPrev,
  hasNext,
  imageSrc,
  onPreviewImage,
}) => {
  if (!topic) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-purple-950/70 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-white dark:bg-purple-950 rounded-3xl shadow-2xl border-2 border-purple-300 dark:border-purple-700 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-purple-100 dark:bg-purple-900 border-b border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-black bg-purple-600 text-white shadow-xs">
              Tema #{topic.topicNumber}
            </span>
            <span className="text-xs font-bold text-purple-800 dark:text-purple-200 hidden sm:inline">
              Actividad {topic.activityNumber} • {topic.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {hasPrev && onPrevTopic && (
              <button
                onClick={onPrevTopic}
                className="p-1.5 rounded-lg bg-white dark:bg-purple-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 text-xs font-bold flex items-center gap-1"
                title="Tema anterior"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden md:inline">Anterior</span>
              </button>
            )}
            {hasNext && onNextTopic && (
              <button
                onClick={onNextTopic}
                className="p-1.5 rounded-lg bg-white dark:bg-purple-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 text-xs font-bold flex items-center gap-1"
                title="Siguiente tema"
              >
                <span className="hidden md:inline">Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-white dark:bg-purple-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 text-xs"
              title="Imprimir / Exportar Infografía"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800"
              title="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Infographic Canvas matching the poster layout */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 bg-gradient-to-b from-purple-50 via-white to-purple-50 dark:from-purple-950/60 dark:via-purple-950 dark:to-purple-950/80">
          {/* Poster Top Banner with BTS & BT21 header */}
          <div className="relative rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-indigo-700 text-white shadow-lg text-center overflow-hidden border border-purple-400">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-1.5 text-xs font-black tracking-widest uppercase bg-black/20 px-3 py-1 rounded-full backdrop-blur-xs">
                <span>BTS</span>
                <span>💜</span>
                <span>ARMY</span>
              </div>
              <div className="text-xs font-bold text-purple-200 italic">
                Together we are stronger • Small steps, Big dreams
              </div>
              <div className="text-xs font-black tracking-widest uppercase bg-black/20 px-3 py-1 rounded-full backdrop-blur-xs">
                BT21
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white drop-shadow-md">
              {topic.title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-purple-100 mt-1 max-w-2xl mx-auto flex items-center justify-center gap-1">
              <Heart className="w-4 h-4 fill-current text-pink-300 inline" />
              <span>{topic.subtitle}</span>
            </p>

            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Personajes asociados: {topic.bt21Character}</span>
            </div>
          </div>

          {/* Diapositiva / Lámina Image Banner if available */}
          {(imageSrc || topic.uploadedImageUrl || topic.sgbdData) && (
            <div className="bg-purple-950/80 p-4 sm:p-5 rounded-3xl border-2 border-purple-400/60 shadow-xl space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-purple-200 px-3 py-1 rounded-full bg-purple-900 border border-purple-500/40">
                    📸 Lámina: {topic.imageSlideLabel || `Lámina #${topic.topicNumber}`}
                  </span>
                  <span className="text-xs text-pink-300 font-bold bg-pink-950/80 px-2 py-0.5 rounded-full border border-pink-500/40">
                    {topic.weekNumber === 2 ? `Semana 2 • Actividad ${topic.activityNumber}` : `Semana 1 • Actividad ${topic.activityNumber}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-purple-300 font-medium font-mono">
                    {topic.sgbdData?.dbType ? `SGBD ${topic.sgbdData.dbType}` : `imagen${topic.topicNumber}.jpeg`}
                  </span>
                  {onPreviewImage && (imageSrc || topic.uploadedImageUrl) && (
                    <button
                      onClick={() => onPreviewImage(topic.title, (imageSrc || topic.uploadedImageUrl)!)}
                      className="px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-xs transition-transform active:scale-95 flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Ver en Alta Resolución</span>
                    </button>
                  )}
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-purple-500/40 bg-black/40 flex justify-center p-2">
                <img
                  src={imageSrc || topic.uploadedImageUrl || `/assets/sgbd_${topic.id.replace('w2-a2-', '')}.jpeg`}
                  alt={`Lámina ${topic.topicNumber} - ${topic.title}`}
                  referrerPolicy="no-referrer"
                  className="max-h-[50vh] object-contain rounded-xl shadow-lg cursor-pointer hover:scale-101 transition-transform"
                  onClick={() => onPreviewImage && (imageSrc || topic.uploadedImageUrl) && onPreviewImage(topic.title, (imageSrc || topic.uploadedImageUrl)!)}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          )}

          {/* SGBD Specific 5 Factors Box */}
          {topic.sgbdData && (
            <div className="bg-white dark:bg-purple-900/60 p-5 rounded-3xl border-2 border-purple-400 dark:border-purple-700 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-sm sm:text-base text-purple-950 dark:text-purple-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Análisis de los 5 Factores de Selección (SGBD)</span>
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 font-bold">
                  {topic.sgbdData.dbType}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-1">
                  <div className="font-bold text-purple-900 dark:text-purple-200">⚡ Rendimiento</div>
                  <p className="text-purple-800 dark:text-purple-300 leading-snug">{topic.sgbdData.factors.rendimiento}</p>
                </div>
                <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-1">
                  <div className="font-bold text-purple-900 dark:text-purple-200">💰 Costo</div>
                  <p className="text-purple-800 dark:text-purple-300 leading-snug">{topic.sgbdData.factors.costo}</p>
                </div>
                <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-1">
                  <div className="font-bold text-purple-900 dark:text-purple-200">📈 Escalabilidad</div>
                  <p className="text-purple-800 dark:text-purple-300 leading-snug">{topic.sgbdData.factors.escalabilidad}</p>
                </div>
                <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-1">
                  <div className="font-bold text-purple-900 dark:text-purple-200">🛡️ Soporte Técnico</div>
                  <p className="text-purple-800 dark:text-purple-300 leading-snug">{topic.sgbdData.factors.soporte}</p>
                </div>
                <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-1 sm:col-span-2 lg:col-span-2">
                  <div className="font-bold text-purple-900 dark:text-purple-200">👥 Comunidad & Ecosistema</div>
                  <p className="text-purple-800 dark:text-purple-300 leading-snug">{topic.sgbdData.factors.comunidad}</p>
                </div>
              </div>

              {/* Code Snippet Box */}
              {topic.sgbdData.queryCode && (
                <div className="p-3.5 rounded-2xl bg-black/90 border border-purple-700 font-mono text-xs space-y-2">
                  <div className="text-[11px] text-purple-300 font-bold flex items-center justify-between">
                    <span>💻 Consulta Representativa ({topic.sgbdData.queryCode.language.toUpperCase()})</span>
                    <span className="text-[10px] text-purple-400">BTS ARMY Store</span>
                  </div>
                  <pre className="text-emerald-300 text-[11px] overflow-x-auto leading-relaxed p-2 bg-black/50 rounded-xl border border-purple-900/60">
                    {topic.sgbdData.queryCode.code}
                  </pre>
                  <p className="text-[11px] text-purple-200/90 italic">
                    {topic.sgbdData.queryCode.explanation}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Grid of Infographic Poster Sections (1 to 6) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1. ¿Qué es? */}
            <div className="bg-white dark:bg-purple-900/60 p-4 sm:p-5 rounded-2xl border-2 border-purple-200 dark:border-purple-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-black text-xs flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-base text-purple-950 dark:text-purple-100">
                    {topic.whatIsIt.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-purple-900 dark:text-purple-200 leading-relaxed">
                  {topic.whatIsIt.description}
                </p>
              </div>

              {/* Character speech bubble */}
              <div className="mt-4 p-3 rounded-2xl bg-purple-100/80 dark:bg-purple-800/60 border border-purple-200 dark:border-purple-700 text-xs text-purple-800 dark:text-purple-200 italic flex items-start gap-2">
                <span className="text-base">💭</span>
                <div>
                  <span className="font-bold block not-italic text-purple-900 dark:text-purple-100 text-[11px]">
                    Mensaje de {topic.bt21Character}:
                  </span>
                  {topic.characterQuote}
                </div>
              </div>
            </div>

            {/* 2. Esquema / Diagram */}
            <div className="bg-white dark:bg-purple-900/60 p-4 sm:p-5 rounded-2xl border-2 border-purple-200 dark:border-purple-800 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center">
                  2
                </span>
                <h3 className="font-extrabold text-sm sm:text-base text-indigo-950 dark:text-indigo-100">
                  {topic.scheme.title}
                </h3>
              </div>
              <InfographicDiagram topic={topic} />
            </div>

            {/* 3 & 4. Key Points (Ventajas, Desventajas, Componentes) */}
            {topic.keyPoints.map((kp, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-purple-900/60 p-4 sm:p-5 rounded-2xl border-2 border-purple-200 dark:border-purple-800 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-700 text-white font-black text-xs flex items-center justify-center">
                      {idx + 3}
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base text-purple-950 dark:text-purple-100">
                      {kp.title}
                    </h3>
                  </div>
                  {kp.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        kp.type === 'disadvantages'
                          ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                          : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                      }`}
                    >
                      {kp.badge}
                    </span>
                  )}
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-purple-900 dark:text-purple-200">
                  {kp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {kp.type === 'disadvantages' ? (
                        <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* 5. Ejemplos del Mundo Real */}
            <div className="bg-white dark:bg-purple-900/60 p-4 sm:p-5 rounded-2xl border-2 border-purple-200 dark:border-purple-800 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-fuchsia-600 text-white font-black text-xs flex items-center justify-center">
                  5
                </span>
                <h3 className="font-extrabold text-sm sm:text-base text-fuchsia-950 dark:text-fuchsia-100">
                  Ejemplos Prácticos
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-purple-900 dark:text-purple-200">
                {topic.examples.map((ex, i) => (
                  <li key={i} className="p-2 rounded-xl bg-purple-50 dark:bg-purple-900/40 border border-purple-100 dark:border-purple-800 flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. En resumen & Conclusión */}
            <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100 dark:from-purple-900/80 dark:to-indigo-950/80 p-4 sm:p-5 rounded-2xl border-2 border-purple-300 dark:border-purple-700 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-purple-800 text-white font-black text-xs flex items-center justify-center">
                    6
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-base text-purple-950 dark:text-purple-100">
                    En Resumen
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-purple-900 dark:text-purple-200 leading-relaxed font-medium">
                  {topic.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-200 dark:border-purple-700">
                <blockquote className="text-xs text-purple-800 dark:text-purple-200 font-bold italic">
                  "{topic.conclusionQuote}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Bottom BTS Ribbon */}
          <div className="rounded-2xl p-3 bg-purple-200/70 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-700 flex flex-wrap items-center justify-between text-xs text-purple-900 dark:text-purple-200 font-bold">
            <span>BTS × BT21 • Infografía Oficial Semana 1</span>
            <span>La tecnología también nos une 💜 Borahae</span>
          </div>
        </div>
      </div>
    </div>
  );
};
