
import React from "react";
import "./App.css";

function App() {
  const projects = [
    {
      number: "01",
      category: "FULL STACK DEVELOPMENT",
      title: "TaskFlow",
      subtitle: "Task Management Platform",
      description:
        "A full-stack task management application built to organize tasks efficiently. Includes CRUD operations, REST APIs, and task tracking.",
      tech: ["ReactJS", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/2303a52317",
      icon: "⚡",
    },
    {
      number: "02",
      category: "ARTIFICIAL INTELLIGENCE",
      title: "EcoSort AI",
      subtitle: "Smart Waste Classification",
      description:
        "An AI-powered waste classification system using Machine Learning and OpenCV to support smart waste segregation and recycling.",
      tech: ["Python", "Machine Learning", "OpenCV"],
      link: "https://github.com/2303a52317",
      icon: "♻️",
    },
    {
      number: "03",
      category: "AI / COMPUTER VISION",
      title: "Emotion-Based Music",
      subtitle: "Music Recommendation System",
      description:
        "A facial emotion recognition project using OpenCV and reinforcement learning concepts to provide personalized music recommendations.",
      tech: ["Python", "OpenCV", "AI"],
      link: "https://github.com/2303a52317",
      icon: "🎧",
    },
    {
      number: "04",
      category: "3D GAME DEVELOPMENT",
      title: "Realm Runner",
      subtitle: "Desert-Themed 3D Endless Runner",
      description:
        "A 3D endless-runner game developed using Unity. Explore a desert-themed world, navigate through obstacles, and experience an immersive running adventure.",
      tech: ["Unity 3D", "C#", "Game Design"],
      link: "https://github.com/TifeDiceeyy/3D-Endless-Runner",
      icon: "🏜️",
      featured: true,
    },
  ];

  const skills = [
    ["Programming", "Java", "Python", "JavaScript"],
    ["Frontend", "ReactJS", "HTML", "CSS"],
    ["Backend", "Node.js", "Express.js", "REST APIs"],
    ["Database", "SQL", "MongoDB"],
    ["Tools", "Git", "GitHub", "AWS"],
    ["Game Development", "Unity 3D", "C#"],
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          V<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-contact">
            Contact ↗
          </a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              COMPUTER SCIENCE ENGINEERING STUDENT
            </div>

            <p className="eyebrow">HELLO, WORLD! I'M</p>

            <h1>
              Varshitha
              <br />
              <span>Duggishetti.</span>
            </h1>

            <p className="hero-description">
              I build digital experiences, explore artificial
              intelligence, and bring creative ideas to life
              through code and game development.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>
              <a href="#contact" className="secondary-button">
                Let's Connect
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/2303a52317"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="hero-circle">
              <span>✦</span>
              <strong>CREATIVE</strong>
              <strong>MINDS.</strong>
              <small>BUILDING THE FUTURE</small>
            </div>
            <div className="floating-card card-top">
              <span>💻</span> Developer
            </div>
            <div className="floating-card card-bottom">
              <span>🎮</span> Game Creator
            </div>
          </div>

          <div className="hero-bottom">
            <span>BASED IN WARANGAL, INDIA</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="section-label">01 / ABOUT ME</div>

          <div className="about-grid">
            <h2>
              Curious mind.
              <br />
              <span>Creative builder.</span>
            </h2>

            <div className="about-text">
              <p>
                I'm a B.Tech Computer Science student at SR University
                with a CGPA of 9.6/10. I enjoy transforming ideas into
                practical digital solutions.
              </p>
              <p>
                My interests include software development, full-stack
                engineering, artificial intelligence, problem solving,
                and 3D game development.
              </p>

              <div className="stats">
                <div>
                  <strong>9.6</strong>
                  <span>CGPA / 10</span>
                </div>
                <div>
                  <strong>04</strong>
                  <span>PROJECTS</span>
                </div>
                <div>
                  <strong>2027</strong>
                  <span>GRADUATION</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <div className="section-label">02 / MY TOOLKIT</div>
          <h2 className="section-title">
            Skills & <span>Technologies.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((group, index) => (
              <div className="skill-card" key={group[0]}>
                <span className="skill-number">
                  0{index + 1}
                </span>
                <h3>{group[0]}</h3>
                <div className="skill-tags">
                  {group.slice(1).map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="section-label">03 / SELECTED WORK</div>

          <div className="projects-heading">
            <h2 className="section-title">
              Things I've <span>Built.</span>
            </h2>
            <p>
              A collection of projects where technology meets
              creativity and problem solving.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${
                  project.featured ? "featured-project" : ""
                }`}
                key={project.number}
              >
                <div className="project-top">
                  <span>{project.number} / {project.category}</span>
                  <span className="project-icon">{project.icon}</span>
                </div>

                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education-section" id="education">
          <div className="section-label">04 / EDUCATION & MILESTONES</div>
          <h2 className="section-title">
            My <span>Journey.</span>
          </h2>

          <div className="journey-card">
            <div className="journey-date">2023 — 2027</div>
            <div>
              <h3>SR University</h3>
              <p>B.Tech — Computer Science Engineering</p>
              <span className="highlight-text">CGPA: 9.6 / 10</span>
            </div>
          </div>

          <h3 className="subheading">Achievements</h3>
          <div className="achievement-grid">
            <div className="achievement-card">
              <span>🥈</span>
              <div>
                <strong>2nd Prize — TechStrom 2025</strong>
                <p>Recognized for technical innovation.</p>
              </div>
            </div>
            <div className="achievement-card">
              <span>🥈</span>
              <div>
                <strong>2nd Prize — Hardware Hackathon 2023</strong>
                <p>Achievement in a hardware hackathon.</p>
              </div>
            </div>
          </div>

          <h3 className="subheading">Certifications</h3>
          <div className="certifications">
            <span>Microsoft Azure AI-900</span>
            <span>CCNA: Introduction to Networks</span>
            <span>IBM Cloud Certificate</span>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="section-label">05 / GET IN TOUCH</div>
          <h2>
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>
          <p>
            I'm always interested in learning, collaborating,
            and exploring exciting opportunities.
          </p>

          <a
            href="mailto:varshithad82@gmail.com"
            className="primary-button"
          >
            Say Hello ↗
          </a>

          <div className="contact-details">
            <a href="mailto:varshithad82@gmail.com">
              varshithad82@gmail.com
            </a>
            <a
              href="https://github.com/2303a52317"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">V<span>.</span></a>
        <p>Designed & built by Varshitha Duggishetti © 2026</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
