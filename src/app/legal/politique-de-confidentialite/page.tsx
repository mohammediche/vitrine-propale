import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

const PolitiqueConfidentialitePage = () => {
  return (
    <AnimatedWrapper className="bg-white dark:bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-100 dark:bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 heading-gradient">
            Politique de Confidentialité
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
                <div className="mb-8">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    KATECH s&apos;engage à ce que la collecte et le traitement de vos données, effectués à partir du site katech.fr, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      1. Collecte des données personnelles
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Les données personnelles collectées dans le cadre des services proposés sur katech.fr sont traitées selon des protocoles sécurisés et permettent à KATECH de gérer les demandes reçues dans ses applications informatiques. Nous collectons les données suivantes : nom, prénom, adresse e-mail, numéro de téléphone via notre formulaire de contact et de prise de rendez-vous.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      2. Finalité du traitement des données
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Les données collectées ont pour finalité :
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>La gestion de la relation client et des demandes d&apos;information.</li>
                      <li>La gestion des prises de rendez-vous.</li>
                      <li>L&apos;envoi d&apos;informations commerciales et de newsletters (avec votre consentement).</li>
                      <li>L&apos;amélioration de nos services et de notre site web.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      3. Droits des utilisateurs
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Conformément à la réglementation, vous disposez d&apos;un droit d&apos;accès, de rectification, de portabilité et de suppression de vos données. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant. Vous pouvez exercer vos droits en nous contactant à l&apos;adresse suivante : dpo@katech.fr.
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

export default PolitiqueConfidentialitePage;