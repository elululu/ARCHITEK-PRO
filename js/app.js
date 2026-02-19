/* ========================================
   ARCHITEK PRO — Application
   Navigation, rendu, personnalisation
   ======================================== */

// ============ STATE ============
const state = {
  currentView: 'dashboard',
  currentDomain: null,
  currentFiche: null,
  searchQuery: '',
  userData: loadUserData()
};

function loadUserData() {
  try {
    const raw = localStorage.getItem('architek-pro-data');
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return { read: [], mastered: [], favorited: [], personal: {} };
}

function saveUserData() {
  localStorage.setItem('architek-pro-data', JSON.stringify(state.userData));
}

// ============ HELPERS ============
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'className') e.className = v;
    else if (k === 'innerHTML') e.innerHTML = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else e.setAttribute(k, v);
  }
  for (const c of children) {
    if (typeof c === 'string') e.appendChild(document.createTextNode(c));
    else if (c) e.appendChild(c);
  }
  return e;
}

function getDomain(id) { return APP_DATA.domains.find(d => d.id === id); }
function getFiche(domainId, ficheId) {
  const d = getDomain(domainId);
  return d ? d.fiches.find(f => f.id === ficheId) : null;
}
function ficheKey(domainId, ficheId) { return `${domainId}/${ficheId}`; }

function isRead(key) { return state.userData.read.includes(key); }
function isMastered(key) { return state.userData.mastered.includes(key); }
function isFavorited(key) { return state.userData.favorited.includes(key); }

function toggleList(list, key) {
  const i = list.indexOf(key);
  if (i >= 0) list.splice(i, 1);
  else list.push(key);
  saveUserData();
}

function getPersonalItems(key) {
  return state.userData.personal[key] || { links: [], images: [], notes: [] };
}

function addPersonalItem(ficheKey, type, item) {
  if (!state.userData.personal[ficheKey]) {
    state.userData.personal[ficheKey] = { links: [], images: [], notes: [] };
  }
  state.userData.personal[ficheKey][type].push({ ...item, date: new Date().toISOString() });
  saveUserData();
}

function removePersonalItem(ficheKey, type, index) {
  if (state.userData.personal[ficheKey] && state.userData.personal[ficheKey][type]) {
    state.userData.personal[ficheKey][type].splice(index, 1);
    if (
      state.userData.personal[ficheKey].links.length === 0 &&
      state.userData.personal[ficheKey].images.length === 0 &&
      state.userData.personal[ficheKey].notes.length === 0
    ) {
      delete state.userData.personal[ficheKey];
    }
    saveUserData();
  }
}

function toast(message) {
  const container = $('#toast-container');
  const t = el('div', { className: 'toast' }, message);
  container.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function countStats() {
  let totalFiches = 0;
  APP_DATA.domains.forEach(d => totalFiches += d.fiches.length);
  return {
    totalDomains: APP_DATA.domains.length,
    totalFiches,
    readCount: state.userData.read.length,
    masteredCount: state.userData.mastered.length,
    favCount: state.userData.favorited.length,
    personalCount: Object.keys(state.userData.personal).length
  };
}

function domainProgress(domainId) {
  const d = getDomain(domainId);
  if (!d) return 0;
  const total = d.fiches.length;
  const read = d.fiches.filter(f => isRead(ficheKey(domainId, f.id))).length;
  return total > 0 ? Math.round((read / total) * 100) : 0;
}

// ============ NAVIGATION ============
function navigate(view, domainId = null, ficheId = null) {
  state.currentView = view;
  state.currentDomain = domainId;
  state.currentFiche = ficheId;

  // Mark as read when opening a fiche
  if (view === 'fiche' && domainId && ficheId) {
    const key = ficheKey(domainId, ficheId);
    if (!isRead(key)) {
      state.userData.read.push(key);
      saveUserData();
    }
  }

  updateNav();
  updateBreadcrumb();
  render();
  window.scrollTo(0, 0);
}

function updateNav() {
  $$('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.view === state.currentView) item.classList.add('active');
    if (item.dataset.view === 'domain' && item.dataset.domain === state.currentDomain && state.currentView !== 'dashboard') {
      item.classList.add('active');
    }
    if (state.currentView === 'fiche' && item.dataset.domain === state.currentDomain) {
      item.classList.add('active');
    }
  });
}

function updateBreadcrumb() {
  const bc = $('#breadcrumb');
  bc.innerHTML = '';

  const parts = [];
  parts.push({ label: 'Accueil', action: () => navigate('dashboard') });

  if (state.currentView === 'domain' && state.currentDomain) {
    const d = getDomain(state.currentDomain);
    if (d) parts.push({ label: d.name, current: true });
  }

  if (state.currentView === 'fiche' && state.currentDomain && state.currentFiche) {
    const d = getDomain(state.currentDomain);
    if (d) parts.push({ label: d.name, action: () => navigate('domain', state.currentDomain) });
    const f = getFiche(state.currentDomain, state.currentFiche);
    if (f) parts.push({ label: f.title, current: true });
  }

  if (state.currentView === 'collection') {
    parts.push({ label: 'Ma Collection', current: true });
  }

  if (state.currentView === 'conseils') {
    parts.push({ label: 'Conseils Pratiques', current: true });
  }

  if (state.currentView === 'references') {
    parts.push({ label: 'Mes réf Archi d\'int', current: true });
  }

  if (state.currentView === 'sourcing') {
    parts.push({ label: 'Sourcing Matériaux', current: true });
  }

  if (state.currentView === 'search') {
    parts.push({ label: `Recherche : "${state.searchQuery}"`, current: true });
  }

  parts.forEach((p, i) => {
    if (i > 0) bc.appendChild(el('span', { className: 'breadcrumb-sep' }, '›'));
    if (p.current) {
      bc.appendChild(el('span', { className: 'breadcrumb-current' }, p.label));
    } else {
      const link = el('a', { href: '#', onClick: (e) => { e.preventDefault(); p.action(); } }, p.label);
      bc.appendChild(link);
    }
  });
}

// ============ RENDER ============
function render() {
  const content = $('#content');
  content.innerHTML = '';

  switch (state.currentView) {
    case 'dashboard': renderDashboard(content); break;
    case 'domain': renderDomain(content); break;
    case 'fiche': renderFiche(content); break;
    case 'collection': renderCollection(content); break;
    case 'conseils': renderConseils(content); break;
    case 'references': renderReferences(content); break;
    case 'sourcing': renderSourcing(content); break;
    case 'search': renderSearch(content); break;
  }
}

// -------- Dashboard --------
function renderDashboard(container) {
  const stats = countStats();

  const hero = el('div', { className: 'dashboard-hero' });
  hero.innerHTML = `
    <h1>Bienvenue sur <span>ARCHITEK</span>PRO</h1>
    <p>Votre encyclopédie personnelle d'architecture d'intérieur</p>
  `;

  const statsRow = el('div', { className: 'dashboard-stats' });
  const statItems = [
    { n: stats.totalDomains, l: 'Domaines' },
    { n: stats.totalFiches, l: 'Fiches' },
    { n: stats.readCount, l: 'Lues' },
    { n: stats.masteredCount, l: 'Maîtrisées' },
    { n: stats.favCount, l: 'Favoris' }
  ];
  statItems.forEach(s => {
    const card = el('div', { className: 'stat-card' });
    card.innerHTML = `<div class="stat-number">${s.n}</div><div class="stat-label">${s.l}</div>`;
    statsRow.appendChild(card);
  });

  const grid = el('div', { className: 'domains-grid' });
  APP_DATA.domains.forEach(d => {
    const prog = domainProgress(d.id);
    const card = el('div', { className: 'domain-card', onClick: () => navigate('domain', d.id) });
    card.style.borderLeftColor = d.color;
    card.innerHTML = `
      <div class="domain-card-icon">${d.icon}</div>
      <div class="domain-card-name">${d.name}</div>
      <div class="domain-card-desc">${d.description}</div>
      <div class="domain-card-meta">
        <span class="domain-card-count">${d.fiches.length} fiches</span>
        <span>${prog}% lu</span>
      </div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${prog}%"></div></div>
    `;
    grid.appendChild(card);
  });

  container.appendChild(hero);
  container.appendChild(statsRow);
  container.appendChild(grid);
}

// -------- Domain --------
function renderDomain(container) {
  const d = getDomain(state.currentDomain);
  if (!d) return;

  const header = el('div', { className: 'domain-header' });
  header.innerHTML = `
    <div class="domain-header-icon">${d.icon}</div>
    <h2>${d.name}</h2>
    <p>${d.description}</p>
  `;
  container.appendChild(header);

  // Check if fiches have categories
  const hasCategories = d.fiches.some(f => f.category);

  if (hasCategories) {
    // Group fiches by category, preserving order of first appearance
    const categoryOrder = [];
    const categoryMap = {};
    d.fiches.forEach(f => {
      const cat = f.category || 'Autres';
      if (!categoryMap[cat]) {
        categoryMap[cat] = [];
        categoryOrder.push(cat);
      }
      categoryMap[cat].push(f);
    });

    categoryOrder.forEach(cat => {
      const group = el('div', { className: 'category-group' });
      const catHeader = el('div', { className: 'category-header' });
      catHeader.innerHTML = `<span class="category-header-label">${cat}</span><span class="category-header-count">${categoryMap[cat].length} fiches</span>`;
      group.appendChild(catHeader);

      const grid = el('div', { className: 'fiches-grid' });
      categoryMap[cat].forEach(f => {
        grid.appendChild(buildFicheCard(d, f));
      });
      group.appendChild(grid);
      container.appendChild(group);
    });
  } else {
    const grid = el('div', { className: 'fiches-grid' });
    d.fiches.forEach(f => {
      grid.appendChild(buildFicheCard(d, f));
    });
    container.appendChild(grid);
  }
}

function buildFicheCard(d, f) {
  const key = ficheKey(d.id, f.id);
  const card = el('div', { className: 'fiche-card', onClick: () => navigate('fiche', d.id, f.id) });

  let statusHTML = '<div class="fiche-card-status">';
  if (isRead(key)) statusHTML += '<div class="status-badge read" title="Lu"></div>';
  if (isMastered(key)) statusHTML += '<div class="status-badge mastered" title="Maîtrisé"></div>';
  if (isFavorited(key)) statusHTML += '<div class="status-badge favorited" title="Favori"></div>';
  statusHTML += '</div>';

  let tagsHTML = f.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('');

  card.innerHTML = `
    ${statusHTML}
    <div class="fiche-card-title">${f.title}</div>
    <div class="fiche-card-subtitle">${f.subtitle}</div>
    <div class="fiche-card-summary">${f.summary}</div>
    <div class="fiche-card-tags">${tagsHTML}</div>
  `;
  return card;
}

// -------- Fiche Detail --------
function renderFiche(container) {
  const d = getDomain(state.currentDomain);
  const f = getFiche(state.currentDomain, state.currentFiche);
  if (!d || !f) return;

  const key = ficheKey(d.id, f.id);
  const detail = el('div', { className: 'fiche-detail' });

  // Actions
  const actions = el('div', { className: 'fiche-detail-actions' });

  const favBtn = el('button', {
    className: `btn ${isFavorited(key) ? 'active' : ''}`,
    onClick: () => { toggleList(state.userData.favorited, key); toast(isFavorited(key) ? 'Ajouté aux favoris ★' : 'Retiré des favoris'); renderFiche($('#content').innerHTML = '' || $('#content')); }
  });
  favBtn.textContent = isFavorited(key) ? '★ Favori' : '☆ Favoris';

  const masterBtn = el('button', {
    className: `btn ${isMastered(key) ? 'active' : ''}`,
    onClick: () => { toggleList(state.userData.mastered, key); toast(isMastered(key) ? 'Marqué comme maîtrisé ◆' : 'Retiré des maîtrisés'); renderFiche($('#content').innerHTML = '' || $('#content')); }
  });
  masterBtn.textContent = isMastered(key) ? '◆ Maîtrisé' : '◇ Maîtriser';

  actions.appendChild(favBtn);
  actions.appendChild(masterBtn);
  detail.appendChild(actions);

  // Header
  const header = el('div', { className: 'fiche-detail-header' });
  header.innerHTML = `
    <h1>${f.title}</h1>
    <div class="fiche-detail-subtitle">${f.subtitle}</div>
    <div class="fiche-detail-tags">${f.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
  `;
  detail.appendChild(header);

  // Summary
  detail.appendChild(el('div', { className: 'fiche-detail-summary', innerHTML: f.summary }));

  // Sections
  f.sections.forEach(s => {
    const sec = el('div', { className: 'fiche-section' });
    sec.innerHTML = `<h3>${s.title}</h3><p>${s.content}</p>`;
    detail.appendChild(sec);
  });

  // Key points
  if (f.keyPoints && f.keyPoints.length > 0) {
    const kp = el('div', { className: 'key-points' });
    kp.innerHTML = `<h3>Points Clés à Retenir</h3><ul>${f.keyPoints.map(p => `<li>${p}</li>`).join('')}</ul>`;
    detail.appendChild(kp);
  }

  // Tips
  if (f.tips && f.tips.length > 0) {
    const tips = el('div', { className: 'practical-tips' });
    tips.innerHTML = `<h3>Conseils Pratiques</h3><ul>${f.tips.map(t => `<li>${t}</li>`).join('')}</ul>`;
    detail.appendChild(tips);
  }

  // Personal section
  detail.appendChild(renderPersonalSection(key));

  // Navigate between fiches
  const ficheIndex = d.fiches.findIndex(fi => fi.id === f.id);
  const nav = el('div', { style: 'display:flex;justify-content:space-between;margin-top:48px;padding-top:24px;border-top:1px solid var(--border-light)' });
  
  if (ficheIndex > 0) {
    const prev = d.fiches[ficheIndex - 1];
    const prevBtn = el('button', { className: 'btn', onClick: () => navigate('fiche', d.id, prev.id) });
    prevBtn.innerHTML = `← ${prev.title}`;
    nav.appendChild(prevBtn);
  } else {
    nav.appendChild(el('span'));
  }
  
  if (ficheIndex < d.fiches.length - 1) {
    const next = d.fiches[ficheIndex + 1];
    const nextBtn = el('button', { className: 'btn', onClick: () => navigate('fiche', d.id, next.id) });
    nextBtn.innerHTML = `${next.title} →`;
    nav.appendChild(nextBtn);
  }
  
  detail.appendChild(nav);
  container.appendChild(detail);
}

function renderPersonalSection(key) {
  const personal = getPersonalItems(key);
  const section = el('div', { className: 'personal-section' });

  section.innerHTML = `
    <h2>📌 Mes Notes Personnelles</h2>
    <p>Ajoutez vos liens de référence, images d'inspiration et notes techniques.</p>
  `;

  // ----- Links -----
  const linksGroup = el('div', { className: 'personal-group' });
  const linksHeader = el('div', { className: 'personal-group-header' });
  linksHeader.innerHTML = '<h4>🔗 Liens de Référence</h4>';
  const addLinkBtn = el('button', { className: 'btn btn-small', onClick: () => openModal('link', key) }, '+ Ajouter un lien');
  linksHeader.appendChild(addLinkBtn);
  linksGroup.appendChild(linksHeader);

  const linksItems = el('div', { className: 'personal-items' });
  if (personal.links.length === 0) {
    linksItems.appendChild(el('div', { className: 'personal-empty' }, 'Aucun lien ajouté'));
  } else {
    personal.links.forEach((link, i) => {
      const item = el('div', { className: 'personal-item' });
      item.innerHTML = `
        <div class="personal-item-content">
          <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.title || link.url)}</a>
          ${link.description ? `<p>${escapeHtml(link.description)}</p>` : ''}
          <small>${new Date(link.date).toLocaleDateString('fr-FR')}</small>
        </div>
      `;
      const delBtn = el('span', { className: 'personal-item-delete', onClick: () => { removePersonalItem(key, 'links', i); refreshPersonal(key); toast('Lien supprimé'); } }, '×');
      item.appendChild(delBtn);
      linksItems.appendChild(item);
    });
  }
  linksGroup.appendChild(linksItems);
  section.appendChild(linksGroup);

  // ----- Images -----
  const imagesGroup = el('div', { className: 'personal-group' });
  const imagesHeader = el('div', { className: 'personal-group-header' });
  imagesHeader.innerHTML = '<h4>🖼 Images d\'Inspiration</h4>';
  const addImageBtn = el('button', { className: 'btn btn-small', onClick: () => openModal('image', key) }, '+ Ajouter une image');
  imagesHeader.appendChild(addImageBtn);
  imagesGroup.appendChild(imagesHeader);

  const imagesItems = el('div', { className: 'personal-items' });
  if (personal.images.length === 0) {
    imagesItems.appendChild(el('div', { className: 'personal-empty' }, 'Aucune image ajoutée'));
  } else {
    personal.images.forEach((img, i) => {
      const item = el('div', { className: 'personal-item' });
      item.innerHTML = `
        <div class="personal-item-content">
          ${img.caption ? `<p><strong>${escapeHtml(img.caption)}</strong></p>` : ''}
          <img class="personal-image" src="${escapeHtml(img.url)}" alt="${escapeHtml(img.caption || '')}" onerror="this.style.display='none'">
          <small>${new Date(img.date).toLocaleDateString('fr-FR')}</small>
        </div>
      `;
      const delBtn = el('span', { className: 'personal-item-delete', onClick: () => { removePersonalItem(key, 'images', i); refreshPersonal(key); toast('Image supprimée'); } }, '×');
      item.appendChild(delBtn);
      imagesItems.appendChild(item);
    });
  }
  imagesGroup.appendChild(imagesItems);
  section.appendChild(imagesGroup);

  // ----- Notes -----
  const notesGroup = el('div', { className: 'personal-group' });
  const notesHeader = el('div', { className: 'personal-group-header' });
  notesHeader.innerHTML = '<h4>📝 Notes Techniques</h4>';
  const addNoteBtn = el('button', { className: 'btn btn-small', onClick: () => openModal('note', key) }, '+ Ajouter une note');
  notesHeader.appendChild(addNoteBtn);
  notesGroup.appendChild(notesHeader);

  const notesItems = el('div', { className: 'personal-items' });
  if (personal.notes.length === 0) {
    notesItems.appendChild(el('div', { className: 'personal-empty' }, 'Aucune note ajoutée'));
  } else {
    personal.notes.forEach((note, i) => {
      const item = el('div', { className: 'personal-item' });
      item.innerHTML = `
        <div class="personal-item-content">
          ${note.title ? `<p><strong>${escapeHtml(note.title)}</strong></p>` : ''}
          <p>${escapeHtml(note.text)}</p>
          <small>${new Date(note.date).toLocaleDateString('fr-FR')}</small>
        </div>
      `;
      const delBtn = el('span', { className: 'personal-item-delete', onClick: () => { removePersonalItem(key, 'notes', i); refreshPersonal(key); toast('Note supprimée'); } }, '×');
      item.appendChild(delBtn);
      notesItems.appendChild(item);
    });
  }
  notesGroup.appendChild(notesItems);
  section.appendChild(notesGroup);

  return section;
}

function refreshPersonal(key) {
  const existing = $('.personal-section');
  if (existing) {
    const newSection = renderPersonalSection(key);
    existing.replaceWith(newSection);
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// -------- Collection --------
function renderCollection(container) {
  const header = el('div', { className: 'collection-header' });
  header.innerHTML = `
    <h2>Ma Collection</h2>
    <p>Vos fiches favorites, maîtrisées et annotées.</p>
  `;
  container.appendChild(header);

  // Tabs
  const tabs = el('div', { className: 'collection-tabs' });
  const tabDefs = [
    { id: 'favorited', label: `★ Favoris (${state.userData.favorited.length})` },
    { id: 'mastered', label: `◆ Maîtrisés (${state.userData.mastered.length})` },
    { id: 'annotated', label: `📌 Annotés (${Object.keys(state.userData.personal).length})` }
  ];

  let activeTab = 'favorited';

  function renderTabContent() {
    const existing = $('#collection-content');
    if (existing) existing.remove();

    const content = el('div', { id: 'collection-content' });
    let keys = [];

    if (activeTab === 'favorited') keys = state.userData.favorited;
    else if (activeTab === 'mastered') keys = state.userData.mastered;
    else if (activeTab === 'annotated') keys = Object.keys(state.userData.personal);

    if (keys.length === 0) {
      const empty = el('div', { className: 'empty-state' });
      empty.innerHTML = `
        <div class="empty-state-icon">◇</div>
        <h3>Rien ici pour l'instant</h3>
        <p>Explorez les fiches et ajoutez-les à votre collection.</p>
      `;
      content.appendChild(empty);
    } else {
      keys.forEach(key => {
        const [domainId, ficheId] = key.split('/');
        const d = getDomain(domainId);
        const f = d ? d.fiches.find(fi => fi.id === ficheId) : null;
        if (!d || !f) return;

        const item = el('div', { className: 'search-result-item', onClick: () => navigate('fiche', domainId, ficheId) });
        item.innerHTML = `
          <div class="search-result-domain">${d.icon} ${d.name}</div>
          <div class="search-result-title">${f.title}</div>
          <div class="search-result-excerpt">${f.summary}</div>
        `;
        content.appendChild(item);
      });
    }

    container.appendChild(content);
  }

  tabDefs.forEach(t => {
    const tabBtn = el('button', {
      className: `collection-tab ${t.id === activeTab ? 'active' : ''}`,
      onClick: () => {
        activeTab = t.id;
        $$('.collection-tab').forEach(tb => tb.classList.remove('active'));
        tabBtn.classList.add('active');
        renderTabContent();
      }
    }, t.label);
    tabs.appendChild(tabBtn);
  });

  container.appendChild(tabs);
  renderTabContent();
}

// -------- Conseils Pratiques --------
function renderConseils(container) {
  const header = el('div', { className: 'conseils-header' });
  header.innerHTML = `
    <h2>💡 Conseils Pratiques</h2>
    <p>Méthodes et rituels pour développer votre œil d'architecte d'intérieur.</p>
  `;
  container.appendChild(header);

  // Pre-filled conseils
  const conseilsFixes = [
    {
      icon: '📁',
      title: 'Créer un dossier par designer',
      description: 'Constituez un dossier de référence pour chaque designer/architecte qui vous inspire. Sélectionnez 10 à 20 images clés de leurs projets — pas plus, pour garder uniquement l\'essentiel. Ce travail de curation vous force à identifier ce qui définit vraiment leur signature.',
      checklist: [
        'Choisir 5 designers qui vous inspirent',
        'Créer un dossier par designer (physique ou numérique)',
        'Sélectionner 10-20 images clés par designer',
        'Renouveler et affiner votre sélection tous les 6 mois'
      ]
    },
    {
      icon: '✍️',
      title: 'Noter POURQUOI un projet vous inspire',
      description: 'Quand un espace vous arrête, ne vous contentez pas de le sauvegarder. Prenez 2 minutes pour écrire ce qui vous touche. Est-ce les proportions ? La palette de couleurs ? Le choix des matériaux ? Le jeu de lumière ? La tension entre deux éléments ? Ce réflexe transforme une consommation passive d\'images en apprentissage actif.',
      checklist: [
        'Les proportions et l\'échelle',
        'La palette de couleurs et les contrastes',
        'Le choix et la combinaison des matériaux',
        'Le travail de la lumière (naturelle et artificielle)',
        'L\'agencement et la circulation',
        'Le détail qui fait toute la différence'
      ]
    }
  ];

  // Load user conseils
  const userConseils = loadConseils();

  // Pre-filled cards
  conseilsFixes.forEach(c => {
    const card = el('div', { className: 'conseil-card' });
    card.innerHTML = `
      <div class="conseil-card-icon">${c.icon}</div>
      <h3>${c.title}</h3>
      <p>${c.description}</p>
      <div class="conseil-checklist">
        <h4>Checklist</h4>
        <ul>${c.checklist.map(item => `<li>☐ ${item}</li>`).join('')}</ul>
      </div>
    `;
    container.appendChild(card);
  });

  // User personal conseils
  const persoSection = el('div', { className: 'conseils-perso-section' });
  persoSection.innerHTML = `
    <div class="conseils-perso-header">
      <h3>📝 Mes Conseils Personnels</h3>
      <p>Ajoutez vos propres méthodes, rituels et rappels.</p>
    </div>
  `;

  // Add form
  const form = el('div', { className: 'conseil-add-form' });
  form.innerHTML = `
    <input type="text" id="conseil-title" placeholder="Titre du conseil…" class="conseil-input">
    <textarea id="conseil-desc" placeholder="Description, détails, méthode…" class="conseil-textarea" rows="3"></textarea>
    <button id="conseil-add-btn" class="btn-conseil-add">+ Ajouter</button>
  `;
  persoSection.appendChild(form);

  // Render existing user conseils
  const userList = el('div', { className: 'conseils-user-list' });
  userConseils.forEach((c, i) => {
    const item = el('div', { className: 'conseil-user-item' });
    item.innerHTML = `
      <div class="conseil-user-content">
        <strong>${c.title}</strong>
        <p>${c.description}</p>
        <span class="conseil-user-date">${new Date(c.date).toLocaleDateString('fr-FR')}</span>
      </div>
      <button class="conseil-delete" data-index="${i}" title="Supprimer">✕</button>
    `;
    userList.appendChild(item);
  });
  persoSection.appendChild(userList);
  container.appendChild(persoSection);

  // Event: add
  setTimeout(() => {
    const addBtn = $('#conseil-add-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const title = $('#conseil-title').value.trim();
        const desc = $('#conseil-desc').value.trim();
        if (!title) { toast('Ajoutez au moins un titre.'); return; }
        const conseils = loadConseils();
        conseils.push({ title, description: desc, date: new Date().toISOString() });
        saveConseils(conseils);
        toast('Conseil ajouté !');
        navigate('conseils');
      });
    }
    // Event: delete
    $$('.conseil-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index);
        const conseils = loadConseils();
        conseils.splice(idx, 1);
        saveConseils(conseils);
        toast('Conseil supprimé.');
        navigate('conseils');
      });
    });
  }, 0);
}

function loadConseils() {
  try {
    const raw = localStorage.getItem('architek-pro-conseils');
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return [];
}

function saveConseils(arr) {
  localStorage.setItem('architek-pro-conseils', JSON.stringify(arr));
}

// -------- Mes réf Archi d'int --------
function loadRefData() {
  try {
    const raw = localStorage.getItem('architek-pro-references');
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return { designers: [] };
  // Structure: { designers: [{ id, name, specialty, images: [{ url, caption, pourquoi: { proportions, palette, materiaux, lumiere, autre } }] }] }
}

function saveRefData(data) {
  localStorage.setItem('architek-pro-references', JSON.stringify(data));
}

function renderReferences(container) {
  const data = loadRefData();

  const header = el('div', { className: 'ref-header' });
  header.innerHTML = `
    <h2>📐 Mes réf Archi d'int</h2>
    <p>Créez un dossier par designer, collectez vos images d'inspiration et notez ce qui vous touche.</p>
  `;
  container.appendChild(header);

  // Stats bar
  const totalImages = data.designers.reduce((acc, d) => acc + d.images.length, 0);
  const statsBar = el('div', { className: 'ref-stats' });
  statsBar.innerHTML = `
    <span class="ref-stat">${data.designers.length} designer${data.designers.length > 1 ? 's' : ''}</span>
    <span class="ref-stat-sep">·</span>
    <span class="ref-stat">${totalImages} image${totalImages > 1 ? 's' : ''}</span>
  `;
  container.appendChild(statsBar);

  // Add designer form
  const addForm = el('div', { className: 'ref-add-designer' });
  addForm.innerHTML = `
    <input type="text" id="ref-designer-name" class="conseil-input" placeholder="Nom du designer / architecte…">
    <input type="text" id="ref-designer-specialty" class="conseil-input" placeholder="Spécialité (ex: minimalisme japonais, Art Déco…)">
    <button id="ref-add-designer-btn" class="btn-conseil-add">+ Nouveau dossier</button>
  `;
  container.appendChild(addForm);

  // Designer folders
  if (data.designers.length === 0) {
    const empty = el('div', { className: 'empty-state' });
    empty.innerHTML = `
      <div class="empty-state-icon">📁</div>
      <h3>Aucun dossier pour l'instant</h3>
      <p>Créez votre premier dossier de designer ci-dessus.</p>
    `;
    container.appendChild(empty);
  } else {
    data.designers.forEach((designer, dIdx) => {
      const folder = el('div', { className: 'ref-folder' });
      folder.innerHTML = `
        <div class="ref-folder-header">
          <div class="ref-folder-info">
            <h3 class="ref-folder-name">${designer.name}</h3>
            ${designer.specialty ? `<span class="ref-folder-specialty">${designer.specialty}</span>` : ''}
            <span class="ref-folder-count">${designer.images.length}/20 images</span>
          </div>
          <div class="ref-folder-actions">
            <button class="ref-btn-add-img" data-didx="${dIdx}" title="Ajouter une image">+ Image</button>
            <button class="ref-btn-delete-folder" data-didx="${dIdx}" title="Supprimer le dossier">✕</button>
          </div>
        </div>
        <div class="ref-folder-progress">
          <div class="ref-folder-progress-fill" style="width: ${Math.min(100, (designer.images.length / 20) * 100)}%"></div>
        </div>
      `;

      // Images grid
      if (designer.images.length > 0) {
        const imgGrid = el('div', { className: 'ref-images-grid' });
        designer.images.forEach((img, iIdx) => {
          const imgCard = el('div', { className: 'ref-image-card' });
          const hasPourquoi = img.pourquoi && Object.values(img.pourquoi).some(v => v);
          imgCard.innerHTML = `
            <div class="ref-image-wrapper">
              <img src="${img.url}" alt="${img.caption || ''}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=ref-img-error>⚠️ Image inaccessible</div>'">
            </div>
            ${img.caption ? `<div class="ref-image-caption">${img.caption}</div>` : ''}
            ${hasPourquoi ? `
              <div class="ref-pourquoi-tags">
                ${img.pourquoi.proportions ? '<span class="ref-pq-tag pq-proportions">Proportions</span>' : ''}
                ${img.pourquoi.palette ? '<span class="ref-pq-tag pq-palette">Palette</span>' : ''}
                ${img.pourquoi.materiaux ? '<span class="ref-pq-tag pq-materiaux">Matériaux</span>' : ''}
                ${img.pourquoi.lumiere ? '<span class="ref-pq-tag pq-lumiere">Lumière</span>' : ''}
              </div>
              ${img.pourquoi.autre ? `<div class="ref-pourquoi-note">${img.pourquoi.autre}</div>` : ''}
            ` : '<div class="ref-pourquoi-empty">Cliquez pour noter pourquoi ça vous inspire</div>'}
            <div class="ref-image-actions">
              <button class="ref-btn-edit-pq" data-didx="${dIdx}" data-iidx="${iIdx}">✍️ Pourquoi ?</button>
              <button class="ref-btn-del-img" data-didx="${dIdx}" data-iidx="${iIdx}">✕</button>
            </div>
          `;
          imgGrid.appendChild(imgCard);
        });
        folder.appendChild(imgGrid);
      }

      container.appendChild(folder);
    });
  }

  // Bind events after DOM is ready
  setTimeout(() => {
    // Add designer
    const addBtn = $('#ref-add-designer-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const name = $('#ref-designer-name').value.trim();
        if (!name) { toast('Nom du designer requis.'); return; }
        const specialty = $('#ref-designer-specialty').value.trim();
        const d = loadRefData();
        d.designers.push({ id: 'designer-' + Date.now(), name, specialty, images: [] });
        saveRefData(d);
        toast(`Dossier "${name}" créé !`);
        navigate('references');
      });
    }

    // Delete folder
    $$('.ref-btn-delete-folder').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dIdx = parseInt(btn.dataset.didx);
        const d = loadRefData();
        const name = d.designers[dIdx].name;
        if (confirm(`Supprimer le dossier "${name}" et toutes ses images ?`)) {
          d.designers.splice(dIdx, 1);
          saveRefData(d);
          toast(`Dossier "${name}" supprimé.`);
          navigate('references');
        }
      });
    });

    // Add image
    $$('.ref-btn-add-img').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dIdx = parseInt(btn.dataset.didx);
        openRefImageModal(dIdx);
      });
    });

    // Edit pourquoi
    $$('.ref-btn-edit-pq').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dIdx = parseInt(btn.dataset.didx);
        const iIdx = parseInt(btn.dataset.iidx);
        openRefPourquoiModal(dIdx, iIdx);
      });
    });

    // Delete image
    $$('.ref-btn-del-img').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dIdx = parseInt(btn.dataset.didx);
        const iIdx = parseInt(btn.dataset.iidx);
        const d = loadRefData();
        d.designers[dIdx].images.splice(iIdx, 1);
        saveRefData(d);
        toast('Image supprimée.');
        navigate('references');
      });
    });

    // Click on pourquoi-empty to open modal
    $$('.ref-pourquoi-empty').forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        const card = el.closest('.ref-image-card');
        const editBtn = card.querySelector('.ref-btn-edit-pq');
        if (editBtn) editBtn.click();
      });
    });
  }, 0);
}

function openRefImageModal(dIdx) {
  const overlay = $('#modal-overlay');
  const content = $('#modal-content');
  overlay.classList.remove('hidden');
  content.innerHTML = `
    <div class="modal-title">Ajouter une image d'inspiration</div>
    <div class="modal-field">
      <label>URL de l'image *</label>
      <input type="url" id="ref-modal-url" placeholder="https://... (.jpg, .png, .webp)" autofocus>
    </div>
    <div class="modal-field">
      <label>Légende</label>
      <input type="text" id="ref-modal-caption" placeholder="Nom du projet, lieu, année…">
    </div>
    <div class="modal-actions">
      <button class="btn" id="ref-modal-cancel">Annuler</button>
      <button class="btn btn-primary" id="ref-modal-save">Ajouter</button>
    </div>
  `;
  $('#ref-modal-cancel').onclick = closeModal;
  $('#ref-modal-save').onclick = () => {
    const url = $('#ref-modal-url').value.trim();
    if (!url) { toast('URL de l\'image requise'); return; }
    const d = loadRefData();
    if (d.designers[dIdx].images.length >= 20) {
      toast('Maximum 20 images par dossier. Curatez ! 🎯');
      closeModal();
      return;
    }
    d.designers[dIdx].images.push({
      url,
      caption: $('#ref-modal-caption').value.trim(),
      pourquoi: { proportions: false, palette: false, materiaux: false, lumiere: false, autre: '' }
    });
    saveRefData(d);
    closeModal();
    toast('Image ajoutée ✓');
    navigate('references');
  };
  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
  setTimeout(() => { const f = content.querySelector('input'); if (f) f.focus(); }, 100);
}

function openRefPourquoiModal(dIdx, iIdx) {
  const overlay = $('#modal-overlay');
  const content = $('#modal-content');
  overlay.classList.remove('hidden');

  const d = loadRefData();
  const img = d.designers[dIdx].images[iIdx];
  const pq = img.pourquoi || { proportions: false, palette: false, materiaux: false, lumiere: false, autre: '' };

  content.innerHTML = `
    <div class="modal-title">Pourquoi ce projet m'inspire ?</div>
    ${img.caption ? `<div class="modal-subtitle">${img.caption}</div>` : ''}
    <div class="pq-checkboxes">
      <label class="pq-checkbox-label">
        <input type="checkbox" id="pq-proportions" ${pq.proportions ? 'checked' : ''}>
        <span class="pq-cb-icon">📏</span> Les proportions & l'échelle
      </label>
      <label class="pq-checkbox-label">
        <input type="checkbox" id="pq-palette" ${pq.palette ? 'checked' : ''}>
        <span class="pq-cb-icon">🎨</span> La palette de couleurs
      </label>
      <label class="pq-checkbox-label">
        <input type="checkbox" id="pq-materiaux" ${pq.materiaux ? 'checked' : ''}>
        <span class="pq-cb-icon">🪨</span> Le choix des matériaux
      </label>
      <label class="pq-checkbox-label">
        <input type="checkbox" id="pq-lumiere" ${pq.lumiere ? 'checked' : ''}>
        <span class="pq-cb-icon">💡</span> Le jeu de lumière
      </label>
    </div>
    <div class="modal-field">
      <label>Notes libres — qu'est-ce qui vous touche exactement ?</label>
      <textarea id="pq-autre" placeholder="Le contraste entre le béton brut et le velours, la façon dont la lumière zénithale…" style="min-height:100px">${pq.autre || ''}</textarea>
    </div>
    <div class="modal-actions">
      <button class="btn" id="pq-cancel">Annuler</button>
      <button class="btn btn-primary" id="pq-save">Enregistrer</button>
    </div>
  `;
  $('#pq-cancel').onclick = closeModal;
  $('#pq-save').onclick = () => {
    const updated = loadRefData();
    updated.designers[dIdx].images[iIdx].pourquoi = {
      proportions: $('#pq-proportions').checked,
      palette: $('#pq-palette').checked,
      materiaux: $('#pq-materiaux').checked,
      lumiere: $('#pq-lumiere').checked,
      autre: $('#pq-autre').value.trim()
    };
    saveRefData(updated);
    closeModal();
    toast('Analyse enregistrée ✓');
    navigate('references');
  };
  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
  setTimeout(() => { const f = content.querySelector('textarea'); if (f) f.focus(); }, 100);
}

// -------- Sourcing Matériaux --------
const SOURCING_GUIDE = [
  {
    category: '🪨 Pierre naturelle',
    method: 'La pierre naturelle s\'achète chez des marbriers/carriers spécialisés. Ne JAMAIS acheter en grande surface bricolage pour un projet sérieux.',
    sources: [
      { name: 'Carrières de pierre locales', type: 'Fournisseur direct', desc: 'Contacter les carrières de votre région. Prix imbattable, qualité contrôlable. Chercher « carrière pierre + [votre région] ».', location: 'France entière' },
      { name: 'Paris Céramique / MDY', type: 'Showroom pro', desc: 'Showrooms parisiens avec large choix de marbres, granits, travertins. Échantillons disponibles. Sur RDV.', location: 'Paris / IDF' },
      { name: 'Cersaie (salon)', type: 'Salon international', desc: 'Bologne, chaque septembre. LE salon mondial de la céramique et pierre. Rencontrer les carriers italiens, espagnols, portugais.', location: 'Bologne, Italie' },
      { name: 'StonExpo / Marmomac', type: 'Salon international', desc: 'Vérone, septembre. Le plus grand salon mondial de la pierre. 1600 exposants de 56 pays.', location: 'Vérone, Italie' },
      { name: 'Fournisseurs en ligne', type: 'Web', desc: 'StoneContact.com : marketplace mondiale de pierre. Demande de devis + échantillons. Attention aux frais de port (la pierre est lourde).', location: 'International' }
    ],
    tips: 'Toujours demander un échantillon RÉEL avant de commander. La photo ne rend jamais la texture et les veinures. Commander 10-15% de plus que la surface calculée (casse + coupes).'
  },
  {
    category: '🪵 Bois',
    method: 'Le bois s\'achète chez des négociants bois ou directement en scierie. Pour le parquet : chez des parqueteurs spécialisés.',
    sources: [
      { name: 'Scieries locales', type: 'Fournisseur direct', desc: 'Bois brut, sur-mesure, essences locales. Idéal pour les menuiseries sur-mesure. Chercher « scierie + [département] ».', location: 'France entière' },
      { name: 'Négoces bois (Dispano, Dufour, Ducerf)', type: 'Négociant', desc: 'Large stock de panneaux, massifs et placages. Livraison chantier. Catalogue en ligne. Compte pro recommandé.', location: 'France entière' },
      { name: 'Parquets spécialisés (Emois & Bois, Panaget)', type: 'Fabricant', desc: 'Parquets massifs et contrecollés de qualité. Showrooms à visiter. Possibilité de teintes sur-mesure.', location: 'Paris + réseau national' },
      { name: 'Récupération / Réemploi', type: 'Circuit alternatif', desc: 'Bois de récupération : Emmaüs, Le Bon Coin, Backacia (plateforme réemploi BTP). Planches de coffrage, vieilles poutres, parquet ancien.', location: 'France entière' },
      { name: 'Bois exotiques : Teck, Iroko', type: 'Importateur spécialisé', desc: 'Pour le teck ou bois tropicaux : exiger la certification FSC ou PEFC. Fournisseurs : Bois Tropicaux de France, Jammes.', location: 'Bordeaux, Le Havre' }
    ],
    tips: 'Visiter la scierie/le négoce pour choisir les lots sur place (chaque lot a des variations). Pour le sur-mesure, donner les plans cotés au menuisier qui commandera le bon volume.'
  },
  {
    category: '⚙️ Métaux (laiton, acier, cuivre)',
    method: 'Les métaux pour la déco/agencement se trouvent chez des métalliers-serruriers d\'art ou des négoces métaux spécialisés.',
    sources: [
      { name: 'Métalliers-serruriers d\'art', type: 'Artisan', desc: 'Pour les pièces sur-mesure (étagères, pieds de table, garde-corps, miroirs). Trouver via les Compagnons du Devoir ou Houzz Pro.', location: 'France entière' },
      { name: 'Descours & Cabaud / KDI', type: 'Négociant métaux', desc: 'Profilés, tubes, tôles en acier, inox, alu. Découpe sur-mesure. Compte pro nécessaire.', location: 'France entière' },
      { name: 'La Quincaillerie (laquincaillerie.com)', type: 'E-commerce spécialisé', desc: 'Poignées, boutons, crémones en laiton, cuivre, bronze. Large gamme haut de gamme. Envoi d\'échantillons.', location: 'En ligne' },
      { name: 'Dauby, Joseph Giles, Buster + Punch', type: 'Marques design', desc: 'Quincaillerie architecturale design (poignées, interrupteurs). Dauby (Belgique) pour le laiton brut. Buster+Punch (UK) pour le style industriel chic.', location: 'International' }
    ],
    tips: 'Le laiton brut va patiner (oxydation naturelle) — prévenir le client et proposer un vernis si nécessaire. L\'acier brut doit être traité (vernis mat, cire, ou thermolaquage) sinon il rouille.'
  },
  {
    category: '🔲 Carrelage & Céramique',
    method: 'Le carrelage se trouve chez des carreleurs grossistes ou dans les showrooms des fabricants. Éviter les GSB pour du haut de gamme.',
    sources: [
      { name: 'Showrooms fabricants (Mutina, Marazzi, Porcelanosa)', type: 'Showroom', desc: 'Les grandes marques ont des showrooms avec conseil. Mutina = design italien pointu. Marazzi = large gamme. Porcelanosa = bon rapport qualité/prix.', location: 'Paris, Lyon, Marseille' },
      { name: 'Emery & Cie', type: 'Artisanal haut de gamme', desc: 'Zelliges faits main, carreaux de ciment, peintures à la chaux. Le graal du zellige artisanal. Showroom à Bruxelles, points de vente en France.', location: 'Bruxelles + France' },
      { name: 'Carré Sol, La Cimenterie de la Tour', type: 'Artisanal français', desc: 'Carreaux de ciment artisanaux, motifs personnalisables. Fabrication française. Délai 4-8 semaines.', location: 'Sud de la France' },
      { name: 'Cersaie Bologne', type: 'Salon international', desc: 'Septembre à Bologne. 800 exposants céramique du monde entier. C\'est ici que vous découvrirez des fournisseurs introuvables en France.', location: 'Bologne, Italie' },
      { name: 'Comptoir du Cérame', type: 'Grossiste', desc: 'Grossiste accessible aux pros et particuliers. Large choix, prix compétitifs. Plusieurs showrooms en France.', location: 'France (multi-sites)' }
    ],
    tips: 'Le zellige artisanal a des irrégularités VOULUES — bien expliquer au client. Les carreaux de ciment doivent être imperméabilisés. Toujours commander dans le même lot (les teintes varient entre lots).'
  },
  {
    category: '🧵 Textiles (lin, velours, laine)',
    method: 'Les tissus d\'ameublement se trouvent chez des éditeurs textiles spécialisés. Jamais en mercerie grand public pour un projet pro.',
    sources: [
      { name: 'Éditeurs textiles (Casamance, Élitis, Pierre Frey)', type: 'Éditeur', desc: 'Les grands éditeurs français de tissus d\'ameublement. Showrooms sur RDV (Paris, Saint-Germain principalement). Catalogue + échantillons gratuits sur demande avec compte pro.', location: 'Paris principalement' },
      { name: 'Dedar, Rubelli, Kvadrat', type: 'Éditeur international', desc: 'Dedar (Milan) : luxe contemporain. Rubelli (Venise) : tradition vénitienne. Kvadrat (Danemark) : design scandinave, Raf Simons collab. Agents en France.', location: 'International + agents FR' },
      { name: 'Le Marché Saint-Pierre / Tissus Reine', type: 'Marché', desc: 'Montmartre, Paris. Tissus en tout genre, prix intéressants. Idéal pour le sourcing rapide de tissus d\'ameublement et rideaux.', location: 'Paris 18e' },
      { name: 'Maison Thévenon, Métissage & Matières', type: 'Made in France', desc: 'Tisseurs français, lin naturel, coton bio, chanvre. Pour les projets éco-responsables et le « Made in France ».', location: 'Lyon, Normandie' }
    ],
    tips: 'Toujours demander la fiche technique du tissu (test Martindale pour la résistance, classement feu M1 pour les ERP). Les éditeurs envoient des échantillons gratuitement — en demander systématiquement.'
  },
  {
    category: '🏛️ Enduits & Revêtements muraux',
    method: 'Les enduits décoratifs (tadelakt, stuc, béton ciré) se trouvent chez des fabricants spécialisés ou directement chez l\'artisan applicateur.',
    sources: [
      { name: 'Mercadier', type: 'Fabricant', desc: 'Béton ciré, enduits minéraux, peintures effet. Leader français. Formation applicateurs. Showroom et réseau de poseurs agréés.', location: 'France entière' },
      { name: 'Marius Aurenti', type: 'Fabricant artisanal', desc: 'Tadelakt authentique, béton ciré, enduits chaux. Provençal, très haute qualité. Réseau d\'applicateurs formés.', location: 'Provence + national' },
      { name: 'Ressource Peintures', type: 'Peintures premium', desc: '1200 teintes, finitions mates profondes (façon Farrow & Ball mais français). Showrooms élégants. Nuancier physique indispensable.', location: 'Paris + réseau national' },
      { name: 'Farrow & Ball, Paint & Paper Library', type: 'Peintures anglaises', desc: 'Références mondiales en peinture haut de gamme. Teintes profondes, finis exceptionnels. Points de vente en France + en ligne.', location: 'International + FR' },
      { name: 'Artisans stuqueurs / tadelakteurs', type: 'Artisan', desc: 'Les meilleurs enduits sont posés par des artisans spécialisés qui fournissent aussi la matière. Trouver via le réseau des Métiers d\'Art.', location: 'France entière' }
    ],
    tips: 'Le béton ciré et le tadelakt nécessitent un applicateur FORMÉ — ne jamais laisser un artisan non qualifié les poser. Demander des chantiers de référence. Prévoir un échantillon sur site avant la pose complète.'
  },
  {
    category: '💡 Luminaires',
    method: 'Les luminaires design se trouvent chez des éditeurs de luminaires ou des concept stores. Pour le sur-mesure : artisans luminairistes.',
    sources: [
      { name: 'Flos, Artemide, Louis Poulsen', type: 'Éditeur design', desc: 'Les marques iconiques du luminaire design. Disponibles via des revendeurs agréés (Silvera, Made in Design, DCW). Remise pro possible.', location: 'Revendeurs FR' },
      { name: 'DCW Éditions, CVL Luminaires, Sammode', type: 'Made in France', desc: 'Luminaires design fabriqués en France. DCW (Gras, ISP), CVL (laiton artisanal), Sammode (industriel). Showrooms sur RDV.', location: 'Paris + ateliers' },
      { name: 'Nedgis, Lightshop, Made in Design', type: 'E-commerce', desc: 'Boutiques en ligne avec large sélection de luminaires design. Filtres par style/designer/prix. Livraison rapide.', location: 'En ligne' },
      { name: 'Artisans luminairistes', type: 'Sur-mesure', desc: 'Pour les suspensions, appliques et lustres uniques. Trouver via Etsy (filtrer \"fait main\"), Instagram, Ateliers d\'Art de France.', location: 'France entière' }
    ],
    tips: 'Penser l\'éclairage en 3 couches : général (plafonnier/spots), fonctionnel (liseuse, plan de travail), d\'ambiance (lampe, ruban LED indirect). Le luminaire est souvent le dernier choix mais devrait être le premier.'
  },
  {
    category: '🛋️ Mobilier',
    method: 'Le mobilier se source selon le positionnement : éditeurs pour le design, artisans pour le sur-mesure, vintage pour le caractère.',
    sources: [
      { name: 'Éditeurs (Cassina, B&B Italia, Vitra, Hay)', type: 'Éditeur design', desc: 'Le haut de gamme et le design iconique. Showrooms à Paris (Rive Gauche principalement). Remises pro sur présentation de K-bis.', location: 'Paris + revendeurs' },
      { name: 'Silvera, Merci, The Conran Shop', type: 'Concept store', desc: 'Multi-marques premium. Idéal pour sourcer mobilier + objets + luminaires en un lieu. Silvera = le plus pro-friendly.', location: 'Paris' },
      { name: 'Vintage : 1stDibs, Pamono, Selency', type: 'Vintage / seconde main', desc: '1stDibs : luxe vintage international. Pamono : design européen. Selency : français, plus accessible. Marché Paul Bert (Puces de Saint-Ouen) pour les trouvailles physiques.', location: 'En ligne + Saint-Ouen' },
      { name: 'Artisans ébénistes', type: 'Sur-mesure', desc: 'Pour les meubles uniques (bibliothèque, meuble TV, dressing). Compagnons du Devoir, annuaire des Ateliers d\'Art de France, Instagram.', location: 'France entière' },
      { name: 'Mobilier accessible (Tikamoon, AM.PM, Ethnicraft)', type: 'Milieu de gamme', desc: 'Bon rapport qualité/prix. Tikamoon = bois massif abordable. AM.PM = La Redoute premium. Ethnicraft = chêne et teck épurés.', location: 'En ligne + magasins' }
    ],
    tips: 'Mixer les gammes : 1-2 pièces iconiques (éditeur) + vintage + sur-mesure + accessible. C\'est le mix qui crée un intérieur unique. Toujours vérifier les DÉLAIS de livraison (4-12 semaines selon les marques).'
  }
];

function loadShoppingList() {
  try {
    const raw = localStorage.getItem('architek-pro-shopping');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [];
}

function saveShoppingList(list) {
  localStorage.setItem('architek-pro-shopping', JSON.stringify(list));
}

function renderSourcing(container) {
  // Header
  const header = el('div', { className: 'sourcing-header' });
  header.innerHTML = `
    <h2>📍 Sourcing Matériaux</h2>
    <p>Où et comment trouver les matériaux que vous voyez dans vos inspirations. Guide complet + shopping list personnelle.</p>
  `;
  container.appendChild(header);

  // Tabs: Guide / Shopping List
  const tabs = el('div', { className: 'collection-tabs' });
  let activeTab = 'guide';

  function renderTabContent() {
    const existing = $('#sourcing-content');
    if (existing) existing.remove();
    const content = el('div', { id: 'sourcing-content' });

    if (activeTab === 'guide') {
      renderSourcingGuide(content);
    } else {
      renderShoppingList(content);
    }
    container.appendChild(content);
  }

  const tabDefs = [
    { id: 'guide', label: '📖 Guide des fournisseurs' },
    { id: 'shopping', label: '🛒 Ma Shopping List' }
  ];

  tabDefs.forEach(t => {
    const tabBtn = el('button', {
      className: `collection-tab ${t.id === activeTab ? 'active' : ''}`,
      onClick: () => {
        activeTab = t.id;
        $$('.collection-tab').forEach(tb => tb.classList.remove('active'));
        tabBtn.classList.add('active');
        renderTabContent();
      }
    }, t.label);
    tabs.appendChild(tabBtn);
  });

  container.appendChild(tabs);
  renderTabContent();
}

function renderSourcingGuide(content) {
  // Intro tip
  const tip = el('div', { className: 'sourcing-tip' });
  tip.innerHTML = `
    <strong>💡 La méthode quand vous voyez un matériau qui vous plaît mais ne savez pas où le trouver :</strong>
    <ol>
      <li><strong>Identifier</strong> — Quel type de matériau est-ce ? (pierre, bois, métal, enduit…)</li>
      <li><strong>Préciser</strong> — Quelle variété exacte ? (ex: pas juste "marbre" mais "marbre Calacatta Oro")</li>
      <li><strong>Chercher le fabricant</strong> — Google Image inversé sur la photo, ou demander en commentaire Instagram</li>
      <li><strong>Contacter les showrooms</strong> — Apporter la photo, ils identifient souvent le produit ou proposent un équivalent</li>
      <li><strong>Demander des échantillons</strong> — TOUJOURS voir et toucher avant de commander</li>
    </ol>
  `;
  content.appendChild(tip);

  // Guide cards
  SOURCING_GUIDE.forEach((cat, catIdx) => {
    const card = el('div', { className: 'sourcing-cat-card' });
    card.innerHTML = `
      <div class="sourcing-cat-header" data-catidx="${catIdx}">
        <h3>${cat.category}</h3>
        <p class="sourcing-cat-method">${cat.method}</p>
        <span class="sourcing-cat-toggle">▼</span>
      </div>
      <div class="sourcing-cat-body" id="sourcing-body-${catIdx}">
        <div class="sourcing-sources">
          ${cat.sources.map(s => `
            <div class="sourcing-source">
              <div class="sourcing-source-header">
                <strong>${s.name}</strong>
                <span class="sourcing-source-type">${s.type}</span>
              </div>
              <p>${s.desc}</p>
              <span class="sourcing-source-location">📍 ${s.location}</span>
            </div>
          `).join('')}
        </div>
        <div class="sourcing-cat-tip">
          <strong>💡 Conseil :</strong> ${cat.tips}
        </div>
      </div>
    `;
    content.appendChild(card);
  });

  // Bind toggle events
  setTimeout(() => {
    $$('.sourcing-cat-header').forEach(header => {
      header.style.cursor = 'pointer';
      header.addEventListener('click', () => {
        const idx = header.dataset.catidx;
        const body = $(`#sourcing-body-${idx}`);
        const toggle = header.querySelector('.sourcing-cat-toggle');
        if (body.classList.contains('collapsed')) {
          body.classList.remove('collapsed');
          toggle.textContent = '▼';
        } else {
          body.classList.add('collapsed');
          toggle.textContent = '▶';
        }
      });
    });
  }, 0);
}

function renderShoppingList(content) {
  const list = loadShoppingList();

  // Add item form
  const form = el('div', { className: 'shopping-add-form' });
  form.innerHTML = `
    <h3>Ajouter un matériau à trouver</h3>
    <div class="shopping-form-grid">
      <input type="text" id="shop-name" class="conseil-input" placeholder="Nom du matériau (ex: Zellige vert émeraude)">
      <select id="shop-cat" class="conseil-input">
        <option value="">Catégorie…</option>
        <option value="Pierre">🪨 Pierre</option>
        <option value="Bois">🪵 Bois</option>
        <option value="Métal">⚙️ Métal</option>
        <option value="Carrelage">🔲 Carrelage</option>
        <option value="Textile">🧵 Textile</option>
        <option value="Enduit">🏛️ Enduit</option>
        <option value="Luminaire">💡 Luminaire</option>
        <option value="Mobilier">🛋️ Mobilier</option>
        <option value="Autre">📦 Autre</option>
      </select>
      <input type="text" id="shop-project" class="conseil-input" placeholder="Pour quel projet ? (optionnel)">
      <input type="text" id="shop-ref" class="conseil-input" placeholder="Référence / lien image d'inspiration (optionnel)">
      <textarea id="shop-notes" class="conseil-textarea" rows="2" placeholder="Notes : dimensions, quantité, couleur exacte, budget…"></textarea>
      <button id="shop-add-btn" class="btn-conseil-add">+ Ajouter à la liste</button>
    </div>
  `;
  content.appendChild(form);

  // List
  if (list.length === 0) {
    const empty = el('div', { className: 'empty-state' });
    empty.innerHTML = `
      <div class="empty-state-icon">🛒</div>
      <h3>Shopping list vide</h3>
      <p>Ajoutez les matériaux que vous cherchez pour vos projets.</p>
    `;
    content.appendChild(empty);
  } else {
    // Stats
    const found = list.filter(i => i.found).length;
    const stats = el('div', { className: 'shopping-stats' });
    stats.innerHTML = `<span>${list.length} matériau${list.length > 1 ? 'x' : ''}</span> · <span class="shopping-found">${found} trouvé${found > 1 ? 's' : ''}</span> · <span class="shopping-pending">${list.length - found} à trouver</span>`;
    content.appendChild(stats);

    const listContainer = el('div', { className: 'shopping-list' });
    list.forEach((item, i) => {
      const row = el('div', { className: `shopping-item ${item.found ? 'shopping-item-found' : ''}` });
      row.innerHTML = `
        <div class="shopping-item-check">
          <input type="checkbox" class="shop-check" data-idx="${i}" ${item.found ? 'checked' : ''} title="Marquer comme trouvé">
        </div>
        <div class="shopping-item-info">
          <div class="shopping-item-name">${item.found ? '<s>' + item.name + '</s>' : item.name}</div>
          <div class="shopping-item-meta">
            ${item.category ? `<span class="shopping-item-cat">${item.category}</span>` : ''}
            ${item.project ? `<span class="shopping-item-project">📐 ${item.project}</span>` : ''}
          </div>
          ${item.notes ? `<div class="shopping-item-notes">${item.notes}</div>` : ''}
          ${item.ref ? `<div class="shopping-item-ref">🔗 ${item.ref}</div>` : ''}
          ${item.foundNote ? `<div class="shopping-item-found-note">✅ ${item.foundNote}</div>` : ''}
        </div>
        <div class="shopping-item-actions">
          ${!item.found ? `<button class="shop-found-btn" data-idx="${i}" title="J'ai trouvé !">✅ Trouvé</button>` : ''}
          <button class="shop-del-btn" data-idx="${i}" title="Supprimer">✕</button>
        </div>
      `;
      listContainer.appendChild(row);
    });
    content.appendChild(listContainer);
  }

  // Events
  setTimeout(() => {
    const addBtn = $('#shop-add-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const name = $('#shop-name').value.trim();
        if (!name) { toast('Nom du matériau requis'); return; }
        const l = loadShoppingList();
        l.push({
          name,
          category: $('#shop-cat').value,
          project: $('#shop-project').value.trim(),
          ref: $('#shop-ref').value.trim(),
          notes: $('#shop-notes').value.trim(),
          found: false,
          foundNote: '',
          date: new Date().toISOString()
        });
        saveShoppingList(l);
        toast('Matériau ajouté à la shopping list !');
        navigate('sourcing');
      });
    }

    $$('.shop-check').forEach(cb => {
      cb.addEventListener('change', () => {
        const idx = parseInt(cb.dataset.idx);
        const l = loadShoppingList();
        l[idx].found = cb.checked;
        if (!cb.checked) l[idx].foundNote = '';
        saveShoppingList(l);
        navigate('sourcing');
        // Switch to shopping tab after re-render
        setTimeout(() => {
          const shopTab = $$('.collection-tab')[1];
          if (shopTab) shopTab.click();
        }, 50);
      });
    });

    $$('.shop-found-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx);
        const overlay = $('#modal-overlay');
        const mc = $('#modal-content');
        overlay.classList.remove('hidden');
        mc.innerHTML = `
          <div class="modal-title">🎉 Où avez-vous trouvé ce matériau ?</div>
          <div class="modal-field">
            <label>Fournisseur / lieu / lien</label>
            <textarea id="found-note" placeholder="Ex: Trouvé chez MDY Paris, réf. TRAV-032, 85€/m² posé…" autofocus style="min-height:80px"></textarea>
          </div>
          <div class="modal-actions">
            <button class="btn" id="found-cancel">Annuler</button>
            <button class="btn btn-primary" id="found-save">Marquer comme trouvé ✓</button>
          </div>
        `;
        $('#found-cancel').onclick = closeModal;
        $('#found-save').onclick = () => {
          const l = loadShoppingList();
          l[idx].found = true;
          l[idx].foundNote = $('#found-note').value.trim();
          saveShoppingList(l);
          closeModal();
          toast('Matériau trouvé ! 🎯');
          navigate('sourcing');
          setTimeout(() => {
            const shopTab = $$('.collection-tab')[1];
            if (shopTab) shopTab.click();
          }, 50);
        };
        overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
      });
    });

    $$('.shop-del-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx);
        const l = loadShoppingList();
        l.splice(idx, 1);
        saveShoppingList(l);
        toast('Matériau supprimé.');
        navigate('sourcing');
        setTimeout(() => {
          const shopTab = $$('.collection-tab')[1];
          if (shopTab) shopTab.click();
        }, 50);
      });
    });
  }, 0);
}

// -------- Search --------
function renderSearch(container) {
  const query = state.searchQuery.toLowerCase().trim();
  const results = [];

  APP_DATA.domains.forEach(d => {
    d.fiches.forEach(f => {
      const searchable = [f.title, f.subtitle, f.summary, ...f.tags, ...(f.sections || []).map(s => s.title + ' ' + s.content), ...(f.keyPoints || []), ...(f.tips || [])].join(' ').toLowerCase();
      if (searchable.includes(query)) {
        results.push({ domain: d, fiche: f });
      }
    });
  });

  const header = el('div', { className: 'search-results-header' });
  header.innerHTML = `
    <h2>Résultats pour « ${escapeHtml(state.searchQuery)} »</h2>
    <div class="search-results-count">${results.length} résultat${results.length > 1 ? 's' : ''} trouvé${results.length > 1 ? 's' : ''}</div>
  `;
  container.appendChild(header);

  if (results.length === 0) {
    const empty = el('div', { className: 'empty-state' });
    empty.innerHTML = `
      <div class="empty-state-icon">⌕</div>
      <h3>Aucun résultat</h3>
      <p>Essayez avec d'autres termes : matériau, style, norme…</p>
    `;
    container.appendChild(empty);
    return;
  }

  results.forEach(r => {
    const item = el('div', { className: 'search-result-item', onClick: () => navigate('fiche', r.domain.id, r.fiche.id) });

    // Highlight in summary
    const regex = new RegExp(`(${escapeRegex(state.searchQuery)})`, 'gi');
    const highlighted = r.fiche.summary.replace(regex, '<mark>$1</mark>');

    item.innerHTML = `
      <div class="search-result-domain">${r.domain.icon} ${r.domain.name}</div>
      <div class="search-result-title">${r.fiche.title}</div>
      <div class="search-result-excerpt">${highlighted}</div>
    `;
    container.appendChild(item);
  });
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============ MODAL ============
function openModal(type, ficheKey) {
  const overlay = $('#modal-overlay');
  const content = $('#modal-content');
  overlay.classList.remove('hidden');
  content.innerHTML = '';

  if (type === 'link') {
    content.innerHTML = `
      <div class="modal-title">Ajouter un lien de référence</div>
      <div class="modal-field">
        <label>URL *</label>
        <input type="url" id="modal-url" placeholder="https://..." autofocus>
      </div>
      <div class="modal-field">
        <label>Titre</label>
        <input type="text" id="modal-title" placeholder="Titre du lien">
      </div>
      <div class="modal-field">
        <label>Description</label>
        <textarea id="modal-desc" placeholder="Pourquoi ce lien est pertinent..."></textarea>
      </div>
      <div class="modal-actions">
        <button class="btn" id="modal-cancel">Annuler</button>
        <button class="btn btn-primary" id="modal-save">Ajouter</button>
      </div>
    `;
    $('#modal-cancel').onclick = closeModal;
    $('#modal-save').onclick = () => {
      const url = $('#modal-url').value.trim();
      if (!url) { toast('URL requise'); return; }
      addPersonalItem(ficheKey, 'links', {
        url,
        title: $('#modal-title').value.trim(),
        description: $('#modal-desc').value.trim()
      });
      closeModal();
      refreshPersonal(ficheKey);
      toast('Lien ajouté ✓');
    };
  }

  if (type === 'image') {
    content.innerHTML = `
      <div class="modal-title">Ajouter une image d'inspiration</div>
      <div class="modal-field">
        <label>URL de l'image *</label>
        <input type="url" id="modal-url" placeholder="https://... (.jpg, .png, .webp)" autofocus>
      </div>
      <div class="modal-field">
        <label>Légende</label>
        <input type="text" id="modal-caption" placeholder="Description de l'image">
      </div>
      <div class="modal-actions">
        <button class="btn" id="modal-cancel">Annuler</button>
        <button class="btn btn-primary" id="modal-save">Ajouter</button>
      </div>
    `;
    $('#modal-cancel').onclick = closeModal;
    $('#modal-save').onclick = () => {
      const url = $('#modal-url').value.trim();
      if (!url) { toast('URL de l\'image requise'); return; }
      addPersonalItem(ficheKey, 'images', {
        url,
        caption: $('#modal-caption').value.trim()
      });
      closeModal();
      refreshPersonal(ficheKey);
      toast('Image ajoutée ✓');
    };
  }

  if (type === 'note') {
    content.innerHTML = `
      <div class="modal-title">Ajouter une note technique</div>
      <div class="modal-field">
        <label>Titre</label>
        <input type="text" id="modal-title" placeholder="Sujet de la note" autofocus>
      </div>
      <div class="modal-field">
        <label>Note *</label>
        <textarea id="modal-text" placeholder="Vos observations, détails techniques, dimensions, références fournisseur..." style="min-height:120px"></textarea>
      </div>
      <div class="modal-actions">
        <button class="btn" id="modal-cancel">Annuler</button>
        <button class="btn btn-primary" id="modal-save">Ajouter</button>
      </div>
    `;
    $('#modal-cancel').onclick = closeModal;
    $('#modal-save').onclick = () => {
      const text = $('#modal-text').value.trim();
      if (!text) { toast('Note requise'); return; }
      addPersonalItem(ficheKey, 'notes', {
        title: $('#modal-title').value.trim(),
        text
      });
      closeModal();
      refreshPersonal(ficheKey);
      toast('Note ajoutée ✓');
    };
  }

  // Close on overlay click
  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };

  // Focus first input
  setTimeout(() => {
    const first = content.querySelector('input, textarea');
    if (first) first.focus();
  }, 100);
}

function closeModal() {
  $('#modal-overlay').classList.add('hidden');
}

// ============ SIDEBAR NAV ============
function buildSidebar() {
  const navDomains = $('#nav-domains');
  navDomains.innerHTML = '';

  APP_DATA.domains.forEach(d => {
    const prog = domainProgress(d.id);
    const item = el('a', {
      href: '#',
      className: 'nav-item',
      'data-view': 'domain',
      'data-domain': d.id,
      onClick: (e) => { e.preventDefault(); navigate('domain', d.id); closeMobileMenu(); }
    });
    item.innerHTML = `
      <span class="nav-icon">${d.icon}</span>
      <span class="nav-label">${d.name}</span>
      ${prog > 0 ? `<span class="nav-progress">${prog}%</span>` : ''}
    `;
    navDomains.appendChild(item);
  });
}

// ============ SEARCH ============
function initSearch() {
  const input = $('#search-input');
  let debounce;

  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      const q = input.value.trim();
      if (q.length >= 2) {
        state.searchQuery = q;
        navigate('search');
      } else if (q.length === 0 && state.currentView === 'search') {
        navigate('dashboard');
      }
    }, 300);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      input.blur();
      if (state.currentView === 'search') navigate('dashboard');
    }
  });

  // Keyboard shortcut /
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== input && !$('#modal-overlay').classList.contains('hidden') === false) {
      // Only focus if modal is not open
      if ($('#modal-overlay').classList.contains('hidden')) {
        e.preventDefault();
        input.focus();
      }
    }
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// ============ MOBILE MENU ============
function initMobileMenu() {
  const toggle = $('#menu-toggle');
  const sidebar = $('#sidebar');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('open');
  });
}

function closeMobileMenu() {
  $('#menu-toggle').classList.remove('active');
  $('#sidebar').classList.remove('open');
}

// ============ NAV EVENTS ============
function initNavEvents() {
  // Dashboard link
  const dashLink = $('[data-view="dashboard"]');
  if (dashLink) {
    dashLink.addEventListener('click', (e) => { e.preventDefault(); navigate('dashboard'); closeMobileMenu(); });
  }

  // Collection link
  const collLink = $('[data-view="collection"]');
  if (collLink) {
    collLink.addEventListener('click', (e) => { e.preventDefault(); navigate('collection'); closeMobileMenu(); });
  }

  // Conseils link
  const consLink = $('[data-view="conseils"]');
  if (consLink) {
    consLink.addEventListener('click', (e) => { e.preventDefault(); navigate('conseils'); closeMobileMenu(); });
  }

  // References link
  const refLink = $('[data-view="references"]');
  if (refLink) {
    refLink.addEventListener('click', (e) => { e.preventDefault(); navigate('references'); closeMobileMenu(); });
  }

  // Sourcing link
  const srcLink = $('[data-view="sourcing"]');
  if (srcLink) {
    srcLink.addEventListener('click', (e) => { e.preventDefault(); navigate('sourcing'); closeMobileMenu(); });
  }
}

// ============ INIT ============
function init() {
  buildSidebar();
  initNavEvents();
  initSearch();
  initMobileMenu();
  navigate('dashboard');
}

document.addEventListener('DOMContentLoaded', init);
