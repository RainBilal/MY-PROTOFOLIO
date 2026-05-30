import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import profileImg from './assets/foto-profil.JPG';
import cert1 from './assets/cert-dicoding1.jpg'; 
import cert2 from './assets/cert-dicoding2.jpg';
import cert3 from './assets/cert-dicoding3.jpg';

import kaiImg from './assets/kai-project.png'; 
import regionalImg from './assets/regional-portal.png';

function App() {
  const skillData = {
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML & CSS', 'React'],
    tools: ['Bootstrap', 'Tailwind CSS', 'Git & GitHub', 'VS Code', 'Figma'],
    soft: ['Problem Solving', 'Team Collaboration', 'Self-Learning'],
    proficiency: [
      { name: 'Laravel / PHP', pct: 85 },
      { name: 'MySQL / Database', pct: 80 },
      { name: 'HTML & CSS', pct: 90 },
      { name: 'JavaScript', pct: 70 },
      { name: 'Tailwind CSS', pct: 80 },
      { name: 'React', pct: 55 },
    ],
  };

  const projectList = [
    { 
      title: "Project KAI Ticket Simulation", 
      desc: "Sistem informasi simulasi dan pemesanan tiket kereta api berbasis web interaktif. Dilengkapi dengan fitur unduh file manual book langsung saat melihat detail informasi perjalanan.", 
      tags: ["Laravel", "MySQL", "Bootstrap"],
      link: "https://github.com/RainBilal/PROJECT-MANDIRI-DAFFIANSYAH-RAIN-BILAL.git",
      imageUrl: kaiImg
    },
    { 
      title: "Indonesian Regional Portal", 
      desc: "Web portal pintar untuk menjelajahi wilayah Indonesia. Memiliki fitur pencarian instan data kode pos berdasarkan filter hirarki mulai dari provinsi, kota/kabupaten, hingga tingkat kelurahan.", 
      tags: ["Laravel", "MySQL", "Tailwind CSS"],
      link: "https://github.com/RainBilal/PROJECT-REGIONAL_INDONEISIA.git",
      imageUrl: regionalImg
    },
  ];

  const certificateList = [
    {
      title: "Introduction to Financial Literacy",
      issuer: "DICODING",
      date: "2026",
      image: cert1,
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "DICODING",
      date: "2025",
      image: cert2,
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "DICODING",
      date: "2024",
      image: cert3,
    }
  ];

  return (
    <div className="portfolio-app">
      <Navbar />

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-layout">
            
            <div className="hero-main-content">
              <div className="hero-eyebrow">PPLG · SMK Wikrama Bogor</div>
              <h1 className="hero-statement">
                Building refined<br />
                <em>web systems</em><br />
                with <span>clean code.</span>
              </h1>
              <p className="hero-description">
                Siswa PPLG di SMK Wikrama Bogor yang berfokus pada pengembangan aplikasi web berkinerja tinggi, struktur kode modular, dan pengelolaan basis data yang optimal.
              </p>
              <div className="hero-action-group">
                <a href="#projects" className="action-btn btn-filled">Explore Works</a>
                <a href="#contact" className="action-btn btn-text">Let's Talk →</a>
              </div>
            </div>

            <div className="hero-visual-content">
              <div className="visual-wrapper">
                <img 
                  src={profileImg} 
                  alt="Daffiansyah Rain Bilal" 
                  className="visual-img"
                />
                <div className="decorative-shape"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-eyebrow">What I Know</div>
            <h2>Skills & Expertise</h2>
            <p>Teknologi, tools, dan kemampuan yang saya gunakan untuk membangun solusi web yang solid.</p>
          </div>

          <div className="skills-layout">
            <div className="skill-categories">
              <div>
                <div className="skill-group-label">Tech Stack</div>
                <div className="skill-pills">
                  {skillData.tech.map((s, i) => (
                    <span key={i} className="skill-pill pill-tech">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="skill-group-label">Tools & Design</div>
                <div className="skill-pills">
                  {skillData.tools.map((s, i) => (
                    <span key={i} className="skill-pill pill-tool">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="skill-group-label">Soft Skills</div>
                <div className="skill-pills">
                  {skillData.soft.map((s, i) => (
                    <span key={i} className="skill-pill pill-soft">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="skill-group-label">Proficiency</div>
              <div className="proficiency-list">
                {skillData.proficiency.map((item, i) => (
                  <div key={i}>
                    <div className="prof-header">
                      <span className="prof-name">{item.name}</span>
                      <span className="prof-pct">{item.pct}%</span>
                    </div>
                    <div className="prof-track">
                      <div className="prof-fill" style={{ width: `${item.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-eyebrow">Selected Work</div>
            <h2>Featured Projects</h2>
            <p>Daftar sistem dan aplikasi pilihan yang telah saya rancang dan kembangkan.</p>
          </div>
          
          <div className="projects-list-layout">
            {projectList.map((project, index) => {
              const isEven = index % 2 === 0;
              const shortCode = project.title.replace("Project ", "").substring(0, 3).toUpperCase();
              
              return (
                <a 
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`row-project-item ${isEven ? 'row-normal' : 'row-reverse'}`}
                >
                  <div className="row-project-visual">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="project-image" 
                      />
                    ) : (
                      <div className="visual-placeholder">
                        <span>{shortCode}</span>
                      </div>
                    )}
                    <div className="visual-overlay">
                      <span className="overlay-text">View on GitHub ↗</span>
                    </div>
                  </div>
                  
                  <div className="row-project-details">
                    <span className="project-number">0{index + 1}.</span>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div className="project-footer-meta">
                      <div className="project-tags-list">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="tag-pill">{tag}</span>
                        ))}
                      </div>
                      <span className="view-doc-link">View Docs →</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="certificates-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-eyebrow">Credentials</div>
            <h2>Certifications</h2>
            <p>Sertifikasi resmi dan validasi keahlian teknis yang telah saya raih.</p>
          </div>

          <div className="cert-showcase-grid">
            {certificateList.map((cert, index) => (
              <a 
                key={index}
                rel="noopener noreferrer"
                className="cert-premium-card"
              >
                <div className="cert-frame">
                  <img src={cert.image} alt={cert.title} className="cert-display-img" />
                </div>
                <div className="cert-caption">
                  <div className="cert-meta-row">
                    <span className="cert-label-badge">{cert.date}</span>
                    <span className="cert-issuer-text">{cert.issuer}</span>
                  </div>
                  <h3 className="cert-title-text">{cert.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="compact-container">
          <div className="banner-layout">
            <div className="banner-text">
              <h3>Have a project in mind?</h3>
              <p>Mari berkolaborasi untuk membangun sistem web yang responsif, modular, dan optimal.</p>
            </div>
            <div className="banner-action">
              <a 
                href="https://wa.me/6281250211317" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="action-btn btn-accent"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="simple-footer">
        <p>&copy; {new Date().getFullYear()} Daffiansyah Rain Bilal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;