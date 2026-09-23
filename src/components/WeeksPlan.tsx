import React from 'react';
import { WeekData } from '../types';
import { CheckCircle2, Clock, Lock, Sparkles, BookOpen, Edit3 } from 'lucide-react';

interface WeeksPlanProps {
  weeks: WeekData[];
  onSelectWeek1: () => void;
  onSelectWeek2?: () => void;
  onSelectWeek2Act2?: () => void;
  onSelectWeek3?: () => void;
  onSelectWeek4?: () => void;
  isEditing: boolean;
  onUpdateWeekProgress: (weekId: number, newProgress: number) => void;
}

export const WeeksPlan: React.FC<WeeksPlanProps> = ({
  weeks,
  onSelectWeek1,
  onSelectWeek2,
  onSelectWeek2Act2,
  onSelectWeek3,
  onSelectWeek4,
  isEditing,
  onUpdateWeekProgress,
}) => {
  return (
    <div className="bg-white dark:bg-purple-950/80 rounded-3xl p-6 sm:p-8 border-2 border-purple-200 dark:border-purple-800 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 dark:border-purple-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
              U1
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-purple-950 dark:text-purple-100">
              Unidad I • Plan de Semanas
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-300 mt-1">
            Estructura curricular de la Unidad I en Base de Datos I (UPLA)
          </p>
        </div>

        <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-700 w-fit">
          Semana 1 Activa & Verificada
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {weeks.map((week) => {
          const isWeek1 = week.id === 1;

          return (
            <div
              key={week.id}
              className={`p-5 rounded-3xl border-2 transition-all flex flex-col justify-between ${
                isWeek1
                  ? 'bg-purple-50/90 dark:bg-purple-900/40 border-purple-400 dark:border-purple-600 shadow-md ring-2 ring-purple-300/50'
                  : 'bg-white dark:bg-purple-950/40 border-purple-200 dark:border-purple-800 hover:border-purple-300 opacity-90'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-purple-700 text-white font-black text-xs flex items-center justify-center shadow-xs">
                      S{week.id}
                    </span>
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-300">
                      {week.unit}
                    </span>
                  </div>

                  {week.status === 'completado' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      <CheckCircle2 className="w-3 h-3" />
                      Completada
                    </span>
                  ) : week.status === 'en_progreso' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                      <Clock className="w-3 h-3" />
                      En progreso
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      <Lock className="w-3 h-3" />
                      Próxima
                    </span>
                  )}
                </div>

                <h4 className="text-base font-black text-purple-950 dark:text-purple-100 mb-1">
                  {week.title}
                </h4>
                <p className="text-xs font-semibold text-purple-600 dark:text-purple-300 mb-3">
                  {week.subtitle}
                </p>
                <p className="text-xs text-purple-800/80 dark:text-purple-300/80 leading-relaxed mb-4">
                  {week.description}
                </p>
              </div>

              <div>
                {/* Progress bar */}
                <div className="space-y-1.5 mb-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-purple-700 dark:text-purple-300">Avance de la semana</span>
                    <span className="text-purple-950 dark:text-purple-100">{week.progress}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-purple-200 dark:bg-purple-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-500"
                      style={{ width: `${week.progress}%` }}
                    />
                  </div>
                </div>

                {/* Admin Mode Slider to adjust progress */}
                {isEditing && (
                  <div className="mb-3 p-2 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
                    <label className="block text-[10px] font-bold text-amber-900 dark:text-amber-200 mb-1">
                      Ajustar porcentaje (Modo Admin): {week.progress}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={week.progress}
                      onChange={(e) => onUpdateWeekProgress(week.id, Number(e.target.value))}
                      className="w-full accent-purple-600 cursor-pointer"
                    />
                  </div>
                )}

                {isWeek1 ? (
                  <button
                    onClick={onSelectWeek1}
                    className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Ver Actividad 1 y Actividad 2 (9 Temas)</span>
                  </button>
                ) : week.id === 2 ? (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={onSelectWeek2}
                      className="flex-1 py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Act. 1: DER (8 Láminas)</span>
                    </button>
                    <button
                      onClick={onSelectWeek2Act2 || onSelectWeek2}
                      className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Act. 2: 5 SGBD Motores</span>
                    </button>
                  </div>
                ) : week.id === 3 && onSelectWeek3 ? (
                  <button
                    onClick={onSelectWeek3}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                    <span>Ver Semana 3 (Diseño & Normalización)</span>
                  </button>
                ) : week.id === 4 && onSelectWeek4 ? (
                  <button
                    onClick={onSelectWeek4}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                    <span>Ver Semana 4 (SQL DDL & DML - 12 Láminas)</span>
                  </button>
                ) : (
                  <div className="text-center py-2 text-[11px] text-purple-400 dark:text-purple-500 font-semibold italic">
                    {week.activitiesCount} actividades planificadas
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
