import React, { useState } from 'react';
import { TopicSection, UserRole } from '../types';
import {
  Sparkles,
  Layers,
  ArrowRight,
  Maximize2,
  Upload,
  CheckCircle2,
  Edit,
  Eye,
  FileText,
  Workflow,
  Shield,
  Key,
  Link2,
  ArrowLeftRight,
  GitBranch,
  GraduationCap,
  Calendar,
  Image as ImageIcon,
} from 'lucide-react';
import { InfographicDiagram } from './InfographicDiagram';

interface Week2ActivityViewProps {
  topics: TopicSection[];
  userRole: UserRole;
  uploadedImages: Record<number, string>;
  onSelectTopic: (topic: TopicSection) => void;
  onEditTopic: (topic: TopicSection) => void;
  onOpenSlideGallery: (slideIndex?: number) => void;
  onUploadImage: (slideNumber: number, dataUrl: string) => void;
  onSwitchToWeek1: () => void;
  onSwitchToActivity2?: () => void;
  hideBanner?: boolean;
}

export const Week2ActivityView: React.FC<Week2ActivityViewProps> = ({
  topics,
  userRole,
  uploadedImages,
  onSelectTopic,
  onEditTopic,
  onOpenSlideGallery,
  onUploadImage,
  onSwitchToWeek1,
  onSwitchToActivity2,
  hideBanner = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(topics.map((t) => t.category)))];

  const filteredTopics = selectedCategory === 'all'
    ? topics
    : topics.filter((t) => t.category === selectedCategory);

  const uploadedCount = Object.keys(uploadedImages).length;

  const handleBatchUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      // Check if filename contains a number from 1 to 8 (e.g. imagen1.jpeg, 1.jpg, etc.)
      const match = file.name.match(/(\d+)/);
      let slideNum = match ? parseInt(match[1], 10) : null;
      if (slideNum && slideNum >= 1 && slideNum <= 8) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target?.result as string;
          if (dataUrl) {
            onUploadImage(slideNum, dataUrl);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleCardUpload = (slideNumber: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        onUploadImage(slideNumber, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div id="week2-activity-container" className="space-y-6">
      {/* Week 2 Hero Banner (shown if not in coordinated header view) */}
      {!hideBanner ? (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-950 to-purple-950 p-6 sm:p-8 text-white shadow-xl border border-purple-800/80">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-500/30 text-purple-200 border border-purple-400/40 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                  <Calendar className="w-3.5 h-3.5 text-purple-300" />
                  Semana 2 • Unidad I
                </span>
                <span className="px-3 py-1 rounded-full bg-fuchsia-500/30 text-fuchsia-200 border border-fuchsia-400/40 text-xs font-black">
                  1ª Actividad (8 Láminas)
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 text-xs font-bold">
                  Archivos: imagen1.jpeg al imagen8.jpeg
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100">
                Modelado Conceptual y Diagrama Entidad-Relación (MER / DER)
              </h1>

              <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed">
                Guía académica interactiva de la <strong>Primera Actividad de la Semana 2</strong>. Incluye los 8 temas fundamentales correspondientes a tus láminas (de <code>imagen1.jpeg</code> a <code>imagen8.jpeg</code>) con diagramas interactivos, explicaciones detalladas y personajes BT21.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenSlideGallery(0)}
                  className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Galería de Láminas (imagen1 a imagen8)</span>
                </button>

                {onSwitchToActivity2 && (
                  <button
                    onClick={onSwitchToActivity2}
                    className="px-4 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all border border-pink-400/50"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Ir a Actividad 2: Motores SGBD (5 Infografías)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <label className="cursor-pointer px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 border border-white/20 transition-all">
                  <Upload className="w-4 h-4 text-purple-300" />
                  <span>Cargar Fotos de Láminas</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleBatchUpload}
                  />
                </label>

                <button
                  onClick={onSwitchToWeek1}
                  className="px-3.5 py-2 rounded-xl text-purple-200 hover:text-white hover:bg-white/10 text-xs font-bold transition-all border border-purple-400/30"
                >
                  ← Volver a Semana 1 (Actividades 1 y 2)
                </button>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div className="shrink-0 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center space-y-2">
              <div className="text-3xl font-black text-amber-300">8 / 8</div>
              <div className="text-xs text-purple-200 font-bold uppercase tracking-wider">
                Láminas Completadas
              </div>
              <div className="text-[11px] text-purple-300">
                {uploadedCount} de 8 imágenes cargadas
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-400 to-pink-400 h-full rounded-full transition-all"
                  style={{ width: `${Math.max(15, (uploadedCount / 8) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-between gap-3 bg-purple-50 dark:bg-purple-950/50 p-4 rounded-3xl border-2 border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-2xl bg-purple-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
              A1
            </span>
            <div>
              <h3 className="font-black text-base text-purple-950 dark:text-purple-100">
                Actividad 1: Modelado Conceptual y Diagrama Entidad-Relación (MER / DER)
              </h3>
              <p className="text-xs text-purple-600 dark:text-purple-400">
                8 Láminas • Entidades, Atributos simples y compuestos, Cardinalidades y Diagrama Completo Tienda BTS
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenSlideGallery(0)}
              className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Ver Galería (1 al 8)</span>
            </button>
            <label className="cursor-pointer px-3.5 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-900 dark:text-purple-200 font-bold text-xs flex items-center gap-1.5 border border-purple-300 dark:border-purple-700 transition-all">
              <Upload className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Cargar Fotos</span>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleBatchUpload}
              />
            </label>
          </div>
        </div>
      )}

      {/* Categories Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-purple-950/40 p-3 rounded-2xl border border-purple-100 dark:border-purple-800 shadow-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-purple-950 dark:text-purple-200 mr-2 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-purple-600" /> Filtrar Temas:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 hover:bg-purple-100'
              }`}
            >
              {cat === 'all' ? 'Todos los 8 Temas' : cat}
            </button>
          ))}
        </div>

        <div className="text-xs text-purple-600 dark:text-purple-300 font-medium">
          Mostrando {filteredTopics.length} de {topics.length} infografías
        </div>
      </div>

      {/* Grid of 8 Topics / Slides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTopics.map((topic, index) => {
          const slideNum = topic.topicNumber;
          const slideFileName = `imagen${slideNum}.jpeg`;
          const hasImage = Boolean(uploadedImages[slideNum]);

          return (
            <div
              key={topic.id}
              className="group bg-white dark:bg-purple-950/50 rounded-3xl p-5 border border-purple-200 dark:border-purple-800/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Card Header: Slide indicator & BT21 badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-xl bg-purple-700 text-white text-xs font-black font-mono shadow-xs">
                      #{slideNum}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-mono font-bold">
                      {slideFileName}
                    </span>
                    {hasImage && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3" /> Foto subida
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-purple-500" />
                    {topic.bt21Character}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-base sm:text-lg font-black text-purple-950 dark:text-purple-100 mb-1 leading-snug group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-xs text-purple-600 dark:text-purple-300 mb-3">
                  {topic.subtitle}
                </p>

                {/* Character Quote Box */}
                <div className="p-2.5 rounded-xl bg-purple-50/80 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800/60 mb-3 text-xs italic text-purple-800 dark:text-purple-200">
                  "{topic.characterQuote}"
                </div>

                {/* Slide Image Preview */}
                <div className="relative mb-3 rounded-2xl overflow-hidden border border-purple-200 dark:border-purple-800 bg-purple-950/20 group/img">
                  <img
                    src={uploadedImages[slideNum] || topic.uploadedImageUrl || `/assets/${slideFileName}`}
                    alt={`Lámina ${slideNum} - ${slideFileName}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-44 object-cover object-center group-hover/img:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/85 via-purple-950/20 to-transparent flex items-end justify-between p-2.5">
                    <span className="text-[11px] font-mono text-purple-200 font-bold bg-purple-950/80 px-2 py-0.5 rounded-lg border border-purple-400/40">
                      {slideFileName}
                    </span>
                    <button
                      onClick={() => onOpenSlideGallery(index)}
                      className="px-2.5 py-1 rounded-lg bg-purple-600/90 hover:bg-purple-600 text-white text-[11px] font-bold flex items-center gap-1 shadow-md transition-all"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Ampliar Lámina</span>
                    </button>
                  </div>
                </div>

                {/* Diagram Preview */}
                <div className="mb-4 overflow-hidden rounded-2xl border border-purple-100 dark:border-purple-800/60">
                  <InfographicDiagram topic={topic} compact={true} />
                </div>

                {/* Summary snippet */}
                <p className="text-xs text-purple-900/80 dark:text-purple-200/80 leading-relaxed mb-4 line-clamp-2">
                  {topic.summary}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-3 border-t border-purple-100 dark:border-purple-800/60 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  {/* View Full Topic Modal */}
                  <button
                    onClick={() => onSelectTopic(topic)}
                    className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all"
                  >
                    <span>Ver Infografía</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Open Slide Gallery focused on this slide */}
                  <button
                    onClick={() => onOpenSlideGallery(index)}
                    title={`Ver Lámina ${slideNum} (${slideFileName})`}
                    className="px-3 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-900/70 hover:bg-purple-200 text-purple-800 dark:text-purple-200 font-bold text-xs flex items-center gap-1 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lámina {slideNum}</span>
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  {/* Upload button for this specific slide */}
                  <label
                    title={`Subir foto para ${slideFileName}`}
                    className="cursor-pointer p-1.5 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-800 text-purple-600 dark:text-purple-300 transition-all border border-purple-200 dark:border-purple-700"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleCardUpload(slideNum, e)}
                    />
                  </label>

                  {/* Edit Topic (Admin only) */}
                  {userRole === 'admin' && (
                    <button
                      onClick={() => onEditTopic(topic)}
                      title="Editar contenido del tema (Admin)"
                      className="p-1.5 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-800 text-purple-600 dark:text-purple-300 transition-all border border-purple-200 dark:border-purple-700"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Banner */}
      <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-center text-xs text-purple-700 dark:text-purple-300">
        💜 <strong>Cuaderno Borahae:</strong> Primera Actividad de la Semana 2 completada al 100% con 8 infografías de Modelado Conceptual MER.
      </div>
    </div>
  );
};
