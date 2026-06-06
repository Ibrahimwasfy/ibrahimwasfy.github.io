/* ═══════════════════════════════════════════════════════════════
   IBRAHIM REDA WASFY — PORTFOLIO SCRIPT
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── PROJECT DATA ────────────────────────────────────────────────
   Add new projects here. The page automatically generates cards
   and modals from this array.
   ─────────────────────────────────────────────────────────────── */
const projectsData = [
  {
    id: 'fsuk-steering',
    title: 'Formula Student One-Seater — Steering System',
    category: 'Formula Student Race Car',
    filter: 'formula-student',
    year: '2025–2026',
    badge: 'FSUK',
    image: 'assets/projects/formulastudent/Render.png',
    tools: ['SolidWorks', 'MATLAB', 'Optimum Kinematics', 'Excel'],
    overview: 'Complete ownership of the steering system for the HFS Racing Team Formula Student prototype targeting Formula Student UK. From first-principles geometry through to fully validated assembly.',
    objectives: [
      'Define steering geometry meeting FSUK regulations',
      'Optimise Ackermann behaviour for handling performance',
      'Design full rack-and-pinion system with validated ratio and travel',
      'Integrate steering with suspension kinematics and packaging constraints',
      'Produce FSUK-standard design justification documentation',
    ],
    challenges: [
      'Balancing steering effort, responsiveness, and available packaging space',
      'Iterating geometry while constrained by chassis hard points set by the frame team',
      'Validating Ackermann compliance across full lock range',
      'Meeting FSUK scrutineering documentation requirements',
    ],
    results: [
      { value: '100%', label: 'FSUK Regulation Compliance' },
      { value: 'Ackermann', label: 'Geometry Optimised' },
      { value: 'Full', label: 'R&P System Designed' },
      { value: 'FSUK', label: 'Documentation Complete' },
    ],
    process: [
      'Studied FSUK ruleset and derived geometry constraints',
      'First-principles Ackermann calculation in Excel, iterated for slip angle targets',
      'Optimum Kinematics model for suspension-steering integration',
      'SolidWorks full steering box assembly — rack, pinion, tie rods, column',
      'FEA validation of critical steering components under cornering loads',
      'Multiple design iterations to resolve packaging conflicts with monocoque',
      'Design report section authored to FSUK engineering judging standard',
    ],
  },
  {
    id: 'gasoline-urban',
    title: 'Gasoline Urban Car — Shell Eco-Marathon Qatar 2025',
    category: 'Shell Eco-Marathon',
    filter: 'eco-marathon',
    year: '2024–2025',
    badge: '6th Place',
    image: 'assets/projects/shell-eco-marathon/urban.jpg',
    tools: ['SolidWorks', 'Microsoft Excel'],
    overview: 'Full vehicle development from scratch for Shell Eco-Marathon Qatar 2025 in the Urban Gasoline category. Completed in parallel with an electric prototype. Finished 6th internationally after passing technical inspection for two consecutive years.',
    objectives: [
      'Design and build a gasoline urban car meeting Shell Eco-Marathon regulations',
      'Achieve technical inspection clearance at international competition',
      'Optimise vehicle for maximum fuel efficiency in urban track conditions',
      'Complete full development cycle: calculations → design → manufacturing → testing',
    ],
    challenges: [
      'Simultaneous development with the electric prototype car',
      'Meeting strict Shell Eco-Marathon technical inspection requirements',
      'Weight optimisation while meeting structural requirements',
      'Track testing and tuning under competition conditions in Qatar',
    ],
    results: [
      { value: '6th', label: 'Urban Gasoline — Qatar' },
      { value: '✓ Tech', label: 'Inspection Passed' },
      { value: '2 Cars', label: 'Built in Parallel' },
      { value: 'Qatar', label: 'International Competition' },
    ],
    process: [
      'Vehicle concept selection and regulation compliance analysis',
      'Engineering calculations for structural, powertrain, and dynamics requirements',
      'SolidWorks 3D CAD design of full vehicle assembly',
      'BOM compilation and manufacturing documentation',
      'Workshop manufacturing and assembly supervision',
      'Testing and refinement; technical inspection preparation and clearance',
      'Competition participation — Shell Eco-Marathon, Doha, Qatar 2025',
    ],
  },
  {
    id: 'electric-prototype',
    title: 'Electric Prototype Car — Shell Eco-Marathon Qatar 2025',
    category: 'Shell Eco-Marathon',
    filter: 'eco-marathon',
    year: '2024–2025',
    badge: 'Electric',
    image: 'assets/projects/shellecomarathon/IMG_7080.heic',
    tools: ['SolidWorks', 'Microsoft Excel'],
    overview: 'Electric prototype vehicle developed in parallel with the gasoline urban car for Shell Eco-Marathon Qatar 2025. Full development cycle from concept through competition.',
    objectives: [
      'Build an electric prototype to Shell Eco-Marathon prototype class regulations',
      'Pass technical inspection at international competition',
      'Optimise efficiency and energy management for prototype class track',
    ],
    challenges: [
      'Parallel development constraint with the urban vehicle',
      'Electric powertrain integration and efficiency optimisation',
      'Prototype class aerodynamics and structural requirements',
    ],
    results: [
      { value: '32nd', label: 'Electric Prototype Class' },
      { value: '✓ Tech', label: 'Inspection Passed' },
      { value: 'Qatar', label: 'International Competition' },
    ],
    process: [
      'Prototype class regulation study and concept selection',
      'Engineering calculations for electric powertrain and structural requirements',
      'SolidWorks 3D CAD design and assembly',
      'Manufacturing, assembly, and testing',
      'Technical inspection and competition participation',
    ],
  },
  {
    id: 'electric-urban-2024',
    title: 'Electric Urban Car — EVER Egypt 2024',
    category: 'EV Competition',
    filter: 'ev',
    year: '2023–2024',
    badge: '🥇 1st Place',
    image: 'assets/projects/ever-egypt/urban-2024.jpg',
    tools: ['SolidWorks', 'Microsoft Excel'],
    overview: 'Full electric urban vehicle built from scratch to compete at EVER Egypt 2024. Won 1st Place in the Overall Dynamic Track, Design, and Cost categories — a triple podium at Egypt\'s premier electric vehicle competition.',
    objectives: [
      'Build a regulation-compliant electric urban car for EVER Egypt',
      'Achieve competitive performance on the dynamic track',
      'Meet technical requirements for EVER technical inspection',
      'Deliver full vehicle: calculations → design → manufacturing → assembly → testing',
    ],
    challenges: [
      'Steering and brake system design for a 256 kg urban EV',
      'Meeting EVER competition technical regulations',
      'FEA validation of steering components under operational loads',
      'Track testing optimisation for dynamic event scoring',
    ],
    results: [
      { value: '🥇 1st', label: 'Overall Dynamic Track' },
      { value: '🥇 1st', label: 'Design Category' },
      { value: '🥇 1st', label: 'Cost Category' },
      { value: 'Triple', label: 'Podium Finish' },
    ],
    process: [
      'EVER regulation analysis and vehicle concept definition',
      'Full steering system calculations: geometry and pedal ratios for 256 kg EV',
      'Brake system calculations to meet EVER technical requirements',
      'SolidWorks design of steering and brake components with FEA validation',
      'Design Report compilation covering dynamics section',
      'Manufacturing oversight and assembly',
      'Track testing and dynamic event preparation',
      'Competition — EVER Egypt 2024, North Coast, Egypt',
    ],
  },
];

/* ── GALLERY DATA ────────────────────────────────────────────────
   Add your images here. Replace placeholder paths with actual
   image files placed in assets/gallery/
   ─────────────────────────────────────────────────────────────── */
const galleryData = [
  // Replace src with your actual image paths:
  // { src: 'assets/gallery/cad/steering-assembly.jpg', caption: 'Steering Box Assembly — SolidWorks', category: 'cad' },
  // { src: 'assets/gallery/simulation/fea-steering.jpg', caption: 'FEA Stress Analysis — Steering Column', category: 'simulation' },
  // { src: 'assets/gallery/competition/ever-2024-podium.jpg', caption: 'EVER Egypt 2024 — 1st Place Podium', category: 'competition' },
  // { src: 'assets/gallery/manufacturing/workshop.jpg', caption: 'Manufacturing Phase — Urban EV', category: 'manufacturing' },
  // { src: 'assets/gallery/testing/track-test.jpg', caption: 'Track Testing — Pre-competition', category: 'testing' },

  // PLACEHOLDER entries (shown until you replace with real images):
  { src: '', caption: 'Steering Box Assembly — SolidWorks CAD', category: 'cad', placeholder: true },
  { src: '', caption: 'Ackermann Geometry Analysis', category: 'cad', placeholder: true },
  { src: '', caption: 'FEA Stress Analysis — Steering Components', category: 'simulation', placeholder: true },
  { src: '', caption: 'IPG CarMaker Simulation', category: 'simulation', placeholder: true },
  { src: '', caption: 'EVER Egypt 2024 — Triple Podium', category: 'competition', placeholder: true },
  { src: '', caption: 'Shell Eco-Marathon Qatar 2025', category: 'competition', placeholder: true },
  { src: '', caption: 'Manufacturing Phase', category: 'manufacturing', placeholder: true },
  { src: '', caption: 'Track Testing Session', category: 'testing', placeholder: true },
];

/* ═══════════════════════════════════ INIT ═══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNav();
  initHeroCanvas();
  renderProjects();
  renderGallery();
  initFilters();
  initGalleryFilters();
  initScrollAnimations();
  initCounters();
  initSkillBars();
  initModal();
  initLightbox();
  initContactForm();
});

/* ── LOADER ────────────────────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1800);
  });
  document.body.style.overflow = 'hidden';
}

/* ── NAVBAR ────────────────────────────────────────────────────── */
function initNav() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = navbar.querySelector('.nav-links');

  // Scroll behaviour
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);
    lastScroll = y;
  }, { passive: true });

  // Hamburger
  toggle?.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  links?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Active section highlight
  const sections = document.querySelectorAll('section[id]');
  const navItems = navbar.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navItems.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${e.target.id}` ? 'var(--accent)' : '';
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
}

/* ── HERO CANVAS (Animated circuit lines) ─────────────────────── */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, nodes, frame;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    initNodes();
  }

  function initNodes() {
    nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    });

    // Connect nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          const alpha = (1 - dist / 160) * 0.3;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(200,168,75,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(200,168,75,0.5)';
      ctx.fill();
    });

    frame = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();
  draw();

  // Reduce animation when not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else draw();
  });
}

/* ── RENDER PROJECTS ─────────────────────────────────────────── */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = projectsData.map(p => createProjectCard(p)).join('');
}

function createProjectCard(p) {
  const tools = p.tools.map(t => `<span class="pc-tool">${t}</span>`).join('');
  const hasImage = p.image && p.image !== '';
  const imgHtml = hasImage
    ? `<img src="${p.image}" alt="${p.title}" onerror="this.parentElement.classList.add('no-img')" loading="lazy" />`
    : '';
  const placeholderHtml = `
    <div class="pc-image-placeholder">
      <span>🏎️</span>
      <small>Add image to: ${p.image || 'assets/projects/'}</small>
    </div>`;

  return `
    <article class="project-card" data-filter="${p.filter}" data-id="${p.id}" role="button" tabindex="0" aria-label="View ${p.title} project details">
      <div class="pc-image">
        ${imgHtml}${placeholderHtml}
        <div class="pc-badge">${p.badge}</div>
      </div>
      <div class="pc-body">
        <div class="pc-category">${p.category} · ${p.year}</div>
        <h3 class="pc-title">${p.title}</h3>
        <p class="pc-desc">${p.overview.substring(0, 120)}...</p>
        <div class="pc-tools">${tools}</div>
        <span class="pc-cta">View Case Study</span>
      </div>
    </article>`;
}

/* ── PROJECT FILTERS ─────────────────────────────────────────── */
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;
      grid.querySelectorAll('.project-card').forEach(card => {
        const match = filter === 'all' || card.dataset.filter === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

/* ── PROJECT MODAL ───────────────────────────────────────────── */
function initModal() {
  const modal = document.getElementById('projectModal');
  const backdrop = modal?.querySelector('.modal-backdrop');
  const closeBtn = modal?.querySelector('.modal-close');

  function openModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project || !modal) return;

    const body = document.getElementById('modalBody');
    body.innerHTML = buildModalContent(project);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  document.getElementById('projectsGrid')?.addEventListener('click', e => {
    const card = e.target.closest('.project-card');
    if (card) openModal(card.dataset.id);
  });
  document.getElementById('projectsGrid')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.project-card');
      if (card) { e.preventDefault(); openModal(card.dataset.id); }
    }
  });

  backdrop?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function buildModalContent(p) {
  const objectives = p.objectives.map(o => `<li>${o}</li>`).join('');
  const challenges = p.challenges.map(c => `<li>${c}</li>`).join('');
  const process = p.process.map((s, i) => `<li><strong>${i + 1}.</strong> ${s}</li>`).join('');
  const tools = p.tools.map(t => `<span class="modal-tool">${t}</span>`).join('');
  const results = p.results.map(r => `
    <div class="modal-result-card">
      <strong>${r.value}</strong>
      <span>${r.label}</span>
    </div>`).join('');

  return `
    <div class="modal-tag">${p.category} · ${p.year}</div>
    <h2 class="modal-title">${p.title}</h2>

    <div class="modal-section">
      <h4>Overview</h4>
      <p>${p.overview}</p>
    </div>

    <div class="modal-section">
      <h4>Objectives</h4>
      <ul>${objectives}</ul>
    </div>

    <div class="modal-section">
      <h4>Engineering Challenges</h4>
      <ul>${challenges}</ul>
    </div>

    <div class="modal-section">
      <h4>Design Process</h4>
      <ul>${process}</ul>
    </div>

    <div class="modal-section">
      <h4>Tools Used</h4>
      <div class="modal-tools">${tools}</div>
    </div>

    <div class="modal-section">
      <h4>Results</h4>
      <div class="modal-results">${results}</div>
    </div>`;
}

/* ── GALLERY ─────────────────────────────────────────────────── */
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = galleryData.map((item, i) => createGalleryItem(item, i)).join('');
}

function createGalleryItem(item, i) {
  if (item.placeholder || !item.src) {
    return `
      <div class="gallery-item" data-category="${item.category}">
        <div class="gallery-placeholder-item">
          <span>📷</span>
          ${item.caption}
        </div>
      </div>`;
  }
  return `
    <div class="gallery-item" data-category="${item.category}" data-index="${i}" role="button" tabindex="0" aria-label="View ${item.caption}">
      <img src="${item.src}" alt="${item.caption}" loading="lazy" />
      <div class="gallery-item-overlay">
        <span style="font-family:var(--ff-mono);font-size:12px;color:var(--text)">${item.caption}</span>
      </div>
    </div>`;
}

function initGalleryFilters() {
  const btns = document.querySelectorAll('.gallery-filter');
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.gfilter;
      grid.querySelectorAll('.gallery-item').forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
      });
    });
  });
}

/* ── LIGHTBOX ────────────────────────────────────────────────── */
function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');

  let currentIndex = 0;
  const realGallery = galleryData.filter(g => g.src && !g.placeholder);

  function open(index) {
    currentIndex = index;
    const item = realGallery[index];
    if (!item) return;
    lbImg.src = item.src;
    lbImg.alt = item.caption;
    lbCaption.textContent = item.caption;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.hidden = true;
    document.body.style.overflow = '';
  }

  document.getElementById('galleryGrid')?.addEventListener('click', e => {
    const item = e.target.closest('[data-index]');
    if (item) open(parseInt(item.dataset.index));
  });

  lb.querySelector('.lb-close')?.addEventListener('click', close);
  lb.querySelector('.lb-prev')?.addEventListener('click', () => open((currentIndex - 1 + realGallery.length) % realGallery.length));
  lb.querySelector('.lb-next')?.addEventListener('click', () => open((currentIndex + 1) % realGallery.length));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') open((currentIndex - 1 + realGallery.length) % realGallery.length);
    if (e.key === 'ArrowRight') open((currentIndex + 1) % realGallery.length);
  });
}

/* ── SCROLL ANIMATIONS ───────────────────────────────────────── */
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.highlight-card, .skill-category, .timeline-item, .fs-card, .project-card, .about-card, .pillar, .workflow-step, .gallery-item, .cert-item, .contact-item'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }, i * 50);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s var(--ease-out, cubic-bezier(0.16,1,0.3,1)), transform 0.6s var(--ease-out, cubic-bezier(0.16,1,0.3,1))';
    observer.observe(el);
  });
}

/* ── ANIMATED COUNTERS ───────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ── SKILL BARS ──────────────────────────────────────────────── */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill[data-pct]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.pct + '%';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(b => observer.observe(b));
}

/* ── CONTACT FORM ────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('#cf-name').value;
    const email = form.querySelector('#cf-email').value;
    const org = form.querySelector('#cf-org').value;
    const msg = form.querySelector('#cf-msg').value;

    const subject = encodeURIComponent(`Portfolio Enquiry${org ? ' — ' + org : ''}`);
    const body = encodeURIComponent(
      `Hi Ibrahim,\n\n${msg}\n\n---\nFrom: ${name}\nEmail: ${email}${org ? '\nOrganisation: ' + org : ''}`
    );

    window.location.href = `mailto:ibrahimreda527@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ── SMOOTH REVEAL ───────────────────────────────────────────── */
(function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => obs.observe(el));
})();

/* ══════════════════════════════════════════════════════════════
   HOW TO ADD A NEW PROJECT:
   ────────────────────────────────────────────────────────────
   1. Add a new object to the projectsData array above, following
      the existing structure.
   2. Add your project images to assets/projects/<your-project-name>/
   3. Update the 'image' field in your new object.
   4. The project card and modal are generated automatically.

   Example:
   {
     id: 'suspension-redesign',
     title: 'Suspension Geometry Redesign',
     category: 'Vehicle Dynamics',
     filter: 'formula-student',          // must match a filter-btn data-filter
     year: '2026',
     badge: 'New',
     image: 'assets/projects/suspension/hero.jpg',
     tools: ['SolidWorks', 'Optimum Kinematics', 'MATLAB'],
     overview: 'Full suspension redesign for...',
     objectives: ['...', '...'],
     challenges: ['...'],
     results: [{ value: '12%', label: 'Roll Stiffness Improvement' }],
     process: ['Step 1...', 'Step 2...'],
   }

   HOW TO REPLACE IMAGES:
   ────────────────────────────────────────────────────────────
   - Profile photo: assets/profile/profile.jpg (recommended: 600×800px)
   - Project images: assets/projects/<project-id>/<name>.jpg (recommended: 800×500px)
   - Gallery images: assets/gallery/<category>/<name>.jpg
   - CV: assets/Ibrahim_Reda_Wasfy_CV.pdf

   HOW TO ADD GALLERY IMAGES:
   ────────────────────────────────────────────────────────────
   1. Place your image in assets/gallery/
   2. Add to galleryData array:
      { src: 'assets/gallery/cad/model.jpg', caption: 'My Caption', category: 'cad' }
   3. Categories: cad, simulation, manufacturing, testing, competition

   DEPLOYMENT:
   ────────────────────────────────────────────────────────────
   Option 1 — GitHub Pages (recommended, free):
     1. Push this folder to a GitHub repo named yourusername.github.io
     2. Go to Settings → Pages → Deploy from main branch
     3. Your site is live at https://yourusername.github.io

   Option 2 — Netlify (drag & drop):
     1. Go to netlify.com → New site → Drag this folder
     2. Site is live instantly with a free domain

   Option 3 — Vercel:
     1. Connect GitHub repo at vercel.com
     2. Deploys automatically on every push
══════════════════════════════════════════════════════════════ */
