import React, { useState, useRef } from 'react';
import {
  Folder,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  X,
  Eye,
  Trash2,
  FolderOpen,
  Sparkles,
  Layers,
  ArrowRight,
  Download,
  Info,
  Check,
} from 'lucide-react';
import { TopicSection } from '../types';

export interface ActivityFolderConfig {
  id: 's1_a1' | 's1_a2' | 's2_a1' | 's2_a2' | 's3_a1' | 's3_a2' | 's4_a1' | 's4_a2';
  weekNum: 1 | 2 | 3 | 4;
  actNum: 1 | 2;
  title: string;
  subtitle: string;
  badge: string;
  color: string;
  iconBg: string;
  slides: Array<{
    key: string;
    slideNum: number;
    title: string;
    subtitle: string;
    expectedFilename: string;
    character: string;
    topicId?: string;
  }>;
}

export const ACTIVITY_FOLDERS: ActivityFolderConfig[] = [
  {
    id: 's1_a1',
    weekNum: 1,
    actNum: 1,
    title: 'Semana 1 • Actividad 1',
    subtitle: 'Modelos de Arquitectura (Centralizada, Cliente-Servidor, Distribuida, Nube)',
    badge: '4 Láminas',
    color: 'border-purple-300 dark:border-purple-700 bg-purple-500/10 text-purple-700 dark:text-purple-300',
    iconBg: 'bg-purple-600 text-white',
    slides: [
      {
        key: 's1_a1_1',
        slideNum: 1,
        title: 'Arquitectura Centralizada',
        subtitle: 'Todo bajo un mismo control ♡',
        expectedFilename: 'imagen1.jpeg / centralizada.jpg',
        character: 'Koya & Chimmy',
        topicId: 'tema-1',
      },
      {
        key: 's1_a1_2',
        slideNum: 2,
        title: 'Arquitectura Cliente-Servidor',
        subtitle: 'Dos partes, un mismo objetivo ♡',
        expectedFilename: 'imagen2.jpeg / cliente_servidor.jpg',
        character: 'RJ & Cooky',
        topicId: 'tema-2',
      },
      {
        key: 's1_a1_3',
        slideNum: 3,
        title: 'Arquitectura Distribuida',
        subtitle: 'Múltiples nodos, un mismo objetivo ♡',
        expectedFilename: 'imagen3.jpeg / distribuida.jpg',
        character: 'Tata & Mang',
        topicId: 'tema-3',
      },
      {
        key: 's1_a1_4',
        slideNum: 4,
        title: 'Arquitectura en la Nube',
        subtitle: 'Conectando ideas, servicios y personas ♡',
        expectedFilename: 'imagen4.jpeg / nube.jpg',
        character: 'BTS & BT21',
        topicId: 'tema-4',
      },
    ],
  },
  {
    id: 's1_a2',
    weekNum: 1,
    actNum: 2,
    title: 'Semana 1 • Actividad 2',
    subtitle: 'Fundamentos de Bases de Datos, Mercado e Impactos',
    badge: '5 Láminas',
    color: 'border-indigo-300 dark:border-indigo-700 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300',
    iconBg: 'bg-indigo-600 text-white',
    slides: [
      {
        key: 's1_a2_5',
        slideNum: 5,
        title: 'Características de Base de Datos',
        subtitle: 'Estructura organizada, seguridad y concurrencia',
        expectedFilename: 'imagen5.jpeg / caracteristicas_bd.jpg',
        character: 'Van & Koya',
        topicId: 'tema-5',
      },
      {
        key: 's1_a2_6',
        slideNum: 6,
        title: 'Base de Datos Distribuida (Nodos)',
        subtitle: 'Fragmentación y replicación en múltiples centros',
        expectedFilename: 'imagen6.jpeg / bd_distribuida.jpg',
        character: 'Mang & Shooky',
        topicId: 'tema-6',
      },
      {
        key: 's1_a2_7',
        slideNum: 7,
        title: 'Línea de Tiempo y Evolución Histórica',
        subtitle: 'De Bachman y Codd a SQL, NoSQL y Cloud DBs',
        expectedFilename: 'imagen7.jpeg / evolucion_bd.jpg',
        character: 'RJ & Chimmy',
        topicId: 'tema-7',
      },
      {
        key: 's1_a2_8',
        slideNum: 8,
        title: 'Mercado Actual de Motores de BD',
        subtitle: 'Panorama global DB-Engines y cuota de mercado',
        expectedFilename: 'imagen8.jpeg / mercado_motores.jpg',
        character: 'Cooky & Tata',
        topicId: 'tema-8',
      },
      {
        key: 's1_a2_9',
        slideNum: 9,
        title: 'Impactos Organizacionales y Casos',
        subtitle: 'Retorno de inversión, optimización y analítica',
        expectedFilename: 'imagen9.jpeg / impactos_organizacion.jpg',
        character: 'BTS x ARMY',
        topicId: 'tema-9',
      },
    ],
  },
  {
    id: 's2_a1',
    weekNum: 2,
    actNum: 1,
    title: 'Semana 2 • Actividad 1',
    subtitle: 'Modelo Entidad-Relación (MER)',
    badge: '8 Láminas',
    color: 'border-fuchsia-300 dark:border-fuchsia-700 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300',
    iconBg: 'bg-fuchsia-600 text-white',
    slides: [
      {
        key: 's2_a1_1',
        slideNum: 1,
        title: 'Introducción al Modelo Entidad-Relación',
        subtitle: 'Concepto fundamental y orígenes de Peter Chen',
        expectedFilename: 'imagen1.jpeg / mer_intro.jpg',
        character: 'Koya & RJ',
        topicId: 'w2-tema-1',
      },
      {
        key: 's2_a1_2',
        slideNum: 2,
        title: 'Entidades Fuertes y Débiles',
        subtitle: 'Clasificación, instancias y conjuntos de entidades',
        expectedFilename: 'imagen2.jpeg / entidades.jpg',
        character: 'Chimmy & Shooky',
        topicId: 'w2-tema-2',
      },
      {
        key: 's2_a1_3',
        slideNum: 3,
        title: 'Atributos y Tipos de Datos',
        subtitle: 'Simples, compuestos, monovalorados y multivalorados',
        expectedFilename: 'imagen3.jpeg / atributos.jpg',
        character: 'Cooky & Tata',
        topicId: 'w2-tema-3',
      },
      {
        key: 's2_a1_4',
        slideNum: 4,
        title: 'Relaciones y Conexiones Lógicas',
        subtitle: 'Asociaciones, grados (unaria, binaria, ternaria)',
        expectedFilename: 'imagen4.jpeg / relaciones.jpg',
        character: 'Mang & Van',
        topicId: 'w2-tema-4',
      },
      {
        key: 's2_a1_5',
        slideNum: 5,
        title: 'Cardinalidad y Participación',
        subtitle: 'Razones 1:1, 1:N, N:M y límites de participación',
        expectedFilename: 'imagen5.jpeg / cardinalidad.jpg',
        character: 'BTS Vocal Line',
        topicId: 'w2-tema-5',
      },
      {
        key: 's2_a1_6',
        slideNum: 6,
        title: 'Notaciones Chen vs. Crow’s Foot',
        subtitle: 'Comparativa gráfica entre estándares universales',
        expectedFilename: 'imagen6.jpeg / notaciones.jpg',
        character: 'BTS Rap Line',
        topicId: 'w2-tema-6',
      },
      {
        key: 's2_a1_7',
        slideNum: 7,
        title: 'Claves Primarias, Foráneas e Integridad',
        subtitle: 'Restricciones de integridad referencial y de dominio',
        expectedFilename: 'imagen7.jpeg / claves_integridad.jpg',
        character: 'BT21 OT7',
        topicId: 'w2-tema-7',
      },
      {
        key: 's2_a1_8',
        slideNum: 8,
        title: 'Caso de Estudio Completo MER',
        subtitle: 'Diagrama integral con entidades y reglas de negocio',
        expectedFilename: 'imagen8.jpeg / caso_estudio.jpg',
        character: 'BTS & ARMY Forever',
        topicId: 'w2-tema-8',
      },
    ],
  },
  {
    id: 's2_a2',
    weekNum: 2,
    actNum: 2,
    title: 'Semana 2 • Actividad 2',
    subtitle: 'Sistemas Gestores de Bases de Datos (SGBD)',
    badge: '5 Motores SGBD',
    color: 'border-emerald-300 dark:border-emerald-700 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
    iconBg: 'bg-emerald-600 text-white',
    slides: [
      {
        key: 's2_a2_1',
        slideNum: 1,
        title: 'Oracle Database',
        subtitle: 'La Potencia de una BD para un Mundo Conectado',
        expectedFilename: 'imagen1.jpeg / sgbd_oracle.jpeg',
        character: 'RJ & Chimmy (BTS)',
        topicId: 'w2-a2-oracle',
      },
      {
        key: 's2_a2_2',
        slideNum: 2,
        title: 'MySQL',
        subtitle: 'El Sistema de Gestión de BD más Usado en el Mundo',
        expectedFilename: 'imagen2.jpeg / sgbd_mysql.jpeg',
        character: 'Mang & Cooky (BTS)',
        topicId: 'w2-a2-mysql',
      },
      {
        key: 's2_a2_3',
        slideNum: 3,
        title: 'Microsoft SQL Server',
        subtitle: 'El Poder de los Datos también Suena a BTS',
        expectedFilename: 'imagen3.jpeg / sgbd_mssql.jpeg',
        character: 'BTS OT7 & BT21',
        topicId: 'w2-a2-mssql',
      },
      {
        key: 's2_a2_4',
        slideNum: 4,
        title: 'MongoDB',
        subtitle: 'Base de datos No Relacional (NoSQL)',
        expectedFilename: 'imagen4.jpeg / sgbd_mongodb.jpeg',
        character: 'Tata & BT21 (V)',
        topicId: 'w2-a2-mongodb',
      },
      {
        key: 's2_a2_5',
        slideNum: 5,
        title: 'PostgreSQL',
        subtitle: 'SGBD Relacionales • Datos organizados',
        expectedFilename: 'imagen5.jpeg / sgbd_postgresql.jpeg',
        character: 'Koya & RJ (RM & Jin)',
        topicId: 'w2-a2-postgresql',
      },
    ],
  },
  {
    id: 's3_a1',
    weekNum: 3,
    actNum: 1,
    title: 'Semana 3 • Actividad 1',
    subtitle: 'Modelo Relacional, Reglas de Codd y Transformación MER',
    badge: '6 Láminas',
    color: 'border-indigo-300 dark:border-indigo-700 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300',
    iconBg: 'bg-indigo-600 text-white',
    slides: [
      {
        key: 's3_a1_1',
        slideNum: 1,
        title: 'Fundamentos del Modelo Relacional',
        subtitle: 'Relaciones, tuplas, atributos y dominios',
        expectedFilename: 'imagen1.jpeg / relacional.jpg',
        character: 'Koya (Líder Inteligente)',
        topicId: 'w3-a1-1',
      },
      {
        key: 's3_a1_2',
        slideNum: 2,
        title: 'Claves y Restricciones de Integridad',
        subtitle: 'PK, FK, Integridad de Dominio y Referencial',
        expectedFilename: 'imagen2.jpeg / claves_integridad.jpg',
        character: 'RJ (Noble & Protector)',
        topicId: 'w3-a1-2',
      },
      {
        key: 's3_a1_3',
        slideNum: 3,
        title: 'Las 12 Reglas de E.F. Codd para RDBMS',
        subtitle: 'El estándar formal de sistemas relacionales',
        expectedFilename: 'imagen3.jpeg / reglas_codd.jpg',
        character: 'Shooky (Preciso & Exigente)',
        topicId: 'w3-a1-3',
      },
      {
        key: 's3_a1_4',
        slideNum: 4,
        title: 'Transformación de Entidades y Atributos',
        subtitle: 'Mapeo algorítmico del MER al modelo lógico relacional',
        expectedFilename: 'imagen4.jpeg / mapeo_entidades.jpg',
        character: 'Mang (Evolución & Baile)',
        topicId: 'w3-a1-4',
      },
      {
        key: 's3_a1_5',
        slideNum: 5,
        title: 'Transformación de Relaciones (1:1, 1:N y N:M)',
        subtitle: 'Propagación de FKs y creación de tablas intermedias',
        expectedFilename: 'imagen5.jpeg / mapeo_relaciones.jpg',
        character: 'Chimmy (Leal & Apasionado)',
        topicId: 'w3-a1-5',
      },
      {
        key: 's3_a1_6',
        slideNum: 6,
        title: 'Álgebra Relacional Fundamental',
        subtitle: 'Operaciones formales (σ, π, ∪, ×, ⨝)',
        expectedFilename: 'imagen6.jpeg / algebra_relacional.jpg',
        character: 'Tata & Cooky (Poder Creativo)',
        topicId: 'w3-a1-6',
      },
    ],
  },
  {
    id: 's3_a2',
    weekNum: 3,
    actNum: 2,
    title: 'Semana 3 • Actividad 2',
    subtitle: 'Normalización de Bases de Datos (1FN a 3FN y Casos)',
    badge: '6 Láminas',
    color: 'border-pink-300 dark:border-pink-700 bg-pink-500/10 text-pink-700 dark:text-pink-300',
    iconBg: 'bg-pink-600 text-white',
    slides: [
      {
        key: 's3_a2_1',
        slideNum: 1,
        title: 'Teoría de Normalización y Anomalías',
        subtitle: 'Prevención de anomalías de inserción, borrado y cambio',
        expectedFilename: 'imagen1.jpeg / normalizacion_intro.jpg',
        character: 'Van & Koya',
        topicId: 'w3-a2-1',
      },
      {
        key: 's3_a2_2',
        slideNum: 2,
        title: 'Primera Forma Normal (1FN)',
        subtitle: 'Atomicidad estricta y eliminación de grupos repetitivos',
        expectedFilename: 'imagen2.jpeg / 1fn.jpg',
        character: 'Shooky & Chimmy',
        topicId: 'w3-a2-2',
      },
      {
        key: 's3_a2_3',
        slideNum: 3,
        title: 'Segunda Forma Normal (2FN)',
        subtitle: 'Dependencia funcional completa de la clave primaria',
        expectedFilename: 'imagen3.jpeg / 2fn.jpg',
        character: 'RJ & Cooky',
        topicId: 'w3-a2-3',
      },
      {
        key: 's3_a2_4',
        slideNum: 4,
        title: 'Tercera Forma Normal (3FN)',
        subtitle: 'Eliminación total de dependencias funcionales transitivas',
        expectedFilename: 'imagen4.jpeg / 3fn.jpg',
        character: 'Tata & Mang',
        topicId: 'w3-a2-4',
      },
      {
        key: 's3_a2_5',
        slideNum: 5,
        title: 'Forma Normal de Boyce-Codd (FNBC)',
        subtitle: 'Resolución de claves candidatas superpuestas y 4FN',
        expectedFilename: 'imagen5.jpeg / fnbc.jpg',
        character: 'BTS Rap Line',
        topicId: 'w3-a2-5',
      },
      {
        key: 's3_a2_6',
        slideNum: 6,
        title: 'Caso Práctico Integral de Normalización',
        subtitle: 'De reporte universal no normalizado a diseño 3FN limpio',
        expectedFilename: 'imagen6.jpeg / caso_practico.jpg',
        character: 'OT7 BTS & ARMY',
        topicId: 'w3-a2-6',
      },
    ],
  },
  {
    id: 's4_a1',
    weekNum: 4,
    actNum: 1,
    title: 'Semana 4 • Actividad 1',
    subtitle: 'Definición de Datos (DDL), Integridad y Objetos SQL',
    badge: '6 Láminas DDL',
    color: 'border-blue-300 dark:border-blue-700 bg-blue-500/10 text-blue-700 dark:text-blue-300',
    iconBg: 'bg-blue-600 text-white',
    slides: [
      {
        key: 's4_a1_1',
        slideNum: 1,
        title: 'Fundamentos y Arquitectura de SQL',
        subtitle: 'Sublenguajes DDL, DML, DCL, TCL y estándar ANSI/ISO',
        expectedFilename: 'imagen1.jpeg / sql_arquitectura.jpg',
        character: 'RM & Koya (Líder Arquitecto)',
        topicId: 'w4-t1',
      },
      {
        key: 's4_a1_2',
        slideNum: 2,
        title: 'Tipos de Datos y Dominios en SQL',
        subtitle: 'Numéricos, caracteres, temporales y JSONB',
        expectedFilename: 'imagen2.jpeg / sql_tipos.jpg',
        character: 'Jin & RJ (Claridad y Orden)',
        topicId: 'w4-t2',
      },
      {
        key: 's4_a1_3',
        slideNum: 3,
        title: 'Sentencias DDL: CREATE TABLE',
        subtitle: 'Sintaxis, esquemas, columnas y autoincrementales',
        expectedFilename: 'imagen3.jpeg / sql_create_table.jpg',
        character: 'Suga & Shooky (Precisión)',
        topicId: 'w4-t3',
      },
      {
        key: 's4_a1_4',
        slideNum: 4,
        title: 'Restricciones de Integridad (Constraints)',
        subtitle: 'PK, FK con CASCADE/RESTRICT, UNIQUE, NOT NULL y CHECK',
        expectedFilename: 'imagen4.jpeg / sql_constraints.jpg',
        character: 'J-Hope & Mang (Integridad & Ritmo)',
        topicId: 'w4-t4',
      },
      {
        key: 's4_a1_5',
        slideNum: 5,
        title: 'Mantenimiento DDL: ALTER & DROP',
        subtitle: 'ALTER TABLE, DROP TABLE, TRUNCATE vs DELETE',
        expectedFilename: 'imagen5.jpeg / sql_alter_drop.jpg',
        character: 'Jimin & Chimmy (Dedicación)',
        topicId: 'w4-t5',
      },
      {
        key: 's4_a1_6',
        slideNum: 6,
        title: 'Objetos Auxiliares: Índices y Vistas',
        subtitle: 'CREATE INDEX B-Tree y CREATE VIEW para abstracción',
        expectedFilename: 'imagen6.jpeg / sql_indices_vistas.jpg',
        character: 'V & Jungkook (Tata & Cooky)',
        topicId: 'w4-t6',
      },
    ],
  },
  {
    id: 's4_a2',
    weekNum: 4,
    actNum: 2,
    title: 'Semana 4 • Actividad 2',
    subtitle: 'Manipulación de Datos (DML) y Consultas Avanzadas',
    badge: '6 Láminas DML',
    color: 'border-emerald-300 dark:border-emerald-700 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
    iconBg: 'bg-emerald-600 text-white',
    slides: [
      {
        key: 's4_a2_1',
        slideNum: 1,
        title: 'Manipulación Básica: INSERT, UPDATE, DELETE',
        subtitle: 'Modificaciones atómicas y prevención de sobreescritura',
        expectedFilename: 'imagen7.jpeg / sql_dml_basico.jpg',
        character: 'RM & Koya (Liderazgo Cauteloso)',
        topicId: 'w4-t7',
      },
      {
        key: 's4_a2_2',
        slideNum: 2,
        title: 'Consultas Fundamentales con SELECT',
        subtitle: 'Proyecciones, alias AS, DISTINCT y expresiones calculadas',
        expectedFilename: 'imagen8.jpeg / sql_select.jpg',
        character: 'Jin & RJ (Elegancia en Extracción)',
        topicId: 'w4-t8',
      },
      {
        key: 's4_a2_3',
        slideNum: 3,
        title: 'Filtrado y Ordenamiento: WHERE & ORDER BY',
        subtitle: 'Operadores lógicos, BETWEEN, IN, LIKE y paginación LIMIT',
        expectedFilename: 'imagen9.jpeg / sql_where_orderby.jpg',
        character: 'Suga & Shooky (Filtrado Implacable)',
        topicId: 'w4-t9',
      },
      {
        key: 's4_a2_4',
        slideNum: 4,
        title: 'Agrupamiento: GROUP BY & HAVING',
        subtitle: 'Funciones COUNT, SUM, AVG y filtrado post-agrupado',
        expectedFilename: 'imagen10.jpeg / sql_groupby_having.jpg',
        character: 'J-Hope & Mang (Métricas)',
        topicId: 'w4-t10',
      },
      {
        key: 's4_a2_5',
        slideNum: 5,
        title: 'Combinación de Tablas: Cláusula JOIN',
        subtitle: 'INNER, LEFT, RIGHT, FULL OUTER y detección de huérfanos',
        expectedFilename: 'imagen11.jpeg / sql_joins.jpg',
        character: 'Jimin & Chimmy (Conexión Armoniosa)',
        topicId: 'w4-t11',
      },
      {
        key: 's4_a2_6',
        slideNum: 6,
        title: 'Subconsultas y Control Transaccional ACID',
        subtitle: 'Consultas anidadas EXISTS/IN y transacciones COMMIT/ROLLBACK',
        expectedFilename: 'imagen12.jpeg / sql_transacciones_acid.jpg',
        character: 'V & Jungkook (Tata & Cooky)',
        topicId: 'w4-t12',
      },
    ],
  },
];

interface FolderManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeFolderId?: 's1_a1' | 's1_a2' | 's2_a1' | 's2_a2' | 's3_a1' | 's3_a2' | 's4_a1' | 's4_a2' | string;
  imagesMap: Record<string, string>;
  onSaveImage: (key: string, dataUrl: string) => void;
  onDeleteImage: (key: string) => void;
  onPreviewImage: (title: string, dataUrl: string) => void;
}

export const FolderManagerModal: React.FC<FolderManagerModalProps> = ({
  isOpen,
  onClose,
  activeFolderId = 's1_a1',
  imagesMap,
  onSaveImage,
  onDeleteImage,
  onPreviewImage,
}) => {
  const [selectedFolderId, setSelectedFolderId] = useState<string>(activeFolderId);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const folderInputRef = useRef<HTMLInputElement>(null);
  const multiFileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const currentFolder = ACTIVITY_FOLDERS.find((f) => f.id === selectedFolderId) || ACTIVITY_FOLDERS[0];

  const countLoadedInFolder = (folder: ActivityFolderConfig) => {
    return folder.slides.filter((s) => Boolean(imagesMap[s.key])).length;
  };

  const showNotification = (msg: string) => {
    setFeedbackMsg(msg);
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  // Match file to slide in the current folder
  const assignFileToFolder = (file: File) => {
    const fileName = file.name.toLowerCase();

    // Check if filename contains a number
    const matchNum = fileName.match(/(\d+)/);
    const num = matchNum ? parseInt(matchNum[1], 10) : null;

    let targetSlide = currentFolder.slides.find((s) => {
      // Direct number match
      if (num !== null && s.slideNum === num) return true;
      // Keyword match
      const titleLower = s.title.toLowerCase();
      if (fileName.includes('centralizada') && titleLower.includes('centralizada')) return true;
      if (fileName.includes('cliente') && titleLower.includes('cliente')) return true;
      if (fileName.includes('distribuida') && titleLower.includes('distribuida')) return true;
      if (fileName.includes('nube') && titleLower.includes('nube')) return true;
      if (fileName.includes('mongo') && titleLower.includes('mongo')) return true;
      if (fileName.includes('postgres') && titleLower.includes('postgres')) return true;
      if (fileName.includes('oracle') && titleLower.includes('oracle')) return true;
      if (fileName.includes('mysql') && titleLower.includes('mysql')) return true;
      if (fileName.includes('mssql') || (fileName.includes('sql') && fileName.includes('server'))) {
        return titleLower.includes('sql server');
      }
      if (fileName.includes('relacional') && titleLower.includes('relacional')) return true;
      if ((fileName.includes('clave') || fileName.includes('integridad')) && titleLower.includes('integridad')) return true;
      if (fileName.includes('codd') && titleLower.includes('codd')) return true;
      if ((fileName.includes('entidad') || fileName.includes('mapeo')) && titleLower.includes('entidades')) return true;
      if ((fileName.includes('relacion') || fileName.includes('cardinalidad')) && titleLower.includes('relaciones')) return true;
      if (fileName.includes('algebra') && titleLower.includes('algebra')) return true;
      if ((fileName.includes('anomalia') || fileName.includes('teoria')) && titleLower.includes('teoria')) return true;
      if (fileName.includes('1fn') && titleLower.includes('1fn')) return true;
      if (fileName.includes('2fn') && titleLower.includes('2fn')) return true;
      if (fileName.includes('3fn') && titleLower.includes('3fn')) return true;
      if ((fileName.includes('bcnf') || fileName.includes('boyce')) && titleLower.includes('boyce-codd')) return true;
      if (fileName.includes('caso') && titleLower.includes('caso')) return true;
      // Week 4 Keywords
      if (fileName.includes('ddl') && titleLower.includes('ddl')) return true;
      if (fileName.includes('dml') && titleLower.includes('dml')) return true;
      if (fileName.includes('tipo') && titleLower.includes('tipos')) return true;
      if (fileName.includes('create') && titleLower.includes('create')) return true;
      if (fileName.includes('constraint') && titleLower.includes('restricciones')) return true;
      if (fileName.includes('alter') && titleLower.includes('alter')) return true;
      if (fileName.includes('indice') && titleLower.includes('índices')) return true;
      if (fileName.includes('insert') && titleLower.includes('insert')) return true;
      if (fileName.includes('select') && titleLower.includes('select')) return true;
      if (fileName.includes('where') && titleLower.includes('where')) return true;
      if (fileName.includes('group') && titleLower.includes('group')) return true;
      if (fileName.includes('join') && titleLower.includes('join')) return true;
      if (fileName.includes('acid') || fileName.includes('transaccion')) return true;
      return false;
    });

    // If not matched, try matching the first empty slide slot
    if (!targetSlide) {
      targetSlide = currentFolder.slides.find((s) => !imagesMap[s.key]);
    }

    if (targetSlide) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        if (dataUrl) {
          onSaveImage(targetSlide!.key, dataUrl);
          showNotification(`✅ Imagen asignada a: ${targetSlide!.title}`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFolderUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    let count = 0;
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        assignFileToFolder(file);
        count++;
      }
    });
    showNotification(`📁 Procesando ${count} imágenes de la carpeta seleccionada...`);
    if (folderInputRef.current) folderInputRef.current.value = '';
  };

  const handleMultiFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    let count = 0;
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        assignFileToFolder(file);
        count++;
      }
    });
    showNotification(`📸 Procesando ${count} archivos seleccionados...`);
    if (multiFileInputRef.current) multiFileInputRef.current.value = '';
  };

  const handleSingleSlideUpload = (slideKey: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        onSaveImage(slideKey, dataUrl);
        showNotification('✅ Lámina actualizada con éxito');
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-purple-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white dark:bg-purple-950 rounded-3xl shadow-2xl border-2 border-purple-300 dark:border-purple-700 overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-900 text-white border-b border-purple-400/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 shadow-inner">
              <FolderOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black tracking-tight text-white">
                  Gestor de Carpetas de Láminas
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-400/30 text-purple-200 font-bold border border-purple-300/30">
                  Semanas 1, 2, 3 y 4 (8 Actividades)
                </span>
              </div>
              <p className="text-xs text-purple-200">
                Organiza y sube tus afiches fotográficos por actividad directamente desde tus carpetas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Cerrar gestor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feedback Alert if any */}
        {feedbackMsg && (
          <div className="px-6 py-2.5 bg-emerald-500 text-white font-bold text-xs flex items-center justify-between shadow-xs">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" /> {feedbackMsg}
            </span>
            <button onClick={() => setFeedbackMsg(null)} className="text-white/80 hover:text-white">
              ✕
            </button>
          </div>
        )}

        {/* Activity Folder Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 p-3 bg-purple-100/60 dark:bg-purple-900/40 border-b border-purple-200 dark:border-purple-800">
          {ACTIVITY_FOLDERS.map((folder) => {
            const count = countLoadedInFolder(folder);
            const total = folder.slides.length;
            const isSelected = selectedFolderId === folder.id;
            return (
              <button
                key={folder.id}
                onClick={() => setSelectedFolderId(folder.id)}
                className={`p-3 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white dark:bg-purple-800 border-purple-400 dark:border-purple-500 shadow-md ring-2 ring-purple-400/40'
                    : 'bg-white/50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/80 hover:bg-white/80 dark:hover:bg-purple-900/60'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[11px] font-black uppercase tracking-wider text-purple-900 dark:text-purple-200 truncate">
                    {folder.title}
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      count === total
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                    }`}
                  >
                    {count}/{total}
                  </span>
                </div>
                <p className="text-[11px] text-purple-600 dark:text-purple-300 line-clamp-1">
                  {folder.badge}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Folder Workspace */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Action Toolbar for the current folder */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black px-2.5 py-1 rounded-full bg-purple-600 text-white">
                  {currentFolder.title}
                </span>
                <span className="text-xs font-bold text-purple-900 dark:text-purple-100">
                  {currentFolder.subtitle}
                </span>
              </div>
              <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                {countLoadedInFolder(currentFolder)} de {currentFolder.slides.length} láminas cargadas en este módulo
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Upload entire local folder button */}
              <label className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all">
                <FolderOpen className="w-4 h-4 text-amber-300" />
                <span>Cargar Carpeta Completa</span>
                <input
                  ref={folderInputRef}
                  type="file"
                  {...({ webkitdirectory: '', directory: '' } as any)}
                  multiple
                  className="hidden"
                  onChange={handleFolderUpload}
                />
              </label>

              {/* Upload multiple files */}
              <label className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-purple-800 border border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-700 text-purple-800 dark:text-purple-200 font-bold text-xs shadow-xs transition-all">
                <Upload className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Subir Archivos</span>
                <input
                  ref={multiFileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleMultiFileUpload}
                />
              </label>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs">
            <Info className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <p>
              Puedes subir la carpeta completa de tu actividad o arrastrar las imágenes individuales. El sistema reconoce automáticamente nombres como <code className="font-mono font-bold bg-amber-100 dark:bg-amber-900 px-1 py-0.5 rounded">imagen1.jpeg</code>, <code className="font-mono font-bold bg-amber-100 dark:bg-amber-900 px-1 py-0.5 rounded">1.jpg</code> o palabras clave como <code className="font-mono font-bold bg-amber-100 dark:bg-amber-900 px-1 py-0.5 rounded">centralizada</code>, <code className="font-mono font-bold bg-amber-100 dark:bg-amber-900 px-1 py-0.5 rounded">cliente-servidor</code>, etc.
            </p>
          </div>

          {/* Grid of Slides in this Folder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentFolder.slides.map((slide) => {
              const imageSrc = imagesMap[slide.key];
              const isLoaded = Boolean(imageSrc);

              return (
                <div
                  key={slide.key}
                  className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                    isLoaded
                      ? 'bg-white dark:bg-purple-950 border-purple-300 dark:border-purple-700 shadow-md'
                      : 'bg-purple-50/60 dark:bg-purple-950/40 border-dashed border-purple-300 dark:border-purple-800'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Header line */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-xl bg-purple-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                          #{slide.slideNum}
                        </span>
                        <div>
                          <h4 className="font-black text-sm text-purple-950 dark:text-purple-100 leading-tight">
                            {slide.title}
                          </h4>
                          <span className="text-[10px] text-purple-500 dark:text-purple-400 italic">
                            {slide.subtitle}
                          </span>
                        </div>
                      </div>

                      {isLoaded ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Cargada
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> Pendiente
                        </span>
                      )}
                    </div>

                    {/* Preview Area or Drop placeholder */}
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-purple-100 dark:bg-purple-900/60 border border-purple-200 dark:border-purple-800 flex items-center justify-center group">
                      {isLoaded ? (
                        <>
                          <img
                            src={imageSrc}
                            alt={slide.title}
                            className="w-full h-full object-contain bg-purple-950/20"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button
                              onClick={() => onPreviewImage(slide.title, imageSrc)}
                              className="p-2 rounded-xl bg-white text-purple-900 font-bold text-xs flex items-center gap-1 shadow-md hover:scale-105 transition-transform"
                            >
                              <Eye className="w-4 h-4" />
                              <span>Ver Grande</span>
                            </button>
                            <button
                              onClick={() => onDeleteImage(slide.key)}
                              className="p-2 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center gap-1 shadow-md hover:scale-105 transition-transform"
                              title="Eliminar imagen"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="text-center p-4">
                          <ImageIcon className="w-8 h-8 text-purple-400 mx-auto mb-1 opacity-70" />
                          <p className="text-xs font-bold text-purple-700 dark:text-purple-300">
                            Sin lámina cargada
                          </p>
                          <p className="text-[10px] text-purple-500 dark:text-purple-400 font-mono mt-0.5">
                            {slide.expectedFilename}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card bottom upload button */}
                  <div className="mt-3 pt-3 border-t border-purple-100 dark:border-purple-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-purple-500 dark:text-purple-400">
                      BT21: {slide.character}
                    </span>

                    <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-800 dark:text-purple-200 font-bold text-xs flex items-center gap-1.5 transition-colors">
                      <Upload className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span>{isLoaded ? 'Reemplazar' : 'Subir foto'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleSingleSlideUpload(slide.key, e)}
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-purple-100 dark:bg-purple-900 border-t border-purple-200 dark:border-purple-800 flex items-center justify-between">
          <div className="text-xs font-bold text-purple-800 dark:text-purple-200 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Almacenamiento persistente en IndexedDB • No se pierden al recargar</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all"
          >
            Listo, volver al cuaderno
          </button>
        </div>
      </div>
    </div>
  );
};
