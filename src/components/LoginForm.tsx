import React, { useState } from 'react';
import { UserRole } from '../types';
import { Heart, Lock, User, Eye, EyeOff, Sparkles, Shield, UserCheck, HelpCircle } from 'lucide-react';

interface LoginFormProps {
  onLogin: (role: UserRole) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showHint, setShowHint] = useState(false);

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Check credentials (case-insensitive for username as requested: "ANAI GASPAR", exact for password: "DASHELL#29")
    const cleanUser = username.trim().toUpperCase();
    const cleanPass = password.trim();

    if (cleanUser === 'ANAI GASPAR' && cleanPass === 'DASHELL#29') {
      onLogin('admin');
    } else {
      setErrorMsg('Usuario o contraseña incorrectos. Revisa las credenciales de administradora o ingresa como visitante.');
    }
  };

  const handleVisitorLogin = () => {
    onLogin('visitor');
  };

  const fillAdminCredentials = () => {
    setUsername('ANAI GASPAR');
    setPassword('DASHELL#29');
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100 dark:from-purple-950 dark:via-gray-950 dark:to-indigo-950">
      {/* Background decorative BTS/BT21 purple circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-300/30 dark:bg-purple-800/10 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-pink-300/20 dark:bg-pink-800/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-indigo-300/20 dark:bg-indigo-800/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Card Header Emblem */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-600 text-white shadow-xl shadow-purple-300/60 dark:shadow-none ring-4 ring-purple-200/80 dark:ring-purple-800/60 mb-3 animate-bounce">
            <Heart className="w-10 h-10 fill-current text-purple-200" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-purple-950 dark:text-purple-100 tracking-tight">
            Cuaderno Borahae 💜
          </h1>
          <p className="text-sm text-purple-700 dark:text-purple-300 font-medium mt-1">
            Portafolio Académico de Base de Datos • BTS & BT21
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-200/80 dark:bg-purple-800/80 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
              <Sparkles className="w-3 h-3 text-amber-500" />
              Semana 1: Actividades 1 y 2
            </span>
          </div>
        </div>

        {/* Main Form Box with cute sticker styling */}
        <div className="bg-white/95 dark:bg-purple-950/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-900/10 border-2 border-purple-200 dark:border-purple-800">
          <form onSubmit={handleAdminSubmit} className="space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-xs font-bold text-purple-900 dark:text-purple-200 uppercase tracking-wider mb-1.5">
                Usuario (Administradora)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-purple-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Ej: ANAI GASPAR"
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-purple-50/70 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-700 text-purple-950 dark:text-purple-100 text-sm font-semibold placeholder:text-purple-300 dark:placeholder:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-bold text-purple-900 dark:text-purple-200 uppercase tracking-wider mb-1.5">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-purple-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña de administradora"
                  className="w-full pl-10 pr-12 py-3 rounded-2xl bg-purple-50/70 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-700 text-purple-950 dark:text-purple-100 text-sm font-semibold placeholder:text-purple-300 dark:placeholder:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-purple-400 hover:text-purple-700 dark:hover:text-purple-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-medium">
                {errorMsg}
              </div>
            )}

            {/* Admin Login Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white font-bold text-sm shadow-md shadow-purple-300/50 dark:shadow-none hover:shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Shield className="w-4 h-4" />
              <span>Ingresar como Administradora</span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-200 dark:border-purple-800" />
            </div>
            <span className="relative px-3 bg-white dark:bg-purple-950 text-xs text-purple-400 dark:text-purple-400 font-semibold uppercase">
              o si solo deseas explorar
            </span>
          </div>

          {/* Visitor Login Button */}
          <button
            type="button"
            onClick={handleVisitorLogin}
            className="w-full py-3 px-4 rounded-2xl bg-purple-100 hover:bg-purple-200/80 dark:bg-purple-900/60 dark:hover:bg-purple-900 text-purple-900 dark:text-purple-100 font-bold text-sm border border-purple-300 dark:border-purple-700 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <UserCheck className="w-4 h-4 text-purple-600 dark:text-purple-300" />
            <span>Entrar como Visitante (Solo lectura)</span>
          </button>

          {/* Quick Helper / Credentials Autofill Button */}
          <div className="mt-5 pt-4 border-t border-purple-100 dark:border-purple-900/60 flex items-center justify-between text-xs text-purple-600 dark:text-purple-400">
            <button
              type="button"
              onClick={fillAdminCredentials}
              className="hover:underline flex items-center gap-1 font-semibold text-purple-700 dark:text-purple-300"
            >
              <span>✨ Autocompletar datos de Anai</span>
            </button>
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="hover:text-purple-800 dark:hover:text-purple-200 flex items-center gap-0.5"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pista</span>
            </button>
          </div>

          {showHint && (
            <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/50 rounded-xl text-xs text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 animate-fade-in">
              <p className="font-bold">Credenciales autorizadas:</p>
              <p>• Usuario: <code className="bg-purple-200/60 dark:bg-purple-800 px-1 py-0.5 rounded font-mono">ANAI GASPAR</code></p>
              <p>• Contraseña: <code className="bg-purple-200/60 dark:bg-purple-800 px-1 py-0.5 rounded font-mono">DASHELL#29</code></p>
            </div>
          )}
        </div>

        {/* Footer quote */}
        <p className="text-center text-xs text-purple-500 dark:text-purple-400 mt-6">
          I Purple You 💜 • Hecho con dedicación y estilo ARMY
        </p>
      </div>
    </div>
  );
};
