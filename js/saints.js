/* ============================================================
   saints.js — Gestion des portraits et biographies cliquables
   ============================================================ */

// Données des saints patrons
const SAINTS = [
  {
    id: 'francois-de-sales',
    nom: 'Saint François de Sales',
    dates: '1567 – 1622',
    emoji: '✝️',
    bio: [
      'François de Sales est né le 21 août 1567 dans une famille de la noblesse savoyarde catholique, au château de Sales près de Thorens-Glières, à une vingtaine de kilomètres au nord d\'Annecy, dans le duché de Savoie.',
      'Son père, seigneur de Sales, de Boisy et de Novel, et sa mère, Françoise, fille unique de Melchior Urbain de Sionnaz, appartiennent à de vieilles familles nobles de Savoie.',
      'Il occupa la charge prestigieuse de maître d\'hôtel du prince Sébastien de Luxembourg-Martigues et servit comme officier dans l\'armée du roi de France. Lors de son baptême, le 28 août 1567, il reçoit le prénom de « François » en hommage à François d\'Assise.',
      'Docteur de l\'Église et patron des journalistes et des écrivains catholiques, saint François de Sales est célébré pour sa douceur, sa patience et son amour de Dieu. Il est à l\'origine de la spiritualité salésienne, fondée sur la conviction que chacun est appelé à la sainteté dans sa vie quotidienne.',
    ],
  },
  {
    id: 'jean-bosco',
    nom: 'Saint Jean Bosco',
    dates: '1815 – 1888',
    emoji: '🙏',
    bio: [
      'Jean Bosco naît le 16 août 1815 à Becchi, un hameau des collines du Piémont, dans une famille paysanne pauvre. Il perd son père à deux ans. Dès l\'enfance, il ressent une vocation particulière pour les jeunes en difficulté.',
      'Ordonné prêtre en 1841, il fonde à Turin l\'Oratoire de Saint-François-de-Sales, qui accueille les jeunes ouvriers et apprentis abandonnés que la révolution industrielle laisse sans repères.',
      'Sa pédagogie, le « système préventif », repose sur la raison, la religion et la bonté — en opposition à la répression. Il préfère prévenir plutôt que punir, et croit en la capacité de chaque jeune à s\'élever par l\'amour et la confiance.',
      'En 1859, il fonde la Société de Saint-François-de-Sales (les Salésiens), qui oeuvre encore aujourd\'hui dans le monde entier pour l\'éducation et l\'accueil des jeunes les plus défavorisés. Il est canonisé en 1934 par Pie XI.',
    ],
  },
  {
    id: 'jeanne-de-chantal',
    nom: 'Sainte Jeanne de Chantal',
    dates: '1572 – 1641',
    emoji: '☩',
    bio: [
      'Jeanne-Françoise Frémyot de Chantal naît le 23 janvier 1572 à Dijon, dans une famille de haute bourgeoisie. Élevée dans la foi, elle épouse en 1592 le baron Christophe de Rabutin-Chantal, avec qui elle connaît un bonheur rare.',
      'Veuve à 28 ans avec quatre enfants, elle traverse une longue nuit spirituelle avant de rencontrer François de Sales en 1604, qui devient son directeur spirituel. Cette rencontre transforme sa vie.',
      'Ensemble, ils fondent en 1610 l\'Ordre de la Visitation de Sainte-Marie, à Annecy. Cette congrégation, contrairement aux ordres monastiques de l\'époque, accueille des femmes que la santé fragile ou l\'âge éloignent des ordres plus austères.',
      'Femme de gouvernement et de prière, Jeanne de Chantal allie une grande tendresse humaine à une vie mystique profonde. Elle est canonisée en 1767 par Clément XIII.',
    ],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const portraitsContainer = document.getElementById('saints-portraits');
  const bioContainer       = document.getElementById('saint-bio-container');
  if (!portraitsContainer || !bioContainer) return;

  /* Afficher la biographie d'un saint */
  function showBio(saint) {
    bioContainer.innerHTML = `
      <div class="saint-bio" role="region" aria-label="Biographie de ${saint.nom}">
        <h2>${saint.nom}</h2>
        <span class="dates-badge">${saint.dates}</span>
        ${saint.bio.map(p => `<p>${p}</p>`).join('')}
      </div>
    `;
    // Scroll doux vers la bio
    bioContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* Gérer la sélection du portrait actif */
  function selectSaint(index) {
    const buttons = portraitsContainer.querySelectorAll('.saint-btn');
    buttons.forEach((btn, i) => {
      const isSelected = i === index;
      btn.classList.toggle('selected', isSelected);
      btn.setAttribute('aria-pressed', isSelected);
    });
    showBio(SAINTS[index]);
  }

  /* Générer les portraits dynamiquement */
  SAINTS.forEach((saint, index) => {
    const btn = document.createElement('button');
    btn.className = 'saint-btn';
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', `Afficher la biographie de ${saint.nom}`);
    btn.innerHTML = `
      <div class="saint-portrait-img" aria-hidden="true">${saint.emoji}</div>
      <div class="saint-portrait-label">${saint.nom}</div>
    `;
    btn.addEventListener('click', () => selectSaint(index));
    portraitsContainer.appendChild(btn);
  });

  // Sélectionner Saint Jean Bosco (index 1) par défaut
  selectSaint(1);
});