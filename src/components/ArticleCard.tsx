import React from 'react';
import { Bookmark, Clock, Share2, MapPin, Eye } from 'lucide-react';
import { NewsArticle, Language } from '../types';
import { formatArticleDate } from '../utils/dateUtils';
import { CATEGORIES } from '../data/newsData';

interface ArticleCardProps {
  article: NewsArticle;
  language: Language;
  onSelect: (article: NewsArticle) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string, e: React.MouseEvent) => void;
  onShare: (article: NewsArticle, e: React.MouseEvent) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  language,
  onSelect,
  isBookmarked,
  onToggleBookmark,
  onShare,
}) => {
  const categoryMeta = CATEGORIES.find((c) => c.id === article.category);
  const categoryName = categoryMeta ? categoryMeta.name[language] : article.category;

  return (
    <article
      onClick={() => onSelect(article)}
      className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-red-500/50 dark:hover:border-red-500/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer relative"
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={article.imageUrl}
          alt={article.title[language]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center space-x-1.5 flex-wrap gap-1">
          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-600 text-white uppercase tracking-wider shadow">
            {categoryName}
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-black/60 backdrop-blur-xs text-white">
            {language === 'bn' ? 'নমুনা খবর' : 'Sample'}
          </span>
        </div>

        {/* Action icons on image */}
        <div className="absolute top-2.5 right-2.5 flex items-center space-x-1">
          <button
            onClick={(e) => onToggleBookmark(article.id, e)}
            className={`p-1.5 rounded-full backdrop-blur-md transition-colors ${
              isBookmarked
                ? 'bg-rose-600 text-white'
                : 'bg-black/50 hover:bg-black/80 text-white'
            }`}
            title={isBookmarked ? 'Remove bookmark' : 'Save article'}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
          </button>
          <button
            onClick={(e) => onShare(article, e)}
            className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
            title="Share article"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Location badge if present */}
        {article.location && (
          <div className="absolute bottom-2 left-2.5 flex items-center space-x-1 text-[11px] font-medium text-white/90 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded">
            <MapPin className="w-3 h-3 text-red-400" />
            <span>{article.location[language]}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 leading-snug font-bengali">
            {article.title[language]}
          </h3>

          {/* Excerpt */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {article.excerpt[language]}
          </p>
        </div>

        {/* Footer info: author, date, read time */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center space-x-2">
            <img
              src={article.author.avatar}
              alt={article.author.name[language]}
              className="w-5 h-5 rounded-full object-cover"
            />
            <span className="font-medium truncate max-w-[110px]">
              {article.author.name[language]}
            </span>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <span className="flex items-center space-x-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{article.readTime[language]}</span>
            </span>
            <span>•</span>
            <span className="text-red-600 dark:text-red-400 font-semibold flex items-center space-x-0.5">
              <span>{language === 'bn' ? 'পড়ুন' : 'Read'}</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
