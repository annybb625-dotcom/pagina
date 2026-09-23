import React from 'react';
import { AppProfile, WeekData } from '../types';
import { Heart, Sparkles, GraduationCap, Award, BookOpen, Calendar, Edit3 } from 'lucide-react';

interface ProfileCardProps {
  profile: AppProfile;
  weeks: WeekData[];
  isEditing: boolean;
  onEditProfile: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  weeks,
  isEditing,
  onEditProfile,
}) => {
  const avgProgress = Math.round(
    weeks.reduce((acc, curr) => acc + curr.progress, 0) / (weeks.length || 1)
  );

  return (
    <div className="bg-white dark:bg-purple-950/80 rounded-3xl p-6 sm:p-8 border-2 border-purple-200 dark:border-purple-800 shadow-xl space-y-6">
      {/* Header section with avatar badge */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div className="relative">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-600 text-white font-black text-3xl flex items-center justify-center shadow-lg shadow-purple-400/40 ring-4 ring-purple-200 dark:ring-purple-700">
            AG
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-amber-950 font-black text-xs flex items-center justify-center border-2 border-white dark:border-purple-950 shadow-xs">
            💜
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-2xl font-black text-purple-950 dark:text-purple-100">
                  {profile.studentName}
                </h3>
                {isEditing && (
                  <button
                    onClick={onEditProfile}
                    className="p-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 dark:bg-amber-950 dark:text-amber-200 text-xs"
                    title="Editar información de perfil"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-300">
                {profile.career} • {profile.university}
              </p>
            </div>

            <div className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 border border-purple-200 dark:border-purple-700 text-xs font-bold text-purple-800 dark:text-purple-200">
              {profile.course}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300 italic mt-3 bg-purple-50 dark:bg-purple-900/40 p-2.5 rounded-2xl border border-purple-200 dark:border-purple-800">
            "{profile.motto}"
          </p>
        </div>
      </div>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800">
          <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-300 mx-auto mb-1" />
          <span className="text-[10px] text-purple-500 dark:text-purple-400 block font-medium">Ciclo / Semestre</span>
          <span className="text-xs font-bold text-purple-900 dark:text-purple-100">{profile.semester}</span>
        </div>

        <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800">
          <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-300 mx-auto mb-1" />
          <span className="text-[10px] text-purple-500 dark:text-purple-400 block font-medium">Asignatura</span>
          <span className="text-xs font-bold text-purple-900 dark:text-purple-100">{profile.course}</span>
        </div>

        <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800">
          <Award className="w-4 h-4 text-purple-600 dark:text-purple-300 mx-auto mb-1" />
          <span className="text-[10px] text-purple-500 dark:text-purple-400 block font-medium">Semana 1 Estado</span>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">100% Completado</span>
        </div>

        <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800">
          <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-300 mx-auto mb-1" />
          <span className="text-[10px] text-purple-500 dark:text-purple-400 block font-medium">Progreso Global</span>
          <span className="text-xs font-bold text-purple-900 dark:text-purple-100">{avgProgress}% del Ciclo</span>
        </div>
      </div>

      {/* BTS/BT21 Bias Footer note */}
      <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-950/50 border border-purple-200 dark:border-purple-800 flex items-center justify-between text-xs text-purple-900 dark:text-purple-200">
        <div className="flex items-center gap-1.5 font-bold">
          <Heart className="w-4 h-4 fill-current text-purple-600" />
          <span>Inspiración ARMY:</span>
          <span className="font-normal">{profile.armyBias}</span>
        </div>
        <span className="font-mono text-[10px] text-purple-600 dark:text-purple-300 font-bold">UPLA 2026</span>
      </div>
    </div>
  );
};
