import React from 'react';
import {
  Sparkles,
  Layers,
  FolderOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Eye,
  BookOpen,
  Database,
  Table,
} from 'lucide-react';

export interface ActivityInfo {
  number: 1 | 2;
  title: string;
  shortTitle: string;
  description: string;
  topicCount: number;
  loadedCount: number;
  folderId: 's1_a1' | 's1_a2' | 's2_a1' | 's2_a2' | 's3_a1' | 's3_a2' | 's4_a1' | 's4_a2' | string;
  tag: string;
}

interface WeekActivityHeaderProps {
  weekNumber: 1 | 2 | 3 | 4;
  unitTitle: string;
  weekTitle: string;
  weekSubtitle: string;
  btsQuote: string;
  act1: ActivityInfo;
  act2: ActivityInfo;
  currentSubActivity: 'all' | 1 | 2;
  onSelectSubActivity: (sub: 'all' | 1 | 2) => void;
  onOpenFolderManager?: (folderId: string) => void;
  onSwitchWeek?: (weekNumber: 1 | 2 | 3 | 4) => void;
}

export const WeekActivityHeader: React.FC<WeekActivityHeaderProps> = ({
  weekNumber,
  unitTitle,
  weekTitle,
  weekSubtitle,
  btsQuote,
  act1,
  act2,
  currentSubActivity,
  onSelectSubActivity,
  onOpenFolderManager,
  onSwitchWeek,
}) => {
  const totalTopics = act1.topicCount + act2.topicCount;
  const totalLoaded = act1.loadedCount + act2.loadedCount;

  // Theme gradients based on week
  const gradientClass =
    weekNumber === 1
      ? 'from-purple-800 via-indigo-900 to-purple-950 border-purple-500/40'
      : weekNumber === 2
      ? 'from-indigo-900 via-purple-900 to-pink-950 border-indigo-500/40'
      : weekNumber === 3
      ? 'from-fuchsia-950 via-purple-900 to-indigo-950 border-pink-500/40'
      : 'from-blue-950 via-indigo-900 to-teal-950 border-teal-500/40';

  const accentBadge =
    weekNumber === 1
      ? 'bg-purple-500/20 text-purple-200 border-purple-400/40'
      : weekNumber === 2
      ? 'bg-indigo-500/20 text-indigo-200 border-indigo-400/40'
      : weekNumber === 3
      ? 'bg-pink-500/20 text-pink-200 border-pink-400/40'
      : 'bg-teal-500/20 text-teal-200 border-teal-400/40';

  return (
    <div className="space-y-4">
      {/* 1. Main Week Banner */}
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${gradientClass} p-6 sm:p-8 text-white shadow-xl border-2`}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase border ${accentBadge}`}
              >
                Semana {weekNumber}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold border border-white/20">
                {unitTitle}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                {totalTopics} Temas & Láminas
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-200">
              {weekTitle}
            </h1>

            <p className="text-purple-200 text-xs sm:text-sm max-w-2xl leading-relaxed">
              {weekSubtitle}
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-purple-300 font-mono">
              <span>💜 "{btsQuote}"</span>
              <span>•</span>
              <span>2 Actividades Estructuradas</span>
            </div>
          </div>

          {/* Quick Week Switchers & Folder Manager */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            {onOpenFolderManager && (
              <button
                onClick={() =>
                  onOpenFolderManager(
                    currentSubActivity === 2 ? act2.folderId : act1.folderId
                  )
                }
                className="px-4 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/20 shadow-xs transition-all hover:scale-102 cursor-pointer"
              >
                <FolderOpen className="w-4 h-4 text-amber-300" />
                <span>
                  Carpeta de Láminas (S{weekNumber})
                </span>
              </button>
            )}

            {/* Prev / Next Week jump buttons */}
            <div className="flex items-center gap-1.5 justify-center">
              {weekNumber > 1 && onSwitchWeek && (
                <button
                  onClick={() => onSwitchWeek((weekNumber - 1) as 1 | 2 | 3 | 4)}
                  className="px-3 py-1.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 text-xs font-bold flex items-center gap-1 border border-purple-500/30 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Semana {weekNumber - 1}</span>
                </button>
              )}
              {weekNumber < 4 && onSwitchWeek && (
                <button
                  onClick={() => onSwitchWeek((weekNumber + 1) as 1 | 2 | 3 | 4)}
                  className="px-3 py-1.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 text-xs font-bold flex items-center gap-1 border border-purple-500/30 transition-all cursor-pointer"
                >
                  <span>Semana {weekNumber + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Egalitarian Dual-Activity Cards (50% / 50% Symmetry) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Actividad 1 Card */}
        <div
          onClick={() => onSelectSubActivity(1)}
          className={`group p-5 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
            currentSubActivity === 1
              ? 'bg-purple-50/90 dark:bg-purple-950/80 border-purple-500 shadow-xl ring-2 ring-purple-400/40'
              : 'bg-white dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/80 hover:border-purple-400 hover:shadow-md'
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span
                className={`px-3 py-1 rounded-xl text-xs font-black tracking-wide ${
                  currentSubActivity === 1
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300'
                }`}
              >
                Actividad 1
              </span>
              <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400 font-bold">
                {act1.tag}
              </span>
            </div>

            <h3 className="text-lg font-black text-purple-950 dark:text-purple-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
              {act1.title}
            </h3>

            <p className="text-xs text-purple-700/80 dark:text-purple-300/80 leading-relaxed">
              {act1.description}
            </p>
          </div>

          <div className="pt-4 mt-2 border-t border-purple-100 dark:border-purple-800/60 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-800 dark:text-purple-200">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span>{act1.topicCount} Temas / Láminas</span>
            </div>

            <div className="flex items-center gap-1.5">
              {onOpenFolderManager && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenFolderManager(act1.folderId);
                  }}
                  className="px-2.5 py-1 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/50 dark:hover:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs font-bold transition-all flex items-center gap-1"
                  title="Abrir carpeta de láminas de la Actividad 1"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Carpeta</span>
                </button>
              )}

              <span
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  currentSubActivity === 1
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100/70 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 group-hover:bg-purple-200'
                }`}
              >
                {currentSubActivity === 1 ? 'Seleccionada ✓' : 'Ver Actividad 1'}
              </span>
            </div>
          </div>
        </div>

        {/* Actividad 2 Card */}
        <div
          onClick={() => onSelectSubActivity(2)}
          className={`group p-5 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
            currentSubActivity === 2
              ? 'bg-purple-50/90 dark:bg-purple-950/80 border-purple-500 shadow-xl ring-2 ring-purple-400/40'
              : 'bg-white dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/80 hover:border-purple-400 hover:shadow-md'
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span
                className={`px-3 py-1 rounded-xl text-xs font-black tracking-wide ${
                  currentSubActivity === 2
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300'
                }`}
              >
                Actividad 2
              </span>
              <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400 font-bold">
                {act2.tag}
              </span>
            </div>

            <h3 className="text-lg font-black text-purple-950 dark:text-purple-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
              {act2.title}
            </h3>

            <p className="text-xs text-purple-700/80 dark:text-purple-300/80 leading-relaxed">
              {act2.description}
            </p>
          </div>

          <div className="pt-4 mt-2 border-t border-purple-100 dark:border-purple-800/60 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-800 dark:text-purple-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{act2.topicCount} Temas / Láminas</span>
            </div>

            <div className="flex items-center gap-1.5">
              {onOpenFolderManager && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenFolderManager(act2.folderId);
                  }}
                  className="px-2.5 py-1 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/50 dark:hover:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs font-bold transition-all flex items-center gap-1"
                  title="Abrir carpeta de láminas de la Actividad 2"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Carpeta</span>
                </button>
              )}

              <span
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  currentSubActivity === 2
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100/70 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 group-hover:bg-purple-200'
                }`}
              >
                {currentSubActivity === 2 ? 'Seleccionada ✓' : 'Ver Actividad 2'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Segmented Filter Selector (All vs Act 1 vs Act 2) */}
      <div className="bg-white/80 dark:bg-purple-950/60 p-2 rounded-2xl border border-purple-200 dark:border-purple-800 shadow-xs flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="text-purple-600 dark:text-purple-400 font-bold px-2">
            Vista:
          </span>

          <button
            onClick={() => onSelectSubActivity('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              currentSubActivity === 'all'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Todas las Actividades ({totalTopics} temas)</span>
          </button>

          <button
            onClick={() => onSelectSubActivity(1)}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              currentSubActivity === 1
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
            }`}
          >
            <span>Actividad 1 ({act1.topicCount})</span>
          </button>

          <button
            onClick={() => onSelectSubActivity(2)}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              currentSubActivity === 2
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
            }`}
          >
            <span>Actividad 2 ({act2.topicCount})</span>
          </button>
        </div>

        <div className="text-[11px] text-purple-600 dark:text-purple-400 font-mono px-2 hidden sm:block">
          {currentSubActivity === 'all'
            ? `Mostrando las 2 actividades de la Semana ${weekNumber}`
            : currentSubActivity === 1
            ? `Filtrando: ${act1.title}`
            : `Filtrando: ${act2.title}`}
        </div>
      </div>
    </div>
  );
};
