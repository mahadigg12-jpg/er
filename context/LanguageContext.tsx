'use client'

import { createContext, useContext, useState } from 'react'

type Language = 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const translations = {
  en: {
    'nav.login': 'Login',
    'nav.contact': 'Contact',
    'hero.title': 'Are You a Contact Hero?',
    'hero.subtitle': 'Premium remote-first call center & customer experience solutions',
    'hero.cta': 'Get Started',
    'hero.learn': 'Learn More',
    'services.title': 'Our Services',
    'services.inbound': 'Inbound Support',
    'services.inbound.desc': 'Professional customer support for your business',
    'services.outbound': 'Outbound Campaigns',
    'services.outbound.desc': 'Strategic outreach and lead generation',
    'services.technical': 'Technical Support',
    'services.technical.desc': 'Expert technical assistance for your customers',
    'services.specialized': 'Specialized Services',
    'services.specialized.desc': 'Custom solutions tailored to your needs',
    'flexibility.title': 'Work Anywhere, Anytime',
    'flexibility.subtitle': 'Flexible remote work solutions designed for modern teams',
    'flexibility.cta': 'Explore Opportunities',
    'welcome.title': 'Welcome Everyone!',
    'welcome.subtitle': 'We love diversity and inclusion',
    'welcome.value1': 'Inclusive Culture',
    'welcome.value1.desc': 'We celebrate diverse backgrounds and perspectives',
    'welcome.value2': 'Growth & Development',
    'welcome.value2.desc': 'Continuous learning and career advancement',
    'welcome.value3': 'Work-Life Balance',
    'welcome.value3.desc': 'Flexible schedules that work for you',
    'welcome.value4': 'Community & Support',
    'welcome.value4.desc': 'Strong team support and collaboration',
    'usp.title': 'Why Choose Us?',
    'usp.reason1': 'Industry Expertise',
    'usp.reason1.desc': 'Years of experience in customer service excellence',
    'usp.reason2': 'Advanced Technology',
    'usp.reason2.desc': 'Cutting-edge tools and platforms',
    'usp.reason3': 'Dedicated Support',
    'usp.reason3.desc': '24/7 support for our partners',
    'usp.reason4': 'Proven Results',
    'usp.reason4.desc': 'Consistent track record of success',
    'results.title': 'Our Impact',
    'results.stat1': '5000+',
    'results.stat1.label': 'Active Agents',
    'results.stat2': '98%',
    'results.stat2.label': 'Client Satisfaction',
    'results.stat3': '50+',
    'results.stat3.label': 'Countries Served',
    'results.stat4': '24/7',
    'results.stat4.label': 'Support Available',
    'team.title': 'Team Heroes',
    'team.subtitle': 'Meet the experts leading our mission',
    'recruitment.title': 'We Need Heroes!',
    'recruitment.subtitle': 'Join our team and make a difference',
    'recruitment.benefits': 'Competitive salary, flexible hours, global team',
    'recruitment.cta': 'Apply Now',
    'contact.title': 'Let\'s Talk',
    'contact.subtitle': 'Have questions? Get in touch with our team',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.company': 'Your Company',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.sent': '✓ Message Sent!',
    'newsletter.title': 'Stay Updated',
    'newsletter.subtitle': 'Subscribe to our latest news and updates',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': 'All rights reserved',
  },
  de: {
    'nav.login': 'Anmelden',
    'nav.contact': 'Kontakt',
    'hero.title': 'Bist du ein Contact Hero?',
    'hero.subtitle': 'Premium Remote-First Call Center & Kundenerlebnis-Lösungen',
    'hero.cta': 'Jetzt starten',
    'hero.learn': 'Mehr erfahren',
    'services.title': 'Unsere Services',
    'services.inbound': 'Inbound-Support',
    'services.inbound.desc': 'Professioneller Kundenservice für dein Unternehmen',
    'services.outbound': 'Outbound-Kampagnen',
    'services.outbound.desc': 'Strategische Reichweite und Lead-Generierung',
    'services.technical': 'Technischer Support',
    'services.technical.desc': 'Fachkundige technische Unterstützung',
    'services.specialized': 'Spezialisierte Services',
    'services.specialized.desc': 'Maßgeschneiderte Lösungen für deine Bedürfnisse',
    'flexibility.title': 'Arbeite überall, jederzeit',
    'flexibility.subtitle': 'Flexible Remote-Work-Lösungen für moderne Teams',
    'flexibility.cta': 'Chancen erkunden',
    'welcome.title': 'Willkommen an alle!',
    'welcome.subtitle': 'Wir lieben Vielfalt und Inklusion',
    'welcome.value1': 'Inklusive Kultur',
    'welcome.value1.desc': 'Wir feiern vielfältige Perspektiven und Hintergründe',
    'welcome.value2': 'Wachstum & Entwicklung',
    'welcome.value2.desc': 'Kontinuierliches Lernen und Karriereentwicklung',
    'welcome.value3': 'Work-Life-Balance',
    'welcome.value3.desc': 'Flexible Arbeitszeiten, die zu dir passen',
    'welcome.value4': 'Gemeinschaft & Unterstützung',
    'welcome.value4.desc': 'Starke Team-Unterstützung und Zusammenarbeit',
    'usp.title': 'Warum uns wählen?',
    'usp.reason1': 'Branchenexpertise',
    'usp.reason1.desc': 'Jahre an Erfahrung in Kundenservice-Exzellenz',
    'usp.reason2': 'Fortgeschrittene Technologie',
    'usp.reason2.desc': 'Modernste Tools und Plattformen',
    'usp.reason3': 'Dedizierter Support',
    'usp.reason3.desc': '24/7 Unterstützung für unsere Partner',
    'usp.reason4': 'Bewährte Ergebnisse',
    'usp.reason4.desc': 'Konsistente Erfolgsgeschichte',
    'results.title': 'Unsere Wirkung',
    'results.stat1': '5000+',
    'results.stat1.label': 'Aktive Agenten',
    'results.stat2': '98%',
    'results.stat2.label': 'Kundenzufriedenheit',
    'results.stat3': '50+',
    'results.stat3.label': 'Länder beliefert',
    'results.stat4': '24/7',
    'results.stat4.label': 'Support verfügbar',
    'team.title': 'Team Heroes',
    'team.subtitle': 'Treffen Sie die Experten, die unsere Mission anführen',
    'recruitment.title': 'Wir brauchen Heroes!',
    'recruitment.subtitle': 'Treten Sie unserem Team bei und machen Sie einen Unterschied',
    'recruitment.benefits': 'Wettbewerbsfähiges Gehalt, flexible Arbeitszeiten, globales Team',
    'recruitment.cta': 'Jetzt bewerben',
    'contact.title': 'Lass uns reden',
    'contact.subtitle': 'Hast du Fragen? Kontaktiere unser Team',
    'contact.name': 'Dein Name',
    'contact.email': 'Deine E-Mail',
    'contact.company': 'Dein Unternehmen',
    'contact.message': 'Deine Nachricht',
    'contact.submit': 'Nachricht senden',
    'contact.sent': '✓ Nachricht versendet!',
    'newsletter.title': 'Bleib auf dem Laufenden',
    'newsletter.subtitle': 'Abonniere unsere neuesten Nachrichten und Updates',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.copyright': 'Alle Rechte vorbehalten',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
