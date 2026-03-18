'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
            {t('contact.badge')}
          </div>
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            {t('contact.title')}
          </h1>
          <p className="text-base text-white/70">
            {t('contact.description')}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-8 hover:border-blue-400/30 transition text-center">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.email')}</h3>
              <a href="mailto:Info@mm-optimus.be" className="text-white/75 hover:text-blue-400 transition-colors text-sm">
                Info@mm-optimus.be
              </a>
            </div>
            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-8 hover:border-blue-400/30 transition text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.phone')}</h3>
              <a href="tel:+15551234567" className="text-white/75 hover:text-blue-400 transition-colors text-sm">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-8 hover:border-blue-400/30 transition text-center">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.location')}</h3>
              <p className="text-white/75 text-sm">Rue Gabrielle Petit 4/3,<br />1080 Bruxelles</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
