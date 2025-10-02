import React from "react";

const projects = [
  {
    name: "E-Shop",
    desc: "Collaboratively developed a console-based E-Shop application in Java using Test-Driven Development (JUnit5).",
    url: "https://github.com/AmandaLyckenius/EShop",
  },
  {
    name: "Java B Project — Find the Thief",
    desc: "Built a text-based Java adventure demonstrating object-oriented design, game loop logic, and unit testing with JUnit.",
    url: "https://github.com/Floremila/java-b-project/tree/main",
  },
  {
    name: "Lagom Kul",
    desc: "Full-stack React application with a MongoDB jokes database, developed collaboratively using Agile methods (user stories, Kanban, sprints).",
    url: "https://github.com/BugBusters-G1/agprojekt",
  },
];

export default function App() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ margin: 0 }}>Florencia Méndez — Portfolio</h1>
        <p style={{ marginTop: 8, opacity: 0.8 }}>
          Java & Spring Boot · REST APIs · SQL & MongoDB · React & TypeScript · JUnit · Agile
        </p>
        <nav style={{ marginTop: 8, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="https://www.linkedin.com/in/florencia-méndez-quintana" target="_blank" rel="noreferrer">LinkedIn</a>
          <span style={{ opacity: 0.5 }}>•</span>
          <a href="mailto:flormequi@gmail.com">flormequi@gmail.com</a>
        </nav>
      </header>

      <section style={{ marginBottom: 28 }}>
        <h2>About me</h2>
        <p>
          I’m a Java developer student at Stockholm Tekniska Institut focusing on backend with Spring Boot and REST APIs,
          plus frontend with React and TypeScript. I work with SQL and MongoDB, write tests with JUnit, and enjoy Agile teamwork.
          I’m seeking an LIA internship to apply my training in real projects.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2>Projects</h2>
        <ul style={{ paddingLeft: 18 }}>
          {projects.map((p) => (
            <li key={p.name} style={{ marginBottom: 12 }}>
              <strong>{p.name}</strong> — {p.desc}{" "}
              <a href={p.url} target="_blank" rel="noreferrer">GitHub</a>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2>Tech stack</h2>
        <p>
          Java 17 · Spring Boot · REST · JUnit · SQL (MySQL/PostgreSQL) · MongoDB · Git/GitHub · React ·
          TypeScript · HTML/CSS · Agile (Scrum/Kanban)
        </p>
      </section>

      <footer style={{ marginTop: 40, opacity: 0.7 }}>
        <small>© {new Date().getFullYear()} Florencia Méndez · Stockholm</small>
      </footer>
    </main>
  );
}

