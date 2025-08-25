import { Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function AboutContent() {
  const { t } = useTranslation();

  return (
    <div className="min-h-svh bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('pages.about.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-center mb-8">
              {t('pages.about.subtitle')}
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('pages.about.mission.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('pages.about.mission.description')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('pages.about.whatWeDo.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('pages.about.whatWeDo.description')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t('pages.about.howItWorks.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('pages.about.howItWorks.description')}
                </p>
              </section>

              {/* GitHub Repositories Section */}
              <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  Code Source
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://github.com/Bspot-api/b-spot-frontend" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="font-medium">Frontend</span>
                  </a>
                  <a 
                    href="https://github.com/Bspot-api/b-spot-api" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="font-medium">API</span>
                  </a>
                </div>
              </section>

              <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                  {t('pages.about.underConstruction.title')}
                </h2>
                <p className="text-blue-700 mb-4">
                  {t('pages.about.underConstruction.description')}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-blue-800">
                      {t('pages.about.underConstruction.features.title')}
                    </h3>
                    <ul className="text-blue-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {t('pages.about.underConstruction.features.suggestions')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {t('pages.about.underConstruction.features.reporting')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {t('pages.about.underConstruction.features.aiUpdates')}
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-blue-800">
                      {t('pages.about.underConstruction.mobile.title')}
                    </h3>
                    <ul className="text-blue-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {t('pages.about.underConstruction.mobile.scanner')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {t('pages.about.underConstruction.mobile.accounts')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {t('pages.about.underConstruction.mobile.preferences')}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
