import React, { useState } from 'react';
import { QuestionItem } from '../types';
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles, Filter, Edit3 } from 'lucide-react';

interface QuestionsBankProps {
  questions: QuestionItem[];
  isEditing: boolean;
  onEditQuestion?: (question: QuestionItem) => void;
}

export const QuestionsBank: React.FC<QuestionsBankProps> = ({
  questions,
  isEditing,
  onEditQuestion,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(questions[0]?.id || null);

  const categories = ['all', ...Array.from(new Set(questions.map((q) => q.category)))];

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white dark:bg-purple-950/80 rounded-3xl p-6 sm:p-8 border-2 border-purple-200 dark:border-purple-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 dark:border-purple-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
              ?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-purple-950 dark:text-purple-100">
              Banco de Preguntas & Evaluación
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-300 mt-1">
            Preguntas clave de comprensión sobre arquitecturas de sistemas y bases de datos (Semana 1)
          </p>
        </div>

        <div className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-bold border border-purple-200 dark:border-purple-700 w-fit">
          {filteredQuestions.length} Preguntas disponibles
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="relative sm:col-span-2">
          <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por pregunta, código (ej. Q01) o palabra clave..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-purple-50/70 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-700 text-xs sm:text-sm font-semibold text-purple-950 dark:text-purple-100 placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2.5 rounded-2xl bg-purple-50/70 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-700 text-xs sm:text-sm font-semibold text-purple-950 dark:text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'Todas las Categorías' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Accordion Question List */}
      <div className="space-y-3">
        {filteredQuestions.map((q) => {
          const isExpanded = expandedId === q.id;
          return (
            <div
              key={q.id}
              className={`rounded-2xl border transition-all ${
                isExpanded
                  ? 'bg-purple-50/90 dark:bg-purple-900/40 border-purple-300 dark:border-purple-700 shadow-sm'
                  : 'bg-white dark:bg-purple-950/40 border-purple-200 dark:border-purple-800 hover:border-purple-300'
              }`}
            >
              <button
                onClick={() => toggleExpand(q.id)}
                className="w-full p-4 text-left flex items-start justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-start gap-2.5">
                  <span className="px-2 py-0.5 rounded-lg bg-purple-600 text-white font-mono font-bold text-xs shrink-0 mt-0.5">
                    {q.code}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-purple-950 dark:text-purple-100">
                      {q.question}
                    </h4>
                    <span className="text-[10px] text-purple-500 dark:text-purple-400 font-semibold uppercase mt-0.5 inline-block">
                      {q.category} {q.relatedTopic ? `• Tema #${q.relatedTopic}` : ''}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 text-purple-500">
                  {isEditing && onEditQuestion && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditQuestion(q);
                      }}
                      className="p-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 dark:bg-amber-950 dark:text-amber-200 text-xs"
                      title="Editar respuesta"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  )}
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-purple-200/60 dark:border-purple-800/60 text-xs sm:text-sm text-purple-900 dark:text-purple-200 leading-relaxed animate-fade-in">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-purple-950 border border-purple-200 dark:border-purple-800">
                    <p className="font-medium">{q.answer}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredQuestions.length === 0 && (
          <div className="text-center py-10 text-purple-400 text-sm font-semibold">
            No se encontraron preguntas con el criterio de búsqueda.
          </div>
        )}
      </div>
    </div>
  );
};
