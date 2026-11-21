import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [projectFilter, setProjectFilter] = useState('All');
  const [expandedProjects, setExpandedProjects] = useState([]);
  const [activeSkill, setActiveSkill] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vanijuneja7@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nReply to: ${formData.email}`);
    window.location.href = `mailto:vanijuneja7@gmail.com?subject=${subject}&body=${body}`;
    setStatus('drafted');
  };

  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "JavaScript (ES6+)", "SQL", "Python"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      title: "Databases & Storage",
      skills: ["MongoDB", "SQL", "Firebase"]
    },
    {
      title: "Data & Machine Learning",
      skills: ["NumPy", "Pandas", "AIML Algorithms", "Recommendation Scoring"]
    },
    {
      title: "Core CS & Tools",
      skills: ["OOP", "Operating Systems", "Computer Networks", "Git", "GitHub", "VS Code", "Unix"]
    }
  ];

  const projects = [
    {
      title: "News Recommendation System",
      status: "Completed",
      type: "Full-Stack Project",
      github: "https://github.com/vanijuneja7",
      stack: ["React.js", "Node.js", "Express.js", "Firebase", "External News API"],
      summary: "A personalized news reading web app that learns from user interactions to deliver relevant articles without cognitive overload.",
      story: "I built this project to explore how real-time content recommendation engines work under the hood. The application pulls fresh articles through a news API and scores upcoming stories based on the categories and keywords a reader engages with most. User preferences and reading histories are kept synchronized via Firebase and an Express backend.",
      highlights: [
        "Fetches and categorizes real-time news articles through external REST endpoints.",
        "Implements content-based similarity matching to suggest stories aligned with reader interests.",
        "Integrated Firebase and an Express backend to reliably persist user bookmarks and read history."
      ]
    },
    {
      title: "FoodBridge - Surplus Food Donation Platform",
      status: "In Development",
      type: "Full-Stack Web App",
      github: "https://github.com/vanijuneja7",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      summary: "A platform bridging college hostel messes, banquets, and restaurants with nearby charities to coordinate timely surplus food rescue.",
      story: "Living in a university hostel, I frequently noticed edible leftover meals being discarded after dining hours while local food shelters in the vicinity faced daily shortages. FoodBridge connects food providers with verified NGOs. It implements role-based accounts, a matchmaking algorithm that accounts for food freshness and NGO capacity, and safeguards contact coordinates until an NGO confirms the pickup.",
      highlights: [
        "Role-based workflows tailored for donors (hostel messes, cafes, banquets) and verified NGOs.",
        "Matchmaking logic that factors in food quantity, time elapsed since cooking, and NGO daily serving capacity.",
        "Mutual privacy controls where direct phone numbers and street addresses unlock only once a claim is confirmed."
      ]
    },
    {
      title: "Food-to-Recipe Finder",
      status: "Completed",
      type: "Frontend Application",
      github: "https://github.com/vanijuneja7",
      stack: ["React.js", "JavaScript", "Recipe API", "CSS"],
      summary: "A practical cooking assistant that turns whatever random ingredients you have in your kitchen into delicious recipes.",
      story: "Built to solve a common everyday frustration: standing in front of an open fridge with a handful of vegetables wondering what to cook. Users enter the ingredients they currently have on hand, and the app queries an external recipe API to suggest matching dishes ranked by ingredient overlap.",
      highlights: [
        "Created an intuitive ingredient selection interface with instant dynamic filtering.",
        "Connected to external recipe APIs to return cooking instructions and matching ingredient counts."
      ]
    }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesStatus = projectFilter === 'All' || project.status === projectFilter;
    const matchesSkill = !activeSkill || project.stack.includes(activeSkill);
    return matchesStatus && matchesSkill;
  });

  const toggleProject = (title) => setExpandedProjects((current) =>
    current.includes(title) ? current.filter((item) => item !== title) : [...current, title]
  );

  return (
    <div className="site-wrapper">
      {/* Top Header */}
      <header className="site-header">
        <a href="#" className="header-brand">
          <span className="brand-initials">VJ</span>
          <div>
            <span className="brand-name">Vani Juneja</span>
            <span className="brand-sub">B.Tech CSE - Jaypee University</span>
          </div>
        </a>

        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-contact-btn">Get in Touch</a>
        </nav>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section" id="about">
          <div className="availability-pill">
            <span className="status-dot"></span>
            <span>Open to Software Engineering Opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm Vani Juneja.
          </h1>

          <p className="hero-intro">
            I am a Computer Science undergraduate at <strong>Jaypee University of Information Technology</strong> with an academic CGPA of <strong>9.14 / 10</strong>.
          </p>

          <p className="hero-description">
            I build full-stack web applications and backend services using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>C++</strong>. I enjoy writing clear, maintainable code and solving real-world challenges—whether that is coordinating surplus food distribution to local shelters or developing recommendation scoring algorithms.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a
              href="https://github.com/vanijuneja7"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              GitHub (vanijuneja7)
            </a>
            <button onClick={handleCopyEmail} className="btn btn-tertiary">
              {copied ? "Copied to clipboard" : "Copy email address"}
            </button>
          </div>

          <div className="quick-stats-row">
            <div className="stat-pill">
              <span className="stat-label">University</span>
              <span className="stat-val">Jaypee Univ (JUIT)</span>
            </div>
            <div className="stat-pill">
              <span className="stat-label">CGPA</span>
              <span className="stat-val">9.14 / 10</span>
            </div>
            <div className="stat-pill">
              <span className="stat-label">Focus</span>
              <span className="stat-val">Full-Stack &amp; Backend</span>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* Featured Projects */}
        <section className="section" id="projects">
          <div className="section-title-wrap">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Selected full-stack and web applications I have built.
            </p>
          </div>

          <div className="project-controls" aria-label="Filter projects">
            {['All', 'Completed', 'In Development'].map((filter) => (
              <button key={filter} type="button" className={`filter-chip ${projectFilter === filter ? 'selected' : ''}`} onClick={() => setProjectFilter(filter)} aria-pressed={projectFilter === filter}>{filter}</button>
            ))}
            {activeSkill && <button type="button" className="filter-chip clear-filter" onClick={() => setActiveSkill('')}>Clear “{activeSkill}” ×</button>}
            <span className="result-count">{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}</span>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((proj, idx) => (
              <article key={idx} className="project-card">
                <div className="project-card-header">
                  <div>
                    <span className="project-type">{proj.type}</span>
                    <h3 className="project-name">{proj.title}</h3>
                  </div>
                  <span className={`status-badge ${proj.status === 'Completed' ? 'badge-completed' : 'badge-progress'}`}>
                    {proj.status}
                  </span>
                </div>

                <p className="project-summary">{proj.summary}</p>
                <button type="button" className="details-toggle" onClick={() => toggleProject(proj.title)} aria-expanded={expandedProjects.includes(proj.title)}>
                  {expandedProjects.includes(proj.title) ? 'Hide project details' : 'Explore project'} <span aria-hidden="true">{expandedProjects.includes(proj.title) ? '−' : '+'}</span>
                </button>
                {expandedProjects.includes(proj.title) && <div className="project-details">
                  <p className="project-story">{proj.story}</p>
                  <div className="project-highlights">
                    <span className="highlights-label">Key Highlights:</span>
                    <ul>{proj.highlights.map((h, hIdx) => <li key={hIdx}>{h}</li>)}</ul>
                  </div>
                </div>}

                <div className="project-card-footer">
                  <div className="tech-tags-wrap">
                    {proj.stack.map((tech, tIdx) => (
                      <button type="button" key={tIdx} className={`tech-tag ${activeSkill === tech ? 'active' : ''}`} onClick={() => { setActiveSkill(activeSkill === tech ? '' : tech); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }} aria-pressed={activeSkill === tech}>{tech}</button>
                    ))}
                  </div>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-repo-link"
                  >
                    View Source on GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* Technical Skills */}
        <section className="section" id="skills">
          <div className="section-title-wrap">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Technologies, languages, and tools I use across development and academic coursework.
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="skill-box">
                <h3 className="skill-box-title">{cat.title}</h3>
                <div className="skill-chips">
                  {cat.skills.map((s, sIdx) => (
                    <button type="button" key={sIdx} className={`skill-chip ${activeSkill === s ? 'active' : ''}`} onClick={() => { setActiveSkill(activeSkill === s ? '' : s); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }} aria-pressed={activeSkill === s}>{s}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* Education & Experience */}
        <section className="section" id="experience">
          <div className="section-title-wrap">
            <h2 className="section-title">Education &amp; Experience</h2>
            <p className="section-subtitle">
              Academic foundation, software simulations, and community involvement.
            </p>
          </div>

          <div className="timeline-list">
            {/* Education */}
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">B.Tech in Computer Science and Engineering</h3>
                  <p className="timeline-org">Jaypee University of Information Technology</p>
                </div>
                <span className="timeline-period">2024 - Present</span>
              </div>
              <p className="timeline-body">
                Maintaining a cumulative grade point average of <strong>9.14 / 10</strong>. Coursework includes
                Object-Oriented Programming, Operating Systems, Computer Networks, and Data Structures &amp; Algorithms.
              </p>
            </div>

            {/* Virtual Experience */}
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Software Engineering Virtual Experience</h3>
                  <p className="timeline-org">JPMorgan Chase &amp; Co. (via Forage)</p>
                </div>
                <span className="timeline-period">July 2026</span>
              </div>
              <p className="timeline-body">
                Completed real-world software engineering job simulation covering financial data interface development,
                codebase analysis, testing pipelines, and enterprise engineering workflows.
              </p>
            </div>

            {/* Certification */}
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Developing Back-End Apps with Node.js and Express</h3>
                  <p className="timeline-org">IBM &amp; Coursera</p>
                </div>
                <span className="timeline-period">Verified Credential</span>
              </div>
              <p className="timeline-body">
                Comprehensive practical training in asynchronous server-side programming, Express routing,
                RESTful API design, middleware, and request validation.
              </p>
            </div>

            {/* Volunteering */}
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Student Volunteer - IEEE Student Activities</h3>
                  <p className="timeline-org">IEEE Student Branch, Jaypee University</p>
                </div>
                <span className="timeline-period">2024 - Present</span>
              </div>
              <p className="timeline-body">
                Actively volunteer to coordinate undergraduate technical workshops, hackathons, and collaborative coding sessions.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* Contact Section */}
        <section className="section" id="contact">
          <div className="section-title-wrap">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Interested in discussing software engineering internships, technical collaborations, or projects? Feel free to reach out.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <h3 className="contact-heading">Contact Details</h3>
              <p className="contact-desc">
                I am actively looking for software engineering internships and collaborative full-stack projects.
              </p>

              <div className="contact-lines">
                <div className="contact-entry">
                  <span className="entry-label">Direct Email</span>
                  <a href="mailto:vanijuneja7@gmail.com" className="entry-value">
                    vanijuneja7@gmail.com
                  </a>
                </div>
                <div className="contact-entry">
                  <span className="entry-label">GitHub</span>
                  <a
                    href="https://github.com/vanijuneja7"
                    target="_blank"
                    rel="noreferrer"
                    className="entry-value"
                  >
                    github.com/vanijuneja7
                  </a>
                </div>
                <div className="contact-entry">
                  <span className="entry-label">Location</span>
                  <span className="entry-plain">Himachal Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <h3 className="contact-heading">Send a Message</h3>

              {status === 'drafted' ? (
                <div className="sent-box">
                  <h4>Email draft opened</h4>
                  <p>Your message is ready in your email app. Send it there to reach Vani.</p>
                  <button onClick={() => setStatus('')} className="btn btn-secondary">
                    Edit message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Vani, I wanted to connect regarding..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <p className="footer-copy">
            © {new Date().getFullYear()} Vani Juneja. Built with React.
          </p>
          <div className="footer-links">
            <a href="mailto:vanijuneja7@gmail.com">Email</a>
            <a href="https://github.com/vanijuneja7" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#about">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
