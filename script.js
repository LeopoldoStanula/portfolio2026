document.addEventListener('DOMContentLoaded', () => {
  const langSwitch = document.getElementById('lang-switch-toggle');
  const btnEn = document.getElementById('btn-en');
  const btnPt = document.getElementById('btn-pt');

  const introTitle = document.getElementById('intro-title');
  const introSubtitle = document.getElementById('intro-subtitle');
  const btnPortfolio = document.getElementById('btn-portfolio');
  const btnContact = document.getElementById('btn-contact');
  const pdfLink = document.getElementById('pdf-link');
  const cardsTitle = document.getElementById('cards-title');
  const cardGraphicDesc = document.getElementById('card-graphic-desc');
  const cardUxDesc = document.getElementById('card-ux-desc');

  let currentLang = 'en';

  const translations = {
    en: {
      title: `I'm <span class="highlight-name">Leopoldo Stanula,</span>`,
      subtitle: 'Designer, based in Brazil.',
      portfolioBtn: 'Check portfolio',
      contactBtn: 'Get in touch',
      pdfLink: 'Or, check the pdf version',
      cardsTitle: 'Explore My Work',
      cardGraphicDesc: 'Branding, Editorial, Motion Graphics and bold visual identity.',
      cardUxDesc: 'User Research, Information Architecture, Wireframes and Interactive Interfaces.'
    },
    pt: {
      title: `Eu sou <span class="highlight-name">Leopoldo Stanula,</span>`,
      subtitle: 'Designer, no Brasil.',
      portfolioBtn: 'Ver portfólio',
      contactBtn: 'Entrar em contato',
      pdfLink: 'Ou veja a versão em PDF',
      cardsTitle: 'Explore meu Trabalho',
      cardGraphicDesc: 'Branding, Editorial, Motion Graphics e Identidade Visual marcante.',
      cardUxDesc: 'Pesquisa de Usuário, Arquitetura de Informação, Wireframes e Interfaces Interativas.'
    }
  };

  function setLanguage(lang) {
    currentLang = lang;
    if (lang === 'pt') {
      btnPt.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnPt.classList.remove('active');
    }

    const t = translations[lang];
    introTitle.innerHTML = t.title;
    introSubtitle.textContent = t.subtitle;
    btnPortfolio.textContent = t.portfolioBtn;
    btnContact.textContent = t.contactBtn;
    pdfLink.querySelector('span').textContent = t.pdfLink;
    cardsTitle.textContent = t.cardsTitle;
    cardGraphicDesc.textContent = t.cardGraphicDesc;
    cardUxDesc.textContent = t.cardUxDesc;
  }

  langSwitch.addEventListener('click', (e) => {
    const newLang = currentLang === 'en' ? 'pt' : 'en';
    setLanguage(newLang);
  });
});
