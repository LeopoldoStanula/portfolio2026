document.addEventListener('DOMContentLoaded', () => {
  const langSwitch = document.getElementById('lang-switch-toggle');
  const btnEn = document.getElementById('btn-en');
  const btnPt = document.getElementById('btn-pt');

  const introTitle = document.getElementById('intro-title');
  const introSubtitle = document.getElementById('intro-subtitle');
  const btnPortfolio = document.getElementById('btn-portfolio');
  const btnContact = document.getElementById('btn-contact');
  const contactsTagline = document.getElementById('contacts-tagline');

  let currentLang = 'en';
  let currentCategory = 'graphicDesign';

  const translations = {
    en: {
      title: `I'm <span class="highlight-name">Leopoldo Stanula,</span>`,
      subtitle: 'Designer, based in Brazil.',
      portfolioBtn: 'Check portfolio',
      contactBtn: 'Get in touch',
      contactsTagline: "Click, type, send – let's design something",
      viewProject: 'View project details',
      galleryHeading: 'Project Image Gallery'
    },
    pt: {
      title: `Eu sou <span class="highlight-name">Leopoldo Stanula,</span>`,
      subtitle: 'Designer, no Brasil.',
      portfolioBtn: 'Ver portfólio',
      contactBtn: 'Entrar em contato',
      contactsTagline: 'Clique, digite, envie – vamos projetar algo incrível',
      viewProject: 'Ver detalhes do projeto',
      galleryHeading: 'Galeria de Imagens do Projeto'
    }
  };

  function updateLangSwitchPill() {
    if (!langSwitch) return;
    const activeBtn = langSwitch.querySelector('.lang-btn.active');
    if (activeBtn) {
      const left = activeBtn.offsetLeft;
      const width = activeBtn.offsetWidth;
      langSwitch.style.setProperty('--pill-left', `${left}px`);
      langSwitch.style.setProperty('--pill-width', `${width}px`);
    }
  }

  function setLanguage(lang) {
    currentLang = lang;
    if (lang === 'pt') {
      btnPt.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnPt.classList.remove('active');
    }

    updateLangSwitchPill();

    const t = translations[lang];
    if (introTitle) introTitle.innerHTML = t.title;
    if (introSubtitle) introSubtitle.textContent = t.subtitle;
    if (btnPortfolio) btnPortfolio.textContent = t.portfolioBtn;
    if (btnContact) btnContact.textContent = t.contactBtn;
    if (contactsTagline) contactsTagline.textContent = t.contactsTagline;

    // Redesenha os cards com o idioma atualizado
    renderProjectsGrid(currentCategory);
    triggerGlitchEffect();
  }

  function triggerGlitchEffect() {
    const glitchTargets = [];

    if (introTitle) glitchTargets.push(introTitle);
    if (introSubtitle) glitchTargets.push(introSubtitle);

    // cta-group buttons
    document.querySelectorAll('.cta-group .btn').forEach(el => glitchTargets.push(el));

    // ticker wrapper / content
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent) glitchTargets.push(tickerContent);

    // portfolio tabs
    document.querySelectorAll('.portfolio-tabs .tab-btn').forEach(el => glitchTargets.push(el));

    // project card titles/descriptions
    document.querySelectorAll('.card-item-title, .card-item-desc').forEach(el => glitchTargets.push(el));

    // contacts tagline
    if (contactsTagline) glitchTargets.push(contactsTagline);

    glitchTargets.forEach(el => {
      if (el) {
        el.setAttribute('data-text', el.textContent || el.innerText);
        el.classList.add('glitch-effect');
        setTimeout(() => {
          el.classList.remove('glitch-effect');
        }, 400);
      }
    });
  }

  if (langSwitch) {
    langSwitch.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'pt' : 'en';
      setLanguage(newLang);
    });
  }

  // Inicializa o tamanho/posição da pílula no carregamento
  updateLangSwitchPill();
  window.addEventListener('resize', updateLangSwitchPill);

  /* -------------------------------------------------------------
     Dynamic Project Cards Grid (3 cards per row)
  ------------------------------------------------------------- */
  const projectsGrid = document.getElementById('projects-grid');
  const tabBtns = document.querySelectorAll('.tab-btn');

  function renderProjectsGrid(category) {
    if (!projectsGrid || typeof PROJECTS_DATA === 'undefined') return;

    const projectsList = PROJECTS_DATA[category] || [];
    projectsGrid.innerHTML = '';

    projectsList.forEach(project => {
      const title = project.title[currentLang] || project.title.pt;
      const subtitle = project.subtitle[currentLang] || project.subtitle.pt;
      const shortDesc = project.shortDescription[currentLang] || project.shortDescription.pt;

      const cardEl = document.createElement('div');
      cardEl.className = 'project-card-item';
      cardEl.setAttribute('role', 'button');
      cardEl.setAttribute('tabindex', '0');

      cardEl.innerHTML = `
        <div class="card-thumb-wrapper">
          <img src="${project.thumbnail}" alt="${title}" class="card-thumb-img">
        </div>
        <div class="card-body-content">
          <h3 class="card-item-title">${title}</h3>
          <p class="card-item-desc">${shortDesc}</p>
        </div>
      `;

      cardEl.addEventListener('click', () => openProjectModal(project));
      projectsGrid.appendChild(cardEl);
    });
  }

  // Tab switching logic
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderProjectsGrid(currentCategory);
    });
  });

  /* -------------------------------------------------------------
     Project Details Modal (Ordered Image List)
  ------------------------------------------------------------- */
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalDesc = document.getElementById('modal-description');
  const modalTags = document.getElementById('modal-tags');
  const modalGallery = document.getElementById('modal-gallery');

  function openProjectModal(project) {
    if (!modal) return;

    const title = project.title[currentLang] || project.title.pt;
    const subtitle = project.subtitle[currentLang] || project.subtitle.pt;
    const fullDesc = project.fullDescription[currentLang] || project.fullDescription.pt;

    modalTitle.textContent = title;
    modalSubtitle.textContent = subtitle;
    modalDesc.textContent = fullDesc;

    // Set tags
    modalTags.innerHTML = project.tags.map(tag => `<span class="card-tag-pill">${tag}</span>`).join('');

    // Render ordered images gallery
    modalGallery.innerHTML = '';
    project.images.forEach((imgObj, idx) => {
      const captionText = imgObj.caption ? (imgObj.caption[currentLang] || imgObj.caption.pt) : '';

      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.innerHTML = `
        <div class="gallery-img-wrapper">
          <img src="${imgObj.url}" alt="${title} - Imagem ${idx + 1}" class="gallery-img" loading="lazy">
        </div>
        ${captionText ? `
          <div class="gallery-caption">
            <span class="gallery-caption-num">${idx + 1}</span>
            <span>${captionText}</span>
          </div>
        ` : ''}
      `;
      modalGallery.appendChild(galleryItem);
    });

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // Initial render
  renderProjectsGrid(currentCategory);

  /* -------------------------------------------------------------
     Subtle Dot Grid Canvas with Mouse Trail / Cauda Persistence
  ------------------------------------------------------------- */
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const spacing = 16;
    const rows = Math.ceil(height / spacing);
    const cols = Math.ceil(width / spacing);

    const grid = new Float32Array(rows * cols);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    let mouseX = -1000;
    let mouseY = -1000;
    const hoverRadius = 75;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const startCol = Math.max(0, Math.floor((mouseX - hoverRadius) / spacing));
      const endCol = Math.min(cols - 1, Math.ceil((mouseX + hoverRadius) / spacing));
      const startRow = Math.max(0, Math.floor((mouseY - hoverRadius) / spacing));
      const endRow = Math.min(rows - 1, Math.ceil((mouseY + hoverRadius) / spacing));

      for (let r = startRow; r <= endRow; r++) {
        for (let c = startCol; c <= endCol; c++) {
          const px = c * spacing;
          const py = r * spacing;
          const dx = mouseX - px;
          const dy = mouseY - py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < hoverRadius) {
            const intensity = (1 - dist / hoverRadius);
            const index = r * cols + c;
            if (intensity > grid[index]) {
              grid[index] = intensity;
            }
          }
        }
      }
    });

    function drawDotsTrail() {
      ctx.clearRect(0, 0, width, height);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const index = r * cols + c;
          let intensity = grid[index];

          if (intensity > 0.005) {
            const px = c * spacing;
            const py = r * spacing;
            const radius = 0.5 + intensity * 1.2;
            const alpha = intensity * 0.7;

            ctx.beginPath();
            ctx.arc(px, py, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(204, 197, 143, ${alpha})`;
            ctx.fill();

            grid[index] *= 0.965;
          } else {
            grid[index] = 0;
          }
        }
      }

      requestAnimationFrame(drawDotsTrail);
    }

    drawDotsTrail();
  }
});




