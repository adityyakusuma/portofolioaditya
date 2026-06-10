import { useEffect, useRef, useState } from "react";
import "./index.css";
import profilePhoto from "./assets/aditya-profile.png";

const logos = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  excel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  opencv: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  api: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
  chart: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
  yolo: "https://cdn-icons-png.flaticon.com/512/4149/4149647.png",
  debug: "https://cdn-icons-png.flaticon.com/512/2621/2621040.png",
  testing: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png",
  docs: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png",
  flow: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png",
  support: "https://cdn-icons-png.flaticon.com/512/4230/4230568.png",
};

const content = {
  EN: {
    nav: {
      profile: "Profile",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
    },
    hero: {
      badge: "Available for Full-Time Opportunities",
      line1: "IT Developer",
      line2: "Business Systems,",
      line3: "Web Apps & Data Solutions.",
      desc: "I develop practical technology solutions that combine web development, database management, system integration, application support, and data-driven insights to support business operations.",
      primaryBtn: "View Projects",
      secondaryBtn: "Contact Me",
      role: "IT Developer • Web Developer • Data Solutions",
    },
    stats: [
      { value: "3+", label: "Featured Projects" },
      { value: "2", label: "Work Experiences" },
      { value: "3.66", label: "GPA" },
      { value: "6", label: "Career Targets" },
    ],
    rolesTitle: "Career Direction",
    rolesDesc:
      "This portfolio is positioned for multiple IT roles by combining software development, business systems, data analytics, and application support capabilities.",
    slides: [
      {
        tag: "01 / Profile",
        tab: "profile",
        title: "A technology graduate focused on practical business solutions.",
        desc: "I build digital solutions that solve operational problems, improve workflow efficiency, and support better decision-making through structured systems and data.",
        badge: "Professional Profile",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&auto=format&fit=crop",
        progress: "33%",
      },
      {
        tag: "02 / Experience",
        tab: "experience",
        title: "Experience across web development, AI, and system implementation.",
        desc: "My background includes web development, API integration, database management, machine learning exposure, debugging, testing, and business-focused applications.",
        badge: "Work Experience",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop",
        progress: "66%",
      },
      {
        tag: "03 / Projects",
        tab: "projects",
        title: "Projects designed to support real business operations.",
        desc: "My projects include retail POS, employee attendance systems, and data analytics dashboards with features related to transactions, reporting, monitoring, and insights.",
        badge: "Selected Projects",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
        progress: "100%",
      },
    ],
    contributionTitle: "What I Can Contribute",
    contributionDesc:
      "I can support companies by building, maintaining, analyzing, and improving technology-based business systems.",
    skillTitle: "Skills & Tools",
    skillDesc: "Technical capabilities grouped by practical work areas.",
    experienceTitle: "Experience Timeline",
    experienceDesc:
      "Professional, academic, and project-based experience that supports my target roles.",
    projectTitle: "Featured Portfolio Projects",
    projectDesc:
      "Selected projects that demonstrate web development, database integration, reporting, system flow, and data analysis.",
    ctaTitle: "Let’s build useful solutions.",
    ctaBtn: "Contact Me",
    contactTitle: "Software, Systems & Data Solutions.",
    contactDesc:
      "Feel free to contact me regarding IT development, web applications, business systems, data analytics, application support, or professional opportunities.",
    footer: "© 2026 Aditya Kusuma — Portfolio",
  },

  IN: {
    nav: {
      profile: "Profil",
      skills: "Keahlian",
      experience: "Pengalaman",
      projects: "Proyek",
    },
    hero: {
      badge: "Terbuka untuk Kesempatan Kerja Full-Time",
      line1: "IT Developer",
      line2: "Sistem Bisnis,",
      line3: "Web App & Solusi Data.",
      desc: "Saya mengembangkan solusi teknologi praktis yang menggabungkan web development, manajemen database, integrasi sistem, application support, dan insight berbasis data untuk mendukung operasional bisnis.",
      primaryBtn: "Lihat Proyek",
      secondaryBtn: "Hubungi Saya",
      role: "IT Developer • Web Developer • Data Solutions",
    },
    stats: [
      { value: "3+", label: "Proyek Utama" },
      { value: "2", label: "Pengalaman Kerja" },
      { value: "3.66", label: "IPK" },
      { value: "6", label: "Target Karier" },
    ],
    rolesTitle: "Arah Karier",
    rolesDesc:
      "Portfolio ini diposisikan untuk beberapa role IT dengan menggabungkan kemampuan software development, sistem bisnis, data analytics, dan application support.",
    slides: [
      {
        tag: "01 / Profil",
        tab: "profil",
        title: "Lulusan teknologi yang fokus pada solusi bisnis praktis.",
        desc: "Saya membangun solusi digital untuk membantu menyelesaikan masalah operasional, meningkatkan efisiensi kerja, dan mendukung pengambilan keputusan melalui sistem dan data yang terstruktur.",
        badge: "Profil Profesional",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&auto=format&fit=crop",
        progress: "33%",
      },
      {
        tag: "02 / Pengalaman",
        tab: "pengalaman",
        title: "Pengalaman di web development, AI, dan implementasi sistem.",
        desc: "Latar belakang saya mencakup web development, integrasi API, manajemen database, exposure machine learning, debugging, testing, dan pengembangan aplikasi berbasis kebutuhan bisnis.",
        badge: "Pengalaman Kerja",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop",
        progress: "66%",
      },
      {
        tag: "03 / Proyek",
        tab: "proyek",
        title: "Proyek yang dirancang untuk kebutuhan operasional nyata.",
        desc: "Project saya mencakup POS retail, sistem absensi karyawan, dan dashboard analitik data dengan fitur transaksi, reporting, monitoring, dan insight bisnis.",
        badge: "Proyek Pilihan",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
        progress: "100%",
      },
    ],
    contributionTitle: "Kontribusi yang Bisa Saya Berikan",
    contributionDesc:
      "Saya dapat membantu perusahaan dalam membangun, memelihara, menganalisis, dan meningkatkan sistem bisnis berbasis teknologi.",
    skillTitle: "Keahlian & Tools",
    skillDesc: "Kemampuan teknis yang dikelompokkan berdasarkan kebutuhan kerja.",
    experienceTitle: "Timeline Pengalaman",
    experienceDesc:
      "Pengalaman profesional, akademik, dan project-based yang mendukung role target saya.",
    projectTitle: "Proyek Portfolio Unggulan",
    projectDesc:
      "Project pilihan yang menunjukkan kemampuan web development, integrasi database, reporting, alur sistem, dan analisis data.",
    ctaTitle: "Mari membangun solusi yang bermanfaat.",
    ctaBtn: "Hubungi Saya",
    contactTitle: "Solusi Software, Sistem & Data.",
    contactDesc:
      "Silakan hubungi saya untuk kebutuhan IT development, web application, business system, data analytics, application support, atau kesempatan kerja profesional.",
    footer: "© 2026 Aditya Kusuma — IT Developer Portfolio",
  },
};

const targetRoles = [
  "IT Developer",
  "Web Developer",
  "Frontend Developer",
  "Junior System Analyst",
  "Data Analyst Support",
  "Application Support",
];

const roleMap = {
  "IT Developer": ["React.js", "PHP", "MySQL", "REST API", "POS Retail System"],
  "Web Developer": ["React.js", "JavaScript", "HTML5", "CSS3", "Employee Attendance App"],
  "Frontend Developer": ["React.js", "JavaScript", "HTML5", "CSS3"],
  "Junior System Analyst": ["Business System", "Documentation", "System Flow", "POS Retail System"],
  "Data Analyst Support": ["Python", "Excel", "Data Visualization", "AI Data Analyst Dashboard"],
  "Application Support": ["Debugging", "Testing", "Database", "Application Maintenance"],
};

const contributionItems = {
  EN: [
    "Business System Development",
    "Web Application Development",
    "Database Management",
    "API Integration",
    "Data Analysis & Reporting",
    "Software Maintenance",
    "System Documentation",
    "Technical Problem Solving",
  ],
  IN: [
    "Pengembangan Sistem Bisnis",
    "Pengembangan Aplikasi Web",
    "Manajemen Database",
    "Integrasi API",
    "Analisis Data & Reporting",
    "Pemeliharaan Software",
    "Dokumentasi Sistem",
    "Problem Solving Teknis",
  ],
};

const skillGroups = [
  {
    group: "Frontend Development",
    items: [
      { name: "React.js", logo: logos.react },
      { name: "JavaScript", logo: logos.js },
      { name: "HTML5", logo: logos.html },
      { name: "CSS3", logo: logos.css },
    ],
  },
  {
    group: "Backend & Database",
    items: [
      { name: "PHP", logo: logos.php },
      { name: "MySQL", logo: logos.mysql },
      { name: "Firebase", logo: logos.firebase },
      { name: "REST API", logo: logos.api },
    ],
  },
  {
    group: "Data & Analytics",
    items: [
      { name: "Python", logo: logos.python },
      { name: "Excel", logo: logos.excel },
      { name: "Data Visualization", logo: logos.chart },
      { name: "OpenCV", logo: logos.opencv },
      { name: "YOLO", logo: logos.yolo },
    ],
  },
  {
    group: "Tools & Platform",
    items: [
      { name: "Git", logo: logos.git },
      { name: "GitHub", logo: logos.github },
      { name: "VS Code", logo: logos.vscode },
      { name: "Vercel", logo: logos.vercel },
    ],
  },
  {
    group: "System & Support",
    items: [
      { name: "Debugging", logo: logos.debug },
      { name: "Testing", logo: logos.testing },
      { name: "Documentation", logo: logos.docs },
      { name: "System Flow", logo: logos.flow },
      { name: "Application Maintenance", logo: logos.support },
    ],
  },
];

const experiences = {
  EN: [
    {
      year: "2024",
      role: "Web Developer",
      company: "PT Wujudkan Mimpi Bersama Indonesia / Vexanium",
      desc: "Worked on web development tasks involving JavaScript, API integration, SQL database, debugging, and application improvement.",
      tags: ["Web Development", "API Integration", "SQL Database"],
    },
    {
      year: "2023",
      role: "Machine Learning Trainee",
      company: "PT Orbit Ventura",
      desc: "Developed machine learning exposure through YOLO, Python, and OpenCV, including image processing and model experimentation.",
      tags: ["Python", "YOLO", "OpenCV"],
    },
    {
      year: "2020–2024",
      role: "S1 Teknik Informatika",
      company: "Universitas Pamulang",
      desc: "Graduated with GPA 3.66 and built a strong foundation in software development, database systems, and information technology.",
      tags: ["GPA 3.66", "Software", "Database"],
    },
    {
      year: "2025–2026",
      role: "Portfolio Project Development",
      company: "Independent Projects",
      desc: "Built business-oriented portfolio projects including POS Retail System, Employee Attendance App, and AI Data Analyst Dashboard.",
      tags: ["React", "PHP", "Firebase", "Data"],
    },
  ],
  IN: [
    {
      year: "2024",
      role: "Web Developer",
      company: "PT Wujudkan Mimpi Bersama Indonesia / Vexanium",
      desc: "Mengerjakan pengembangan web menggunakan JavaScript, integrasi API, SQL database, debugging, dan peningkatan aplikasi.",
      tags: ["Web Development", "API Integration", "SQL Database"],
    },
    {
      year: "2023",
      role: "Machine Learning Trainee",
      company: "PT Orbit Ventura",
      desc: "Mendapatkan pengalaman machine learning menggunakan YOLO, Python, dan OpenCV, termasuk image processing dan eksperimen model.",
      tags: ["Python", "YOLO", "OpenCV"],
    },
    {
      year: "2020–2024",
      role: "S1 Teknik Informatika",
      company: "Universitas Pamulang",
      desc: "Lulus dengan IPK 3.66 dan memiliki dasar kuat dalam software development, database system, dan teknologi informasi.",
      tags: ["IPK 3.66", "Software", "Database"],
    },
    {
      year: "2025–2026",
      role: "Portfolio Project Development",
      company: "Independent Projects",
      desc: "Membangun project portfolio berbasis kebutuhan bisnis seperti POS Retail System, Employee Attendance App, dan AI Data Analyst Dashboard.",
      tags: ["React", "PHP", "Firebase", "Data"],
    },
  ],
};

const projects = {
  EN: [
    {
      label: "React • PHP • MySQL • REST API",
      title: "POS Retail System",
      desc: "Retail management platform with product management, cashier checkout, stock control, transactions, and analytics.",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=900&q=80&auto=format&fit=crop",
      link: "https://smartretailpos.rf.gd/",
      problem: "Small retail operations need an integrated system for managing products, stock, cashier transactions, and reports.",
      solution: "Built a database-connected POS system using React, PHP, MySQL, and REST API to support daily retail operations.",
      features: ["Product Management", "Cashier Checkout", "Stock Control", "Transaction History", "Sales Analytics"],
      tech: ["React.js", "PHP", "MySQL", "REST API"],
    },
    {
      label: "React • Firebase",
      title: "Employee Attendance App",
      desc: "Workforce management solution with employee dashboard, attendance tracking, leave requests, and reporting.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop",
      link: "https://employee-attendance-app-sandy.vercel.app/",
      problem: "Companies need structured employee attendance tracking and administrative monitoring.",
      solution: "Developed an employee attendance system using React and Firebase with dashboards, leave request, and reporting features.",
      features: ["Employee Dashboard", "Attendance Tracking", "Leave Request", "Admin Monitoring", "Reports"],
      tech: ["React.js", "Firebase"],
    },
    {
      label: "React • Data Analytics",
      title: "AI Data Analyst Dashboard",
      desc: "CSV analytics dashboard with charts, smart chart controls, and automatic insight generation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
      link: "https://ai-data-analyst-omega-pearl.vercel.app/",
      problem: "Users need a simple way to analyze CSV data and understand business patterns visually.",
      solution: "Created an interactive analytics dashboard that reads CSV data, visualizes it, and generates automatic insights.",
      features: ["CSV Upload", "Interactive Charts", "Smart Chart Control", "Automatic Insights", "Business Summary"],
      tech: ["React.js", "Data Visualization", "CSV Analytics"],
    },
  ],
  IN: [
    {
      label: "React • PHP • MySQL • REST API",
      title: "POS Retail System",
      desc: "Platform manajemen retail dengan product management, cashier checkout, stock control, transaksi, dan analytics.",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=900&q=80&auto=format&fit=crop",
      link: "https://smartretailpos.rf.gd/",
      problem: "Operasional retail membutuhkan sistem terintegrasi untuk produk, stok, kasir, transaksi, dan laporan.",
      solution: "Membangun POS System berbasis database menggunakan React, PHP, MySQL, dan REST API untuk mendukung operasional toko.",
      features: ["Product Management", "Cashier Checkout", "Stock Control", "Riwayat Transaksi", "Sales Analytics"],
      tech: ["React.js", "PHP", "MySQL", "REST API"],
    },
    {
      label: "React • Firebase",
      title: "Employee Attendance App",
      desc: "Solusi manajemen karyawan dengan dashboard employee, absensi, pengajuan cuti, dan reporting.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop",
      link: "https://employee-attendance-app-sandy.vercel.app/",
      problem: "Perusahaan membutuhkan sistem absensi karyawan yang terstruktur dan mudah dimonitor oleh admin.",
      solution: "Mengembangkan sistem absensi karyawan menggunakan React dan Firebase dengan fitur dashboard, leave request, dan reporting.",
      features: ["Employee Dashboard", "Attendance Tracking", "Leave Request", "Admin Monitoring", "Reports"],
      tech: ["React.js", "Firebase"],
    },
    {
      label: "React • Data Analytics",
      title: "AI Data Analyst Dashboard",
      desc: "Dashboard analitik CSV dengan chart interaktif, smart chart control, dan insight otomatis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
      link: "https://ai-data-analyst-omega-pearl.vercel.app/",
      problem: "User membutuhkan cara sederhana untuk menganalisis data CSV dan memahami pola bisnis secara visual.",
      solution: "Membuat dashboard analitik interaktif yang dapat membaca data CSV, menampilkan visualisasi, dan menghasilkan insight otomatis.",
      features: ["CSV Upload", "Interactive Charts", "Smart Chart Control", "Automatic Insights", "Business Summary"],
      tech: ["React.js", "Data Visualization", "CSV Analytics"],
    },
  ],
};

function App() {
  const [language, setLanguage] = useState("EN");
  const [activeSlide, setActiveSlide] = useState(0);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [activeRole, setActiveRole] = useState("IT Developer");
  const [selectedProject, setSelectedProject] = useState(null);

  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const indicatorRef = useRef(null);
  const tabRefs = useRef([]);
  const triggerRefs = useRef([]);

  const t = content[language];
  const currentProjects = projects[language];
  const currentExperiences = experiences[language];
  const highlightedItems = roleMap[activeRole] || [];

  const isHighlighted = (value) =>
    highlightedItems.some((item) =>
      value.toLowerCase().includes(item.toLowerCase())
    );

  useEffect(() => {
    document.documentElement.setAttribute("data-lang", language);
  }, [language]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mx = 0;
    let my = 0;
    let fx = 0;
    let fy = 0;
    let frame;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const animate = () => {
      fx += (mx - fx) * 0.1;
      fy += (my - fy) * 0.1;
      follower.style.left = `${fx}px`;
      follower.style.top = `${fy}px`;
      frame = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setNavbarScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeWithEsc = (e) => {
      if (e.key === "Escape") {
        setShowContact(false);
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", closeWithEsc);
    return () => document.removeEventListener("keydown", closeWithEsc);
  }, []);

  useEffect(() => {
    const activeTab = tabRefs.current[activeSlide];
    const indicator = indicatorRef.current;
    if (!activeTab || !indicator) return;

    indicator.style.left = `${activeTab.offsetLeft}px`;
    indicator.style.width = `${activeTab.offsetWidth}px`;
  }, [activeSlide, language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlide(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.5 }
    );

    triggerRefs.current.forEach((trigger) => {
      if (trigger) observer.observe(trigger);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [language]);

  const scrollToTrigger = (index) => {
    const target = triggerRefs.current[index];
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const targetY =
      window.scrollY + rect.top + target.offsetHeight / 2 - window.innerHeight / 2;

    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <main className="portfolio">
      <div className="noise"></div>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={followerRef} className="cursor-follower"></div>

      <nav className={`navbar ${navbarScrolled ? "scrolled" : ""}`}>
        <a href="#hero" className="nav-logo">
          <span className="logo-mark">AK</span>
          <span>Aditya Kusuma</span>
        </a>

        <div className="nav-links">
          <a href="#scroll-section">{t.nav.profile}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#work">{t.nav.projects}</a>

          <button
            className={`lang-switch ${language === "IN" ? "is-in" : ""}`}
            onClick={() => setLanguage(language === "EN" ? "IN" : "EN")}
            aria-label="Switch language"
          >
            <span>EN</span>
            <span>IN</span>
            <div className="lang-thumb"></div>
          </button>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-grid">
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span></span>
            {t.hero.badge}
          </div>

          <h1>
            <span>{t.hero.line1}</span>
            <span className="gradient-text">{t.hero.line2}</span>
            <span>{t.hero.line3}</span>
          </h1>

          <p>{t.hero.desc}</p>

          <div className="hero-actions">
            <a href="#work" className="btn-primary">{t.hero.primaryBtn}</a>
            <button className="btn-ghost contact-trigger" onClick={() => setShowContact(true)}>
              {t.hero.secondaryBtn} ↗
            </button>
          </div>

          <div className="hero-stats">
            {t.stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-profile-card">
          <div className="profile-photo-wrap">
            <img src={profilePhoto} alt="Aditya Kusuma" />
          </div>

          <div className="profile-card-info">
            <span>Aditya Kusuma</span>
            <strong>{t.hero.role}</strong>
            <p>Business Systems • Web Apps • Data Analytics</p>
          </div>
        </div>

        <div className="scroll-indicator">
          <div></div>
        </div>
      </section>

      <section className="role-section">
        <div className="section-intro reveal">
          <p className="section-eyebrow">{t.rolesTitle}</p>
          <h2>{activeRole}</h2>
          <p>{t.rolesDesc}</p>
        </div>

        <div className="role-grid reveal">
          {targetRoles.map((role) => (
            <button
              key={role}
              className={`role-pill ${activeRole === role ? "active" : ""}`}
              onClick={() => setActiveRole(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </section>

      <section className="scroll-section" id="scroll-section">
        <div className="tab-nav">
          <div className="tab-track">
            {t.slides.map((slide, index) => (
              <button
                key={slide.tab}
                ref={(el) => (tabRefs.current[index] = el)}
                className={`tab-btn ${activeSlide === index ? "active" : ""}`}
                onClick={() => scrollToTrigger(index)}
              >
                {slide.tab}
              </button>
            ))}
            <div ref={indicatorRef} className="tab-indicator"></div>
          </div>
        </div>

        <div className="sticky-stage">
          <div className="panel-text">
            {t.slides.map((slide, index) => (
              <div key={slide.tag} className={`text-slide ${activeSlide === index ? "active" : ""}`}>
                <div className="slide-tag">{slide.tag}</div>
                <div className="slide-icon">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                <div className="slide-progress">
                  <div style={{ width: slide.progress }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="panel-image">
            {t.slides.map((slide, index) => (
              <div key={slide.image} className={`image-slide ${activeSlide === index ? "active" : ""}`}>
                <img src={slide.image} alt={slide.badge} />
                <div className="image-overlay"></div>
                <div className="image-badge">{slide.badge}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="trigger-container">
          {t.slides.map((_, index) => (
            <div
              key={index}
              ref={(el) => (triggerRefs.current[index] = el)}
              className="trigger"
              data-index={index}
            ></div>
          ))}
        </div>
      </section>

      <section className="contribution-section">
        <div className="section-intro reveal">
          <p className="section-eyebrow">Contribution</p>
          <h2>{t.contributionTitle}</h2>
          <p>{t.contributionDesc}</p>
        </div>

        <div className="contribution-grid reveal">
          {contributionItems[language].map((item) => (
            <div className="contribution-card" key={item}>
              <span>✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-intro reveal">
          <p className="section-eyebrow">Tech Stack</p>
          <h2>{t.skillTitle}</h2>
          <p>{t.skillDesc}</p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div className="skill-group reveal" key={group.group}>
              <h3>{group.group}</h3>

              <div className="skill-grid">
                {group.items.map((item) => (
                  <div
                    className={`skill-card ${isHighlighted(item.name) ? "highlighted" : ""}`}
                    key={item.name}
                  >
                    <div className="skill-logo">
                      {item.logo ? (
                        <img src={item.logo} alt={item.name} />
                      ) : (
                        <span>{item.name.slice(0, 2).toUpperCase()}</span>
                      )}
                    </div>
                    <b>{item.name}</b>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-intro section-intro-center reveal">
          <p className="section-eyebrow">Career Timeline</p>
          <h2>{t.experienceTitle}</h2>
          <p>{t.experienceDesc}</p>
        </div>

        <div className="timeline reveal">
          {currentExperiences.map((item, index) => (
            <div className="timeline-item" key={`${item.year}-${item.role}`}>
              <div className="timeline-marker">
                <span></span>
                {index !== currentExperiences.length - 1 && <i></i>}
              </div>

              <div className="timeline-card">
                <div className="timeline-year">{item.year}</div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.desc}</p>

                <div className="timeline-tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-intro reveal">
          <p className="section-eyebrow">Selected Work</p>
          <h2>{t.projectTitle}</h2>
          <p>{t.projectDesc}</p>
        </div>

        <div className="project-grid-static reveal">
          {currentProjects.map((project) => (
            <article
              className={`project-card ${isHighlighted(project.title) ? "highlighted-project" : ""}`}
              key={project.title}
            >
              <a href={project.link} target="_blank" rel="noreferrer" className="project-image">
                <img src={project.image} alt={project.title} />
              </a>

              <div className="project-info">
                <span>{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="project-actions">
                  <a href={project.link} target="_blank" rel="noreferrer">Live Demo ↗</a>
                  <button onClick={() => setSelectedProject(project)}>Details</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <h2 className="reveal">{t.ctaTitle}</h2>
        <button className="btn-primary reveal" onClick={() => setShowContact(true)}>
          {t.ctaBtn}
        </button>
      </section>

      <footer className="footer">
        <p>Thank you</p>
        <span>{t.footer}</span>
      </footer>

      {showContact && (
        <div className="contact-modal" onClick={() => setShowContact(false)}>
          <div className="contact-card" onClick={(e) => e.stopPropagation()}>
            <button className="contact-close" onClick={() => setShowContact(false)}>×</button>

            <p className="section-eyebrow">Contact Information</p>
            <h3>{t.contactTitle}</h3>
            <p className="contact-desc">{t.contactDesc}</p>

            <div className="contact-list">
              <a href="mailto:adityyakusuma0909@gmail.com">
                <span>Email</span>
                adityyakusuma0909@gmail.com
              </a>

              <a href="https://github.com/adityyakusuma" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                github.com/adityyakusuma
              </a>

              <a href="tel:+6289656893306">
                <span>Phone</span>
                +62 896 5689 3306
              </a>

              <div>
                <span>Location</span>
                Kota Tangerang Selatan, Banten, Indonesia
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="project-detail-card" onClick={(e) => e.stopPropagation()}>
            <button className="contact-close" onClick={() => setSelectedProject(null)}>×</button>

            <p className="section-eyebrow">Project Detail</p>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.desc}</p>

            <div className="detail-block">
              <strong>Problem</strong>
              <p>{selectedProject.problem}</p>
            </div>

            <div className="detail-block">
              <strong>Solution</strong>
              <p>{selectedProject.solution}</p>
            </div>

            <div className="detail-block">
              <strong>Key Features</strong>
              <div className="detail-tags">
                {selectedProject.features.map((feature) => <span key={feature}>{feature}</span>)}
              </div>
            </div>

            <div className="detail-block">
              <strong>Technology</strong>
              <div className="detail-tags">
                {selectedProject.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>

            <a href={selectedProject.link} target="_blank" rel="noreferrer" className="btn-primary detail-link">
              Open Live Project ↗
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;