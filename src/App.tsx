import { useState, useEffect } from 'react';
import { UserRole, TopicSection, WeekData, QuestionItem, AppProfile } from './types';
import { TOPICS_DATA, INITIAL_PROFILE, INITIAL_WEEKS, INITIAL_QUESTIONS, WEEK2_TOPICS_DATA, WEEK2_ACTIVITY2_TOPICS } from './data/infographicsData';
import { Header } from './components/Header';
import { LoginForm } from './components/LoginForm';
import { ActivityView } from './components/ActivityView';
import { Week2ActivityView } from './components/Week2ActivityView';
import { Week2Activity2View } from './components/Week2Activity2View';
import { Week3ActivityView } from './components/Week3ActivityView';
import { WeekActivityHeader } from './components/WeekActivityHeader';
import { WEEK3_ACTIVITY1_TOPICS, WEEK3_ACTIVITY2_TOPICS } from './data/week3Data';
import { SlideGalleryModal } from './components/SlideGalleryModal';
import { FolderManagerModal } from './components/FolderManagerModal';
import { SlideLightboxModal } from './components/SlideLightboxModal';
import { ProfileCard } from './components/ProfileCard';
import { QuestionsBank } from './components/QuestionsBank';
import { WeeksPlan } from './components/WeeksPlan';
import { InfographicModal } from './components/InfographicModal';
import { AdminEditTopicModal, AdminEditProfileModal } from './components/AdminEditModal';
import { KoyaAssistant } from './components/KoyaAssistant';
import { storeImageInDB, getAllImagesFromDB, removeImageFromDB } from './utils/imageStorage';
import { Heart, Sparkles, Check, RotateCcw, ShieldCheck, Eye, BookOpen, User, HelpCircle, Calendar, Layers, Database, FolderOpen } from 'lucide-react';

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(() => {
    return (localStorage.getItem('borahae_role') as UserRole) || null;
  });

  const [activeSection, setActiveSection] = useState<'semana1' | 'semana2' | 'semana3' | 'perfil' | 'preguntas' | 'semanas-plan'>('semana1');
  const [week2SubActivity, setWeek2SubActivity] = useState<'all' | 1 | 2>('all');
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('borahae_dark') === 'true';
  });

  // Data state with localStorage persistence (Week 1)
  const [topics, setTopics] = useState<TopicSection[]>(() => {
    const saved = localStorage.getItem('borahae_topics');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return TOPICS_DATA;
  });

  // Data state for Week 2 Activity 1 (8 topics / slides)
  const [week2Topics, setWeek2Topics] = useState<TopicSection[]>(() => {
    const saved = localStorage.getItem('borahae_week2_topics');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return WEEK2_TOPICS_DATA;
  });

  // Data state for Week 2 Activity 2 (5 SGBD topics / slides)
  const [week2Activity2Topics, setWeek2Activity2Topics] = useState<TopicSection[]>(() => {
    const saved = localStorage.getItem('borahae_w2_a2_topics');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return WEEK2_ACTIVITY2_TOPICS;
  });

  // Data state for Week 3 Activity 1 (6 topics / slides)
  const [week3Activity1Topics, setWeek3Activity1Topics] = useState<TopicSection[]>(() => {
    const saved = localStorage.getItem('borahae_w3_a1_topics_v3');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return WEEK3_ACTIVITY1_TOPICS;
  });

  // Data state for Week 3 Activity 2 (6 topics / slides)
  const [week3Activity2Topics, setWeek3Activity2Topics] = useState<TopicSection[]>(() => {
    const saved = localStorage.getItem('borahae_w3_a2_topics');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return WEEK3_ACTIVITY2_TOPICS;
  });

  // Unified image storage mapping for all activities across Week 1 and Week 2
  const [imagesMap, setImagesMap] = useState<Record<string, string>>(() => {
    return {
      s1_a1_4: '/assets/imagen4.jpeg',
      s1_a2_5: '/assets/imagen5.jpeg',
      s1_a2_6: '/assets/imagen6.jpeg',
      s1_a2_8: '/assets/imagen8.jpeg',
      s2_a2_1: '/assets/sgbd_oracle.jpeg',
      s2_a2_2: '/assets/sgbd_mysql.jpeg',
      s2_a2_3: '/assets/sgbd_mssql.jpeg',
      s2_a2_4: '/assets/sgbd_mongodb.jpeg',
      s2_a2_5: '/assets/sgbd_postgresql.jpeg',
      s2_a1_4: '/assets/imagen4.jpeg',
      s2_a1_5: '/assets/imagen5.jpeg',
      s2_a1_6: '/assets/imagen6.jpeg',
      s2_a1_8: '/assets/imagen8.jpeg',
    };
  });

  // Legacy compatibility state for Week 2 slide numbers
  const [uploadedImages, setUploadedImages] = useState<Record<number, string>>(() => {
    const defaults: Record<number, string> = {
      4: '/assets/imagen4.jpeg',
      5: '/assets/imagen5.jpeg',
      6: '/assets/imagen6.jpeg',
      8: '/assets/imagen8.jpeg',
    };
    const saved = localStorage.getItem('borahae_s2_images');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...defaults, ...parsed };
      } catch (e) {
        console.error(e);
      }
    }
    return defaults;
  });

  // Load persistent images from IndexedDB on startup
  useEffect(() => {
    getAllImagesFromDB().then((records) => {
      if (records && Object.keys(records).length > 0) {
        setImagesMap((prev) => ({ ...prev, ...records }));
        setUploadedImages((prev) => {
          const next = { ...prev };
          for (let i = 1; i <= 8; i++) {
            if (records[`s2_a1_${i}`]) {
              next[i] = records[`s2_a1_${i}`];
            }
          }
          return next;
        });
      }
    });
  }, []);

  const [profile, setProfile] = useState<AppProfile>(() => {
    const saved = localStorage.getItem('borahae_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_PROFILE;
  });

  const [weeks, setWeeks] = useState<WeekData[]>(() => {
    const saved = localStorage.getItem('borahae_weeks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_WEEKS;
  });

  const [questions, setQuestions] = useState<QuestionItem[]>(() => {
    const saved = localStorage.getItem('borahae_questions');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_QUESTIONS;
  });

  // Modal states
  const [selectedInfographic, setSelectedInfographic] = useState<TopicSection | null>(null);
  const [editingTopic, setEditingTopic] = useState<TopicSection | null>(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isSlideGalleryOpen, setIsSlideGalleryOpen] = useState(false);
  const [gallerySlideIndex, setGallerySlideIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Folder Manager Modal state
  const [isFolderManagerOpen, setIsFolderManagerOpen] = useState(false);
  const [activeFolderForManager, setActiveFolderForManager] = useState<'s1_a1' | 's1_a2' | 's2_a1' | 's2_a2' | 's3_a1' | 's3_a2'>('s1_a1');

  // Lightbox Modal state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    title: string;
    imageSrc: string | null;
  }>({
    isOpen: false,
    title: '',
    imageSrc: null,
  });

  // Sync dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('borahae_dark', String(darkMode));
  }, [darkMode]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    localStorage.setItem('borahae_role', role || '');
    showToast(role === 'admin' ? '¡Bienvenida Administradora Anai Gaspar! 💜' : 'Has ingresado como Visitante');
  };

  const handleLogout = () => {
    setUserRole(null);
    setIsEditing(false);
    localStorage.removeItem('borahae_role');
  };

  // Image save handler using IndexedDB and state
  const handleSaveImage = async (key: string, dataUrl: string) => {
    setImagesMap((prev) => ({ ...prev, [key]: dataUrl }));
    await storeImageInDB(key, dataUrl);

    // Sync Week 2 legacy numeric map if key is s2_a1_X
    const matchW2A1 = key.match(/^s2_a1_(\d+)$/);
    if (matchW2A1) {
      const num = parseInt(matchW2A1[1], 10);
      setUploadedImages((prev) => ({ ...prev, [num]: dataUrl }));
    }

    showToast('¡Lámina guardada de forma permanente! 💜');
  };

  const handleDeleteImage = async (key: string) => {
    setImagesMap((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    await removeImageFromDB(key);

    const matchW2A1 = key.match(/^s2_a1_(\d+)$/);
    if (matchW2A1) {
      const num = parseInt(matchW2A1[1], 10);
      setUploadedImages((prev) => {
        const next = { ...prev };
        delete next[num];
        return next;
      });
    }

    showToast('Lámina eliminada');
  };

  const handleOpenFolderManager = (folderId?: 's1_a1' | 's1_a2' | 's2_a1' | 's2_a2' | 's3_a1' | 's3_a2') => {
    if (folderId) {
      setActiveFolderForManager(folderId);
    } else {
      if (activeSection === 'semana1') {
        setActiveFolderForManager('s1_a1');
      } else if (activeSection === 'semana2') {
        setActiveFolderForManager(week2SubActivity === 2 ? 's2_a2' : 's2_a1');
      } else if (activeSection === 'semana3') {
        setActiveFolderForManager('s3_a1');
      } else {
        setActiveFolderForManager('s1_a1');
      }
    }
    setIsFolderManagerOpen(true);
  };

  const handlePreviewImage = (title: string, imageSrc: string) => {
    setLightboxState({
      isOpen: true,
      title,
      imageSrc,
    });
  };

  // Legacy single image upload handler for Week 2 slides
  const handleUploadImage = (slideNumber: number, dataUrl: string) => {
    handleSaveImage(`s2_a1_${slideNumber}`, dataUrl);
  };

  const handleRemoveImage = (slideNumber: number) => {
    handleDeleteImage(`s2_a1_${slideNumber}`);
  };

  // Save changes handler for topics
  const handleSaveTopic = (updated: TopicSection) => {
    if (updated.weekNumber === 3) {
      if (updated.activityNumber === 2) {
        const newW3A2Topics = week3Activity2Topics.map((t) => (t.id === updated.id ? updated : t));
        setWeek3Activity2Topics(newW3A2Topics);
        localStorage.setItem('borahae_w3_a2_topics', JSON.stringify(newW3A2Topics));
        showToast(`Tema de Semana 3 Act. 2 #${updated.topicNumber} guardado`);
      } else {
        const newW3A1Topics = week3Activity1Topics.map((t) => (t.id === updated.id ? updated : t));
        setWeek3Activity1Topics(newW3A1Topics);
        localStorage.setItem('borahae_w3_a1_topics_v3', JSON.stringify(newW3A1Topics));
        showToast(`Tema de Semana 3 Act. 1 #${updated.topicNumber} (${updated.title}) guardado`);
      }
    } else if (updated.weekNumber === 2) {
      if (updated.activityNumber === 2) {
        const newA2Topics = week2Activity2Topics.map((t) => (t.id === updated.id ? updated : t));
        setWeek2Activity2Topics(newA2Topics);
        localStorage.setItem('borahae_w2_a2_topics', JSON.stringify(newA2Topics));
        showToast(`SGBD #${updated.topicNumber} (${updated.title}) guardado`);
      } else {
        const newW2Topics = week2Topics.map((t) => (t.id === updated.id ? updated : t));
        setWeek2Topics(newW2Topics);
        localStorage.setItem('borahae_week2_topics', JSON.stringify(newW2Topics));
        showToast(`Tema de Semana 2 #${updated.topicNumber} guardado`);
      }
    } else {
      const newTopics = topics.map((t) => (t.id === updated.id ? updated : t));
      setTopics(newTopics);
      localStorage.setItem('borahae_topics', JSON.stringify(newTopics));
      showToast(`Tema #${updated.topicNumber} guardado exitosamente`);
    }
  };

  // Save changes handler for profile
  const handleSaveProfile = (updated: AppProfile) => {
    setProfile(updated);
    localStorage.setItem('borahae_profile', JSON.stringify(updated));
    setIsEditingProfile(false);
    showToast('Perfil actualizado correctamente');
  };

  // Update week completion progress
  const handleUpdateWeekProgress = (weekId: number, newProgress: number) => {
    const newWeeks = weeks.map((w) =>
      w.id === weekId
        ? {
            ...w,
            progress: newProgress,
            status: (newProgress === 100 ? 'completado' : newProgress > 0 ? 'en_progreso' : 'pendiente') as WeekData['status'],
          }
        : w
    );
    setWeeks(newWeeks);
    localStorage.setItem('borahae_weeks', JSON.stringify(newWeeks));
  };

  // Restore factory data
  const handleResetData = () => {
    if (window.confirm('¿Deseas restaurar todos los textos y datos originales del Cuaderno Borahae?')) {
      localStorage.removeItem('borahae_topics');
      localStorage.removeItem('borahae_week2_topics');
      localStorage.removeItem('borahae_w2_a2_topics');
      localStorage.removeItem('borahae_w3_a1_topics_v3');
      localStorage.removeItem('borahae_w3_a2_topics');
      localStorage.removeItem('borahae_profile');
      localStorage.removeItem('borahae_weeks');
      localStorage.removeItem('borahae_questions');
      localStorage.removeItem('borahae_s2_images');
      setTopics(TOPICS_DATA);
      setWeek2Topics(WEEK2_TOPICS_DATA);
      setWeek2Activity2Topics(WEEK2_ACTIVITY2_TOPICS);
      setWeek3Activity1Topics(WEEK3_ACTIVITY1_TOPICS);
      setWeek3Activity2Topics(WEEK3_ACTIVITY2_TOPICS);
      setUploadedImages({});
      setProfile(INITIAL_PROFILE);
      setWeeks(INITIAL_WEEKS);
      setQuestions(INITIAL_QUESTIONS);
      showToast('Datos restaurados a la versión original de Semanas 1, 2 y 3');
    }
  };

  // Navigation handlers for Infographic Modal
  const activeTopicList = selectedInfographic?.weekNumber === 3
    ? selectedInfographic.activityNumber === 2
      ? week3Activity2Topics
      : week3Activity1Topics
    : selectedInfographic?.weekNumber === 2
      ? selectedInfographic.activityNumber === 2
        ? week2Activity2Topics
        : week2Topics
      : topics;

  const currentModalIndex = selectedInfographic
    ? activeTopicList.findIndex((t) => t.id === selectedInfographic.id)
    : -1;

  const handlePrevInfographic = () => {
    if (currentModalIndex > 0) {
      setSelectedInfographic(activeTopicList[currentModalIndex - 1]);
    }
  };

  const handleNextInfographic = () => {
    if (currentModalIndex < activeTopicList.length - 1) {
      setSelectedInfographic(activeTopicList[currentModalIndex + 1]);
    }
  };

  const handleOpenSlideGallery = (slideIndex = 0) => {
    setGallerySlideIndex(slideIndex);
    setIsSlideGalleryOpen(true);
  };

  // Helper to get image for modal
  const getTopicImageSrc = (topic: TopicSection | null) => {
    if (!topic) return undefined;
    const prefix = topic.weekNumber === 3
      ? (topic.activityNumber === 2 ? 's3_a2' : 's3_a1')
      : topic.weekNumber === 2
      ? (topic.activityNumber === 2 ? 's2_a2' : 's2_a1')
      : (topic.activityNumber === 2 ? 's1_a2' : 's1_a1');
    const key = `${prefix}_${topic.topicNumber}`;
    return imagesMap[key] || topic.uploadedImageUrl || `/assets/${key}.jpeg`;
  };

  // If user is not logged in, show login form
  if (!userRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 dark:from-purple-950 dark:via-purple-900 dark:to-indigo-950 flex flex-col justify-center items-center p-4">
        <LoginForm onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50/50 dark:bg-purple-950/40 text-purple-950 dark:text-purple-100 flex flex-col transition-colors">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 animate-bounce bg-purple-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-purple-400 flex items-center gap-2 text-xs font-bold">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        userRole={userRole}
        isEditing={isEditing}
        onToggleEdit={() => setIsEditing(!isEditing)}
        onLogout={handleLogout}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        activeSection={activeSection}
        onSelectSection={(section) => {
          if (section === 'semana2-act2') {
            setActiveSection('semana2');
            setWeek2SubActivity(2);
            return;
          }
          if (section === 'semana2-act1') {
            setActiveSection('semana2');
            setWeek2SubActivity(1);
            return;
          }
          setActiveSection(section as any);
        }}
        onOpenFolderManager={() => handleOpenFolderManager()}
      />

      {/* Main App Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Semana 1: Arquitecturas y Fundamentos (Actividades 1 y 2) */}
        {activeSection === 'semana1' && (
          <ActivityView
            topics={topics}
            onOpenInfographic={(topic) => setSelectedInfographic(topic)}
            isEditing={isEditing}
            onEditTopic={(topic) => setEditingTopic(topic)}
            onSwitchToWeek2={() => setActiveSection('semana2')}
            imagesMap={imagesMap}
            onSaveImage={handleSaveImage}
            onOpenFolderManager={handleOpenFolderManager}
            onPreviewImage={handlePreviewImage}
          />
        )}

        {/* Semana 2: Actividades 1 y 2 con Header unificado e igualitario */}
        {activeSection === 'semana2' && (
          <div className="space-y-6">
            <WeekActivityHeader
              weekNumber={2}
              unitTitle="Unidad I • Modelado MER y Motores SGBD"
              weekTitle="Modelado Conceptual MER y Sistemas Gestores SGBD"
              weekSubtitle="La Semana 2 se estructura de forma equitativa en dos actividades: Diagrama Entidad-Relación Tienda BTS (Actividad 1, 8 láminas) y Estudio comparativo de 5 Motores SGBD (Actividad 2, 5 afiches temáticos)."
              btsQuote="Better Data, Bigger Dreams • The power of databases"
              act1={{
                number: 1,
                title: 'Modelado Conceptual y Diagrama Entidad-Relación (MER / DER)',
                shortTitle: 'Modelado MER / DER',
                description: 'Entidades, atributos simples y compuestos, cardinalidades 1:1, 1:N, N:M y Diagrama Completo Tienda BTS.',
                topicCount: week2Topics.length,
                loadedCount: week2Topics.filter((t) => Boolean(imagesMap[`s2_a1_${t.topicNumber}`] || uploadedImages[t.topicNumber])).length,
                folderId: 's2_a1',
                tag: '8 Láminas • Koya, RJ, Shooky, Mang, Chimmy, Tata, Cooky, Van',
              }}
              act2={{
                number: 2,
                title: 'Sistemas de Gestión de Bases de Datos (5 Motores SGBD)',
                shortTitle: 'Motores SGBD',
                description: 'Estudio comparativo y afiches temáticos de Oracle, MySQL, MS-SQL Server, MongoDB y PostgreSQL.',
                topicCount: week2Activity2Topics.length,
                loadedCount: week2Activity2Topics.filter((t) => Boolean(imagesMap[`s2_a2_${t.topicNumber}`])).length,
                folderId: 's2_a2',
                tag: '5 Láminas / Afiches • Jin, RM, Suga, J-Hope, Jimin, V, JK',
              }}
              currentSubActivity={week2SubActivity}
              onSelectSubActivity={(sub) => setWeek2SubActivity(sub)}
              onOpenFolderManager={(fid) => handleOpenFolderManager(fid as any)}
              onSwitchWeek={(wNum) => {
                if (wNum === 1) setActiveSection('semana1');
                if (wNum === 3) setActiveSection('semana3');
              }}
            />

            {/* Actividad 1: Modelado Conceptual y MER (8 Láminas) */}
            {(week2SubActivity === 'all' || week2SubActivity === 1) && (
              <Week2ActivityView
                topics={week2Topics}
                userRole={userRole}
                uploadedImages={uploadedImages}
                onSelectTopic={(topic) => setSelectedInfographic(topic)}
                onEditTopic={(topic) => setEditingTopic(topic)}
                onOpenSlideGallery={handleOpenSlideGallery}
                onUploadImage={handleUploadImage}
                onSwitchToWeek1={() => setActiveSection('semana1')}
                onSwitchToActivity2={() => setWeek2SubActivity(2)}
                hideBanner={true}
              />
            )}

            {/* Actividad 2: Sistemas de Gestión de Bases de Datos (5 Motores) */}
            {(week2SubActivity === 'all' || week2SubActivity === 2) && (
              <Week2Activity2View
                topics={week2Activity2Topics}
                userRole={userRole}
                uploadedImages={uploadedImages as any}
                imagesMap={imagesMap}
                onSelectTopic={(topic) => setSelectedInfographic(topic)}
                onEditTopic={(topic) => setEditingTopic(topic)}
                onOpenSlideGallery={handleOpenSlideGallery}
                onSwitchToActivity1={() => setWeek2SubActivity(1)}
                onPreviewImage={handlePreviewImage}
                onSaveImage={handleSaveImage}
                onOpenFolderManager={(fid) => handleOpenFolderManager(fid || 's2_a2')}
                hideBanner={true}
              />
            )}
          </div>
        )}

        {/* Semana 3: Modelo Relacional y Normalización (Actividades 1 y 2) */}
        {activeSection === 'semana3' && (
          <Week3ActivityView
            activity1Topics={week3Activity1Topics}
            activity2Topics={week3Activity2Topics}
            userRole={userRole}
            isEditing={isEditing}
            imagesMap={imagesMap}
            onSelectTopic={(topic) => setSelectedInfographic(topic)}
            onEditTopic={(topic) => setEditingTopic(topic)}
            onSaveImage={handleSaveImage}
            onOpenFolderManager={(fid) => handleOpenFolderManager(fid || 's3_a1')}
            onPreviewImage={handlePreviewImage}
            onSwitchToWeek2={() => setActiveSection('semana2')}
          />
        )}

        {/* Perfil ARMY */}
        {activeSection === 'perfil' && (
          <ProfileCard
            profile={profile}
            weeks={weeks}
            isEditing={isEditing}
            onEditProfile={() => setIsEditingProfile(true)}
          />
        )}

        {/* Banco de Preguntas */}
        {activeSection === 'preguntas' && (
          <QuestionsBank
            questions={questions}
            isEditing={isEditing}
          />
        )}

        {/* Plan de Semanas y Unidades */}
        {activeSection === 'semanas-plan' && (
          <WeeksPlan
            weeks={weeks}
            onSelectWeek1={() => setActiveSection('semana1')}
            onSelectWeek2={() => {
              setActiveSection('semana2');
              setWeek2SubActivity(1);
            }}
            onSelectWeek2Act2={() => {
              setActiveSection('semana2');
              setWeek2SubActivity(2);
            }}
            onSelectWeek3={() => setActiveSection('semana3')}
            isEditing={isEditing}
            onUpdateWeekProgress={handleUpdateWeekProgress}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-200 dark:border-purple-800 bg-white/70 dark:bg-purple-950/70 py-6 px-4 text-center text-xs text-purple-700 dark:text-purple-400 space-y-2">
        <div className="flex items-center justify-center gap-2 font-bold">
          <span>BTS</span>
          <span>💜</span>
          <span>ARMY</span>
          <span>•</span>
          <span>BT21</span>
          <span>•</span>
          <span>Base de Datos I (UPLA)</span>
        </div>
        <p>
          Portafolio académico: <strong>Semana 1</strong> (Actividades 1 y 2) y <strong>Semana 2</strong> (Actividad 1: 8 Láminas MER y Actividad 2: 5 Motores SGBD).
        </p>

        {userRole === 'admin' && (
          <div className="pt-2">
            <button
              onClick={handleResetData}
              className="text-[11px] text-purple-500 hover:text-purple-800 dark:hover:text-purple-200 flex items-center gap-1 mx-auto underline cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restaurar datos originales del Cuaderno Borahae</span>
            </button>
          </div>
        )}
      </footer>

      {/* Floating Koya Assistant */}
      <KoyaAssistant />

      {/* Infographic Full Poster Modal */}
      <InfographicModal
        topic={selectedInfographic}
        onClose={() => setSelectedInfographic(null)}
        onPrevTopic={handlePrevInfographic}
        onNextTopic={handleNextInfographic}
        hasPrev={currentModalIndex > 0}
        hasNext={currentModalIndex < activeTopicList.length - 1}
        imageSrc={getTopicImageSrc(selectedInfographic)}
        onPreviewImage={handlePreviewImage}
      />

      {/* Slide Gallery Modal (Week 2 - imagen1.jpeg a imagen8.jpeg) */}
      <SlideGalleryModal
        isOpen={isSlideGalleryOpen}
        onClose={() => setIsSlideGalleryOpen(false)}
        topics={week2Topics}
        initialSlideIndex={gallerySlideIndex}
        uploadedImages={uploadedImages}
        onUploadImage={handleUploadImage}
        onRemoveImage={handleRemoveImage}
        onOpenTopicModal={(t) => {
          setIsSlideGalleryOpen(false);
          setSelectedInfographic(t);
        }}
      />

      {/* Folder Manager Modal (S1 A1, S1 A2, S2 A1, S2 A2) */}
      <FolderManagerModal
        isOpen={isFolderManagerOpen}
        onClose={() => setIsFolderManagerOpen(false)}
        activeFolderId={activeFolderForManager}
        imagesMap={imagesMap}
        onSaveImage={handleSaveImage}
        onDeleteImage={handleDeleteImage}
        onPreviewImage={handlePreviewImage}
      />

      {/* Slide Lightbox HD Modal (Zoom, Pan, Rotate, Download) */}
      <SlideLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ isOpen: false, title: '', imageSrc: null })}
        title={lightboxState.title}
        imageSrc={lightboxState.imageSrc}
      />

      {/* Admin Edit Modals */}
      <AdminEditTopicModal
        topic={editingTopic}
        onClose={() => setEditingTopic(null)}
        onSave={handleSaveTopic}
      />

      <AdminEditProfileModal
        profile={profile}
        isOpen={isEditingProfile}
        onClose={() => setIsEditingProfile(false)}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
