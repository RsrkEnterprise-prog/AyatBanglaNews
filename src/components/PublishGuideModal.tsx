import React, { useState } from 'react';
import {
  X,
  Download,
  Globe,
  Terminal,
  Check,
  Copy,
  FolderGit2,
  CloudUpload,
  MailCheck,
  BookOpen,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';

interface PublishGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PublishGuideModal: React.FC<PublishGuideModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, stepId: number) => {
    navigator.clipboard?.writeText(text);
    setCopiedStep(stepId);
    setTimeout(() => setCopiedStep(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-red-950 text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-bengali">
                {language === 'bn'
                  ? 'কোড ডাউনলোড ও অনলাইনে পাবলিশ করার সহজ উপায়'
                  : 'How to Download Code & Publish Online'}
              </h3>
              <p className="text-xs text-slate-300">
                {language === 'bn'
                  ? 'ধাপে ধাপে সহজ বাংলায় নির্দেশিকা (Vercel, Netlify, GitHub Pages)'
                  : 'Step-by-step production deployment & code export guide'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-red-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 flex-1 text-slate-800 dark:text-slate-200">
          {/* Step 1: Code Download */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 font-bold text-base font-bengali">
              <span className="w-7 h-7 rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center text-sm font-black border border-red-300 dark:border-red-800">
                ১
              </span>
              <span>{language === 'bn' ? 'ধাপ ১: সম্পূর্ণ কোড ডাউনলোড করার নিয়ম' : 'Step 1: Download Project Files'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-bengali pl-9">
              {language === 'bn'
                ? 'আপনার Google AI Studio স্ক্রিনের ডানদিকের উপরের কোণে তিনটি ডট (⋮) অথবা "Export Code / Download" অপশন দেখতে পাবেন। সেখান থেকে সম্পূর্ণ প্রজেক্টের ZIP ফাইল ডাউনলোড করুন অথবা GitHub-এ সরাসরি পুশ করতে পারেন।'
                : 'In Google AI Studio, access the top-right export panel to download your complete source code as a ZIP archive or push directly to your linked GitHub repository.'}
            </p>
          </div>

          {/* Step 2: Running locally on PC */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-blue-900 dark:text-blue-400 font-bold text-base font-bengali">
              <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center text-sm font-black border border-blue-300 dark:border-blue-800">
                ২
              </span>
              <span>{language === 'bn' ? 'ধাপ ২: আপনার কম্পিউটারে চালানো (Local Run)' : 'Step 2: Run Locally on Computer'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-bengali pl-9">
              {language === 'bn'
                ? 'ডাউনলোড করা ZIP ফাইলটি Unzip করে VS Code বা টার্মিনালে খুলুন। এরপর কম্পিউটারে Node.js (v18 বা তদূর্ধ্ব) ইনস্টল থাকলে নিচের কমান্ড দুটি চালান:'
                : 'Extract the downloaded ZIP and open the directory in VS Code or your terminal. Ensure Node.js (v18+) is installed, then run:'}
            </p>

            <div className="ml-9 rounded-xl bg-slate-900 text-slate-100 p-3.5 font-mono text-xs relative border border-slate-800">
              <pre className="overflow-x-auto text-emerald-400">
                <code>{`# Dependencies ইনস্টল করুন
npm install

# ডেভেলপমেন্ট সার্ভার চালু করুন (লোকালহোস্ট:3000)
npm run dev`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard('npm install && npm run dev', 2)}
                className="absolute top-3 right-3 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy commands"
              >
                {copiedStep === 2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Step 3: Online Free Hosting (Vercel / Netlify) */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-base font-bengali">
              <span className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-sm font-black border border-emerald-300 dark:border-emerald-800">
                ৩
              </span>
              <span>{language === 'bn' ? 'ধাপ ৩: সম্পূর্ণ বিনামূল্যে লাইভ হোস্টিং (Vercel বা Netlify)' : 'Step 3: Free Cloud Hosting (Vercel / Netlify)'}</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-bengali pl-9 space-y-2">
              <p>
                {language === 'bn'
                  ? 'সবচেয়ে সহজ উপায় হলো Vercel বা Netlify ব্যবহার করা (সম্পূর্ণ বিনামূল্যে এবং আজীবন চালু থাকবে):'
                  : 'Deploying to Vercel or Netlify offers instant zero-cost global hosting with automatic SSL and CDN:'}
              </p>
              <ol className="list-decimal list-inside space-y-1.5 pl-2 text-slate-700 dark:text-slate-300">
                <li>
                  {language === 'bn'
                    ? 'কোডটি আপনার GitHub অ্যাকাউন্টে একটি নতুন রিপোজিটরিতে (Repository) আপলোড করুন।'
                    : 'Push the code to your GitHub account repository.'}
                </li>
                <li>
                  {language === 'bn'
                    ? 'Vercel.com-এ যান এবং আপনার GitHub দিয়ে লগইন করুন।'
                    : 'Navigate to Vercel.com and sign up with GitHub.'}
                </li>
                <li>
                  {language === 'bn'
                    ? '"Add New Project" বাটনে ক্লিক করে আপনার রিপোজিটরিটি সিলেক্ট করে "Deploy" বাটনে চাপ দিন।'
                    : 'Select "Add New Project", choose this repo, and hit "Deploy".'}
                </li>
                <li>
                  {language === 'bn'
                    ? '১ মিনিটের মধ্যে আপনার ওয়েবসাইটটি ইন্টারনেটে লাইভ হয়ে যাবে এবং একটি ফ্রি ডোমেইন (যেমন ayatbanglanews.vercel.app) পাবেন।'
                    : 'Within 60 seconds, your site is live with a free custom URL (e.g. yourname.vercel.app).'}
                </li>
              </ol>
            </div>
          </div>

          {/* Step 4: Connecting real email service for contact form */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 font-bold text-base font-bengali">
              <span className="w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center text-sm font-black border border-amber-300 dark:border-amber-800">
                ৪
              </span>
              <span>{language === 'bn' ? 'ধাপ ৪: যোগাযোগের ফর্মে আসল ইমেইল যুক্ত করার পদ্ধতি' : 'Step 4: Connecting Real Email Service'}</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-bengali pl-9 space-y-2">
              <p>
                {language === 'bn'
                  ? 'যাতে ভিজিটররা ফর্ম পূরণ করলে সরাসরি rsrkenterprise@gmail.com-এ মেসেজ চলে আসে, তার জন্য আপনি EmailJS (emailjs.com) বা Resend (resend.com) ফ্রি প্ল্যান ব্যবহার করতে পারেন:'
                  : 'To enable automatic email delivery to rsrkenterprise@gmail.com upon form submission:'}
              </p>
              <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 rounded-xl text-xs space-y-1 text-amber-900 dark:text-amber-200">
                <p className="font-semibold">
                  {language === 'bn'
                    ? 'EmailJS পদ্ধতি (খুবই সহজ, কোনো ব্যাকএন্ড কোড ছাড়াই কাজ করে):'
                    : 'EmailJS integration (Easiest, 100% frontend solution):'}
                </p>
                <p>
                  {language === 'bn'
                    ? '১. emailjs.com-এ ফ্রি অ্যাকাউন্ট তৈরি করে জিমেইল কানেক্ট করুন।'
                    : '1. Create a free account on emailjs.com and connect your Gmail.'}
                </p>
                <p>
                  {language === 'bn'
                    ? '২. তাদের লাইব্রেরি `npm install @emailjs/browser` ইনস্টল করে Service ID ও Template ID কোডে বসিয়ে দিন।'
                    : '2. Install `@emailjs/browser` and pass your Service ID & Template ID in ContactSection.tsx.'}
                </p>
              </div>
            </div>
          </div>

          {/* Step 5: Connecting RSS / Live News API */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400 font-bold text-base font-bengali">
              <span className="w-7 h-7 rounded-full bg-rose-100 dark:bg-rose-950/50 flex items-center justify-center text-sm font-black border border-rose-300 dark:border-rose-800">
                ৫
              </span>
              <span>{language === 'bn' ? 'ধাপ ৫: আসল লাইভ নিউজ ফিড ও এপিআই যুক্ত করা' : 'Step 5: Connecting Live News Feeds & CMS'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-bengali pl-9">
              {language === 'bn'
                ? 'বর্তমানে ওয়েবসাইটে থাকা খবরগুলি নমুনা (Sample News)। ভবিষ্যতে আপনি কোনো হেডলেস সিএমএস (যেমন Strapi, WordPress REST API, বা Google Sheets) ব্যবহার করে অথবা অনুমোদিত কোনো বাংলা সংবাদ আরএসএস (RSS Feed) যুক্ত করে সহজেই অটোমেটিক আপডেট চালু করতে পারবেন।'
                : 'Current articles are structured sample demonstration items. You can connect a Headless CMS (Strapi, Sanity, or WordPress REST API) or authorized Bengali RSS feeds to fetch real-time updates automatically.'}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {language === 'bn' ? 'সহায়তা প্রয়োজন? rsrkenterprise@gmail.com' : 'Support: rsrkenterprise@gmail.com'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition-colors"
          >
            {language === 'bn' ? 'বুঝেছি, বন্ধ করুন' : 'Got it, Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
