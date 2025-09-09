import AnimatedWrapper from '@/components/ui/AnimatedWrapper';

const RGPDPage = () => {
  return (
    <AnimatedWrapper className="bg-white dark:bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-100 dark:bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 heading-gradient">
            Conformité RGPD
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
                      Notre engagement envers le RGPD
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Le Règlement Général sur la Protection des Données (RGPD) est une priorité pour KATECH. Nous nous engageons à protéger les données personnelles de nos utilisateurs et à être transparents sur la manière dont nous les collectons, les utilisons et les protégeons.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Responsable du traitement (DPO)
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      KATECH a désigné un Délégué à la Protection des Données (DPO) qui est chargé de veiller à la conformité de nos traitements de données. Pour toute question relative à vos données personnelles, vous pouvez le contacter à l&apos;adresse suivante : dpo@katech.fr.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Vos droits
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Conformément au RGPD, vous disposez des droits suivants :
                    </p>
                    
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li><strong>Droit d&apos;accès :</strong> Le droit de savoir quelles données nous détenons sur vous.</li>
                      <li><strong>Droit de rectification :</strong> Le droit de corriger des données inexactes.</li>
                      <li><strong>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;) :</strong> Le droit de demander la suppression de vos données.</li>
                      <li><strong>Droit à la limitation du traitement :</strong> Le droit de restreindre l&apos;utilisation de vos données.</li>
                      <li><strong>Droit à la portabilité des données :</strong> Le droit de recevoir vos données dans un format structuré et de les transférer.</li>
                      <li><strong>Droit d&apos;opposition :</strong> Le droit de vous opposer à certains traitements.</li>
                    </ul>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                      Pour exercer ces droits, veuillez contacter notre DPO.
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

export default RGPDPage;