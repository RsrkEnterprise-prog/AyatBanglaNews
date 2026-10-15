import React, { useState } from 'react';
import { CloudSun, Sun, Wind, Droplets, Gauge, MapPin, AlertCircle, RefreshCw } from 'lucide-react';
import { WEATHER_CITIES_DATA } from '../data/newsData';
import { Language, WeatherCity } from '../types';

interface WeatherSectionProps {
  language: Language;
}

export const WeatherSection: React.FC<WeatherSectionProps> = ({ language }) => {
  const [selectedCity, setSelectedCity] = useState<WeatherCity>(WEATHER_CITIES_DATA[0]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Weather Header */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-950 text-white p-6 sm:p-8 border border-sky-800 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold uppercase tracking-wider">
              <CloudSun className="w-4 h-4 text-sky-400" />
              <span>{language === 'bn' ? 'আলিপুর ও পশ্চিমবঙ্গ আবহাওয়া রাডার' : 'Alipore Met & Bengal Weather'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-bengali">
              {language === 'bn' ? 'কলকাতা ও জেলার আবহাওয়া পূর্বাভাস' : 'Kolkata & District Weather Station'}
            </h2>
            <p className="text-xs sm:text-sm text-sky-200">
              {language === 'bn'
                ? 'সর্বশেষ তাপমাত্রা, বাতাসের আর্দ্রতা, বায়ুর মান (AQI) এবং আগামী দিনের পূর্বাভাস।'
                : 'Current temperatures, atmospheric moisture, air quality index, and weekly outlook.'}
            </p>
          </div>

          <button
            onClick={handleRefresh}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-sky-800/80 hover:bg-sky-700 text-xs font-bold transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{language === 'bn' ? 'রিফ্রেশ' : 'Refresh'}</span>
          </button>
        </div>

        {/* City selection buttons */}
        <div className="flex flex-wrap gap-2 mt-6">
          {WEATHER_CITIES_DATA.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-1.5 ${
                selectedCity.id === city.id
                  ? 'bg-white text-blue-950 shadow-md ring-2 ring-sky-400'
                  : 'bg-sky-950/70 hover:bg-sky-900 text-sky-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{city.name[language]}</span>
              <span className="font-mono text-amber-300 font-extrabold">{city.temp}°C</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected City Main Weather Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left: Current Conditions Card (7 cols) */}
        <div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {language === 'bn' ? 'বর্তমান আবহাওয়া' : 'Current Conditions'}
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1 font-bengali">
                {selectedCity.name[language]}
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                {selectedCity.condition[language]}
              </p>
            </div>

            <div className="text-right">
              <div className="text-5xl sm:text-6xl font-black text-red-600 dark:text-red-500 tracking-tight">
                {selectedCity.temp}°<span className="text-2xl font-normal text-slate-500">C</span>
              </div>
              <span className="text-xs text-slate-500">
                {language === 'bn' ? 'অনুভূত: ' : 'Feels like: '} {selectedCity.temp + 1}°C
              </span>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-3 gap-3 my-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Droplets className="w-3.5 h-3.5 text-blue-500" />
                <span>{language === 'bn' ? 'আর্দ্রতা' : 'Humidity'}</span>
              </div>
              <div className="text-lg font-black text-slate-800 dark:text-slate-200 font-mono">
                {selectedCity.humidity}%
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Wind className="w-3.5 h-3.5 text-teal-500" />
                <span>{language === 'bn' ? 'বাতাসের গতি' : 'Wind'}</span>
              </div>
              <div className="text-lg font-black text-slate-800 dark:text-slate-200 font-mono">
                {selectedCity.windSpeed}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Gauge className="w-3.5 h-3.5 text-amber-500" />
                <span>{language === 'bn' ? 'বায়ু মান (AQI)' : 'Air Quality'}</span>
              </div>
              <div className="text-lg font-black text-amber-600 dark:text-amber-400 font-mono">
                {selectedCity.aqi}
              </div>
            </div>
          </div>

          {/* Alipore Advisory note */}
          <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs text-blue-900 dark:text-blue-200 flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              {language === 'bn'
                ? 'আলিপুর দফতরের সতর্কতা: বাতাসে আর্দ্রতা স্বাভাবিক রয়েছে, সকালে ও সন্ধ্যায় মনোরম আমেজ বজায় থাকবে।'
                : 'Alipore Met Advisory: Moderate humidity ensures comfortable outdoor conditions.'}
            </span>
          </div>
        </div>

        {/* Right: 4-Day Forecast Grid (5 cols) */}
        <div className="md:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white font-bengali mb-4 flex items-center space-x-2">
              <Sun className="w-4 h-4 text-amber-500" />
              <span>{language === 'bn' ? '৪ দিনের আবহাওয়া পূর্বাভাস' : '4-Day District Forecast'}</span>
            </h4>

            <div className="space-y-3">
              {selectedCity.forecast.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800"
                >
                  <div className="flex items-center space-x-3">
                    <CloudSun className="w-5 h-5 text-amber-500" />
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm font-bengali">
                      {item.day[language]}
                    </span>
                  </div>
                  <div className="font-mono font-bold text-slate-700 dark:text-slate-300 text-sm">
                    {item.temp}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 text-center">
            {language === 'bn'
              ? 'উৎস: আঞ্চলিক আবহাওয়া কেন্দ্র, আলিপুর, কলকাতা (নমুনা ড্যাশবোর্ড)'
              : 'Source: Regional Meteorological Centre, Alipore, Kolkata (Demo Station)'}
          </div>
        </div>
      </div>
    </div>
  );
};
