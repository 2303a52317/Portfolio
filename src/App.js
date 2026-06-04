function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "5px" }}>
            Varshitha Duggishetti
          </h1>

          <p
            style={{
              color: "#555",
              fontSize: "18px",
              marginTop: "0",
            }}
          >
            Computer Science Engineering Student
          </p>

          <p>
            📧 varshithad82@gmail.com | 📍 Warangal, Telangana
          </p>

          <p>
            <a
              href="https://github.com/2303a52317"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <hr />

        {/* About */}
        <h2>About Me</h2>
        <p>
          B.Tech Computer Science student at SR University with a
          CGPA of 9.6/10. Interested in Software Development,
          Full Stack Development, Artificial Intelligence and
          Problem Solving.
        </p>

        {/* Skills */}
        <h2>Technical Skills</h2>

        <ul>
          <li>
            <strong>Languages:</strong> Java, Python, JavaScript
          </li>
          <li>
            <strong>Frontend:</strong> ReactJS, HTML, CSS
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js, REST APIs
          </li>
          <li>
            <strong>Databases:</strong> SQL, MongoDB
          </li>
          <li>
            <strong>Tools:</strong> Git, GitHub, AWS
          </li>
        </ul>

        {/* Projects */}
        <h2>Projects</h2>

        <div
          style={{
            background: "#f8f9fa",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        >
          <h3>TaskFlow – ReactJS & Node.js Task Management Platform</h3>

          <p>
            Developed a full-stack task management web application
            using ReactJS, Node.js, Express.js and MongoDB.
            Implemented CRUD operations, REST APIs and task tracking.
          </p>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        >
          <h3>EcoSort AI</h3>

          <p>
            AI-powered waste classification system using Machine
            Learning and OpenCV for smart waste segregation and
            recycling assistance.
          </p>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        >
          <h3>Emotion-Based Music Recommendation System</h3>

          <p>
            Facial emotion recognition system using OpenCV and
            Reinforcement Learning concepts to provide personalized
            music recommendations.
          </p>
        </div>

        {/* Education */}
        <h2>Education</h2>

        <p>
          <strong>SR University</strong>
          <br />
          B.Tech Computer Science Engineering
          <br />
          CGPA: 9.6/10
          <br />
          2023 – 2027
        </p>

        {/* Achievements */}
        <h2>Achievements</h2>

        <ul>
          <li>🥈 2nd Prize – TechStrom 2025</li>
          <li>🥈 2nd Prize – Hardware Hackathon 2023</li>
        </ul>

        {/* Certifications */}
        <h2>Certifications</h2>

        <ul>
          <li>Azure AI-900</li>
          <li>CCNA: Introduction to Networks</li>
          <li>IBM Cloud Certificate</li>
        </ul>
      </div>
    </div>
  );
}

export default App;