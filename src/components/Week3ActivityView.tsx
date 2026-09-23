import React, { useState } from 'react';
import { TopicSection, UserRole } from '../types';
import { InfographicDiagram } from './InfographicDiagram';
import { WeekActivityHeader } from './WeekActivityHeader';
import {
  Sparkles,
  Table,
  Filter,
  Maximize2,
  FolderOpen,
  Image as ImageIcon,
  Layers,
  Camera,
  CheckCircle2,
  Heart,
  Eye,
  Edit3,
  Upload,
  ArrowRight,
  Database,
  Binary,
  Check,
} from 'lucide-react';

interface Week3ActivityViewProps {
  activity1Topics: TopicSection[];
  activity2Topics: TopicSection[];
  userRole: UserRole;
  isEditing: boolean;
  imagesMap?: Record<string, string>;
  onSelectTopic: (topic: TopicSection) => void;
  onEditTopic: (topic: TopicSection) => void;
  onSaveImage?: (key: string, dataUrl: string) => void;
  onOpenFolderManager?: (folderId?: 's3_a1' | 's3_a2') => void;
  onPreviewImage?: (title: string, dataUrl: string) => void;
  onSwitchToWeek2?: () => void;
}

export const Week3ActivityView: React.FC<Week3ActivityViewProps> = ({
  activity1Topics,
  activity2Topics,
  userRole,
  isEditing,
  imagesMap = {},
  onSelectTopic,
  onEditTopic,
  onSaveImage,
  onOpenFolderManager,
  onPreviewImage,
  onSwitchToWeek2,
}) => {
  const [selectedSubActivity, setSelectedSubActivity] = useState<'all' | 1 | 2>('all');

  const getSlideKey = (topic: TopicSection) => {
    return topic.activityNumber === 1 ? `s3_a1_${topic.topicNumber}` : `s3_a2_${topic.topicNumber}`;
  };

  const countLoadedAct1 = activity1Topics.filter((t) => Boolean(imagesMap[getSlideKey(t)])).length;
  const countLoadedAct2 = activity2Topics.filter((t) => Boolean(imagesMap[getSlideKey(t)])).length;

  return (
    <div className="space-y-8">
      {/* Header unificado e igualitario de Semana 3 */}
      <WeekActivityHeader
        weekNumber={3}
        unitTitle="Unidad II • Diseño, Implementación y Normalización"
        weekTitle="Diseño de Bases de Datos y Normalización"
        weekSubtitle="La Semana 3 comprende dos actividades académicas completas: Diseño e Implementación de BD (del modelo conceptual al modelo físico) y Descomposición en Formas Normales (1FN a 3FN/FNBC)."
        btsQuote="Permission to Design & Normalize • Clean, organized and structured data"
        act1={{
          number: 1,
          title: 'Diseño e Implementación de Bases de Datos (Del conceptual al físico)',
          shortTitle: 'Diseño e Implementación',
          description: '1. Ciclo de Vida • 2. Modelo Conceptual • 3. Modelo Lógico • 4. Modelo Físico • 5. Implementación/Pruebas • 6. Mantenimiento.',
          topicCount: activity1Topics.length,
          loadedCount: countLoadedAct1,
          folderId: 's3_a1',
          tag: '6 Láminas • RM, Jin, Suga, J-Hope, Jimin, V & JK',
        }}
        act2={{
          number: 2,
          title: 'Normalización de Bases de Datos (1FN a 3FN y Caso Práctico) (Temas 1 al 6)',
          shortTitle: 'Normalización de BD',
          description: '1. Teoría & Anomalías • 2. 1FN • 3. 2FN • 4. 3FN • 5. FNBC y Avanzadas • 6. Caso Práctico Integral.',
          topicCount: activity2Topics.length,
          loadedCount: countLoadedAct2,
          folderId: 's3_a2',
          tag: '6 Láminas • Jin, Suga, Jimin, V, Jungkook, ARMY',
        }}
        currentSubActivity={selectedSubActivity}
        onSelectSubActivity={(sub) => setSelectedSubActivity(sub)}
        onOpenFolderManager={(fid) => onOpenFolderManager && onOpenFolderManager(fid as 's3_a1' | 's3_a2')}
        onSwitchWeek={(wNum) => {
          if (wNum === 2 && onSwitchToWeek2) onSwitchToWeek2();
        }}
      />

      {/* Actividad 1: Diseño e Implementación de Bases de Datos (1 al 6) */}
      {(selectedSubActivity === 'all' || selectedSubActivity === 1) && (
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-indigo-200 dark:border-indigo-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-2xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                A1
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-indigo-950 dark:text-indigo-100">
                  Primera Actividad: Diseño e Implementación de Bases de Datos (Láminas 1 al 6)
                </h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400">
                  Del modelo conceptual al físico: ciclo de vida, modelo conceptual, lógico relacional, físico optimizado, implementación/pruebas y mantenimiento
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                {countLoadedAct1} de 6 láminas cargadas
              </span>

              {onOpenFolderManager && (
                <button
                  onClick={() => onOpenFolderManager('s3_a1')}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-amber-300" />
                  <span>Cargar Carpeta S3 A1</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activity1Topics.map((topic) => {
              const slideKey = getSlideKey(topic);
              const imageSrc = imagesMap[slideKey];
              return (
                <Week3TopicCard
                  key={topic.id}
                  topic={topic}
                  imageSrc={imageSrc}
                  slideKey={slideKey}
                  onSelectTopic={onSelectTopic}
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

      {/* Actividad 2: Normalización (1 al 6) */}
      {(selectedSubActivity === 'all' || selectedSubActivity === 2) && (
        <section className="space-y-4 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-pink-200 dark:border-pink-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                A2
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-purple-950 dark:text-purple-100">
                  Segunda Actividad: Normalización de Bases de Datos (1FN, 2FN, 3FN y Caso Práctico)
                </h3>
                <p className="text-xs text-pink-600 dark:text-pink-400">
                  Eliminación de anomalías, dependencias funcionales, 1FN, 2FN, 3FN, FNBC y caso práctico integral
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-pink-100 text-pink-900 dark:bg-pink-950 dark:text-pink-200 border border-pink-200 dark:border-pink-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                {countLoadedAct2} de 6 láminas cargadas
              </span>

              {onOpenFolderManager && (
                <button
                  onClick={() => onOpenFolderManager('s3_a2')}
                  className="px-3 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-amber-300" />
                  <span>Cargar Carpeta S3 A2</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activity2Topics.map((topic) => {
              const slideKey = getSlideKey(topic);
              const imageSrc = imagesMap[slideKey];
              return (
                <Week3TopicCard
                  key={topic.id}
                  topic={topic}
                  imageSrc={imageSrc}
                  slideKey={slideKey}
                  onSelectTopic={onSelectTopic}
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

interface Week3TopicCardProps {
  topic: TopicSection;
  imageSrc?: string;
  slideKey: string;
  onSelectTopic: (topic: TopicSection) => void;
  isEditing: boolean;
  onEditTopic: (topic: TopicSection) => void;
  onSaveImage?: (key: string, dataUrl: string) => void;
  onPreviewImage?: (title: string, dataUrl: string) => void;
}

const Week3TopicCard: React.FC<Week3TopicCardProps> = ({
  topic,
  imageSrc,
  slideKey,
  onSelectTopic,
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
          ? 'border-indigo-200 dark:border-indigo-800 hover:border-indigo-400'
          : 'border-pink-200 dark:border-pink-800 hover:border-pink-400'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-7 h-7 rounded-xl bg-indigo-700 text-white font-black text-xs flex items-center justify-center shadow-xs">
              #{topic.topicNumber}
            </span>
            <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300">
              Semana 3 • Actividad {topic.activityNumber}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-700">
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
        <h4 className="text-lg sm:text-xl font-black text-indigo-950 dark:text-indigo-100 mb-1">
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

        {/* Display Mode Switcher */}
        <div className="flex items-center justify-between mb-3 bg-indigo-50 dark:bg-indigo-950/40 p-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setDisplayMode('poster')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                displayMode === 'poster'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Afiche / Foto</span>
            </button>
            <button
              onClick={() => setDisplayMode('interactive')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                displayMode === 'interactive'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Esquema Digital</span>
            </button>
          </div>

          {/* Quick upload trigger */}
          {onSaveImage && (
            <label className="cursor-pointer px-2 py-1 rounded-lg bg-white dark:bg-purple-900 text-indigo-700 dark:text-indigo-200 hover:bg-indigo-100 text-[11px] font-bold flex items-center gap-1 border border-indigo-200 dark:border-indigo-700">
              <Camera className="w-3 h-3 text-indigo-500" />
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

        {/* Visual Content */}
        <div className="mb-4">
          {displayMode === 'poster' ? (
            <div className="relative rounded-2xl overflow-hidden bg-indigo-100 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 aspect-video flex items-center justify-center group shadow-inner">
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
                        className="px-3 py-1.5 rounded-xl bg-white text-indigo-950 font-bold text-xs flex items-center gap-1 shadow-md hover:scale-105 transition-transform"
                      >
                        <Eye className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Ver Afiche Completo</span>
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center p-4 space-y-2">
                  <ImageIcon className="w-10 h-10 text-indigo-400 mx-auto opacity-70" />
                  <p className="text-xs font-bold text-indigo-900 dark:text-indigo-200">
                    Lámina {topic.topicNumber}: {topic.title}
                  </p>
                  <p className="text-[11px] text-indigo-500 dark:text-indigo-400">
                    Sube la foto de tu afiche para esta lámina
                  </p>
                  {onSaveImage && (
                    <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-transform active:scale-95">
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
      <div className="pt-3 border-t border-indigo-100 dark:border-indigo-900 flex items-center justify-between gap-2">
        <span className="text-[11px] text-indigo-600 dark:text-indigo-400 italic truncate max-w-[220px]">
          "{topic.characterQuote}"
        </span>

        <button
          onClick={() => onSelectTopic(topic)}
          className="py-2 px-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 shrink-0 active:scale-98"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Ver Infografía Completa</span>
        </button>
      </div>
    </div>
  );
};
