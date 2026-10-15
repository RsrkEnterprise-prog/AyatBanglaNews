export type Language = 'bn' | 'en';

export type CategoryId =
  | 'all'
  | 'west-bengal'
  | 'kolkata'
  | 'india'
  | 'world'
  | 'politics'
  | 'education-jobs'
  | 'govt-schemes'
  | 'business'
  | 'tech-ai'
  | 'sports'
  | 'entertainment'
  | 'weather';

export interface LocalizedString {
  bn: string;
  en: string;
}

export interface LocalizedArray {
  bn: string[];
  en: string[];
}

export interface NewsAuthor {
  name: LocalizedString;
  role: LocalizedString;
  avatar: string;
}

export interface NewsArticle {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedArray;
  category: CategoryId;
  author: NewsAuthor;
  publishedAt: string; // ISO or human format
  readTime: LocalizedString;
  imageUrl: string;
  imageCaption: LocalizedString;
  isBreaking?: boolean;
  isHero?: boolean;
  isTrending?: boolean;
  isTechBlog?: boolean;
  tags: LocalizedArray;
  location?: LocalizedString;
  source?: LocalizedString;
}

export interface GovtScheme {
  id: string;
  name: LocalizedString;
  tagline: LocalizedString;
  targetGroup: LocalizedString;
  benefits: LocalizedString;
  eligibility: LocalizedArray;
  documents: LocalizedArray;
  officialPortal: string;
}

export interface WeatherCity {
  id: string;
  name: LocalizedString;
  temp: number;
  condition: LocalizedString;
  humidity: number;
  aqi: number;
  aqiLabel: LocalizedString;
  windSpeed: string;
  forecast: {
    day: LocalizedString;
    temp: string;
    icon: string;
  }[];
}
