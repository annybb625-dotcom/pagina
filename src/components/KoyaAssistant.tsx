import React, { useState } from 'react';
import { Heart, Sparkles, MessageCircle, X, ChevronRight, Send, HelpCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'koya' | 'user';
  text: string;
}

export const KoyaAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'koya',
      text: '¡Hola Anai y ARMY! Soy Koya 🐨💜. Estoy aquí para acompañarte en tu portafolio de Base de Datos I. ¿Sobre qué tema de la Semana 1 te gustaría repasar?',
    },
  ]);

  const quickPrompts = [
    {
      title: '¿Cómo se divide la Semana 1?',
      response:
        '✨ La Semana 1 se divide en 2 grandes actividades:\n\n• Actividad 1 (Temas 1 al 4): Modelos de Arquitectura (1. Centralizada, 2. Cliente-Servidor, 3. Distribuida, 4. En la Nube).\n\n• Actividad 2 (Temas 5 al 9): Fundamentos de BD (5. Características de BD, 6. Nodos Distribuidos, 7. Evolución Histórica 1960-Hoy, 8. Mercado Actual de BD, 9. Impactos Organizacionales).\n\n¡Cada tema tiene su propia infografía con esquemas interactivos! 💜',
    },
    {
      title: 'Centralizada vs. Distribuida',
      response:
        '🔍 En la Arquitectura Centralizada hay un solo servidor que controla todo (si cae, se cae todo). En cambio, en la Arquitectura Distribuida el trabajo se reparte entre múltiples nodos interconectados con tolerancia a fallos. ¡Juntos somos más fuertes!',
    },
    {
      title: 'Evolución de las Bases de Datos',
      response:
        '📜 La evolución pasó por 6 etapas clave:\n1. Archivos en papel (antes 1960)\n2. Jerárquicas (1960-70, ej. IMS)\n3. En Red (1970-80, ej. IDMS)\n4. Relacionales (1980-2000, SQL Server, Oracle)\n5. NoSQL / Modernas (2000-2010, MongoDB)\n6. Nube y Big Data (2010 a la actualidad, AWS, Azure, GCP)',
    },
    {
      title: 'Modo Administradora vs Visitante',
      response:
        '🛡️ Como Administradora (ANAI GASPAR / DASHELL#29) puedes activar el modo edición, modificar cualquier texto de los temas o preguntas, y ajustar las barras de progreso. Como Visitante disfrutas de una experiencia fluida de lectura e infografías interactivas.',
    },
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputVal.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');

    // Generate Koya response
    setTimeout(() => {
      let reply = '¡Borahae! 💜 Recuerda que puedes explorar las 9 infografías de la Semana 1 en la pestaña principal, o consultar el Banco de Preguntas para tu evaluación.';
      const lower = text.toLowerCase();

      if (lower.includes('semana 1') || lower.includes('actividad') || lower.includes('divide')) {
        reply = 'La Semana 1 tiene 2 actividades claras:\n• Actividad 1: Temas 1 al 4 (Centralizada, Cliente-Servidor, Distribuida, Nube).\n• Actividad 2: Temas 5 al 9 (Características, Nodos, Evolución, Mercado, Impactos).';
      } else if (lower.includes('contraseña') || lower.includes('login') || lower.includes('admin')) {
        reply = 'El usuario administrador es ANAI GASPAR y la clave es DASHELL#29. También puedes entrar directamente como visitante para lectura.';
      } else if (lower.includes('bts') || lower.includes('bt21') || lower.includes('borahae')) {
        reply = '"I Purple You" (Borahae) 💜. En la tecnología y en los sistemas, trabajar en equipo como BTS y BT21 nos hace llegar mucho más lejos.';
      } else if (lower.includes('nube') || lower.includes('cloud')) {
        reply = 'La arquitectura en la nube permite ejecutar aplicaciones distribuidas sobre IaaS, PaaS y SaaS con proveedores como AWS, Azure y Google Cloud. ¡Elasticidad total!';
      }

      const koyaMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'koya',
        text: reply,
      };
      setMessages((prev) => [...prev, koyaMsg]);
    }, 400);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-3.5 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-fuchsia-500 text-white shadow-xl shadow-purple-500/40 hover:shadow-purple-500/60 ring-4 ring-purple-200 dark:ring-purple-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          title="Asistente Koya • Repaso de BD"
        >
          <div className="w-6 h-6 flex items-center justify-center font-bold text-base">
            🐨
          </div>
          <span className="text-xs font-black pr-1 hidden sm:inline">Koya Asistente</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 text-[10px] text-white flex items-center justify-center font-bold animate-ping">
            •
          </span>
        </button>
      </div>

      {/* Chat Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-full max-w-sm sm:max-w-md bg-white dark:bg-purple-950 rounded-3xl shadow-2xl border-2 border-purple-300 dark:border-purple-700 overflow-hidden flex flex-col max-h-[540px] animate-fade-in">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-purple-700 to-indigo-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white/20 text-white flex items-center justify-center text-xl shadow-xs">
                🐨
              </div>
              <div>
                <h4 className="font-black text-sm text-white flex items-center gap-1">
                  Koya • Asistente ARMY
                  <Heart className="w-3.5 h-3.5 fill-current text-pink-300" />
                </h4>
                <p className="text-[10px] text-purple-200">Tutor de Base de Datos I • UPLA</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2.5 bg-purple-50 dark:bg-purple-900/40 border-b border-purple-100 dark:border-purple-800 flex gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
            {quickPrompts.map((qp, i) => (
              <button
                key={i}
                onClick={() => {
                  handleSend(qp.title);
                  setTimeout(() => {
                    setMessages((prev) => [
                      ...prev,
                      {
                        id: Date.now().toString(),
                        sender: 'koya',
                        text: qp.response,
                      },
                    ]);
                  }, 300);
                }}
                className="px-2.5 py-1 rounded-full bg-white dark:bg-purple-800 border border-purple-200 dark:border-purple-700 text-purple-800 dark:text-purple-200 font-semibold whitespace-nowrap hover:bg-purple-100 dark:hover:bg-purple-700 transition-colors shrink-0"
              >
                {qp.title}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-purple-50/40 dark:bg-purple-950/40 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'koya' && (
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                    🐨
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[85%] whitespace-pre-line leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-purple-600 text-white font-medium rounded-tr-none'
                      : 'bg-white dark:bg-purple-900/70 border border-purple-200 dark:border-purple-800 text-purple-950 dark:text-purple-100 font-normal rounded-tl-none shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input field */}
          <div className="p-3 bg-white dark:bg-purple-950 border-t border-purple-200 dark:border-purple-800 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregúntale a Koya sobre la Semana 1..."
              className="flex-1 px-3 py-2 rounded-xl bg-purple-50 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-700 text-xs font-semibold text-purple-950 dark:text-purple-100 placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
