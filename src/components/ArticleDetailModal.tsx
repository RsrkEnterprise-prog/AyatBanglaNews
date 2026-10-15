import React, { useState, useEffect } from 'react';
import {
  X,
  Clock,
  MapPin,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Printer,
  Check,
  Facebook,
  Twitter,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { NewsArticle, Language } from '../types';
import { formatArticleDate } from '../utils/dateUtils';
import { CATEGORIES } from '../data/newsData';

interface ArticleDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  language: Language;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
  relatedArticles: NewsArticle[];
  onSelectArticle: (article: NewsArticle) => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  language,
  isBookmarked,
  onToggleBookmark,
  relatedArticles,
  onSelectArticle,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [readerFontSize, setReaderFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  useEffect(() => {
    // Reset state when article changes
    setIsPlayingAudio(false);
    setAudioProgress(0);
    setCopiedLink(false);

    // Cancel any active speech synthesis
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [article]);

  // Audio simulation / Speech synthesis
  useEffect(() => {
    let interval: any;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            if ('speechSynthesis' in window) {
              window.speechSynthesis.cancel();
            }
            return 0;
          }
          return prev + 2;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const toggleSpeechAudio = () => {
    if (!article) return;

    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } else {
      setIsPlayingAudio(true);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const textToSpeak = `${article.title[language]}. ${article.excerpt[language]}. ${article.content[language].join(' ')}`;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = language === 'bn' ? 'bn-IN' : 'en-IN';
        utterance.rate = 0.95;
        utterance.onend = () => {
          setIsPlayingAudio(false);
          setAudioProgress(100);
        };
        try {
          window.speechSynthesis.speak(utterance);
        } catch (e) {
          console.warn('Speech synthesis unavailable, running visual audio player.', e);
        }
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!article) return null;

  const categoryMeta = CATEGORIES.find((c) => c.id === article.category);
  const shareText = encodeURIComponent(`${article.title[language]} - Ayat Bangla News`);
  const shareUrl = encodeURIComponent(window.location.href);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Action Bar */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded text-xs font-bold bg-red-600 text-white uppercase tracking-wider">
              {categoryMeta ? categoryMeta.name[language] : article.category}
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {language === 'bn' ? 'নমুনা সংবাদ' : 'Sample News Demo'}
            </span>
          </div>

          {/* Controls: Audio Reader, Font Resizer, Bookmark, Print, Close */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {/* Audio Reader Trigger */}
            <button
              onClick={toggleSpeechAudio}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                isPlayingAudio
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title={isPlayingAudio ? 'Stop reading' : 'Listen to article'}
            >
              {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-rose-500" />}
              <span className="hidden sm:inline">
                {isPlayingAudio
                  ? language === 'bn' ? 'থামান' : 'Pause'
                  : language === 'bn' ? 'শুনুন' : 'Listen'}
              </span>
            </button>

            {/* Font size toggler */}
            <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 text-xs font-bold text-slate-700 dark:text-slate-300">
              <button
                onClick={() => setReaderFontSize('normal')}
                className={`px-2 py-0.5 rounded ${readerFontSize === 'normal' ? 'bg-white dark:bg-slate-700 shadow-xs' : ''}`}
              >
                A
              </button>
              <button
                onClick={() => setReaderFontSize('large')}
                className={`px-2 py-0.5 rounded ${readerFontSize === 'large' ? 'bg-white dark:bg-slate-700 shadow-xs' : ''}`}
              >
                A+
              </button>
              <button
                onClick={() => setReaderFontSize('xlarge')}
                className={`px-2 py-0.5 rounded ${readerFontSize === 'xlarge' ? 'bg-white dark:bg-slate-700 shadow-xs' : ''}`}
              >
                A++
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={(e) => onToggleBookmark(article.id, e)}
              className={`p-1.5 rounded-lg border transition-colors ${
                isBookmarked
                  ? 'bg-rose-600 border-rose-600 text-white'
                  : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isBookmarked ? 'Saved' : 'Save article'}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:block"
              title="Print article"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-red-600 hover:text-white transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audio Progress Bar when playing */}
        {isPlayingAudio && (
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-1">
            <div
              className="bg-red-600 h-1 transition-all duration-300"
              style={{ width: `${audioProgress}%` }}
            ></div>
          </div>
        )}

        {/* Scrollable Reader Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6 flex-1">
          {/* Article Header info */}
          <div className="space-y-3">
            {article.location && (
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-red-600 dark:text-red-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>{article.location[language]}</span>
                <span>•</span>
                <span>{formatArticleDate(article.publishedAt, language)}</span>
              </div>
            )}

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight font-bengali">
              {article.title[language]}
            </h1>

            {/* Sub-headline / Excerpt */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-l-4 border-red-600 pl-4 py-1 italic bg-slate-50 dark:bg-slate-800/40 rounded-r-lg">
              {article.excerpt[language]}
            </p>
          </div>

          {/* Author info & Social share bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-y border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center space-x-3">
              <img
                src={article.author.avatar}
                alt={article.author.name[language]}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-red-500/20"
              />
              <div>
                <div className="font-bold text-slate-900 dark:text-slate-100">
                  {article.author.name[language]}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {article.author.role[language]}
                </div>
              </div>
            </div>

            {/* Social Share shortcuts */}
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold uppercase text-slate-500 mr-1 hidden sm:inline">
                {language === 'bn' ? 'শেয়ার:' : 'Share:'}
              </span>
              <a
                href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                title="Share on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                title="Share on Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white transition-colors"
                title="Share on Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCopyLink}
                className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors"
                title="Copy article link"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? (language === 'bn' ? 'কপি হয়েছে' : 'Copied') : (language === 'bn' ? 'লিঙ্ক কপি' : 'Copy')}</span>
              </button>
            </div>
          </div>

          {/* Lead Image & Caption */}
          <div className="space-y-2">
            <div className="rounded-xl overflow-hidden shadow-sm aspect-[16/9] bg-slate-100 dark:bg-slate-800">
              <img
                src={article.imageUrl}
                alt={article.title[language]}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic text-center">
              {article.imageCaption[language]}
            </p>
          </div>

          {/* Sample News Transparency Banner */}
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-xl p-3 sm:p-4 text-xs text-amber-900 dark:text-amber-200 flex items-start space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">
                {language === 'bn' ? 'স্বচ্ছতা ও সত্যনিষ্ঠা বার্তা: ' : 'Transparency Notice: '}
              </span>
              <span>
                {language === 'bn'
                  ? 'এই সংবাদ প্রতিবেদনটি "আয়াত বাংলা নিউজ" পোর্টালের লেআউট, ভাষা বিন্যাস এবং প্রযুক্তিগত কার্যকারিতা প্রদর্শনের উদ্দেশ্যে নমুনা (Sample News) হিসেবে সংকলিত হয়েছে। কোনো বাস্তব ঘটনাকে বিকৃত করা হয়নি।'
                  : 'This article is presented as clearly labelled demonstrative sample journalism for testing formatting, reading experience, and regional features.'}
              </span>
            </div>
          </div>

          {/* Full Article Text with Dynamic Font Size */}
          <div
            className={`space-y-4 text-slate-800 dark:text-slate-200 leading-relaxed font-bengali ${
              readerFontSize === 'normal'
                ? 'text-base sm:text-lg'
                : readerFontSize === 'large'
                ? 'text-lg sm:text-xl'
                : 'text-xl sm:text-2xl'
            }`}
          >
            {article.content[language].map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              {language === 'bn' ? 'সম্পর্কিত ট্যাগ:' : 'Related Tags:'}
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags[language].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles in same category */}
          {relatedArticles.length > 0 && (
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2 font-bengali">
                <span>{language === 'bn' ? 'আরও পড়ুন এই বিভাগের খবর' : 'More From This Category'}</span>
                <ChevronRight className="w-4 h-4 text-red-600" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.slice(0, 2).map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectArticle(rel)}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-red-500 bg-slate-50 dark:bg-slate-800/50 cursor-pointer flex space-x-3 transition-colors group"
                  >
                    <img
                      src={rel.imageUrl}
                      alt={rel.title[language]}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-red-600 line-clamp-2 leading-snug font-bengali">
                        {rel.title[language]}
                      </h4>
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        {rel.readTime[language]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
