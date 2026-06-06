import { useEffect, useRef, useState } from "react";
import "./index.css";
import profilePhoto from "./assets/aditya-profile.png";

const techLogos = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const toggleSlides = [
  {
    tag: "01 / Profile",
    tab: "profile",
    title: "Building practical solutions across software, systems, and data.",
    desc: "I develop business-oriented digital solutions by combining web development, database management, system integration, and data analysis. My work focuses on creating applications that are functional, structured, and useful for real operational needs.",
    badge: "Aditya Kusuma",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&auto=format&fit=crop",
    progress: "33%",
  },
  {
    tag: "02 / Experience",
    tab: "experience",
    title: "Software development, analytics, and technology experience.",
    desc: "Experienced in software development, database management, API integration, data processing, debugging, testing, and business application development. Supported by professional experience in web development and machine learning projects.",
    badge: "Work Experience",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop",
    progress: "66%",
  },
  {
    tag: "03 / Projects",
    tab: "projects",
    title: "Technology projects designed for real business needs.",
    desc: "My portfolio includes business systems, employee management applications, and data analytics solutions. These projects demonstrate software development, system integration, reporting, database management, and problem-solving capabilities.",
    badge: "Selected Projects",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    progress: "100%",
  },
];

const projects = [
  {
    label: "React • PHP • MySQL • REST API",
    title: "POS Retail System",
    desc: "Database-connected retail POS with product management, cashier checkout, stock control, transactions, and analytics.",
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=900&q=80&auto=format&fit=crop",
    link: "https://smartretailpos.rf.gd/",
  },
  {
    label: "React • Firebase",
    title: "Employee Attendance App",
    desc: "Attendance system with employee dashboard, leave request, reporting, and Firebase integration.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop",
    link: "https://employee-attendance-app-sandy.vercel.app/",
  },
  {
    label: "React • Data Analytics",
    title: "AI Data Analyst Dashboard",
    desc: "CSV analytics dashboard with interactive charts, smart chart control, and automatic insight generation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    link: "https://ai-data-analyst-omega-pearl.vercel.app/",
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const indicatorRef = useRef(null);
  const tabRefs = useRef([]);
  const triggerRefs = useRef([]);

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
      if (e.key === "Escape") setShowContact(false);
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
  }, [activeSlide]);

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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const scrollToTrigger = (index) => {
    const target = triggerRefs.current[index];
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const targetY =
      window.scrollY +
      rect.top +
      target.offsetHeight / 2 -
      window.innerHeight / 2;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
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
          <a href="#scroll-section">Profile</a>
          <a href="#tools">Tools</a>
          <a href="#work">Projects</a>
          <button className="nav-contact-btn" onClick={() => setShowContact(true)}>
            Contact
          </button>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-grid">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span></span>
            Open to Software, Business Systems & Data Opportunities
          </div>

          <h1>
            <span>Software & Data</span>
            <span className="gradient-text">Business & Data</span>
            <span>Solutions Builder.</span>
          </h1>

          <p>
            I build practical digital solutions that combine software development,
            business systems, database management, API integration, and data analytics
            to support efficient workflows and better decision-making.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn-primary">
              View Projects
            </a>

            <button
              className="btn-ghost contact-trigger"
              onClick={() => setShowContact(true)}
            >
              Contact Me ↗
            </button>
          </div>
        </div>

        <div className="hero-profile-card">
          <div className="profile-photo-wrap">
            <img src={profilePhoto} alt="Aditya Kusuma" />
          </div>

          <div className="profile-card-info">
            <span>Aditya Kusuma</span>
            <strong>Software & Data Solutions Developer</strong>
            <p>Business Systems • Data Analytics • Web Solutions</p>
          </div>
        </div>

        <div className="scroll-indicator">
          <div></div>
          <span>Scroll</span>
        </div>
      </section>

      <section className="scroll-section" id="scroll-section">
        <div className="tab-nav">
          <div className="tab-track">
            {toggleSlides.map((slide, index) => (
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
            {toggleSlides.map((slide, index) => (
              <div
                key={slide.tag}
                className={`text-slide ${activeSlide === index ? "active" : ""}`}
              >
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
            {toggleSlides.map((slide, index) => (
              <div
                key={slide.image}
                className={`image-slide ${activeSlide === index ? "active" : ""}`}
              >
                <img src={slide.image} alt={slide.badge} />
                <div className="image-overlay"></div>
                <div className="image-badge">{slide.badge}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="trigger-container">
          {toggleSlides.map((_, index) => (
            <div
              key={index}
              ref={(el) => (triggerRefs.current[index] = el)}
              className="trigger"
              data-index={index}
            ></div>
          ))}
        </div>
      </section>

      <section className="tools-section" id="tools">
        <div className="tools-header reveal">
          <p className="section-eyebrow">Tools & Technologies</p>
          <h2>Technical Skills & Professional Tools</h2>
        </div>

        <div className="tech-grid reveal">
          {techLogos.map((tool) => (
            <div className="tech-card" key={tool.name}>
              <img src={tool.src} alt={tool.name} />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-header reveal">
          <div>
            <p className="section-eyebrow">Selected Work</p>
            <h2>Featured Portfolio Projects</h2>
          </div>
        </div>

        <div className="project-grid-static reveal">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              key={project.title}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <span>{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <b>Open Project ↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-tags reveal">
          <span>Software Engineering</span>
          <span>Business Systems</span>
          <span>Database Management</span>
          <span>Data Analytics</span>
          <span>API Integration</span>
        </div>

        <h2 className="reveal">
          Let’s build
          <br />
          useful solutions.
        </h2>

        <button className="btn-primary reveal" onClick={() => setShowContact(true)}>
          Contact Me
        </button>
      </section>

      <footer className="footer">
        <p>Thank you</p>
        <span>© 2026 Aditya Kusuma — Software Developer Portfolio</span>
      </footer>

      {showContact && (
        <div className="contact-modal" onClick={() => setShowContact(false)}>
          <div className="contact-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="contact-close"
              onClick={() => setShowContact(false)}
            >
              ×
            </button>

            <p className="section-eyebrow">Contact Information</p>
            <h3>Software, Systems & Data Solutions.</h3>

            <p className="contact-desc">
              Feel free to contact me regarding software development,
              business systems, data analytics, technology projects,
              or professional collaboration opportunities.
            </p>

            <div className="contact-list">
              <a href="mailto:adityyakusuma0909@gmail.com">
                <span>Email</span>
                adityyakusuma0909@gmail.com
              </a>

              <a
                href="https://github.com/adityyakusuma"
                target="_blank"
                rel="noreferrer"
              >
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
    </main>
  );
}

export default App;