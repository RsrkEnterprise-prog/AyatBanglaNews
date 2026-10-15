import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Flame,
  ShieldCheck,
  Download,
  BookOpen,
  ArrowUp,
  Cpu,
  Heart,
  ExternalLink
} from 'lucide-react';
import { Language, CategoryId } from '../types';
import { CATEGORIES } from '../data/newsData';
import {
  FacebookIcon,
  YouTubeIcon,
  InstagramIcon,
  OFFICIAL_SOCIAL_LINKS
} from './SocialFollowSection';

interface FooterProps {
  language: Language;
  onSelectCategory: (cat: CategoryId) => void;
  setActiveTab: (tab: 'news' | 'tech-blog' | 'schemes' | 'weather' | 'contact') => void;
  onOpenGuide: () => void;
  onOpenEPaper: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onSelectCategory,
  setActiveTab,
  onOpenGuide,
  onOpenEPaper,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t-4 border-red-600 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Footer: Brand, Mission & Official Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                আ
              </div>
              <div>
                <h3 className="text-xl font-black text-white font-bengali">
                  আয়াত বাংলা নিউজ
                </h3>
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                  Ayat Bangla News & My Blog
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-bengali">
              {language === 'bn'
                ? 'পশ্চিমবঙ্গ, কলকাতা ও সারা ভারতের নির্ভীক, নিরপেক্ষ ও আধুনিক সংবাদ পোর্টাল। সত্যের সন্ধানে নির্ভীক সাংবাদিকতা এবং মাতৃভাষায় প্রযুক্তি উদ্ভাবনের অগ্রদূত।'
                : 'India\'s cutting-edge bilingual news portal and tech publication focused on West Bengal, Kolkata, youth employment, and technological empowerment.'}
            </p>

            {/* Verified Contacts Callout Box */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-red-400 font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'bn' ? 'অফিসিয়াল যোগাযোগ চ্যানেল' : 'Official Contact Channels'}</span>
              </div>
              <p className="flex items-center space-x-2 text-slate-200">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <a href="mailto:rsrkenterprise@gmail.com" className="hover:text-red-400 transition-colors font-semibold">
                  rsrkenterprise@gmail.com
                </a>
              </p>
              <p className="flex items-center space-x-2 text-slate-200">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:+919051112924" className="hover:text-red-400 transition-colors font-mono font-semibold">
                  +91 9051112924
                </a>
              </p>
              <p className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{language === 'bn' ? 'কলকাতা, পশ্চিমবঙ্গ, ভারত' : 'Kolkata, West Bengal, India'}</span>
              </p>
            </div>
          </div>

          {/* Quick Categories Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center space-x-2 font-bengali">
              <Flame className="w-4 h-4 text-red-500" />
              <span>{language === 'bn' ? 'সংবাদ বিভাগসমূহ' : 'News Categories'}</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {CATEGORIES.slice(1).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab('news');
                    onSelectCategory(cat.id);
                    scrollToTop();
                  }}
                  className="text-left py-1 text-slate-400 hover:text-red-400 transition-colors hover:translate-x-1 duration-150"
                >
                  • {cat.name[language]}
                </button>
              ))}
            </div>
          </div>

          {/* Portal Portals & Guide (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2 font-bengali">
              {language === 'bn' ? 'বিশেষ পরিষেবা ও নির্দেশিকা' : 'Special Portals & Tools'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('tech-blog');
                    scrollToTop();
                  }}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  <Cpu className="w-4 h-4" />
                  <span>{language === 'bn' ? 'মাই ব্লগ: প্রযুক্তি ও এআই কর্নার' : 'My Blog: Tech & AI Hub'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('schemes');
                    scrollToTop();
                  }}
                  className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{language === 'bn' ? 'পশ্চিমবঙ্গ সরকারি প্রকল্প গাইড' : 'WB Government Schemes Directory'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEPaper}
                  className="flex items-center space-x-2 text-slate-300 hover:text-white"
                >
                  <BookOpen className="w-4 h-4 text-red-400" />
                  <span>{language === 'bn' ? 'ডিজিটাল ই-পেপার এডিশন' : 'Digital E-Paper Edition'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGuide}
                  className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 font-bold"
                >
                  <Download className="w-4 h-4" />
                  <span>{language === 'bn' ? 'কোড ডাউনলোড ও পাবলিশ গাইড' : 'Download Code & Publish Guide'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    scrollToTop();
                  }}
                  className="flex items-center space-x-2 text-slate-300 hover:text-white"
                >
                  <Mail className="w-4 h-4 text-red-400" />
                  <span>{language === 'bn' ? 'যোগাযোগ ও সম্পাদকীয় হেল্পলাইন' : 'Contact Editorial Team'}</span>
                </button>
              </li>
            </ul>

            {/* Timezone badge */}
            <div className="pt-2 text-[11px] text-slate-500">
              {language === 'bn'
                ? 'সময় অঞ্চল: ভারতীয় প্রমাণ সময় (Asia/Kolkata • IST)'
                : 'Standard Time: Asia/Kolkata (IST • UTC+5:30)'}
            </div>
          </div>
        </div>

        {/* Dedicated Social Media Follow Section in Footer */}
        <div className="py-8 border-b border-slate-800">
          <div className="rounded-2xl p-6 bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1">
              <h4 className="text-lg font-black text-white font-bengali">
                {language === 'bn'
                  ? 'আমাদের সোশ্যাল মিডিয়ায় Follow করুন'
                  : 'Follow Us on Social Media'}
              </h4>
              <p className="text-xs text-slate-400">
                {language === 'bn'
                  ? 'সবার আগে ব্রেকিং খবর, ভিডিও বুলেটিন এবং লাইভ আপডেটের জন্য আমাদের অফিশিয়াল পেজে যুক্ত হন।'
                  : 'Connect with our official verified profiles for breaking news videos and live reports.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Facebook Button */}
              <a
                href={OFFICIAL_SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#1877F2]/20 transition-all hover:scale-105"
                title="Facebook — Follow করুন"
              >
                <FacebookIcon className="w-4 h-4" />
                <span>{language === 'bn' ? 'Facebook — Follow করুন' : 'Follow on Facebook'}</span>
              </a>

              {/* YouTube Button */}
              <a
                href={OFFICIAL_SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#FF0000] hover:bg-[#e60000] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#FF0000]/20 transition-all hover:scale-105"
                title="YouTube — Subscribe করুন"
              >
                <YouTubeIcon className="w-4 h-4" />
                <span>{language === 'bn' ? 'YouTube — Subscribe করুন' : 'Subscribe on YouTube'}</span>
              </a>

              {/* Instagram Button */}
              <a
                href={OFFICIAL_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105"
                title="Instagram — Follow করুন"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{language === 'bn' ? 'Instagram — Follow করুন' : 'Follow on Instagram'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer on Sample News */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 text-center max-w-4xl mx-auto space-y-1">
          <p className="font-semibold text-slate-300">
            {language === 'bn'
              ? 'আইনি ও স্বচ্ছতা ডিসক্লেইমার: '
              : 'Transparency & Editorial Disclaimer: '}
            <span className="font-normal">
              {language === 'bn'
                ? 'এই ওয়েবসাইটের সমস্ত সংবাদ উপাদান নমুনা (Sample News) হিসেবে প্রদর্শনের উদ্দেশ্যে প্রস্তুত করা হয়েছে। কোনো বাস্তব সংবাদসংস্থার লাইভ ফিড বা অনুমোদন ছাড়া কোনো তথ্যকে চূড়ান্ত তথ্য হিসেবে দাবি করা হয় না। যোগাযোগের ফরমটি বৈধতা প্রদর্শন করে; রিয়েল মেইলিংয়ের জন্য ব্যাকএন্ড ইমেইল পরিষেবা প্রয়োজন।'
                : 'All news articles on this website are structured demonstration samples. No live news feed has been fabricated. The contact form validates inputs client-side; production deployment requires integration with a dedicated mail service.'}
            </span>
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} <strong>Ayat Bangla News & My Blog</strong>. {language === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All Rights Reserved.'}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white transition-colors border border-slate-800"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'উপরে যান' : 'Back to Top'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
