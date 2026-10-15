/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  Language,
  CategoryId,
  NewsArticle
} from './types';
import {
  CATEGORIES,
  SAMPLE_ARTICLES
} from './data/newsData';
import { Header } from './components/Header';
import { BreakingTicker } from './components/BreakingTicker';
import { HeroLeadSection } from './components/HeroLeadSection';
import { ArticleCard } from './components/ArticleCard';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { TechBlogSection } from './components/TechBlogSection';
import { GovtSchemesSection } from './components/GovtSchemesSection';
import { WeatherSection } from './components/WeatherSection';
import { ContactSection } from './components/ContactSection';
import { PublishGuideModal } from './components/PublishGuideModal';
import { BookmarksModal } from './components/BookmarksModal';
import { EPaperModal } from './components/EPaperModal';
import { SocialFollowSection } from './components/SocialFollowSection';
import { Footer } from './components/Footer';
import {
  Filter,
  Sparkles,
  Search,
  BookOpen,
  ArrowRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('bn');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [activeTab, setActiveTab] = useState<'news' | 'tech-blog' | 'schemes' | 'weather' | 'contact'>('news');

  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);
  const [isEPaperOpen, setIsEPaperOpen] = useState<boolean>(false);

  // Persistent bookmarks via localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('ayat_bangla_bookmarks');
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  // Sync dark mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Persist bookmarks
  const toggleBookmark = (articleId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds((prev) => {
      const updated = new Set(prev);
      if (updated.has(articleId)) {
        updated.delete(articleId);
      } else {
        updated.add(articleId);
      }
      try {
        localStorage.setItem('ayat_bangla_bookmarks', JSON.stringify(Array.from(updated)));
      } catch (err) {
        console.error('Failed to save bookmark', err);
      }
      return updated;
    });
  };

  const clearAllBookmarks = () => {
    setBookmarkedIds(new Set());
    localStorage.removeItem('ayat_bangla_bookmarks');
  };

  const handleShareArticle = (article: NewsArticle, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: article.title[language],
        text: article.excerpt[language],
        url: window.location.href,
      }).catch(() => {});
    } else {
      setSelectedArticle(article);
    }
  };

  // Filtered articles
  const filteredArticles = useMemo(() => {
    let list = SAMPLE_ARTICLES;

    // Filter by category if not 'all'
    if (selectedCategory !== 'all') {
      list = list.filter((a) => a.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((a) => {
        const titleMatch =
          a.title.bn.toLowerCase().includes(q) || a.title.en.toLowerCase().includes(q);
        const excerptMatch =
          a.excerpt.bn.toLowerCase().includes(q) || a.excerpt.en.toLowerCase().includes(q);
        const tagsMatch =
          a.tags.bn.some((t) => t.toLowerCase().includes(q)) ||
          a.tags.en.some((t) => t.toLowerCase().includes(q));
        return titleMatch || excerptMatch || tagsMatch;
      });
    }

    return list;
  }, [selectedCategory, searchQuery]);

  // Hero Lead article
  const heroArticle = SAMPLE_ARTICLES.find((a) => a.isHero) || SAMPLE_ARTICLES[0];
  const trendingArticles = SAMPLE_ARTICLES.filter((a) => a.isTrending);

  // Saved articles objects
  const savedArticlesList = useMemo(() => {
    return SAMPLE_ARTICLES.filter((a) => bookmarkedIds.has(a.id));
  }, [bookmarkedIds]);

  // Related articles for detail modal
  const relatedArticles = useMemo(() => {
    if (!selectedArticle) return [];
    return SAMPLE_ARTICLES.filter(
      (a) => a.category === selectedArticle.category && a.id !== selectedArticle.id
    );
  }, [selectedArticle]);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-200 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 ${
        fontSize === 'large' ? 'text-lg' : fontSize === 'xlarge' ? 'text-xl' : 'text-base'
      }`}
    >
      {/* 1. Header with live IST clock, brand, navigation, search */}
      <Header
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveTab('news');
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        fontSize={fontSize}
        setFontSize={setFontSize}
        savedCount={bookmarkedIds.size}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenEPaper={() => setIsEPaperOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* 2. Breaking News Ticker with interactive controls */}
      <BreakingTicker
        language={language}
        onSelectBreakingItem={(id) => {
          if (id === 'brk-1') {
            const art = SAMPLE_ARTICLES.find((a) => a.id === 'art-kolkata-metro-expansion');
            if (art) setSelectedArticle(art);
          } else if (id === 'brk-2') {
            const art = SAMPLE_ARTICLES.find((a) => a.id === 'art-education-wbcs-recruitment');
            if (art) setSelectedArticle(art);
          } else if (id === 'brk-3') {
            const art = SAMPLE_ARTICLES.find((a) => a.id === 'art-wb-tech-silicon-valley');
            if (art) setSelectedArticle(art);
          } else {
            setActiveTab('weather');
          }
        }}
      />

      {/* 3. Category Quick Filter Strip (Sticky sub-bar) */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center space-x-2 overflow-x-auto no-scrollbar">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center space-x-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5 text-red-600" />
            <span className="hidden sm:inline">{language === 'bn' ? 'বিভাগ:' : 'Category:'}</span>
          </span>

          {CATEGORIES.map((cat) => {
            const isSelected = activeTab === 'news' && selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveTab('news');
                }}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-sm ring-2 ring-red-400/40'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>{cat.name[language]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Main Body Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* If Active Tab is Tech Blog */}
        {activeTab === 'tech-blog' && (
          <TechBlogSection
            articles={SAMPLE_ARTICLES}
            language={language}
            onSelectArticle={(art) => setSelectedArticle(art)}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={toggleBookmark}
            onShare={handleShareArticle}
          />
        )}

        {/* If Active Tab is Govt Schemes */}
        {activeTab === 'schemes' && (
          <GovtSchemesSection language={language} />
        )}

        {/* If Active Tab is Weather */}
        {activeTab === 'weather' && (
          <WeatherSection language={language} />
        )}

        {/* If Active Tab is Contact */}
        {activeTab === 'contact' && (
          <ContactSection language={language} />
        )}

        {/* If Active Tab is News (Default Homepage & Category views) */}
        {activeTab === 'news' && (
          <div className="space-y-10">
            {/* Show Lead Hero Section only on 'All' category and when not searching */}
            {selectedCategory === 'all' && !searchQuery.trim() && (
              <HeroLeadSection
                heroArticle={heroArticle}
                trendingArticles={trendingArticles}
                language={language}
                onSelectArticle={(art) => setSelectedArticle(art)}
                bookmarkedIds={bookmarkedIds}
                onToggleBookmark={toggleBookmark}
                onShare={handleShareArticle}
              />
            )}

            {/* Active Category Heading & Count */}
            <div className="flex flex-wrap items-center justify-between border-b-2 border-red-600 pb-3 gap-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-6 bg-red-600 rounded-xs"></div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-bengali">
                  {searchQuery.trim()
                    ? language === 'bn'
                      ? `অনুসন্ধানের ফলাফল: "${searchQuery}"`
                      : `Search Results for: "${searchQuery}"`
                    : selectedCategory === 'all'
                    ? language === 'bn'
                      ? 'তাজা ও গুরুত্বপূর্ণ খবর'
                      : 'Latest News & Top Stories'
                    : CATEGORIES.find((c) => c.id === selectedCategory)?.name[language]}
                </h2>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {filteredArticles.length} {language === 'bn' ? 'টি খবর' : 'stories'}
                </span>
              </div>

              {/* Sample news note */}
              <div className="text-xs text-slate-500 flex items-center space-x-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                <span>
                  {language === 'bn'
                    ? 'নমুনা যাচাইকৃত প্রতিবেদন (Sample Demo Journalism)'
                    : 'Structured Demo Articles'}
                </span>
              </div>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <Search className="w-12 h-12 text-slate-400 mx-auto stroke-1" />
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 font-bengali">
                  {language === 'bn' ? 'কোনো খবর খুঁজে পাওয়া যায়নি' : 'No articles found matching query'}
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  {language === 'bn'
                    ? 'অন্য কোনো শব্দ দিয়ে খুঁজুন অথবা অন্য কোনো বিভাগ নির্বাচন করুন।'
                    : 'Try checking different keywords or browse other categories.'}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold text-xs"
                >
                  {language === 'bn' ? 'সব খবর দেখুন' : 'Show All News'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    language={language}
                    onSelect={(art) => setSelectedArticle(art)}
                    isBookmarked={bookmarkedIds.has(article.id)}
                    onToggleBookmark={toggleBookmark}
                    onShare={handleShareArticle}
                  />
                ))}
              </div>
            )}

            {/* Dedicated "আমাদের সোশ্যাল মিডিয়ায় Follow করুন" Section on Homepage */}
            <SocialFollowSection language={language} variant="full" />

            {/* Banner: Switch to My Blog Tech or Govt Schemes */}
            <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white border border-blue-900 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {language === 'bn' ? 'মাই ব্লগ বিশেষ কলাম' : 'My Blog Featured Desk'}
                </span>
                <h3 className="text-xl font-bold font-bengali">
                  {language === 'bn'
                    ? 'প্রযুক্তি ও কৃত্রিম বুদ্ধিমত্তার গভীর বিশ্লেষণ পড়তে চান?'
                    : 'Explore In-Depth Artificial Intelligence & Digital Articles'}
                </h3>
                <p className="text-xs text-slate-300">
                  {language === 'bn'
                    ? 'বাংলা ভাষায় কোডিং, নতুন এআই টুলস ও ক্যারিয়ার বিষয়ক বিশেষ ব্লগ পোস্ট দেখুন।'
                    : 'Programming tutorials, local tech startups, cybersecurity, and Indic LLM models.'}
                </p>
              </div>
              <button
                onClick={() => setActiveTab('tech-blog')}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs transition-colors shrink-0 flex items-center space-x-1.5 shadow-md"
              >
                <span>{language === 'bn' ? 'মাই ব্লগে যান' : 'Visit My Blog'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 5. Footer with complete links, contacts, disclaimers */}
      <Footer
        language={language}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveTab('news');
        }}
        setActiveTab={setActiveTab}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenEPaper={() => setIsEPaperOpen(true)}
      />

      {/* 6. Modals */}
      {/* Article Detail Reading Modal */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        language={language}
        isBookmarked={selectedArticle ? bookmarkedIds.has(selectedArticle.id) : false}
        onToggleBookmark={toggleBookmark}
        relatedArticles={relatedArticles}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* Bookmarks Modal */}
      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedArticles={savedArticlesList}
        language={language}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onRemoveBookmark={(id) => toggleBookmark(id)}
        onClearAll={clearAllBookmarks}
      />

      {/* Code Download & Publish Online Step-by-Step Guide Modal */}
      <PublishGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        language={language}
      />

      {/* Digital E-Paper Modal */}
      <EPaperModal
        isOpen={isEPaperOpen}
        onClose={() => setIsEPaperOpen(false)}
        language={language}
      />
    </div>
  );
}
