export type UserRole = 'admin' | 'visitor' | null;

export interface TopicSection {
  id: string;
  topicNumber: number; // 1 to 9 (Week 1) or 1 to 8 (Week 2)
  weekNumber?: number; // 1, 2, or 3
  activityNumber: 1 | 2; // 1 or 2
  title: string;
  subtitle: string;
  category: string;
  bt21Character: string;
  characterQuote: string;
  characterColor: string;
  summary: string;
  imageSlideLabel?: string; // e.g. "imagen1.jpeg", "Lámina 1"
  uploadedImageUrl?: string; // data URL or path for user's uploaded slide photo
  whatIsIt: {
    title: string;
    description: string;
    extraNote?: string;
  };
  scheme: {
    title: string;
    description: string;
    nodes: Array<{ label: string; role: string; type: 'client' | 'server' | 'cloud' | 'node' | 'db' | 'entity' | 'attribute' | 'relationship' }>;
    connectionsText?: string;
  };
  keyPoints: Array<{
    title: string;
    items: string[];
    badge?: string;
    type?: 'advantages' | 'disadvantages' | 'benefits' | 'components' | 'trends' | 'rules' | 'steps';
  }>;
  examples: string[];
  conclusionQuote: string;
  detailedDiagramType:
    | 'centralized'
    | 'client-server'
    | 'distributed'
    | 'cloud'
    | 'db-features'
    | 'db-distributed'
    | 'db-evolution'
    | 'db-market'
    | 'db-impacts'
    | 'er-intro'
    | 'er-entities'
    | 'er-attributes'
    | 'er-relationships'
    | 'er-cardinality'
    | 'er-notations'
    | 'er-integrity'
    | 'er-casestudy'
    | 'sgbd-mongodb'
    | 'sgbd-postgresql'
    | 'sgbd-oracle'
    | 'sgbd-mysql'
    | 'sgbd-mssql'
    | 'relational-model'
    | 'relational-keys'
    | 'codd-rules'
    | 'mer-to-relational'
    | 'relational-algebra'
    | 'normalization-intro'
    | '1fn'
    | '2fn'
    | '3fn'
    | 'bcnf'
    | 'norm-casestudy'
    | string;
  sgbdData?: {
    dbType: 'NoSQL' | 'RDBMS Relacional' | 'Objeto-Relacional';
    license: string;
    model: string;
    slogan: string;
    logoType: 'leaf' | 'elephant' | 'cylinder' | 'dolphin' | 'microsoft';
    factors: {
      rendimiento: string;
      costo: string;
      escalabilidad: string;
      soporte: string;
      comunidad: string;
    };
    caracteristicasPuntos: string[];
    componentesDetalle: Array<{ name: string; desc: string }>;
    estructuraTablas?: Array<{ tableName: string; columns: string[] }>;
    queryCode: {
      language: 'javascript' | 'sql';
      code: string;
      explanation: string;
    };
    ventajas: string[];
    usosComunes: string[];
    seguridad?: string[];
    integraciones?: string[];
    timeline?: Array<{ year: string; title: string; desc: string }>;
    dataTypesTable?: Array<{ type: string; desc: string }>;
    whyChoose?: string[];
  };
  evolutionTable?: Array<{
    decade: string;
    dbExample: string;
    features: string;
  }>;
  marketStats?: Array<{
    indicator: string;
    value: string;
    iconName?: string;
  }>;
  marketActors?: Array<{
    name: string;
    role: string;
    highlight?: string;
  }>;
}

export interface ActivityGroup {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  topicRange: string; // "Temas 1 al 4" or "Temas 5 al 9"
  topics: number[]; // [1,2,3,4] or [5,6,7,8,9]
  badge: string;
  icon: string;
}

export interface WeekData {
  id: number;
  title: string;
  subtitle: string;
  progress: number;
  status: 'completado' | 'en_progreso' | 'pendiente';
  unit: string;
  description: string;
  activitiesCount: number;
}

export interface QuestionItem {
  id: string;
  code: string; // e.g. "Q01"
  question: string;
  answer: string;
  category: string;
  relatedTopic?: number;
}

export interface AppProfile {
  studentName: string;
  studentCode: string;
  career: string;
  course: string;
  university: string;
  semester: string;
  year: string;
  motto: string;
  armyBias: string;
}
