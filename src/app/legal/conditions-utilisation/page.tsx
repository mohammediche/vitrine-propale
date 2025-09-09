import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

const ConditionsUtilisationPage = () => {
  return (
    <AnimatedWrapper className="bg-white dark:bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-100 dark:bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 heading-gradient">
            Conditions d&apos;Utilisation
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
                      Article 1 : Objet
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les modalités de mise à disposition du site katech.fr et les conditions d&apos;utilisation du service par l&apos;Utilisateur.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Article 2 : Accès au site
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l&apos;Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Article 3 : Responsabilité
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Les sources des informations diffusées sur le site katech.fr sont réputées fiables mais le site ne garantit pas qu&apos;il soit exempt de défauts, d&apos;erreurs ou d&apos;omissions. KATECH ne pourra être tenu responsable des dommages directs et indirects consécutifs à l&apos;utilisation du site.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Article 4 : Liens hypertextes
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Des liens hypertextes peuvent être présents sur le site. L&apos;Utilisateur est informé qu&apos;en cliquant sur ces liens, il sortira du site katech.fr. Ce dernier n&apos;a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
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

export default ConditionsUtilisationPage;