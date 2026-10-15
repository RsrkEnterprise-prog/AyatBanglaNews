import { NewsArticle, GovtScheme, WeatherCity } from '../types';

export const CATEGORIES = [
  { id: 'all', name: { bn: 'সব খবর', en: 'All News' }, icon: 'newspaper' },
  { id: 'west-bengal', name: { bn: 'পশ্চিমবঙ্গ', en: 'West Bengal' }, icon: 'map-pin' },
  { id: 'kolkata', name: { bn: 'কলকাতা', en: 'Kolkata' }, icon: 'landmark' },
  { id: 'india', name: { bn: 'ভারত', en: 'India' }, icon: 'flag' },
  { id: 'world', name: { bn: 'আন্তর্জাতিক', en: 'World' }, icon: 'globe' },
  { id: 'politics', name: { bn: 'রাজনীতি', en: 'Politics' }, icon: 'vote' },
  { id: 'education-jobs', name: { bn: 'শিক্ষা ও চাকরি', en: 'Education & Jobs' }, icon: 'graduation-cap' },
  { id: 'govt-schemes', name: { bn: 'সরকারি প্রকল্প', en: 'Govt Schemes' }, icon: 'file-badge' },
  { id: 'business', name: { bn: 'ব্যবসা-বাণিজ্য', en: 'Business' }, icon: 'trending-up' },
  { id: 'tech-ai', name: { bn: 'প্রযুক্তি ও এআই', en: 'Tech & AI' }, icon: 'cpu' },
  { id: 'sports', name: { bn: 'খেলাধুলা', en: 'Sports' }, icon: 'trophy' },
  { id: 'entertainment', name: { bn: 'বিনোদন', en: 'Entertainment' }, icon: 'film' },
  { id: 'weather', name: { bn: 'আবহাওয়া', en: 'Weather' }, icon: 'cloud-sun' },
] as const;

export const BREAKING_NEWS = [
  {
    id: 'brk-1',
    text: {
      bn: 'ব্রেকিং: হাওড়া ময়দান থেকে সল্টলেক সেক্টর ফাইভ পর্যন্ত মেট্রো করিডোরে আরও দ্রুত ট্রেনের সংখ্যা বৃদ্ধি',
      en: 'BREAKING: Kolkata Metro increases operational frequency along Howrah Maidan to Salt Lake Sector V corridor',
    },
    category: 'kolkata',
  },
  {
    id: 'brk-2',
    text: {
      bn: 'শিক্ষায় সুখবর: রাজ্যের নতুন শিক্ষক ও অশিক্ষক পদে দ্রুত নিয়োগের বিশেষ বিজ্ঞপ্তি জারি কমিশনের',
      en: 'Education Update: State commission issues notification for fast-track recruitment of school personnel',
    },
    category: 'education-jobs',
  },
  {
    id: 'brk-3',
    text: {
      bn: 'প্রযুক্তি ও এআই: নিউটাউন সিলিকন ভ্যালিতে বিশ্বমানের ডেটা সেন্টার ও ক্লাউড ল্যাব চালুর ঘোষণা',
      en: 'Tech Alert: Global cloud data center and AI laboratory announced in Newtown Silicon Valley hub',
    },
    category: 'tech-ai',
  },
  {
    id: 'brk-4',
    text: {
      bn: 'আবহাওয়ার খবর: দক্ষিণবঙ্গে মনোরম আবহাওয়া অব্যাহত, উত্তরবঙ্গে বৃষ্টির পূর্বাভাস আলিপুরের',
      en: 'Weather Update: Pleasant weather persists in South Bengal, Alipore predicts scattered rain in North Bengal',
    },
    category: 'weather',
  },
];

export const SAMPLE_ARTICLES: NewsArticle[] = [
  {
    id: 'art-kolkata-metro-expansion',
    title: {
      bn: 'গঙ্গার তলদেশ দিয়ে মেট্রো পরিষেবায় বিপুল সাফল্য: কলকাতার বুকে ট্র্যাফিক চাপ কমল ২৫ শতাংশ',
      en: 'Ganga Underwater Metro Sees Massive Passenger Milestone: Kolkata Traffic Congestion Drops by 25%',
    },
    excerpt: {
      bn: 'হাওড়া ও কলকাতার মধ্যে সংযোগকারী আন্ডারওয়াটার মেট্রোয় দৈনিক লক্ষাধিক যাত্রী যাতায়াত করছেন। বিশেষজ্ঞদের মতে ঐতিহাসিক সাফল্য।',
      en: 'Over one hundred thousand daily commuters rely on the Howrah-Kolkata underwater metro corridor, reducing peak surface road congestion significantly.',
    },
    content: {
      bn: [
        'ভারতের প্রথম নদীগর্ভস্থ মেট্রো করিডোর চালু হওয়ার পর থেকেই কলকাতা ও হাওড়ার যোগাযোগ ব্যবস্থায় এক যুগান্তকারী পরিবর্তন এসেছে। প্রতিদিন সকাল থেকে রাত পর্যন্ত গঙ্গার তলা দিয়ে নির্বিঘ্নে যাতায়াত করছেন সাধারণ মানুষ, নিত্যযাত্রী এবং পর্যটকরা।',
        'কলকাতা মেট্রো কর্তৃপক্ষের সাম্প্রতিক সমীক্ষা অনুযায়ী, এই করিডোরের কারণে হাওড়া ব্রিজ ও বিদ্যাসাগর সেতুর ওপর গাড়ির চাপ প্রায় ২৫ শতাংশ পর্যন্ত কমেছে। বিশেষত অফিস টাইমে যেখানে আগে ১ থেকে দেড় ঘণ্টা সময় লাগত, এখন মাত্র ১০-১২ মিনিটে হাওড়া ময়দান থেকে ধর্মতলা বা শিয়ালদহ সংলগ্ন এলাকায় পৌঁছানো সম্ভব হচ্ছে।',
        'যাত্রীদের সুবিধার্থে ট্রেনের ব্যবধান কমিয়ে ৫ মিনিটে আনার প্রস্তুতি চলছে। পাশাপাশি স্মার্ট কার্ড রিচার্জ এবং টিকিটের জন্য ডিজিটাল কিয়স্ক ও কিউআর স্ক্যানারের সংখ্যা বাড়ানো হয়েছে। মেট্রো রেলের জনসংযোগ আধিকারিক জানিয়েছেন, খুব শীঘ্রই সপ্তাহান্তে বিশেষ নাইট সার্ভিস চালুর বিষয়টি পর্যালোচনা করা হচ্ছে।',
        'শহরের বিশিষ্ট নগর পরিকল্পনাবিদরা জানিয়েছেন, সবুজ জ্বালানি এবং দূষণমুক্ত পরিবেশ বজায় রাখতে বৈদ্যুতিক এই মেট্রো করিডোর কলকাতার কার্বন নিঃসরণ হ্রাসেও বিশেষ অবদান রাখছে।',
      ],
      en: [
        'Since the launch of India\'s first underwater metro tunnel linking Kolkata and Howrah under the river Hooghly, daily commuter transit in the metropolis has witnessed a revolutionary breakthrough.',
        'Official transport statistics show that peak vehicular congestion across the iconic Howrah Bridge and Vidyasagar Setu has plummeted by nearly a quarter. A journey that previously took upwards of an hour during rush hour is now traversed within minutes.',
        'Metro authorities are currently testing shorter headway intervals down to five minutes between trains to accommodate surging weekend footfalls and office commuters.',
        'Urban planners and environmentalists have lauded the system for slashing citywide vehicular emissions and enhancing urban productivity in West Bengal\'s capital.',
      ],
    },
    category: 'kolkata',
    author: {
      name: { bn: 'সৌমেন বন্দ্যোপাধ্যায়', en: 'Soumen Banerjee' },
      role: { bn: 'বিশেষ সংবাদদাতা, কলকাতা', en: 'Special Correspondent, Kolkata' },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-15T09:30:00+05:30',
    readTime: { bn: '৪ মিনিট পঠন', en: '4 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'হাওড়া ও কলকাতার মধ্যে সংযোগ স্থাপনকারী অত্যাধুনিক মেট্রো রেক (প্রতীকী ছবি / ডেমো)',
      en: 'Modern metro transit operational between Howrah and Kolkata (Representative demo image)',
    },
    isBreaking: true,
    isHero: true,
    isTrending: true,
    tags: {
      bn: ['কলকাতা মেট্রো', 'হাওড়া', 'যোগাযোগ', 'পশ্চিমবঙ্গ'],
      en: ['Kolkata Metro', 'Howrah', 'Public Transit', 'West Bengal'],
    },
    location: { bn: 'কলকাতা, পশ্চিমবঙ্গ', en: 'Kolkata, West Bengal' },
    source: { bn: 'আয়াত বাংলা ব্যুরো', en: 'Ayat Bangla Bureau' },
  },
  {
    id: 'art-wb-tech-silicon-valley',
    title: {
      bn: 'নিউটাউন সিলিকন ভ্যালিতে নতুন ৩টি গ্লোবাল এআই ও ক্লাউড সেন্টারের ভূমিপূজন: তৈরি হবে ১০ হাজার কর্মসংস্থান',
      en: 'Three Global AI & Cloud Hubs Groundbreak at Newtown Silicon Valley: Expected 10,000 High-Tech Jobs',
    },
    excerpt: {
      bn: 'পশ্চিমবঙ্গের আইটি করিডোরে বিপুল বিনিয়োগ। দেশি ও আন্তর্জাতিক প্রযুক্তি সংস্থাগুলির নতুন ক্যাম্পাস চালু হতে চলেছে ২০২৭ সালের মধ্যে।',
      en: 'Major technological investment in West Bengal\'s IT hub in Newtown. Multinational enterprises set to launch flagship campuses.',
    },
    content: {
      bn: [
        'তথ্যপ্রযুক্তি ও কৃত্রিম বুদ্ধিমত্তার ক্ষেত্রে পশ্চিমবঙ্গকে দেশের শীর্ষস্থানীয় কেন্দ্র হিসেবে গড়ে তোলার লক্ষ্যে নিউটাউন সিলিকন ভ্যালিতে নতুন অধ্যায় রচিত হলো। রাজ্য তথ্যপ্রযুক্তি দফতরের উদ্যোগে আজ তিনটি বৃহৎ প্রযুক্তি সংস্থার ক্যাম্পাসের জন্য জমি হস্তান্তর প্রক্রিয়া সম্পন্ন হয়েছে।',
        'প্রস্তাবিত প্রকল্পগুলিতে রয়েছে হাইপারস্কেল ডেটা সেন্টার, কৃত্রিম বুদ্ধিমত্তা গবেষণা ল্যাব এবং জেনারেটিভ এআই সেন্টার অফ এক্সিলেন্স। এর ফলে রাজ্যের তরুণ প্রকৌশলী, ডেটা সায়েন্টিস্ট এবং সফটওয়্যার ডেভেলপারদের নিজ রাজ্যেই আন্তর্জাতিক মানের কাজের সুযোগ তৈরি হবে।',
        'এক পদস্থ কর্তা জানান, "কলকাতা তথা নিউটাউনের পরিকাঠামো, সাশ্রয়ী জীবনযাত্রা এবং মেধা শক্তি বিশ্বমানের টেক কোম্পানিগুলিকে আকৃষ্ট করছে। এর পাশাপাশি স্টার্টআপ ইকোসিস্টেমের জন্য বিশেষ ইনকিউবেশন গ্রান্ট প্রদান করা হচ্ছে।"'
      ],
      en: [
        'Marking a pivotal leap for Bengal\'s digital economy, Newtown Silicon Valley has formalized ground leases for three world-class AI and hyper-scale cloud data centers.',
        'The facilities will focus on enterprise artificial intelligence, automated robotics research, and next-generation distributed systems, creating roughly 10,000 employment opportunities for regional talent.',
        'Officials underlined that Kolkata\'s robust technical talent pool, high living quality, and cost advantages are propelling Newtown as Eastern India\'s premier digital capital.'
      ],
    },
    category: 'tech-ai',
    author: {
      name: { bn: 'অনিন্দিতা সেনগুপ্ত', en: 'Anindita Sengupta' },
      role: { bn: 'প্রযুক্তি ও অর্থনীতি সম্পাদক', en: 'Tech & Economy Editor' },
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-15T08:15:00+05:30',
    readTime: { bn: '৩ মিনিট পঠন', en: '3 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'নিউটাউনের সিলিকন ভ্যালি হাব ও আধুনিক প্রযুক্তি পরিকাঠামো (ডেমো ছবি)',
      en: 'Newtown Silicon Valley tech corridor and cloud infrastructure (Demo illustration)',
    },
    isTrending: true,
    isTechBlog: true,
    tags: {
      bn: ['নিউটাউন', 'সিলিকন ভ্যালি', 'এআই', 'চাকরি', 'আইটি'],
      en: ['Newtown', 'Silicon Valley', 'AI', 'Jobs', 'Bengal IT'],
    },
    location: { bn: 'নিউটাউন, কলকাতা', en: 'Newtown, Kolkata' },
    source: { bn: 'আয়াত টেক ডেস্ক', en: 'Ayat Tech Desk' },
  },
  {
    id: 'art-wb-lakshmir-bhandar-update',
    title: {
      bn: 'লক্ষ্মীর ভাণ্ডার ও কন্যাশ্রী প্রকল্পে নতুন ডিজিটাল পোর্টাল চালু: অ্যাকাউন্টে টাকা আসার স্থিতি জানা যাবে হোয়াটসঅ্যাপেই',
      en: 'New Digital Portal for Lakshmir Bhandar & Kanyashree: Beneficiaries Can Now Check Direct Status on WhatsApp',
    },
    excerpt: {
      bn: 'মহিলা ক্ষমতায়ন ও ছাত্রীদের উচ্চশিক্ষায় সহায়তা করতে আরও স্বচ্ছ ও সহজ হলো রাজ্য সরকারের জনকল্যাণমূলক প্রকল্পগুলি।',
      en: 'West Bengal welfare schemes achieve full digital transparency as automated chat and portal lookup streamline benefit inquiries.',
    },
    content: {
      bn: [
        'রাজ্যের কোটি কোটি মা-বোন এবং ছাত্রীদের সুবিধার কথা মাথায় রেখে পশ্চিমবঙ্গ সরকার লক্ষ্মীর ভাণ্ডার এবং কন্যাশ্রী প্রকল্পের জন্য চালু করেছে বিশেষ এআই-চালিত ডিজিটাল হেল্পডেস্ক। এখন আর ব্লকে গিয়ে লাইনে দাঁড়াতে হবে না; যেকোনো স্মার্টফোন থেকেই সরাসরি আবেদনের বর্তমান স্থিতি যাচাই করা যাবে।',
        'নতুন পোর্টালের মাধ্যমে সুবিধাভোগীরা তাদের আধার বা স্বাস্থ্যসাথী নম্বর দিয়েই এক নিমেষে দেখতে পারবেন ব্যাংক অ্যাকাউন্টে প্রতি মাসের বরাদ্দ জমা পড়েছে কি না। কোনো কারণে টাকা আটকে থাকলে তা কী কারণে আটকেছে এবং কীভাবে সমাধান করা যাবে তাও স্বয়ংক্রিয়ভাবে নির্দেশিকায় জানিয়ে দেওয়া হচ্ছে।',
        'নবান্ন সূত্রে জানানো হয়েছে, প্রত্যন্ত অঞ্চলের মানুষের সুবিধার্থে পঞ্চায়েত ও বাংলা সহায়তা কেন্দ্রগুলিতেও (BSK) বিনামূল্যে এই সুবিধা প্রদান করা হবে।'
      ],
      en: [
        'The Government of West Bengal has launched an enhanced digital service hub enabling millions of women and young students enrolled in Lakshmir Bhandar and Kanyashree to verify direct benefit status instantly via official WhatsApp channels and online dashboards.',
        'Users can query application status, monthly disbursements, or banking discrepancies using their registered Swasthya Sathi or Aadhaar identifiers.',
        'Bangla Sahayata Kendras across all district panchayats will also furnish doorstep digital support free of charges.'
      ],
    },
    category: 'govt-schemes',
    author: {
      name: { bn: 'প্রশান্ত অধিকারী', en: 'Prashanta Adhikari' },
      role: { bn: 'প্রশাসনিক প্রতিনিধি', en: 'Administration Reporter' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-14T18:45:00+05:30',
    readTime: { bn: '৩ মিনিট পঠন', en: '3 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'বাংলার নারীদের আর্থ-সামাজিক উন্নয়নে সরকারি প্রকল্পের ভূমিকা (ডেমো ছবি)',
      en: 'Empowering women through direct benefit transfer schemes in Bengal (Demo image)',
    },
    isTrending: true,
    tags: {
      bn: ['লক্ষ্মীর ভাণ্ডার', 'কন্যাশ্রী', 'সরকারি প্রকল্প', 'বাংলা সহায়তা কেন্দ্র'],
      en: ['Lakshmir Bhandar', 'Kanyashree', 'Govt Schemes', 'Social Welfare'],
    },
    location: { bn: 'নবান্ন, হাওড়া', en: 'Nabanna, Howrah' },
    source: { bn: 'আয়াত বাংলা রাজ্য ব্যুরো', en: 'Ayat Bangla State Bureau' },
  },
  {
    id: 'art-education-wbcs-recruitment',
    title: {
      bn: 'পশ্চিমবঙ্গ পাবলিক সার্ভিস কমিশন ও শিক্ষক নিয়োগে স্বচ্ছতায় আধুনিক ওএমআর ডিজিটাল মূল্যায়ন ব্যবস্থা',
      en: 'West Bengal Public Service Commission Implements Digital Watermarked OMR Evaluation for Total Exam Transparency',
    },
    excerpt: {
      bn: 'পরীক্ষার্থীদের দীর্ঘদিনের দাবি মেনে রাজ্য নিয়োগ পরীক্ষাগুলিতে আনা হলো কিউআর কোডযুক্ত ওএমআর শিট এবং লাইভ ড্যাশবোর্ড।',
      en: 'Responding to civil service aspirants, the State Commission introduces real-time answer verification and tamper-proof digital OMR sheets.',
    },
    content: {
      bn: [
        'রাজ্যের লক্ষ লক্ষ চাকরিপ্রার্থীর স্বার্থ সুরক্ষায় এক ঐতিহাসিক পদক্ষেপ গ্রহণ করল পাবলিক সার্ভিস কমিশন ও শিক্ষা দফতর। আগামী সমস্ত রাজ্যস্তরের প্রতিযোগিতামূলক পরীক্ষায় সম্পূর্ণ আধুনিক প্রযুক্তিনির্ভর মূল্যায়ন পদ্ধতি প্রয়োগ করা হচ্ছে।',
        'পরীক্ষার সাথে সাথেই প্রতিটি প্রার্থীর ওএমআর শিটের কার্বন কপি ডিজিটালভাবে সংরক্ষিত হবে এবং পরীক্ষার্থীরা নিজস্ব পোর্টাল লগইন করে তা ডাউনলোড করতে পারবেন। এতে কোনো ধরনের কারচুপির সুযোগ থাকবে না।',
        'পাশাপাশি নতুন বিভিন্ন সরকারি দফতরে শূন্যপদের তালিকা প্রকাশের প্রস্তুতিও জোরকদমে চলছে। যুব সমাজের মধ্যে এই পদক্ষেপে ইতিবাচক উৎসাহ লক্ষ্য করা গেছে।'
      ],
      en: [
        'In a decisive technological overhaul, civil service and educational recruitment bodies across West Bengal have standardized automated QR-coded OMR sheets and digitized student portals.',
        'Candidates will be able to retrieve official digital scans of their signed response sheets within 48 hours of test completion, ensuring unprecedented institutional transparency.',
        'Youth associations and competitive exam candidates have broadly welcomed the state-wide modernization.'
      ],
    },
    category: 'education-jobs',
    author: {
      name: { bn: 'দেবলীনা ভট্টাচার্য', en: 'Debolina Bhattacharya' },
      role: { bn: 'শিক্ষা ও কর্মসংস্থান প্রতিনিধি', en: 'Education & Career Reporter' },
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-14T14:20:00+05:30',
    readTime: { bn: '৪ মিনিট পঠন', en: '4 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'শিক্ষার্থীদের ভবিষ্যৎ সুনিশ্চিত করতে নিয়োগ ব্যবস্থায় আধুনিক প্রযুক্তির সংমিশ্রণ',
      en: 'Leveraging digital technology for transparent government examinations',
    },
    isTrending: false,
    tags: {
      bn: ['ডাব্লুবিসিএস', 'চাকরি', 'নিয়োগ', 'পাবলিক সার্ভিস কমিশন'],
      en: ['WBCS', 'Govt Jobs', 'Recruitment', 'WBPSC'],
    },
    location: { bn: 'কলকাতা', en: 'Kolkata' },
    source: { bn: 'আয়াত শিক্ষা ডেস্ক', en: 'Ayat Education Desk' },
  },
  {
    id: 'art-kolkata-derby-sports',
    title: {
      bn: 'যুবভারতীতে জমে উঠল ডার্বির মহাযুদ্ধ: যুবভারতীর গ্যালারিতে লাল-হলুদ ও সবুজ-মেরুনের আবেগঘন লড়াই',
      en: 'Kolkata Derby Roars at Salt Lake Stadium: Mohun Bagan and East Bengal Deliver Thrilling Clash Before 65,000 Fans',
    },
    excerpt: {
      bn: 'কলকাতার চিরন্তন ফুটবল আবেগ ফিরল যুবভারতীতে। শেষ মুহূর্তের অনবদ্য গোলে নির্ধারিত হলো ফুটবলের রোমাঞ্চকর ফলাফল।',
      en: 'The century-old rivalry ignited the Vivekananda Yuba Bharati Krirangan with high-octane football and unmatched Bengal sporting passion.',
    },
    content: {
      bn: [
        'কলকাতার ফুটবল মানেই আবেগ, ইলিশ আর চিংড়ির দ্বৈরথ। যুবভারতী ক্রীড়াঙ্গনে মুখোমুখি হয়েছিল দুই ঐতিহ্যবাহী দল—মোহনবাগান ও ইস্টবেঙ্গল। ৬৫ হাজারেরও বেশি ফুটবলপ্রেমী দর্শকের উপস্থিতিতে গ্যালারির গর্জন কাঁপিয়ে তোলে গোটা সল্টলেক চত্বর।',
        'ম্যাচের প্রথমার্ধেই দারুণ রণকৌশলের পরিচয় দেয় উভয় দল। মাঝমাঠের দখল এবং উইং দিয়ে আক্রমণের ছক দর্শকদের উপহার দেয় অনবদ্য ৯০ মিনিটের টানটান ফুটবল প্রদর্শনী।',
        'দুই ক্লাবের কোচই স্বীকার করেছেন, কলকাতার ডার্বি ম্যাচ যে কোনো ইউরোপীয় ডার্বির মতোই মানসিক চাপ ও উন্মাদনা বয়ে নিয়ে আসে। খেলার শেষে স্পোর্টসম্যানশিপ ও সমর্থকদের বন্ধুত্বপূর্ণ উল্লাস কলকাতার ফুটবল সংস্কৃতির সুনাম আবারও অক্ষুণ্ণ রাখল।'
      ],
      en: [
        'The historic Kolkata Derby, celebrated as one of global sports oldest club rivalries, mesmerized over 65,000 roaring football aficionados under the floodlights at Salt Lake Stadium.',
        'With electrifying end-to-end tactical play between the Red-and-Gold and the Green-and-Maroon brigades, the match exhibited the enduring cultural fabric of Bengal football.',
        'Both managers commended the sporting atmosphere, affirming Kolkata’s status as the quintessential football capital of India.'
      ],
    },
    category: 'sports',
    author: {
      name: { bn: 'শুভঙ্কর বসু', en: 'Subhankar Basu' },
      role: { bn: 'ক্রীড়া সম্পাদক', en: 'Sports Editor' },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-14T21:10:00+05:30',
    readTime: { bn: '৩ মিনিট পঠন', en: '3 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'যুবভারতীর সবুজ ঘাসে জমজমাট ফুটবল দ্বৈরথ (প্রতীকী ডেমো ছবি)',
      en: 'High voltage football action under stadium lights (Representative demo image)',
    },
    tags: {
      bn: ['কলকাতা ডার্বি', 'মোহনবাগান', 'ইস্টবেঙ্গল', 'ফুটবল', 'যুবভারতী'],
      en: ['Kolkata Derby', 'Mohun Bagan', 'East Bengal', 'Indian Football', 'Salt Lake Stadium'],
    },
    location: { bn: 'সল্টলেক, কলকাতা', en: 'Salt Lake, Kolkata' },
    source: { bn: 'আয়াত স্পোর্টস ডেস্ক', en: 'Ayat Sports Desk' },
  },
  {
    id: 'art-bengal-durga-puja-unesco',
    title: {
      bn: 'ইউনেস্কোর হেরিটেজ তকমা বজায় রেখে বিশ্বমঞ্চে বাংলার দুর্গাপূজা: আন্তর্জাতিক পর্যটকদের সংখ্যায় রেকর্ড বৃদ্ধি',
      en: 'Durga Puja Cultural Showcase Attracts Record Inbound International Travelers to West Bengal',
    },
    excerpt: {
      bn: 'কলকাতা ও জেলার সেরা মণ্ডপগুলির শিল্পকলা দেখতে বিশ্বের নানা প্রান্ত থেকে কলকাতায় আসছেন গবেষক ও পর্যটকরা।',
      en: 'Artists, art curators, and global travel enthusiasts explore Bengal\'s open-air contemporary art installation festival.',
    },
    content: {
      bn: [
        'ইউনেস্কোর আবহমান সাংস্কৃতিক ঐতিহ্যের স্বীকৃতি পাওয়ার পর থেকে কলকাতার দুর্গাপূজা আন্তর্জাতিক পর্যটন মানচিত্রে বিশেষ স্থান অধিকার করেছে। চলতি মরশুমে আমেরিকা, ফ্রান্স, জার্মানি এবং জাপান থেকে রেকর্ড সংখ্যক পর্যটক অংশ নিচ্ছেন শহরের হেরিটেজ ওয়াকগুলিতে।',
        'উত্তর কলকাতার সাবেক বনেদি বাড়ির একচালা প্রতিমা থেকে দক্ষিণ কলকাতার সমসাময়িক থিম আর্ট—প্রতিটি প্যান্ডেলে বাংলার মৃৎশিল্পী ও স্থপতিদের প্রতিভা বিশ্ববাসীকে মুগ্ধ করেছে।',
        'রাজ্য পর্যটন দফতর বিশেষ হসপিটালিটি হেল্পডেস্ক এবং বহুভাষিক গাইড নিয়োগ করে দর্শনার্থীদের অভিজ্ঞতাকে আরও সহজ ও মনোরম করে তুলেছে।'
      ],
      en: [
        'Enshrined on UNESCO\'s Intangible Cultural Heritage of Humanity list, Kolkata\'s grand autumn festival continues to draw international curators, photographers, and scholars.',
        'From traditional aristocratic mansion rituals in North Kolkata to avant-garde social architectural installations across South Kolkata, the city transforms into the world’s largest open-air creative canvas.',
        'The Department of Tourism has deployed dedicated bilingual cultural concierges and heritage routes to facilitate seamless navigation.'
      ],
    },
    category: 'entertainment',
    author: {
      name: { bn: 'রিতম চক্রবর্তী', en: 'Ritam Chakraborty' },
      role: { bn: 'সংস্কৃতি ও বিনোদন প্রতিবেদক', en: 'Culture & Arts Reporter' },
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-13T17:00:00+05:30',
    readTime: { bn: '৩ মিনিট পঠন', en: '3 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'বাংলার আবহমান লোকসংস্কৃতি ও শিল্পকলার এক অপূর্ব মিলনমেলা (নমুনা ছবি)',
      en: 'Celebration of art, architecture, and living heritage in Bengal (Demo illustration)',
    },
    tags: {
      bn: ['দুর্গাপূজা', 'কলকাতা সংস্কৃতি', 'ইউনেস্কো', 'পর্যটন'],
      en: ['Durga Puja', 'Kolkata Culture', 'UNESCO', 'Bengal Tourism'],
    },
    location: { bn: 'কলকাতা', en: 'Kolkata' },
    source: { bn: 'আয়াত কালচারাল ডেস্ক', en: 'Ayat Cultural Desk' },
  },
  {
    id: 'art-weather-kolkata-october',
    title: {
      bn: 'আলিপুরের পূর্বাভাস: আগামী ৭২ ঘণ্টা দক্ষিণবঙ্গে মনোরম রোদের সাথে শিরশিরে আমেজ, উত্তরের পাহাড়ে হালকা কুয়াশা',
      en: 'Alipore Weather Bulletin: Pleasant Sunny Days and Mild Evening Chill across South Bengal; Fog in North Bengal Hills',
    },
    excerpt: {
      bn: 'কলকাতায় সর্বোচ্চ তাপমাত্রা ৩১ ডিগ্রি ও সর্বনিম্ন ২২ ডিগ্রি সেলসিয়াস। বাতাসে আর্দ্রতার মাত্রা অনেকটাই নিয়ন্ত্রিত।',
      en: 'Kolkata experiences mild temperatures hovering between 22°C and 31°C with clear skies and calm breezes.',
    },
    content: {
      bn: [
        'আলিপুর আবহাওয়া দফতরের সর্বশেষ বুলেটিন অনুযায়ী, দক্ষিণবঙ্গের জেলাগুলিতে আপাতত কোনো দুর্যোগপূর্ণ আবহাওয়ার সম্ভাবনা নেই। আকাশ প্রধানত পরিষ্কার থাকবে এবং সকালের দিকে বাতাসে মনোরম ঠান্ডার স্পর্শ অনুভূত হবে।',
        'কলকাতায় আজকের সর্বোচ্চ তাপমাত্রা রেকর্ড করা হয়েছে ৩১.২ ডিগ্রি সেলসিয়াস এবং সর্বনিম্ন তাপমাত্রা ২২.৫ ডিগ্রি সেলসিয়াস। বাতাসে আপেক্ষিক আর্দ্রতার পরিমাণ কমে যাওয়ায় প্যাচপ্যাচে গরমের হাত থেকে স্বস্তি পেয়েছেন শহরবাসী।',
        'তবে উত্তরবঙ্গের দার্জিলিং, কালিম্পং এবং জলপাইগুড়ির পার্বত্য অঞ্চলে সকাল ও সন্ধ্যার দিকে হালকা কুয়াশার চাদর দেখা যাচ্ছে। পর্যটকদের জন্য এই আবহাওয়া অত্যন্ত উপযুক্ত বলে জানিয়েছে স্থানীয় আবহাওয়া কেন্দ্র।'
      ],
      en: [
        'The Regional Meteorological Centre at Alipore reports tranquil weather conditions persisting across Kolkata and neighboring South Bengal districts.',
        'Temperatures in Kolkata will remain comfortable with highs of 31°C and nighttime lows touching 22°C, coupled with low relative humidity.',
        'In the northern hill districts of Darjeeling and Kalimpong, morning mist and pleasant autumnal conditions make for splendid tourist travel.'
      ],
    },
    category: 'weather',
    author: {
      name: { bn: 'সুমিত মজুমদার', en: 'Sumit Majumdar' },
      role: { bn: 'আবহাওয়া বিশ্লেষক', en: 'Meteorological Analyst' },
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-15T07:00:00+05:30',
    readTime: { bn: '২ মিনিট পঠন', en: '2 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'হাওড়া ব্রিজের ওপর শরতের নির্মল নীল আকাশ ও গঙ্গার শান্ত রূপ (নমুনা ছবি)',
      en: 'Clear skies over the iconic riverfront in Kolkata (Representative demo image)',
    },
    tags: {
      bn: ['আবহাওয়া', 'কলকাতা', 'আলিপুর দফতর', 'তাপমাত্রা'],
      en: ['Weather', 'Kolkata', 'Alipore Met', 'Forecast'],
    },
    location: { bn: 'আলিপুর, কলকাতা', en: 'Alipore, Kolkata' },
    source: { bn: 'আয়াত আবহাওয়া ব্যুরো', en: 'Ayat Weather Bureau' },
  },
  {
    id: 'art-india-digital-rupee-upi',
    title: {
      bn: 'ভারতীয় ইউপিআই এবার আন্তর্জাতিক বাণিজ্যে আরও সম্প্রসারিত: বিদেশে ভারতীয় মুদ্রায় লেনদেন আরও সহজ',
      en: 'India\'s UPI Expands Cross-Border Footprint: Seamless Rupee Settlements Activated Across Key Partner Countries',
    },
    excerpt: {
      bn: 'রিজার্ভ ব্যাংকের সহযোগিতায় আরও পাঁচটি দেশে সরাসরি কিউআর কোড স্ক্যান করে ভারতীয় রুপি দিয়ে কেনাকাটার সুবিধা চালু হলো।',
      en: 'Indian tourists and businesses can directly transact via homegrown UPI mechanisms in five additional countries.',
    },
    content: {
      bn: [
        'ভারতের গর্বের ডিজিটাল পেমেন্ট বিপ্লব ইউপিআই (UPI) এখন বৈশ্বিক পরিমণ্ডলে নিজেদের প্রভাব বৃদ্ধি করে চলেছে। সিঙ্গাপুর, সংযুক্ত আরব আমিরশাহির পর এবার আরও কয়েকটি দেশে ভারতীয় ব্যাংকিং নেটওয়ার্ক সরাসরি সংযুক্ত হয়েছে।',
        'এর ফলে বিদেশে ভ্রমণরত ভারতীয় নাগরিকরা তাদের যেকোনো ভারতীয় ব্যাংকিং অ্যাপের মাধ্যমে স্থানীয় মুদ্রা রূপান্তরের অতিরিক্ত চার্জ ছাড়াই সোজা কিউআর কোড স্ক্যান করে খাবার, ট্যাক্সি ও কেনাকাটার অর্থ পরিশোধ করতে পারবেন।',
        'অর্থনীতিবিদরা একে ভারতীয় মুদ্রার আন্তর্জাতিকীকরণ এবং ফিনটেক কূটনীতির এক বিশাল বিজয় হিসেবে অভিহিত করেছেন।'
      ],
      en: [
        'India’s indigenous Unified Payments Interface has established another landmark in real-time cross-border settlements, enabling instant QR transactions without exorbitant forex conversion friction.',
        'Travelers and small traders can utilize everyday banking mobile apps to process verified payments abroad.',
        'Financial analysts view this as a strategic breakthrough in digital monetary sovereignty and global fintech leadership.'
      ],
    },
    category: 'business',
    author: {
      name: { bn: 'অমিত সরকার', en: 'Amit Sarkar' },
      role: { bn: 'ফিনটেক ও বাণিজ্য বিশ্লেষক', en: 'Fintech & Economy Analyst' },
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-14T11:40:00+05:30',
    readTime: { bn: '৪ মিনিট পঠন', en: '4 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'ডিজিটাল পেমেন্ট ও ভারতীয় ফিনটেক বিপ্লব (নমুনা ছবি)',
      en: 'India\'s digital payments revolution expanding globally (Demo image)',
    },
    tags: {
      bn: ['ইউপিআই', 'ডিজিটাল ইন্ডিয়া', 'বাণিজ্য', 'ব্যাংকিং'],
      en: ['UPI', 'Digital India', 'Fintech', 'Economy'],
    },
    location: { bn: 'নয়াদিল্লি', en: 'New Delhi' },
    source: { bn: 'আয়াত বিজনেস ডেস্ক', en: 'Ayat Business Desk' },
  },
  {
    id: 'art-myblog-bengali-llm-tech',
    title: {
      bn: 'মাই ব্লগ টেক: বাংলা ভাষার নিজস্ব এআই ও লার্জ ল্যাঙ্গুয়েজ মডেল কীভাবে আঞ্চলিক শিক্ষার চেহারা বদলে দিচ্ছে',
      en: 'My Blog Tech: How Indic AI Models & Bengali LLMs Are Transforming Regional Education and Software Access',
    },
    excerpt: {
      bn: 'ইংরেজি না জেনেও মাতৃভাষায় কোডিং, বিজ্ঞান শিক্ষা এবং প্রশাসনিক কাজ সম্পন্ন করা এখন সম্পূর্ণ সম্ভব। দেখুন বিশদ বিশ্লেষণ।',
      en: 'An in-depth guide on native Indic generative models translating complex coding syntax and academic concepts into fluent Bengali.',
    },
    content: {
      bn: [
        'কৃত্রিম বুদ্ধিমত্তার অগ্রগতিতে সবচেয়ে বড় প্রতিবন্ধকতা ছিল ভাষার ফারাক। এতদিন বেশিরভাগ এআই মডেল ইংরেজি ও ইউরোপীয় ভাষাতেই সর্বোত্তম ফলাফল দিত। তবে সাম্প্রতিক গবেষণায় বাংলা ভাষার ধ্বনি, ব্যাকরণ ও শব্দভাণ্ডার নিয়ে তৈরি হয়েছে নতুন ধরনের বিশেষায়িত ইন্ডিক এলএলএম (Indic LLM)।',
        'এর প্রত্যক্ষ সুফল পাচ্ছেন পশ্চিমবঙ্গের গ্রামাঞ্চল ও শহরতলির লক্ষ লক্ষ পড়ুয়া। রসায়ন, পদার্থবিদ্যা বা কম্পিউটার বিজ্ঞানের জটিল তত্ত্বগুলি এখন খাঁটি সহজ বাংলায় উদাহরণসহ বুঝে নেওয়া যাচ্ছে।',
        'পাশাপাশি স্থানীয় ক্ষুদ্র উদ্যোক্তারা তাদের পণ্যের বিবরণ, হিসাবরক্ষণ এবং গ্রাহক সহায়তা বাংলাতেই এআই বট দ্বারা পরিচালনা করতে পারছেন। আমাদের এই ব্লগে রইল সেরা পাঁচটি ফ্রি টুলস এবং তাদের ব্যবহারের সহজ নিয়মাবলী।'
      ],
      en: [
        'Bridging the linguistic divide in AI has emerged as one of India\'s most consequential technological breakthroughs. New Bengali-tuned models accurately interpret regional idioms and syntax.',
        'High school students across rural Bengal are now using conversational AI to master STEM curricula in their mother tongue without relying solely on English fluency.',
        'Small businesses in Kolkata and neighboring districts are similarly deploying voice-enabled Bengali bots for local commerce and customer support.'
      ],
    },
    category: 'tech-ai',
    author: {
      name: { bn: 'রিতম রায়', en: 'Ritam Roy' },
      role: { bn: 'মাই ব্লগ প্রতিষ্ঠাতা ও টেক লিড', en: 'My Blog Founder & Tech Lead' },
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-15T06:30:00+05:30',
    readTime: { bn: '৫ মিনিট পঠন', en: '5 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'মাতৃভাষায় আধুনিক প্রযুক্তির বিকাশ ও গবেষণা (প্রতীকী ছবি)',
      en: 'Regional language computational models in action (Demo visual)',
    },
    isTechBlog: true,
    tags: {
      bn: ['মাই ব্লগ', 'এআই মডেল', 'বাংলা টেক', 'প্রোগ্রামিং', 'শিক্ষা'],
      en: ['My Blog', 'AI Models', 'Bengali Tech', 'Programming', 'Education'],
    },
    location: { bn: 'কলকাতা', en: 'Kolkata' },
    source: { bn: 'মাই ব্লগ স্পেশাল', en: 'My Blog Special' },
  },
  {
    id: 'art-world-renewable-energy-accord',
    title: {
      bn: 'আন্তর্জাতিক জলবায়ু সম্মেলনে সৌর ও বায়ুশক্তিতে যৌথ বিনিয়োগের ঐতিহাসিক চুক্তি সই বিশ্বের ৫০টি দেশের',
      en: 'Fifty Nations Form Historic Clean Energy Pact at International Climate Assembly to Expand Solar Grids',
    },
    excerpt: {
      bn: 'উষ্ণায়ন রুখতে জীবাশ্ম জ্বালানির ব্যবহার হ্রাস এবং নবায়নযোগ্য শক্তিতে ভর্তুকি বাড়ানোর আন্তর্জাতিক প্রতিশ্রুতি।',
      en: 'Global delegates agree on subsidized solar and offshore wind initiatives to accelerate decarbonization.',
    },
    content: {
      bn: [
        'বিশ্বজুড়ে তীব্র তাপমাত্রা বৃদ্ধি এবং চরম আবহাওয়া সংক্রান্ত সংকট মোকাবিলায় ৫০টি উন্নত ও উন্নয়নশীল দেশ এক যুগান্তকারী চুক্তিতে স্বাক্ষর করল। ২০৩০ সালের মধ্যে পরিচ্ছন্ন শক্তির উৎপাদন দ্বিগুণ করার লক্ষ্যমাত্রা নির্ধারণ করা হয়েছে।',
        'ভারতে চলমান আন্তর্জাতিক সৌর জোট (ISA) এই উদ্যোগে গুরুত্বপূর্ণ নেতৃত্ব প্রদান করছে। গ্রামীণ এলাকায় সোলার পাম্প ও ছাদের সৌরবিদ্যুৎ প্রকল্পের প্রসারে বিশেষ আর্থিক তহবিল বরাদ্দ করা হচ্ছে।',
        'পরিবেশবিদরা বলছেন, রাজনৈতিক সদিচ্ছা ও প্রযুক্তিগত রূপান্তর একত্রিত হলে ধরিত্রীকে বিপর্যয়ের হাত থেকে রক্ষা করা এখনো সম্ভব।'
      ],
      en: [
        'Addressing climate challenges, representatives from fifty nations have ratified an ambitious accord accelerating solar and wind grid investments globally.',
        'India’s International Solar Alliance plays a catalytic steering role, sharing low-cost microgrid architectures with developing regions.',
        'Environmental scientists have praised the binding green funding commitments while urging rapid execution.'
      ],
    },
    category: 'world',
    author: {
      name: { bn: 'পল্লবী সেন', en: 'Pallabi Sen' },
      role: { bn: 'আন্তর্জাতিক সম্পর্ক বিশ্লেষক', en: 'Foreign Affairs Analyst' },
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-13T12:00:00+05:30',
    readTime: { bn: '৪ মিনিট পঠন', en: '4 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'পরিচ্ছন্ন সৌরশক্তি ও পরিবেশবান্ধব জ্বালানি বিপ্লব (ডেমো ছবি)',
      en: 'Global solar farms leading the green energy transition (Demo image)',
    },
    tags: {
      bn: ['জলবায়ু', 'আন্তর্জাতিক', 'সৌরশক্তি', 'পরিবেশ'],
      en: ['Climate', 'World News', 'Solar Energy', 'Sustainability'],
    },
    location: { bn: 'জেনেভা', en: 'Geneva' },
    source: { bn: 'আন্তর্জাতিক ব্যুরো', en: 'International Bureau' },
  },
  {
    id: 'art-politics-wb-panchayat-infrastructure',
    title: {
      bn: 'গ্রাম সড়ক যোজনা ও গ্রামীণ পরিকাঠামো উন্নয়নে সর্বদলীয় কমিটির সম্মতি: জেলায় জেলায় নতুন সংযোগ সেতু',
      en: 'All-Party Consensus Reached on Rural Road Infrastructure: Major Bridges to Connect Bengal Villages',
    },
    excerpt: {
      bn: 'গ্রামীণ বাংলার অর্থনীতিকে চাঙ্গা করতে সড়ক ও সেতু নির্মাণে রেকর্ড বরাদ্দ। কৃষি বিপণন ও চিকিৎসা যোগাযোগে গতি।',
      en: 'Substantial state-center joint funds cleared for arterial rural bridges, enhancing farmer transport and emergency care.',
    },
    content: {
      bn: [
        'পশ্চিমবঙ্গের প্রতিটি প্রান্তে যোগাযোগ ব্যবস্থা সুদৃঢ় করতে বিধানসভার সর্বদলীয় সংসদীয় কমিটি গ্রামীণ সড়ক সম্প্রসারণ প্রকল্পে নীতিগত সম্মতি জানিয়েছে। বর্ধমান, বাঁকুড়া, মেদিনীপুর ও মালদহ জেলায় নতুন সংযোগকারী সেতু নির্মাণে অগ্রাধিকার দেওয়া হচ্ছে।',
        'এর ফলে গ্রামীণ কৃষকরা অতি সহজেই তাদের উৎপাদিত শাকসবজি ও ধান শহরের পাইকারি বাজারে নিয়ে যেতে পারবেন। পাশাপাশি জরুরি পরিস্থিতিতে হাসপাতালে পৌঁছানোর সময় অনেকটাই হ্রাস পাবে।',
        'স্থানীয় বিধায়করা জানিয়েছেন, কাজের গুণগত মান তদারকি করতে স্যাটেলাইট জিও-ট্যাগিং এবং ড্রোন সার্ভে বাধ্যতামূলক করা হয়েছে।'
      ],
      en: [
        'An all-party consultative panel in West Bengal has sanctioned accelerated funding for arterial bridges across Bardhaman, Bankura, Medinipur, and Malda districts.',
        'The road networks will empower agricultural logistics, cutting travel times to district hospitals and wholesale farm mandis.',
        'Geo-tagged drone monitoring will track civil execution to ensure quality benchmarks.'
      ],
    },
    category: 'politics',
    author: {
      name: { bn: 'অনির্বাণ ঘোষ', en: 'Anirban Ghosh' },
      role: { bn: 'রাজনৈতিক সংবাদদাতা', en: 'Political Correspondent' },
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-14T09:15:00+05:30',
    readTime: { bn: '৩ মিনিট পঠন', en: '3 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'গ্রামীণ সড়ক ও অবকাঠামো উন্নয়ন প্রকল্প (ডেমো ছবি)',
      en: 'Rural infrastructure road connectivity (Representative demo visual)',
    },
    tags: {
      bn: ['রাজনীতি', 'পশ্চিমবঙ্গ', 'গ্রাম সড়ক', 'উন্নয়ন'],
      en: ['Politics', 'West Bengal', 'Infrastructure', 'Development'],
    },
    location: { bn: 'বিধানসভা, কলকাতা', en: 'Assembly, Kolkata' },
    source: { bn: 'আয়াত পলিটিক্যাল ব্যুরো', en: 'Ayat Political Bureau' },
  },
  {
    id: 'art-wb-siliguri-tourism-highways',
    title: {
      bn: 'উত্তরবঙ্গের পর্যটনে নতুন দিগন্ত: শিলিগুড়ি-দার্জিলিং চার লেন হাইওয়ে প্রকল্পের কাজের অগ্রগতি সন্তোষজনক',
      en: 'North Bengal Tourism Boost: Siliguri-Darjeeling Expressway Progress On Schedule Ahead of Holiday Rush',
    },
    excerpt: {
      bn: 'পাহাড়ে যাতায়াতের সময় কমিয়ে আনতে উন্নত টানেল ও এলিভেটেড করিডোর নির্মাণ। উত্তরবঙ্গের অর্থনীতিতে নয়া জোয়ার।',
      en: 'Modern engineering tunnels and bypasses around Kurseong to reduce transit time to Queen of Hills to under two hours.',
    },
    content: {
      bn: [
        'উত্তরবঙ্গের প্রবেশদ্বার শিলিগুড়ি থেকে পাহাড়ের রানি দার্জিলিং পর্যন্ত যাত্রাপথকে আরও নিরাপদ ও দ্রুতগামী করতে দ্রুত গতিতে এগোচ্ছে চার লেনের মহাসড়ক ও এলিভেটেড করিডোর প্রকল্পের কাজ।',
        'পাহাড়ের ধসপ্রবণ এলাকাগুলিতে বিশেষ জিও-গ্রিড প্রযুক্তি এবং আধুনিক ড্রেনেজ ব্যবস্থা গড়ে তোলা হচ্ছে যাতে বর্ষাকালেও যান চলাচল স্বাভাবিক থাকে।',
        'স্থানীয় পর্যটন ব্যবসায়ী, হোমস্টে মালিক এবং চা বাগান পরিচালন সমিতি এই প্রকল্পের ভূয়সী প্রশংসা করেছেন।'
      ],
      en: [
        'Civil engineering works linking the foothill hub of Siliguri with the hill resort of Darjeeling have reached an advanced milestone.',
        'State-of-the-art retaining slope fortifications and reinforced bypass viaducts ensure uninterrupted transit during monsoon seasons.',
        'Local tea estate operators and homestay hosts expect significant tourism growth.'
      ],
    },
    category: 'west-bengal',
    author: {
      name: { bn: 'তপন লামা', en: 'Tapan Lama' },
      role: { bn: 'উত্তরবঙ্গ বিশেষ প্রতিনিধি', en: 'North Bengal Bureau' },
      avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-13T10:15:00+05:30',
    readTime: { bn: '৩ মিনিট পঠন', en: '3 min read' },
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    imageCaption: {
      bn: 'দার্জিলিং ও উত্তরবঙ্গের মনোরম পাহাড়ি সৌন্দর্য (ডেমো ছবি)',
      en: 'Picturesque Himalayan foothills and tea gardens in North Bengal (Demo image)',
    },
    tags: {
      bn: ['উত্তরবঙ্গ', 'শিলিগুড়ি', 'দার্জিলিং', 'পর্যটন'],
      en: ['North Bengal', 'Siliguri', 'Darjeeling', 'Tourism'],
    },
    location: { bn: 'শিলিগুড়ি, উত্তরবঙ্গ', en: 'Siliguri, North Bengal' },
    source: { bn: 'আয়াত উত্তরবঙ্গ ব্যুরো', en: 'Ayat North Bengal Bureau' },
  },
];

export const GOVT_SCHEMES_DATA: GovtScheme[] = [
  {
    id: 'scheme-lakshmir-bhandar',
    name: {
      bn: 'লক্ষ্মীর ভাণ্ডার প্রকল্প',
      en: 'Lakshmir Bhandar Scheme',
    },
    tagline: {
      bn: 'রাজ্যের সাধারণ ও তপশিলি পরিবারের মহিলাদের সরাসরি আর্থিক সহায়তা',
      en: 'Direct monthly financial assistance to adult female family heads in West Bengal',
    },
    targetGroup: {
      bn: '২৫ থেকে ৬০ বছর বয়সী যেকোনো পরিবারের প্রধান মহিলা সদস্য',
      en: 'Resident female heads aged 25 to 60 years',
    },
    benefits: {
      bn: 'তপশিলি জাতি ও উপজাতিদের জন্য প্রতি মাসে ১২০০ টাকা এবং সাধারণ শ্রেণির জন্য প্রতি মাসে ১০০০ টাকা সরাসরি ব্যাংক অ্যাকাউন্টে।',
      en: '₹1,200 per month for SC/ST and ₹1,000 per month for general category transferred directly to bank account.',
    },
    eligibility: {
      bn: [
        'পশ্চিমবঙ্গের স্থায়ী বাসিন্দা হতে হবে',
        'বয়স ২৫ থেকে ৬০ বছরের মধ্যে হতে হবে',
        'স্বাস্থ্যসাথী কার্ডধারী পরিবার হতে হবে',
        'সরকারি স্থায়ী কর্মচারী বা পেনশনভোগী ব্যক্তিরা এই সুবিধা পাবেন না',
      ],
      en: [
        'Must be a permanent resident of West Bengal',
        'Age between 25 and 60 years',
        'Holder of valid Swasthya Sathi card',
        'Government employees or pensioners are not eligible',
      ],
    },
    documents: {
      bn: ['স্বাস্থ্যসাথী কার্ড', 'আধার কার্ড', 'ব্যাংক পাসবই (আধার লিঙ্কড)', 'পাসপোর্ট সাইজ ফটো', 'তপশিলি সার্টিফিকেট (প্রযোজ্য ক্ষেত্রে)'],
      en: ['Swasthya Sathi Card', 'Aadhaar Card', 'Aadhaar-seeded Bank Passbook', 'Passport Photo', 'Caste Certificate (if SC/ST)'],
    },
    officialPortal: 'https://wb.gov.in',
  },
  {
    id: 'scheme-kanyashree',
    name: {
      bn: 'কন্যাশ্রী প্রকল্প (K1, K2 & K3)',
      en: 'Kanyashree Prakalpa (K1, K2 & K3)',
    },
    tagline: {
      bn: 'বাল্যবিবাহ রোধ ও কন্যাদের উচ্চশিক্ষায় বিশ্বব্যাংক ও রাষ্ট্রসংঘ স্বীকৃত প্রকল্প',
      en: 'UN-awarded initiative empowering girls with education and discouraging early marriage',
    },
    targetGroup: {
      bn: '১৩ থেকে ১৯ বছর বয়সী অবিবাহিত বিদ্যালয় ও কলেজগামী ছাত্রীরা',
      en: 'Unmarried girl students aged 13 to 19 enrolled in recognized schools/colleges',
    },
    benefits: {
      bn: 'বার্ষিক বৃত্তি ১০০০ টাকা (K1) এবং ১৮ বছর উত্তীর্ণ হয়ে অবিবাহিত থেকে পড়াশোনা চালিয়ে গেলে এককালীন ২৫,০০০ টাকা (K2)।',
      en: 'Annual scholarship of ₹1,000 (K1) and a one-time grant of ₹25,000 upon reaching 18 years of age (K2).',
    },
    eligibility: {
      bn: [
        'পশ্চিমবঙ্গের বাসিন্দা হতে হবে',
        'সরকারি বা সরকার পোষিত শিক্ষাপ্রতিষ্ঠানে নিয়মিত পাঠরত হতে হবে',
        'পারিবারিক আয়ের ঊর্ধ্বসীমা নেই',
        '১৮ বছর পর্যন্ত অবিবাহিত থাকতে হবে',
      ],
      en: [
        'Permanent resident student in West Bengal',
        'Regularly enrolled in recognized schools/institutions',
        'No family income ceiling barrier',
        'Must remain unmarried until age 18',
      ],
    },
    documents: {
      bn: ['জন্ম প্রশংসাপত্র', 'শিক্ষাপ্রতিষ্ঠানের প্রধানের প্রত্যয়নপত্র', 'ব্যাংক অ্যাকাউন্ট বিবরণী', 'আধার কার্ড', 'অবিবাহিত থাকার ঘোষণাপত্র'],
      en: ['Birth Certificate', 'School Enrollment Certificate', 'Student Bank Account Details', 'Aadhaar Card', 'Declaration of Unmarried Status'],
    },
    officialPortal: 'https://wbkanyashree.gov.in',
  },
  {
    id: 'scheme-swasthya-sathi',
    name: {
      bn: 'স্বাস্থ্যসাথী কার্ড',
      en: 'Swasthya Sathi Health Insurance',
    },
    tagline: {
      bn: 'প্রতি পরিবারের জন্য বাৎসরিক ৫ লক্ষ টাকার সম্পূর্ণ ক্যাশলেস স্বাস্থ্য পরিষেবা',
      en: 'Comprehensive cashless health protection of ₹5 Lakhs per family per annum',
    },
    targetGroup: {
      bn: 'পশ্চিমবঙ্গের সকল নাগরিক ও তাদের পরিবার',
      en: 'All resident households in West Bengal',
    },
    benefits: {
      bn: 'রাজ্যের ও রাজ্যের বাইরের ২০০০-এর বেশি তালিকাভুক্ত সরকারি ও বেসরকারি হাসপাতালে বিনামূল্যে চিকিৎসা, ওষুধ ও অস্ত্রোপচার।',
      en: 'Secondary and tertiary hospitalization coverage up to ₹5,00,000 annually per family across empanelled hospitals.',
    },
    eligibility: {
      bn: [
        'পশ্চিমবঙ্গের প্রতিটি পরিবার এর আওতাভুক্ত',
        'পরিবারের বরিষ্ঠতম মহিলার নামে স্মার্ট কার্ড জারি করা হয়',
        'অন্য কোনো সরকারি স্বাস্থ্য বিমা না থাকা বাধ্যতামূলক',
      ],
      en: [
        'Open to all Bengal households universally',
        'Smart card issued in the name of eldest female family head',
        'Applicable if not holding active government health cover',
      ],
    },
    documents: {
      bn: ['পরিবারের সদস্যদের আধার কার্ড', 'রেশন কার্ড', 'ঠিকানার প্রমাণপত্র', 'মোবাইল নম্বর'],
      en: ['Aadhaar Cards of all members', 'Ration Card', 'Address Proof', 'Mobile Number'],
    },
    officialPortal: 'https://swasthyasathi.gov.in',
  },
  {
    id: 'scheme-student-credit-card',
    name: {
      bn: 'স্টুডেন্ট ক্রেডিট কার্ড প্রকল্প',
      en: 'West Bengal Student Credit Card',
    },
    tagline: {
      bn: 'উচ্চশিক্ষা ও প্রতিযোগিতামূলক পরীক্ষার প্রস্তুতির জন্য ১০ লক্ষ টাকা পর্যন্ত স্বল্প সুদে শিক্ষাঋণ',
      en: 'Collateral-free soft education loan up to ₹10 Lakhs at 4% simple interest',
    },
    targetGroup: {
      bn: 'দশম শ্রেণি উত্তীর্ণ শিক্ষার্থী থেকে শুরু করে গবেষণারত ছাত্রছাত্রী (৪০ বছর বয়স পর্যন্ত)',
      en: 'Students pursuing higher secondary, vocational, degree, or competitive exams up to age 40',
    },
    benefits: {
      bn: '১০ লক্ষ টাকা পর্যন্ত ঋণ, মাত্র ৪ শতাংশ সরল সুদ। রাজ্য সরকারের নিশ্চয়তায় কোনো তৃতীয় পক্ষের জামিনদার লাগে না। ১৫ বছর পরিশোধের সময়।',
      en: 'Credit up to ₹10 Lakhs guaranteed by State Government without third-party collateral, with a 15-year repayment window.',
    },
    eligibility: {
      bn: [
        'অন্তত ১০ বছর পশ্চিমবঙ্গে বসবাসকারী ভারতীয় নাগরিক',
        'ভারতের বা বিদেশের যেকোনো স্বীকৃত শিক্ষা প্রতিষ্ঠানে ভর্তির অফার লেটার',
        'সর্বোচ্চ বয়স ৪০ বছর',
      ],
      en: [
        'Resident in West Bengal for at least 10 years',
        'Admission confirmed in recognized Indian or overseas institutions',
        'Upper age limit 40 years at the time of application',
      ],
    },
    documents: {
      bn: ['ভর্তি ও ফি সংক্রান্ত নথি', 'শিক্ষার্থী ও অভিভাবকের প্যান ও আধার কার্ড', 'আগের পরীক্ষার মার্কশিট', 'ব্যাংক বিবরণী'],
      en: ['Admission receipt & fee schedule', 'PAN & Aadhaar of student and co-borrower parent', 'Academic Marksheets', 'Bank Statements'],
    },
    officialPortal: 'https://wbscc.wb.gov.in',
  },
];

export const WEATHER_CITIES_DATA: WeatherCity[] = [
  {
    id: 'kolkata',
    name: { bn: 'কলকাতা', en: 'Kolkata' },
    temp: 31,
    condition: { bn: 'পরিষ্কার রোদ', en: 'Sunny & Pleasant' },
    humidity: 58,
    aqi: 78,
    aqiLabel: { bn: 'সন্তোষজনক', en: 'Moderate (78)' },
    windSpeed: '12 km/h',
    forecast: [
      { day: { bn: 'আজ', en: 'Today' }, temp: '31° / 22°', icon: 'sun' },
      { day: { bn: 'শুক্র', en: 'Fri' }, temp: '32° / 23°', icon: 'sun' },
      { day: { bn: 'শনি', en: 'Sat' }, temp: '30° / 22°', icon: 'cloud-sun' },
      { day: { bn: 'রবি', en: 'Sun' }, temp: '31° / 23°', icon: 'sun' },
    ],
  },
  {
    id: 'siliguri',
    name: { bn: 'শিলিগুড়ি', en: 'Siliguri' },
    temp: 27,
    condition: { bn: 'হালকা মেঘ ও মনোরম', en: 'Partly Cloudy' },
    humidity: 65,
    aqi: 45,
    aqiLabel: { bn: 'উত্তম ও নির্মল', en: 'Good (45)' },
    windSpeed: '9 km/h',
    forecast: [
      { day: { bn: 'আজ', en: 'Today' }, temp: '27° / 18°', icon: 'cloud-sun' },
      { day: { bn: 'শুক্র', en: 'Fri' }, temp: '26° / 17°', icon: 'cloud-rain' },
      { day: { bn: 'শনি', en: 'Sat' }, temp: '28° / 18°', icon: 'sun' },
      { day: { bn: 'রবি', en: 'Sun' }, temp: '27° / 17°', icon: 'cloud-sun' },
    ],
  },
  {
    id: 'howrah',
    name: { bn: 'হাওড়া', en: 'Howrah' },
    temp: 31,
    condition: { bn: 'পরিষ্কার আকাশ', en: 'Clear Skies' },
    humidity: 60,
    aqi: 82,
    aqiLabel: { bn: 'স্বাভাবিক', en: 'Moderate (82)' },
    windSpeed: '11 km/h',
    forecast: [
      { day: { bn: 'আজ', en: 'Today' }, temp: '31° / 23°', icon: 'sun' },
      { day: { bn: 'শুক্র', en: 'Fri' }, temp: '32° / 22°', icon: 'sun' },
      { day: { bn: 'শনি', en: 'Sat' }, temp: '31° / 23°', icon: 'cloud-sun' },
      { day: { bn: 'রবি', en: 'Sun' }, temp: '30° / 22°', icon: 'sun' },
    ],
  },
  {
    id: 'asansol',
    name: { bn: 'আসানসোল', en: 'Asansol' },
    temp: 32,
    condition: { bn: 'উজ্জ্বল রোদ', en: 'Bright Sun' },
    humidity: 50,
    aqi: 88,
    aqiLabel: { bn: 'মধ্যম', en: 'Moderate (88)' },
    windSpeed: '14 km/h',
    forecast: [
      { day: { bn: 'আজ', en: 'Today' }, temp: '32° / 21°', icon: 'sun' },
      { day: { bn: 'শুক্র', en: 'Fri' }, temp: '33° / 22°', icon: 'sun' },
      { day: { bn: 'শনি', en: 'Sat' }, temp: '32° / 21°', icon: 'sun' },
      { day: { bn: 'রবি', en: 'Sun' }, temp: '31° / 20°', icon: 'sun' },
    ],
  },
];
