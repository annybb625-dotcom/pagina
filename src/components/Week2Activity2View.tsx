import React, { useState, useRef } from 'react';
import { TopicSection, UserRole } from '../types';
import { InfographicDiagram } from './InfographicDiagram';
import {
  Database,
  Sparkles,
  Maximize2,
  Code2,
  CheckCircle2,
  Layers,
  ArrowRight,
  TrendingUp,
  FolderOpen,
  Upload,
  Copy,
  Check,
  Play,
  Terminal,
  ZoomIn,
  Eye,
  FileCode2,
  Server,
  Cpu,
  ShieldCheck,
} from 'lucide-react';

interface Week2Activity2ViewProps {
  topics: TopicSection[];
  userRole: UserRole;
  uploadedImages?: Record<string, string>;
  imagesMap?: Record<string, string>;
  onSelectTopic: (topic: TopicSection) => void;
  onEditTopic: (topic: TopicSection) => void;
  onOpenSlideGallery: (index: number) => void;
  onSwitchToActivity1: () => void;
  onPreviewImage?: (title: string, dataUrl: string) => void;
  onSaveImage?: (key: string, dataUrl: string) => void;
  onOpenFolderManager?: (folderId?: 's2_a2') => void;
  hideBanner?: boolean;
}

export const Week2Activity2View: React.FC<Week2Activity2ViewProps> = ({
  topics,
  userRole,
  uploadedImages = {},
  imagesMap = {},
  onSelectTopic,
  onEditTopic,
  onOpenSlideGallery,
  onSwitchToActivity1,
  onPreviewImage,
  onSaveImage,
  onOpenFolderManager,
  hideBanner = false,
}) => {
  const [activeTab, setActiveTab] = useState<'posters' | 'technical' | 'matrix' | 'lab'>('posters');
  const [selectedEngineId, setSelectedEngineId] = useState<string>(topics[0]?.id || 'w2-a2-oracle');
  const [copiedQueryId, setCopiedQueryId] = useState<string | null>(null);

  // File input refs for uploading image per card
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Lab runner state
  const [activeLabTab, setActiveLabTab] = useState<'nosql' | 'sql'>('nosql');
  const [labResult, setLabResult] = useState<any>(null);

  const selectedTopic = topics.find((t) => t.id === selectedEngineId) || topics[0];

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedQueryId(id);
    setTimeout(() => setCopiedQueryId(null), 2000);
  };

  const handleFileUpload = (slideKey: string, file: File) => {
    if (!onSaveImage) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        onSaveImage(slideKey, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const getSlideImage = (topic: TopicSection) => {
    const slideKey = `s2_a2_${topic.topicNumber}`;
    return (
      imagesMap[slideKey] ||
      uploadedImages[slideKey] ||
      topic.uploadedImageUrl ||
      `/assets/s2_a2_${topic.topicNumber}.jpeg` ||
      `/assets/sgbd_${topic.id.replace('w2-a2-', '')}.jpeg`
    );
  };

  const runMongoLab = () => {
    setLabResult({
      type: 'mongodb',
      matchedCount: 1,
      executionTimeMs: 1.2,
      documents: [
        {
          _id: '650f9a2b8e4f1a23c4d5e6f7',
          nombre: 'Jin',
          grupo: 'BTS',
          correo: 'jin@bts.com',
          roles: ['Vocalista', 'Visual'],
          perfil: {
            apodo: 'Worldwide Handsome',
            activo: true,
            ciudad: 'Seúl',
          },
          pedidos_recientes: [
            { id_pedido: 'ORD-777', total: 180.5, fecha: '2026-09-20' },
          ],
        },
      ],
    });
  };

  const runSqlLab = () => {
    setLabResult({
      type: 'sql',
      rowCount: 3,
      executionTimeMs: 2.4,
      columns: ['nombre', 'producto', 'precio', 'total'],
      rows: [
        { nombre: 'Jin', producto: 'ARMY Bomb Special Edition Ver. 4', precio: '$65.00', total: '$130.00' },
        { nombre: 'Jimin', producto: 'Album BE (Deluxe Edition)', precio: '$48.50', total: '$48.50' },
        { nombre: 'Jungkook', producto: 'Golden Vinyl LP Edition', precio: '$55.00', total: '$110.00' },
      ],
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner or Clean Header when hideBanner is true */}
      {!hideBanner ? (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-purple-950 p-6 sm:p-8 text-white shadow-2xl border-2 border-purple-500/40">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-500/30 text-purple-200 border border-purple-400/40 text-xs font-black tracking-wider uppercase">
                  Semana 2 • Actividad 2
                </span>
                <span className="px-3 py-1 rounded-full bg-pink-500/30 text-pink-200 border border-pink-400/40 text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Better Data, Bigger Dreams</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                  5 SGBD Motores • Afiches BTS
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-200">
                Sistemas de Gestión de Bases de Datos (SGBD)
              </h1>

              <p className="text-purple-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                Estudio comparativo y afiches temáticos de los 5 grandes motores mundiales:{' '}
                <strong>1. Oracle</strong>, <strong>2. MySQL</strong>, <strong>3. MS-SQL Server</strong>,{' '}
                <strong>4. MongoDB</strong> (NoSQL) y <strong>5. PostgreSQL</strong>, analizados según{' '}
                <em>Rendimiento, Costo, Escalabilidad, Soporte Técnico y Comunidad</em>.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-purple-300 font-mono">
                <span>💜 "El poder de los datos también suena a BTS"</span>
                <span>•</span>
                <span>BTS × BT21 ARMY Portafolio</span>
              </div>
            </div>

            {/* Quick Actions Switcher */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
              {onOpenFolderManager && (
                <button
                  onClick={() => onOpenFolderManager('s2_a2')}
                  className="px-4 py-2.5 rounded-2xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 border border-emerald-400/50 shadow-md transition-all hover:scale-102 cursor-pointer"
                >
                  <FolderOpen className="w-4 h-4 text-emerald-200" />
                  <span>Carpeta de Imágenes (Act. 2)</span>
                </button>
              )}

              <button
                onClick={onSwitchToActivity1}
                className="px-4 py-2.5 rounded-2xl bg-purple-800/80 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-purple-400/50 shadow-md transition-all hover:scale-102 cursor-pointer"
              >
                <span>← Ir a Actividad 1 (8 Láminas DER)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="mt-6 pt-4 border-t border-purple-500/30 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('posters')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'posters'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>🖼️ Afiches de Láminas BTS (5 Láminas SGBD)</span>
            </button>

            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'technical'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>📊 Fichas Técnicas & Arquitectura</span>
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>⚖️ Matriz Comparativa de Factores</span>
            </button>

            <button
              onClick={() => setActiveTab('lab')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'lab'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>💻 Laboratorio de Consultas (SQL vs. NoSQL)</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-purple-50 dark:bg-purple-950/50 p-4 rounded-3xl border-2 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-2xl bg-purple-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                A2
              </span>
              <div>
                <h3 className="font-black text-base text-purple-950 dark:text-purple-100">
                  Actividad 2: Sistemas de Gestión de Bases de Datos (5 Motores SGBD)
                </h3>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  5 Láminas / Afiches • Oracle, MySQL, MS-SQL Server, MongoDB y PostgreSQL analizados exhaustivamente
                </p>
              </div>
            </div>
            {onOpenFolderManager && (
              <button
                onClick={() => onOpenFolderManager('s2_a2')}
                className="px-3.5 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-900 dark:text-purple-200 font-bold text-xs flex items-center gap-1.5 border border-purple-300 dark:border-purple-700 transition-all cursor-pointer"
              >
                <FolderOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Carpeta Afiches (Act. 2)</span>
              </button>
            )}
          </div>

          {/* View Mode Tabs in coordinated mode */}
          <div className="bg-white dark:bg-purple-950/40 p-2 rounded-2xl border border-purple-200 dark:border-purple-800 shadow-xs flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('posters')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'posters'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>🖼️ Afiches de Láminas BTS (5 Láminas)</span>
            </button>

            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'technical'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>📊 Fichas Técnicas & Arquitectura</span>
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>⚖️ Matriz Comparativa</span>
            </button>

            <button
              onClick={() => setActiveTab('lab')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'lab'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>💻 Laboratorio SQL vs NoSQL</span>
            </button>
          </div>
        </div>
      )}

      {/* QUICK MOTOR PILLS SELECTOR */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {topics.map((t, idx) => (
          <button
            key={t.id}
            onClick={() => setSelectedEngineId(t.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border cursor-pointer ${
              selectedEngineId === t.id
                ? 'bg-purple-600 text-white border-purple-400 shadow-md ring-2 ring-purple-400/40'
                : 'bg-white dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:border-purple-400'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 flex items-center justify-center text-[10px] font-black">
              #{t.topicNumber}
            </span>
            <span>
              {t.id.includes('oracle')
                ? '🔴 Oracle'
                : t.id.includes('mysql')
                ? '🐬 MySQL'
                : t.id.includes('mssql')
                ? '🪟 MS-SQL'
                : t.id.includes('mongo')
                ? '🍃 MongoDB'
                : '🐘 PostgreSQL'}
            </span>
            <span className="text-[10px] opacity-75 font-mono">({t.sgbdData?.dbType})</span>
          </button>
        ))}
      </div>

      {/* TAB 1: AFICHES DE LÁMINAS BTS (FULL POSTER VIEW) */}
      {activeTab === 'posters' && (
        <div className="space-y-6">
          <div className="bg-purple-50 dark:bg-purple-950/40 p-4 rounded-2xl border border-purple-200 dark:border-purple-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-lg">🖼️</span>
              <div>
                <strong className="text-purple-950 dark:text-purple-200">
                  Galería de Afiches de Alta Definición (5 Láminas SGBD):
                </strong>{' '}
                <span className="text-purple-700 dark:text-purple-300">
                  Haz clic sobre cualquier afiche para abrir el <strong>Visor Zoom / Pantalla Completa</strong> o cámbialo directamente con el botón de subida.
                </span>
              </div>
            </div>
            {onOpenFolderManager && (
              <button
                onClick={() => onOpenFolderManager('s2_a2')}
                className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold shrink-0 flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <FolderOpen className="w-3.5 h-3.5" />
                <span>Gestionar Carpeta Actividad 2</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => {
              const sgbd = topic.sgbdData;
              const slideKey = `s2_a2_${topic.topicNumber}`;
              const slideImg = getSlideImage(topic);

              return (
                <div
                  key={topic.id}
                  className={`rounded-3xl p-5 transition-all duration-300 flex flex-col justify-between border-2 ${
                    selectedEngineId === topic.id
                      ? 'border-purple-500 shadow-2xl bg-white dark:bg-purple-950/80 ring-2 ring-purple-400/30'
                      : 'border-purple-200 dark:border-purple-800/80 bg-white/80 dark:bg-purple-950/50 hover:border-purple-400 shadow-lg'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Header info */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-xl bg-purple-100 dark:bg-purple-900/60 text-purple-900 dark:text-purple-200 text-xs font-black border border-purple-300 dark:border-purple-700">
                        Lámina #{topic.topicNumber}
                      </span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-purple-500/10 text-pink-600 dark:text-pink-400">
                        {sgbd?.dbType}
                      </span>
                      <span className="text-xs text-purple-700 dark:text-purple-300 font-bold truncate max-w-[130px]">
                        {topic.bt21Character}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-lg font-black text-purple-950 dark:text-purple-100 flex items-center gap-2">
                        <span>
                          {topic.id.includes('oracle')
                            ? '🔴'
                            : topic.id.includes('mysql')
                            ? '🐬'
                            : topic.id.includes('mssql')
                            ? '🪟'
                            : topic.id.includes('mongo')
                            ? '🍃'
                            : '🐘'}{' '}
                          {topic.title}
                        </span>
                      </h3>
                      <p className="text-xs text-purple-600 dark:text-purple-400 line-clamp-1 mt-0.5">
                        {topic.subtitle}
                      </p>
                    </div>

                    {/* FULL POSTER PRESENTATION WITH HOVER ZOOM TRIGGER */}
                    <div className="relative rounded-2xl overflow-hidden border-2 border-purple-300 dark:border-purple-700 bg-purple-950 group shadow-md aspect-[3/4]">
                      <img
                        src={slideImg}
                        alt={`Lámina ${topic.topicNumber} - ${topic.title}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300 cursor-pointer"
                        onClick={() =>
                          onPreviewImage
                            ? onPreviewImage(`Lámina ${topic.topicNumber}: ${topic.title} • BTS & BT21`, slideImg)
                            : onSelectTopic(topic)
                        }
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                        }}
                      />

                      {/* Overlay action bar */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/95 via-purple-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 pointer-events-none">
                        <div className="flex justify-end pointer-events-auto">
                          <button
                            onClick={() =>
                              onPreviewImage
                                ? onPreviewImage(`Lámina ${topic.topicNumber}: ${topic.title} • BTS & BT21`, slideImg)
                                : onSelectTopic(topic)
                            }
                            className="px-2.5 py-1 rounded-xl bg-black/75 hover:bg-purple-600 text-white text-xs font-bold flex items-center gap-1 shadow-lg transition-all cursor-pointer border border-purple-400/40"
                            title="Ver en pantalla completa con zoom"
                          >
                            <ZoomIn className="w-3.5 h-3.5" />
                            <span>Zoom HD</span>
                          </button>
                        </div>

                        <div className="pointer-events-auto space-y-1.5">
                          <div className="text-[11px] font-mono font-bold text-purple-200 bg-black/75 px-2.5 py-1 rounded-lg border border-purple-400/40 flex items-center justify-between">
                            <span>Lámina {topic.topicNumber}</span>
                            <span className="text-[10px] text-pink-300">BTS x BT21</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                onPreviewImage
                                  ? onPreviewImage(`Lámina ${topic.topicNumber}: ${topic.title} • BTS & BT21`, slideImg)
                                  : onSelectTopic(topic)
                              }
                              className="flex-1 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md transition-all cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Ver Afiche Completo</span>
                            </button>

                            {onSaveImage && (
                              <>
                                <input
                                  type="file"
                                  accept="image/*"
                                  ref={(el) => {
                                    fileInputRefs.current[slideKey] = el;
                                  }}
                                  className="hidden"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleFileUpload(slideKey, file);
                                  }}
                                />
                                <button
                                  onClick={() => fileInputRefs.current[slideKey]?.click()}
                                  className="px-2.5 py-1.5 rounded-xl bg-black/70 hover:bg-emerald-600 text-purple-200 hover:text-white text-xs font-bold flex items-center gap-1 border border-purple-500/40 transition-all cursor-pointer"
                                  title="Subir o cambiar imagen de esta lámina"
                                >
                                  <Upload className="w-3.5 h-3.5" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SGBD Factor Badges Summary */}
                    {sgbd?.factors && (
                      <div className="grid grid-cols-2 gap-1.5 text-[10px] pt-1">
                        <div className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-800">
                          <strong>⚡ Rend.:</strong> <span className="opacity-80">{sgbd.factors.rendimiento.slice(0, 30)}...</span>
                        </div>
                        <div className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-800">
                          <strong>💰 Costo:</strong> <span className="opacity-80">{sgbd.factors.costo.slice(0, 28)}...</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card bottom actions */}
                  <div className="mt-4 pt-3 border-t border-purple-200 dark:border-purple-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        setSelectedEngineId(topic.id);
                        onSelectTopic(topic);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/60 dark:hover:bg-purple-800 text-purple-900 dark:text-purple-100 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-300" />
                      <span>Ver Ficha Técnica</span>
                    </button>
                    <span className="text-[10px] text-purple-500 dark:text-purple-400 font-mono">
                      Borahae 💜
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: TECHNICAL CARDS & ARCHITECTURE VIEW */}
      {activeTab === 'technical' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {topics.map((topic) => {
              const sgbd = topic.sgbdData;
              const slideKey = `s2_a2_${topic.topicNumber}`;
              const slideImg = getSlideImage(topic);

              return (
                <div
                  key={topic.id}
                  className={`rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between border-2 ${
                    selectedEngineId === topic.id
                      ? 'border-purple-500 shadow-2xl bg-white dark:bg-purple-950/80 ring-2 ring-purple-400/30'
                      : 'border-purple-200 dark:border-purple-800/80 bg-white/80 dark:bg-purple-950/50 hover:border-purple-400 shadow-lg'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Category, Number, Character */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-xl bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 text-xs font-black border border-purple-300 dark:border-purple-700">
                          SGBD #{topic.topicNumber}
                        </span>
                        <span className="text-xs font-mono font-bold text-pink-600 dark:text-pink-400">
                          {sgbd?.dbType}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-purple-700 dark:text-purple-300 font-bold">
                        <span>{topic.bt21Character}</span>
                      </div>
                    </div>

                    {/* Title & Slogan */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-purple-950 dark:text-purple-100 flex items-center gap-2">
                        <span>
                          {topic.id.includes('oracle')
                            ? '🔴'
                            : topic.id.includes('mysql')
                            ? '🐬'
                            : topic.id.includes('mssql')
                            ? '🪟'
                            : topic.id.includes('mongo')
                            ? '🍃'
                            : '🐘'}{' '}
                          {topic.title}
                        </span>
                      </h2>
                      <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-0.5">
                        {topic.subtitle}
                      </p>
                    </div>

                    {/* BT21 Quote */}
                    <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-xs italic text-purple-800 dark:text-purple-300">
                      "{topic.characterQuote}"
                    </div>

                    {/* Slide Image Preview with Zoom Lightbox Opener */}
                    <div className="relative rounded-2xl overflow-hidden border-2 border-purple-300 dark:border-purple-700 bg-purple-950 group">
                      <img
                        src={slideImg}
                        alt={`Lámina ${topic.title}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() =>
                          onPreviewImage
                            ? onPreviewImage(`Lámina ${topic.topicNumber}: ${topic.title} • BTS & BT21`, slideImg)
                            : onSelectTopic(topic)
                        }
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/20 to-transparent flex items-end justify-between p-3">
                        <span className="text-xs font-mono font-bold text-purple-200 bg-black/60 px-2.5 py-1 rounded-lg border border-purple-400/40">
                          {topic.imageSlideLabel}
                        </span>
                        <button
                          onClick={() =>
                            onPreviewImage
                              ? onPreviewImage(`Lámina ${topic.topicNumber}: ${topic.title} • BTS & BT21`, slideImg)
                              : onSelectTopic(topic)
                          }
                          className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1 shadow-lg transition-all cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Ver Afiche HD</span>
                        </button>
                      </div>
                    </div>

                    {/* 5 Factors Summary Pills */}
                    {sgbd?.factors && (
                      <div className="p-3 rounded-2xl bg-purple-100/50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/60 space-y-2">
                        <div className="text-[11px] font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wider flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Factores de Evaluación (Lámina)</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                          <div className="text-purple-900 dark:text-purple-200">
                            <strong>⚡ Rendimiento:</strong> <span className="opacity-90">{sgbd.factors.rendimiento.slice(0, 55)}...</span>
                          </div>
                          <div className="text-purple-900 dark:text-purple-200">
                            <strong>💰 Costo:</strong> <span className="opacity-90">{sgbd.factors.costo.slice(0, 50)}...</span>
                          </div>
                          <div className="text-purple-900 dark:text-purple-200">
                            <strong>📈 Escalabilidad:</strong> <span className="opacity-90">{sgbd.factors.escalabilidad.slice(0, 50)}...</span>
                          </div>
                          <div className="text-purple-900 dark:text-purple-200">
                            <strong>👥 Comunidad:</strong> <span className="opacity-90">{sgbd.factors.comunidad.slice(0, 50)}...</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Interactive Diagram Preview */}
                    <div className="overflow-hidden rounded-2xl border border-purple-100 dark:border-purple-800/60">
                      <InfographicDiagram topic={topic} compact={true} />
                    </div>

                    {/* Code Snippet Preview */}
                    {sgbd?.queryCode && (
                      <div className="rounded-2xl bg-black/90 p-3 text-purple-200 font-mono text-xs border border-purple-800 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] text-purple-400">
                          <span className="flex items-center gap-1 font-bold">
                            <Code2 className="w-3 h-3" />
                            <span>Ejemplo de Consulta ({sgbd.queryCode.language.toUpperCase()})</span>
                          </span>
                          <button
                            onClick={() => handleCopyCode(topic.id, sgbd.queryCode.code)}
                            className="px-2 py-0.5 rounded bg-purple-900/60 hover:bg-purple-800 text-white flex items-center gap-1 transition-all cursor-pointer"
                          >
                            {copiedQueryId === topic.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span>Copiado</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copiar</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="text-[11px] leading-tight overflow-x-auto text-emerald-400 py-1">
                          {sgbd.queryCode.code}
                        </pre>
                        <div className="text-[10px] text-purple-300/80 italic">
                          {sgbd.queryCode.explanation}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions Footer */}
                  <div className="mt-5 pt-3 border-t border-purple-200 dark:border-purple-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectTopic(topic)}
                      className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Abrir Infografía Completa</span>
                    </button>

                    <div className="text-[10px] text-purple-500 dark:text-purple-400 font-mono">
                      BTS x BT21 • Borahae
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: COMPARATIVE MATRIX */}
      {activeTab === 'matrix' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-purple-950/70 p-6 rounded-3xl border-2 border-purple-300 dark:border-purple-800 shadow-xl space-y-4">
            <div>
              <h2 className="text-xl font-black text-purple-950 dark:text-purple-100 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <span>Matriz Comparativa de los 5 Factores Clave (SGBD)</span>
              </h2>
              <p className="text-xs text-purple-600 dark:text-purple-300 mt-1">
                Comparativa estructurada de Oracle, MySQL, MS-SQL Server, MongoDB y PostgreSQL según los 5 factores de evaluación de las láminas.
              </p>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto rounded-2xl border border-purple-200 dark:border-purple-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-purple-900 text-white font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Motor SGBD</th>
                    <th className="p-3">Tipo / Modelo</th>
                    <th className="p-3">Rendimiento</th>
                    <th className="p-3">Costo & Licencia</th>
                    <th className="p-3">Escalabilidad</th>
                    <th className="p-3">Soporte & Comunidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-100 dark:divide-purple-900 font-sans">
                  {topics.map((t) => {
                    const sgbd = t.sgbdData;
                    return (
                      <tr key={t.id} className="hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors">
                        <td className="p-3 font-bold text-purple-950 dark:text-purple-100">
                          <div className="flex items-center gap-1.5">
                            <span className="text-base">
                              {t.id.includes('oracle')
                                ? '🔴'
                                : t.id.includes('mysql')
                                ? '🐬'
                                : t.id.includes('mssql')
                                ? '🪟'
                                : t.id.includes('mongo')
                                ? '🍃'
                                : '🐘'}
                            </span>
                            <span>{t.title}</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              sgbd?.dbType === 'NoSQL'
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-500/40'
                                : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border border-purple-500/40'
                            }`}
                          >
                            {sgbd?.dbType}
                          </span>
                        </td>
                        <td className="p-3 text-purple-900 dark:text-purple-200 leading-snug">
                          {sgbd?.factors.rendimiento}
                        </td>
                        <td className="p-3 text-purple-900 dark:text-purple-200 leading-snug">
                          {sgbd?.factors.costo}
                        </td>
                        <td className="p-3 text-purple-900 dark:text-purple-200 leading-snug">
                          {sgbd?.factors.escalabilidad}
                        </td>
                        <td className="p-3 text-purple-900 dark:text-purple-200 leading-snug">
                          {sgbd?.factors.comunidad}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Quick takeaway summary cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-xs">
                <div className="font-bold text-rose-900 dark:text-rose-200 mb-1 flex items-center gap-1">
                  <span>🏢 ¿Cuándo elegir Oracle o MS-SQL Server?</span>
                </div>
                <p className="text-rose-800 dark:text-rose-300 text-[11px] leading-relaxed">
                  Para banca, ERP corporativos (SAP / Dynamics), misión crítica con SLA 24/7/365, memorias SGA masivas y ecosistemas analíticos integrados.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-800 text-xs">
                <div className="font-bold text-blue-900 dark:text-blue-200 mb-1 flex items-center gap-1">
                  <span>🐬 ¿Cuándo elegir MySQL o PostgreSQL?</span>
                </div>
                <p className="text-blue-800 dark:text-blue-300 text-[11px] leading-relaxed">
                  Para aplicaciones web, comercio electrónico, integridad estricta ACID, cumplimiento de normas de código abierto sin costos de licencia.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs">
                <div className="font-bold text-emerald-900 dark:text-emerald-200 mb-1 flex items-center gap-1">
                  <span>🍃 ¿Cuándo elegir NoSQL (MongoDB)?</span>
                </div>
                <p className="text-emerald-800 dark:text-emerald-300 text-[11px] leading-relaxed">
                  Para catálogos dinámicos, IoT, redes sociales, esquemas que mutan constantemente y requerimiento de escalabilidad horizontal con sharding.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: INTERACTIVE QUERY RUNNER LAB */}
      {activeTab === 'lab' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-purple-950/70 p-6 rounded-3xl border-2 border-purple-300 dark:border-purple-800 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-black text-purple-950 dark:text-purple-100 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-emerald-500" />
                  <span>Laboratorio de Consultas: NoSQL (BSON) vs. SQL (Relacional)</span>
                </h2>
                <p className="text-xs text-purple-600 dark:text-purple-300 mt-0.5">
                  Ejecuta y compara en tiempo real las consultas oficiales de las láminas sobre la tienda de BTS.
                </p>
              </div>

              {/* Selector NoSQL vs SQL */}
              <div className="flex items-center bg-purple-100 dark:bg-purple-900/60 p-1 rounded-xl border border-purple-300 dark:border-purple-700 text-xs">
                <button
                  onClick={() => {
                    setActiveLabTab('nosql');
                    setLabResult(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    activeLabTab === 'nosql'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-purple-700 dark:text-purple-300 hover:text-purple-950'
                  }`}
                >
                  🍃 MongoDB (BSON / JSON)
                </button>
                <button
                  onClick={() => {
                    setActiveLabTab('sql');
                    setLabResult(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    activeLabTab === 'sql'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-purple-700 dark:text-purple-300 hover:text-purple-950'
                  }`}
                >
                  🐘 SQL (Oracle / PostgreSQL / MySQL)
                </button>
              </div>
            </div>

            {/* Code Box & Run Button */}
            <div className="rounded-2xl bg-black/90 p-4 border border-purple-800 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-purple-300 text-[11px]">
                <span className="font-bold flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {activeLabTab === 'nosql'
                      ? 'Consulta MongoDB de la Lámina 4 (BSON)'
                      : 'Consulta SQL INNER JOIN de las Láminas 1, 2, 3 y 5'}
                  </span>
                </span>
                <span className="text-[10px] text-purple-400">Base de Datos: borahae_store</span>
              </div>

              <pre className="text-emerald-300 text-xs leading-relaxed overflow-x-auto p-2 rounded-xl bg-black/50 border border-purple-900/60">
                {activeLabTab === 'nosql'
                  ? `// Buscar usuarios con nombre "Jin" y correo con dominio @bts.com
db.usuarios.find({
  nombre: "Jin",
  correo: { $regex: "@bts.com", $options: "i" }
})`
                  : `SELECT u.nombre, p.producto, p.precio
FROM usuarios u
INNER JOIN pedidos pe ON u.id = pe.usuario_id
INNER JOIN productos p ON pe.producto_id = p.id
WHERE u.activo = true;`}
              </pre>

              <div className="flex items-center justify-between">
                <div className="text-[11px] text-purple-300/80">
                  {activeLabTab === 'nosql'
                    ? 'Filtra la colección polimórfica sin uniones (JOINs), recuperando el documento completo con arrays embebidos.'
                    : 'Relaciona las 3 tablas (usuarios, pedidos, productos) mediante claves primarias y foráneas.'}
                </div>
                <button
                  onClick={activeLabTab === 'nosql' ? runMongoLab : runSqlLab}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Ejecutar Consulta</span>
                </button>
              </div>
            </div>

            {/* Results Display */}
            {labResult && (
              <div className="rounded-2xl bg-purple-950/40 p-4 border border-purple-500/50 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between text-xs text-purple-300 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-bold text-emerald-300">Consulta ejecutada con éxito</span>
                  </div>
                  <span>Tiempo: {labResult.executionTimeMs} ms</span>
                </div>

                {labResult.type === 'mongodb' ? (
                  <div className="bg-black/80 rounded-xl p-3 border border-emerald-500/40 font-mono text-[11px] text-emerald-300">
                    <div className="text-[10px] text-purple-400 font-bold mb-1">
                      Salida JSON/BSON ({labResult.matchedCount} documento coincidente):
                    </div>
                    <pre className="overflow-x-auto text-[11px] leading-tight text-emerald-200">
                      {JSON.stringify(labResult.documents, null, 2)}
                    </pre>
                  </div>
                ) : (
                  <div className="overflow-x-auto rounded-xl border border-purple-600/40 bg-black/60">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-purple-900/80 text-purple-200 uppercase text-[10px]">
                        <tr>
                          {labResult.columns.map((col: string) => (
                            <th key={col} className="p-2.5">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-purple-800/40 text-purple-100">
                        {labResult.rows.map((row: any, i: number) => (
                          <tr key={i} className="hover:bg-purple-900/30">
                            <td className="p-2.5 font-bold text-amber-300">{row.nombre}</td>
                            <td className="p-2.5">{row.producto}</td>
                            <td className="p-2.5 text-emerald-300">{row.precio}</td>
                            <td className="p-2.5 text-cyan-300">{row.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
