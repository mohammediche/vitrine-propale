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
      question: "Quels sont vos domaines d'expertise ?",
      answer: "Nous couvrons 6 pôles d'expertise : Structuration & Jeune entreprise, Conseil & Audit, Services Informatiques, Robot Intelligent, Formation, et Marketing & Communication."
    },
    {
      question: "Comment se déroule un accompagnement ?",
      answer: "Notre approche est personnalisée : analyse de votre situation, définition d'objectifs, mise en place d'une stratégie sur-mesure et suivi régulier."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs varient selon la complexité du projet et la durée d'accompagnement. Nous proposons un audit gratuit pour évaluer vos besoins."
    }
  ],
  processus: [
    {
      question: "Combien de temps dure un accompagnement ?",
      answer: "La durée varie selon vos objectifs : de quelques semaines pour un audit ponctuel à plusieurs mois pour un accompagnement complet."
    },
    {
      question: "Comment mesurez-vous les résultats ?",
      answer: "Nous définissons des KPIs clairs dès le début et effectuons des suivis réguliers pour mesurer l'impact de nos recommandations."
    },
    {
      question: "Proposez-vous un suivi post-accompagnement ?",
      answer: "Oui, nous restons disponibles pour des questions ponctuelles et proposons des sessions de suivi selon vos besoins."
    }
  ],
  activites: [
    {
      question: "Dans quels secteurs intervenez-vous ?",
      answer: "Nous intervenons dans tous les secteurs : tech, retail, services, industrie, etc. Notre expertise est transversale et adaptable."
    },
    {
      question: "Travaillez-vous avec des startups ?",
      answer: "Absolument ! Nous accompagnons de nombreuses startups dans leur développement, de la création à la levée de fonds."
    },
    {
      question: "Intervenez-vous à l'international ?",
      answer: "Oui, nous avons une expérience internationale et pouvons vous accompagner dans vos projets d'expansion à l'étranger."
    }
  ]
};