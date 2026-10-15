import React from 'react';
import { X, Bookmark, Trash2, Clock, ChevronRight, BookOpen } from 'lucide-react';
import { NewsArticle, Language } from '../types';
import { formatArticleDate } from '../utils/dateUtils';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: NewsArticle[];
  language: Language;
  onSelectArticle: (article: NewsArticle) => void;
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  savedArticles,
  language,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-600">
              <Bookmark className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white font-bengali">
                {language === 'bn' ? 'সংরক্ষিত খবর ও বুকমার্ক' : 'Saved Articles'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'bn'
                  ? `${savedArticles.length}টি খবর পরবর্তীতে পড়ার জন্য সংরক্ষিত`
                  : `${savedArticles.length} articles saved for later`}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {savedArticles.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs font-semibold text-red-600 hover:text-red-700 px-2.5 py-1 rounded hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
              >
                {language === 'bn' ? 'সব মুছুন' : 'Clear All'}
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-red-600 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content list */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1 space-y-3">
          {savedArticles.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-3">
              <BookOpen className="w-12 h-12 mx-auto stroke-1" />
              <p className="text-sm font-medium">
                {language === 'bn'
                  ? 'এখনও কোনো খবর সংরক্ষণ করা হয়নি।'
                  : 'No saved articles yet.'}
              </p>
              <p className="text-xs text-slate-500">
                {language === 'bn'
                  ? 'যেকোনো সংবাদের বুকমার্ক আইকনে ক্লিক করে এখানে জমা রাখুন।'
                  : 'Click the bookmark icon on any story to read it later.'}
              </p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.id}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-red-500/50 bg-white dark:bg-slate-900 transition-all flex items-center justify-between gap-3 group"
              >
                <div
                  className="flex items-center space-x-3 min-w-0 cursor-pointer flex-1"
                  onClick={() => {
                    onSelectArticle(art);
                    onClose();
                  }}
                >
                  <img
                    src={art.imageUrl}
                    alt={art.title[language]}
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 group-hover:text-red-600 truncate font-bengali">
                      {art.title[language]}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 flex items-center space-x-1.5">
                      <Clock className="w-3 h-3" />
                      <span>{formatArticleDate(art.publishedAt, language)}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="px-2.5 py-1 text-xs font-semibold bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    {language === 'bn' ? 'পড়ুন' : 'Read'}
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(art.id)}
                    className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
