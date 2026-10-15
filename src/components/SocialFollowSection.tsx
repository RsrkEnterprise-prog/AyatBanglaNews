import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface SocialFollowSectionProps {
  language: Language;
  variant?: 'full' | 'compact';
}

export const OFFICIAL_SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/AytaBanglaNews',
  youtube: 'https://www.youtube.com/@AyatBanglaNews',
  instagram: 'https://www.instagram.com/AyatBanglaNews/',
};

// Custom SVG Icons for authentic brand accuracy
export const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const YouTubeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const SocialFollowSection: React.FC<SocialFollowSectionProps> = ({
  language,
  variant = 'full',
}) => {
  if (variant === 'compact') {
    return (
      <div className="flex items-center space-x-2">
        {/* Facebook */}
        <a
          href={OFFICIAL_SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold shadow-xs transition-all hover:scale-105"
          title="Follow on Facebook"
        >
          <FacebookIcon className="w-3.5 h-3.5" />
          <span>{language === 'bn' ? 'Follow করুন' : 'Follow'}</span>
        </a>

        {/* YouTube */}
        <a
          href={OFFICIAL_SOCIAL_LINKS.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FF0000] hover:bg-[#e60000] text-white text-xs font-bold shadow-xs transition-all hover:scale-105"
          title="Subscribe on YouTube"
        >
          <YouTubeIcon className="w-3.5 h-3.5" />
          <span>{language === 'bn' ? 'Subscribe করুন' : 'Subscribe'}</span>
        </a>

        {/* Instagram */}
        <a
          href={OFFICIAL_SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white text-xs font-bold shadow-xs transition-all hover:scale-105"
          title="Follow on Instagram"
        >
          <InstagramIcon className="w-3.5 h-3.5" />
          <span>{language === 'bn' ? 'Follow করুন' : 'Follow'}</span>
        </a>
      </div>
    );
  }

  return (
    <section className="my-8 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-slate-800 text-white p-6 sm:p-8 shadow-xl relative">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-red-600/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>{language === 'bn' ? 'অফিসিয়াল সোশ্যাল মিডিয়া' : 'Official Social Channels'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-bengali tracking-tight text-white">
              {language === 'bn'
                ? 'আমাদের সোশ্যাল মিডিয়ায় Follow করুন'
                : 'Follow Us on Social Media'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {language === 'bn'
                ? 'তাজা ভিডিও, ব্রেকিং নিউজ এবং লাইভ আপডেটের জন্য যুক্ত থাকুন আমাদের অফিশিয়াল পেজগুলিতে।'
                : 'Stay updated with breaking news video bulletins and live coverage across our verified channels.'}
            </p>
          </div>

          <div className="hidden lg:flex items-center space-x-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800 px-3 py-1.5 rounded-lg shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{language === 'bn' ? 'ভেরিফাইড চ্যানেল' : 'Official Verified Handles'}</span>
          </div>
        </div>

        {/* 3 Social Media Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* 1. Facebook */}
          <div className="group rounded-xl p-5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#1877F2]/60 transition-all duration-300 shadow-md flex flex-col justify-between space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-md shadow-[#1877F2]/30 group-hover:scale-105 transition-transform">
                  <FacebookIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Facebook</h4>
                  <p className="text-xs text-slate-400 font-mono">@AytaBanglaNews</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1877F2]/20 text-[#60a5fa] border border-[#1877F2]/30">
                Official
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-bengali">
              {language === 'bn'
                ? 'পশ্চিমবঙ্গ ও কলকাতার তাজা খবর, লাইভ ভিডিও এবং নিয়মিত আলোচনা পেতে পেজে লাইক ও ফলো করুন।'
                : 'Get breaking updates, video reports, and real-time news stories on our Facebook page.'}
            </p>

            <a
              href={OFFICIAL_SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#1877F2]/20 group-hover:shadow-lg"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>{language === 'bn' ? 'Facebook — Follow করুন' : 'Follow on Facebook'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* 2. YouTube */}
          <div className="group rounded-xl p-5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#FF0000]/60 transition-all duration-300 shadow-md flex flex-col justify-between space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-md shadow-[#FF0000]/30 group-hover:scale-105 transition-transform">
                  <YouTubeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">YouTube</h4>
                  <p className="text-xs text-slate-400 font-mono">@AyatBanglaNews</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FF0000]/20 text-rose-300 border border-[#FF0000]/30">
                Official
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-bengali">
              {language === 'bn'
                ? 'বিশেষ সংবাদ প্রতিবেদন, প্রযুক্তি বিশ্লেষণ ও খবর সরাসরি ভিডিও ফরম্যাটে দেখতে সাবস্ক্রাইব করুন।'
                : 'Watch exclusive video bulletins, special news analysis, and press conferences on YouTube.'}
            </p>

            <a
              href={OFFICIAL_SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-[#FF0000] hover:bg-[#e60000] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#FF0000]/20 group-hover:shadow-lg"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>{language === 'bn' ? 'YouTube — Subscribe করুন' : 'Subscribe on YouTube'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* 3. Instagram */}
          <div className="group rounded-xl p-5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#E1306C]/60 transition-all duration-300 shadow-md flex flex-col justify-between space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-md shadow-[#DD2A7B]/30 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Instagram</h4>
                  <p className="text-xs text-slate-400 font-mono">@AyatBanglaNews</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E1306C]/20 text-pink-300 border border-[#E1306C]/30">
                Official
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-bengali">
              {language === 'bn'
                ? 'তাজা রিলস, ফটো স্টোরি ও গুরুত্বপূর্ণ ইনফোগ্রাফিক খবর পেতে আমাদের ইনস্টাগ্রামে যুক্ত হন।'
                : 'Follow for photo stories, reels, breaking infographics, and bite-sized visual journalism.'}
            </p>

            <a
              href={OFFICIAL_SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white font-bold text-xs sm:text-sm transition-all shadow-md group-hover:shadow-lg"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{language === 'bn' ? 'Instagram — Follow করুন' : 'Follow on Instagram'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
