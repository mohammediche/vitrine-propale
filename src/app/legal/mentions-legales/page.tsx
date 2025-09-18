import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

const MentionsLegalesPage = () => {
  return (
    <AnimatedWrapper className="bg-white dark:bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-100 dark:bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 heading-gradient">
            Mentions Légales
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Informations légales
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      1. Éditeur du site
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>KATECH SAS</strong></li>
                      <li>Société par actions simplifiée au capital de 100 000 &euro;</li>
                      <li>Siège social : 123 Avenue des Champs-&Eacute;lysées, 75008 Paris, France</li>
                      <li>RCS Paris : 123 456 789</li>
                      <li>Numéro de TVA intracommunautaire : FR00123456789</li>
                      <li>Email : contact@katech.fr</li>
                      <li>Téléphone : +33 6 52 50 09 27</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      2. Directeur de la publication
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Le directeur de la publication est Monsieur Jean Dupont, en sa qualité de Président de KATECH SAS.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      3. Hébergement du site
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Le site est hébergé par :
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Vercel Inc.</strong></li>
                      <li>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
                      <li>Contact : <a href="https://vercel.com/contact" className="text-blue-600 dark:text-accent-electric-blue hover:underline">https://vercel.com/contact</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      4. Propriété intellectuelle
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
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

export default MentionsLegalesPage;