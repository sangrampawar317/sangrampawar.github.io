/* ==========================================================================
   SANGRAM PAWAR — PORTFOLIO CORE SCRIPTS
   Author: Sangram Pawar
   The Curious Generalist • Satara, Maharashtra
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Reading Progress Bar
  const progressBar = document.getElementById('reading-progress');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  });

  // Theme Toggle (Light / Dark)
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('sangram_theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('sangram_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === 'dark' 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  /* ==========================================================================
     MY WRITINGS ARCHIVE (POETRY & ARTICLES)
     Author: Sangram Pawar
     ========================================================================== */
  const myWritings = [
    {
      id: 1,
      title: "तहसीलदार ऑफिसमधील एक किस्सा (#AI)",
      category: "article",
      categoryLabel: "Article (लेख / किस्सा)",
      date: "मूळ नोंद",
      readTime: "१ मिनिट",
      excerpt: "काही दिवसापूर्वी मी तहसीलदार ऑफिसमध्ये गेलो होतो तिथे दिवसभर काम असल्याने तहसीलदार ऑफिसच्या कॅन्टीनमध्ये जाऊन थोडा नाष्टा केला...",
      content: `
        <div style="font-size: 1.15rem; line-height: 1.9; color: var(--text-main);">
          <p style="white-space: pre-line; margin-bottom: 1.5rem;">
काही दिवसापूर्वी मी तहसीलदार ऑफिसमध्ये गेलो होतो तिथे दिवसभर काम असल्याने तहसीलदार ऑफिसच्या कॅन्टीनमध्ये जाऊन थोडा नाष्टा केला त्यावेळेस तेथे जे कर्मचारी होते दोन-तीन कर्मचारी होते वयस्कर होते. आणि जोराचा पाऊस पडत होता हवा सुटली होती आणि दोन वयस्कर , वयस्कर म्हणजे साठीच्या जवळचे दोन व्यक्ती एकमेकांशी बोलत होते माझं लक्ष गेलं मी ऐकत होतो त्यापैकी एक म्हणाला कसला जोराचा वारा सुटलाय पाहतोयस ना, पत्रे उडून जातील. त्यावर दुसरा म्हणाला पत्र्यावरून मला आठवलं की काल मी मोबाईल मध्ये बघितलं की पत्रा खाली पडून रस्त्यावर आला सगळी माणसं बाजूने गेली मात्र कोणी उचलला नाही पण दोन मांजरी आली आणि त्यांनी पत्रा उचलून बाजूला केला म्हणजे बघतोस ना आज कालच्या मांजरांना अक्कल आहे पण माणसाला नाही! हे ऐकून मी हसलो कारण की मला कळालं होतं की काय घडलं नेमकं 😄
          </p>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; border-top: 1px solid var(--card-border); padding-top: 1rem;">
          <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-ochre);">#AI</span>
          <span style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--accent-ochre);">- संग्राम पवार</span>
        </div>
      `
    },
    {
      id: 2,
      title: "सुरक्षित आहे कोण?",
      category: "article",
      categoryLabel: "Article (लेख)",
      date: "मूळ लेख",
      readTime: "२ मिनिटे",
      excerpt: "एका सनातनवादी वकिलाने देशाच्या सुप्रीम कोर्टाच्या सरन्यायाधीशाला बूट फेकून मारला.. कारण काय तर ते दलित होते...",
      content: `
        <div style="font-size: 1.15rem; line-height: 1.9; color: var(--text-main);">
          <p style="margin-bottom: 1.5rem;">
सुरक्षित आहे कोण?
एका सनातनवादी वकिलाने देशाच्या सुप्रीम कोर्टाच्या सरन्यायाधीशाला बूट फेकून मारला.. कारण काय तर ते दलित होते. देशातल्या सर्वोच्च पदांपैकी एक असलेल्या घटनात्मक पदावर बसलेल्या व्यक्ती सोबत सुद्धा असं काही घडू शकतं याची कल्पना च ..कोणी केली नसावी. जर देशातले सरन्यायाधीश या जातीद्वेषापासून सुरक्षित नाही तर सामान्य लोकांचं तर सोडून च दया . इथे हा बूट केवळ सरन्यायाधीशावर नाही मारला तर.. त्या असंख्य लोकांच्या आशेवरती आणि त्यांच्या स्वप्नावरती मारलेला आहे  जे आज ही या समाजव्यवस्थेमध्ये स्वतःच अस्तित्व शोधत आहे, कोठेतरी सन्मानाच जीवन जगण्याची  आशा करत आहेत. पण या घटनेमुळं त्या विश्वासाला कुठे तरी तडा गेला आहे.
          </p>
        </div>
        <div style="text-align: right; margin-top: 2rem; font-family: var(--font-serif); font-size: 1.1rem; color: var(--accent-ochre);">
          ~ संग्राम पवार
        </div>
      `
    },
    {
      id: 3,
      title: "एक दगड",
      category: "poetry",
      categoryLabel: "Poetry (कविता)",
      date: "मूळ कविता",
      readTime: "१ मिनिट",
      excerpt: "दगड मारता आला पाहिजे, फक्त काचेवर नाही, तर मनातल्या भीतीवर...",
      content: `
        <div class="poetry-box">
दगड मारता आला पाहिजे
फक्त काचेवर नाही,
तर मनातल्या भीतीवर.

जसा तायप्पा आणि सुलीने
अंधश्रद्धेच्या कपाळावर मारला,
जसा जब्याने
जातिव्यवस्थेच्या भिंतीवर मारला

तसा दगड
हातात नाही,
विचारांत असला पाहिजे.

अन्याय दिसला की
मुठ आवळता आली पाहिजे,
आणि गप्प बसलेल्या जगाला
एक दगड,
प्रश्नांचा..
मारता आला पाहिजे.
        </div>
        <div style="text-align: right; margin-top: 1.25rem; font-family: var(--font-serif); font-size: 1.1rem; color: var(--accent-ochre);">
          ~ संग्राम पवार
        </div>
      `
    },
    {
      id: 4,
      title: "रंगदार सभा",
      category: "poetry",
      categoryLabel: "Poetry (कविता)",
      date: "मूळ कविता",
      readTime: "२ मिनिटे",
      excerpt: "एकदा रंगाची सभा भरली... मुद्दा होता अस्तित्वाचा, भेदाभेदीच्या विरोधाचा...",
      content: `
        <div class="poetry-box">
एकदा रंगाची सभा भरली, 
तांबडा, नारंगी, हिरवा, पांढरा 
निळा, पिवळा 
सर्व हजर!

मुद्दा होता अस्तित्वाचा, भेदाभेदीच्या विरोधाचा 

हिरवा म्हणतो,
मी कृषी ची ओळख, मी देशाची शान 
पण मला बघताच सगळे म्हणतात हा बघा मुसलमान!

निळा म्हणे,
अथांग समुद्राचा रंग मी, 
टाकले व्यापून मी आकाश.
पण जय भीम म्हणून माझी उपेक्षा करता, म्हणून मी थोडा निराश

तेवढ्यात नारंगी म्हणतो,
मी तर शौर्याच प्रतीक,
मी तर धगधगती आग,
पण जो तो माझा वापर करतोय, झेंडे रोवतोय जागोजाग!

तेवढ्यात पिवळा उतरला,
मी तर सूर्याची चकाकी,
एवढ्या दिवस होतो दुर्लक्षित, पाडलं मला तुम्ही एकाकी,
पण, ओबीसी मराठा राजकारणात तुम्ही मला खेचलं, तेवढंच राहील होत बाकी!

यात सगळ्यांच लक्ष कोपऱ्यात बसलेल्या पांढऱ्या कडे गेली 
आणि त्याला म्हणाले 
             "अरे तू तर शांतीचा दूत,
      का बसला आहेस असा घेऊन उदासीनतेच खुळ"?
    
       - "काय सांगू तुम्हाला... रशिया - यूक्रेन, इस्राएल - गाझा
        बघून जीव होतोय व्याकुळ"!

सगळेच रंग एकमेकांच सांत्वन करीत होते, तेवढ्यात कोणी म्हणलं -  "काळ्याच तेवढं मात्र बरं आहे"

त्यावर, निवांत पहुडलेला काळा खडकन म्हणतो 
माझं कसलं आलंय बरं 
             जन्मोजन्मीचा अभागी मी,
          प्रत्येक निषेधात सहभागी मी.
    काय पाप केलं, जे मला मंदिरात पण नाकारलं 
हे काय कमी होतं की मला संमेलनातून सुद्धा हाकलं!
        </div>
        <div style="text-align: right; margin-top: 1.25rem; font-family: var(--font-serif); font-size: 1.1rem; color: var(--accent-ochre);">
          ~ संग्राम पवार
        </div>
      `
    },
    {
      id: 5,
      title: "टॉस",
      category: "poetry",
      categoryLabel: "Poetry (कविता)",
      date: "मूळ कविता",
      readTime: "१ मिनिट",
      excerpt: "दोन्ही टीमा एकमेकांसमोर उभ्या ठाकल्या... पाकीट हवेत फेकलं, जिंकले ते आणि त्याचं राजकारण, हारली ती माणुसकी आणि आपण!",
      content: `
        <div class="poetry-box">
दोन्ही टीमा एकमेकांसमोर उभ्या ठाकल्या 
खेळ खेळणारे आले, पंच आले, आले दर्शक ही.
वेळ होती टॉस ची, खूप शोधलं काही सापडेना, 
ओबीसी की मराठा याचा कंटाळा आला होता.
      तेवढ्यात एक पाकीट सापडलं. ठरलं!
त्यानेच टॉस करायचा.

पाकिटाच्या एका बाजूला हिंदी आणि एका बाजूला मराठी लिहिलं होतं.
ज्याचं मागितलेलं येईल त्याचाच डाव, त्याचाच राज्य!

पाकीट हवेत फेकलं.....................

आता तुम्हाला प्रश्न पडला असेल की जिंकल कोण?
तर जिंकले ते आणि त्याचं राजकारण 
हारली ती माणुसकी आणि आपण !
        </div>
        <div style="text-align: right; margin-top: 1.25rem; font-family: var(--font-serif); font-size: 1.1rem; color: var(--accent-ochre);">
          ~ संग्राम पवार
        </div>
      `
    }
  ];

  const articlesContainer = document.getElementById('articles-grid');
  const searchInput = document.getElementById('article-search');
  const catPills = document.querySelectorAll('.cat-pill');

  let activeCategory = 'all';
  let searchQuery = '';

  function renderArticles() {
    if (!articlesContainer) return;
    
    const filtered = myWritings.filter(item => {
      const matchesCat = (activeCategory === 'all' || item.category === activeCategory);
      const matchesSearch = item.title.toLowerCase().includes(searchQuery) ||
                            item.excerpt.toLowerCase().includes(searchQuery);
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      articlesContainer.innerHTML = `
        <div class="empty-archive-box">
          <div class="empty-icon">✍️</div>
          <h3>कोणतीही रचना सापडली नाही</h3>
          <p>कृपया वेगळा शोध शब्द किंवा वर्गवारी निवडा.</p>
        </div>
      `;
      return;
    }

    articlesContainer.innerHTML = filtered.map(item => `
      <article class="article-card" onclick="openArticleModal(${item.id})">
        <div>
          <div class="article-meta">
            <span class="cat-label">${item.categoryLabel || item.category}</span>
            <span>•</span>
            <span>${item.date}</span>
            <span>•</span>
            <span>${item.readTime}</span>
          </div>
          <h3 style="font-family: var(--font-serif); font-size: 1.55rem; margin-bottom: 0.8rem;">${item.title}</h3>
          <p class="article-excerpt" style="font-size: 0.98rem; line-height: 1.6;">${item.excerpt}</p>
        </div>
        <div class="article-footer">
          <span class="read-link">${item.category === 'article' ? 'संपूर्ण लेख वाचा' : 'संपूर्ण कविता वाचा'} →</span>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-faint);">रचना #${item.id.toString().padStart(2, '0')}</span>
        </div>
      </article>
    `).join('');
  }

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-cat');
      renderArticles();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderArticles();
    });
  }

  renderArticles();

  // Modal Reader View
  const articleModal = document.getElementById('article-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  const closeModalBtn = document.getElementById('close-modal');

  window.openArticleModal = function(id) {
    const item = myWritings.find(a => a.id === id);
    if (!item || !modalContent || !articleModal) return;

    modalContent.innerHTML = `
      <div class="article-meta" style="margin-bottom: 0.5rem;">
        <span class="cat-label">${item.categoryLabel || item.category}</span>
        <span>•</span>
        <span>${item.date}</span>
      </div>
      <h2 style="font-size: clamp(2rem, 3.5vw, 2.6rem); line-height: 1.25; margin-bottom: 1.2rem; font-family: var(--font-serif);">${item.title}</h2>
      <div style="width: 50px; height: 2px; background: var(--accent-ochre); margin-bottom: 2rem;"></div>
      <div class="modal-article-body">
        ${item.content}
      </div>
      <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--card-border); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">लेखक: संग्राम पवार • सातारा, महाराष्ट्र</span>
        <button class="btn btn-secondary btn-sm" onclick="closeModal()">बंद करा (Close)</button>
      </div>
    `;
    articleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function() {
    if (articleModal) {
      articleModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (articleModal) {
    articleModal.addEventListener('click', (e) => {
      if (e.target === articleModal) closeModal();
    });
  }

  // Toast Functionality
  const toast = document.getElementById('toast-notice');
  function showToast(message) {
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;

      const mailtoUrl = `mailto:sangrampwar317@gmail.com?subject=${encodeURIComponent(subject + " - from " + name)}&body=${encodeURIComponent("Sender Email: " + email + "\n\nMessage:\n" + message)}`;
      
      window.location.href = mailtoUrl;
      showToast("Opening email draft to send to sangrampwar317@gmail.com!");
    });
  }

  // Nav Highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});