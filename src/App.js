
import React from "react";
import "./App.css";

const projects = [
  {
    title: "TaskFlow",
    category: "Full Stack Development",
    description:
      "A task management application that helps users organize, track, and manage daily tasks with an intuitive interface and CRUD functionality.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/2303a52317",
      },
    ],
  },
  {
    title: "EcoSort AI",
    category: "Artificial Intelligence",
    description:
      "An AI-powered waste classification project that uses machine learning and computer vision to identify waste categories and encourage better waste management.",
    tech: ["Python", "Machine Learning", "OpenCV"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/2303a52317",
      },
    ],
  },
  {
    title: "Emotion-Based Music Recommendation",
    category: "AI / Computer Vision",
    description:
      "A smart music recommendation concept that recognizes facial emotions and recommends music based on the detected emotional state.",
    tech: ["Python", "OpenCV", "AI", "Reinforcement Learning"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/2303a52317",
      },
    ],
  },
  {
    title: "Realm Runner",
    category: "3D Game Development",
    description:
      "A desert-themed 3D endless-runner game developed using Unity and C#. Players navigate through a desert environment, avoid obstacles, and experience an engaging gameplay adventure.",
    tech: ["Unity 3D", "C#", "Game Design"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/TifeDiceeyy/3D-Endless-Runner",
      },
      {
        label: "LinkedIn",
        url: "https://lnkd.in/p/dmXUCECx",
      },
    ],
  },
];

const skills = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "JavaScript"],
  },
  {
    title: "Web Development",
    items: ["React.js", "HTML", "CSS", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    items: ["SQL", "MongoDB"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "AWS", "OpenCV", "Unity 3D"],
  },
];

function App() {
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
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">HELLO, WORLD! I'M</p>

          <h1>
            Varshitha
            <br />
            <span>Duggishetti.</span>
          </h1>

          <h2>Computer Science Student & Developer</h2>

          <p className="hero-description">
            I enjoy building meaningful digital experiences through
            software development, artificial intelligence, and creative
            problem-solving.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore My Work ↗
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
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
            <a href="mailto:varshithad82@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle">
            <div className="visual-inner">
              <span className="visual-symbol">{"</>"}</span>
              <p>BUILD · CREATE · INNOVATE</p>
            </div>
          </div>
          <div className="floating-tag tag-one">AI & ML</div>
          <div className="floating-tag tag-two">Web Development</div>
          <div className="floating-tag tag-three">Game Design</div>
        </div>

        <div className="hero-bottom">
          <span>BASED IN WARANGAL, INDIA</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </header>

      <main>
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curious mind.
              <br />
              <span>Creative builder.</span>
            </h2>
          </div>

          <div className="about-content">
            <p>
              I'm a Computer Science and Engineering student at SR
              University with a passion for technology and innovation.
              I enjoy transforming ideas into practical solutions
              through coding and creative thinking.
            </p>

            <p>
              My interests include full-stack development, artificial
              intelligence, machine learning, and game development.
              I love learning new technologies, exploring challenges,
              and creating projects that make a difference.
            </p>

            <div className="about-stats">
              <div>
                <strong>9.6</strong>
                <span>CGPA / 10</span>
              </div>
              <div>
                <strong>04</strong>
                <span>PROJECTS</span>
              </div>
              <div>
                <strong>02</strong>
                <span>HACKATHON PRIZES</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / MY TOOLKIT</p>
            <h2>
              Skills & <span>Technologies.</span>
            </h2>
            <p className="section-description">
              Technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2>
              Things I've <span>built.</span>
            </h2>
            <p className="section-description">
              A collection of projects where technology meets creativity.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-number">
                    0{index + 1}
                  </span>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">04 / EDUCATION</p>
            <h2>
              My learning <span>journey.</span>
            </h2>
          </div>

          <div className="education-card">
            <div>
              <span className="education-year">2023 — 2027</span>
              <h3>SR University</h3>
              <p>Bachelor of Technology — Computer Science and Engineering</p>
              <span className="education-location">
                Warangal, Telangana, India
              </span>
            </div>

            <div className="education-score">
              <strong>9.6</strong>
              <span>CGPA / 10</span>
            </div>
          </div>
        </section>

        <section className="section achievements-section">
          <div className="section-heading">
            <p className="eyebrow">05 / MILESTONES</p>
            <h2>
              Achievements & <span>Certifications.</span>
            </h2>
          </div>

          <div className="achievement-grid">
            <div className="achievement-card">
              <span className="achievement-icon">✦</span>
              <h3>2nd Prize — TechStrom 2025</h3>
              <p>Recognized for innovation and technical skills.</p>
            </div>

            <div className="achievement-card">
              <span className="achievement-icon">✦</span>
              <h3>2nd Prize — Hardware Hackathon 2023</h3>
              <p>Achievement in a collaborative technical competition.</p>
            </div>
          </div>

          <div className="certifications">
            <h3>Certifications</h3>
            <ul>
              <li>Microsoft Azure AI-900</li>
              <li>Cisco CCNA — Introduction to Networks</li>
              <li>IBM Cloud Certificate</li>
            </ul>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">06 / LET'S CONNECT</p>
          <h2>
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p>
            I'm always open to learning, collaboration, and exciting
            opportunities.
          </p>

          <a
            href="mailto:varshithad82@gmail.com"
            className="btn btn-primary"
          >
            Say Hello ↗
          </a>

          <div className="contact-links">
            <a
              href="https://github.com/2303a52317"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:varshithad82@gmail.com">
              Email
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Varshitha Duggishetti</span>
        <span>Designed with curiosity and code.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
