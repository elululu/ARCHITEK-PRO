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

  // Update URL hash for sharing
  if (view === 'fiche' && domainId && ficheId) {
    history.replaceState(null, '', `#${domainId}/${ficheId}`);
  } else if (view === 'domain' && domainId) {
    history.replaceState(null, '', `#${domainId}`);
  } else {
    history.replaceState(null, '', window.location.pathname);
  }

  // Mark as read when opening a fiche
  if (view === 'fiche' && domainId && ficheId) {
    const key = ficheKey(domainId, ficheId);
    if (!isRead(key)) {
      state.userData.read.push(key);
    }
    // Track recently viewed (max 10)
    if (!state.userData.recentlyViewed) state.userData.recentlyViewed = [];
    state.userData.recentlyViewed = state.userData.recentlyViewed.filter(k => k !== key);
    state.userData.recentlyViewed.unshift(key);
    if (state.userData.recentlyViewed.length > 10) state.userData.recentlyViewed.length = 10;
    saveUserData();
  }

  updateNav();
  updateBreadcrumb();
  render();
  window.scrollTo(0, 0);
}

function updateNav() {
  $$('.nav-item').forEach(item => {
    item.classList.remove('active');
    const view = item.dataset.view;
    const domain = item.dataset.domain;
    // Domaine ou fiche : activer seulement le bon domaine
    if (view === 'domain') {
      if ((state.currentView === 'domain' || state.currentView === 'fiche') && domain === state.currentDomain) {
        item.classList.add('active');
      }
    } else {
      // Autres items (dashboard, collection, atelier, sourcing)
      if (view === state.currentView) item.classList.add('active');
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

  if (state.currentView === 'atelier') {
    parts.push({ label: 'Mon Atelier', current: true });
  }

  if (state.currentView === 'sourcing') {
    parts.push({ label: 'Sourcing Matériaux', current: true });
  }

  if (state.currentView === 'veille') {
    parts.push({ label: 'Ma Veille', current: true });
  }

  if (state.currentView === 'quiz') {
    parts.push({ label: 'Quiz / Flashcards', current: true });
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
    case 'atelier': renderAtelier(content); break;
    case 'sourcing': renderSourcing(content); break;
    case 'veille': renderVeille(content); break;
    case 'quiz': renderQuiz(content); break;
    case 'search': renderSearch(content); break;
  }

  // Apply glossary highlights on fiche pages
  setTimeout(() => applyGlossaryHighlights(), 50);
}

// -------- Dashboard --------
function renderDashboard(container) {
  const stats = countStats();
  const etudes = loadEtudes();
  const veille = loadVeille();

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
    { n: stats.favCount, l: 'Favoris' },
    { n: etudes.length, l: 'Études' },
    { n: veille.length, l: 'Veille' }
  ];
  statItems.forEach(s => {
    const card = el('div', { className: 'stat-card' });
    card.innerHTML = `<div class="stat-number">${s.n}</div><div class="stat-label">${s.l}</div>`;
    statsRow.appendChild(card);
  });

  container.appendChild(hero);
  container.appendChild(statsRow);

  // Action bar: random + data management
  const actionBar = el('div', { className: 'dashboard-action-bar' });

  const exportBtn = el('button', { className: 'btn-action-secondary', onClick: exportAllData });
  exportBtn.innerHTML = '📥 Exporter';

  const randomBtn = el('button', {
    className: 'btn-random',
    onClick: () => {
      const allFiches = [];
      APP_DATA.domains.forEach(d => d.fiches.forEach(f => allFiches.push({ d, f })));
      const pick = allFiches[Math.floor(Math.random() * allFiches.length)];
      navigate('fiche', pick.d.id, pick.f.id);
    }
  });
  randomBtn.innerHTML = '✦ Découvrir une fiche au hasard';

  const importBtn = el('button', { className: 'btn-action-secondary', onClick: importAllData });
  importBtn.innerHTML = '📤 Importer';

  actionBar.appendChild(exportBtn);
  actionBar.appendChild(randomBtn);
  actionBar.appendChild(importBtn);
  container.appendChild(actionBar);

  // Recently viewed fiches
  const recent = state.userData.recentlyViewed || [];
  if (recent.length > 0) {
    const recentSection = el('div', { className: 'dashboard-section' });
    recentSection.innerHTML = `<div class="dashboard-section-header"><h2>🕐 Consultées récemment</h2></div>`;
    const recentGrid = el('div', { className: 'fiches-grid' });
    recent.slice(0, 6).forEach(key => {
      const [dId, fId] = key.split('::');
      const d = getDomain(dId);
      const f = d ? d.fiches.find(x => x.id === fId) : null;
      if (!d || !f) return;
      let statusHTML = '';
      if (isFavorited(key)) statusHTML += '<div class="status-badge favorited" title="Favori"></div>';
      if (isMastered(key)) statusHTML += '<div class="status-badge mastered" title="Maîtrisé"></div>';
      const card = el('div', { className: 'fiche-card', onClick: () => navigate('fiche', dId, fId) });
      card.style.borderLeftColor = d.color;
      card.innerHTML = `
        ${statusHTML}
        <div class="fiche-card-title">${f.title}</div>
        <div class="fiche-card-subtitle">${f.subtitle}</div>
        <div class="fiche-card-domain" style="color:${d.color}">${d.icon} ${d.name}</div>
      `;
      recentGrid.appendChild(card);
    });
    recentSection.appendChild(recentGrid);
    container.appendChild(recentSection);
  }

  // Promo — Template ArchiCAD
  const promo = el('div', { className: 'promo-card' });
  promo.innerHTML = `
    <div class="promo-badge">Template Archicad</div>
    <div class="promo-body">
      <h3>⚡ Archicad — Chiffrages & Descriptifs automatisés</h3>
      <p>Gagnez du temps sur vos DPGF : descriptifs TCE pré-rédigés, favoris préconfigurés, bibliothèque d'objets prête à l'emploi. Concentrez-vous sur la conception, pas l'administratif.</p>
      <div class="promo-features">
        <span>✅ Descriptifs auto</span>
        <span>✅ Favoris préconfigurés</span>
        <span>✅ Bibliothèque d'objets</span>
        <span>✅ Guide d'installation</span>
      </div>
      <div class="promo-cta">
        <a href="https://atelierlo.gumroad.com/l/phrvz" target="_blank" rel="noopener" class="btn-promo">Découvrir le template — 99 €</a>
        <span class="promo-by">par <a href="https://loatelier.com/" target="_blank" rel="noopener">AtelierLO</a></span>
      </div>
    </div>
  `;
  container.appendChild(promo);

  // Sloft-inspired editorial sections
  // --- Recent études de cas ---
  if (etudes.length > 0) {
    const recentEtudes = el('div', { className: 'dashboard-section' });
    recentEtudes.innerHTML = `
      <div class="dashboard-section-header">
        <h2>🏠 Dernières Études de Cas</h2>
        <a href="#" class="dashboard-see-all" id="dash-see-etudes">Voir tout →</a>
      </div>
    `;
    const etudesRow = el('div', { className: 'dashboard-etudes-row' });
    etudes.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4).forEach(projet => {
      const card = el('div', { className: 'dashboard-etude-card', onClick: () => { state.atelierTab = 'projets'; navigate('atelier'); setTimeout(() => openEtudeDetail(projet.id), 50); } });
      card.innerHTML = `
        <div class="dash-etude-cover" style="background-image: url('${projet.coverUrl || ''}')">
          ${!projet.coverUrl ? '<div class="etude-card-no-cover">🏠</div>' : ''}
          ${projet.surface ? `<span class="dash-etude-surface">${projet.surface} m²</span>` : ''}
        </div>
        <div class="dash-etude-info">
          <strong>${projet.name}</strong>
          ${projet.architect ? `<span>par ${projet.architect}</span>` : ''}
          ${projet.location ? `<span>📍 ${projet.location}</span>` : ''}
        </div>
      `;
      etudesRow.appendChild(card);
    });
    recentEtudes.appendChild(etudesRow);
    container.appendChild(recentEtudes);
  }

  // --- Recent veille ---
  if (veille.length > 0) {
    const recentVeille = el('div', { className: 'dashboard-section' });
    recentVeille.innerHTML = `
      <div class="dashboard-section-header">
        <h2>👁 L'Œil — Dernières Découvertes</h2>
        <a href="#" class="dashboard-see-all" id="dash-see-veille">Voir tout →</a>
      </div>
    `;
    const veilleRow = el('div', { className: 'dashboard-veille-row' });
    veille.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5).forEach(item => {
      const card = el('div', { className: 'dashboard-veille-card' });
      card.innerHTML = `
        ${item.imageUrl ? `<div class="dash-veille-img" style="background-image: url('${item.imageUrl}')"></div>` : ''}
        <div class="dash-veille-body">
          <strong>${item.url ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.title)}</a>` : escapeHtml(item.title)}</strong>
          ${item.source ? `<span class="dash-veille-source">${escapeHtml(item.source)}</span>` : ''}
          <span class="dash-veille-date">${new Date(item.date).toLocaleDateString('fr-FR')}</span>
        </div>
      `;
      veilleRow.appendChild(card);
    });
    recentVeille.appendChild(veilleRow);
    container.appendChild(recentVeille);
  }

  // Domains grid
  const domainsTitle = el('div', { className: 'dashboard-section' });
  domainsTitle.innerHTML = `<div class="dashboard-section-header"><h2>📚 Domaines de connaissances</h2></div>`;
  container.appendChild(domainsTitle);

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
  container.appendChild(grid);

  // Bind dashboard link events
  setTimeout(() => {
    const seeEtudes = $('#dash-see-etudes');
    if (seeEtudes) seeEtudes.addEventListener('click', (e) => { e.preventDefault(); state.atelierTab = 'projets'; navigate('atelier'); });
    const seeVeille = $('#dash-see-veille');
    if (seeVeille) seeVeille.addEventListener('click', (e) => { e.preventDefault(); navigate('veille'); });
  }, 0);
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

  // Build category map (needed for tabs + rendering)
  const categoryOrder = [];
  const categoryMap = {};
  if (hasCategories) {
    d.fiches.forEach(f => {
      const cat = f.category || 'Autres';
      if (!categoryMap[cat]) {
        categoryMap[cat] = [];
        categoryOrder.push(cat);
      }
      categoryMap[cat].push(f);
    });
  }

  // Active category filter state
  let activeCategory = 'all';

  // Category tab pills (if 2+ categories)
  let tabsBar = null;
  if (hasCategories && categoryOrder.length >= 2) {
    tabsBar = el('div', { className: 'category-tabs' });
    const allTab = el('button', {
      className: 'category-tab active',
      onClick: () => filterByCategory('all')
    });
    allTab.innerHTML = `Tous <span class="tab-count">${d.fiches.length}</span>`;
    allTab.dataset.cat = 'all';
    tabsBar.appendChild(allTab);

    categoryOrder.forEach(cat => {
      const tab = el('button', {
        className: 'category-tab',
        onClick: () => filterByCategory(cat)
      });
      tab.innerHTML = `${cat} <span class="tab-count">${categoryMap[cat].length}</span>`;
      tab.dataset.cat = cat;
      tabsBar.appendChild(tab);
    });
    container.appendChild(tabsBar);
  }

  // Quick text filter
  let filterInput = null;
  if (d.fiches.length > 6) {
    const filterBar = el('div', { className: 'domain-filter-bar' });
    filterInput = el('input', {
      type: 'text',
      className: 'domain-filter-input',
      placeholder: `Rechercher dans ${d.name} (${d.fiches.length} fiches)...`,
      onInput: () => applyFilters()
    });
    filterBar.appendChild(filterInput);
    container.appendChild(filterBar);
  }

  // Render fiches
  if (hasCategories) {
    categoryOrder.forEach(cat => {
      const group = el('div', { className: 'category-group' });
      group.dataset.category = cat;
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

  // Filter logic
  function filterByCategory(cat) {
    activeCategory = cat;
    if (tabsBar) {
      $$('.category-tab', tabsBar).forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
    }
    if (filterInput) filterInput.value = '';
    applyFilters();
  }

  function applyFilters() {
    const q = filterInput ? normalize(filterInput.value.trim()) : '';
    $$('.category-group', container).forEach(group => {
      const cat = group.dataset.category;
      const catMatch = activeCategory === 'all' || cat === activeCategory;
      if (!catMatch) { group.style.display = 'none'; return; }
      let hasVisible = false;
      $$('.fiche-card', group).forEach(card => {
        const textMatch = q === '' || normalize(card.textContent).includes(q);
        card.style.display = textMatch ? '' : 'none';
        if (textMatch) hasVisible = true;
      });
      group.style.display = hasVisible ? '' : 'none';
    });
    // For domains without categories
    $$('.fiches-grid > .fiche-card', container).forEach(card => {
      const textMatch = q === '' || normalize(card.textContent).includes(q);
      card.style.display = textMatch ? '' : 'none';
    });
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
    onClick: () => { toggleList(state.userData.favorited, key); toast(isFavorited(key) ? 'Ajouté aux favoris ★' : 'Retiré des favoris'); const c = $('#content'); c.innerHTML = ''; renderFiche(c); }
  });
  favBtn.textContent = isFavorited(key) ? '★ Favori' : '☆ Favoris';

  const masterBtn = el('button', {
    className: `btn ${isMastered(key) ? 'active' : ''}`,
    onClick: () => { toggleList(state.userData.mastered, key); toast(isMastered(key) ? 'Marqué comme maîtrisé ◆' : 'Retiré des maîtrisés'); const c = $('#content'); c.innerHTML = ''; renderFiche(c); }
  });
  masterBtn.textContent = isMastered(key) ? '◆ Maîtrisé' : '◇ Maîtriser';

  const shareBtn = el('button', {
    className: 'btn btn-share',
    onClick: () => {
      const url = `${window.location.origin}${window.location.pathname}#${d.id}/${f.id}`;
      navigator.clipboard.writeText(url).then(() => {
        toast('Lien copié ! Partagez-le à vos collègues 🔗');
      }).catch(() => {
        prompt('Copiez ce lien :', url);
      });
    }
  });
  shareBtn.textContent = '🔗 Partager';

  actions.appendChild(favBtn);
  actions.appendChild(masterBtn);
  actions.appendChild(shareBtn);
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

  // Related fiches
  detail.appendChild(renderRelatedFiches(d, f));

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

function getRelatedFiches(currentDomain, currentFiche, maxResults = 4) {
  const currentTags = new Set(currentFiche.tags.map(t => t.toLowerCase()));
  const scored = [];

  APP_DATA.domains.forEach(d => {
    d.fiches.forEach(f => {
      if (d.id === currentDomain.id && f.id === currentFiche.id) return;
      const fTags = new Set(f.tags.map(t => t.toLowerCase()));
      let score = 0;
      currentTags.forEach(t => { if (fTags.has(t)) score++; });
      if (score > 0) scored.push({ domain: d, fiche: f, score });
    });
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, maxResults);
}

function renderRelatedFiches(domain, fiche) {
  const related = getRelatedFiches(domain, fiche);
  if (related.length === 0) return el('div');

  const section = el('div', { className: 'related-fiches' });
  section.innerHTML = `<h3>🔗 Fiches Liées</h3>`;
  const grid = el('div', { className: 'related-fiches-grid' });

  related.forEach(r => {
    const card = el('div', {
      className: 'related-fiche-card',
      onClick: () => navigate('fiche', r.domain.id, r.fiche.id)
    });
    card.innerHTML = `
      <span class="related-fiche-domain">${r.domain.icon} ${r.domain.name}</span>
      <span class="related-fiche-title">${r.fiche.title}</span>
      <span class="related-fiche-subtitle">${r.fiche.subtitle}</span>
    `;
    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
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

// Normalize accents for search (décor → decor)
function normalize(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
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

// -------- Mon Atelier (Designers + Projets) --------
function renderAtelier(container) {
  const header = el('div', { className: 'atelier-header' });
  header.innerHTML = `
    <h2>📐 Mon Atelier</h2>
    <p>Vos références par designer et vos études de cas en un seul espace.</p>
  `;
  container.appendChild(header);

  // Tabs
  const tabs = el('div', { className: 'atelier-tabs' });
  let activeTab = state.atelierTab || 'designers';

  const tabDefs = [
    { id: 'designers', label: '👤 Designers', count: loadRefData().designers.length },
    { id: 'projets', label: '🏠 Projets', count: loadEtudes().length }
  ];

  function renderTabContent() {
    const existing = $('#atelier-content');
    if (existing) existing.remove();
    const content = el('div', { id: 'atelier-content' });
    if (activeTab === 'designers') {
      renderReferencesTab(content);
    } else {
      renderEtudesTab(content);
    }
    container.appendChild(content);
  }

  tabDefs.forEach(t => {
    const tabBtn = el('button', {
      className: `atelier-tab ${t.id === activeTab ? 'active' : ''}`,
      onClick: () => {
        activeTab = t.id;
        state.atelierTab = t.id;
        $$('.atelier-tab').forEach(tb => tb.classList.remove('active'));
        tabBtn.classList.add('active');
        renderTabContent();
      }
    });
    tabBtn.innerHTML = `${t.label} <span class="atelier-tab-count">${t.count}</span>`;
    tabs.appendChild(tabBtn);
  });

  container.appendChild(tabs);
  renderTabContent();
}

// -------- Designers Tab (ex Mes réf) --------
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

function renderReferencesTab(container) {
  const data = loadRefData();

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
        state.atelierTab = 'designers'; navigate('atelier');
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
          state.atelierTab = 'designers'; navigate('atelier');
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
        state.atelierTab = 'designers'; navigate('atelier');
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
    state.atelierTab = 'designers'; navigate('atelier');
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
    state.atelierTab = 'designers'; navigate('atelier');
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

// -------- Études de Cas (inspiré Sloft) --------
function loadEtudes() {
  try {
    const raw = localStorage.getItem('architek-pro-etudes');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [];
  // Structure: [{ id, name, architect, location, surface, style, typology, budget, coverUrl, images: [{url, caption}], decryptage: { circulation, lumiere, espace, materiaux, details, notes }, date }]
}

function saveEtudes(arr) {
  localStorage.setItem('architek-pro-etudes', JSON.stringify(arr));
}

const ETUDES_TYPOLOGIES = ['Appartement', 'Maison', 'Studio', 'Loft', 'Duplex', 'Bureau', 'Commerce', 'Hôtel / Hospitality', 'Restaurant', 'Autre'];
const ETUDES_STYLES = ['Minimaliste', 'Contemporain', 'Japandi', 'Art Déco', 'Industriel', 'Scandinave', 'Brutaliste', 'Wabi-Sabi', 'Classique revisité', 'Méditerranéen', 'Mid-Century', 'Organique', 'Maximaliste', 'Autre'];
const ETUDES_BUDGETS = ['< 20k €', '20-50k €', '50-100k €', '100-200k €', '200-500k €', '> 500k €', 'Non renseigné'];

function renderEtudesTab(container) {
  const etudes = loadEtudes();

  // Header row with add button
  const headerRow = el('div', { className: 'etudes-header-top' });
  headerRow.innerHTML = `
    <div></div>
    <button class="btn-etude-add" id="etude-add-btn">+ Nouveau projet</button>
  `;
  container.appendChild(headerRow);

  // Filter bar
  if (etudes.length > 0) {
    const filterBar = el('div', { className: 'etudes-filters' });
    filterBar.innerHTML = `
      <select id="etude-filter-style" class="etude-filter-select">
        <option value="">Tous les styles</option>
        ${ETUDES_STYLES.map(s => `<option value="${s}">${s}</option>`).join('')}
      </select>
      <select id="etude-filter-typo" class="etude-filter-select">
        <option value="">Toutes les typologies</option>
        ${ETUDES_TYPOLOGIES.map(t => `<option value="${t}">${t}</option>`).join('')}
      </select>
      <select id="etude-filter-budget" class="etude-filter-select">
        <option value="">Tous les budgets</option>
        ${ETUDES_BUDGETS.map(b => `<option value="${b}">${b}</option>`).join('')}
      </select>
      <input type="text" id="etude-filter-search" class="etude-filter-search" placeholder="Rechercher un projet, un architecte, un lieu…">
    `;
    container.appendChild(filterBar);
  }

  // Projects grid
  const grid = el('div', { className: 'etudes-grid', id: 'etudes-grid' });

  if (etudes.length === 0) {
    grid.innerHTML = `
      <div class="empty-state etudes-empty">
        <div class="empty-state-icon">🏠</div>
        <h3>Votre bibliothèque de projets est vide</h3>
        <p>Commencez par ajouter un projet qui vous inspire.<br>Comme sur <strong>Sloft</strong>, documentez chaque visite avec photos, données et analyse.</p>
      </div>
    `;
  } else {
    renderEtudesGrid(etudes, grid);
  }

  container.appendChild(grid);

  // Events
  setTimeout(() => {
    const addBtn = $('#etude-add-btn');
    if (addBtn) addBtn.addEventListener('click', openEtudeModal);

    // Filter events
    const filterStyle = $('#etude-filter-style');
    const filterTypo = $('#etude-filter-typo');
    const filterBudget = $('#etude-filter-budget');
    const filterSearch = $('#etude-filter-search');

    function applyFilters() {
      const style = filterStyle ? filterStyle.value : '';
      const typo = filterTypo ? filterTypo.value : '';
      const budget = filterBudget ? filterBudget.value : '';
      const search = filterSearch ? filterSearch.value.toLowerCase().trim() : '';

      let filtered = loadEtudes();
      if (style) filtered = filtered.filter(e => e.style === style);
      if (typo) filtered = filtered.filter(e => e.typology === typo);
      if (budget) filtered = filtered.filter(e => e.budget === budget);
      if (search) {
        filtered = filtered.filter(e => {
          const searchable = [e.name, e.architect, e.location, e.style, e.typology, e.surface].join(' ').toLowerCase();
          return searchable.includes(search);
        });
      }

      const g = $('#etudes-grid');
      if (g) {
        g.innerHTML = '';
        if (filtered.length === 0) {
          g.innerHTML = '<div class="etudes-no-results">Aucun projet ne correspond à ces filtres.</div>';
        } else {
          renderEtudesGrid(filtered, g);
        }
      }
    }

    if (filterStyle) filterStyle.addEventListener('change', applyFilters);
    if (filterTypo) filterTypo.addEventListener('change', applyFilters);
    if (filterBudget) filterBudget.addEventListener('change', applyFilters);
    if (filterSearch) {
      let debounce;
      filterSearch.addEventListener('input', () => {
        clearTimeout(debounce);
        debounce = setTimeout(applyFilters, 250);
      });
    }
  }, 0);
}

function renderEtudesGrid(etudes, grid) {
  etudes.sort((a, b) => new Date(b.date) - new Date(a.date));

  etudes.forEach((projet, idx) => {
    const card = el('div', { className: 'etude-card' });
    const hasDecryptage = projet.decryptage && (projet.decryptage.circulation || projet.decryptage.lumiere || projet.decryptage.espace || projet.decryptage.materiaux || projet.decryptage.details || projet.decryptage.notes);

    card.innerHTML = `
      <div class="etude-card-cover" style="background-image: url('${projet.coverUrl || ''}')">
        ${!projet.coverUrl ? '<div class="etude-card-no-cover">🏠</div>' : ''}
        ${hasDecryptage ? '<span class="etude-badge-decrypted">✓ Décrypté</span>' : ''}
        <div class="etude-card-overlay">
          <span class="etude-card-surface">${projet.surface ? projet.surface + ' m²' : ''}</span>
          ${projet.typology ? `<span class="etude-card-typo">${projet.typology}</span>` : ''}
        </div>
      </div>
      <div class="etude-card-body">
        <h3 class="etude-card-title">${projet.name}</h3>
        ${projet.architect ? `<div class="etude-card-architect">par ${projet.architect}</div>` : ''}
        <div class="etude-card-meta">
          ${projet.location ? `<span class="etude-card-location">📍 ${projet.location}</span>` : ''}
          ${projet.style ? `<span class="etude-card-style">${projet.style}</span>` : ''}
        </div>
        ${projet.budget && projet.budget !== 'Non renseigné' ? `<div class="etude-card-budget">💰 ${projet.budget}</div>` : ''}
        <div class="etude-card-photos">${projet.images ? projet.images.length : 0} photo${(projet.images && projet.images.length > 1) ? 's' : ''}</div>
      </div>
    `;

    card.addEventListener('click', () => openEtudeDetail(projet.id));
    grid.appendChild(card);
  });
}

function openEtudeModal(existingProjet = null) {
  const overlay = $('#modal-overlay');
  const content = $('#modal-content');
  overlay.classList.remove('hidden');

  const isEdit = existingProjet && existingProjet.id;
  const p = isEdit ? existingProjet : {};

  content.innerHTML = `
    <div class="modal-title">${isEdit ? 'Modifier le projet' : 'Nouveau projet — Étude de Cas'}</div>
    <div class="etude-modal-form">
      <div class="etude-modal-row">
        <div class="modal-field">
          <label>Nom du projet *</label>
          <input type="text" id="etude-name" placeholder="Ex: Loft Marais 65m² — Restructuration complète" value="${escapeHtml(p.name || '')}">
        </div>
      </div>
      <div class="etude-modal-row etude-modal-row-2">
        <div class="modal-field">
          <label>Architecte / Designer</label>
          <input type="text" id="etude-architect" placeholder="Nom de l'architecte ou du studio" value="${escapeHtml(p.architect || '')}">
        </div>
        <div class="modal-field">
          <label>Localisation</label>
          <input type="text" id="etude-location" placeholder="Paris 3e, Lyon, Milan…" value="${escapeHtml(p.location || '')}">
        </div>
      </div>
      <div class="etude-modal-row etude-modal-row-3">
        <div class="modal-field">
          <label>Surface (m²)</label>
          <input type="text" id="etude-surface" placeholder="65" value="${escapeHtml(p.surface || '')}">
        </div>
        <div class="modal-field">
          <label>Typologie</label>
          <select id="etude-typology">
            <option value="">Choisir…</option>
            ${ETUDES_TYPOLOGIES.map(t => `<option value="${t}" ${p.typology === t ? 'selected' : ''}>${t}</option>`).join('')}
          </select>
        </div>
        <div class="modal-field">
          <label>Budget travaux</label>
          <select id="etude-budget">
            <option value="">Choisir…</option>
            ${ETUDES_BUDGETS.map(b => `<option value="${b}" ${p.budget === b ? 'selected' : ''}>${b}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="etude-modal-row">
        <div class="modal-field">
          <label>Style</label>
          <select id="etude-style">
            <option value="">Choisir…</option>
            ${ETUDES_STYLES.map(s => `<option value="${s}" ${p.style === s ? 'selected' : ''}>${s}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="etude-modal-row">
        <div class="modal-field">
          <label>Image de couverture (URL)</label>
          <input type="url" id="etude-cover" placeholder="https://... (.jpg, .png, .webp)" value="${escapeHtml(p.coverUrl || '')}">
        </div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn" id="etude-modal-cancel">Annuler</button>
      <button class="btn btn-primary" id="etude-modal-save">${isEdit ? 'Enregistrer' : 'Créer le projet'}</button>
    </div>
  `;

  $('#etude-modal-cancel').onclick = closeModal;
  $('#etude-modal-save').onclick = () => {
    const name = $('#etude-name').value.trim();
    if (!name) { toast('Nom du projet requis'); return; }

    const etudes = loadEtudes();

    if (isEdit) {
      const idx = etudes.findIndex(e => e.id === p.id);
      if (idx >= 0) {
        etudes[idx].name = name;
        etudes[idx].architect = $('#etude-architect').value.trim();
        etudes[idx].location = $('#etude-location').value.trim();
        etudes[idx].surface = $('#etude-surface').value.trim();
        etudes[idx].typology = $('#etude-typology').value;
        etudes[idx].budget = $('#etude-budget').value;
        etudes[idx].style = $('#etude-style').value;
        etudes[idx].coverUrl = $('#etude-cover').value.trim();
      }
    } else {
      etudes.push({
        id: 'etude-' + Date.now(),
        name,
        architect: $('#etude-architect').value.trim(),
        location: $('#etude-location').value.trim(),
        surface: $('#etude-surface').value.trim(),
        typology: $('#etude-typology').value,
        budget: $('#etude-budget').value,
        style: $('#etude-style').value,
        coverUrl: $('#etude-cover').value.trim(),
        images: [],
        decryptage: { circulation: '', lumiere: '', espace: '', materiaux: '', details: '', notes: '' },
        date: new Date().toISOString()
      });
    }

    saveEtudes(etudes);
    closeModal();
    toast(isEdit ? 'Projet mis à jour ✓' : 'Projet créé ! 📐');
    state.atelierTab = 'projets'; navigate('atelier');
  };

  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
  setTimeout(() => { const f = content.querySelector('input'); if (f) f.focus(); }, 100);
}

function openEtudeDetail(projetId) {
  const etudes = loadEtudes();
  const projet = etudes.find(e => e.id === projetId);
  if (!projet) return;

  const content = $('#content');
  content.innerHTML = '';

  const detail = el('div', { className: 'etude-detail' });

  // Back button
  const back = el('button', { className: 'etude-back-btn', onClick: () => { state.atelierTab = 'projets'; navigate('atelier'); } });
  back.innerHTML = '← Retour à Mon Atelier';
  detail.appendChild(back);

  // Cover hero
  if (projet.coverUrl) {
    const hero = el('div', { className: 'etude-detail-hero' });
    hero.style.backgroundImage = `url('${projet.coverUrl}')`;
    detail.appendChild(hero);
  }

  // Info header
  const infoHeader = el('div', { className: 'etude-detail-info' });
  infoHeader.innerHTML = `
    <h1>${projet.name}</h1>
    ${projet.architect ? `<div class="etude-detail-architect">par <strong>${projet.architect}</strong></div>` : ''}
    <div class="etude-detail-meta">
      ${projet.location ? `<span class="etude-meta-item">📍 ${projet.location}</span>` : ''}
      ${projet.surface ? `<span class="etude-meta-item">📐 ${projet.surface} m²</span>` : ''}
      ${projet.typology ? `<span class="etude-meta-item">🏠 ${projet.typology}</span>` : ''}
      ${projet.style ? `<span class="etude-meta-item etude-meta-style">${projet.style}</span>` : ''}
      ${projet.budget && projet.budget !== 'Non renseigné' ? `<span class="etude-meta-item">💰 ${projet.budget}</span>` : ''}
    </div>
    <div class="etude-detail-actions">
      <button class="btn btn-small" id="etude-edit-btn">✏️ Modifier</button>
      <button class="btn btn-small etude-btn-danger" id="etude-delete-btn">Supprimer</button>
    </div>
  `;
  detail.appendChild(infoHeader);

  // Gallery section
  const gallery = el('div', { className: 'etude-gallery-section' });
  gallery.innerHTML = `
    <div class="etude-section-header">
      <h2>📷 Galerie du projet</h2>
      <button class="btn btn-small" id="etude-add-photo">+ Ajouter une photo</button>
    </div>
  `;

  if (projet.images && projet.images.length > 0) {
    const imgGrid = el('div', { className: 'etude-gallery-grid' });
    projet.images.forEach((img, iIdx) => {
      const imgCard = el('div', { className: 'etude-gallery-item' });
      imgCard.innerHTML = `
        <div class="etude-gallery-img-wrap">
          <img src="${img.url}" alt="${img.caption || ''}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=ref-img-error>⚠️ Image inaccessible</div>'">
        </div>
        ${img.caption ? `<div class="etude-gallery-caption">${img.caption}</div>` : ''}
        <button class="etude-gallery-del" data-iidx="${iIdx}" title="Supprimer">✕</button>
      `;
      imgGrid.appendChild(imgCard);
    });
    gallery.appendChild(imgGrid);
  } else {
    gallery.innerHTML += '<div class="etude-gallery-empty">Aucune photo. Ajoutez des images pour documenter ce projet.</div>';
  }

  detail.appendChild(gallery);

  // Décryptage section (the core Sloft feature)
  const decryptage = el('div', { className: 'etude-decryptage-section' });
  const dec = projet.decryptage || {};
  const hasAnyDecryptage = dec.circulation || dec.lumiere || dec.espace || dec.materiaux || dec.details || dec.notes;

  decryptage.innerHTML = `
    <div class="etude-section-header">
      <h2>🔍 Décryptage</h2>
      <button class="btn btn-small" id="etude-edit-decryptage">${hasAnyDecryptage ? '✏️ Modifier' : '+ Analyser ce projet'}</button>
    </div>
    <p class="etude-decryptage-intro">Comme un reportage Sloft, analysez ce qui fait la qualité de ce projet.</p>
  `;

  if (hasAnyDecryptage) {
    const decGrid = el('div', { className: 'etude-decryptage-grid' });
    const decItems = [
      { key: 'circulation', icon: '🚪', label: 'Circulation & flux' },
      { key: 'lumiere', icon: '☀️', label: 'Lumière naturelle' },
      { key: 'espace', icon: '📐', label: 'Optimisation de l\'espace' },
      { key: 'materiaux', icon: '🪨', label: 'Matériaux & palettes' },
      { key: 'details', icon: '✨', label: 'Détails architecturaux' }
    ];

    decItems.forEach(item => {
      if (dec[item.key]) {
        const card = el('div', { className: 'etude-dec-card' });
        card.innerHTML = `
          <div class="etude-dec-card-header">
            <span class="etude-dec-icon">${item.icon}</span>
            <span class="etude-dec-label">${item.label}</span>
          </div>
          <p>${dec[item.key]}</p>
        `;
        decGrid.appendChild(card);
      }
    });

    if (dec.notes) {
      const notesCard = el('div', { className: 'etude-dec-card etude-dec-notes' });
      notesCard.innerHTML = `
        <div class="etude-dec-card-header">
          <span class="etude-dec-icon">📝</span>
          <span class="etude-dec-label">Notes & leçons à retenir</span>
        </div>
        <p>${dec.notes}</p>
      `;
      decGrid.appendChild(notesCard);
    }

    decryptage.appendChild(decGrid);
  } else {
    decryptage.innerHTML += `
      <div class="etude-decryptage-empty">
        <div class="etude-dec-empty-grid">
          <span>🚪 Circulation</span>
          <span>☀️ Lumière</span>
          <span>📐 Espace</span>
          <span>🪨 Matériaux</span>
          <span>✨ Détails</span>
          <span>📝 Notes</span>
        </div>
        <p>Cliquez sur « Analyser ce projet » pour décrypter chaque aspect.</p>
      </div>
    `;
  }

  detail.appendChild(decryptage);

  content.appendChild(detail);

  // Event bindings
  setTimeout(() => {
    const editBtn = $('#etude-edit-btn');
    if (editBtn) editBtn.addEventListener('click', () => openEtudeModal(projet));

    const deleteBtn = $('#etude-delete-btn');
    if (deleteBtn) deleteBtn.addEventListener('click', () => {
      if (confirm(`Supprimer "${projet.name}" et toutes ses données ?`)) {
        const e = loadEtudes();
        const idx = e.findIndex(et => et.id === projet.id);
        if (idx >= 0) e.splice(idx, 1);
        saveEtudes(e);
        toast('Projet supprimé.');
        state.atelierTab = 'projets'; navigate('atelier');
      }
    });

    const addPhotoBtn = $('#etude-add-photo');
    if (addPhotoBtn) addPhotoBtn.addEventListener('click', () => openEtudePhotoModal(projet.id));

    const editDecBtn = $('#etude-edit-decryptage');
    if (editDecBtn) editDecBtn.addEventListener('click', () => openDecryptageModal(projet.id));

    $$('.etude-gallery-del').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const iIdx = parseInt(btn.dataset.iidx);
        const etudes = loadEtudes();
        const p = etudes.find(et => et.id === projet.id);
        if (p) {
          p.images.splice(iIdx, 1);
          saveEtudes(etudes);
          toast('Photo supprimée.');
          openEtudeDetail(projet.id);
        }
      });
    });
  }, 0);
}

function openEtudePhotoModal(projetId) {
  const overlay = $('#modal-overlay');
  const content = $('#modal-content');
  overlay.classList.remove('hidden');

  content.innerHTML = `
    <div class="modal-title">Ajouter une photo au projet</div>
    <div class="modal-field">
      <label>URL de l'image *</label>
      <input type="url" id="etude-photo-url" placeholder="https://... (.jpg, .png, .webp)" autofocus>
    </div>
    <div class="modal-field">
      <label>Légende</label>
      <input type="text" id="etude-photo-caption" placeholder="Vue du salon, détail cuisine, avant/après…">
    </div>
    <div class="modal-actions">
      <button class="btn" id="etude-photo-cancel">Annuler</button>
      <button class="btn btn-primary" id="etude-photo-save">Ajouter</button>
    </div>
  `;

  $('#etude-photo-cancel').onclick = closeModal;
  $('#etude-photo-save').onclick = () => {
    const url = $('#etude-photo-url').value.trim();
    if (!url) { toast('URL de l\'image requise'); return; }
    const etudes = loadEtudes();
    const p = etudes.find(e => e.id === projetId);
    if (p) {
      if (!p.images) p.images = [];
      if (p.images.length >= 30) { toast('Maximum 30 photos par projet.'); closeModal(); return; }
      p.images.push({ url, caption: $('#etude-photo-caption').value.trim() });
      saveEtudes(etudes);
      closeModal();
      toast('Photo ajoutée ✓');
      openEtudeDetail(projetId);
    }
  };

  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
  setTimeout(() => { const f = content.querySelector('input'); if (f) f.focus(); }, 100);
}

function openDecryptageModal(projetId) {
  const overlay = $('#modal-overlay');
  const content = $('#modal-content');
  overlay.classList.remove('hidden');

  const etudes = loadEtudes();
  const projet = etudes.find(e => e.id === projetId);
  if (!projet) return;
  const dec = projet.decryptage || {};

  content.innerHTML = `
    <div class="modal-title">🔍 Décryptage — ${projet.name}</div>
    <p class="modal-subtitle-text">Analysez ce projet comme une visite guidée Sloft. Qu'est-ce qui rend cet espace réussi ?</p>
    <div class="decryptage-form">
      <div class="dec-form-field">
        <label>🚪 Circulation & flux</label>
        <textarea id="dec-circulation" placeholder="Comment circule-t-on dans cet espace ? Les zones sont-elles bien connectées ? Y a-t-il des perspectives traversantes ?">${dec.circulation || ''}</textarea>
      </div>
      <div class="dec-form-field">
        <label>☀️ Lumière naturelle</label>
        <textarea id="dec-lumiere" placeholder="Comment la lumière entre-t-elle ? D'où vient-elle ? Comment est-elle modulée (voilages, stores, claire-voie) ?">${dec.lumiere || ''}</textarea>
      </div>
      <div class="dec-form-field">
        <label>📐 Optimisation de l'espace</label>
        <textarea id="dec-espace" placeholder="Quelles astuces pour gagner de l'espace ? Rangements intégrés, double-fonction, meubles sur-mesure ?">${dec.espace || ''}</textarea>
      </div>
      <div class="dec-form-field">
        <label>🪨 Matériaux & palettes</label>
        <textarea id="dec-materiaux" placeholder="Quels matériaux sont utilisés ? Comment sont-ils combinés ? Quelle palette de couleurs ?">${dec.materiaux || ''}</textarea>
      </div>
      <div class="dec-form-field">
        <label>✨ Détails architecturaux</label>
        <textarea id="dec-details" placeholder="Le détail qui fait la différence : joints creux, plinthe affleurante, niche éclairée, poignée sur-mesure…">${dec.details || ''}</textarea>
      </div>
      <div class="dec-form-field">
        <label>📝 Notes & leçons à retenir</label>
        <textarea id="dec-notes" placeholder="Qu'est-ce que vous retenez de ce projet ? Que réutiliseriez-vous ?" style="min-height:100px">${dec.notes || ''}</textarea>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn" id="dec-cancel">Annuler</button>
      <button class="btn btn-primary" id="dec-save">Enregistrer le décryptage</button>
    </div>
  `;

  $('#dec-cancel').onclick = closeModal;
  $('#dec-save').onclick = () => {
    const updated = loadEtudes();
    const p = updated.find(e => e.id === projetId);
    if (p) {
      p.decryptage = {
        circulation: $('#dec-circulation').value.trim(),
        lumiere: $('#dec-lumiere').value.trim(),
        espace: $('#dec-espace').value.trim(),
        materiaux: $('#dec-materiaux').value.trim(),
        details: $('#dec-details').value.trim(),
        notes: $('#dec-notes').value.trim()
      };
      saveEtudes(updated);
      closeModal();
      toast('Décryptage enregistré ✓');
      openEtudeDetail(projetId);
    }
  };

  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
  setTimeout(() => { const f = content.querySelector('textarea'); if (f) f.focus(); }, 100);
}

// -------- Ma Veille (inspiré L'Œil de Sloft) --------
function loadVeille() {
  try {
    const raw = localStorage.getItem('architek-pro-veille');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [];
  // Structure: [{ id, title, url, source, tags:[], note, imageUrl, date }]
}

function saveVeille(arr) {
  localStorage.setItem('architek-pro-veille', JSON.stringify(arr));
}

const VEILLE_TAGS = ['Projet', 'Matériau', 'Designer', 'Tendance', 'Produit', 'Article', 'Salon / Event', 'Technique', 'Inspiration'];

function renderVeille(container) {
  const veille = loadVeille();

  // Header
  const header = el('div', { className: 'veille-header' });
  header.innerHTML = `
    <div class="veille-header-top">
      <div>
        <h2>👁 Ma Veille</h2>
        <p>Votre œil d'architecte — collectez articles, projets, découvertes et tendances au fil de votre veille.</p>
      </div>
      <button class="btn-etude-add" id="veille-add-btn">+ Nouvelle découverte</button>
    </div>
  `;
  container.appendChild(header);

  // Filter tags
  if (veille.length > 0) {
    const filterBar = el('div', { className: 'veille-filter-bar' });
    filterBar.innerHTML = '<button class="veille-filter-tag active" data-tag="">Tout</button>';
    const usedTags = [...new Set(veille.flatMap(v => v.tags || []))];
    usedTags.forEach(tag => {
      filterBar.innerHTML += `<button class="veille-filter-tag" data-tag="${tag}">${tag}</button>`;
    });
    container.appendChild(filterBar);
  }

  // Feed
  const feed = el('div', { className: 'veille-feed', id: 'veille-feed' });

  if (veille.length === 0) {
    feed.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">👁</div>
        <h3>Votre veille commence ici</h3>
        <p>Ajoutez vos découvertes — articles, projets, matériaux, tendances.<br>Comme « L'Œil de Sloft », constituez votre propre fil éditorial.</p>
      </div>
    `;
  } else {
    renderVeilleFeed(veille, feed);
  }

  container.appendChild(feed);

  // Events
  setTimeout(() => {
    const addBtn = $('#veille-add-btn');
    if (addBtn) addBtn.addEventListener('click', openVeilleModal);

    // Tag filters
    $$('.veille-filter-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.veille-filter-tag').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tag = btn.dataset.tag;
        const allVeille = loadVeille();
        const filtered = tag ? allVeille.filter(v => v.tags && v.tags.includes(tag)) : allVeille;
        const f = $('#veille-feed');
        if (f) {
          f.innerHTML = '';
          renderVeilleFeed(filtered, f);
        }
      });
    });
  }, 0);
}

function renderVeilleFeed(items, feed) {
  // Group by month
  const grouped = {};
  items.sort((a, b) => new Date(b.date) - new Date(a.date));
  items.forEach(item => {
    const d = new Date(item.date);
    const monthKey = d.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    if (!grouped[monthKey]) grouped[monthKey] = [];
    grouped[monthKey].push(item);
  });

  Object.entries(grouped).forEach(([month, monthItems]) => {
    const monthGroup = el('div', { className: 'veille-month-group' });
    monthGroup.innerHTML = `<div class="veille-month-label">${month.charAt(0).toUpperCase() + month.slice(1)}</div>`;

    monthItems.forEach((item, idx) => {
      const card = el('div', { className: 'veille-card' });
      card.innerHTML = `
        ${item.imageUrl ? `<div class="veille-card-img" style="background-image: url('${item.imageUrl}')"></div>` : ''}
        <div class="veille-card-body">
          <div class="veille-card-header">
            <h3>${item.url ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.title)}</a>` : escapeHtml(item.title)}</h3>
            <button class="veille-card-del" data-id="${item.id}" title="Supprimer">✕</button>
          </div>
          ${item.source ? `<div class="veille-card-source">${escapeHtml(item.source)}</div>` : ''}
          ${item.note ? `<p class="veille-card-note">${escapeHtml(item.note)}</p>` : ''}
          <div class="veille-card-footer">
            <div class="veille-card-tags">${(item.tags || []).map(t => `<span class="veille-tag">${t}</span>`).join('')}</div>
            <span class="veille-card-date">${new Date(item.date).toLocaleDateString('fr-FR')}</span>
          </div>
        </div>
      `;
      monthGroup.appendChild(card);
    });

    feed.appendChild(monthGroup);
  });

  // Bind delete events
  setTimeout(() => {
    $$('.veille-card-del').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const veille = loadVeille();
        const idx = veille.findIndex(v => v.id === id);
        if (idx >= 0) {
          veille.splice(idx, 1);
          saveVeille(veille);
          toast('Élément supprimé.');
          navigate('veille');
        }
      });
    });
  }, 0);
}

function openVeilleModal() {
  const overlay = $('#modal-overlay');
  const content = $('#modal-content');
  overlay.classList.remove('hidden');

  content.innerHTML = `
    <div class="modal-title">👁 Nouvelle découverte</div>
    <div class="modal-field">
      <label>Titre *</label>
      <input type="text" id="veille-title" placeholder="Ex: Appartement Haussmannien revisité — AD Magazine" autofocus>
    </div>
    <div class="modal-field">
      <label>URL (article, Instagram, Pinterest…)</label>
      <input type="url" id="veille-url" placeholder="https://...">
    </div>
    <div class="modal-field">
      <label>Source</label>
      <input type="text" id="veille-source" placeholder="AD Magazine, Instagram @studio.xyz, Sloft, Pinterest…">
    </div>
    <div class="modal-field">
      <label>Image (URL)</label>
      <input type="url" id="veille-image" placeholder="https://... (optionnel, pour illustrer)">
    </div>
    <div class="modal-field">
      <label>Tags</label>
      <div class="veille-tags-selector" id="veille-tags-sel">
        ${VEILLE_TAGS.map(t => `<label class="veille-tag-option"><input type="checkbox" value="${t}"> ${t}</label>`).join('')}
      </div>
    </div>
    <div class="modal-field">
      <label>Note personnelle</label>
      <textarea id="veille-note" placeholder="Pourquoi ça vous a marqué ? Qu'est-ce que vous en retenez ?"></textarea>
    </div>
    <div class="modal-actions">
      <button class="btn" id="veille-modal-cancel">Annuler</button>
      <button class="btn btn-primary" id="veille-modal-save">Ajouter</button>
    </div>
  `;

  $('#veille-modal-cancel').onclick = closeModal;
  $('#veille-modal-save').onclick = () => {
    const title = $('#veille-title').value.trim();
    if (!title) { toast('Titre requis'); return; }

    const selectedTags = [...$$('#veille-tags-sel input:checked')].map(cb => cb.value);

    const veille = loadVeille();
    veille.push({
      id: 'veille-' + Date.now(),
      title,
      url: $('#veille-url').value.trim(),
      source: $('#veille-source').value.trim(),
      imageUrl: $('#veille-image').value.trim(),
      tags: selectedTags,
      note: $('#veille-note').value.trim(),
      date: new Date().toISOString()
    });

    saveVeille(veille);
    closeModal();
    toast('Découverte ajoutée ! 👁');
    navigate('veille');
  };

  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
  setTimeout(() => { const f = content.querySelector('input'); if (f) f.focus(); }, 100);
}

// -------- Search --------
function renderSearch(container) {
  const query = normalize(state.searchQuery.trim());
  const results = [];

  APP_DATA.domains.forEach(d => {
    d.fiches.forEach(f => {
      const searchable = normalize([f.title, f.subtitle, f.summary, ...f.tags, ...(f.sections || []).map(s => s.title + ' ' + s.content), ...(f.keyPoints || []), ...(f.tips || [])].join(' '));
      if (searchable.includes(query)) {
        // Score: title match ranks higher
        const titleMatch = normalize(f.title).includes(query) ? 2 : 0;
        const subtitleMatch = normalize(f.subtitle).includes(query) ? 1 : 0;
        results.push({ domain: d, fiche: f, score: titleMatch + subtitleMatch });
      }
    });
  });

  // Sort by relevance
  results.sort((a, b) => b.score - a.score);

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

  // Keyboard shortcut / and Cmd+K
  document.addEventListener('keydown', (e) => {
    const modalOpen = !$('#modal-overlay').classList.contains('hidden');
    // Cmd+K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (!modalOpen) input.focus();
      return;
    }
    // / shortcut
    if (e.key === '/' && document.activeElement !== input && !modalOpen) {
      e.preventDefault();
      input.focus();
    }
    // Escape: close modal OR close mobile menu
    if (e.key === 'Escape') {
      if (!modalOpen) {
        closeMobileMenu();
      } else {
        closeModal();
      }
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

  // Atelier link
  const atelierLink = $('[data-view="atelier"]');
  if (atelierLink) {
    atelierLink.addEventListener('click', (e) => { e.preventDefault(); navigate('atelier'); closeMobileMenu(); });
  }

  // Sourcing link
  const srcLink = $('[data-view="sourcing"]');
  if (srcLink) {
    srcLink.addEventListener('click', (e) => { e.preventDefault(); navigate('sourcing'); closeMobileMenu(); });
  }

  // Ma Veille link
  const veilleLink = $('[data-view="veille"]');
  if (veilleLink) {
    veilleLink.addEventListener('click', (e) => { e.preventDefault(); navigate('veille'); closeMobileMenu(); });
  }

  // Quiz link
  const quizLink = $('[data-view="quiz"]');
  if (quizLink) {
    quizLink.addEventListener('click', (e) => { e.preventDefault(); navigate('quiz'); closeMobileMenu(); });
  }
}

// ============ EXPORT / IMPORT DATA ============
function exportAllData() {
  const data = {};
  const keys = ['architek-pro-data', 'architek-pro-conseils', 'architek-pro-references', 'architek-pro-shopping', 'architek-pro-etudes', 'architek-pro-veille'];
  keys.forEach(k => {
    const val = localStorage.getItem(k);
    if (val) data[k] = JSON.parse(val);
  });
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `architek-pro-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('Backup téléchargé ✓');
}

function importAllData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        const validKeys = ['architek-pro-data', 'architek-pro-conseils', 'architek-pro-references', 'architek-pro-shopping', 'architek-pro-etudes', 'architek-pro-veille'];
        let count = 0;
        for (const [k, v] of Object.entries(data)) {
          if (validKeys.includes(k)) {
            localStorage.setItem(k, JSON.stringify(v));
            count++;
          }
        }
        state.userData = loadUserData();
        toast(`${count} jeux de données restaurés ✓`);
        navigate('dashboard');
      } catch (err) {
        toast('Fichier invalide — vérifiez le format JSON.');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ============ DARK MODE ============
function initDarkMode() {
  const saved = localStorage.getItem('architek-pro-theme');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (saved === 'light') {
    document.body.classList.add('light-forced');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // No saved preference — follow system
    document.body.classList.add('dark-mode');
  }

  const toggle = $('#dark-mode-toggle');
  if (!toggle) return;

  updateDarkModeIcon();

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('architek-pro-theme', isDark ? 'dark' : 'light');
    // If user explicitly chooses light, mark it so prefers-color-scheme CSS doesn't override
    document.body.classList.toggle('light-forced', !isDark);
    updateDarkModeIcon();
  });
}

function updateDarkModeIcon() {
  const icon = $('.dm-icon');
  if (icon) icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// ============ BACK TO TOP ============
function initBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.className = 'back-to-top hidden';
  btn.innerHTML = '↑';
  btn.title = 'Retour en haut';
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('hidden', window.scrollY < 400);
  });
}

// ============ COLLAPSIBLE SIDEBAR SECTIONS ============
function initCollapsibleSidebar() {
  $$('.nav-separator').forEach(sep => {
    sep.style.cursor = 'pointer';
    sep.style.userSelect = 'none';
    const arrow = document.createElement('span');
    arrow.className = 'nav-separator-arrow';
    arrow.textContent = '▾';
    sep.appendChild(arrow);

    sep.addEventListener('click', () => {
      sep.classList.toggle('collapsed');
      arrow.textContent = sep.classList.contains('collapsed') ? '▸' : '▾';
      let next = sep.nextElementSibling;
      while (next && !next.classList.contains('nav-separator')) {
        next.style.display = sep.classList.contains('collapsed') ? 'none' : '';
        next = next.nextElementSibling;
      }
    });
  });
}

// ============ QUIZ / FLASHCARDS ============
function renderQuiz(container) {
  const allFiches = [];
  APP_DATA.domains.forEach(d => d.fiches.forEach(f => allFiches.push({ domain: d, fiche: f })));

  // Quiz state
  if (!state.quizState) {
    state.quizState = { domainFilter: 'all', score: 0, total: 0, current: null, flipped: false, pool: [] };
  }
  const qs = state.quizState;

  const header = el('div', { className: 'quiz-header' });
  header.innerHTML = `
    <h2>🧠 Quiz / Flashcards</h2>
    <p>Testez vos connaissances — retournez la carte pour voir la réponse</p>
  `;
  container.appendChild(header);

  // Filters + score
  const controls = el('div', { className: 'quiz-controls' });

  const filterSelect = el('select', { className: 'conseil-input quiz-filter' });
  filterSelect.innerHTML = `<option value="all">Tous les domaines</option>` +
    APP_DATA.domains.map(d => `<option value="${d.id}" ${qs.domainFilter === d.id ? 'selected' : ''}>${d.icon} ${d.name}</option>`).join('');
  filterSelect.addEventListener('change', () => {
    qs.domainFilter = filterSelect.value;
    qs.pool = [];
    qs.score = 0;
    qs.total = 0;
    drawCard();
  });

  const scoreEl = el('div', { className: 'quiz-score' });

  controls.appendChild(filterSelect);
  controls.appendChild(scoreEl);
  container.appendChild(controls);

  // Card area
  const cardArea = el('div', { className: 'quiz-card-area' });
  container.appendChild(cardArea);

  // Action buttons
  const actionsRow = el('div', { className: 'quiz-actions' });
  container.appendChild(actionsRow);

  function getPool() {
    if (qs.domainFilter === 'all') return [...allFiches];
    return allFiches.filter(x => x.domain.id === qs.domainFilter);
  }

  function drawCard() {
    if (qs.pool.length === 0) qs.pool = getPool().sort(() => Math.random() - 0.5);
    if (qs.pool.length === 0) { cardArea.innerHTML = '<p>Aucune fiche dans ce domaine.</p>'; return; }
    qs.current = qs.pool.pop();
    qs.flipped = false;
    renderCard();
  }

  function renderCard() {
    const { domain, fiche } = qs.current;
    scoreEl.innerHTML = `<span class="quiz-score-good">✓ ${qs.score}</span> / <span class="quiz-score-total">${qs.total}</span>`;

    cardArea.innerHTML = '';
    const card = el('div', { className: `quiz-card ${qs.flipped ? 'flipped' : ''}` });
    card.innerHTML = `
      <div class="quiz-card-inner">
        <div class="quiz-card-front">
          <div class="quiz-card-domain">${domain.icon} ${domain.name}</div>
          <h3 class="quiz-card-title">${fiche.title}</h3>
          <p class="quiz-card-subtitle">${fiche.subtitle}</p>
          <div class="quiz-card-tags">${fiche.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <div class="quiz-card-hint">Cliquez pour retourner ↻</div>
        </div>
        <div class="quiz-card-back">
          <div class="quiz-card-domain">${domain.icon} ${domain.name}</div>
          <h3 class="quiz-card-title">${fiche.title}</h3>
          <div class="quiz-card-answer">${fiche.summary}</div>
          ${fiche.keyPoints ? `<ul class="quiz-card-points">${fiche.keyPoints.slice(0, 3).map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
          <button class="btn btn-quiz-open" data-domain="${domain.id}" data-fiche="${fiche.id}">Ouvrir la fiche →</button>
        </div>
      </div>
    `;
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-quiz-open')) {
        const btn = e.target.closest('.btn-quiz-open');
        navigate('fiche', btn.dataset.domain, btn.dataset.fiche);
        return;
      }
      if (!qs.flipped) {
        qs.flipped = true;
        card.classList.add('flipped');
      }
    });
    cardArea.appendChild(card);

    // Actions
    actionsRow.innerHTML = '';
    if (qs.flipped) {
      renderActions();
    } else {
      // Show flip hint
    }
  }

  function renderActions() {
    actionsRow.innerHTML = '';
    const knewIt = el('button', { className: 'btn btn-quiz-knew', onClick: () => { qs.score++; qs.total++; drawCard(); } });
    knewIt.textContent = '✓ Je savais';
    const didntKnow = el('button', { className: 'btn btn-quiz-didnt', onClick: () => { qs.total++; drawCard(); } });
    didntKnow.textContent = '✗ Je ne savais pas';
    const skipBtn = el('button', { className: 'btn btn-quiz-skip', onClick: () => { drawCard(); } });
    skipBtn.textContent = '→ Passer';
    actionsRow.appendChild(knewIt);
    actionsRow.appendChild(didntKnow);
    actionsRow.appendChild(skipBtn);
  }

  // Watch for flip via card click
  const observer = new MutationObserver(() => {
    if (qs.flipped && actionsRow.children.length === 0) renderActions();
  });
  observer.observe(cardArea, { subtree: true, attributes: true });

  drawCard();
}

// ============ HASH URL ROUTING (share links) ============
function handleHashRoute() {
  const hash = window.location.hash.slice(1); // remove #
  if (!hash) return false;

  const parts = hash.split('/');
  if (parts.length === 2) {
    // #domainId/ficheId
    const domain = getDomain(parts[0]);
    if (domain) {
      const fiche = domain.fiches.find(f => f.id === parts[1]);
      if (fiche) {
        navigate('fiche', parts[0], parts[1]);
        return true;
      }
    }
  } else if (parts.length === 1) {
    // #domainId
    const domain = getDomain(parts[0]);
    if (domain) {
      navigate('domain', parts[0]);
      return true;
    }
  }
  return false;
}

// ============ GLOSSARY TOOLTIP ============
function buildGlossary() {
  const glossary = {};
  // Find the Vocabulaire Pro domain
  const vocabDomain = APP_DATA.domains.find(d => d.id === 'vocabulaire');
  if (!vocabDomain) return glossary;

  // Extract from Lexique Express (the A→Z fiche)
  const lexiqueFiche = vocabDomain.fiches.find(f => f.id === 'vocab-lexique-express');
  if (lexiqueFiche) {
    lexiqueFiche.sections.forEach(sec => {
      // Parse "Terme : définition" patterns
      const entries = sec.content.split(/\.\s+(?=[A-ZÀÂÉÈÊËÎÏÔÙÛÜ])/);
      entries.forEach(entry => {
        const match = entry.match(/^([A-ZÀÂÉÈÊËÎÏÔÙÛÜa-zàâéèêëîïôùûü][^:]+?)\s*:\s*(.+)/);
        if (match) {
          const term = match[1].trim().replace(/\s*\/\s*.+/, ''); // take first variant
          const def = match[2].trim();
          if (term.length >= 3 && term.length <= 40) {
            glossary[term.toLowerCase()] = { term: term, definition: def.length > 150 ? def.slice(0, 147) + '…' : def };
          }
        }
      });
    });
  }

  // Also extract key terms from Gros Œuvre / Second Œuvre
  ['vocab-gros-oeuvre', 'vocab-second-oeuvre', 'vocab-finitions-surfaces', 'vocab-mise-en-oeuvre'].forEach(ficheId => {
    const f = vocabDomain.fiches.find(fi => fi.id === ficheId);
    if (!f) return;
    f.sections.forEach(sec => {
      const entries = sec.content.split(/\.\s+(?=[A-ZÀÂÉÈÊËÎÏÔÙÛÜ])/);
      entries.forEach(entry => {
        const match = entry.match(/^([A-ZÀÂÉÈÊËÎÏÔÙÛÜa-zàâéèêëîïôùûü][^:]+?)\s*:\s*(.+)/);
        if (match) {
          const term = match[1].trim().replace(/\s*\/\s*.+/, '');
          const def = match[2].trim();
          if (term.length >= 3 && term.length <= 40 && !glossary[term.toLowerCase()]) {
            glossary[term.toLowerCase()] = { term: term, definition: def.length > 150 ? def.slice(0, 147) + '…' : def };
          }
        }
      });
    });
  });

  return glossary;
}

function initGlossary() {
  const glossary = buildGlossary();
  state.glossary = glossary;
  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length); // longest first
  state.glossaryTerms = terms;
  state.glossaryRegex = terms.length > 0
    ? new RegExp(`\\b(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi')
    : null;
}

function applyGlossaryHighlights() {
  if (!state.glossaryRegex || state.currentView !== 'fiche') return;

  // Target fiche content sections, summary, tips, key points
  const targets = $$('.fiche-section p, .fiche-detail-summary, .key-points li, .practical-tips li');
  targets.forEach(el => {
    if (el.dataset.glossaryDone) return;
    el.dataset.glossaryDone = '1';

    const html = el.innerHTML;
    const newHtml = html.replace(state.glossaryRegex, (match) => {
      const entry = state.glossary[match.toLowerCase()];
      if (!entry) return match;
      return `<span class="glossary-term" data-term="${escapeHtml(entry.term)}" data-def="${escapeHtml(entry.definition)}">${match}</span>`;
    });
    if (newHtml !== html) el.innerHTML = newHtml;
  });

  // Bind tooltip events
  $$('.glossary-term').forEach(term => {
    if (term.dataset.bound) return;
    term.dataset.bound = '1';
    term.addEventListener('mouseenter', showGlossaryTooltip);
    term.addEventListener('mouseleave', hideGlossaryTooltip);
    term.addEventListener('click', (e) => {
      e.stopPropagation();
      showGlossaryTooltip(e);
      setTimeout(hideGlossaryTooltip, 4000);
    });
  });
}

function showGlossaryTooltip(e) {
  const tooltip = $('#glossary-tooltip');
  if (!tooltip) return;
  const target = e.currentTarget;
  const term = target.dataset.term;
  const def = target.dataset.def;

  tooltip.querySelector('.glossary-tooltip-term').textContent = term;
  tooltip.querySelector('.glossary-tooltip-def').textContent = def;
  tooltip.classList.remove('hidden');

  const rect = target.getBoundingClientRect();
  const ttRect = tooltip.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - ttRect.width / 2;
  let top = rect.top - ttRect.height - 8;

  // Keep on screen
  if (left < 8) left = 8;
  if (left + ttRect.width > window.innerWidth - 8) left = window.innerWidth - ttRect.width - 8;
  if (top < 8) top = rect.bottom + 8; // flip below

  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
}

function hideGlossaryTooltip() {
  const tooltip = $('#glossary-tooltip');
  if (tooltip) tooltip.classList.add('hidden');
}

// ============ VISITOR COUNTER ============
function initVisitorCounter() {
  const countEl = $('#visitor-count');
  const statusText = $('#visitor-status-text');
  const statusDot = $('.visitor-dot');

  // --- Session status ---
  if (statusText) {
    statusText.textContent = 'En ligne';
    if (statusDot) statusDot.classList.add('online');
  }

  // Update status when tab visibility changes
  document.addEventListener('visibilitychange', () => {
    if (!statusText || !statusDot) return;
    if (document.hidden) {
      statusText.textContent = 'En pause';
      statusDot.classList.remove('online');
      statusDot.classList.add('away');
    } else {
      statusText.textContent = 'En ligne';
      statusDot.classList.remove('away');
      statusDot.classList.add('online');
    }
  });

  // --- Visit counter (only once per session) ---
  const alreadyCounted = sessionStorage.getItem('architek-pro-counted');

  if (alreadyCounted) {
    // Already counted this session, just display cached value
    const cached = localStorage.getItem('architek-pro-visit-count');
    if (countEl && cached) countEl.textContent = parseInt(cached).toLocaleString('fr-FR');
    return;
  }

  // Increment counter via API
  fetch('https://api.counterapi.dev/v1/architek-pro-elululu/visits/up')
    .then(r => r.json())
    .then(data => {
      if (countEl && data.count) {
        countEl.textContent = data.count.toLocaleString('fr-FR');
        localStorage.setItem('architek-pro-visit-count', data.count);
        sessionStorage.setItem('architek-pro-counted', '1');
      }
    })
    .catch(() => {
      // Fallback: localStorage counter
      let visits = parseInt(localStorage.getItem('architek-pro-visit-count') || '0') + 1;
      localStorage.setItem('architek-pro-visit-count', visits);
      sessionStorage.setItem('architek-pro-counted', '1');
      if (countEl) countEl.textContent = visits.toLocaleString('fr-FR');
    });
}

// ============ INIT ============
function init() {
  initDarkMode();
  buildSidebar();
  initNavEvents();
  initSearch();
  initMobileMenu();
  initBackToTop();
  initCollapsibleSidebar();
  initVisitorCounter();
  initGlossary();

  // Try hash route first, fallback to dashboard
  if (!handleHashRoute()) {
    navigate('dashboard');
  }
}

document.addEventListener('DOMContentLoaded', init);
