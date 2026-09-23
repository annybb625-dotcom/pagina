import React from 'react';
import { UserRole } from '../types';
import { Heart, Sparkles, LogOut, Edit3, Eye, ShieldCheck, Sun, Moon, BookOpen, FolderOpen } from 'lucide-react';

interface HeaderProps {
  userRole: UserRole;
  isEditing: boolean;
  onToggleEdit: () => void;
  onLogout: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  activeSection: string;
  onSelectSection: (section: string) => void;
  onOpenFolderManager?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  userRole,
  isEditing,
  onToggleEdit,
  onLogout,
  darkMode,
  onToggleDarkMode,
  activeSection,
  onSelectSection,
  onOpenFolderManager,
}) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-purple-50/90 dark:bg-purple-950/90 border-b border-purple-200 dark:border-purple-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-300 dark:shadow-none ring-2 ring-purple-200 dark:ring-purple-700">
            <Heart className="w-5 h-5 fill-current animate-pulse text-purple-200" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-purple-950 dark:text-purple-100 flex items-center gap-1.5">
                Cuaderno Borahae
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-200/80 dark:bg-purple-800/80 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
                  BTS × BT21
                </span>
              </span>
            </div>
            <p className="text-xs text-purple-600 dark:text-purple-300 hidden sm:block">
              Portafolio de Base de Datos • Semanas 1, 2, 3 y 4
            </p>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-purple-100/70 dark:bg-purple-900/40 p-1 rounded-xl border border-purple-200 dark:border-purple-800">
          <button
            onClick={() => onSelectSection('semana1')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeSection === 'semana1'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200/60 dark:hover:bg-purple-800/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Semana 1</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/10 font-mono">
              9
            </span>
          </button>
          <button
            onClick={() => onSelectSection('semana2')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeSection === 'semana2'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200/60 dark:hover:bg-purple-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Semana 2</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/10 font-mono">
              13
            </span>
          </button>
          <button
            onClick={() => onSelectSection('semana3')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeSection === 'semana3'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200/60 dark:hover:bg-purple-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            <span>Semana 3</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/10 font-mono">
              12
            </span>
          </button>
          <button
            onClick={() => onSelectSection('semana4')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeSection === 'semana4'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200/60 dark:hover:bg-purple-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span>Semana 4</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/10 font-mono">
              12
            </span>
          </button>
          <button
            onClick={() => onSelectSection('perfil')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSection === 'perfil'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200/60 dark:hover:bg-purple-800/60'
            }`}
          >
            Perfil ARMY
          </button>
          <button
            onClick={() => onSelectSection('preguntas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSection === 'preguntas'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200/60 dark:hover:bg-purple-800/60'
            }`}
          >
            Banco de Preguntas
          </button>
          <button
            onClick={() => onSelectSection('semanas-plan')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSection === 'semanas-plan'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200/60 dark:hover:bg-purple-800/60'
            }`}
          >
            Unidades y Semanas
          </button>

          {onOpenFolderManager && (
            <button
              onClick={onOpenFolderManager}
              className="px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 bg-purple-200/70 hover:bg-purple-300 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-900 dark:text-purple-100 border border-purple-300 dark:border-purple-600 shadow-xs"
              title="Abrir gestor de carpetas de afiches e imágenes"
            >
              <FolderOpen className="w-3.5 h-3.5 text-purple-700 dark:text-purple-300" />
              <span>📁 Carpetas de Láminas</span>
            </button>
          )}
        </nav>

        {/* Right: User Role & Actions */}
        <div className="flex items-center gap-2">
          {/* User badge */}
          {userRole === 'admin' ? (
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-200" />
              <span className="hidden sm:inline">Admin:</span> Anai Gaspar
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-purple-200/80 dark:bg-purple-800/80 text-purple-900 dark:text-purple-100 text-xs px-3 py-1.5 rounded-full font-bold border border-purple-300 dark:border-purple-700">
              <Eye className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" />
              <span>Modo Visitante</span>
            </div>
          )}

          {/* Edit Mode Toggle (Admin only) */}
          {userRole === 'admin' && (
            <button
              onClick={onToggleEdit}
              className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border ${
                isEditing
                  ? 'bg-amber-500 text-white border-amber-600 shadow-xs ring-2 ring-amber-300'
                  : 'bg-white dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-800'
              }`}
              title={isEditing ? 'Salir de modo edición' : 'Activar modo edición'}
            >
              <Edit3 className="w-4 h-4" />
              <span className="hidden md:inline">{isEditing ? 'Editando...' : 'Editar'}</span>
            </button>
          )}

          {/* Theme toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl bg-white dark:bg-purple-900 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors"
            title={darkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-700" />}
          </button>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="p-2 rounded-xl bg-purple-100/70 dark:bg-purple-900/60 hover:bg-rose-100 dark:hover:bg-rose-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:text-rose-600 transition-colors"
            title="Cerrar sesión / Cambiar rol"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Sub-Navigation */}
      <div className="lg:hidden px-4 py-2 border-t border-purple-200/80 dark:border-purple-800/80 overflow-x-auto flex items-center gap-1.5 bg-purple-100/50 dark:bg-purple-900/30">
        <button
          onClick={() => onSelectSection('semana1')}
          className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
            activeSection === 'semana1'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200'
          }`}
        >
          Semana 1 (9)
        </button>
        <button
          onClick={() => onSelectSection('semana2')}
          className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all flex items-center gap-1 ${
            activeSection === 'semana2'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200'
          }`}
        >
          <Sparkles className="w-3 h-3 text-amber-300" />
          <span>Semana 2 (13)</span>
        </button>
        <button
          onClick={() => onSelectSection('semana3')}
          className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all flex items-center gap-1 ${
            activeSection === 'semana3'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200'
          }`}
        >
          <Sparkles className="w-3 h-3 text-pink-300" />
          <span>Semana 3 (12)</span>
        </button>
        <button
          onClick={() => onSelectSection('semana4')}
          className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all flex items-center gap-1 ${
            activeSection === 'semana4'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200'
          }`}
        >
          <Sparkles className="w-3 h-3 text-teal-300" />
          <span>Semana 4 (12)</span>
        </button>
        <button
          onClick={() => onSelectSection('perfil')}
          className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
            activeSection === 'perfil'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200'
          }`}
        >
          Perfil ARMY
        </button>
        <button
          onClick={() => onSelectSection('preguntas')}
          className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
            activeSection === 'preguntas'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200'
          }`}
        >
          Preguntas
        </button>
        <button
          onClick={() => onSelectSection('semanas-plan')}
          className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
            activeSection === 'semanas-plan'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-purple-700 dark:text-purple-300 hover:bg-purple-200'
          }`}
        >
          Unidades
        </button>
        {onOpenFolderManager && (
          <button
            onClick={onOpenFolderManager}
            className="px-3 py-1 rounded-lg text-xs font-black whitespace-nowrap shrink-0 transition-all flex items-center gap-1 bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100 border border-purple-300 dark:border-purple-600"
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Carpetas</span>
          </button>
        )}
      </div>
    </header>
  );
};
