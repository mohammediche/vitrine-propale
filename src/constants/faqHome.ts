export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  [key: string]: FAQItem[];
}

export const faqHomepage: FAQCategory = {
  services: [
    {
      question: "Quels types d'entreprises accompagnez-vous ?",
      answer: "Nous accompagnons principalement les startups en phase de croissance, les PME en transformation et les entrepreneurs avec des projets innovants. Notre expertise couvre tous les secteurs, avec une spécialisation dans la tech, la fintech, la medtech et les cleantech."
    },
    {
      question: "Quel est le ticket d'entrée pour vos services ?",
      answer: "Nos accompagnements démarrent généralement à partir de 50K€ pour les missions stratégiques. Cependant, nous proposons également des audits gratuits et des consultations ponctuelles pour les projets plus modestes."
    },
    {
      question: "Proposez-vous du financement direct ?",
      answer: "Oui, en tant que Business Angels, nous investissons directement dans les projets que nous accompagnons. Nos tickets d'investissement vont de 100K€ à 2M€, selon la maturité et le potentiel du projet."
    }
  ],
  processus: [
    {
      question: "Combien de temps dure un accompagnement typique ?",
      answer: "La durée varie selon les besoins : de 3 mois pour un audit et plan stratégique, à 18-24 mois pour un accompagnement complet incluant levée de fonds et scaling. Nous adaptons toujours la durée aux objectifs spécifiques."
    },
    {
      question: "Comment se déroule l'audit initial ?",
      answer: "L'audit dure 2-3 semaines et comprend : analyse financière, étude de marché, audit opérationnel, évaluation de l'équipe et benchmark concurrentiel. Vous recevez un rapport détaillé avec recommandations prioritaires."
    },
    {
      question: "Quel est votre taux de réussite ?",
      answer: "85% de nos clients atteignent leurs objectifs de croissance dans les délais fixés. 92% des levées de fonds que nous accompagnons aboutissent avec succès, souvent au-dessus des montants initialement visés."
    }
  ],
  activites: [
    {
      question: "Dans quels pays intervenez-vous ?",
      answer: "Nous opérons principalement en France, Belgique, Suisse et Luxembourg. Pour l'expansion internationale, nous accompagnons nos clients vers l'Europe, l'Amérique du Nord et l'Asie via notre réseau de partenaires."
    },
    {
      question: "Avez-vous des spécialisations sectorielles ?",
      answer: "Nos expertises principales couvrent la fintech, medtech, cleantech, SaaS B2B, e-commerce et marketplace. Nous avons également une forte expérience en transformation digitale tous secteurs confondus."
    },
    {
      question: "Proposez-vous de la formation ?",
      answer: "Oui, nous organisons des masterclass pour dirigeants, des workshops stratégiques et du coaching individuel. Nos formations couvrent le leadership, la levée de fonds, le scaling et la transformation digitale."
    }
  ]
};