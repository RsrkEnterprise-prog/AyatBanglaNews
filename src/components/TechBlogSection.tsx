import React, { useState } from 'react';
import {
  Cpu,
  Terminal,
  Sparkles,
  BookOpen,
  Code2,
  Clock,
  Bookmark,
  Share2,
  CheckCircle,
  Lightbulb,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { NewsArticle, Language } from '../types';
import { formatArticleDate } from '../utils/dateUtils';

interface TechBlogSectionProps {
  articles: NewsArticle[];
  language: Language;
  onSelectArticle: (article: NewsArticle) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
  onShare: (article: NewsArticle, e: React.MouseEvent) => void;
}

export const TechBlogSection: React.FC<TechBlogSectionProps> = ({
  articles,
  language,
  onSelectArticle,
  bookmarkedIds,
  onToggleBookmark,
  onShare,
}) => {
  const [selectedSubTopic, setSelectedSubTopic] = useState<'all' | 'ai' | 'coding' | 'career'>('all');

  // Filter tech articles
  const techArticles = articles.filter(
    (a) => a.category === 'tech-ai' || a.isTechBlog
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Tech Blog Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 border border-blue-900 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>{language === 'bn' ? 'মাই ব্লগ - প্রযুক্তি ও এআই কর্নার' : 'My Blog - Tech & AI Insights'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight font-bengali">
            {language === 'bn'
              ? 'মাতৃভাষায় আধুনিক প্রযুক্তি, কৃত্রিম বুদ্ধিমত্তা ও কোডিং বিপ্লব'
              : 'Empowering India with AI, Software Architecture & Regional Tech Innovations'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'bn'
              ? 'প্রোগ্রামিং টিউটোরিয়াল, জেনারেটিভ এআই, সাইবার সিকিউরিটি এবং পশ্চিমবঙ্গের আইটি ক্যারিয়ার সম্পর্কিত বিশেষজ্ঞ বিশ্লেষণ।'
              : 'Deep dives into generative AI, full-stack frameworks, data privacy, and burgeoning IT startups in Newtown & Kolkata.'}
          </p>

          {/* Quick Sub-Topic filters */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setSelectedSubTopic('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedSubTopic === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'সব টেক পোস্ট' : 'All Tech Posts'}
            </button>
            <button
              onClick={() => setSelectedSubTopic('ai')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedSubTopic === 'ai'
                  ? 'bg-cyan-500 text-slate-950 shadow'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'রোবোটিক্স ও এআই' : 'AI & Robotics'}
            </button>
            <button
              onClick={() => setSelectedSubTopic('coding')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedSubTopic === 'coding'
                  ? 'bg-cyan-500 text-slate-950 shadow'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'কোডিং ও ওয়েব' : 'Coding & Web'}
            </button>
            <button
              onClick={() => setSelectedSubTopic('career')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedSubTopic === 'career'
                  ? 'bg-cyan-500 text-slate-950 shadow'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200'
              }`}
            >
              {language === 'bn' ? 'আইটি ক্যারিয়ার' : 'Tech Careers'}
            </button>
          </div>
        </div>

        {/* Decorative Grid BG */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      </div>

      {/* Grid of Tech Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techArticles.map((post) => (
          <div
            key={post.id}
            onClick={() => onSelectArticle(post)}
            className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={post.imageUrl}
                  alt={post.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 flex items-center space-x-1">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-cyan-600 text-white uppercase tracking-wider">
                    {language === 'bn' ? 'মাই ব্লগ টেক' : 'My Blog Tech'}
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-black/60 text-white">
                    {language === 'bn' ? 'নমুনা' : 'Sample'}
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5 flex items-center space-x-1">
                  <button
                    onClick={(e) => onToggleBookmark(post.id, e)}
                    className={`p-1.5 rounded-full backdrop-blur-md transition-colors ${
                      bookmarkedIds.has(post.id)
                        ? 'bg-cyan-600 text-white'
                        : 'bg-black/50 hover:bg-black/80 text-white'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>
                  <button
                    onClick={(e) => onShare(post, e)}
                    className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center space-x-2 text-xs text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{post.tags[language][0] || 'Technology'}</span>
                  <span>•</span>
                  <span>{post.readTime[language]}</span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug font-bengali line-clamp-2">
                  {post.title[language]}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {post.excerpt[language]}
                </p>
              </div>
            </div>

            {/* Author bar */}
            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center space-x-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name[language]}
                    className="w-6 h-6 rounded-full object-cover ring-1 ring-cyan-500/30"
                  />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {post.author.name[language]}
                  </span>
                </div>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold group-hover:underline">
                  {language === 'bn' ? 'ব্লগ পড়ুন →' : 'Read Article →'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Tips & Coding Guide Widget */}
      <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400 font-bold text-sm mb-2">
          <Lightbulb className="w-5 h-5" />
          <span>{language === 'bn' ? 'মাই ব্লগ টেক টিপস (ছাত্র ও ডেভেলপারদের জন্য):' : 'My Blog Dev Tips:'}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>{language === 'bn' ? '১. বাংলা ফন্ট অপ্টিমাইজেশন' : '1. Indic Typography'}</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'bn'
                ? 'ওয়েবসাইটে বাংলা লেখার ক্ষেত্রে Hind Siliguri এবং Noto Sans Bengali ফন্ট ব্যবহারে দ্রুত লোডিং ও চমৎকার পাঠযোগ্যতা নিশ্চিত হয়।'
                : 'Prioritize Google Fonts like Hind Siliguri and Noto Sans Bengali for crisp rendering on mobile screens.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>{language === 'bn' ? '২. মোবাইল-ফ্রেন্ডলি ডিজাইন' : '2. Mobile First'}</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'bn'
                ? 'পশ্চিমবঙ্গের ৮০% পাঠক মোবাইল ডিভাইস থেকে খবর পড়েন। তাই টাচ বাটন, ড্রয়ার মেনু ও রেসপনসিভ ইমেজ রাখা অত্যন্ত জরুরি।'
                : 'Over 80% of readers in India access news via smartphones. Fast touch responsiveness is essential.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>{language === 'bn' ? '৩. সাইবার নিরাপত্তা সতর্কতা' : '3. Cyber Fraud Alert'}</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'bn'
                ? 'সরকারি চাকরির নাম করে বা বিদ্যুৎ বিল কাটার কোনো অজানা এপিকে (APK) ফাইলে কখনো ক্লিক বা ইনস্টল করবেন না।'
                : 'Never install untrusted APKs or reveal banking OTPs under false pretenses of bill payments or prize wins.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
