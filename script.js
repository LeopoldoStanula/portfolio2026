document.addEventListener('DOMContentLoaded', () => {
  const langSwitch = document.getElementById('lang-switch-toggle');
  const btnEn = document.getElementById('btn-en');
  const btnPt = document.getElementById('btn-pt');

  const introTitle = document.getElementById('intro-title');
  const introSubtitle = document.getElementById('intro-subtitle');
  const btnPortfolio = document.getElementById('btn-portfolio');
  const btnContact = document.getElementById('btn-contact');
  const cardGraphicDesc = document.getElementById('card-graphic-desc');
  const cardUxDesc = document.getElementById('card-ux-desc');
  const contactsTagline = document.getElementById('contacts-tagline');

  let currentLang = 'en';

  const translations = {
    en: {
      title: `I'm <span class="highlight-name">Leopoldo Stanula,</span>`,
      subtitle: 'Designer, based in Brazil.',
      portfolioBtn: 'Check portfolio',
      contactBtn: 'Get in touch',
      cardGraphicDesc: 'Branding, Editorial, Motion Graphics and bold visual identity.',
      cardUxDesc: 'User Research, Information Architecture, Wireframes and Interactive Interfaces.',
      contactsTagline: "Click, type, send – let's design something"
    },
    pt: {
      title: `Eu sou <span class="highlight-name">Leopoldo Stanula,</span>`,
      subtitle: 'Designer, no Brasil.',
      portfolioBtn: 'Ver portfólio',
      contactBtn: 'Entrar em contato',
      cardGraphicDesc: 'Branding, Editorial, Motion Graphics e Identidade Visual marcante.',
      cardUxDesc: 'Pesquisa de Usuário, Arquitetura de Informação, Wireframes e Interfaces Interativas.',
      contactsTagline: 'Clique, digite, envie – vamos projetar algo incrível'
    }
  };

  function setLanguage(lang) {
    currentLang = lang;
    if (lang === 'pt') {
      btnPt.classList.add('active');
      btnEn.classList.remove('active');
      langSwitch.classList.add('switched-pt');
    } else {
      btnEn.classList.add('active');
      btnPt.classList.remove('active');
      langSwitch.classList.remove('switched-pt');
    }

    const t = translations[lang];
    introTitle.innerHTML = t.title;
    introSubtitle.textContent = t.subtitle;
    btnPortfolio.textContent = t.portfolioBtn;
    btnContact.textContent = t.contactBtn;
    cardGraphicDesc.textContent = t.cardGraphicDesc;
    cardUxDesc.textContent = t.cardUxDesc;
    if (contactsTagline) contactsTagline.textContent = t.contactsTagline;

    // Dispara efeito de glitch nos textos
    triggerGlitchEffect();
  }

  function triggerGlitchEffect() {
    const glitchElements = [introTitle, introSubtitle, cardGraphicDesc, cardUxDesc];
    glitchElements.forEach(el => {
      if (el) {
        el.setAttribute('data-text', el.textContent || el.innerText);
        el.classList.add('glitch-effect');
        setTimeout(() => {
          el.classList.remove('glitch-effect');
        }, 400);
      }
    });
  }

  langSwitch.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'pt' : 'en';
    setLanguage(newLang);
  });

  /* -------------------------------------------------------------
     Subtle Dot Grid Canvas with Mouse Trail / Cauda Persistence
  ------------------------------------------------------------- */
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const spacing = 16; // Bolinhas bem mais próximas umas das outras
    const rows = Math.ceil(height / spacing);
    const cols = Math.ceil(width / spacing);

    // Armazena a intensidade (vida do rastro) de cada ponto da grade
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

      // Alimenta os pontos ao redor da posição atual do cursor
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
            // Define o brilho máximo no raio do mouse
            if (intensity > grid[index]) {
              grid[index] = intensity;
            }
          }
        }
      }
    });

    function drawDotsTrail() {
      ctx.clearRect(0, 0, width, height);

      // Renderiza cada ponto e reduz lentamente a intensidade (cauda / rastro duradouro)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const index = r * cols + c;
          let intensity = grid[index];

          if (intensity > 0.005) {
            const px = c * spacing;
            const py = r * spacing;
            const radius = 0.5 + intensity * 1.2; // Bolinhas bem delicadas
            const alpha = intensity * 0.7;

            ctx.beginPath();
            ctx.arc(px, py, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(204, 197, 143, ${alpha})`; // Cor #CCC58F
            ctx.fill();

            // Cauda: decaimento gradual (demora para sumir conforme o cursor passa)
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



