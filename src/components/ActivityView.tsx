import React, { useState } from 'react';
import { TopicSection } from '../types';
import { InfographicDiagram } from './InfographicDiagram';
import { WeekActivityHeader } from './WeekActivityHeader';
import {
  Network,
  Database,
  Maximize2,
  Edit3,
  CheckCircle2,
  Sparkles,
  Heart,
  Layers,
  ArrowRight,
  FolderOpen,
  Upload,
  Image as ImageIcon,
  Eye,
  Camera,
  Check,
} from 'lucide-react';

interface ActivityViewProps {
  topics: TopicSection[];
  onOpenInfographic: (topic: TopicSection) => void;
  isEditing: boolean;
  onEditTopic: (topic: TopicSection) => void;
  onSwitchToWeek2?: () => void;
  imagesMap?: Record<string, string>;
  onSaveImage?: (key: string, dataUrl: string) => void;
  onOpenFolderManager?: (folderId?: 's1_a1' | 's1_a2') => void;
  onPreviewImage?: (title: string, dataUrl: string) => void;
}

export const ActivityView: React.FC<ActivityViewProps> = ({
  topics,
  onOpenInfographic,
  isEditing,
  onEditTopic,
  onSwitchToWeek2,
  imagesMap = {},
  onSaveImage,
  onOpenFolderManager,
  onPreviewImage,
}) => {
  const [selectedActivityFilter, setSelectedActivityFilter] = useState<'all' | 1 | 2>('all');

  const act1Topics = topics.filter((t) => t.activityNumber === 1);
  const act2Topics = topics.filter((t) => t.activityNumber === 2);

  const getSlideKey = (topic: TopicSection) => {
    return topic.activityNumber === 1 ? `s1_a1_${topic.topicNumber}` : `s1_a2_${topic.topicNumber}`;
  };

  const countLoadedAct1 = act1Topics.filter((t) => Boolean(imagesMap[getSlideKey(t)])).length;
  const countLoadedAct2 = act2Topics.filter((t) => Boolean(imagesMap[getSlideKey(t)])).length;

  return (
    <div className="space-y-8">
      {/* Header unificado e igualitario de Semana 1 */}
      <WeekActivityHeader
        weekNumber={1}
        unitTitle="Unidad I • Fundamentos y Arquitecturas"
        weekTitle="Arquitecturas y Fundamentos de Base de Datos"
        weekSubtitle="Esta semana se divide formalmente en dos grandes actividades estructuradas con 9 infografías temáticas y vinculación con tus fotos de afiches."
        btsQuote="Together we are stronger • Small steps, Big dreams"
        act1={{
          number: 1,
          title: 'Modelos de Arquitectura de Sistemas (Temas 1 al 4)',
          shortTitle: 'Arquitecturas de BD',
          description: '1. Centralizada • 2. Cliente-Servidor • 3. Distribuida • 4. En la Nube con análisis técnico.',
          topicCount: act1Topics.length,
          loadedCount: countLoadedAct1,
          folderId: 's1_a1',
          tag: '4 Láminas • RM, Jin, Suga, J-Hope',
        }}
        act2={{
          number: 2,
          title: 'Fundamentos, Evolución y Mercado (Temas 5 al 9)',
          shortTitle: 'Fundamentos y Conceptos',
          description: '5. Características BD • 6. Nodos Distribuidos • 7. Evolución Histórica • 8. Mercado Actual • 9. Impactos.',
          topicCount: act2Topics.length,
          loadedCount: countLoadedAct2,
          folderId: 's1_a2',
          tag: '5 Láminas • Jimin, V, Jungkook, ARMY',
        }}
        currentSubActivity={selectedActivityFilter}
        onSelectSubActivity={(sub) => setSelectedActivityFilter(sub)}
        onOpenFolderManager={(fid) => onOpenFolderManager && onOpenFolderManager(fid as 's1_a1' | 's1_a2')}
        onSwitchWeek={(wNum) => {
          if (wNum === 2 && onSwitchToWeek2) onSwitchToWeek2();
        }}
      />

      {/* Section 1: Actividad 1 - Del 1 al 4 (if filter matches) */}
      {(selectedActivityFilter === 'all' || selectedActivityFilter === 1) && (
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-purple-200 dark:border-purple-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-2xl bg-purple-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                A1
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-purple-950 dark:text-purple-100">
                  Primera Actividad: Modelos de Arquitectura (Temas 1 al 4)
                </h3>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  Arquitectura Centralizada, Cliente-Servidor, Distribuida y en la Nube
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                {countLoadedAct1} de 4 láminas cargadas
              </span>

              {onOpenFolderManager && (
                <button
                  onClick={() => onOpenFolderManager('s1_a1')}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-amber-300" />
                  <span>Cargar Carpeta A1</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {act1Topics.map((topic) => {
              const slideKey = getSlideKey(topic);
              const imageSrc = imagesMap[slideKey] || (topic.topicNumber === 4 ? '/assets/imagen4.jpeg' : undefined);
              return (
                <Week1TopicCard
                  key={topic.id}
                  topic={topic}
                  imageSrc={imageSrc}
                  slideKey={slideKey}
                  onOpenInfographic={onOpenInfographic}
                  isEditing={isEditing}
                  onEditTopic={onEditTopic}
                  onSaveImage={onSaveImage}
                  onPreviewImage={onPreviewImage}
                />
              );
            })}
          </div>
        </section>
      )}

      {/* Section 2: Actividad 2 - Del 5 al 9 (if filter matches) */}
      {(selectedActivityFilter === 'all' || selectedActivityFilter === 2) && (
        <section className="space-y-4 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-indigo-200 dark:border-indigo-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-2xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                A2
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-indigo-950 dark:text-indigo-100">
                  Segunda Actividad: Fundamentos de BD, Mercado e Impactos (Temas 5 al 9)
                </h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400">
                  Características, Nodos Distribuidos, Evolución Histórica, Mercado e Impacto Organizacional
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                {countLoadedAct2} de 5 láminas cargadas
              </span>

              {onOpenFolderManager && (
                <button
                  onClick={() => onOpenFolderManager('s1_a2')}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-amber-300" />
                  <span>Cargar Carpeta A2</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {act2Topics.map((topic) => {
              const slideKey = getSlideKey(topic);
              // Fallback to default /assets/imagen5.jpeg etc. if exists
              const defaultAsset = `/assets/imagen${topic.topicNumber}.jpeg`;
              const imageSrc = imagesMap[slideKey] || defaultAsset;
              return (
                <Week1TopicCard
                  key={topic.id}
                  topic={topic}
                  imageSrc={imageSrc}
                  slideKey={slideKey}
                  onOpenInfographic={onOpenInfographic}
                  isEditing={isEditing}
                  onEditTopic={onEditTopic}
                  onSaveImage={onSaveImage}
                  onPreviewImage={onPreviewImage}
                />
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

interface Week1TopicCardProps {
  topic: TopicSection;
  imageSrc?: string;
  slideKey: string;
  onOpenInfographic: (topic: TopicSection) => void;
  isEditing: boolean;
  onEditTopic: (topic: TopicSection) => void;
  onSaveImage?: (key: string, dataUrl: string) => void;
  onPreviewImage?: (title: string, dataUrl: string) => void;
}

const Week1TopicCard: React.FC<Week1TopicCardProps> = ({
  topic,
  imageSrc,
  slideKey,
  onOpenInfographic,
  isEditing,
  onEditTopic,
  onSaveImage,
  onPreviewImage,
}) => {
  const [displayMode, setDisplayMode] = useState<'poster' | 'interactive'>('poster');
  const [imageError, setImageError] = useState(false);

  const hasValidImage = Boolean(imageSrc) && !imageError;

  const handleCardUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onSaveImage) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        onSaveImage(slideKey, dataUrl);
        setImageError(false);
        setDisplayMode('poster');
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`rounded-3xl p-5 sm:p-6 bg-white dark:bg-purple-950/70 border-2 transition-all shadow-md hover:shadow-xl flex flex-col justify-between ${
        topic.activityNumber === 1
          ? 'border-purple-200 dark:border-purple-800 hover:border-purple-400'
          : 'border-indigo-200 dark:border-indigo-800 hover:border-indigo-400'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-7 h-7 rounded-xl bg-purple-700 text-white font-black text-xs flex items-center justify-center shadow-xs">
              #{topic.topicNumber}
            </span>
            <span className="text-[11px] font-bold text-purple-600 dark:text-purple-300">
              Actividad {topic.activityNumber} • {topic.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-700">
              {topic.bt21Character}
            </span>
            {isEditing && (
              <button
                onClick={() => onEditTopic(topic)}
                className="p-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 dark:bg-amber-950 dark:text-amber-200 text-xs"
                title="Editar este tema"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Title and Subtitle */}
        <h4 className="text-lg sm:text-xl font-black text-purple-950 dark:text-purple-100 mb-1">
          {topic.title}
        </h4>
        <p className="text-xs font-semibold text-purple-600 dark:text-purple-300 mb-3 flex items-center gap-1">
          <Heart className="w-3 h-3 fill-current text-pink-400" />
          <span>{topic.subtitle}</span>
        </p>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-purple-900/90 dark:text-purple-200/90 leading-relaxed mb-4">
          {topic.summary}
        </p>

        {/* Display Mode Switcher (Afiche Fotográfico vs Esquema Digital) */}
        <div className="flex items-center justify-between mb-3 bg-purple-50 dark:bg-purple-900/40 p-1.5 rounded-xl border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setDisplayMode('poster')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                displayMode === 'poster'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Afiche / Foto</span>
            </button>
            <button
              onClick={() => setDisplayMode('interactive')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                displayMode === 'interactive'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Esquema Digital</span>
            </button>
          </div>

          {/* Quick upload trigger on card */}
          {onSaveImage && (
            <label className="cursor-pointer px-2 py-1 rounded-lg bg-white dark:bg-purple-800 text-purple-700 dark:text-purple-200 hover:bg-purple-100 text-[11px] font-bold flex items-center gap-1 border border-purple-200 dark:border-purple-700">
              <Camera className="w-3 h-3 text-purple-500" />
              <span>{hasValidImage ? 'Cambiar' : 'Subir foto'}</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleCardUpload}
              />
            </label>
          )}
        </div>

        {/* Visual Content: Poster or Interactive Diagram */}
        <div className="mb-4">
          {displayMode === 'poster' ? (
            <div className="relative rounded-2xl overflow-hidden bg-purple-100 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-800 aspect-video flex items-center justify-center group shadow-inner">
              {hasValidImage ? (
                <>
                  <img
                    src={imageSrc}
                    alt={topic.title}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-102"
                    onClick={() => onPreviewImage && onPreviewImage(topic.title, imageSrc!)}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    {onPreviewImage && (
                      <button
                        onClick={() => onPreviewImage(topic.title, imageSrc!)}
                        className="px-3 py-1.5 rounded-xl bg-white text-purple-900 font-bold text-xs flex items-center gap-1 shadow-md hover:scale-105 transition-transform"
                      >
                        <Eye className="w-3.5 h-3.5 text-purple-600" />
                        <span>Ver Afiche Completo</span>
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center p-4 space-y-2">
                  <ImageIcon className="w-10 h-10 text-purple-400 mx-auto opacity-70" />
                  <p className="text-xs font-bold text-purple-800 dark:text-purple-200">
                    Lámina {topic.topicNumber}: {topic.title}
                  </p>
                  <p className="text-[11px] text-purple-500 dark:text-purple-400">
                    Sube la foto correspondiente desde tu carpeta o cárgala aquí
                  </p>
                  {onSaveImage && (
                    <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-xs transition-transform active:scale-95">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Cargar foto de este tema</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleCardUpload}
                      />
                    </label>
                  )}
                </div>
              )}
            </div>
          ) : (
            <InfographicDiagram topic={topic} compact={true} />
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-3 border-t border-purple-100 dark:border-purple-800 flex items-center justify-between gap-2">
        <span className="text-[11px] text-purple-500 dark:text-purple-400 italic truncate max-w-[220px]">
          "{topic.characterQuote}"
        </span>

        <button
          onClick={() => onOpenInfographic(topic)}
          className="py-2 px-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 shrink-0 active:scale-98"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Ver Infografía Completa</span>
        </button>
      </div>
    </div>
  );
};
