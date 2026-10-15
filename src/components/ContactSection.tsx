import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle2,
  Clock,
  ShieldAlert,
  MessageCircle,
  Info,
  Server
} from 'lucide-react';
import { Language } from '../types';

interface ContactSectionProps {
  language: Language;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    category: 'editorial',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName =
        language === 'bn'
          ? 'অনুগ্রহ করে কমপক্ষে ৩ অক্ষরের সঠিক নাম লিখুন'
          : 'Please enter a valid full name (minimum 3 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email =
        language === 'bn'
          ? 'একটি সঠিক ইমেইল ঠিকানা দিন (যেমন: name@example.com)'
          : 'Please enter a valid email address';
    }

    const phoneRegex = /^[0-9+ -]{10,14}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone =
        language === 'bn'
          ? 'সঠিক ১০ সংখ্যার ভারতীয় মোবাইল নম্বর দিন'
          : 'Please enter a valid 10-digit phone number';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 4) {
      newErrors.subject =
        language === 'bn'
          ? 'বিষয়বস্তুর বিবরণ দিন (কমপক্ষে ৪ অক্ষর)'
          : 'Subject must be at least 4 characters long';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message =
        language === 'bn'
          ? 'বার্তার মূল বক্তব্য বিশদে লিখুন (কমপক্ষে ১৫ অক্ষর)'
          : 'Message must be at least 15 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate front-end form validation submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  const mailtoLink = `mailto:rsrkenterprise@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'Ayat Bangla News Contact'
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nPhone: ${formData.phone}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Contact Header */}
      <div className="rounded-2xl bg-gradient-to-r from-red-950 via-slate-900 to-blue-950 text-white p-6 sm:p-8 border border-red-900 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-600/30 text-rose-300 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-rose-400" />
            <span>{language === 'bn' ? 'যোগাযোগ ও সম্পাদকীয় কার্যালয়' : 'Editorial Office & Helpdesk'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-bengali">
            {language === 'bn'
              ? 'আমাদের সাথে সরাসরি যোগাযোগ করুন'
              : 'Get in Touch with Ayat Bangla News & My Blog'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {language === 'bn'
              ? 'সংবাদ বা প্রেস রিলিজ পাঠানো, বিজ্ঞাপন সংক্রান্ত অনুসন্ধান বা যে কোনো মতামতের জন্য আমাদের বার্তা পাঠান।'
              : 'For editorial tips, press releases, corporate advertisements, or technical inquiries.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct verified contact channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white font-bengali border-b border-slate-100 dark:border-slate-800 pb-3">
              {language === 'bn' ? 'অফিসিয়াল যোগাযোগ বিবরণী' : 'Official Contact Directory'}
            </h3>

            {/* Email item */}
            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center shrink-0 border border-red-200 dark:border-red-900">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {language === 'bn' ? 'ইমেইল ঠিকানা' : 'Official Email'}
                </div>
                <a
                  href="mailto:rsrkenterprise@gmail.com"
                  className="font-bold text-slate-900 dark:text-white hover:text-red-600 text-sm sm:text-base break-all transition-colors"
                >
                  rsrkenterprise@gmail.com
                </a>
                <p className="text-xs text-slate-500 mt-0.5">
                  {language === 'bn' ? '২৪ ঘণ্টার মধ্যে প্রত্যুত্তর দেওয়া হয়' : 'Average response within 24 hours'}
                </p>
              </div>
            </div>

            {/* Phone item */}
            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-900">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {language === 'bn' ? 'টেলিফোন ও হোয়াটসঅ্যাপ' : 'Official Telephone & WhatsApp'}
                </div>
                <a
                  href="tel:+919051112924"
                  className="font-bold text-slate-900 dark:text-white hover:text-red-600 text-base font-mono transition-colors block"
                >
                  +91 9051112924
                </a>
                <a
                  href="https://wa.me/919051112924"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'হোয়াটসঅ্যাপে চ্যাট করুন' : 'Chat on WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {language === 'bn' ? 'প্রধান দফতর' : 'Headquarters'}
                </div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">
                  {language === 'bn' ? 'কলকাতা, পশ্চিমবঙ্গ, ভারত' : 'Kolkata, West Bengal, India'}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {language === 'bn' ? 'পিপলস প্লাজা, সেন্ট্রাল এভিনিউ করিডোর' : 'Central Avenue IT & Media Corridor'}
                </p>
              </div>
            </div>

            {/* Operating hours */}
            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {language === 'bn' ? 'নিউজ ডেস্ক সময়সূচি' : 'Desk Hours'}
                </div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">
                  {language === 'bn' ? 'সকাল ৮:০০ - রাত ১০:০০ (প্রতিদিন)' : '8:00 AM - 10:00 PM IST (Daily)'}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {language === 'bn' ? 'ব্রেকিং নিউজ ডেস্ক ২৪x৭ সক্রিয়' : 'Breaking News Desk Active 24x7'}
                </p>
              </div>
            </div>
          </div>

          {/* Direct Email Client Shortcut Card */}
          <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center space-x-2">
              <Mail className="w-4 h-4 text-red-600" />
              <span>{language === 'bn' ? 'সরাসরি ইমেইল পাঠাতে চান?' : 'Prefer your own Email Client?'}</span>
            </h4>
            <p>
              {language === 'bn'
                ? 'ফর্ম পূরণ না করে সরাসরি আপনার জিমেইল বা আউটলুক অ্যাপ থেকে ইমেইল পাঠাতে নিচের বাটনে চাপ দিন:'
                : 'Click below to launch your default email client pre-addressed to rsrkenterprise@gmail.com:'}
            </p>
            <a
              href="mailto:rsrkenterprise@gmail.com?subject=Inquiry%20from%20Ayat%20Bangla%20News%20Portal"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'জিমেইলে বার্তা পাঠান' : 'Open in Gmail / Mail App'}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form with Validation & Clear Backend Explanation (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-bengali">
              {language === 'bn' ? 'অনলাইন বার্তা প্রেরণ ফরম' : 'Online Contact Form'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {language === 'bn'
                ? 'আপনার তথ্যাদি নির্ভুলভাবে পূরণ করুন।'
                : 'Please complete the validated fields below.'}
            </p>
          </div>

          {/* CRITICAL TRANSPARENCY NOTICE: Explicitly explains that a real email service/backend is needed */}
          <div className="bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-400 dark:border-amber-700 rounded-xl p-4 text-xs text-amber-900 dark:text-amber-200 space-y-2">
            <div className="flex items-center space-x-2 font-bold text-amber-800 dark:text-amber-300">
              <Server className="w-4 h-4 shrink-0" />
              <span>
                {language === 'bn'
                  ? 'প্রযুক্তিগত নোটিশ (Email Service Requirement):'
                  : 'Technical Architecture Notice (Email Service Requirement):'}
              </span>
            </div>
            <p className="leading-relaxed">
              {language === 'bn'
                ? 'এই ফরমটিতে ক্লায়েন্ট-সাইড ফিল্ড ভ্যালিডেশন সক্রিয় রয়েছে। তবে একটি স্ট্যাটিক ফ্রন্ট-এন্ড ওয়েবসাইট নিজে থেকে সরাসরি rsrkenterprise@gmail.com-এ অটোমেটেড ইমেইল পাঠাতে পারে না। বাস্তব ওয়েবসাইটে স্বয়ংক্রিয়ভাবে ইমেইল ডেলিভারি করার জন্য একটি রিয়েল ব্যাকএন্ড সার্ভার (যেমন Express/Node.js) অথবা ইমেইল এপিআই সার্ভিস (যেমন EmailJS, Resend, বা SendGrid) সংযোগ করতে হবে। সরাসরি পাঠাতে আপনি উপরের "জিমেইলে বার্তা পাঠান" বাটনটি ব্যবহার করতে পারেন।'
                : 'This form executes full client-side validation. Note that a static front-end cannot transmit real automated emails to rsrkenterprise@gmail.com without an integrated email service (such as EmailJS, Resend, or a Node.js backend with Nodemailer). In production, configure an email provider, or use the direct mailto button to send from your email app.'}
            </p>
          </div>

          {submitSuccess ? (
            <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-center space-y-3 animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-lg text-emerald-900 dark:text-emerald-200 font-bengali">
                {language === 'bn' ? 'বার্তাটি সফলভাবে যাচাইকৃত হয়েছে!' : 'Message Validated Successfully!'}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                {language === 'bn'
                  ? 'আপনার দেওয়া তথ্য সঠিক ফরম্যাটে গৃহীত হয়েছে। আপনি যদি সরাসরি আপনার ইমেইল ক্লায়েন্ট থেকে এই বার্তাটি rsrkenterprise@gmail.com-এ পাঠাতে চান, নিচের বাটনে ক্লিক করুন।'
                  : 'All inputs passed validation. To send this draft directly to rsrkenterprise@gmail.com from your local email client, click below.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={mailtoLink}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors inline-flex items-center space-x-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'ইমেইল অ্যাপ খুলে পাঠান' : 'Send via Email App'}</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      subject: '',
                      category: 'editorial',
                      message: '',
                    });
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
                >
                  {language === 'bn' ? 'নতুন বার্তা লিখুন' : 'Reset Form'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    {language === 'bn' ? 'আপনার পূর্ণ নাম *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={language === 'bn' ? 'যেমন: রাহুল ঘোষ' : 'e.g. Rahul Ghosh'}
                    className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 dark:text-white transition-colors focus:outline-none ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-slate-300 dark:border-slate-700 focus:border-red-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    {language === 'bn' ? 'ইমেইল ঠিকানা *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 dark:text-white transition-colors focus:outline-none ${
                      errors.email
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-slate-300 dark:border-slate-700 focus:border-red-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    {language === 'bn' ? 'মোবাইল নম্বর *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 dark:text-white transition-colors focus:outline-none ${
                      errors.phone
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-slate-300 dark:border-slate-700 focus:border-red-500'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Category select */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    {language === 'bn' ? 'বিভাগ / অনুসন্ধানের ধরন' : 'Category / Type'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="editorial">{language === 'bn' ? 'সম্পাদকীয় ও সংবাদ প্রদান' : 'News Tip / Editorial'}</option>
                    <option value="advertisement">{language === 'bn' ? 'বিজ্ঞাপন ও প্রমোশন' : 'Advertising & Sponsorship'}</option>
                    <option value="myblog">{language === 'bn' ? 'মাই ব্লগ টেক কলাম' : 'My Blog Tech Inquiry'}</option>
                    <option value="schemes">{language === 'bn' ? 'সরকারি প্রকল্প সম্পর্কিত প্রশ্ন' : 'Govt Scheme Query'}</option>
                    <option value="general">{language === 'bn' ? 'সাধারণ মতামত' : 'General Feedback'}</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  {language === 'bn' ? 'বার্তার বিষয় *' : 'Subject *'}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={language === 'bn' ? 'যেমন: কলকাতা আইটি সম্মেলন কভারেজ' : 'Subject of inquiry'}
                  className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 dark:text-white transition-colors focus:outline-none ${
                    errors.subject
                      ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-700 focus:border-red-500'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  {language === 'bn' ? 'আপনার বার্তা বিশদে লিখুন *' : 'Detailed Message *'}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    language === 'bn'
                      ? 'আপনার সংবাদ, পরামর্শ বা অনুসন্ধানের সম্পূর্ণ তথ্য এখানে লিখুন...'
                      : 'Provide full details of your message...'
                  }
                  className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 dark:text-white transition-colors focus:outline-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-700 focus:border-red-500'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors flex items-center justify-center space-x-2 shadow-md shadow-red-600/30 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{language === 'bn' ? 'যাচাই করা হচ্ছে...' : 'Validating...'}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{language === 'bn' ? 'বার্তা যাচাই ও সাবমিট করুন' : 'Validate & Submit Message'}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
