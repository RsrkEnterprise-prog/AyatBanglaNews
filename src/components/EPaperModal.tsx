import React from 'react';
import { X, BookOpen, Download, Calendar, Printer, FileText } from 'lucide-react';
import { Language } from '../types';
import { getKolkataDateTime } from '../utils/dateUtils';

interface EPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const EPaperModal: React.FC<EPaperModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  const dateTime = getKolkataDateTime(language);

  const handlePrintEPaper = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div
        className="relative w-full max-w-4xl bg-stone-100 dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-300 dark:border-stone-800 overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-stone-900 text-stone-100 px-5 py-3.5 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-red-500" />
            <h3 className="font-bold text-sm sm:text-base font-bengali">
              {language === 'bn' ? 'আয়াত বাংলা নিউজ • ডিজিটাল ই-পেপার সংস্করণ' : 'Ayat Bangla News • Digital E-Paper Replica'}
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrintEPaper}
              className="px-3 py-1 text-xs font-bold rounded bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors flex items-center space-x-1"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'প্রিন্ট' : 'Print'}</span>
            </button>
            <button
              onClick={() => alert(language === 'bn' ? 'ডেমো পিডিএফ ডাউনলোড শুরু হচ্ছে...' : 'Simulated PDF download started...')}
              className="px-3 py-1 text-xs font-bold rounded bg-red-600 hover:bg-red-700 text-white transition-colors flex items-center space-x-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'পিডিএফ (PDF)' : 'Download PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded bg-stone-800 hover:bg-red-600 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Canvas Replica */}
        <div className="overflow-y-auto p-4 sm:p-8 flex-1 bg-amber-50/40 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-serif">
          {/* Newspaper Masthead */}
          <div className="text-center border-b-4 border-double border-stone-800 dark:border-stone-400 pb-4 mb-6">
            <div className="text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 mb-1 font-sans">
              ★ {language === 'bn' ? 'পশ্চিমবঙ্গ ও কলকাতার সর্ববৃহৎ দ্বিভাষিক সংবাদ প্রকাশনা' : 'Bilingual Daily Broadsheet Edition'} ★
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-red-700 dark:text-red-500 tracking-tight font-bengali">
              আয়াত বাংলা নিউজ
            </h1>
            <div className="text-xs sm:text-sm font-sans font-bold text-blue-900 dark:text-blue-400 mt-1 uppercase tracking-wider">
              AYAT BANGLA NEWS & MY BLOG • KOLKATA EDITION
            </div>
            <div className="flex flex-wrap items-center justify-between text-xs font-sans text-stone-600 dark:text-stone-400 mt-3 pt-2 border-t border-stone-300 dark:border-stone-800 px-2">
              <span>{dateTime.dateString}</span>
              <span>{dateTime.bengaliCalendarDate}</span>
              <span>{language === 'bn' ? 'মূল্য: ২.০০ টাকা | ৮ পৃষ্ঠা' : 'Price: ₹2.00 | 8 Pages'}</span>
            </div>
          </div>

          {/* Newspaper 3-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-sm">
            {/* Col 1 */}
            <div className="md:col-span-4 space-y-4 border-r-0 md:border-r border-stone-300 dark:border-stone-800 pr-0 md:pr-4">
              <h3 className="text-xl font-bold font-bengali text-red-700 dark:text-red-500 leading-tight">
                {language === 'bn'
                  ? 'গঙ্গার তলদেশ দিয়ে মেট্রো পরিষেবায় বিপুল সাফল্য'
                  : 'Ganga Underwater Metro Achieves 100K Daily Passenger Milestone'}
              </h3>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                {language === 'bn'
                  ? 'হাওড়া ময়দান থেকে ধর্মতলা পর্যন্ত নদীগর্ভস্থ ট্রেনের ব্যবধান ৫ মিনিটে নামিয়ে আনার প্রস্তুতি। অফিস সময়ে পথযাত্রায় ব্যাপক সময় সাশ্রয়।'
                  : 'Commuters between Howrah and Kolkata save critical transit time under river Hooghly as frequency improves to every 5 minutes.'}
              </p>
              <div className="p-3 bg-stone-200/50 dark:bg-stone-900 rounded border border-stone-300 dark:border-stone-800 text-xs">
                <span className="font-bold text-red-600">{language === 'bn' ? 'সম্পাদকের কলম:' : 'Editorial Column:'} </span>
                {language === 'bn'
                  ? 'পূর্ব ভারতের প্রযুক্তি ও যোগাযোগ বিপ্লবের অগ্রভাগে পশ্চিমবঙ্গ।'
                  : 'Modern urban transit as a catalyst for sustainable economic recovery in Bengal.'}
              </div>
            </div>

            {/* Col 2 */}
            <div className="md:col-span-5 space-y-4 border-r-0 md:border-r border-stone-300 dark:border-stone-800 pr-0 md:pr-4">
              <h3 className="text-xl font-bold font-bengali text-blue-900 dark:text-blue-400 leading-tight">
                {language === 'bn'
                  ? 'নিউটাউন সিলিকন ভ্যালিতে গ্লোবাল এআই ও ক্লাউড সেন্টার'
                  : 'Newtown Silicon Valley Attracts Premier Hyper-Scale Data Hubs'}
              </h3>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                {language === 'bn'
                  ? 'আন্তর্জাতিক সংস্থাগুলির ক্যাম্পাসে ১০ হাজার প্রকৌশলী ও গবেষকের কর্মসংস্থান। বাংলা ভাষার আঞ্চলিক এলএলএম মডেলে ব্যাপক অগ্রগতি।'
                  : 'Ten thousand technical job vacancies projected across machine learning and regional language computational labs.'}
              </p>
              <div className="aspect-[16/9] bg-stone-200 rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                  alt="E-paper illustration"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </div>

            {/* Col 3 */}
            <div className="md:col-span-3 space-y-4">
              <div className="p-3 bg-stone-200/60 dark:bg-stone-900 rounded border border-stone-300 dark:border-stone-800">
                <h4 className="font-bold font-sans text-xs uppercase tracking-wider text-stone-800 dark:text-stone-200 mb-1">
                  {language === 'bn' ? 'আবহাওয়া সংক্ষেপ' : 'Weather Snip'}
                </h4>
                <p className="text-xs">
                  {language === 'bn' ? 'কলকাতা ৩১°C | আলিপুর পূর্বাভাস অনুযায়ী শুষ্ক ও মনোরম' : 'Kolkata 31°C | Pleasant & Sunny'}
                </p>
              </div>

              <div className="p-3 bg-stone-200/60 dark:bg-stone-900 rounded border border-stone-300 dark:border-stone-800">
                <h4 className="font-bold font-sans text-xs uppercase tracking-wider text-stone-800 dark:text-stone-200 mb-1">
                  {language === 'bn' ? 'সরকারি প্রকল্প হেল্প' : 'Govt Schemes'}
                </h4>
                <p className="text-xs">
                  {language === 'bn' ? 'লক্ষ্মীর ভাণ্ডার ও স্বাস্থ্যসাথী স্ট্যাটাস যাচাই এখন অনলাইনে' : 'Lakshmir Bhandar status active online'}
                </p>
              </div>

              <div className="text-[11px] text-stone-500 font-sans italic text-center pt-2">
                {language === 'bn' ? '★ নমুনা ডেমো ই-পেপার সংস্করণ ★' : '★ Sample Demonstration E-Paper ★'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
