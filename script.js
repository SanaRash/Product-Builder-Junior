const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");
const modal = document.querySelector("#project-modal");
const modalVisual = document.querySelector("#modal-visual");
const modalCategory = document.querySelector("#modal-category");
const modalStatus = document.querySelector("#modal-status");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalProblem = document.querySelector("#modal-problem");
const modalSolution = document.querySelector("#modal-solution");
const modalImpact = document.querySelector("#modal-impact");
const modalTools = document.querySelector("#modal-tools");
const modalGallery = document.querySelector("#modal-gallery");

const projectDetails = {
  "rx-contracts": {
    title: "RX Contracts",
    category: "Outil interne · Gestion documentaire · Alertes",
    status: "Projet réalisé",
    visual: "linear-gradient(135deg, #2563eb, #06b6d4)",
    description: "Plateforme interne permettant de centraliser contrats, documents, prestataires, sites, litiges, sinistres, impayés et alertes dans une organisation multi-sites.",
    problem: "Les équipes avaient besoin d'un outil centralisé pour suivre les contrats, éviter les oublis d'échéances, gérer les documents et structurer les dossiers.",
    solution: "Création d'une plateforme avec dashboard, filtres, gestion documentaire et alertes selon les dates importantes.",
    impact: "Meilleur suivi administratif, réduction des oublis, gain de temps et centralisation de l'information.",
    tools: ["Django", "Python", "Dashboard", "Alertes", "Gestion documentaire"],
    gallery: [
      { type: "image", src: "images/rx-contracts-1.png", alt: "Dashboard RX Contracts" },
      { type: "image", src: "images/rx-contracts-2.png", alt: "Administration RX Contracts" },
      { type: "image", src: "images/rx-contracts-3.png", alt: "Centre d'alertes RX Contracts" }
    ]
  },
  "rib-generator": {
    title: "RIB Generator",
    category: "Automatisation · Comptabilité · Productivité",
    status: "Projet réalisé",
    visual: "linear-gradient(135deg, #059669, #14b8a6)",
    description: "Application desktop qui automatise la génération de fichiers bancaires structurés au format attendu par un logiciel comptable.",
    problem: "La génération manuelle pouvait entraîner des erreurs de saisie, une perte de temps et des fichiers non conformes.",
    solution: "Création d'une interface simple pour saisir les informations bancaires et générer automatiquement un fichier TXT conforme.",
    impact: "Processus plus fiable, réduction des erreurs et gain de temps pour les utilisateurs non techniques.",
    tools: ["Python", "CustomTkinter", "TXT", "Automatisation locale"],
    gallery: [
      { type: "image", src: "images/rib-generator.png", alt: "Interface RIB Generator" }
    ]
  },
  "wordpress-seo": {
    title: "Sites WordPress & SEO",
    category: "Web · SEO · Conversion",
    status: "Projets clients réalisés",
    visual: "linear-gradient(135deg, #f59e0b, #ef4444)",
    description: "Création et optimisation de sites WordPress professionnels avec une approche SEO, UX et conversion.",
    problem: "Beaucoup d'entreprises avaient un site peu structuré, peu visible sur Google ou insuffisamment clair pour convertir les visiteurs.",
    solution: "Création de pages, structuration des contenus, optimisation SEO on-page, formulaires, responsive et suivi Search Console.",
    impact: "Image professionnelle renforcée, meilleure visibilité Google et meilleure prise de contact.",
    tools: ["WordPress", "Elementor", "SEO", "Analytics", "Search Console"],
    gallery: [
      { type: "link", href: "http://realestatecaretaking.com/", label: "realestatecaretaking.com" },
      { type: "link", href: "http://ferlam-compensateurs.com/", label: "ferlam-compensateurs.com" },
      { type: "link", href: "http://altra-healthcare.com/", label: "altra-healthcare.com" },
      { type: "link", href: "http://james-bun.com/", label: "james-bun.com" },
      { type: "link", href: "http://laservisionbelle-epine.com/", label: "laservisionbelle-epine.com" },
      { type: "link", href: "http://chrelationcenter.com/", label: "chrelationcenter.com" },
      { type: "link", href: "http://diet-fine.fr/", label: "diet-fine.fr" },
      { type: "link", href: "http://centremedicalbelleepine.fr/", label: "centremedicalbelleepine.fr" },
      { type: "link", href: "http://cliniqueoseraie.fr/", label: "cliniqueoseraie.fr" },
      { type: "link", href: "http://centreosny.fr/", label: "centreosny.fr" },
      { type: "link", href: "http://laser-beaute-medical.com/", label: "laser-beaute-medical.com" },
      { type: "link", href: "http://cabinetgameiro.fr/", label: "cabinetgameiro.fr" },
      { type: "link", href: "http://pec.altra-phone.com/", label: "pec.altra-phone.com" },
      { type: "link", href: "http://hudrrumet-alu.tn/", label: "hudrrumet-alu.tn" },
      { type: "link", href: "http://altra-phone.com/", label: "altra-phone.com" }
    ]
  },
  "assistant-ia": {
    title: "Assistant IA Automation",
    category: "IA · Workflow · Traitement des demandes",
    status: "Prototype",
    visual: "linear-gradient(135deg, #7c3aed, #db2777)",
    description: "Workflow IA pour analyser, classer et automatiser le traitement des emails ou formulaires entrants.",
    problem: "Les demandes entrantes prennent du temps à lire, trier, prioriser et suivre. Certaines informations peuvent être oubliées.",
    solution: "Make déclenche l'analyse IA, extrait les informations, classe la demande, crée une fiche dans Airtable/Notion et génère une réponse brouillon.",
    impact: "Meilleure réactivité, moins d'oublis, centralisation des demandes et suivi client plus structuré.",
    tools: ["Make", "OpenAI", "Gmail", "Airtable", "Notion", "Slack"],
    gallery: [
      { type: "image", src: "images/assistant-ia-automation-1.png", alt: "Schéma Assistant IA Automation" },
      { type: "image", src: "images/assistant-ia-automation-2.png", alt: "Workflow Make Assistant IA Automation" }
    ]
  },
  "agent-seo": {
    title: "Agent IA SEO WordPress",
    category: "IA · SEO · WordPress",
    status: "Prototype",
    visual: "linear-gradient(135deg, #0f172a, #334155)",
    description: "Agent IA conçu pour analyser les pages WordPress, détecter les optimisations SEO et préparer des brouillons optimisés.",
    problem: "Un site WordPress peut publier du contenu sans vraie stratégie SEO : titres faibles, méta-descriptions absentes, contenu peu structuré.",
    solution: "L'agent analyse une URL ou un article, propose titres, méta-description, structure H2/H3, mots-clés, balises ALT et maillage interne.",
    impact: "Audits plus rapides, meilleure organisation éditoriale et amélioration progressive du trafic organique.",
    tools: ["WordPress", "Make", "ChatGPT", "OpenAI", "Search Console", "Sheets"],
    gallery: [
      { type: "image", src: "images/agent-ia-seo.png", alt: "Agent IA SEO WordPress" }
    ]
  },
  cegid: {
    title: "Gestionnaire Cegid",
    category: "Outil interne · Sécurité · Suivi",
    status: "Prototype en cours",
    visual: "linear-gradient(135deg, #dc2626, #f97316)",
    description: "Outil interne pour centraliser les comptes Cegid, suivre les dates de modification et anticiper les expirations.",
    problem: "La gestion manuelle de nombreux comptes peut créer des oublis, un manque de visibilité et des erreurs dans le suivi.",
    solution: "Centralisation des logins, sites associés, emails de contact, dates de modification, statuts visuels et exports PDF/Excel.",
    impact: "Meilleur suivi des accès, anticipation des renouvellements et reporting plus clair pour la direction.",
    tools: ["Python", "Interface desktop", "Export PDF", "Export Excel", "Sécurité"],
    gallery: [
      { type: "image", src: "images/gestionnaire-cegid.png", alt: "Gestionnaire Cegid" }
    ]
  }
};

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category || "";
      const shouldShow = selected === "all" || categories.includes(selected);
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

function openProjectModal(projectId) {
  const project = projectDetails[projectId];

  if (!project || !modal) return;

  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalStatus.textContent = project.status;
  modalDescription.textContent = project.description;
  modalProblem.textContent = project.problem;
  modalSolution.textContent = project.solution;
  modalImpact.textContent = project.impact;
  modalVisual.style.background = project.visual;

  modalTools.innerHTML = project.tools.map((tool) => `<span>${tool}</span>`).join("");
  modalGallery.innerHTML = project.gallery
    .map((item, index) => {
      if (item.type === "image") {
        return `
          <figure class="modal-shot image-shot">
            <img src="${item.src}" alt="${item.alt}">
            <figcaption>${item.alt}</figcaption>
          </figure>
        `;
      }

      return `<a class="modal-site-link" href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`;
    })
    .join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-lock");
}

function closeProjectModal() {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-lock");
}

document.querySelectorAll(".project-more").forEach((button) => {
  button.addEventListener("click", () => openProjectModal(button.dataset.project));
});

document.querySelectorAll("[data-close-modal]").forEach((item) => {
  item.addEventListener("click", closeProjectModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
  }
});
