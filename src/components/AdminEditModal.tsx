import React, { useState } from 'react';
import { TopicSection, AppProfile, QuestionItem } from '../types';
import { X, Save, Edit, Sparkles } from 'lucide-react';

interface AdminEditTopicModalProps {
  topic: TopicSection | null;
  onClose: () => void;
  onSave: (updatedTopic: TopicSection) => void;
}

export const AdminEditTopicModal: React.FC<AdminEditTopicModalProps> = ({
  topic,
  onClose,
  onSave,
}) => {
  if (!topic) return null;

  const [title, setTitle] = useState(topic.title);
  const [subtitle, setSubtitle] = useState(topic.subtitle);
  const [summary, setSummary] = useState(topic.summary);
  const [characterQuote, setCharacterQuote] = useState(topic.characterQuote);
  const [conclusionQuote, setConclusionQuote] = useState(topic.conclusionQuote);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...topic,
      title,
      subtitle,
      summary,
      characterQuote,
      conclusionQuote,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-purple-950 rounded-3xl shadow-2xl border-2 border-purple-300 dark:border-purple-700 overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-purple-100 dark:bg-purple-900 border-b border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-2">
            <Edit className="w-4 h-4 text-purple-600 dark:text-purple-300" />
            <h3 className="font-extrabold text-sm text-purple-950 dark:text-purple-100">
              Editar Tema #{topic.topicNumber} (Modo Administradora)
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-purple-500 hover:text-purple-800">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          <div>
            <label className="block font-bold text-purple-900 dark:text-purple-200 mb-1">Título del Tema</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700 font-semibold text-purple-950 dark:text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-purple-900 dark:text-purple-200 mb-1">Subtítulo / Lema</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700 font-semibold text-purple-950 dark:text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-purple-900 dark:text-purple-200 mb-1">Resumen del Tema</label>
            <textarea
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700 font-semibold text-purple-950 dark:text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-purple-900 dark:text-purple-200 mb-1">Frase del Personaje BT21</label>
            <input
              type="text"
              value={characterQuote}
              onChange={(e) => setCharacterQuote(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700 font-semibold text-purple-950 dark:text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-bold text-purple-900 dark:text-purple-200 mb-1">Conclusión / Cita Final</label>
            <input
              type="text"
              value={conclusionQuote}
              onChange={(e) => setConclusionQuote(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700 font-semibold text-purple-950 dark:text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-purple-100 dark:border-purple-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-purple-900 text-gray-700 dark:text-gray-300 font-bold"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Guardar Cambios</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface AdminEditProfileModalProps {
  profile: AppProfile | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProfile: AppProfile) => void;
}

export const AdminEditProfileModal: React.FC<AdminEditProfileModalProps> = ({
  profile,
  isOpen,
  onClose,
  onSave,
}) => {
  if (!isOpen || !profile) return null;

  const [studentName, setStudentName] = useState(profile.studentName);
  const [career, setCareer] = useState(profile.career);
  const [university, setUniversity] = useState(profile.university);
  const [course, setCourse] = useState(profile.course);
  const [motto, setMotto] = useState(profile.motto);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...profile,
      studentName,
      career,
      university,
      course,
      motto,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-white dark:bg-purple-950 rounded-3xl shadow-2xl border-2 border-purple-300 dark:border-purple-700 overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-purple-100 dark:bg-purple-900 border-b border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-300" />
            <h3 className="font-extrabold text-sm text-purple-950 dark:text-purple-100">
              Editar Perfil de Estudiante
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-purple-500 hover:text-purple-800">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-3.5 text-xs">
          <div>
            <label className="block font-bold text-purple-900 dark:text-purple-200 mb-1">Nombre</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700 font-semibold text-purple-950 dark:text-purple-100"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-purple-900 dark:text-purple-200 mb-1">Carrera</label>
            <input
              type="text"
              value={career}
              onChange={(e) => setCareer(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700 font-semibold text-purple-950 dark:text-purple-100"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-purple-900 dark:text-purple-200 mb-1">Universidad</label>
            <input
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700 font-semibold text-purple-950 dark:text-purple-100"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-purple-900 dark:text-purple-200 mb-1">Asignatura</label>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700 font-semibold text-purple-950 dark:text-purple-100"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-purple-900 dark:text-purple-200 mb-1">Lema o Frase ARMY</label>
            <input
              type="text"
              value={motto}
              onChange={(e) => setMotto(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700 font-semibold text-purple-950 dark:text-purple-100"
              required
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-purple-100 dark:border-purple-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-purple-900 text-gray-700 dark:text-gray-300 font-bold"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Guardar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
