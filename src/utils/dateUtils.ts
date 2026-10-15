// Asia/Kolkata time and Bengali digit conversion helpers

export function toBengaliDigits(num: number | string): string {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, (digit) => bengaliDigits[Number(digit)]);
}

export function getKolkataDateTime(lang: 'bn' | 'en'): {
  dateString: string;
  timeString: string;
  bengaliCalendarDate: string;
} {
  const now = new Date();

  // Asia/Kolkata timezone formatting
  const optionsDate: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const optionsTime: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  const timeFormatted = new Intl.DateTimeFormat('en-US', optionsTime).format(now);

  if (lang === 'bn') {
    const dayNames: { [key: string]: string } = {
      Sunday: 'রবিবার',
      Monday: 'সোমবার',
      Tuesday: 'মঙ্গলবার',
      Wednesday: 'বুধবার',
      Thursday: 'বৃহস্পতিবার',
      Friday: 'শুক্রবার',
      Saturday: 'শনিবার',
    };

    const monthNames: { [key: string]: string } = {
      January: 'জানুয়ারি',
      February: 'ফেব্রুয়ারি',
      March: 'মার্চ',
      April: 'এপ্রিল',
      May: 'মে',
      June: 'জুন',
      July: 'জুলাই',
      August: 'আগস্ট',
      September: 'সেপ্টেম্বর',
      October: 'অক্টোবর',
      November: 'নভেম্বর',
      December: 'ডিসেম্বর',
    };

    const dayNameEng = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', weekday: 'long' }).format(now);
    const dayNum = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', day: 'numeric' }).format(now);
    const monthNameEng = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', month: 'long' }).format(now);
    const yearNum = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', year: 'numeric' }).format(now);

    const bnDayName = dayNames[dayNameEng] || dayNameEng;
    const bnMonthName = monthNames[monthNameEng] || monthNameEng;
    const bnDateStr = `${bnDayName}, ${toBengaliDigits(dayNum)} ${bnMonthName} ${toBengaliDigits(yearNum)}`;

    const bnTimeStr = toBengaliDigits(timeFormatted);

    return {
      dateString: bnDateStr,
      timeString: `${bnTimeStr} (IST)`,
      bengaliCalendarDate: '৩০ আশ্বিন ১৪৩৩ বঙ্গাব্দ | শরৎকাল',
    };
  }

  const enDateStr = new Intl.DateTimeFormat('en-US', optionsDate).format(now);
  return {
    dateString: enDateStr,
    timeString: `${timeFormatted} IST`,
    bengaliCalendarDate: '30 Ashwin 1433 Bangabda (Autumn)',
  };
}

export function formatArticleDate(isoDateStr: string, lang: 'bn' | 'en'): string {
  try {
    const d = new Date(isoDateStr);
    if (lang === 'bn') {
      const day = toBengaliDigits(d.getDate());
      const months = ['জানু', 'ফেব্রু', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টে', 'অক্টো', 'নভে', 'ডিসে'];
      const month = months[d.getMonth()];
      const year = toBengaliDigits(d.getFullYear());
      let hours = d.getHours();
      const minutes = toBengaliDigits(d.getMinutes().toString().padStart(2, '0'));
      const ampm = hours >= 12 ? 'বিকাল/রাত' : 'সকাল';
      hours = hours % 12 || 12;
      return `${day} ${month} ${year}, ${ampm} ${toBengaliDigits(hours)}:${minutes}`;
    }
    return d.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return isoDateStr;
  }
}
