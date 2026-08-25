const CONTACT = {
  phone: "0161 566 1050",
  phoneHref: "tel:+441615661050",
  email: "info@ignitetalentgroup.co.uk",
  address: "Cardinal House, 20 St Mary’s Parsonage, Manchester M3 2LY"
};

const DRIVE_POLICIES = "https://drive.google.com/drive/folders/1_ZLBzHEPtI0WPOxJM_Rt-7rITJ9roTm7?usp=drive_link";

const policyLinks = [
  ["Privacy Notice", "1iTQAHimMk7ECBIKlEp12nHKWas-GayIt"],
  ["Data Protection", "1si-sRk3WyHyOiW349Iv-noWmoPSVK6LO"],
  ["Ethical Recruitment", "1n8bitwa5vRPQbvS8D_dwsKmKBg-II7Zx"],
  ["Right to Work & Vetting", "1830Pb2qD5VDBOlXQ71nNaPIxuQLmiRjU"],
  ["Equality, Diversity & Inclusion", "1tq4gjYDVBQasqtG0mPSEIcSl_Nv8XLCb"],
  ["Modern Slavery", "18pmAVi9fRVhkjGSFkd6pv6YuCPBaI9bV"],
  ["Information Security", "1K6obmmiZOagHCaCtBFhQ-arPMjZ1jJ7K"],
  ["Complaints", "1NK1Gh7msJsRAMXCzSCWwMwaOh8ntwa6w"]
];

const sites = {
  group: {
    name: "Ignite Talent Group",
    short: "Talent Group",
    entity: "Ignite Talent Group Ltd",
    ico: "ZC135847",
    file: "index.html",
    logo: "assets/ignite-talent-group.svg",
    accent: "#4552ff",
    accentRgb: "69,82,255",
    accentText: "#ffffff",
    eyebrow: "Specialist recruitment group",
    title: "Hire smarter. Grow stronger.",
    lead: "We connect ambitious businesses and talented professionals through five specialist recruitment companies — each with sector focus, all backed by shared group standards.",
    imageLabel: "Manchester insight. UK-wide reach.",
    introTitle: "Specialist knowledge, connected by one clear standard.",
    intro: "Ignite brings Construction, Engineering, Tech, Legal and Sales recruitment together under one accountable group. Clients get focused market knowledge; candidates get a straightforward, respectful experience.",
    highlight: "Five specialist markets. One joined-up recruitment partner.",
    services: [
      ["Specialist search", "Focused recruitment led by teams who understand the language, pace and priorities of their market."],
      ["Flexible hiring support", "Permanent, interim and contract recruitment shaped around the brief and the organisation."],
      ["Safer hiring decisions", "A clear compliance framework, with background-check services available through Personnel Checks."]
    ],
    markets: ["Construction", "Engineering", "Technology", "Legal", "Sales"],
    marketIntro: "Choose the specialist team that speaks your market.",
    clientCopy: "Brief one specialist team or start at group level. We focus the search, communicate clearly and help you move from role definition to appointment with confidence.",
    candidateCopy: "Talk to a recruiter who understands your field, what a good move looks like and why clarity matters throughout the process.",
    complianceTitle: "Confidence should be visible.",
    complianceCopy: "Our public policy hub brings the core standards behind our recruitment work into one easy-to-review place — useful for clients, candidates, procurement teams and supplier onboarding."
  },
  construction: {
    name: "Ignite Construction",
    short: "Construction",
    entity: "Ignite Construction Talent Ltd",
    ico: "ZC135852",
    file: "construction.html",
    logo: "assets/ignite-construction.svg",
    accent: "#f15a2b",
    accentRgb: "241,90,43",
    accentText: "#ffffff",
    eyebrow: "Specialist construction recruitment",
    title: "People who keep projects moving.",
    lead: "We connect construction businesses with talent across the UK built environment — from professional appointments to site-based delivery and project workforce needs.",
    imageLabel: "Built environment. Residential. Project delivery.",
    introTitle: "Construction knowledge, practical delivery.",
    intro: "Successful projects depend on the right people, at the right time, with the right experience. Our approach combines responsive search with clear checks, role information and site-readiness expectations.",
    highlight: "From pre-construction planning to final handover.",
    services: [
      ["Built environment", "Recruitment support for commercial developments, infrastructure, refurbishment, fit-out and mixed-use projects."],
      ["Residential construction", "Professional and site-based talent for high-rise, housebuilding and residential project delivery."],
      ["Permanent & project hiring", "Support for permanent appointments, temporary requirements and contract staffing around project demand."]
    ],
    markets: ["Pre-construction & design", "Commercial", "Project & site management", "Technical & operational", "Skilled trades", "Fit-out & refurbishment"],
    marketIntro: "Professional appointments and skilled project teams across the built environment.",
    clientCopy: "Whether you need one senior appointment or wider project support, we start with the programme, environment and non-negotiables — then build the search around delivery.",
    candidateCopy: "We give candidates clear information about the role, site or project, expected experience and relevant checks before representation.",
    complianceTitle: "Site readiness starts before placement.",
    complianceCopy: "Our construction compliance route makes right-to-work, vetting, competence and labour-supply information easy for clients and procurement teams to review.",
    extraPolicy: ["Construction Labour Supply Compliance", "1d05ffS5Wn3iD3a86eohwwmqNosg6L3cf"]
  },
  engineering: {
    name: "Ignite Engineering",
    short: "Engineering",
    entity: "Ignite Engineering Talent Ltd",
    ico: "ZC135854",
    file: "engineering.html",
    logo: "assets/ignite-engineering.svg",
    accent: "#f6ad34",
    accentRgb: "246,173,52",
    accentText: "#171108",
    eyebrow: "Specialist engineering recruitment",
    title: "Technical talent, matched with rigour.",
    lead: "We support engineering organisations with focused recruitment for technical, project and delivery-critical appointments.",
    imageLabel: "Technical depth. Project focus. Clear assurance.",
    introTitle: "The detail matters in engineering recruitment.",
    intro: "A job title rarely tells the whole story. We look at discipline, environment, project phase, technical requirements and team fit so the search starts from a clearer brief.",
    highlight: "Recruitment shaped around the technical brief — not just the title.",
    services: [
      ["Technical appointments", "Focused search for engineering professionals where discipline knowledge and relevant experience matter."],
      ["Project & contract support", "Responsive recruitment around programme demand, project delivery and specialist requirements."],
      ["Competence-led assurance", "Proportionate attention to qualifications, role evidence and requirements for safety-sensitive environments."]
    ],
    markets: ["Technical & design", "Mechanical", "Electrical & controls", "Civil & structural", "Project delivery", "Quality & assurance"],
    marketIntro: "Focused searches across engineering disciplines and project environments.",
    clientCopy: "We translate the brief into a targeted search: technical scope, project context, must-have experience, working pattern and timescale all matter.",
    candidateCopy: "Candidates receive clear role context and an honest conversation about technical fit, project expectations and the next step.",
    complianceTitle: "Assurance proportionate to the role.",
    complianceCopy: "Our shared framework supports accurate representation, qualification checks where required and secure handling of technical and candidate information."
  },
  tech: {
    name: "Ignite Tech",
    short: "Tech",
    entity: "Ignite Tech Talent Ltd",
    ico: "ZC135860",
    file: "tech.html",
    logo: "assets/ignite-tech.svg",
    accent: "#3be47e",
    accentRgb: "59,228,126",
    accentText: "#0d1712",
    eyebrow: "Specialist technology recruitment",
    title: "Talent for teams building what’s next.",
    lead: "We connect technology professionals with organisations hiring for delivery, change and growth — combining pace with careful information handling.",
    imageLabel: "Technology recruitment with information care built in.",
    introTitle: "Fast-moving markets need focused conversations.",
    intro: "Technology hiring works best when the recruiter understands the outcome, the environment and the skills that genuinely matter. We turn that context into a more deliberate search.",
    highlight: "Specialist search with privacy and confidentiality built in.",
    services: [
      ["Permanent technology hiring", "Targeted search for long-term appointments across technical, product and delivery teams."],
      ["Contract recruitment", "Focused support for time-bound delivery, transformation and specialist project requirements."],
      ["Confidential search", "Careful handling of candidate, client and role information throughout sensitive appointments."]
    ],
    markets: ["Software & engineering", "Cloud & infrastructure", "Data & analytics", "Cyber security", "Product & delivery", "Support & operations"],
    marketIntro: "Technology recruitment built around the outcome your team needs to deliver.",
    clientCopy: "Tell us what the team is building, changing or fixing. We use that context to focus the search and communicate the opportunity with more precision.",
    candidateCopy: "We keep role information, representation and data handling clear, so candidates can make informed decisions at every stage.",
    complianceTitle: "Information care is part of the service.",
    complianceCopy: "Our approach gives data protection, information security, confidentiality and contractor clarity a visible place in the recruitment journey."
  },
  legal: {
    name: "Ignite Legal",
    short: "Legal",
    entity: "Ignite Legal Ltd",
    ico: "ZC135858",
    file: "legal.html",
    logo: "assets/ignite-legal.svg",
    accent: "#ff3c43",
    accentRgb: "255,60,67",
    accentText: "#ffffff",
    eyebrow: "Specialist legal recruitment",
    title: "Recruitment built on judgement and trust.",
    lead: "We connect law firms, in-house teams and public-sector organisations with legal professionals at every level.",
    imageLabel: "Discretion. Sector knowledge. Accurate representation.",
    introTitle: "Legal recruitment calls for care and context.",
    intro: "From sensitive searches to fast-moving team requirements, our work is grounded in confidentiality, accurate communication and a clear understanding of the appointment.",
    highlight: "Permanent, interim and contract legal recruitment.",
    services: [
      ["Private practice", "Specialist recruitment support for law firms seeking professionals across fee-earning and support functions."],
      ["In-house & public sector", "Focused search for corporate legal departments, public bodies and regulated environments."],
      ["Interim & contract", "Flexible recruitment for short-term capacity, specialist projects and changing team requirements."]
    ],
    markets: ["Corporate & commercial", "Litigation & disputes", "Property & real estate", "Employment law", "Regulatory & compliance", "Legal support & paralegal"],
    marketIntro: "Legal professionals from support level through to senior appointments.",
    clientCopy: "We clarify the team, mandate, level, working environment and sensitivity of the search before approaching the market.",
    candidateCopy: "Discreet conversations, accurate representation and clear role information help candidates explore opportunities with confidence.",
    complianceTitle: "Confidentiality is a working standard.",
    complianceCopy: "Our recruitment service is supported by group privacy, ethical recruitment and information-security controls. Ignite Legal provides recruitment services, not regulated legal advice."
  },
  sales: {
    name: "Ignite Sales",
    short: "Sales",
    entity: "Ignite Sales Ltd",
    ico: "ZC173466",
    file: "sales.html",
    logo: "assets/ignite-sales.svg",
    accent: "#4a40b8",
    accentRgb: "74,64,184",
    accentText: "#ffffff",
    eyebrow: "Specialist sales recruitment",
    title: "Revenue talent. Clear expectations.",
    lead: "We help growth-minded organisations find sales professionals — and give candidates a clearer view of the role, expectations and opportunity.",
    imageLabel: "Commercial energy with candidate clarity.",
    introTitle: "Great sales hiring starts with a precise brief.",
    intro: "Market, sales cycle, customer, target, leadership and reward all shape the right hire. We bring those details into the search from the beginning.",
    highlight: "A sharper brief creates a stronger shortlist.",
    services: [
      ["Growth appointments", "Targeted recruitment for organisations strengthening revenue, business development and commercial capability."],
      ["Sales leadership", "Focused search for leaders who can set direction, develop teams and build repeatable performance."],
      ["Candidate clarity", "Straightforward communication about fixed pay, variable reward, targets and OTE assumptions where supplied."]
    ],
    markets: ["Business development", "Account management", "Sales leadership", "Customer success", "Commercial operations", "Technology & B2B sales"],
    marketIntro: "Commercial appointments shaped around customer, proposition and growth stage.",
    clientCopy: "We build the search around the commercial reality: who buys, how they buy, what success looks like and what the role can genuinely offer.",
    candidateCopy: "Clear conversations about remit, targets, earnings structure and progression help candidates judge the opportunity properly.",
    complianceTitle: "Clear role information builds trust.",
    complianceCopy: "Our framework supports fair advertising, accurate representation and transparent communication around salary, commission and OTE."
  }
};

const currentKey = document.body.dataset.site || "group";
const site = sites[currentKey] || sites.group;
const allPolicies = site.extraPolicy ? [site.extraPolicy, ...policyLinks] : policyLinks;

document.documentElement.style.setProperty("--accent", site.accent);
document.documentElement.style.setProperty("--accent-rgb", site.accentRgb);
document.documentElement.style.setProperty("--accent-text", site.accentText);

const brandCards = Object.entries(sites).filter(([key]) => key !== "group").map(([key, item]) => `
  <a class="brand-card ${key === currentKey ? "is-current" : ""}" href="${item.file}" style="--brand:${item.accent}">
    <img src="${item.logo}" alt="${item.name}">
    <span>${item.eyebrow.replace("Specialist ", "")}</span>
    <b aria-hidden="true">→</b>
  </a>`).join("");

const brandMenu = Object.entries(sites).map(([key, item]) => `
  <a href="${item.file}" class="${key === currentKey ? "active" : ""}">${item.short}</a>`).join("");

const services = site.services.map(([title, copy], index) => `
  <article class="service-card">
    <span class="service-number">0${index + 1}</span>
    <h3>${title}</h3>
    <p>${copy}</p>
    <a href="#contact">Discuss your brief <span aria-hidden="true">→</span></a>
  </article>`).join("");

const markets = site.markets.map((market, index) => `
  <li><span>${String(index + 1).padStart(2, "0")}</span>${market}</li>`).join("");

const policies = allPolicies.map(([name, id]) => `
  <a href="https://drive.google.com/file/d/${id}/view" target="_blank" rel="noopener">
    <span>${name}</span><b aria-hidden="true">↗</b>
  </a>`).join("");

document.querySelector("#app").innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>

  <div class="utility-bar">
    <div class="page-width utility-inner">
      <span>Manchester-based · UK-wide recruitment</span>
      <div><a href="${CONTACT.phoneHref}">${CONTACT.phone}</a><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div>
    </div>
  </div>

  <header class="site-header">
    <div class="page-width header-inner">
      <a class="brand" href="${site.file}" aria-label="${site.name} home"><img src="${site.logo}" alt="${site.name}"></a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span></span><span class="sr-only">Open menu</span></button>
      <nav class="primary-nav" id="primary-nav" aria-label="Primary navigation">
        <a href="#expertise">Expertise</a>
        <a href="#clients">Clients</a>
        <a href="#candidates">Candidates</a>
        <a href="#compliance">Compliance</a>
        <a href="#group">Our group</a>
      </nav>
      <a class="header-cta" href="#contact">Talk to us <span aria-hidden="true">→</span></a>
    </div>
    <nav class="brand-switcher page-width" aria-label="Ignite group websites">${brandMenu}</nav>
  </header>

  <main id="main">
    <section class="hero">
      <div class="page-width hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${site.eyebrow}</p>
          <h1>${site.title}</h1>
          <p class="hero-lead">${site.lead}</p>
          <div class="button-row">
            <a class="button primary" href="mailto:${CONTACT.email}?subject=${encodeURIComponent(`Hiring enquiry — ${site.name}`)}">I’m hiring <span aria-hidden="true">→</span></a>
            <a class="button ghost" href="mailto:${CONTACT.email}?subject=${encodeURIComponent(`Candidate enquiry — ${site.name}`)}">I’m looking for work</a>
          </div>
          <div class="hero-note"><span class="pulse"></span><strong>${site.imageLabel}</strong></div>
        </div>
        <div class="hero-media">
          <img src="assets/ignite-people-hero.png" alt="Professionals collaborating in a Manchester workplace overlooking the city">
          <div class="hero-tint"></div>
          <div class="hero-stamp"><small>Ignite standards</small><strong>Integrity<br>Speed<br>Compliance<br>Expertise</strong></div>
        </div>
      </div>
    </section>

    <section class="intro-section">
      <div class="page-width intro-grid">
        <div>
          <p class="eyebrow">Why ${site.name}</p>
          <h2>${site.introTitle}</h2>
        </div>
        <div class="intro-copy">
          <p>${site.intro}</p>
          <blockquote>${site.highlight}</blockquote>
        </div>
      </div>
    </section>

    <section class="services-section" id="expertise">
      <div class="page-width">
        <div class="section-title">
          <div><p class="eyebrow">How we help</p><h2>Recruitment built around the brief.</h2></div>
          <p>Focused expertise, responsive delivery and a clear experience for everyone involved.</p>
        </div>
        <div class="service-grid">${services}</div>
      </div>
    </section>

    <section class="markets-section">
      <div class="page-width markets-grid">
        <div class="markets-copy">
          <p class="eyebrow">Markets & appointments</p>
          <h2>${site.marketIntro}</h2>
          <a class="text-link" href="#contact">Speak to a specialist <span aria-hidden="true">→</span></a>
        </div>
        <ol class="market-list">${markets}</ol>
      </div>
    </section>

    <section class="process-section">
      <div class="page-width">
        <div class="section-title compact">
          <div><p class="eyebrow">A clearer search</p><h2>From brief to placement.</h2></div>
          <p>A simple, accountable recruitment journey with communication at every stage.</p>
        </div>
        <ol class="process-grid">
          <li><span>01</span><h3>Understand</h3><p>We define the role, context, priorities and non-negotiables.</p></li>
          <li><span>02</span><h3>Search</h3><p>We focus the market and speak to relevant people with care.</p></li>
          <li><span>03</span><h3>Select</h3><p>Clear information and proportionate checks support the shortlist.</p></li>
          <li><span>04</span><h3>Support</h3><p>We stay close through interview, offer and placement.</p></li>
        </ol>
      </div>
    </section>

    <section class="journeys-section">
      <div class="page-width journeys-grid">
        <article class="journey-card client-card" id="clients">
          <p class="eyebrow">For clients</p>
          <h2>Build the team that moves the work forward.</h2>
          <p>${site.clientCopy}</p>
          <a class="button light" href="mailto:${CONTACT.email}?subject=${encodeURIComponent(`Hiring enquiry — ${site.name}`)}">Brief the team <span aria-hidden="true">→</span></a>
        </article>
        <article class="journey-card candidate-card" id="candidates">
          <p class="eyebrow">For candidates</p>
          <h2>Make your next move with better context.</h2>
          <p>${site.candidateCopy}</p>
          <a class="button dark-button" href="mailto:${CONTACT.email}?subject=${encodeURIComponent(`Candidate enquiry — ${site.name}`)}">Start a conversation <span aria-hidden="true">→</span></a>
        </article>
      </div>
    </section>

    <section class="compliance-section" id="compliance">
      <div class="page-width compliance-grid">
        <div class="compliance-copy">
          <p class="eyebrow">Policies & compliance</p>
          <h2>${site.complianceTitle}</h2>
          <p>${site.complianceCopy}</p>
          <a class="button primary" href="${DRIVE_POLICIES}" target="_blank" rel="noopener">Open policy hub <span aria-hidden="true">↗</span></a>
          <small>Links open the current controlled document folder.</small>
        </div>
        <div class="policy-panel">
          <div class="panel-title"><strong>Public policy library</strong><span>Controlled documents</span></div>
          <div class="policy-links">${policies}</div>
        </div>
      </div>
    </section>

    <section class="group-section" id="group">
      <div class="page-width">
        <div class="section-title">
          <div><p class="eyebrow">The Ignite group</p><h2>Five specialist companies. Shared purpose.</h2></div>
          <p>Explore the recruitment company closest to your market.</p>
        </div>
        <div class="brand-grid">${brandCards}</div>
        ${currentKey !== "group" ? `<a class="group-home-link" href="index.html"><span>Backed by</span><img src="assets/ignite-talent-group.svg" alt="Ignite Talent Group"><b aria-hidden="true">→</b></a>` : ""}
      </div>
    </section>

    <section class="contact-section" id="contact">
      <div class="page-width contact-grid">
        <div>
          <p class="eyebrow">Start a conversation</p>
          <h2>Hiring, exploring a move, or reviewing a supplier?</h2>
        </div>
        <div class="contact-actions">
          <a href="${CONTACT.phoneHref}"><small>Call the team</small><strong>${CONTACT.phone}</strong><span aria-hidden="true">→</span></a>
          <a href="mailto:${CONTACT.email}"><small>Email us</small><strong>${CONTACT.email}</strong><span aria-hidden="true">→</span></a>
          <address><small>Manchester office</small><strong>${CONTACT.address}</strong></address>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="page-width footer-grid">
      <div class="footer-brand"><img src="${site.logo}" alt="${site.name}"><p>Specialist recruitment with group standards.</p></div>
      <div><strong>Explore</strong><a href="#expertise">Expertise</a><a href="#clients">Clients</a><a href="#candidates">Candidates</a><a href="#compliance">Compliance</a></div>
      <div><strong>Contact</strong><a href="${CONTACT.phoneHref}">${CONTACT.phone}</a><a href="mailto:${CONTACT.email}">${CONTACT.email}</a><a href="${DRIVE_POLICIES}" target="_blank" rel="noopener">Policies</a></div>
      <div><strong>Company</strong><span>${site.entity}</span><span>ICO: ${site.ico}</span><a href="index.html">Ignite Talent Group</a></div>
    </div>
    <div class="page-width footer-bottom"><span>© 2026 ${site.entity}</span><span>Recruitment services · Manchester, UK</span></div>
  </footer>
`;

const menuButton = document.querySelector(".menu-button");
const primaryNav = document.querySelector(".primary-nav");
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  primaryNav.classList.toggle("open", !isOpen);
});

primaryNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  primaryNav.classList.remove("open");
}));
