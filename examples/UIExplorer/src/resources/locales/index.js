import en from './en';
import zhHans from './zh-Hans';
import zhHant from './zh-Hant';

const locales = {
  en,
  'en-US': en,
  'en-CN': en,
  'zh-CN': zhHans,
  'zh-HK': zhHant,
  'zh-TW': zhHant,
  'zh-Hans': zhHans, // 简体中文
  'zh-Hans-CN': zhHans, // 大陆地区使用的简体中文
  'zh-Hans-HK': zhHans, // 香港地区使用的简体中文
  'zh-Hans-MO': zhHans, // 澳门使用的简体中文
  'zh-Hans-SG': zhHans, // 新加坡使用的简体中文
  'zh-Hans-TW': zhHans, // 台湾使用的简体中文
  'zh-Hant': zhHant, // 繁体中文
  'zh-Hant-CN': zhHant, // 大陆地区使用的繁体中文
  'zh-Hant-HK': zhHant, // 香港地区使用的繁体中文
  'zh-Hant-MO': zhHant, // 澳门使用的繁体中文
  'zh-Hant-SG': zhHant, // 新加坡使用的繁体中文
  'zh-Hant-TW': zhHant, // 台湾使用的繁体中文
};

export default locales;
