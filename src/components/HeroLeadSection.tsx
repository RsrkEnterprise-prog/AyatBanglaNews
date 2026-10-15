import React from 'react';
import { Sparkles, TrendingUp, Clock, MapPin, Bookmark, Share2, Flame, ChevronRight, Activity } from 'lucide-react';
import { NewsArticle, Language } from '../types';
import { formatArticleDate } from '../utils/dateUtils';
import { CATEGORIES } from '../data/newsData';

interface HeroLeadSectionProps {
  heroArticle: NewsArticle;
  trendingArticles: NewsArticle[];
  language: Language;
  onSelectArticle: (article: NewsArticle) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (articleId: string, e: React.MouseEvent) => void;
  onShare: (article: NewsArticle, e: React.MouseEvent) => void;
}

export const HeroLeadSection: React.FC<HeroLeadSectionProps> = ({
  heroArticle,
  trendingArticles,
  language,
  onSelectArticle,
  bookmarkedIds,
  onToggleBookmark,
  onShare,
}) => {
  const heroCat = CATEGORIES.find((c) => c.id === heroArticle.category);

  return (
    <section className="mb-10">
      {/* Top Kolkata Quick Status Bar */}
      <div className="mb-4 bg-slate-100 dark:bg-slate-800/80 rounded-lg p-2.5 px-4 border border-slate-200 dark:border-slate-700/80 flex flex-wrap items-center justify-between text-xs text-slate-700 dark:text-slate-300 gap-2">
        <div className="flex items-center space-x-2 font-bold text-red-600 dark:text-red-400">
          <Activity className="w-4 h-4 animate-pulse" />
          <span>{language === 'bn' ? 'কলকাতা লাইভ ডেস্ক:' : 'Kolkata Live Desk:'}</span>
        </div>
        <div className="flex items-center space-x-4 flex-wrap text-slate-600 dark:text-slate-400">
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{language === 'bn' ? 'মেট্রো পরিষেবা: স্বাভাবিক' : 'Metro: Normal service'}</span>
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center space-x-1">
            <span>{language === 'bn' ? 'বাতাসের গুণমান (AQI): ৭৮ (সন্তোষজনক)' : 'Air Quality: 78 (Moderate)'}</span>
          </span>
          <span className="hidden md:inline">•</span>
          <span>{language === 'bn' ? 'সূর্যাস্ত: বিকাল ৫:১২' : 'Sunset: 5:12 PM IST'}</span>
          <span className="hidden lg:inline">•</span>
          <span className="text-amber-600 dark:text-amber-400 font-semibold">
            {language === 'bn' ? 'জরুরি হেল্পলাইন: ১১২' : 'Emergency Help: 112'}
          </span>
        </div>
      </div>

      {/* Grid: 2/3 Main Hero Story + 1/3 Trending Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Hero Card (8 cols) */}
        <div
          onClick={() => onSelectArticle(heroArticle)}
          className="lg:col-span-8 group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-red-500/50 dark:hover:border-red-500/50 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
        >
          {/* Main Visual */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
            <img
              src={heroArticle.imageUrl}
              alt={heroArticle.title[language]}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Badges on hero */}
            <div className="absolute top-4 left-4 flex items-center space-x-2">
              <span className="px-3 py-1 rounded-md text-xs font-black bg-red-600 text-white uppercase tracking-wider shadow-lg flex items-center space-x-1">
                <Flame className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'মুখ্য সংবাদ' : 'LEAD STORY'}</span>
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-900/90 text-white backdrop-blur-sm">
                {heroCat ? heroCat.name[language] : heroArticle.category}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-black/60 text-amber-300 backdrop-blur-xs">
                {language === 'bn' ? 'নমুনা সংবাদ' : 'Demo Story'}
              </span>
            </div>

            {/* Bookmark & share buttons */}
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <button
                onClick={(e) => onToggleBookmark(heroArticle.id, e)}
                className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                  bookmarkedIds.has(heroArticle.id)
                    ? 'bg-rose-600 text-white'
                    : 'bg-black/60 hover:bg-black/80 text-white'
                }`}
                title="Save lead story"
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>
              <button
                onClick={(e) => onShare(heroArticle, e)}
                className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                title="Share story"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Title & Excerpt inside visual overlay on large screens */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              {heroArticle.location && (
                <div className="flex items-center space-x-1.5 text-xs text-rose-300 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{heroArticle.location[language]}</span>
                </div>
              )}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight font-bengali drop-shadow-sm group-hover:text-rose-200 transition-colors">
                {heroArticle.title[language]}
              </h2>
            </div>
          </div>

          {/* Hero Bottom Body */}
          <div className="p-5 sm:p-6 bg-white dark:bg-slate-900">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {heroArticle.excerpt[language]}
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-3">
                <img
                  src={heroArticle.author.avatar}
                  alt={heroArticle.author.name[language]}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-red-500/20"
                />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {heroArticle.author.name[language]}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {heroArticle.author.role[language]}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-red-600 dark:text-red-400 font-bold">
                <span className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 font-normal">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{heroArticle.readTime[language]}</span>
                </span>
                <span className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>{language === 'bn' ? 'সম্পূর্ণ খবর পড়ুন' : 'Read Full Story'}</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b-2 border-red-600 pb-2">
            <h3 className="font-black text-lg text-slate-900 dark:text-white flex items-center space-x-2 font-bengali">
              <TrendingUp className="w-5 h-5 text-red-600" />
              <span>{language === 'bn' ? 'শীর্ষ ট্রেন্ডিং খবর' : 'Trending Headlines'}</span>
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'bn' ? 'আজকের সেরা' : 'Top picks'}
            </span>
          </div>

          <div className="flex-1 flex flex-col space-y-3">
            {trendingArticles.slice(0, 3).map((item, index) => {
              const cat = CATEGORIES.find((c) => c.id === item.category);
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectArticle(item)}
                  className="group bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-red-500/40 shadow-xs hover:shadow-md transition-all cursor-pointer flex space-x-3"
                >
                  {/* Number Badge */}
                  <div className="shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-red-600 dark:text-red-400 font-black text-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {language === 'bn' ? ['১', '২', '৩'][index] : index + 1}
                  </div>

                  {/* Thumbnail */}
                  <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={item.imageUrl}
                      alt={item.title[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content snippet */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <span className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wide">
                        {cat ? cat.name[language] : item.category}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 line-clamp-2 leading-snug font-bengali">
                        {item.title[language]}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.readTime[language]}</span>
                      </span>
                      <span className="text-blue-900 dark:text-blue-400 font-semibold">
                        {language === 'bn' ? 'বিস্তারিত' : 'View'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Ad / Newsletter box in Bengali style */}
          <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-xl p-4 border border-blue-900 shadow-sm">
            <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{language === 'bn' ? 'ডিজিটাল আপডেট সাবস্ক্রিপশন' : 'Digital Bulletin'}</span>
            </div>
            <h4 className="font-bold text-sm text-white mb-1.5 font-bengali">
              {language === 'bn'
                ? 'সরাসরি হোয়াটসঅ্যাপে পান সকালের তাজা খবর'
                : 'Get Kolkata & Bengal Morning Briefings Daily'}
            </h4>
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              {language === 'bn'
                ? 'কোনো ফেক নিউজ নয়, সম্পূর্ণ খাঁটি ও যাচাইকৃত সংবাদ সবার আগে।'
                : 'Verified regional journalism, tech analysis, and government job bulletins.'}
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder={language === 'bn' ? 'আপনার মোবাইল নম্বর বা ইমেইল' : 'Mobile / Email'}
                className="bg-slate-800/90 text-xs rounded-lg px-3 py-2 text-white border border-slate-700 focus:outline-none focus:border-red-500 flex-1"
              />
              <button
                onClick={() => alert(language === 'bn' ? 'ধন্যবাদ! ডেমো সাবস্ক্রিপশন সংরক্ষিত হয়েছে।' : 'Thank you! Demo subscription noted.')}
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
              >
                {language === 'bn' ? 'যুক্ত হন' : 'Join'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
