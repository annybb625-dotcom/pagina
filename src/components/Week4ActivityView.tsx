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
  Code,
  Terminal,
  FileCode,
  Check,
} from 'lucide-react';

interface Week4ActivityViewProps {
  activity1Topics: TopicSection[];
  activity2Topics: TopicSection[];
  userRole: UserRole;
  isEditing: boolean;
  imagesMap?: Record<string, string>;
  onSelectTopic: (topic: TopicSection) => void;
  onEditTopic: (topic: TopicSection) => void;
  onSaveImage?: (key: string, dataUrl: string) => void;
  onOpenFolderManager?: (folderId?: 's4_a1' | 's4_a2') => void;
  onPreviewImage?: (title: string, dataUrl: string) => void;
  onSwitchToWeek3?: () => void;
}

export const Week4ActivityView: React.FC<Week4ActivityViewProps> = ({
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
  onSwitchToWeek3,
}) => {
  const [selectedSubActivity, setSelectedSubActivity] = useState<'all' | 1 | 2>('all');

  const getSlideKey = (topic: TopicSection) => {
    return topic.activityNumber === 1 ? `s4_a1_${topic.topicNumber}` : `s4_a2_${topic.topicNumber - 6}`;
  };

  const countLoadedAct1 = activity1Topics.filter((t) => Boolean(imagesMap[getSlideKey(t)])).length;
  const countLoadedAct2 = activity2Topics.filter((t) => Boolean(imagesMap[getSlideKey(t)])).length;

  return (
    <div className="space-y-8">
      {/* Header unificado e igualitario de Semana 4 */}
      <WeekActivityHeader
        weekNumber={4}
        unitTitle="Unidad II • Lenguaje SQL y Consultas Estructuradas"
        weekTitle="Lenguaje SQL: Definición (DDL) y Manipulación de Datos (DML)"
        weekSubtitle="La Semana 4 abarca la materialización física y explotación de bases de datos: desde la creación de esquemas, tipos y restricciones con DDL hasta consultas analíticas complejas con SELECT, JOINs y transacciones ACID."
        btsQuote="Born to Query • Clean, fast and structured SQL with Army & BT21"
        act1={{
          number: 1,
          title: 'Definición de Datos (DDL), Integridad y Objetos SQL (Láminas 1 al 6)',
          shortTitle: 'SQL DDL & Esquemas',
          description: '1. Arquitectura SQL • 2. Tipos de Datos • 3. CREATE TABLE • 4. Constraints • 5. ALTER/DROP/TRUNCATE • 6. Índices y Vistas.',
          topicCount: activity1Topics.length,
          loadedCount: countLoadedAct1,
          folderId: 's4_a1',
          tag: '6 Láminas • RM, Jin, Suga, J-Hope, Jimin, V & JK',
        }}
        act2={{
          number: 2,
          title: 'Manipulación de Datos (DML) y Consultas Avanzadas (Láminas 7 al 12)',
          shortTitle: 'SQL DML & Consultas',
          description: '7. INSERT/UPDATE/DELETE • 8. SELECT • 9. WHERE/ORDER BY • 10. GROUP BY/HAVING • 11. Combinación JOINs • 12. Transacciones ACID.',
          topicCount: activity2Topics.length,
          loadedCount: countLoadedAct2,
          folderId: 's4_a2',
          tag: '6 Láminas • RM, Jin, Suga, J-Hope, Jimin, V & JK',
        }}
        currentSubActivity={selectedSubActivity}
        onSelectSubActivity={(sub) => setSelectedSubActivity(sub)}
        onOpenFolderManager={(fid) => onOpenFolderManager && onOpenFolderManager(fid as 's4_a1' | 's4_a2')}
        onSwitchWeek={(wNum) => {
          if (wNum === 3 && onSwitchToWeek3) onSwitchToWeek3();
        }}
      />

      {/* Actividad 1: Definición de Datos (DDL) (1 al 6) */}
      {(selectedSubActivity === 'all' || selectedSubActivity === 1) && (
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-blue-200 dark:border-blue-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-2xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                A1
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-blue-950 dark:text-blue-100 flex items-center gap-2">
                  <span>Primera Actividad: Definición de Datos (DDL) y Objetos SQL</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-bold border border-blue-300 dark:border-blue-700">
                    Láminas 1 al 6
                  </span>
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  Fundamentos de SQL, tipos de datos, creación de tablas, restricciones de integridad, ALTER/DROP e índices y vistas
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                {countLoadedAct1} de 6 láminas cargadas
              </span>

              {onOpenFolderManager && (
                <button
                  onClick={() => onOpenFolderManager('s4_a1')}
                  className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform active:scale-95 cursor-pointer"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-amber-300" />
                  <span>Cargar Carpeta S4 A1</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activity1Topics.map((topic) => {
              const slideKey = getSlideKey(topic);
              const imageSrc = imagesMap[slideKey];
              return (
                <Week4TopicCard
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

      {/* Actividad 2: Manipulación y Consultas SQL (DML) (7 al 12) */}
      {(selectedSubActivity === 'all' || selectedSubActivity === 2) && (
        <section className="space-y-4 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-emerald-200 dark:border-emerald-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                A2
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-emerald-950 dark:text-emerald-100 flex items-center gap-2">
                  <span>Segunda Actividad: Manipulación de Datos (DML) y Consultas Avanzadas</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 font-bold border border-emerald-300 dark:border-emerald-700">
                    Láminas 7 al 12
                  </span>
                </h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">
                  Operaciones INSERT/UPDATE/DELETE, proyecciones SELECT, filtros WHERE/ORDER BY, agrupamientos GROUP BY/HAVING, combinaciones con JOINs y transacciones ACID
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {countLoadedAct2} de 6 láminas cargadas
              </span>

              {onOpenFolderManager && (
                <button
                  onClick={() => onOpenFolderManager('s4_a2')}
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform active:scale-95 cursor-pointer"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-amber-300" />
                  <span>Cargar Carpeta S4 A2</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activity2Topics.map((topic) => {
              const slideKey = getSlideKey(topic);
              const imageSrc = imagesMap[slideKey];
              return (
                <Week4TopicCard
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

      {/* Sincronización entre semanas y notas BTS */}
      <div className="p-4 sm:p-6 rounded-3xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-teal-900/20 border-2 border-blue-200 dark:border-blue-800 text-center space-y-2">
        <p className="text-xs font-bold text-blue-900 dark:text-blue-200">
          💜 Semana 4 • Consultas SQL Verificadas • Estructura Curricular Completa (Unidad II)
        </p>
        <p className="text-[11px] text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
          Cada lámina cuenta con soporte dual: visualización de afiche fotográfico de la sesión y esquema interactivo estructurado con código SQL estándar ANSI/ISO.
        </p>
      </div>
    </div>
  );
};

// Componente de Tarjeta de Tema para Semana 4
interface Week4TopicCardProps {
  topic: TopicSection;
  imageSrc?: string;
  slideKey: string;
  onSelectTopic: (topic: TopicSection) => void;
  isEditing: boolean;
  onEditTopic: (topic: TopicSection) => void;
  onSaveImage?: (key: string, dataUrl: string) => void;
  onPreviewImage?: (title: string, dataUrl: string) => void;
}

const Week4TopicCard: React.FC<Week4TopicCardProps> = ({
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

  const isAct1 = topic.activityNumber === 1;

  return (
    <div
      className={`rounded-3xl p-5 sm:p-6 bg-white dark:bg-purple-950/70 border-2 transition-all shadow-md hover:shadow-xl flex flex-col justify-between ${
        isAct1
          ? 'border-blue-200 dark:border-blue-800 hover:border-blue-400'
          : 'border-emerald-200 dark:border-emerald-800 hover:border-emerald-400'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-7 h-7 rounded-xl text-white font-black text-xs flex items-center justify-center shadow-xs ${
                isAct1 ? 'bg-blue-700' : 'bg-emerald-700'
              }`}
            >
              #{topic.topicNumber}
            </span>
            <span
              className={`text-[11px] font-bold ${
                isAct1 ? 'text-blue-700 dark:text-blue-300' : 'text-emerald-700 dark:text-emerald-300'
              }`}
            >
              Semana 4 • Actividad {topic.activityNumber}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span
              className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                isAct1
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700'
                  : 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-700'
              }`}
            >
              {topic.bt21Character}
            </span>
            {isEditing && (
              <button
                onClick={() => onEditTopic(topic)}
                className="p-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 dark:bg-amber-950 dark:text-amber-200 text-xs cursor-pointer"
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

        {/* Display Mode Switcher */}
        <div
          className={`flex items-center justify-between mb-3 p-1.5 rounded-xl border ${
            isAct1
              ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800'
              : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800'
          }`}
        >
          <div className="flex items-center gap-1">
            <button
              onClick={() => setDisplayMode('poster')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                displayMode === 'poster'
                  ? isAct1
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-emerald-600 text-white shadow-xs'
                  : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Afiche / Foto</span>
            </button>
            <button
              onClick={() => setDisplayMode('interactive')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                displayMode === 'interactive'
                  ? isAct1
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-emerald-600 text-white shadow-xs'
                  : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Esquema SQL</span>
            </button>
          </div>

          {/* Quick upload trigger */}
          {onSaveImage && (
            <label className="cursor-pointer px-2 py-1 rounded-lg bg-white dark:bg-purple-900 text-purple-700 dark:text-purple-200 hover:bg-purple-100 text-[11px] font-bold flex items-center gap-1 border border-purple-200 dark:border-purple-700">
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

        {/* Visual Content */}
        <div className="mb-4">
          {displayMode === 'poster' ? (
            <div className="relative rounded-2xl overflow-hidden bg-purple-950/20 border border-purple-200 dark:border-purple-800 min-h-[180px] flex items-center justify-center">
              {hasValidImage ? (
                <div className="relative group w-full">
                  <img
                    src={imageSrc}
                    alt={topic.title}
                    onError={() => setImageError(true)}
                    className="w-full h-56 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    {onPreviewImage && (
                      <button
                        onClick={() => onPreviewImage(topic.title, imageSrc!)}
                        className="p-2 rounded-xl bg-white/90 text-purple-950 font-bold text-xs flex items-center gap-1 shadow-md hover:bg-white cursor-pointer"
                        title="Ampliar afiche"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Ampliar</span>
                      </button>
                    )}
                    <button
                      onClick={() => onSelectTopic(topic)}
                      className="p-2 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center gap-1 shadow-md hover:bg-blue-700 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver detalles</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 flex items-center justify-center mx-auto">
                    <FileCode className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-purple-900 dark:text-purple-200">
                      {topic.imageSlideLabel || `Lámina #${topic.topicNumber}`}
                    </p>
                    <p className="text-[11px] text-purple-500 dark:text-purple-400">
                      Sin afiche fotográfico subido aún
                    </p>
                  </div>
                  {onSaveImage && (
                    <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold cursor-pointer shadow-xs transition-transform active:scale-95">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Cargar foto de esta lámina</span>
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
            <div className="rounded-2xl overflow-hidden border border-purple-200 dark:border-purple-800">
              <InfographicDiagram topic={topic} />
            </div>
          )}
        </div>

        {/* Characters Quote */}
        <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800/60 mb-4 text-xs italic text-purple-800 dark:text-purple-200 flex items-start gap-2">
          <Heart className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
          <span>"{topic.characterQuote}"</span>
        </div>
      </div>

      {/* Action Footer Button */}
      <div className="pt-2 border-t border-purple-100 dark:border-purple-800/80 flex items-center justify-between gap-2">
        <span className="text-[11px] font-mono text-purple-500 dark:text-purple-400">
          Clave: {slideKey}
        </span>
        <button
          onClick={() => onSelectTopic(topic)}
          className={`px-3.5 py-1.5 rounded-xl text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-transform active:scale-95 cursor-pointer ${
            isAct1
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
          }`}
        >
          <span>Estudiar Lámina #{topic.topicNumber}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
