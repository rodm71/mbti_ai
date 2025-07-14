// ✅ Données MBTI détaillées, neutres et professionnelles
// Chaque type inclut :
// - mbti_type : identifiant
// - title : nom brut du type
// - description : texte long et détaillé (pas de surnom)
// - color : couleur pour le design

export const mbtiData = [
  {
    mbti_type: "INTJ",
    title: "INTJ",
    description: `Les INTJ sont des individus indépendants, axés sur la stratégie et la planification à long terme. Ils privilégient la logique, l'analyse et la compréhension systémique des situations. Leur approche pragmatique les pousse à rechercher des solutions efficaces plutôt qu'à suivre les conventions. Ils apprécient la solitude comme espace de réflexion et préfèrent des échanges intellectuels profonds aux interactions superficielles. Bien qu’ils puissent sembler réservés, ils se montrent investis dans leurs projets et loyaux envers leurs proches.`,
    color: "bg-purple-600",
  },
  {
    mbti_type: "INFP",
    title: "INFP",
    description: `Les INFP sont des personnes profondément orientées vers leurs valeurs, avec une forte capacité d’introspection. Ils privilégient l’authenticité et la cohérence personnelle avant tout. Réservés mais chaleureux, ils ont un monde intérieur riche fait d’idées, de principes et de créativité. L’INFP est souvent sensible aux émotions des autres, ce qui se traduit par un intérêt marqué pour les relations humaines et les causes sociales, tout en ayant besoin de préserver un espace personnel.`,
    color: "bg-green-600",
  },
  {
    mbti_type: "ENTJ",
    title: "ENTJ",
    description: `Les ENTJ sont tournés vers l’efficacité et la structuration de leur environnement. Ils possèdent une forte capacité d'organisation, une aisance naturelle dans la prise de décision et un goût prononcé pour la planification stratégique. Leur discours est direct, orienté résultat, et ils apprécient les situations qui demandent de la coordination et du leadership. Sociables mais sélectifs, ils investissent leur énergie dans des projets ambitieux.`,
    color: "bg-red-600",
  },
  {
    mbti_type: "ENFP",
    title: "ENFP",
    description: `Les ENFP sont des personnes ouvertes, enthousiastes et curieuses, attirées par les idées nouvelles et les expériences variées. Ils préfèrent les interactions humaines riches et les discussions authentiques. Leur mode de fonctionnement repose sur l’exploration de concepts, le développement de nouvelles perspectives et la valorisation des émotions, aussi bien chez eux que chez les autres. Ils rejettent la routine et recherchent la stimulation intellectuelle.`,
    color: "bg-orange-500",
  },
  {
    mbti_type: "ISTJ",
    title: "ISTJ",
    description: `Les ISTJ sont des personnalités structurées, méthodiques et fidèles à leurs engagements. Ils privilégient les faits concrets, l'organisation et la rigueur dans leur manière de travailler. Attachés aux traditions et aux responsabilités, ils préfèrent les environnements stables et les procédures bien établies. Réservés et pragmatiques, ils s’impliquent dans leurs tâches avec constance et préfèrent prouver leur engagement par l'action plutôt que par les mots.`,
    color: "bg-blue-600",
  },
  {
    mbti_type: "ISFJ",
    title: "ISFJ",
    description: `Les ISFJ sont discrets et attentifs, orientés vers l’aide aux autres. Ils possèdent une capacité naturelle à identifier les besoins des personnes autour d’eux et à y répondre de manière concrète. Leur approche est pratique, centrée sur la bienveillance et l’accomplissement des tâches. Les ISFJ apprécient la stabilité et se montrent fiables dans leurs engagements, tout en accordant de l’importance aux détails et aux relations humaines.`,
    color: "bg-emerald-600",
  },
  {
    mbti_type: "ESTJ",
    title: "ESTJ",
    description: `Les ESTJ valorisent l’ordre, la structure et la clarté. Dotés d’un sens pratique prononcé, ils sont efficaces dans la gestion d’équipes et la prise de responsabilités. Ils préfèrent les environnements organisés et les règles clairement définies. Leur communication est directe, avec une préférence pour les faits plutôt que pour les opinions subjectives. Ils sont particulièrement orientés vers l’action concrète et les résultats mesurables.`,
    color: "bg-rose-600",
  },
  {
    mbti_type: "ESFJ",
    title: "ESFJ",
    description: `Les ESFJ sont sociables, attentifs aux besoins des autres et cherchent à instaurer des relations harmonieuses dans leur environnement. Ils se montrent attentifs aux conventions sociales et privilégient la cohésion du groupe. Pratiques et fiables, ils aiment rendre service et veillent à ce que chacun se sente respecté et écouté. Ils fonctionnent par l’action, cherchant à maintenir un cadre stable et bienveillant.`,
    color: "bg-amber-500",
  },
  {
    mbti_type: "ISTP",
    title: "ISTP",
    description: `Les ISTP sont analytiques, indépendants et orientés vers la compréhension pratique du monde. Curieux de nature, ils aiment manipuler des objets, expérimenter et trouver des solutions aux problèmes techniques. Leur approche est souvent silencieuse mais efficace, privilégiant l’observation et l’action rapide plutôt que les longues discussions. Ils s’épanouissent dans des environnements qui demandent réactivité et autonomie.`,
    color: "bg-lime-600",
  },
  {
    mbti_type: "ISFP",
    title: "ISFP",
    description: `Les ISFP sont discrets, sensibles et connectés à l'instant présent. Leur fonctionnement est basé sur la recherche d’harmonie, à la fois personnelle et dans leur environnement immédiat. Très attachés à leur liberté, ils préfèrent éviter les conflits et privilégient des actions discrètes mais significatives. Leur sensibilité se manifeste souvent par une expression artistique ou esthétique.`,
    color: "bg-cyan-600",
  },
  {
    mbti_type: "ESTP",
    title: "ESTP",
    description: `Les ESTP sont des personnalités énergiques et pratiques, attirées par les situations dynamiques et concrètes. Ils aiment la spontanéité, réagissent rapidement aux changements et savent improviser avec efficacité. Très sociables, ils apprécient les environnements où l’action est privilégiée par rapport à la réflexion théorique, et où leurs compétences pragmatiques sont valorisées.`,
    color: "bg-violet-600",
  },
  {
    mbti_type: "ESFP",
    title: "ESFP",
    description: `Les ESFP sont extravertis, chaleureux et à l’aise dans les interactions sociales. Ils aiment la variété, les activités ludiques et sont souvent perçus comme des personnes faciles d’accès. Leur priorité est de profiter du moment présent, en créant des expériences plaisantes pour eux et leur entourage. Ils préfèrent les environnements flexibles, vivants et concrets, où ils peuvent exprimer librement leur spontanéité.`,
    color: "bg-fuchsia-600",
  },
  {
    mbti_type: "INFJ",
    title: "INFJ",
    description: `Les INFJ sont réfléchis, discrets et orientés vers des objectifs de long terme. Ils accordent une grande importance à la cohérence personnelle et aux valeurs éthiques. Dotés d’une forte intuition, ils perçoivent souvent les dynamiques sous-jacentes dans leur environnement. Bien qu’introvertis, ils sont capables d’exprimer leurs convictions avec conviction lorsqu'ils jugent cela nécessaire.`,
    color: "bg-teal-600",
  },
  {
    mbti_type: "ENFJ",
    title: "ENFJ",
    description: `Les ENFJ sont des profils tournés vers l’extérieur, orientés vers la compréhension des autres et la coopération collective. Ils savent fédérer les gens autour d'objectifs communs, tout en valorisant l’écoute et l’empathie. Leur communication est fluide, combinant pragmatisme et bienveillance, avec une attention particulière portée à la dynamique du groupe.`,
    color: "bg-yellow-500",
  },
  {
    mbti_type: "ENTP",
    title: "ENTP",
    description: `Les ENTP aiment explorer de nouvelles idées, expérimenter et remettre en question les schémas établis. Ils fonctionnent par stimulation intellectuelle, sont curieux et apprécient les débats. Ils préfèrent l’innovation à la routine et aiment évoluer dans des contextes changeants. Leur énergie est dirigée vers l’exploration intellectuelle et les échanges stimulants.`,
    color: "bg-pink-500",
  },
  {
    mbti_type: "ENFP",
    title: "ENFP",
    description: `Les ENFP sont enthousiastes, orientés vers les idées et les expériences humaines. Ils sont dynamiques, curieux et attachés à leur liberté d’action. Ils privilégient l’expression personnelle et la connexion émotionnelle avec les autres. Leur énergie est tournée vers la découverte de nouveaux projets et de nouvelles personnes, avec une approche spontanée de la vie.`,
    color: "bg-orange-500",
  }
];
