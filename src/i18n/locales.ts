export const languages = {
  it: 'Italiano',
  en: 'English',
} as const;

export const defaultLang = 'it' as const;

export const translations = {
  it: {
    welcome: 'Ciao!',
    about_me: `Sono Andrea Petreti, Software Engineer presso PagoPA S.p.A.

Ho conseguito la laurea triennale in Informatica Applicata presso Urbino,
ho in seguito deciso di approfondire il percorso di studi con una laurea magistrale in
Ingegneria e Scienze Informatiche presso l'Università di Bologna (sede Cesena).
Durante quest'ultimo percorso ho deciso di focalizzarmi verso il mondo dell'ingegneria del software;
amo la qualità del codice. Il percorso di studi, inoltre, mi ha consentito di acquisire abilità relative alla Computer Vision
sia mediante tecniche tradizionali sia tramite machine learning.
Sono particolarmente appassionato al mondo relativo all'IoT, alla robotica e all'intelligenza artificiale.
In generale mi diverto con ogni sfida relativa al mondo dell'IT.`,
    project_page_title: 'Progetti',
    project_page_description: 'Alcuni dei miei progetti o al quale ho collaborato',
    menu_home: 'Home',
    menu_projects: 'Progetti',
    menu_blog: 'Blog',
    menu_cv: 'Curriculum',
    actual_job_label: 'Attualmente',
  },
  en: {
    welcome: 'Hello!',
    about_me: `I'm Andrea Petreti, Software Engineer at PagoPA S.p.A.

I got my bachelor degree in Applied Informatics at Urbino University;
later I decided to deepen my studies with a master degree in
Engineering and Computer Science at the University of Bologna (at Cesena).
During this last path I decided to focus on the world of software engineering;
I love the quality of the code.
The course of study also allowed me to acquire skills related to
Computer Vision both through traditional techniques and through machine learning.
I'm particularly passionate about the world related to IoT,
robotics and artificial intelligence.
I enjoy any challenge related to the IT world.`,
    project_page_title: 'Projects',
    project_page_description: 'Some of my projects or to which I have contributed',
    menu_home: 'Home',
    menu_projects: 'Projects',
    menu_blog: 'Blog',
    menu_cv: 'Curriculum',
    actual_job_label: 'Now',
  },
} as const;

export type Language = keyof typeof languages;
export type TranslationKey = keyof typeof translations['it'];

export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}
