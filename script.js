document.addEventListener('DOMContentLoaded', () => {
  const langSwitch = document.getElementById('lang-switch-toggle');
  const btnEn = document.getElementById('btn-en');
  const btnPt = document.getElementById('btn-pt');

  const introTitle = document.getElementById('intro-title');
  const introSubtitle = document.getElementById('intro-subtitle');
  const btnPortfolio = document.getElementById('btn-portfolio');
  const btnContact = document.getElementById('btn-contact');
  const contactsTagline = document.getElementById('contacts-tagline');

  const tickerContent = document.querySelector('.ticker-content');
  const tabGraphicTitle = document.querySelector('#tab-graphic .tab-title');
  const tabUxTitle = document.querySelector('#tab-ux .tab-title');

  const contactsBadge = document.getElementById('contacts-badge');
  const emailLabel = document.getElementById('email-label');
  const phoneLabel = document.getElementById('phone-label');
  const locationText = document.getElementById('location-text');
  const statusTag = document.getElementById('status-tag');

  let currentLang = 'en';
  let currentCategory = 'graphicDesign';
  let isFirstLoad = true;

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

    // Use external translations data
    if (typeof TRANSLATIONS_DATA === 'undefined') return;
    const t = TRANSLATIONS_DATA[lang];
    if (!t) return;

    if (introTitle) introTitle.innerHTML = t.title;
    if (introSubtitle) introSubtitle.textContent = t.subtitle;
    if (btnPortfolio) btnPortfolio.textContent = t.portfolioBtn;
    if (btnContact) btnContact.textContent = t.contactBtn;
    if (contactsTagline) contactsTagline.textContent = t.contactsTagline;
    if (tickerContent) tickerContent.innerHTML = t.ticker;
    if (tabGraphicTitle) tabGraphicTitle.textContent = t.tabGraphic;
    if (tabUxTitle) tabUxTitle.textContent = t.tabUx;

    if (contactsBadge) contactsBadge.textContent = t.contactsBadge;
    if (emailLabel) emailLabel.textContent = t.emailLabel;
    if (phoneLabel) phoneLabel.textContent = t.phoneLabel;
    if (locationText) locationText.textContent = t.locationText;
    if (statusTag) statusTag.textContent = t.statusTag;

    // Redesenha os cards com o idioma atualizado
    renderProjectsGrid(currentCategory);
    if (activeProject && modal && modal.classList.contains('active')) {
      openProjectModal(activeProject);
    }
    if (!isFirstLoad) {
      triggerGlitchEffect();
    }
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
  const modalYear = document.getElementById('modal-year');
  const modalDesc = document.getElementById('modal-description');
  const modalGallery = document.getElementById('modal-gallery');
  const modalFooterAction = document.getElementById('modal-footer-action');

  let activeProject = null;

  function openProjectModal(project) {
    if (!modal) return;
    activeProject = project;

    const scrollArea = modal.querySelector('.modal-scroll-area');
    if (scrollArea) scrollArea.scrollTop = 0;

    const title = project.title[currentLang] || project.title.pt;
    const subtitle = project.subtitle[currentLang] || project.subtitle.pt;
    const fullDesc = project.fullDescription[currentLang] || project.fullDescription.pt;

    modalTitle.textContent = title;
    modalSubtitle.textContent = subtitle;
    modalDesc.textContent = fullDesc;

    // Display project year (subtle/discrete)
    let yearVal = '';
    if (project.year) {
      if (typeof project.year === 'object') {
        yearVal = project.year[currentLang] || project.year.pt || '';
      } else {
        yearVal = project.year;
      }
    }

    if (modalYear) {
      if (yearVal) {
        const yearLabel = (typeof TRANSLATIONS_DATA !== 'undefined' && TRANSLATIONS_DATA[currentLang] && TRANSLATIONS_DATA[currentLang].yearLabel)
          ? TRANSLATIONS_DATA[currentLang].yearLabel
          : (currentLang === 'pt' ? 'Ano' : 'Year');
        modalYear.textContent = `${yearLabel}: ${yearVal}`;
        modalYear.style.display = 'inline-block';
      } else {
        modalYear.style.display = 'none';
      }
    }

    // Render ordered images gallery
    modalGallery.innerHTML = '';
    project.images.forEach((imgObj, idx) => {
      const captionText = imgObj.caption ? (imgObj.caption[currentLang] || imgObj.caption.pt) : '';

      let imageTextVal = '';
      if (imgObj.imageText) {
        if (typeof imgObj.imageText === 'object') {
          imageTextVal = imgObj.imageText[currentLang] || '';
        } else {
          imageTextVal = imgObj.imageText;
        }
      }

      const imgBadgeText = (typeof TRANSLATIONS_DATA !== 'undefined' && TRANSLATIONS_DATA[currentLang] && TRANSLATIONS_DATA[currentLang].imageTextBadge)
        ? TRANSLATIONS_DATA[currentLang].imageTextBadge
        : (currentLang === 'pt' ? 'Texto na imagem' : 'Text in image');

      const overlayHTML = imageTextVal ? `
        <div class="image-text-overlay" tabindex="0" role="button" aria-expanded="false" aria-label="${imgBadgeText}">
          <div class="image-text-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <div class="image-text-tooltip">
            <div class="tooltip-header">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>${imgBadgeText}</span>
            </div>
            <div class="tooltip-body">${imageTextVal}</div>
          </div>
        </div>
      ` : '';

      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.innerHTML = `
        <div class="gallery-img-wrapper">
          <img src="${imgObj.url}" alt="${title} - Imagem ${idx + 1}" class="gallery-img" loading="lazy">
          ${overlayHTML}
        </div>
        ${captionText ? `
          <div class="gallery-caption">
            <p class="gallery-caption-text">${captionText}</p>
            <div class="gallery-caption-divider"></div>
          </div>
        ` : ''}
      `;

      const overlayEl = galleryItem.querySelector('.image-text-overlay');
      if (overlayEl) {
        overlayEl.addEventListener('click', (e) => {
          e.stopPropagation();
          const isActive = overlayEl.classList.toggle('active');
          overlayEl.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });
      }

      modalGallery.appendChild(galleryItem);
    });

    // Render External Action Button (at the end of project modal)
    if (modalFooterAction) {
      modalFooterAction.innerHTML = '';

      let linkUrl = '';
      let linkTextVal = '';

      if (project.externalLink) {
        linkUrl = project.externalLink.url || '';
        if (project.externalLink.text) {
          linkTextVal = typeof project.externalLink.text === 'object'
            ? (project.externalLink.text[currentLang] || project.externalLink.text.pt)
            : project.externalLink.text;
        }
      } else if (project.linkUrl) {
        linkUrl = project.linkUrl;
        if (project.linkText) {
          linkTextVal = typeof project.linkText === 'object'
            ? (project.linkText[currentLang] || project.linkText.pt)
            : project.linkText;
        }
      }

      if (linkUrl) {
        if (!linkTextVal) {
          linkTextVal = (typeof TRANSLATIONS_DATA !== 'undefined' && TRANSLATIONS_DATA[currentLang] && TRANSLATIONS_DATA[currentLang].defaultExternalLinkBtn)
            ? TRANSLATIONS_DATA[currentLang].defaultExternalLinkBtn
            : (currentLang === 'pt' ? 'Ver mais detalhes' : 'View more details');
        }

        const btnEl = document.createElement('a');
        btnEl.href = linkUrl;
        btnEl.target = '_blank';
        btnEl.rel = 'noopener noreferrer';
        btnEl.className = 'modal-action-btn';
        btnEl.innerHTML = `
          <span>${linkTextVal}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        `;
        modalFooterAction.appendChild(btnEl);
        modalFooterAction.style.display = 'flex';
      } else {
        modalFooterAction.style.display = 'none';
      }
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.image-text-overlay')) {
      document.querySelectorAll('.image-text-overlay.active').forEach(el => {
        el.classList.remove('active');
        el.setAttribute('aria-expanded', 'false');
      });
    }
  });

  function closeProjectModal() {
    if (!modal) return;
    activeProject = null;
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
  setLanguage(currentLang);
  initIntroAnimations();
  isFirstLoad = false;

  // Designer Image Interactive Parallax Tilt
  const imageWrapper = document.querySelector('.image-wrapper');
  const designerImg = document.querySelector('.designer-img');
  if (imageWrapper && designerImg) {
    imageWrapper.addEventListener('mousemove', (e) => {
      const rect = imageWrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      designerImg.style.transform = `scale(1.4) rotateX(${y * -10}deg) rotateY(${x * 10}deg) translate3d(${x * -8}px, ${y * -8}px, 0)`;
    });
    imageWrapper.addEventListener('mouseleave', () => {
      designerImg.style.transform = 'scale(1.4) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)';
    });
    imageWrapper.addEventListener('click', () => {
      imageWrapper.classList.remove('image-glitch');
      void imageWrapper.offsetWidth; // Force reflow to restart animation
      imageWrapper.classList.add('image-glitch');
      setTimeout(() => {
        imageWrapper.classList.remove('image-glitch');
      }, 600);
    });
  }

  function initIntroAnimations() {
    const revealSteps = [
      { selector: '.lang-switch-wrapper', delay: 100 },
      { selector: '#intro-title', delay: 300, glitch: true },
      { selector: '#intro-subtitle', delay: 500, glitch: true },
      { selector: '.ticker-wrapper', delay: 700, glitch: true },
      { selector: '.cta-group .btn', delay: 900, glitch: true, stagger: 150 },
      { selector: '.image-wrapper', delay: 1200, imageGlitch: true },
      { selector: '.section-divider', delay: 1300 },
      { selector: '.portfolio-tabs', delay: 1400 },
      { selector: '.projects-grid-2cols', delay: 1600 },
      { selector: '.contacts-section', delay: 1800 }
    ];

    // First, set all target elements to hidden/reveal-init state
    revealSteps.forEach(step => {
      const elements = document.querySelectorAll(step.selector);
      elements.forEach(el => {
        el.classList.add('reveal-init');
      });
    });

    // Then, trigger their reveal with staggering delays
    revealSteps.forEach(step => {
      const elements = document.querySelectorAll(step.selector);
      elements.forEach((el, index) => {
        const itemDelay = step.delay + (step.stagger ? index * step.stagger : 0);
        setTimeout(() => {
          el.classList.remove('reveal-init');
          el.classList.add('reveal-show');

          if (step.glitch) {
            el.setAttribute('data-text', el.textContent || el.innerText);
            el.classList.add('glitch-effect');
            setTimeout(() => {
              el.classList.remove('glitch-effect');
            }, 600);
          }

          if (step.imageGlitch) {
            el.classList.add('image-glitch');
            setTimeout(() => {
              el.classList.remove('image-glitch');
            }, 600);
          }
        }, itemDelay);
      });
    });
  }

  /* -------------------------------------------------------------
     Subtle Dot Grid Canvas with Mouse Trail / Cauda Persistence
  ------------------------------------------------------------- */
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const spacing = 16;
    let rows = Math.ceil(height / spacing);
    let cols = Math.ceil(width / spacing);

    let grid = new Float32Array(rows * cols);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      rows = Math.ceil(height / spacing);
      cols = Math.ceil(width / spacing);
      grid = new Float32Array(rows * cols);
    });

    let mouseX = -1000;
    let mouseY = -1000;
    const hoverRadius = 75;

    let ripples = [];

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouseX = -1000;
      mouseY = -1000;
    });

    window.addEventListener('click', (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        width: 40,
        speed: 4,
        maxRadius: Math.max(width, height) * 1.2
      });
    });

    function drawDotsTrail() {
      ctx.clearRect(0, 0, width, height);

      // 1. Decay the grid values for the trail effect
      for (let i = 0; i < grid.length; i++) {
        grid[i] *= 0.92; // Decay factor: higher = longer tail, lower = shorter tail
      }

      // 2. Sustain grid intensity around the current mouse position (even if stationary)
      if (mouseX >= 0 && mouseY >= 0) {
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
      }

      // 2.5 Ripple effect
      for (let i = ripples.length - 1; i >= 0; i--) {
        let r = ripples[i];
        r.radius += r.speed;

        const startCol = Math.max(0, Math.floor((r.x - r.radius - r.width) / spacing));
        const endCol = Math.min(cols - 1, Math.ceil((r.x + r.radius + r.width) / spacing));
        const startRow = Math.max(0, Math.floor((r.y - r.radius - r.width) / spacing));
        const endRow = Math.min(rows - 1, Math.ceil((r.y + r.radius + r.width) / spacing));

        for (let row = startRow; row <= endRow; row++) {
          for (let col = startCol; col <= endCol; col++) {
            const px = col * spacing;
            const py = row * spacing;
            const dx = r.x - px;
            const dy = r.y - py;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const diff = Math.abs(dist - r.radius);
            if (diff < r.width) {
              const baseIntensity = 1 - diff / r.width;
              // Fade out as it expands
              const fade = Math.max(0, 1 - r.radius / r.maxRadius);
              const intensity = baseIntensity * fade;

              const index = row * cols + col;
              if (intensity > grid[index]) {
                grid[index] = intensity;
              }
            }
          }
        }

        if (r.radius > r.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // 3. Draw the dots with active intensities
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const index = r * cols + c;
          const intensity = grid[index];

          if (intensity > 0.005) {
            const px = c * spacing;
            const py = r * spacing;
            const radius = 0.5 + intensity * 1.2;
            const alpha = intensity * 0.7;

            ctx.beginPath();
            ctx.arc(px, py, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(204, 197, 143, ${alpha})`;
            ctx.fill();
          }
        }
      }

      requestAnimationFrame(drawDotsTrail);
    }

    drawDotsTrail();
  }
});




