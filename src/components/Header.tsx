import React, { useState, useEffect } from 'react';
import {
  Search,
  Moon,
  Sun,
  Globe,
  Bookmark,
  Menu,
  X,
  Clock,
  Sparkles,
  Download,
  BookOpen,
  CloudSun,
  PhoneCall,
  Mail,
  ChevronDown
} from 'lucide-react';
import { Language, CategoryId } from '../types';
import { CATEGORIES } from '../data/newsData';
import { getKolkataDateTime } from '../utils/dateUtils';
import {
  FacebookIcon,
  YouTubeIcon,
  InstagramIcon,
  OFFICIAL_SOCIAL_LINKS
} from './SocialFollowSection';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  savedCount: number;
  onOpenBookmarks: () => void;
  onOpenGuide: () => void;
  onOpenEPaper: () => void;
  activeTab: 'news' | 'tech-blog' | 'schemes' | 'weather' | 'contact';
  setActiveTab: (tab: 'news' | 'tech-blog' | 'schemes' | 'weather' | 'contact') => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  darkMode,
  setDarkMode,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  fontSize,
  setFontSize,
  savedCount,
  onOpenBookmarks,
  onOpenGuide,
  onOpenEPaper,
  activeTab,
  setActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dateTime, setDateTime] = useState(() => getKolkataDateTime(language));

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(getKolkataDateTime(language));
    }, 1000);
    return () => clearInterval(timer);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'bn' ? 'en' : 'bn');
  };

  const cycleFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
    else setFontSize('normal');
  };

  return (
    <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200 sticky top-0 z-40">
      {/* 1. Super Top Bar: Live IST Time, Date, Weather, Tools */}
      <div className="bg-slate-900 text-slate-100 text-xs py-1.5 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Asia/Kolkata Clock & Bengali Calendar */}
          <div className="flex items-center space-x-3 flex-wrap">
            <div className="flex items-center space-x-1.5 text-rose-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block"></span>
              <Clock className="w-3.5 h-3.5" />
              <span>{dateTime.timeString}</span>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-300 font-normal hidden md:inline">{dateTime.dateString}</span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="text-amber-300/90 hidden lg:inline">{dateTime.bengaliCalendarDate}</span>
          </div>

          {/* Right: Weather quick snippet & utilities */}
          <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
            {/* Kolkata weather shortcut */}
            <button
              onClick={() => setActiveTab('weather')}
              className="flex items-center space-x-1 hover:text-rose-400 transition-colors text-slate-300"
              title={language === 'bn' ? 'কলকাতার আবহাওয়া' : 'Kolkata Weather'}
            >
              <CloudSun className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'bn' ? 'কলকাতা ৩১°C' : 'Kolkata 31°C'}</span>
            </button>

            <span className="text-slate-700">|</span>

            {/* Font Resizer */}
            <button
              onClick={cycleFontSize}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-colors"
              title={language === 'bn' ? 'ফন্টের আকার পরিবর্তন' : 'Change font size'}
            >
              {fontSize === 'normal' ? 'A' : fontSize === 'large' ? 'A+' : 'A++'}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-0.5 rounded bg-rose-600 hover:bg-rose-700 text-white font-semibold transition-colors shadow-sm"
              title="Switch language / ভাষা পরিবর্তন"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Saved Bookmarks */}
            <button
              onClick={onOpenBookmarks}
              className="flex items-center space-x-1 p-1 sm:px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors relative"
              title={language === 'bn' ? 'সংরক্ষিত সংবাদ' : 'Saved Articles'}
            >
              <Bookmark className="w-3.5 h-3.5" />
              {savedCount > 0 && (
                <span className="bg-rose-500 text-white text-[10px] font-bold px-1 rounded-full">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Social Media Follow Shortcuts */}
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="hidden sm:flex items-center space-x-1.5">
              <span className="text-[11px] text-slate-400 font-medium hidden xl:inline font-bengali">
                {language === 'bn' ? 'সোশ্যাল মিডিয়া:' : 'Follow:'}
              </span>
              <a
                href={OFFICIAL_SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded bg-[#1877F2] hover:bg-[#166fe5] text-white transition-transform hover:scale-110 shadow-xs"
                title="Facebook — Follow করুন"
              >
                <FacebookIcon className="w-3 h-3" />
              </a>
              <a
                href={OFFICIAL_SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded bg-[#FF0000] hover:bg-[#e60000] text-white transition-transform hover:scale-110 shadow-xs"
                title="YouTube — Subscribe করুন"
              >
                <YouTubeIcon className="w-3 h-3" />
              </a>
              <a
                href={OFFICIAL_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white transition-transform hover:scale-110 shadow-xs"
                title="Instagram — Follow করুন"
              >
                <InstagramIcon className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Masthead: Brand Logo, Sub-Brand "My Blog", Contact info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo & Title in Red and Navy Blue */}
        <div className="flex items-center space-x-3 sm:space-x-4 cursor-pointer" onClick={() => { setActiveTab('news'); onSelectCategory('all'); }}>
          {/* Logo Icon */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-rose-900 flex items-center justify-center text-white shadow-md shadow-red-600/30 ring-2 ring-red-500/20">
            <div className="text-center font-bold">
              <span className="block text-base sm:text-lg font-black leading-none">আ</span>
              <span className="block text-[9px] tracking-wider uppercase font-semibold text-rose-200">Ayat</span>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 flex-wrap">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-red-600 dark:text-red-500 font-bengali">
                আয়াত বাংলা নিউজ
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-blue-900 text-white shadow-sm">
                Ayat Bangla News
              </span>
            </div>
            <div className="flex items-center space-x-2 mt-0.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-blue-900 dark:text-blue-400">MY BLOG</span>
              <span>•</span>
              <span className="font-medium">
                {language === 'bn'
                  ? 'পশ্চিমবঙ্গ ও কলকাতার নির্ভরযোগ্য সংবাদ মাধ্যম ও প্রযুক্তি ব্লগ'
                  : 'West Bengal & Kolkata\'s Premier News & Tech Portal'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Action Widgets (Contact & Download Code Guide) */}
        <div className="flex items-center space-x-2 sm:space-x-3 w-full md:w-auto justify-end">
          {/* E-Paper Button */}
          <button
            onClick={onOpenEPaper}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-red-600" />
            <span>{language === 'bn' ? 'ই-পেপার' : 'E-Paper'}</span>
          </button>

          {/* Download & Publish Guide Button (Prominent for User) */}
          <button
            onClick={onOpenGuide}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'কোড ডাউনলোড ও পাবলিশ গাইড' : 'Download & Publish Guide'}</span>
          </button>

          {/* Contact quick button */}
          <button
            onClick={() => setActiveTab('contact')}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-blue-900 hover:bg-blue-800 text-white transition-colors shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'যোগাযোগ' : 'Contact'}</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 3. Primary Navigation Bar with Indian News Red / Navy Blue accents */}
      <nav className="bg-blue-950 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Main Horizontal Tab List (Desktop) */}
          <div className="hidden md:flex items-center space-x-1 overflow-x-auto no-scrollbar py-1">
            {/* Home / News */}
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('all');
              }}
              className={`px-3 py-2 text-xs lg:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'news' && selectedCategory === 'all'
                  ? 'bg-red-600 text-white shadow'
                  : 'hover:bg-blue-900 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'হোম' : 'Home'}
            </button>

            {/* West Bengal */}
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('west-bengal');
              }}
              className={`px-2.5 py-2 text-xs lg:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'news' && selectedCategory === 'west-bengal'
                  ? 'bg-red-600 text-white shadow'
                  : 'hover:bg-blue-900 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'পশ্চিমবঙ্গ' : 'West Bengal'}
            </button>

            {/* Kolkata */}
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('kolkata');
              }}
              className={`px-2.5 py-2 text-xs lg:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'news' && selectedCategory === 'kolkata'
                  ? 'bg-red-600 text-white shadow'
                  : 'hover:bg-blue-900 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'কলকাতা' : 'Kolkata'}
            </button>

            {/* India */}
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('india');
              }}
              className={`px-2.5 py-2 text-xs lg:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'news' && selectedCategory === 'india'
                  ? 'bg-red-600 text-white shadow'
                  : 'hover:bg-blue-900 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'ভারত' : 'India'}
            </button>

            {/* Politics */}
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('politics');
              }}
              className={`px-2.5 py-2 text-xs lg:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'news' && selectedCategory === 'politics'
                  ? 'bg-red-600 text-white shadow'
                  : 'hover:bg-blue-900 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'রাজনীতি' : 'Politics'}
            </button>

            {/* Education & Jobs */}
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('education-jobs');
              }}
              className={`px-2.5 py-2 text-xs lg:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'news' && selectedCategory === 'education-jobs'
                  ? 'bg-red-600 text-white shadow'
                  : 'hover:bg-blue-900 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'শিক্ষা ও চাকরি' : 'Education & Jobs'}
            </button>

            {/* Govt Schemes (Special Tab) */}
            <button
              onClick={() => setActiveTab('schemes')}
              className={`px-2.5 py-2 text-xs lg:text-sm font-bold rounded-md transition-colors whitespace-nowrap flex items-center space-x-1 ${
                activeTab === 'schemes'
                  ? 'bg-amber-600 text-white shadow'
                  : 'hover:bg-blue-900 text-amber-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'সরকারি প্রকল্প' : 'Govt Schemes'}</span>
            </button>

            {/* Technology & AI Blog (Prominent) */}
            <button
              onClick={() => setActiveTab('tech-blog')}
              className={`px-3 py-2 text-xs lg:text-sm font-bold rounded-md transition-colors whitespace-nowrap flex items-center space-x-1 ${
                activeTab === 'tech-blog'
                  ? 'bg-cyan-600 text-white shadow'
                  : 'hover:bg-blue-900 text-cyan-300'
              }`}
            >
              <span>{language === 'bn' ? 'মাই ব্লগ (টেক ও এআই)' : 'My Blog (Tech & AI)'}</span>
            </button>

            {/* Sports */}
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('sports');
              }}
              className={`px-2.5 py-2 text-xs lg:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'news' && selectedCategory === 'sports'
                  ? 'bg-red-600 text-white shadow'
                  : 'hover:bg-blue-900 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'খেলাধুলা' : 'Sports'}
            </button>

            {/* Weather */}
            <button
              onClick={() => setActiveTab('weather')}
              className={`px-2.5 py-2 text-xs lg:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'weather'
                  ? 'bg-red-600 text-white shadow'
                  : 'hover:bg-blue-900 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'আবহাওয়া' : 'Weather'}
            </button>

            {/* Contact */}
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-2.5 py-2 text-xs lg:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'contact'
                  ? 'bg-red-600 text-white shadow'
                  : 'hover:bg-blue-900 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'যোগাযোগ' : 'Contact'}
            </button>
          </div>

          {/* Search Trigger and Search input */}
          <div className="relative flex items-center py-1 ml-auto">
            {searchOpen ? (
              <div className="flex items-center bg-blue-900/90 rounded-full px-3 py-1 ring-1 ring-blue-700">
                <Search className="w-3.5 h-3.5 text-slate-400 mr-2" />
                <input
                  type="text"
                  placeholder={language === 'bn' ? 'সংবাদ খুঁজুন (যেমন: মেট্রো, চাকরি)...' : 'Search news, topics...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none w-44 sm:w-60"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchOpen(false);
                  }}
                  className="text-slate-400 hover:text-white ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-blue-900 hover:bg-blue-800 text-slate-200 text-xs transition-colors"
                title={language === 'bn' ? 'সংবাদ খুঁজুন' : 'Search news'}
              >
                <Search className="w-3.5 h-3.5 text-rose-400" />
                <span className="hidden sm:inline">{language === 'bn' ? 'অনুসন্ধান' : 'Search'}</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* 4. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 text-slate-100 border-b border-slate-800 px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          {/* Quick search inside mobile */}
          <div className="flex items-center bg-slate-800 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input
              type="text"
              placeholder={language === 'bn' ? 'সংবাদ খুঁজুন...' : 'Search news...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm pt-2">
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('all');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded bg-slate-800/80 hover:bg-red-600"
            >
              {language === 'bn' ? '🏠 প্রধান পাতা (হোম)' : '🏠 Homepage'}
            </button>
            <button
              onClick={() => {
                setActiveTab('tech-blog');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded bg-cyan-950 text-cyan-300 font-bold hover:bg-cyan-800"
            >
              {language === 'bn' ? '💻 মাই ব্লগ (টেক)' : '💻 My Blog (Tech)'}
            </button>
            <button
              onClick={() => {
                setActiveTab('schemes');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded bg-amber-950 text-amber-300 font-bold hover:bg-amber-800"
            >
              {language === 'bn' ? '📜 সরকারি প্রকল্প' : '📜 Govt Schemes'}
            </button>
            <button
              onClick={() => {
                setActiveTab('weather');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded bg-slate-800 hover:bg-red-600"
            >
              {language === 'bn' ? '⛅ আবহাওয়া' : '⛅ Weather'}
            </button>
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('west-bengal');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded bg-slate-800 hover:bg-red-600"
            >
              {language === 'bn' ? 'পশ্চিমবঙ্গ' : 'West Bengal'}
            </button>
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('kolkata');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded bg-slate-800 hover:bg-red-600"
            >
              {language === 'bn' ? 'কলকাতা' : 'Kolkata'}
            </button>
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('education-jobs');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded bg-slate-800 hover:bg-red-600"
            >
              {language === 'bn' ? 'শিক্ষা ও চাকরি' : 'Education & Jobs'}
            </button>
            <button
              onClick={() => {
                setActiveTab('news');
                onSelectCategory('sports');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded bg-slate-800 hover:bg-red-600"
            >
              {language === 'bn' ? 'খেলাধুলা' : 'Sports'}
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded bg-blue-900 font-semibold text-white col-span-2"
            >
              {language === 'bn' ? '📞 যোগাযোগ ও হেল্পলাইন' : '📞 Contact & Helpdesk'}
            </button>
          </div>

          {/* Social Follow in Mobile Drawer */}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-400 font-bengali">
              {language === 'bn' ? 'আমাদের সোশ্যাল মিডিয়ায় Follow করুন' : 'Follow Us on Social Media'}
            </div>
            <div className="grid grid-cols-1 gap-2">
              <a
                href={OFFICIAL_SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#1877F2] text-white text-xs font-bold shadow-sm"
              >
                <span className="flex items-center space-x-2">
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </span>
                <span>{language === 'bn' ? 'Follow করুন' : 'Follow'}</span>
              </a>
              <a
                href={OFFICIAL_SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#FF0000] text-white text-xs font-bold shadow-sm"
              >
                <span className="flex items-center space-x-2">
                  <YouTubeIcon className="w-4 h-4" />
                  <span>YouTube</span>
                </span>
                <span>{language === 'bn' ? 'Subscribe করুন' : 'Subscribe'}</span>
              </a>
              <a
                href={OFFICIAL_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-xs font-bold shadow-sm"
              >
                <span className="flex items-center space-x-2">
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </span>
                <span>{language === 'bn' ? 'Follow করুন' : 'Follow'}</span>
              </a>
            </div>
          </div>

          {/* Quick info contacts */}
          <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
            <p className="flex items-center space-x-2">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>+919051112924</span>
            </p>
            <p className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-rose-400" />
              <span>rsrkenterprise@gmail.com</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
