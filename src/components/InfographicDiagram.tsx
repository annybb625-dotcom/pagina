import React from 'react';
import { TopicSection } from '../types';
import {
  Server,
  Laptop,
  Smartphone,
  Cloud,
  Database,
  Layers,
  ArrowRight,
  ArrowLeftRight,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  FileText,
  Clock,
  Briefcase,
  Users,
  Key,
  Link2,
  Workflow,
  Sparkles,
  BookOpen,
  GraduationCap,
  Building2,
  GitBranch,
  Binary,
  Cpu,
  HardDrive,
  RefreshCw,
  Activity,
  Terminal,
  Table,
} from 'lucide-react';

interface InfographicDiagramProps {
  topic: TopicSection;
  compact?: boolean;
}

export const InfographicDiagram: React.FC<InfographicDiagramProps> = ({ topic, compact = false }) => {
  const { detailedDiagramType } = topic;

  // 1. Centralized Diagram
  if (detailedDiagramType === 'centralized') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800 text-center">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5">
          <Server className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Esquema de Red Centralizada</span>
        </div>

        {/* Master Server in Center */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative group">
            <div className="w-24 sm:w-28 py-3 px-2 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-extrabold text-xs shadow-lg shadow-purple-500/20 flex flex-col items-center gap-1 ring-4 ring-purple-200 dark:ring-purple-700">
              <Server className="w-6 h-6 text-purple-200" />
              <span>Servidor Central</span>
              <span className="text-[10px] font-normal text-purple-200">(Gestiona Todo)</span>
            </div>
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amber-400 text-[10px] text-amber-950 font-bold flex items-center justify-center shadow-xs">
              ★
            </div>
          </div>

          {/* Connection Lines / SVG arrows */}
          <div className="w-full max-w-sm my-3 flex justify-between px-6 text-purple-400 dark:text-purple-500">
            <span className="text-sm">↙</span>
            <span className="text-sm">↓</span>
            <span className="text-sm">↓</span>
            <span className="text-sm">↘</span>
          </div>

          {/* Connected Clients */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-md">
            {[
              { label: 'Cliente 1', role: 'PC Oficina', icon: Laptop },
              { label: 'Cliente 2', role: 'Laptop', icon: Laptop },
              { label: 'Cliente 3', role: 'Smartphone', icon: Smartphone },
              { label: 'Cliente 4', role: 'Terminal', icon: Laptop },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-white dark:bg-purple-900/60 p-2.5 rounded-xl border border-purple-200 dark:border-purple-700 text-center shadow-xs flex flex-col items-center gap-1"
              >
                <c.icon className="w-4 h-4 text-purple-600 dark:text-purple-300" />
                <span className="text-xs font-bold text-purple-950 dark:text-purple-100">{c.label}</span>
                <span className="text-[10px] text-purple-500 dark:text-purple-400">{c.role}</span>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-purple-600 dark:text-purple-300 font-medium">
            💜 Todos los dispositivos se comunican exclusivamente a través del servidor central.
          </p>
        </div>
      </div>
    );
  }

  // 2. Client-Server Diagram
  if (detailedDiagramType === 'client-server') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5 text-center">
          <ArrowLeftRight className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Esquema Petición / Respuesta (Request-Response)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          {/* Cliente Box */}
          <div className="bg-white dark:bg-purple-900/70 p-4 rounded-2xl border-2 border-purple-300 dark:border-purple-700 shadow-sm text-center">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 flex items-center justify-center mx-auto mb-2">
              <Laptop className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-black text-purple-950 dark:text-purple-100">CLIENTE</h4>
            <p className="text-[11px] text-purple-600 dark:text-purple-300 font-semibold">(Usuario o Aplicación)</p>
            <ul className="mt-2 text-[10px] text-left text-purple-700 dark:text-purple-300 space-y-1">
              <li>• Interfaz visual de usuario</li>
              <li>• Envía peticiones al servidor</li>
              <li>• Procesa y muestra respuesta</li>
            </ul>
          </div>

          {/* Middle Channel */}
          <div className="flex flex-col items-center justify-center gap-2 py-2">
            <div className="w-full bg-purple-200 dark:bg-purple-800/80 px-3 py-1.5 rounded-xl text-center text-[11px] font-bold text-purple-900 dark:text-purple-200 shadow-xs flex items-center justify-center gap-1">
              <span>Petición (HTTP / SQL)</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" />
            </div>
            <div className="px-2 py-1 rounded-full bg-purple-300/60 dark:bg-purple-800 text-[10px] font-extrabold text-purple-900 dark:text-purple-200">
              Red / Internet
            </div>
            <div className="w-full bg-indigo-200 dark:bg-indigo-900/80 px-3 py-1.5 rounded-xl text-center text-[11px] font-bold text-indigo-900 dark:text-indigo-200 shadow-xs flex items-center justify-center gap-1">
              <span className="rotate-180 inline-block">➔</span>
              <span>Respuesta (Datos / JSON)</span>
            </div>
          </div>

          {/* Servidor Box */}
          <div className="bg-white dark:bg-purple-900/70 p-4 rounded-2xl border-2 border-indigo-300 dark:border-indigo-700 shadow-sm text-center">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 flex items-center justify-center mx-auto mb-2">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-black text-indigo-950 dark:text-indigo-100">SERVIDOR</h4>
            <p className="text-[11px] text-indigo-600 dark:text-indigo-300 font-semibold">(Procesamiento y Datos)</p>
            <ul className="mt-2 text-[10px] text-left text-indigo-700 dark:text-indigo-300 space-y-1">
              <li>• Almacena y gestiona datos</li>
              <li>• Aplica reglas de negocio</li>
              <li>• Devuelve la respuesta solicitada</li>
            </ul>
          </div>
        </div>

        {/* Thin vs Fat comparison mini-strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-3 border-t border-purple-200 dark:border-purple-800 text-xs">
          <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-800">
            <span className="font-bold text-purple-900 dark:text-purple-100">Cliente Ligero (Thin):</span>
            <span className="text-purple-700 dark:text-purple-300 text-[11px] block mt-0.5">El servidor procesa casi todo; el cliente solo muestra.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-800">
            <span className="font-bold text-purple-900 dark:text-purple-100">Cliente Pesado (Fat):</span>
            <span className="text-purple-700 dark:text-purple-300 text-[11px] block mt-0.5">El cliente ejecuta validaciones y lógica localmente.</span>
          </div>
        </div>
      </div>
    );
  }

  // 3 & 6. Distributed Diagram
  if (detailedDiagramType === 'distributed' || detailedDiagramType === 'db-distributed') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5 text-center">
          <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Distribución Global Multiregión en Nodos</span>
        </div>

        {/* Load balancer center */}
        <div className="flex flex-col items-center">
          <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Balanceador de Carga + Middleware</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full">
            {[
              { name: 'Nodo 1 (EE.UU.)', detail: 'Cómputo & Transacciones', flag: '🇺🇸', color: 'border-purple-300' },
              { name: 'Nodo 2 (Europa)', detail: 'Réplica de Base de Datos', flag: '🇪🇺', color: 'border-indigo-300' },
              { name: 'Nodo 3 (Asia)', detail: 'Servicios de Aplicación', flag: '🇰🇷', color: 'border-pink-300' },
              { name: 'Nodo 4 (Latinoamérica)', detail: 'Baja Latencia UPLA', flag: '🇵🇪', color: 'border-fuchsia-300' },
            ].map((node, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl bg-white dark:bg-purple-900/60 border-2 ${node.color} dark:border-purple-700 text-center shadow-xs flex flex-col items-center gap-1`}
              >
                <div className="text-lg">{node.flag}</div>
                <span className="text-xs font-black text-purple-950 dark:text-purple-100">{node.name}</span>
                <span className="text-[10px] text-purple-600 dark:text-purple-400 leading-tight">{node.detail}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold mt-1">
                  Sincronizado
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-[11px] text-purple-700 dark:text-purple-300 text-center w-full">
            ✨ Si un nodo regional falla, los demás continúan atendiendo a los usuarios de manera imperceptible.
          </div>
        </div>
      </div>
    );
  }

  // 4. Cloud Architecture Diagram
  if (detailedDiagramType === 'cloud') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5 text-center">
          <Cloud className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Ecosistema en la Nube (IaaS • PaaS • SaaS)</span>
        </div>

        {/* 3 Layers Stack */}
        <div className="space-y-2.5 max-w-lg mx-auto">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-200" />
              <span className="font-extrabold text-xs">SaaS (Software as a Service)</span>
            </div>
            <span className="text-[11px] font-semibold text-purple-100">Aplicaciones Web, Móviles, APIs</span>
          </div>

          <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-200" />
              <span className="font-extrabold text-xs">PaaS (Platform as a Service)</span>
            </div>
            <span className="text-[11px] font-semibold text-purple-100">Entorno de ejecución, bases de datos</span>
          </div>

          <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-700 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-200" />
              <span className="font-extrabold text-xs">IaaS (Infrastructure as a Service)</span>
            </div>
            <span className="text-[11px] font-semibold text-purple-100">Servidores virtuales, almacenamiento y redes</span>
          </div>
        </div>

        {/* Global cloud providers badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
          {['AWS Cloud', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud'].map((p, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-full bg-white dark:bg-purple-900 border border-purple-200 dark:border-purple-700 text-purple-800 dark:text-purple-200 font-bold"
            >
              ☁️ {p}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // 5. Database Features Diagram
  if (detailedDiagramType === 'db-features') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5 text-center">
          <Database className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Componentes de un Sistema Gestor de Base de Datos (SGBD)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
          <div className="p-3 rounded-2xl bg-white dark:bg-purple-900/60 border border-purple-200 dark:border-purple-700 shadow-xs flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 flex items-center justify-center mb-1">
              <Database className="w-4 h-4" />
            </div>
            <span className="font-bold text-xs text-purple-950 dark:text-purple-100">Motor SGBD</span>
            <span className="text-[10px] text-purple-600 dark:text-purple-400">Software gestor SQL</span>
          </div>

          <div className="p-3 rounded-2xl bg-white dark:bg-purple-900/60 border border-purple-200 dark:border-purple-700 shadow-xs flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 flex items-center justify-center mb-1">
              <Layers className="w-4 h-4" />
            </div>
            <span className="font-bold text-xs text-indigo-950 dark:text-indigo-100">Almacenamiento</span>
            <span className="text-[10px] text-indigo-600 dark:text-indigo-400">Tablas y registros</span>
          </div>

          <div className="p-3 rounded-2xl bg-white dark:bg-purple-900/60 border border-purple-200 dark:border-purple-700 shadow-xs flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-800 text-fuchsia-700 dark:text-fuchsia-300 flex items-center justify-center mb-1">
              <Users className="w-4 h-4" />
            </div>
            <span className="font-bold text-xs text-fuchsia-950 dark:text-fuchsia-100">Usuarios / Apps</span>
            <span className="text-[10px] text-fuchsia-600 dark:text-fuchsia-400">Consultas concurrentes</span>
          </div>

          <div className="p-3 rounded-2xl bg-white dark:bg-purple-900/60 border border-purple-200 dark:border-purple-700 shadow-xs flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 flex items-center justify-center mb-1">
              <Zap className="w-4 h-4" />
            </div>
            <span className="font-bold text-xs text-purple-950 dark:text-purple-100">Interfaz de Acceso</span>
            <span className="text-[10px] text-purple-600 dark:text-purple-400">APIs, SQL, Drivers</span>
          </div>
        </div>

        {/* 4 Pillars of importance */}
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div className="py-1.5 px-2 rounded-xl bg-purple-200/50 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 font-semibold">
            ⚡ Rendimiento
          </div>
          <div className="py-1.5 px-2 rounded-xl bg-purple-200/50 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 font-semibold">
            🛡️ Seguridad
          </div>
          <div className="py-1.5 px-2 rounded-xl bg-purple-200/50 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 font-semibold">
            🌐 Disponibilidad
          </div>
          <div className="py-1.5 px-2 rounded-xl bg-purple-200/50 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 font-semibold">
            💡 Innovación
          </div>
        </div>
      </div>
    );
  }

  // 7. DB Evolution Table & Timeline Diagram
  if (detailedDiagramType === 'db-evolution') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5 text-center">
          <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Evolución Histórica: De un Archivo Físico a la Nube Inteligente</span>
        </div>

        {/* Visual Timeline Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-4">
          {[
            { label: 'Papel', period: 'Antes 1960', icon: '📄' },
            { label: 'Jerárquica', period: '1960-70', icon: '🌳' },
            { label: 'En Red', period: '1970-80', icon: '🕸️' },
            { label: 'Relacional SQL', period: '1980-2000', icon: '📊' },
            { label: 'NoSQL / BigData', period: '2000-2010', icon: '🚀' },
            { label: 'Nube & IA', period: 'Actualidad', icon: '☁️' },
          ].map((step, idx) => (
            <div
              key={idx}
              className="p-2 rounded-xl bg-white dark:bg-purple-900/60 border border-purple-200 dark:border-purple-700 text-center shadow-xs"
            >
              <div className="text-base">{step.icon}</div>
              <div className="font-bold text-xs text-purple-950 dark:text-purple-100">{step.label}</div>
              <div className="text-[10px] text-purple-500 dark:text-purple-400">{step.period}</div>
            </div>
          ))}
        </div>

        {/* Detailed Comparative Table */}
        <div className="overflow-x-auto rounded-xl border border-purple-200 dark:border-purple-700 shadow-xs">
          <table className="w-full text-left text-xs bg-white dark:bg-purple-900/40">
            <thead className="bg-purple-200/70 dark:bg-purple-900 text-purple-950 dark:text-purple-100 font-bold">
              <tr>
                <th className="py-2.5 px-3">Época / Fase</th>
                <th className="py-2.5 px-3">Ejemplo de DB</th>
                <th className="py-2.5 px-3">Características Principales</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 dark:divide-purple-800 text-purple-900 dark:text-purple-200">
              {topic.evolutionTable?.map((row, i) => (
                <tr key={i} className="hover:bg-purple-50 dark:hover:bg-purple-800/40 transition-colors">
                  <td className="py-2 px-3 font-bold whitespace-nowrap">{row.decade}</td>
                  <td className="py-2 px-3 font-semibold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                    {row.dbExample}
                  </td>
                  <td className="py-2 px-3 text-[11px]">{row.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 8. DB Market Diagram
  if (detailedDiagramType === 'db-market') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5 text-center">
          <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Panorama del Mercado y Líderes Globales</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
          {topic.marketStats?.map((stat, i) => (
            <div
              key={i}
              className="p-3 rounded-2xl bg-white dark:bg-purple-900/60 border border-purple-200 dark:border-purple-700 text-center shadow-xs"
            >
              <span className="text-xs font-black text-purple-900 dark:text-purple-200 block text-lg">{stat.value}</span>
              <span className="text-[10px] text-purple-600 dark:text-purple-400 leading-tight block mt-0.5">
                {stat.indicator}
              </span>
            </div>
          ))}
        </div>

        {/* Market Actors Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
          {topic.marketActors?.map((actor, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-white dark:bg-purple-900/50 border border-purple-200 dark:border-purple-800 shadow-xs"
            >
              <div className="font-bold text-purple-950 dark:text-purple-100 flex items-center justify-between">
                <span>{actor.name}</span>
                <span className="text-[10px] text-purple-400">★</span>
              </div>
              <div className="text-[11px] text-purple-600 dark:text-purple-300 mt-0.5">{actor.role}</div>
              {actor.highlight && (
                <div className="text-[10px] text-purple-500 dark:text-purple-400 font-mono mt-1 bg-purple-50 dark:bg-purple-950/60 px-1.5 py-0.5 rounded">
                  {actor.highlight}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 9. Organizational Impacts Diagram
  if (detailedDiagramType === 'db-impacts') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5 text-center">
          <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Estructura Empresarial Integrada por la Base de Datos</span>
        </div>

        <div className="max-w-md mx-auto text-center">
          {/* Dirección */}
          <div className="inline-block py-2 px-5 rounded-2xl bg-purple-700 text-white font-extrabold text-xs shadow-md mb-3 ring-2 ring-purple-300 dark:ring-purple-700">
            👑 Dirección General (Toma de Decisiones)
          </div>

          <div className="text-sm text-purple-400 dark:text-purple-500 font-bold mb-2">↓ Conexión Directa ↓</div>

          {/* Core Database */}
          <div className="p-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-black text-xs shadow-md mb-3 flex items-center justify-center gap-2">
            <Database className="w-5 h-5 text-purple-200" />
            <span>Base de Datos Central Unificada (Fuente Única de Verdad)</span>
          </div>

          <div className="text-sm text-purple-400 dark:text-purple-500 font-bold mb-2">↓ Sincronización en Tiempo Real ↓</div>

          {/* Departmental units */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: 'Ventas', role: 'Pedidos y Clientes' },
              { name: 'Producción', role: 'Inventarios y Stock' },
              { name: 'RR.HH.', role: 'Talento y Nómina' },
            ].map((dept, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-white dark:bg-purple-900/60 border border-purple-200 dark:border-purple-700 text-center shadow-xs"
              >
                <div className="font-bold text-xs text-purple-950 dark:text-purple-100">{dept.name}</div>
                <div className="text-[10px] text-purple-500 dark:text-purple-400">{dept.role}</div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[11px] text-purple-700 dark:text-purple-300 font-medium">
            💜 Pequeños datos, grandes cambios: Procesos más simples, resultados más grandes.
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // SEMANA 2 • ACTIVIDAD 1: DIAGRAMAS MER / DER
  // ==========================================

  // 10. ER Intro: Niveles de Abstracción (Lámina 1)
  if (detailedDiagramType === 'er-intro') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800 text-center">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5">
          <Workflow className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Fases del Diseño de Bases de Datos • Niveles de Abstracción</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-stretch">
          {[
            {
              step: '1. Mundo Real',
              label: 'Requisitos & Procesos',
              desc: 'Entrevistas, documentos y reglas del negocio.',
              badge: 'Realidad',
              color: 'bg-white dark:bg-purple-900/60 border-purple-300',
              icon: Globe,
            },
            {
              step: '2. Conceptual',
              label: 'Modelo ER (Chen)',
              desc: 'Entidades, atributos y relaciones independientes de BD.',
              badge: 'MER',
              color: 'bg-purple-600 text-white border-purple-500 shadow-md ring-2 ring-purple-300',
              icon: Sparkles,
            },
            {
              step: '3. Lógico',
              label: 'Modelo Relacional',
              desc: 'Tablas normalizadas, columnas, PKs y FKs.',
              badge: 'SQL / Tablas',
              color: 'bg-white dark:bg-purple-900/60 border-purple-300',
              icon: Database,
            },
            {
              step: '4. Físico',
              label: 'Almacenamiento',
              desc: 'Ficheros en disco, índices y particiones del SGBD.',
              badge: 'Hardware',
              color: 'bg-white dark:bg-purple-900/60 border-purple-300',
              icon: Server,
            },
          ].map((phase, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-2xl border flex flex-col justify-between text-left transition-all ${phase.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${phase.badge === 'MER' ? 'text-amber-300' : 'text-purple-600 dark:text-purple-300'}`}>
                    {phase.step}
                  </span>
                  <phase.icon className={`w-4 h-4 ${phase.badge === 'MER' ? 'text-white' : 'text-purple-600 dark:text-purple-300'}`} />
                </div>
                <h5 className={`font-black text-xs mb-1 ${phase.badge === 'MER' ? 'text-white' : 'text-purple-950 dark:text-purple-100'}`}>
                  {phase.label}
                </h5>
                <p className={`text-[11px] leading-relaxed ${phase.badge === 'MER' ? 'text-purple-100' : 'text-purple-700/80 dark:text-purple-300/80'}`}>
                  {phase.desc}
                </p>
              </div>
              <div className="mt-3 text-right">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${phase.badge === 'MER' ? 'bg-white/30 text-white' : 'bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300'}`}>
                  {phase.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs text-purple-600 dark:text-purple-300 font-medium">
          ✨ El Modelo Entidad-Relación (Paso 2) traduce la realidad a un plano comprensible antes de crear tablas en SQL.
        </p>
      </div>
    );
  }

  // 11. ER Entities: Fuertes vs Débiles (Lámina 2)
  if (detailedDiagramType === 'er-entities') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5 text-center">
          <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Esquema Notación Chen: Entidad Fuerte vs. Entidad Débil</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Entidad Fuerte Card */}
          <div className="bg-white dark:bg-purple-900/70 p-4 rounded-2xl border-2 border-purple-400 dark:border-purple-600 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-purple-700 dark:text-purple-300">
                Entidad Regular / Fuerte
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                Independiente
              </span>
            </div>

            {/* Chen Symbol: Single Rectangle */}
            <div className="flex flex-col items-center justify-center p-4 bg-purple-50 dark:bg-purple-950/50 rounded-xl">
              <div className="border-2 border-purple-700 dark:border-purple-300 bg-purple-600 text-white font-black text-sm px-6 py-2.5 rounded-none shadow-sm">
                EDIFICIO
              </div>
              <div className="mt-2 text-[11px] font-bold text-purple-800 dark:text-purple-200 flex items-center gap-1">
                <Key className="w-3 h-3 text-amber-500" />
                <span className="underline font-mono">CodEdificio</span> (PK Propia)
              </div>
            </div>

            <ul className="text-xs text-purple-700 dark:text-purple-300 space-y-1">
              <li>• Simbolizada con <strong>rectángulo simple</strong>.</li>
              <li>• Posee clave primaria única propia.</li>
              <li>• Su existencia no depende de ninguna otra tabla.</li>
            </ul>
          </div>

          {/* Entidad Débil Card */}
          <div className="bg-white dark:bg-purple-900/70 p-4 rounded-2xl border-2 border-fuchsia-400 dark:border-fuchsia-600 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-fuchsia-700 dark:text-fuchsia-300">
                Entidad Débil
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold">
                Dependencia Existencial
              </span>
            </div>

            {/* Chen Symbol: Double Rectangle & Double Diamond */}
            <div className="flex flex-col items-center justify-center p-3 bg-purple-50 dark:bg-purple-950/50 rounded-xl space-y-2">
              <div className="flex items-center justify-center gap-2">
                {/* Double Diamond */}
                <div className="border border-fuchsia-600 p-0.5">
                  <div className="border border-fuchsia-600 px-2 py-1 text-[10px] font-black text-fuchsia-800 dark:text-fuchsia-200 bg-fuchsia-100 dark:bg-fuchsia-950 rotate-0">
                    POSEE (Id.)
                  </div>
                </div>
                <span>➔</span>
                {/* Double Rectangle */}
                <div className="border-2 border-fuchsia-700 dark:border-fuchsia-300 p-0.5">
                  <div className="border-2 border-fuchsia-700 dark:border-fuchsia-300 bg-fuchsia-600 text-white font-black text-sm px-4 py-2">
                    AULA
                  </div>
                </div>
              </div>
              <div className="text-[11px] font-bold text-fuchsia-800 dark:text-fuchsia-200 flex items-center gap-1">
                <span className="border-b border-dashed border-fuchsia-600 font-mono">NumAula</span> (Clave Parcial)
              </div>
            </div>

            <ul className="text-xs text-purple-700 dark:text-purple-300 space-y-1">
              <li>• Simbolizada con <strong>doble rectángulo</strong>.</li>
              <li>• Requiere relación identificadora (<strong>doble rombo</strong>).</li>
              <li>• Clave parcial subrayada con <strong>línea discontinua</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // 12. ER Attributes: Tipos de Atributos (Lámina 3)
  if (detailedDiagramType === 'er-attributes') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800 text-center">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5">
          <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Simbología de Atributos en Notación Peter Chen</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* 1. Clave Primaria */}
          <div className="bg-white dark:bg-purple-900/60 p-3 rounded-2xl border border-purple-200 dark:border-purple-700 shadow-xs flex flex-col items-center justify-between">
            <div className="w-full text-center">
              <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400">
                1. Clave Primaria (PK)
              </span>
              <div className="my-3 px-3 py-1.5 rounded-full border-2 border-purple-600 bg-purple-50 dark:bg-purple-950 text-xs font-black text-purple-900 dark:text-purple-100 shadow-xs inline-block">
                <span className="underline decoration-purple-600 decoration-2">CodEstudiante</span>
              </div>
            </div>
            <p className="text-[10px] text-purple-600 dark:text-purple-300">
              Óvalo simple con texto subrayado unívoco.
            </p>
          </div>

          {/* 2. Compuesto */}
          <div className="bg-white dark:bg-purple-900/60 p-3 rounded-2xl border border-purple-200 dark:border-purple-700 shadow-xs flex flex-col items-center justify-between">
            <div className="w-full text-center">
              <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400">
                2. Compuesto
              </span>
              <div className="my-2 space-y-1">
                <div className="px-2 py-0.5 rounded-full border border-purple-500 bg-purple-100 dark:bg-purple-900 text-[11px] font-bold text-purple-900 dark:text-purple-100 inline-block">
                  Dirección
                </div>
                <div className="flex justify-center gap-1 text-[9px] text-purple-600 dark:text-purple-300 font-mono">
                  <span>(Calle,</span>
                  <span>Ciudad,</span>
                  <span>CP)</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-purple-600 dark:text-purple-300">
              Se descompone jerárquicamente en sub-óvalos.
            </p>
          </div>

          {/* 3. Multivaluado */}
          <div className="bg-white dark:bg-purple-900/60 p-3 rounded-2xl border border-purple-200 dark:border-purple-700 shadow-xs flex flex-col items-center justify-between">
            <div className="w-full text-center">
              <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400">
                3. Multivaluado
              </span>
              <div className="my-3 p-0.5 rounded-full border-2 border-purple-600 inline-block">
                <div className="px-3 py-1 rounded-full border border-purple-600 bg-purple-50 dark:bg-purple-950 text-xs font-black text-purple-900 dark:text-purple-100">
                  Teléfonos
                </div>
              </div>
            </div>
            <p className="text-[10px] text-purple-600 dark:text-purple-300">
              Doble óvalo concéntrico (admite múltiples valores).
            </p>
          </div>

          {/* 4. Derivado */}
          <div className="bg-white dark:bg-purple-900/60 p-3 rounded-2xl border border-purple-200 dark:border-purple-700 shadow-xs flex flex-col items-center justify-between">
            <div className="w-full text-center">
              <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400">
                4. Derivado / Calculado
              </span>
              <div className="my-3 px-3 py-1.5 rounded-full border-2 border-dashed border-purple-500 bg-purple-50 dark:bg-purple-950 text-xs font-black text-purple-800 dark:text-purple-200 inline-block">
                Edad
              </div>
            </div>
            <p className="text-[10px] text-purple-600 dark:text-purple-300">
              Óvalo con línea discontinua (calculado de FechaNac).
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 13. ER Relationships: Grados (Lámina 4)
  if (detailedDiagramType === 'er-relationships') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5 text-center">
          <Link2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Grados de Asociación en Relaciones MER</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Unaria */}
          <div className="bg-white dark:bg-purple-900/60 p-3.5 rounded-2xl border border-purple-200 dark:border-purple-700 text-center space-y-2">
            <span className="text-[11px] font-black uppercase text-purple-600 dark:text-purple-400">
              1. Unaria / Recursiva (Grado 1)
            </span>
            <div className="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl flex flex-col items-center">
              <div className="px-3 py-1.5 bg-purple-600 text-white font-bold text-xs">
                EMPLEADO
              </div>
              <div className="text-xs text-purple-500 font-bold my-1">↺ Supervisa a ↺</div>
              <span className="text-[10px] text-purple-600 dark:text-purple-300 italic">
                (Roles: Supervisor y Supervisado)
              </span>
            </div>
            <p className="text-[10px] text-purple-700 dark:text-purple-300">
              Una entidad se vincula consigo misma.
            </p>
          </div>

          {/* Binaria */}
          <div className="bg-white dark:bg-purple-900/60 p-3.5 rounded-2xl border-2 border-purple-400 dark:border-purple-600 text-center space-y-2 shadow-xs">
            <span className="text-[11px] font-black uppercase text-purple-700 dark:text-purple-300">
              2. Binaria (Grado 2) • Más común
            </span>
            <div className="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl flex items-center justify-center gap-1.5">
              <span className="px-2 py-1 bg-purple-600 text-white font-bold text-[10px]">ALUMNO</span>
              <span className="text-purple-400">──</span>
              <span className="px-2 py-1 border border-purple-600 bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 font-black text-[9px]">
                CURSA
              </span>
              <span className="text-purple-400">──</span>
              <span className="px-2 py-1 bg-indigo-600 text-white font-bold text-[10px]">CURSO</span>
            </div>
            <p className="text-[10px] text-purple-700 dark:text-purple-300">
              Conecta dos conjuntos de entidades diferentes.
            </p>
          </div>

          {/* Ternaria */}
          <div className="bg-white dark:bg-purple-900/60 p-3.5 rounded-2xl border border-purple-200 dark:border-purple-700 text-center space-y-2">
            <span className="text-[11px] font-black uppercase text-purple-600 dark:text-purple-400">
              3. Ternaria (Grado 3)
            </span>
            <div className="p-2 bg-purple-50 dark:bg-purple-950/40 rounded-xl flex flex-col items-center gap-1 text-[9px] font-bold">
              <span className="px-2 py-0.5 bg-purple-600 text-white">PROVEEDOR</span>
              <span className="text-purple-400 font-bold">↓</span>
              <span className="px-2 py-0.5 border border-purple-600 bg-purple-200 dark:bg-purple-900 text-purple-950 dark:text-purple-100">
                SUMINISTRA
              </span>
              <div className="flex gap-2">
                <span className="px-1.5 py-0.5 bg-indigo-600 text-white">PIEZA</span>
                <span className="px-1.5 py-0.5 bg-fuchsia-600 text-white">PROYECTO</span>
              </div>
            </div>
            <p className="text-[10px] text-purple-700 dark:text-purple-300">
              Asocia simultáneamente tres entidades distintas.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 14. ER Cardinality: 1:1, 1:N, N:M (Lámina 5)
  if (detailedDiagramType === 'er-cardinality') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800 text-center">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5">
          <ArrowLeftRight className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Razones de Cardinalidad y Participación</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
          {/* 1:1 */}
          <div className="bg-white dark:bg-purple-900/70 p-3.5 rounded-2xl border border-purple-200 dark:border-purple-700 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-purple-900 dark:text-purple-100">Uno a Uno (1 : 1)</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200">
                1:1
              </span>
            </div>
            <div className="p-2.5 bg-purple-50 dark:bg-purple-950/50 rounded-xl text-center text-xs font-bold text-purple-800 dark:text-purple-200">
              CIUDADANO [ 1 ] ⟷ [ 1 ] PASAPORTE
            </div>
            <p className="text-[11px] text-purple-600 dark:text-purple-300">
              Cada instancia de A se asocia a lo sumo con una de B, y viceversa.
            </p>
          </div>

          {/* 1:N */}
          <div className="bg-white dark:bg-purple-900/70 p-3.5 rounded-2xl border-2 border-purple-500 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-purple-900 dark:text-purple-100">Uno a Muchos (1 : N)</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-600 text-white">
                1:N
              </span>
            </div>
            <div className="p-2.5 bg-purple-50 dark:bg-purple-950/50 rounded-xl text-center text-xs font-bold text-purple-800 dark:text-purple-200">
              FACULTAD [ 1 ] ⟷ [ N ] ESTUDIANTES
            </div>
            <p className="text-[11px] text-purple-600 dark:text-purple-300">
              Una facultad tiene muchos estudiantes; un estudiante pertenece a una sola facultad.
            </p>
          </div>

          {/* N:M */}
          <div className="bg-white dark:bg-purple-900/70 p-3.5 rounded-2xl border border-purple-200 dark:border-purple-700 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-purple-900 dark:text-purple-100">Muchos a Muchos (N : M)</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-600 text-white">
                N:M
              </span>
            </div>
            <div className="p-2.5 bg-purple-50 dark:bg-purple-950/50 rounded-xl text-center text-xs font-bold text-purple-800 dark:text-purple-200">
              ESTUDIANTE [ N ] ⟷ [ M ] CURSO
            </div>
            <p className="text-[11px] text-purple-600 dark:text-purple-300">
              Muchos alumnos llevan muchos cursos. Requiere tabla intermedia en SQL.
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-white dark:bg-purple-900/50 rounded-xl border border-purple-200 dark:border-purple-700 flex flex-wrap items-center justify-around gap-2 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-5 h-0.5 bg-purple-600"></span>
            <span>Línea Simple = Participación Parcial (Opcional)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-1 border-t-2 border-b-2 border-purple-600"></span>
            <span>Línea Doble = Participación Total (Obligatoria)</span>
          </div>
        </div>
      </div>
    );
  }

  // 15. ER Notations: Chen vs Crow's Foot (Lámina 6)
  if (detailedDiagramType === 'er-notations') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5 text-center">
          <GitBranch className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Comparación Gráfica: Notación Chen vs. Notación Pata de Gallo (Crow's Foot)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Notación Chen */}
          <div className="bg-white dark:bg-purple-900/70 p-4 rounded-2xl border-2 border-purple-300 dark:border-purple-700 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-purple-800 dark:text-purple-200">
                1. Notación Peter Chen (1976)
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-800 font-bold text-purple-800 dark:text-purple-200">
                Conceptual Académico
              </span>
            </div>

            <div className="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl space-y-2 text-xs font-medium">
              <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-1.5">
                <span>Entidad:</span>
                <span className="px-3 py-1 border border-purple-600 bg-white dark:bg-purple-900 font-bold">Rectángulo</span>
              </div>
              <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-1.5">
                <span>Relación:</span>
                <span className="px-3 py-0.5 border border-purple-600 bg-white dark:bg-purple-900 font-bold">◇ Rombo ◇</span>
              </div>
              <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-1.5">
                <span>Atributos:</span>
                <span className="px-3 py-0.5 rounded-full border border-purple-600 bg-white dark:bg-purple-900 font-bold">Óvalos flotantes</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Cardinalidad:</span>
                <span className="font-mono font-bold text-purple-700 dark:text-purple-300">1, N, M (o min, max)</span>
              </div>
            </div>
          </div>

          {/* Notación Pata de Gallo */}
          <div className="bg-white dark:bg-purple-900/70 p-4 rounded-2xl border-2 border-indigo-400 dark:border-indigo-700 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-indigo-800 dark:text-indigo-200">
                2. Notación Pata de Gallo (Martin)
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 font-bold text-indigo-700 dark:text-indigo-300">
                Estándar Industrial
              </span>
            </div>

            <div className="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl space-y-2 text-xs font-medium">
              <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-1.5">
                <span>Entidad:</span>
                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 font-bold">Caja con columnas</span>
              </div>
              <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-1.5">
                <span>Relación:</span>
                <span className="font-bold text-indigo-700 dark:text-indigo-300">Línea conector directa</span>
              </div>
              <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-1.5">
                <span>Muchos (N):</span>
                <span className="font-mono font-black text-indigo-600 dark:text-indigo-400">Tridente (&gt;| o &gt;O)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Exacto Uno (1):</span>
                <span className="font-mono font-black text-indigo-600 dark:text-indigo-400">Doble barra (||)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 16. ER Integrity: Claves e Integridad (Lámina 7)
  if (detailedDiagramType === 'er-integrity') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5 text-center">
          <Key className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Esquema de Clave Primaria (PK), Clave Foránea (FK) e Integridad Referencial</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {/* Tabla Padre */}
          <div className="bg-white dark:bg-purple-900/70 rounded-2xl border-2 border-purple-400 dark:border-purple-600 overflow-hidden shadow-sm">
            <div className="bg-purple-600 text-white px-4 py-2 text-xs font-black flex items-center justify-between">
              <span>TABLA PADRE: ALUMNO</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Referenciada</span>
            </div>
            <div className="p-3 text-xs space-y-1.5 font-mono">
              <div className="flex items-center justify-between p-1 bg-purple-50 dark:bg-purple-950 font-bold text-purple-950 dark:text-purple-100">
                <span className="flex items-center gap-1">
                  <Key className="w-3.5 h-3.5 text-amber-500" />
                  id_alumno
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-amber-400 text-amber-950 rounded-md font-sans">
                  PRIMARY KEY
                </span>
              </div>
              <div className="flex justify-between p-1 text-purple-700 dark:text-purple-300">
                <span>nombres</span>
                <span>VARCHAR(100)</span>
              </div>
              <div className="flex justify-between p-1 text-purple-700 dark:text-purple-300">
                <span>correo</span>
                <span>VARCHAR(150)</span>
              </div>
            </div>
          </div>

          {/* Tabla Hija */}
          <div className="bg-white dark:bg-purple-900/70 rounded-2xl border-2 border-indigo-400 dark:border-indigo-600 overflow-hidden shadow-sm">
            <div className="bg-indigo-600 text-white px-4 py-2 text-xs font-black flex items-center justify-between">
              <span>TABLA HIJA: MATRICULA</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Referenciante</span>
            </div>
            <div className="p-3 text-xs space-y-1.5 font-mono">
              <div className="flex items-center justify-between p-1 bg-indigo-50 dark:bg-indigo-950 font-bold text-purple-950 dark:text-purple-100">
                <span className="flex items-center gap-1">
                  <Key className="w-3.5 h-3.5 text-amber-500" />
                  id_matricula
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-amber-400 text-amber-950 rounded-md font-sans">
                  PRIMARY KEY
                </span>
              </div>
              <div className="flex items-center justify-between p-1 bg-purple-100/80 dark:bg-purple-900/80 font-bold text-purple-900 dark:text-purple-100 border border-dashed border-purple-400">
                <span className="flex items-center gap-1">
                  <Link2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  id_alumno
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-indigo-600 text-white rounded-md font-sans">
                  FOREIGN KEY
                </span>
              </div>
              <div className="flex justify-between p-1 text-purple-700 dark:text-purple-300">
                <span>fecha_matricula</span>
                <span>DATE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-purple-200/60 dark:bg-purple-900/40 rounded-xl text-center text-xs text-purple-800 dark:text-purple-200 font-semibold">
          🔗 <strong>Integridad Referencial:</strong> No se puede registrar una matrícula con un <code>id_alumno</code> que no exista previamente en la tabla ALUMNO.
        </div>
      </div>
    );
  }

  // 17. ER Case Study: Diagrama ER Completo (Lámina 8)
  if (detailedDiagramType === 'er-casestudy') {
    return (
      <div className="bg-purple-100/60 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800 text-center">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5">
          <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Diagrama Entidad-Relación Completo • Caso Académico UPLA / Borahae</span>
        </div>

        {/* Graphical Map */}
        <div className="bg-white dark:bg-purple-900/70 p-5 rounded-2xl border-2 border-purple-300 dark:border-purple-700 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
            {/* Entity 1: Alumno */}
            <div className="p-3 rounded-xl border-2 border-purple-600 bg-purple-50 dark:bg-purple-950">
              <div className="font-black text-xs text-purple-900 dark:text-purple-100 mb-1">
                [ ALUMNO ]
              </div>
              <div className="text-[10px] text-purple-700 dark:text-purple-300 font-mono space-y-0.5">
                <div className="underline font-bold">cod_alumno (PK)</div>
                <div>nombres, dni, correo</div>
              </div>
            </div>

            {/* Relationship: Matrícula (N:M) */}
            <div className="p-2.5 rounded-xl border border-dashed border-purple-500 bg-purple-100/80 dark:bg-purple-900/80 flex flex-col items-center">
              <span className="text-[10px] font-black text-purple-800 dark:text-purple-200">
                ◇ SE MATRICULA ◇
              </span>
              <span className="text-[9px] text-purple-600 dark:text-purple-300 font-mono">
                (N : M) • fecha, nota_final
              </span>
            </div>

            {/* Entity 2: Curso */}
            <div className="p-3 rounded-xl border-2 border-indigo-600 bg-indigo-50 dark:bg-indigo-950">
              <div className="font-black text-xs text-indigo-900 dark:text-indigo-100 mb-1">
                [ CURSO ]
              </div>
              <div className="text-[10px] text-indigo-700 dark:text-indigo-300 font-mono space-y-0.5">
                <div className="underline font-bold">cod_curso (PK)</div>
                <div>nombre_curso, creditos</div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end pr-12 text-sm text-purple-400 font-bold">
            ↓ (N : 1) Imparte
          </div>

          {/* Lower row: Docente & Aula */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            {/* Entity 3: Docente */}
            <div className="p-3 rounded-xl border-2 border-fuchsia-600 bg-fuchsia-50 dark:bg-fuchsia-950">
              <div className="font-black text-xs text-fuchsia-900 dark:text-fuchsia-100 mb-1">
                [ DOCENTE ]
              </div>
              <div className="text-[10px] text-fuchsia-700 dark:text-fuchsia-300 font-mono space-y-0.5">
                <div className="underline font-bold">cod_docente (PK)</div>
                <div>nombres, especialidad</div>
              </div>
            </div>

            {/* Entity 4: Aula */}
            <div className="p-3 rounded-xl border-2 border-emerald-600 bg-emerald-50 dark:bg-emerald-950">
              <div className="font-black text-xs text-emerald-900 dark:text-emerald-100 mb-1">
                [ AULA ]
              </div>
              <div className="text-[10px] text-emerald-700 dark:text-emerald-300 font-mono space-y-0.5">
                <div className="underline font-bold">num_aula (PK)</div>
                <div>pabellon, capacidad</div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs text-purple-700 dark:text-purple-300 font-bold">
          🎓 Caso Integrador: 4 Entidades, 3 Relaciones, Claves Primarias y Foráneas listas para la transformación a SQL.
        </p>
      </div>
    );
  }

  // 17. MongoDB NoSQL BSON Diagram
  if (detailedDiagramType === 'sgbd-mongodb') {
    return (
      <div className="bg-emerald-950/20 dark:bg-emerald-950/40 rounded-2xl p-4 sm:p-5 border-2 border-emerald-400/50 text-center">
        <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider mb-3 flex items-center justify-center gap-1.5">
          <Database className="w-4 h-4 text-emerald-500" />
          <span>Modelo de Documentos BSON & Clúster Sharding</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
          {/* BSON Document View */}
          <div className="bg-black/70 rounded-xl p-3 border border-emerald-500/40 font-mono text-[11px] text-emerald-300">
            <div className="text-[10px] text-emerald-400 font-bold mb-1 flex items-center justify-between">
              <span>📄 Documento BSON</span>
              <span className="text-purple-300">Colección: usuarios</span>
            </div>
            <pre className="text-[10px] leading-tight text-emerald-200">
{`{
  "_id": ObjectId("650f9a2..."),
  "nombre": "Jin",
  "grupo": "BTS",
  "correo": "jin@bts.com",
  "roles": ["Vocalista", "Visual"],
  "perfil": {
    "apodo": "Worldwide Handsome",
    "activo": true
  }
}`}
            </pre>
          </div>

          {/* MongoDB Cluster Architecture */}
          <div className="bg-purple-950/40 rounded-xl p-3 border border-purple-500/40 flex flex-col justify-between text-xs">
            <div className="font-bold text-purple-200 mb-2 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Escalabilidad Horizontal</span>
            </div>
            <div className="space-y-1.5 text-[10px]">
              <div className="p-1.5 rounded-lg bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-between">
                <span className="font-bold text-white">mongos Router</span>
                <span className="text-emerald-300 font-mono">Enruta consultas</span>
              </div>
              <div className="p-1.5 rounded-lg bg-purple-900/50 border border-purple-500/30 flex items-center justify-between">
                <span className="font-bold text-white">Shard A (Replica Set)</span>
                <span className="text-purple-200 font-mono">Datos A-M</span>
              </div>
              <div className="p-1.5 rounded-lg bg-purple-900/50 border border-purple-500/30 flex items-center justify-between">
                <span className="font-bold text-white">Shard B (Replica Set)</span>
                <span className="text-purple-200 font-mono">Datos N-Z</span>
              </div>
            </div>
            <div className="mt-2 text-[10px] text-emerald-300 font-semibold text-center">
              🍃 Schema-less: Colecciones flexibles sin esquemas fijos.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 18. PostgreSQL Relational & Extension Diagram
  if (detailedDiagramType === 'sgbd-postgresql') {
    return (
      <div className="bg-blue-950/20 dark:bg-blue-950/40 rounded-2xl p-4 sm:p-5 border-2 border-blue-400/50 text-center">
        <div className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-3 flex items-center justify-center gap-1.5">
          <Layers className="w-4 h-4 text-blue-500" />
          <span>Esquema Relacional Estructurado + PostGIS / JSONB</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left mb-3">
          {/* Table usuarios */}
          <div className="p-2.5 rounded-xl border border-blue-400/60 bg-blue-900/30">
            <div className="font-black text-xs text-blue-200 mb-1">
              usuarios
            </div>
            <div className="text-[10px] font-mono space-y-0.5 text-blue-300">
              <div className="font-bold text-amber-300">🔑 id (PK) : INT</div>
              <div>nombre : VARCHAR(100)</div>
              <div>email : VARCHAR(150)</div>
              <div>activo : BOOLEAN</div>
            </div>
          </div>

          {/* Table pedidos */}
          <div className="p-2.5 rounded-xl border border-purple-400/60 bg-purple-900/30">
            <div className="font-black text-xs text-purple-200 mb-1">
              pedidos
            </div>
            <div className="text-[10px] font-mono space-y-0.5 text-purple-300">
              <div className="font-bold text-amber-300">🔑 id (PK) : INT</div>
              <div className="font-bold text-cyan-300">🔗 usuario_id (FK)</div>
              <div>fecha : TIMESTAMP</div>
            </div>
          </div>

          {/* Table productos */}
          <div className="p-2.5 rounded-xl border border-emerald-400/60 bg-emerald-900/30">
            <div className="font-black text-xs text-emerald-200 mb-1">
              productos
            </div>
            <div className="text-[10px] font-mono space-y-0.5 text-emerald-300">
              <div className="font-bold text-amber-300">🔑 id (PK) : INT</div>
              <div>producto : VARCHAR</div>
              <div>precio : NUMERIC</div>
            </div>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-400/40 text-[10px] text-blue-200 flex flex-wrap items-center justify-around gap-2 font-mono">
          <span>🛡️ ACID Estricto</span>
          <span>🐘 MVCC Concurrente</span>
          <span>🗺️ PostGIS Geoespacial</span>
          <span>⚡ JSONB Híbrido</span>
        </div>
      </div>
    );
  }

  // 19. Oracle Database Architecture Diagram
  if (detailedDiagramType === 'sgbd-oracle') {
    return (
      <div className="bg-rose-950/20 dark:bg-rose-950/40 rounded-2xl p-4 sm:p-5 border-2 border-rose-400/50 text-center">
        <div className="text-xs font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wider mb-3 flex items-center justify-center gap-1.5">
          <Server className="w-4 h-4 text-rose-500" />
          <span>Arquitectura Oracle: Memoria SGA & Procesos de Fondo</span>
        </div>

        <div className="space-y-2.5 text-left">
          {/* SGA Layer */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-red-950/70 to-rose-950/70 border border-rose-500/50">
            <div className="text-[10px] font-bold text-rose-200 uppercase mb-1.5 flex items-center justify-between">
              <span>SGA (System Global Area) • Memoria Compartida</span>
              <span className="text-amber-300 font-mono">RAM</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-1.5 rounded-lg bg-black/40 border border-rose-400/30 text-rose-100 font-mono">
                Buffer Cache
              </div>
              <div className="p-1.5 rounded-lg bg-black/40 border border-rose-400/30 text-rose-100 font-mono">
                Shared Pool (SQL)
              </div>
              <div className="p-1.5 rounded-lg bg-black/40 border border-rose-400/30 text-rose-100 font-mono">
                Redo Log Buffer
              </div>
            </div>
          </div>

          {/* Background Processes */}
          <div className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-500/40 text-center">
            <div className="text-[10px] font-bold text-purple-200 mb-1">
              Procesos de Fondo (Background Processes)
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-purple-300">
              <span className="px-2 py-0.5 bg-black/40 rounded-md border border-purple-400/30">DBWn (Writer)</span>
              <span className="px-2 py-0.5 bg-black/40 rounded-md border border-purple-400/30">LGWR (Log Writer)</span>
              <span className="px-2 py-0.5 bg-black/40 rounded-md border border-purple-400/30">CKPT (Checkpoint)</span>
              <span className="px-2 py-0.5 bg-black/40 rounded-md border border-purple-400/30">SMON / PMON</span>
            </div>
          </div>

          {/* Physical Storage */}
          <div className="p-2 rounded-xl bg-black/40 border border-rose-500/30 text-center text-[10px] text-rose-300 font-mono">
            💾 Almacenamiento Físico: Tablespaces • Datafiles (.dbf) • Control Files • Redo Logs
          </div>
        </div>
      </div>
    );
  }

  // 20. MySQL Storage Engine Architecture
  if (detailedDiagramType === 'sgbd-mysql') {
    return (
      <div className="bg-cyan-950/20 dark:bg-cyan-950/40 rounded-2xl p-4 sm:p-5 border-2 border-cyan-400/50 text-center">
        <div className="text-xs font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-wider mb-3 flex items-center justify-center gap-1.5">
          <Database className="w-4 h-4 text-cyan-500" />
          <span>Arquitectura MySQL & Tipos de Datos</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
          {/* Storage Engine Pipeline */}
          <div className="p-3 rounded-xl bg-cyan-950/50 border border-cyan-500/40 space-y-1.5 text-[10px]">
            <div className="font-bold text-cyan-200 mb-1">
              Capas del Servidor mysqld
            </div>
            <div className="p-1 rounded-lg bg-black/40 border border-cyan-400/30 text-cyan-100">
              1. Conexiones: Clientes (Workbench, PHP, Python)
            </div>
            <div className="p-1 rounded-lg bg-black/40 border border-cyan-400/30 text-cyan-100">
              2. Núcleo: Parser SQL, Optimizador y Caché
            </div>
            <div className="p-1 rounded-lg bg-emerald-950/80 border border-emerald-400/50 text-emerald-200 font-bold">
              3. Motores Conectables: InnoDB (ACID) / Memory / MyISAM
            </div>
          </div>

          {/* Common Data Types Box */}
          <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/40 text-[10px]">
            <div className="font-bold text-purple-200 mb-1.5">
              Tipos de Datos de la Lámina
            </div>
            <div className="grid grid-cols-2 gap-1 font-mono text-[9px]">
              <span className="p-1 bg-black/40 rounded border border-purple-400/30 text-purple-200">INT (Enteros)</span>
              <span className="p-1 bg-black/40 rounded border border-purple-400/30 text-purple-200">VARCHAR(n) (Texto)</span>
              <span className="p-1 bg-black/40 rounded border border-purple-400/30 text-purple-200">TEXT (Texto Largo)</span>
              <span className="p-1 bg-black/40 rounded border border-purple-400/30 text-purple-200">DATE (YYYY-MM-DD)</span>
              <span className="p-1 bg-black/40 rounded border border-purple-400/30 text-purple-200">DATETIME (Fecha+Hora)</span>
              <span className="p-1 bg-black/40 rounded border border-purple-400/30 text-purple-200">BOOLEAN (1 ó 0)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 21. MS-SQL Server Integrated Ecosystem & Timeline
  if (detailedDiagramType === 'sgbd-mssql') {
    return (
      <div className="bg-purple-950/30 dark:bg-purple-950/50 rounded-2xl p-4 sm:p-5 border-2 border-purple-400/50 text-center">
        <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-3 flex items-center justify-center gap-1.5">
          <Workflow className="w-4 h-4 text-purple-400" />
          <span>Ecosistema Microsoft SQL Server & Línea de Tiempo</span>
        </div>

        {/* Timeline */}
        <div className="mb-3 p-2.5 rounded-xl bg-black/50 border border-purple-400/30 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[340px] text-[10px] font-mono">
            <div className="text-center">
              <span className="px-1.5 py-0.5 rounded bg-purple-900 text-purple-200 font-bold">1989</span>
              <div className="text-[9px] text-purple-300 mt-0.5">Sybase/OS2</div>
            </div>
            <ArrowRight className="w-3 h-3 text-purple-400" />
            <div className="text-center">
              <span className="px-1.5 py-0.5 rounded bg-purple-900 text-purple-200 font-bold">1996</span>
              <div className="text-[9px] text-purple-300 mt-0.5">Windows NT</div>
            </div>
            <ArrowRight className="w-3 h-3 text-purple-400" />
            <div className="text-center">
              <span className="px-1.5 py-0.5 rounded bg-purple-900 text-purple-200 font-bold">2005</span>
              <div className="text-[9px] text-purple-300 mt-0.5">SSIS / SSRS</div>
            </div>
            <ArrowRight className="w-3 h-3 text-purple-400" />
            <div className="text-center">
              <span className="px-1.5 py-0.5 rounded bg-purple-900 text-purple-200 font-bold">2012</span>
              <div className="text-[9px] text-purple-300 mt-0.5">Always On</div>
            </div>
            <ArrowRight className="w-3 h-3 text-purple-400" />
            <div className="text-center">
              <span className="px-1.5 py-0.5 rounded bg-pink-600 text-white font-bold">2022</span>
              <div className="text-[9px] text-pink-300 mt-0.5">IA & Nube Híbrida</div>
            </div>
          </div>
        </div>

        {/* Integrated Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-left">
          <div className="p-2 rounded-lg bg-purple-900/40 border border-purple-500/30">
            <div className="font-bold text-white">Database Engine</div>
            <div className="text-[9px] text-purple-300">Procesa datos y T-SQL</div>
          </div>
          <div className="p-2 rounded-lg bg-purple-900/40 border border-purple-500/30">
            <div className="font-bold text-white">SQL Server Agent</div>
            <div className="text-[9px] text-purple-300">Jobs y automatización</div>
          </div>
          <div className="p-2 rounded-lg bg-purple-900/40 border border-purple-500/30">
            <div className="font-bold text-white">SSRS (Reportes)</div>
            <div className="text-[9px] text-purple-300">Visualización ejecutiva</div>
          </div>
          <div className="p-2 rounded-lg bg-purple-900/40 border border-purple-500/30">
            <div className="font-bold text-white">SSIS (ETL)</div>
            <div className="text-[9px] text-purple-300">Integración de datos</div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // WEEK 3 ACTIVITY 1 - DATABASE LIFECYCLE DIAGRAMS
  // ==========================================

  // W3A1 - 1: Diseño e Implementación de Bases de Datos (Ciclo Completo)
  if (detailedDiagramType === 'db-design-lifecycle') {
    return (
      <div className="bg-gradient-to-br from-indigo-950/90 to-purple-950/90 rounded-2xl p-4 sm:p-5 border border-indigo-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Workflow className="w-4 h-4 text-indigo-400" />
          <span>Pipeline de Ingeniería: Del Requerimiento al Mantenimiento</span>
        </div>

        {/* 5-Stage Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-indigo-900/50 border border-indigo-500/30 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between text-[10px] text-indigo-300 font-bold mb-1">
                <span>Fase 1</span>
                <span className="w-4 h-4 rounded-full bg-indigo-700 flex items-center justify-center text-[9px]">1</span>
              </div>
              <h5 className="font-bold text-white text-xs">Requisitos</h5>
              <p className="text-[10px] text-indigo-200 mt-1 leading-snug">
                Entrevistas, reglas de negocio y restricciones operativas.
              </p>
            </div>
            <span className="text-[9px] font-mono text-indigo-300 mt-2 block bg-indigo-950/60 px-1.5 py-0.5 rounded">
              Especificación
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-purple-900/50 border border-purple-500/30 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between text-[10px] text-purple-300 font-bold mb-1">
                <span>Fase 2</span>
                <span className="w-4 h-4 rounded-full bg-purple-700 flex items-center justify-center text-[9px]">2</span>
              </div>
              <h5 className="font-bold text-white text-xs">Conceptual</h5>
              <p className="text-[10px] text-purple-200 mt-1 leading-snug">
                Diagrama MER: Entidades, atributos y cardinalidades.
              </p>
            </div>
            <span className="text-[9px] font-mono text-purple-300 mt-2 block bg-purple-950/60 px-1.5 py-0.5 rounded">
              Indep. Tecnológica
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-blue-900/50 border border-blue-500/30 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between text-[10px] text-blue-300 font-bold mb-1">
                <span>Fase 3</span>
                <span className="w-4 h-4 rounded-full bg-blue-700 flex items-center justify-center text-[9px]">3</span>
              </div>
              <h5 className="font-bold text-white text-xs">Lógico</h5>
              <p className="text-[10px] text-blue-200 mt-1 leading-snug">
                Tablas relacionales, claves PK/FK y normalización 1FN-3FN.
              </p>
            </div>
            <span className="text-[9px] font-mono text-blue-300 mt-2 block bg-blue-950/60 px-1.5 py-0.5 rounded">
              Estructura Relacional
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-teal-900/50 border border-teal-500/30 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between text-[10px] text-teal-300 font-bold mb-1">
                <span>Fase 4</span>
                <span className="w-4 h-4 rounded-full bg-teal-700 flex items-center justify-center text-[9px]">4</span>
              </div>
              <h5 className="font-bold text-white text-xs">Físico</h5>
              <p className="text-[10px] text-teal-200 mt-1 leading-snug">
                Tipos nativos, índices B-Tree, particiones y almacenamiento.
              </p>
            </div>
            <span className="text-[9px] font-mono text-teal-300 mt-2 block bg-teal-950/60 px-1.5 py-0.5 rounded">
              Optimizado para SGBD
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-pink-900/50 border border-pink-500/30 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between text-[10px] text-pink-300 font-bold mb-1">
                <span>Fase 5</span>
                <span className="w-4 h-4 rounded-full bg-pink-700 flex items-center justify-center text-[9px]">5</span>
              </div>
              <h5 className="font-bold text-white text-xs">Prod. & Mant.</h5>
              <p className="text-[10px] text-pink-200 mt-1 leading-snug">
                Ejecución DDL, pruebas, monitoreo, backups y optimización.
              </p>
            </div>
            <span className="text-[9px] font-mono text-pink-300 mt-2 block bg-pink-950/60 px-1.5 py-0.5 rounded">
              Mejora Continua
            </span>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-2.5 rounded-xl bg-indigo-900/30 border border-indigo-500/20 text-[11px] flex flex-wrap items-center justify-between gap-2 text-indigo-200">
          <span>🎯 <strong>Objetivo Integral:</strong> Garantizar consistencia, alto rendimiento y seguridad de datos.</span>
          <span className="font-mono text-amber-300">Requisitos → MER → Tablas → SGBD → Operación</span>
        </div>
      </div>
    );
  }

  // W3A1 - 2: Modelo Conceptual
  if (detailedDiagramType === 'conceptual-model') {
    return (
      <div className="bg-gradient-to-br from-purple-950/90 to-indigo-950/90 rounded-2xl p-4 sm:p-5 border border-purple-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Layers className="w-4 h-4 text-purple-400" />
          <span>Modelo Conceptual: Representación Semántica del Negocio (MER)</span>
        </div>

        {/* Conceptual Diagram Visualization */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          <div className="p-3 rounded-xl bg-purple-900/60 border border-purple-500/40 text-center space-y-1">
            <span className="px-2 py-0.5 rounded bg-purple-700/60 text-purple-200 text-[10px] font-bold uppercase">
              Entidad Fuerte
            </span>
            <div className="text-base font-extrabold text-amber-300">CLIENTE / FAN</div>
            <div className="text-[10px] text-purple-200 font-mono space-y-0.5 pt-1">
              <div>• <span className="underline font-bold">id_fan</span> (Identificador)</div>
              <div>• nombre_completo</div>
              <div>• correo_electronico</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-pink-900/50 border border-pink-500/40 text-center space-y-1">
            <div className="w-8 h-8 mx-auto rotate-45 border-2 border-pink-400 bg-pink-950 flex items-center justify-center">
              <span className="-rotate-45 text-[9px] font-black text-pink-300">R</span>
            </div>
            <div className="text-xs font-bold text-white pt-1">REALIZA COMPRA</div>
            <div className="flex items-center justify-center gap-2 text-[10px] text-pink-300 font-mono">
              <span className="px-1.5 py-0.5 bg-pink-950/80 rounded border border-pink-500/30">1</span>
              <span>↔</span>
              <span className="px-1.5 py-0.5 bg-pink-950/80 rounded border border-pink-500/30">N</span>
            </div>
            <p className="text-[9px] text-pink-200">Cardinalidad: 1 Cliente puede tener N Pedidos</p>
          </div>

          <div className="p-3 rounded-xl bg-indigo-900/60 border border-indigo-500/40 text-center space-y-1">
            <span className="px-2 py-0.5 rounded bg-indigo-700/60 text-indigo-200 text-[10px] font-bold uppercase">
              Entidad
            </span>
            <div className="text-base font-extrabold text-cyan-300">PEDIDO ÁLBUM</div>
            <div className="text-[10px] text-indigo-200 font-mono space-y-0.5 pt-1">
              <div>• <span className="underline font-bold">id_pedido</span> (Identificador)</div>
              <div>• fecha_compra</div>
              <div>• total_monto</div>
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-left">
          <div className="p-2 rounded-lg bg-purple-900/40 border border-purple-500/30">
            <span className="text-amber-300 font-bold block text-xs">Entidades</span>
            <span className="text-purple-200 text-[10px]">Sustantivos del negocio con atributos identificadores.</span>
          </div>
          <div className="p-2 rounded-lg bg-purple-900/40 border border-purple-500/30">
            <span className="text-pink-300 font-bold block text-xs">Relaciones</span>
            <span className="text-purple-200 text-[10px]">Verbos y acciones que conectan dos o más entidades.</span>
          </div>
          <div className="p-2 rounded-lg bg-purple-900/40 border border-purple-500/30">
            <span className="text-cyan-300 font-bold block text-xs">Cardinalidades</span>
            <span className="text-purple-200 text-[10px]">Reglas mínimas (0,1) y máximas (1,N,M) de participación.</span>
          </div>
          <div className="p-2 rounded-lg bg-purple-900/40 border border-purple-500/30">
            <span className="text-emerald-300 font-bold block text-xs">Autonomía</span>
            <span className="text-purple-200 text-[10px]">Independiente de marcas de SGBD, SQL o discos.</span>
          </div>
        </div>
      </div>
    );
  }

  // W3A1 - 3: Modelo Lógico
  if (detailedDiagramType === 'logical-model') {
    return (
      <div className="bg-gradient-to-br from-blue-950/90 to-indigo-950/90 rounded-2xl p-4 sm:p-5 border border-blue-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-blue-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Database className="w-4 h-4 text-blue-400" />
          <span>Modelo Lógico: Estructura de Tablas, Claves PK/FK y Normalización</span>
        </div>

        {/* Logical Schema Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          {/* Table 1: Clientes */}
          <div className="p-3 rounded-xl bg-blue-900/50 border border-blue-500/40 space-y-2">
            <div className="flex items-center justify-between border-b border-blue-400/30 pb-1.5">
              <span className="font-extrabold text-amber-300 text-xs flex items-center gap-1">
                <Table className="w-3.5 h-3.5" />
                <span>TABLA: clientes</span>
              </span>
              <span className="text-[10px] text-blue-200 font-mono">3 columnas</span>
            </div>
            <div className="font-mono text-[11px] space-y-1">
              <div className="flex justify-between items-center bg-blue-950/60 p-1 rounded">
                <span><strong className="text-amber-300">PK</strong> id_cliente</span>
                <span className="text-blue-300 text-[10px]">INTEGER (NOT NULL)</span>
              </div>
              <div className="flex justify-between items-center p-1">
                <span>nombre</span>
                <span className="text-blue-300 text-[10px]">VARCHAR(100)</span>
              </div>
              <div className="flex justify-between items-center p-1">
                <span>correo</span>
                <span className="text-blue-300 text-[10px]">VARCHAR(150) UNIQUE</span>
              </div>
            </div>
          </div>

          {/* Table 2: Pedidos with FK */}
          <div className="p-3 rounded-xl bg-indigo-900/50 border border-indigo-500/40 space-y-2">
            <div className="flex items-center justify-between border-b border-indigo-400/30 pb-1.5">
              <span className="font-extrabold text-cyan-300 text-xs flex items-center gap-1">
                <Table className="w-3.5 h-3.5" />
                <span>TABLA: pedidos</span>
              </span>
              <span className="text-[10px] text-indigo-200 font-mono">4 columnas</span>
            </div>
            <div className="font-mono text-[11px] space-y-1">
              <div className="flex justify-between items-center bg-indigo-950/60 p-1 rounded">
                <span><strong className="text-amber-300">PK</strong> id_pedido</span>
                <span className="text-indigo-300 text-[10px]">INTEGER</span>
              </div>
              <div className="flex justify-between items-center bg-pink-950/60 p-1 rounded border border-pink-500/40">
                <span><strong className="text-pink-300">FK</strong> id_cliente</span>
                <span className="text-pink-200 text-[10px]">→ clientes.id_cliente</span>
              </div>
              <div className="flex justify-between items-center p-1">
                <span>fecha_compra</span>
                <span className="text-indigo-300 text-[10px]">DATE</span>
              </div>
              <div className="flex justify-between items-center p-1">
                <span>monto</span>
                <span className="text-indigo-300 text-[10px]">DECIMAL(10,2)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Logical Rules Summary */}
        <div className="p-2.5 rounded-xl bg-blue-900/40 border border-blue-400/30 text-[11px] flex flex-wrap items-center justify-between gap-2 text-blue-200">
          <span>🔒 <strong>Integridad Referencial:</strong> La FK garantiza que no existan pedidos huérfanos sin cliente válido.</span>
          <span className="font-mono text-cyan-300">Normalizado en 3FN • Libre de Anomalías</span>
        </div>
      </div>
    );
  }

  // W3A1 - 4: Modelo Físico
  if (detailedDiagramType === 'physical-model') {
    return (
      <div className="bg-gradient-to-br from-teal-950/90 to-emerald-950/90 rounded-2xl p-4 sm:p-5 border border-teal-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <HardDrive className="w-4 h-4 text-teal-400" />
          <span>Modelo Físico: Optimización para el SGBD y Hardware</span>
        </div>

        {/* 3 Physical Optimization Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs">
          <div className="p-3 rounded-xl bg-teal-900/40 border border-teal-500/30 space-y-1.5">
            <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs">
              <Cpu className="w-4 h-4" />
              <span>1. Tipos de Datos Nativos</span>
            </div>
            <p className="text-[10px] text-teal-200">
              Uso de <code>INT4</code> (4 bytes) vs <code>BIGINT</code> (8 bytes), <code>NUMERIC(10,2)</code> para dinero y <code>TIMESTAMPTZ</code>.
            </p>
            <span className="text-[9px] font-mono text-teal-300 block bg-teal-950/60 p-1 rounded">
              Ahorro de RAM en Buffers
            </span>
          </div>

          <div className="p-3 rounded-xl bg-teal-900/40 border border-teal-500/30 space-y-1.5">
            <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-xs">
              <GitBranch className="w-4 h-4" />
              <span>2. Índices B-Tree & Hash</span>
            </div>
            <p className="text-[10px] text-teal-200">
              Árboles de búsqueda balanceados sobre FKs y columnas WHERE: <code>CREATE INDEX idx_pedidos_fecha...</code>
            </p>
            <span className="text-[9px] font-mono text-cyan-300 block bg-teal-950/60 p-1 rounded">
              Búsquedas en O(log N)
            </span>
          </div>

          <div className="p-3 rounded-xl bg-teal-900/40 border border-teal-500/30 space-y-1.5">
            <div className="flex items-center gap-1.5 text-emerald-300 font-bold text-xs">
              <Server className="w-4 h-4" />
              <span>3. Tablespaces & Particiones</span>
            </div>
            <p className="text-[10px] text-teal-200">
              Distribución de tablas pesadas en discos SSD NVMe dedicados y particionamiento horizontal por rango mensual.
            </p>
            <span className="text-[9px] font-mono text-emerald-300 block bg-teal-950/60 p-1 rounded">
              Particionamiento por Fechas
            </span>
          </div>
        </div>

        {/* Explain analyze callout */}
        <div className="p-2.5 rounded-xl bg-teal-900/30 border border-teal-500/20 text-[11px] flex items-center justify-between text-teal-200">
          <span>⚡ <strong>Métrica:</strong> Pasar de <em>Seq Scan</em> (recorrido completo de disco) a <em>Index Scan</em> en milisegundos.</span>
          <span className="font-mono text-amber-300">EXPLAIN ANALYZE</span>
        </div>
      </div>
    );
  }

  // W3A1 - 5: Implementación y Pruebas
  if (detailedDiagramType === 'implementation-testing') {
    return (
      <div className="bg-gradient-to-br from-amber-950/90 to-yellow-950/90 rounded-2xl p-4 sm:p-5 border border-amber-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Terminal className="w-4 h-4 text-amber-400" />
          <span>Implementación DDL y Batería de Pruebas de Calidad</span>
        </div>

        {/* Testing Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-xs">
          <div className="p-3 rounded-xl bg-amber-900/40 border border-amber-500/30 space-y-2">
            <span className="text-amber-300 font-bold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>1. Ejecución DDL & Carga Piloto</span>
            </span>
            <div className="bg-black/40 p-2 rounded font-mono text-[10px] text-amber-200 space-y-1">
              <div>CREATE TABLE albumes (...);</div>
              <div>ALTER TABLE canciones ADD CONSTRAINT fk_alb...;</div>
              <div className="text-emerald-400">✓ 15 tablas creadas con éxito</div>
              <div className="text-cyan-300">✓ 5,000 registros piloto insertados</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-900/40 border border-amber-500/30 space-y-2">
            <span className="text-amber-300 font-bold flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>2. Validaciones de Integridad y Estrés</span>
            </span>
            <ul className="text-[10px] text-amber-100 space-y-1 font-mono">
              <li className="flex items-center gap-1 text-emerald-300">
                <span>[✓]</span> Intento de PK duplicada rechazado correctamente
              </li>
              <li className="flex items-center gap-1 text-emerald-300">
                <span>[✓]</span> Clave foránea inexistente bloqueada por SGBD
              </li>
              <li className="flex items-center gap-1 text-emerald-300">
                <span>[✓]</span> Prueba de concurrencia: 1,000 transacciones/seg
              </li>
              <li className="flex items-center gap-1 text-emerald-300">
                <span>[✓]</span> Permisos de usuarios (ROLES / GRANTS) validados
              </li>
            </ul>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-amber-900/30 border border-amber-500/20 text-[11px] text-amber-200">
          <span>🧪 <strong>Conclusión de Pruebas:</strong> Ningún sistema se libera a producción sin superar pruebas de estrés y restricciones.</span>
        </div>
      </div>
    );
  }

  // W3A1 - 6: Mantenimiento y Optimización
  if (detailedDiagramType === 'maintenance-optimization') {
    return (
      <div className="bg-gradient-to-br from-rose-950/90 to-purple-950/90 rounded-2xl p-4 sm:p-5 border border-rose-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Activity className="w-4 h-4 text-rose-400" />
          <span>Mantenimiento Continuo, Respaldos y Tuning del SGBD</span>
        </div>

        {/* 4 DBA Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left text-xs">
          <div className="p-2.5 rounded-xl bg-rose-900/40 border border-rose-500/30 space-y-1">
            <div className="font-bold text-rose-300 text-xs flex items-center gap-1">
              <Activity className="w-3.5 h-3.5" />
              <span>Monitoreo</span>
            </div>
            <p className="text-[10px] text-rose-100">
              Slow Query Log, cuellos de botella en CPU y memoria RAM.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-rose-900/40 border border-rose-500/30 space-y-1">
            <div className="font-bold text-amber-300 text-xs flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>REINDEX</span>
            </div>
            <p className="text-[10px] text-rose-100">
              Desfragmentar árboles B-Tree tras millones de eliminaciones.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-rose-900/40 border border-rose-500/30 space-y-1">
            <div className="font-bold text-cyan-300 text-xs flex items-center gap-1">
              <Database className="w-3.5 h-3.5" />
              <span>VACUUM</span>
            </div>
            <p className="text-[10px] text-rose-100">
              Limpieza de tuplas muertas y actualización de estadísticas (ANALYZE).
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-rose-900/40 border border-rose-500/30 space-y-1">
            <div className="font-bold text-emerald-300 text-xs flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Backup 3-2-1</span>
            </div>
            <p className="text-[10px] text-rose-100">
              Copias Full + WAL en la nube con simulacros periódicos de Restore.
            </p>
          </div>
        </div>

        {/* Tuning Bottom Bar */}
        <div className="p-2.5 rounded-xl bg-rose-900/30 border border-rose-500/20 text-[11px] flex flex-wrap items-center justify-between gap-2 text-rose-200">
          <span>🔄 <strong>Salud del Motor:</strong> Buffer Cache Hit Ratio &gt; 99% • Cero pérdida de datos (RPO = 0).</span>
          <span className="font-mono text-amber-300">Planificador Actualizado • 24/7 Disponible</span>
        </div>
      </div>
    );
  }

  // Week 3 - Diagram 1: Relational Model
  if (detailedDiagramType === 'relational-model') {
    return (
      <div className="bg-indigo-950/80 rounded-2xl p-4 sm:p-5 border border-indigo-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Database className="w-4 h-4 text-indigo-400" />
          <span>Estructura Formal: Relación, Tuplas y Atributos</span>
        </div>

        {/* Relational Table Mockup */}
        <div className="overflow-x-auto rounded-xl border border-indigo-400/30 bg-indigo-900/40 text-xs">
          <table className="w-full text-left">
            <thead className="bg-indigo-700/60 text-indigo-100 font-extrabold text-[11px] uppercase">
              <tr>
                <th className="p-2 border-b border-indigo-500/30">
                  <span className="text-amber-300">PK</span> id_estudiante
                </th>
                <th className="p-2 border-b border-indigo-500/30">nombre</th>
                <th className="p-2 border-b border-indigo-500/30">carrera</th>
                <th className="p-2 border-b border-indigo-500/30">semestre</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-800/40 font-mono text-[11px]">
              <tr className="hover:bg-indigo-800/30">
                <td className="p-2 font-bold text-amber-300">EST-101</td>
                <td className="p-2 text-indigo-100">Kim Namjoon</td>
                <td className="p-2 text-indigo-200">Sistemas</td>
                <td className="p-2 text-indigo-300">VII</td>
              </tr>
              <tr className="hover:bg-indigo-800/30">
                <td className="p-2 font-bold text-amber-300">EST-102</td>
                <td className="p-2 text-indigo-100">Kim Seokjin</td>
                <td className="p-2 text-indigo-200">Software</td>
                <td className="p-2 text-indigo-300">VIII</td>
              </tr>
              <tr className="hover:bg-indigo-800/30">
                <td className="p-2 font-bold text-amber-300">EST-103</td>
                <td className="p-2 text-indigo-100">Min Yoongi</td>
                <td className="p-2 text-indigo-200">Ciberseguridad</td>
                <td className="p-2 text-indigo-300">VI</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Legend pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
          <div className="p-2 rounded-lg bg-indigo-900/60 border border-indigo-500/30">
            <span className="font-black text-amber-300 block">Relación</span>
            <span className="text-indigo-200">Tabla completa con nombre único</span>
          </div>
          <div className="p-2 rounded-lg bg-indigo-900/60 border border-indigo-500/30">
            <span className="font-black text-cyan-300 block">Tupla</span>
            <span className="text-indigo-200">Cada fila (registro con datos)</span>
          </div>
          <div className="p-2 rounded-lg bg-indigo-900/60 border border-indigo-500/30">
            <span className="font-black text-emerald-300 block">Atributo</span>
            <span className="text-indigo-200">Columna con tipo y dominio</span>
          </div>
          <div className="p-2 rounded-lg bg-indigo-900/60 border border-indigo-500/30">
            <span className="font-black text-pink-300 block">Dominio</span>
            <span className="text-indigo-200">Valores atómicos permitidos</span>
          </div>
        </div>
      </div>
    );
  }

  // Week 3 - Diagram 2: Keys and Integrity
  if (detailedDiagramType === 'relational-keys') {
    return (
      <div className="bg-purple-950/80 rounded-2xl p-4 sm:p-5 border border-purple-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Key className="w-4 h-4 text-amber-400" />
          <span>Jerarquía de Claves e Integridad Referencial</span>
        </div>

        {/* Visual Hierarchy */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-purple-900/60 border border-purple-500/40 flex flex-col items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-purple-300">1. Identificación</span>
            <div className="my-2 p-2 rounded-lg bg-amber-400/20 text-amber-300 font-extrabold text-sm border border-amber-400/30">
              Primary Key (PK)
            </div>
            <p className="text-[10px] text-purple-200">Única e inviolable. NOT NULL obligatoria.</p>
          </div>

          <div className="p-3 rounded-xl bg-purple-900/60 border border-purple-500/40 flex flex-col items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-pink-300">2. Asociación</span>
            <div className="my-2 p-2 rounded-lg bg-pink-400/20 text-pink-300 font-extrabold text-sm border border-pink-400/30">
              Foreign Key (FK)
            </div>
            <p className="text-[10px] text-purple-200">Apunta a la PK de la tabla padre o es NULL.</p>
          </div>

          <div className="p-3 rounded-xl bg-purple-900/60 border border-purple-500/40 flex flex-col items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-cyan-300">3. Restricciones</span>
            <div className="my-2 p-2 rounded-lg bg-cyan-400/20 text-cyan-300 font-extrabold text-sm border border-cyan-400/30">
              CHECK & UNIQUE
            </div>
            <p className="text-[10px] text-purple-200">Garantizan rangos lógicos y dominios limpios.</p>
          </div>
        </div>

        {/* Cascade Rules */}
        <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-400/30 text-[11px] flex flex-wrap items-center justify-around gap-2 text-purple-200 font-semibold">
          <span className="px-2 py-0.5 rounded bg-purple-800 text-white">ON DELETE CASCADE</span>
          <span className="px-2 py-0.5 rounded bg-purple-800 text-white">ON DELETE RESTRICT</span>
          <span className="px-2 py-0.5 rounded bg-purple-800 text-white">ON UPDATE CASCADE</span>
        </div>
      </div>
    );
  }

  // Week 3 - Diagram 3: Codd Rules
  if (detailedDiagramType === 'codd-rules') {
    return (
      <div className="bg-amber-950/80 rounded-2xl p-4 sm:p-5 border border-amber-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>Las 12 Reglas de Edgar F. Codd (RDBMS)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left text-[11px]">
          <div className="p-2 rounded-xl bg-amber-900/40 border border-amber-500/30">
            <span className="text-amber-300 font-bold block">Regla 0 y 1</span>
            <span className="text-amber-100 text-[10px]">Gestión relacional pura y todo en tablas.</span>
          </div>
          <div className="p-2 rounded-xl bg-amber-900/40 border border-amber-500/30">
            <span className="text-amber-300 font-bold block">Regla 2 y 3</span>
            <span className="text-amber-100 text-[10px]">Acceso garantizado y tratamiento sistemático de nulos.</span>
          </div>
          <div className="p-2 rounded-xl bg-amber-900/40 border border-amber-500/30">
            <span className="text-amber-300 font-bold block">Regla 4 y 5</span>
            <span className="text-amber-100 text-[10px]">Catálogo en línea y sublenguaje comprensivo (SQL).</span>
          </div>
          <div className="p-2 rounded-xl bg-amber-900/40 border border-amber-500/30">
            <span className="text-amber-300 font-bold block">Regla 8 y 9</span>
            <span className="text-amber-100 text-[10px]">Independencia física y lógica de los datos.</span>
          </div>
        </div>
      </div>
    );
  }

  // Week 3 - Diagram 4: MER to Relational Mapping
  if (detailedDiagramType === 'mer-to-relational') {
    return (
      <div className="bg-teal-950/80 rounded-2xl p-4 sm:p-5 border border-teal-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Workflow className="w-4 h-4 text-teal-400" />
          <span>Reglas de Transformación: Conceptual MER a Esquema Relacional</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs">
          <div className="p-3 rounded-xl bg-teal-900/40 border border-teal-500/30">
            <span className="font-extrabold text-teal-300 block mb-1">1:N (Uno a Muchos)</span>
            <p className="text-[11px] text-teal-100">
              La PK del lado <strong>1</strong> viaja como <strong>FK</strong> a la tabla del lado <strong>N</strong>.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-teal-900/40 border border-teal-500/30">
            <span className="font-extrabold text-amber-300 block mb-1">N:M (Muchos a Muchos)</span>
            <p className="text-[11px] text-teal-100">
              Se crea obligatoriamente una <strong>tabla puente</strong> con (PK_1 + PK_2) como PK compuesta.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-teal-900/40 border border-teal-500/30">
            <span className="font-extrabold text-pink-300 block mb-1">Multivalorado</span>
            <p className="text-[11px] text-teal-100">
              Genera una tabla separada con la PK del padre más el valor del atributo.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Week 3 - Diagram 5: Relational Algebra
  if (detailedDiagramType === 'relational-algebra') {
    return (
      <div className="bg-rose-950/80 rounded-2xl p-4 sm:p-5 border border-rose-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Binary className="w-4 h-4 text-rose-400" />
          <span>Operadores del Álgebra Relacional vs. SQL</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div className="p-3 rounded-xl bg-rose-900/40 border border-rose-500/30">
            <span className="text-2xl font-black text-rose-300">σ</span>
            <div className="font-bold text-white text-[11px] mt-1">Selección</div>
            <div className="text-[10px] text-rose-200 font-mono mt-0.5">WHERE condición</div>
          </div>

          <div className="p-3 rounded-xl bg-rose-900/40 border border-rose-500/30">
            <span className="text-2xl font-black text-cyan-300">π</span>
            <div className="font-bold text-white text-[11px] mt-1">Proyección</div>
            <div className="text-[10px] text-rose-200 font-mono mt-0.5">SELECT cols</div>
          </div>

          <div className="p-3 rounded-xl bg-rose-900/40 border border-rose-500/30">
            <span className="text-2xl font-black text-amber-300">⨝</span>
            <div className="font-bold text-white text-[11px] mt-1">Natural Join</div>
            <div className="text-[10px] text-rose-200 font-mono mt-0.5">INNER JOIN ON</div>
          </div>

          <div className="p-3 rounded-xl bg-rose-900/40 border border-rose-500/30">
            <span className="text-2xl font-black text-emerald-300">∪</span>
            <div className="font-bold text-white text-[11px] mt-1">Unión</div>
            <div className="text-[10px] text-rose-200 font-mono mt-0.5">UNION [ALL]</div>
          </div>
        </div>
      </div>
    );
  }

  // Week 3 - Diagram 6: Normalization Intro & Anomalies
  if (detailedDiagramType === 'normalization-intro') {
    return (
      <div className="bg-violet-950/80 rounded-2xl p-4 sm:p-5 border border-violet-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-violet-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Shield className="w-4 h-4 text-violet-400" />
          <span>Las 3 Anomalías del Mal Diseño Relacional</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left text-xs">
          <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40">
            <div className="font-bold text-rose-300 flex items-center gap-1.5">
              <span>⚠️ Anomalía de Inserción</span>
            </div>
            <p className="text-[10px] text-rose-200 mt-1">
              Imposible registrar un dato independiente sin inventar obligatoriamente otro no existente.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-500/40">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <span>⚠️ Anomalía de Modificación</span>
            </div>
            <p className="text-[10px] text-amber-200 mt-1">
              Cambiar un dato requiere actualizar miles de filas; si una falla, los datos se vuelven inconsistentes.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-pink-950/60 border border-pink-500/40">
            <div className="font-bold text-pink-300 flex items-center gap-1.5">
              <span>⚠️ Anomalía de Borrado</span>
            </div>
            <p className="text-[10px] text-pink-200 mt-1">
              Eliminar un dato secundario borra de rebote información principal irrecuperable.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Week 3 - Diagram 7: 1FN
  if (detailedDiagramType === '1fn') {
    return (
      <div className="bg-fuchsia-950/80 rounded-2xl p-4 sm:p-5 border border-fuchsia-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-fuchsia-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4 text-fuchsia-400" />
          <span>Primera Forma Normal (1FN): Celdas con Valores Atómicos</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-xs">
          <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/30">
            <span className="text-rose-300 font-extrabold block mb-1">❌ Viola 1FN (No Atómico)</span>
            <div className="font-mono text-[10px] bg-black/40 p-2 rounded text-rose-200">
              Alumno: Namjoon<br />
              Cursos: ["BD", "Algoritmos", "Redes"]
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30">
            <span className="text-emerald-300 font-extrabold block mb-1">✅ Cumple 1FN (Atómico)</span>
            <div className="font-mono text-[10px] bg-black/40 p-2 rounded text-emerald-200">
              Fila 1: Namjoon | BD<br />
              Fila 2: Namjoon | Algoritmos<br />
              Fila 3: Namjoon | Redes
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Week 3 - Diagram 8: 2FN
  if (detailedDiagramType === '2fn') {
    return (
      <div className="bg-indigo-950/80 rounded-2xl p-4 sm:p-5 border border-indigo-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>Segunda Forma Normal (2FN): Dependencia Funcional Completa</span>
        </div>

        <div className="p-3 rounded-xl bg-indigo-900/40 border border-indigo-500/30 text-xs text-left">
          <p className="text-indigo-200 text-[11px] mb-2">
            Aplica a tablas con <strong>clave primaria compuesta (A, B)</strong>:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 rounded bg-indigo-950/60 border border-indigo-700/50">
              <span className="font-bold text-amber-300 block">Dependencia Parcial (Invalida 2FN):</span>
              Si el atributo C depende solo de A, debe migrar a una nueva tabla donde A sea la PK.
            </div>
            <div className="p-2 rounded bg-indigo-950/60 border border-indigo-700/50">
              <span className="font-bold text-emerald-300 block">Dependencia Completa (Válida en 2FN):</span>
              Los atributos que se quedan dependen de la combinación íntegra (A, B).
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Week 3 - Diagram 9: 3FN
  if (detailedDiagramType === '3fn') {
    return (
      <div className="bg-purple-950/80 rounded-2xl p-4 sm:p-5 border border-purple-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Zap className="w-4 h-4 text-purple-400" />
          <span>Tercera Forma Normal (3FN): Cero Dependencias Transitivas</span>
        </div>

        <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-500/30 text-xs text-center font-mono">
          <div className="text-pink-300 font-extrabold text-sm mb-2">
            PK ➔ Atributo A ➔ Atributo B (¡Transitiva!)
          </div>
          <div className="text-[11px] text-purple-200 font-sans">
            Solución: Se divide en dos tablas: <br />
            <strong>Tabla 1:</strong> (PK, Atributo A [FK]) &nbsp;•&nbsp; <strong>Tabla 2:</strong> (Atributo A [PK], Atributo B)
          </div>
        </div>
      </div>
    );
  }

  // Week 3 - Diagram 10: BCNF & Case Study
  if (detailedDiagramType === 'bcnf' || detailedDiagramType === 'norm-casestudy') {
    return (
      <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-950 rounded-2xl p-4 sm:p-5 border border-pink-400/40 text-center text-white space-y-4">
        <div className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>Escalera de Normalización: 1FN ➔ 2FN ➔ 3FN ➔ FNBC</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-xl bg-purple-900 border border-purple-400 text-purple-200 font-bold">1FN: Atómico</span>
          <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
          <span className="px-3 py-1.5 rounded-xl bg-indigo-900 border border-indigo-400 text-indigo-200 font-bold">2FN: Sin partes</span>
          <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
          <span className="px-3 py-1.5 rounded-xl bg-pink-900 border border-pink-400 text-pink-200 font-bold">3FN: Sin tránsitos</span>
          <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
          <span className="px-3 py-1.5 rounded-xl bg-emerald-900 border border-emerald-400 text-emerald-200 font-bold">FNBC: Rigor total</span>
        </div>
      </div>
    );
  }

  // Dynamic fallback for any node-based topic
  if (topic.scheme?.nodes && topic.scheme.nodes.length > 0) {
    return (
      <div className="bg-purple-950/70 rounded-2xl p-4 border border-purple-400/30 text-center text-white space-y-3">
        <div className="text-xs font-bold text-purple-300 uppercase tracking-wider">
          {topic.scheme.title || 'Esquema Conceptual'}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
          {topic.scheme.nodes.map((node, idx) => (
            <div key={idx} className="p-2 rounded-xl bg-purple-900/40 border border-purple-500/30 text-xs">
              <span className="font-bold text-amber-300 block truncate">{node.label}</span>
              <span className="text-[10px] text-purple-200 line-clamp-2">{node.role}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Fallback
  return null;
};
