import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

const PolitiqueCookiesPage = () => {
  return (
    <AnimatedWrapper className="bg-white dark:bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-100 dark:bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 heading-gradient">
            Politique de Cookies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Dernière mise à jour : 2 septembre 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 shadow-sm">
              <div className="prose dark:prose-invert max-w-none">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Qu&apos;est-ce qu&apos;un cookie ?
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d&apos;un site ou de la consultation d&apos;une publicité. Ils ont notamment pour but de collecter des informations relatives à votre navigation sur les sites et de vous adresser des services personnalisés.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Les cookies utilisés sur notre site
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Notre site utilise les types de cookies suivants :
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Cookies de fonctionnalité
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Ces cookies permettent au site de se souvenir de vos choix (comme le thème clair/sombre) pour fournir une expérience plus personnelle.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Cookies analytiques
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Nous utilisons des cookies pour recueillir des informations sur l&apos;utilisation du site afin d&apos;améliorer son contenu, de le rendre plus adapté aux besoins des visiteurs et d&apos;accroître sa convivialité. Ces données sont anonymisées.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Gestion des cookies
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Vous pouvez à tout moment choisir de désactiver ces cookies. Votre navigateur peut également être paramétré pour vous signaler les cookies qui sont déposés dans votre ordinateur et vous demander de les accepter ou non. Vous pouvez accepter ou refuser les cookies au cas par cas ou bien les refuser systématiquement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default PolitiqueCookiesPage;