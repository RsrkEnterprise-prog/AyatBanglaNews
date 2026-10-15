import React, { useState } from 'react';
import {
  FileBadge,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Users,
  Search,
  Sparkles,
  HelpCircle,
  IndianRupee,
  ChevronRight
} from 'lucide-react';
import { GOVT_SCHEMES_DATA } from '../data/newsData';
import { Language, GovtScheme } from '../types';

interface GovtSchemesSectionProps {
  language: Language;
}

export const GovtSchemesSection: React.FC<GovtSchemesSectionProps> = ({ language }) => {
  const [selectedScheme, setSelectedScheme] = useState<GovtScheme>(GOVT_SCHEMES_DATA[0]);
  const [ageInput, setAgeInput] = useState<number>(28);
  const [genderInput, setGenderInput] = useState<'female' | 'male' | 'all'>('female');
  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'directory' | 'checker'>('directory');

  // Eligibility evaluation logic
  const checkEligibility = (scheme: GovtScheme): boolean => {
    if (scheme.id === 'scheme-lakshmir-bhandar') {
      return genderInput === 'female' && ageInput >= 25 && ageInput <= 60;
    }
    if (scheme.id === 'scheme-kanyashree') {
      return genderInput === 'female' && isStudent && ageInput >= 13 && ageInput <= 19;
    }
    if (scheme.id === 'scheme-swasthya-sathi') {
      return true; // universal
    }
    if (scheme.id === 'scheme-student-credit-card') {
      return (isStudent || ageInput <= 40);
    }
    return true;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-900 via-yellow-900 to-amber-950 text-white p-6 sm:p-8 border border-amber-800/80 shadow-lg">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            <FileBadge className="w-4 h-4 text-amber-400" />
            <span>{language === 'bn' ? 'পশ্চিমবঙ্গ সরকারি প্রকল্প গাইড' : 'West Bengal Govt Welfare Hub'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight font-bengali">
            {language === 'bn'
              ? 'লক্ষ্মীর ভাণ্ডার, কন্যাশ্রী ও স্বাস্থ্যসাথী: যোগ্যতা ও আবেদন নির্দেশিকা'
              : 'Direct Benefit Schemes: Guidelines, Eligibility & Official WB Portals'}
          </h2>

          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
            {language === 'bn'
              ? 'রাজ্যের সাধারণ মানুষের সুবিধার্থে সমস্ত প্রধান সরকারি প্রকল্পের নিয়মাবলী, প্রয়োজনীয় নথির তালিকা এবং অনলাইন স্ট্যাটাস যাচাইয়ের সহজ উপায়।'
              : 'Transparent, structured information on direct financial support, educational stipends, and cashless healthcare across West Bengal.'}
          </p>

          <div className="flex items-center space-x-3 pt-2">
            <button
              onClick={() => setActiveTab('directory')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors ${
                activeTab === 'directory'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'bg-amber-950/80 hover:bg-amber-900 text-amber-200'
              }`}
            >
              {language === 'bn' ? 'প্রকল্প তালিকা' : 'Schemes Directory'}
            </button>
            <button
              onClick={() => setActiveTab('checker')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors flex items-center space-x-1.5 ${
                activeTab === 'checker'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'bg-amber-950/80 hover:bg-amber-900 text-amber-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'যোগ্যতা ক্যালকুলেটর' : 'Eligibility Checker'}</span>
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'checker' ? (
        /* Interactive Eligibility Checker */
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-bengali flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>{language === 'bn' ? 'আপনার যোগ্যতা যাচাই করুন' : 'Check Which Schemes You Qualify For'}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {language === 'bn'
                ? 'আপনার বয়স ও তথ্য নির্বাচন করুন, সিস্টেম স্বয়ংক্রিয়ভাবে প্রযোজ্য প্রকল্প প্রদর্শন করবে।'
                : 'Enter your basic age and profile to view eligible welfare programs.'}
            </p>
          </div>

          {/* Form controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                {language === 'bn' ? 'বয়স (বছর)' : 'Age (Years)'}
              </label>
              <input
                type="number"
                min="1"
                max="100"
                value={ageInput}
                onChange={(e) => setAgeInput(Number(e.target.value))}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm text-slate-900 dark:text-white font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                {language === 'bn' ? 'লিঙ্গ' : 'Gender'}
              </label>
              <select
                value={genderInput}
                onChange={(e) => setGenderInput(e.target.value as any)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm text-slate-900 dark:text-white font-semibold"
              >
                <option value="female">{language === 'bn' ? 'মহিলা (Female)' : 'Female'}</option>
                <option value="male">{language === 'bn' ? 'পুরুষ (Male)' : 'Male'}</option>
                <option value="all">{language === 'bn' ? 'অন্যান্য / সর্বজনীন' : 'Other'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                {language === 'bn' ? 'শিক্ষার্থী কি না?' : 'Student Status'}
              </label>
              <button
                type="button"
                onClick={() => setIsStudent(!isStudent)}
                className={`w-full p-2.5 rounded-lg text-sm font-bold border transition-colors ${
                  isStudent
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                }`}
              >
                {isStudent
                  ? language === 'bn' ? 'হ্যাঁ, পাঠরত শিক্ষার্থী' : 'Yes, Enrolled Student'
                  : language === 'bn' ? 'না, শিক্ষার্থী নই' : 'Not a Student'}
              </button>
            </div>
          </div>

          {/* Results Grid */}
          <div className="space-y-3 pt-4">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm font-bengali">
              {language === 'bn' ? 'আপনার প্রোফাইল অনুযায়ী ফলাফল:' : 'Results for your profile:'}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {GOVT_SCHEMES_DATA.map((scheme) => {
                const eligible = checkEligibility(scheme);
                return (
                  <div
                    key={scheme.id}
                    className={`p-4 rounded-xl border transition-all ${
                      eligible
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                        : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        {eligible ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                        <h5 className="font-bold text-slate-900 dark:text-white font-bengali">
                          {scheme.name[language]}
                        </h5>
                      </div>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                          eligible
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {eligible
                          ? language === 'bn' ? 'যোগ্য' : 'Eligible'
                          : language === 'bn' ? 'শর্ত প্রযোজ্য নয়' : 'Not Eligible'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                      {scheme.tagline[language]}
                    </p>

                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs">
                      <span className="font-semibold text-amber-700 dark:text-amber-400">
                        {scheme.targetGroup[language]}
                      </span>
                      <button
                        onClick={() => {
                          setSelectedScheme(scheme);
                          setActiveTab('directory');
                        }}
                        className="text-blue-900 dark:text-blue-400 font-bold hover:underline"
                      >
                        {language === 'bn' ? 'নথিপত্র দেখুন →' : 'View Docs →'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Detailed Directory Layout (Left List, Right Details) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Scheme selector */}
          <div className="lg:col-span-5 space-y-3">
            {GOVT_SCHEMES_DATA.map((scheme) => (
              <div
                key={scheme.id}
                onClick={() => setSelectedScheme(scheme)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedScheme.id === scheme.id
                    ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-500 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-amber-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white font-bengali text-base">
                    {scheme.name[language]}
                  </h4>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      selectedScheme.id === scheme.id ? 'text-amber-600 rotate-90 sm:rotate-0' : 'text-slate-400'
                    }`}
                  />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                  {scheme.tagline[language]}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Active Scheme Complete Details */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                <FileBadge className="w-4 h-4" />
                <span>{language === 'bn' ? 'প্রকল্পের পূর্ণ বিবরণ' : 'Detailed Scheme Overview'}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white font-bengali">
                {selectedScheme.name[language]}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 italic">
                {selectedScheme.tagline[language]}
              </p>
            </div>

            {/* Financial benefits box */}
            <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center space-x-1.5 mb-1">
                <IndianRupee className="w-4 h-4" />
                <span>{language === 'bn' ? 'আর্থিক সুবিধা ও বরাদ্দ:' : 'Financial Benefits:'}</span>
              </h4>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-bengali">
                {selectedScheme.benefits[language]}
              </p>
            </div>

            {/* Eligibility criteria */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center space-x-1.5 font-bengali">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{language === 'bn' ? 'আবেদনের যোগ্যতা:' : 'Eligibility Criteria:'}</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {selectedScheme.eligibility[language].map((crit, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required documents checklist */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center space-x-1.5 font-bengali">
                <Users className="w-4 h-4 text-blue-500" />
                <span>{language === 'bn' ? 'প্রয়োজনীয় নথিপত্র (Checklist):' : 'Required Documents:'}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedScheme.documents[language].map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center space-x-2 border border-slate-200 dark:border-slate-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Helpline / Portal link */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-500">
                {language === 'bn'
                  ? 'নিকটবর্তী দুয়ারে সরকার ক্যাম্প বা বাংলা সহায়তা কেন্দ্রেও আবেদন জমা নেওয়া হয়।'
                  : 'Applications also accepted at Duare Sarkar camps and BSK centers.'}
              </span>
              <a
                href={selectedScheme.officialPortal}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition-colors"
              >
                <span>{language === 'bn' ? 'অফিসিয়াল পোর্টালে যান' : 'Official Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
