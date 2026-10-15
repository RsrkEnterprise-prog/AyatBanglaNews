import React, { useState, useEffect } from 'react';
import { Flame, Pause, Play, ChevronLeft, ChevronRight, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { BREAKING_NEWS } from '../data/newsData';

interface BreakingTickerProps {
  language: Language;
  onSelectBreakingItem?: (id: string) => void;
}

export const BreakingTicker: React.FC<BreakingTickerProps> = ({
  language,
  onSelectBreakingItem,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BREAKING_NEWS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? BREAKING_NEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BREAKING_NEWS.length);
  };

  const currentItem = BREAKING_NEWS[currentIndex];

  return (
    <div className="w-full bg-red-600 text-white shadow-sm overflow-hidden border-b border-red-700">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Badge: Breaking News */}
        <div className="flex items-center space-x-2 shrink-0">
          <div className="flex items-center space-x-1.5 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
            <Flame className="w-4 h-4 text-amber-300 animate-pulse" />
            <span className="font-black text-xs sm:text-sm tracking-wider uppercase font-bengali">
              {language === 'bn' ? 'তাজা খবর' : 'BREAKING'}
            </span>
          </div>

          {/* Sample News Badge */}
          <span className="hidden md:inline-flex items-center space-x-1 text-[11px] bg-red-800/80 px-2 py-0.5 rounded text-red-100 font-medium">
            <ShieldAlert className="w-3 h-3 text-amber-300" />
            <span>{language === 'bn' ? 'নমুনা লাইভ আপডেট' : 'Sample Live Feed'}</span>
          </span>
        </div>

        {/* Center: Active Headline with transition */}
        <div
          className="flex-1 overflow-hidden cursor-pointer"
          onClick={() => onSelectBreakingItem && onSelectBreakingItem(currentItem.id)}
          title={language === 'bn' ? 'বিস্তারিত পড়তে ক্লিক করুন' : 'Click to read full story'}
        >
          <div className="text-xs sm:text-sm font-semibold truncate hover:underline transition-all">
            {currentItem.text[language]}
          </div>
        </div>

        {/* Right: Controls (Pause/Play, Arrows) */}
        <div className="flex items-center space-x-1 shrink-0 bg-red-700/60 rounded px-1.5 py-0.5">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 hover:bg-red-800 rounded text-red-100 hover:text-white transition-colors"
            title={isPaused ? 'Play Ticker' : 'Pause Ticker'}
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          </button>
          <button
            onClick={handlePrev}
            className="p-1 hover:bg-red-800 rounded text-red-100 hover:text-white transition-colors"
            title="Previous headline"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 hover:bg-red-800 rounded text-red-100 hover:text-white transition-colors"
            title="Next headline"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
