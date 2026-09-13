import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Mail, Menu, X, Download,
  Code2, Database, BrainCircuit, Sparkles
} from "lucide-react";
import "./styles.css";

const skills = [
  { icon: Code2, title: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Responsive UI"] },
  { icon: Database, title: "Backend & Data", items: ["Node.js", "REST APIs", "SQL", "Database Design"] },
  { icon: BrainCircuit, title: "Exploring", items: ["Machine Learning", "AI in Education", "Data Analysis"] },
];

const projects = [
  {
    number: "01",
    title: "School ERP",
    tag: "Full Stack Web App",
    description: "A complete school management platform designed to bring students, teachers, attendance, fees, exams and administration into one system.",
    tech: ["React", "Node.js", "SQL"],
    featured: true,
  },
  {
    number: "02",
    title: "Coming Soon",
    tag: "Next Project",
    description: "A new practical project is currently being designed and built. Check back soon for the live case study.",
    tech: ["React", "API", "UI/UX"],
  },
  {
    number: "03",
    title: "AI + Education",
    tag: "Research Project",
    description: "Exploring practical applications of machine learning in education with a focus on useful, real-world outcomes.",
    tech: ["Python", "ML", "Research"],
  },
];

function App() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <div className="noise" />
      <nav className="nav">
        <div className="container nav-inner">
          <button className="logo" onClick={() => go("home")}>PT<span>.</span></button>
          <div className={`nav-links ${open ? "show" : ""}`}>
            {["home","about","skills","projects","contact"].map((id) =>
              <button key={id} onClick={() => go(id)}>{id}</button>
            )}
          </div>
          <a className="nav-cta" href="#contact" onClick={(e)=>{e.preventDefault();go("contact")}}>Let's talk <ArrowUpRight size={16}/></a>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Available for opportunities</div>
            <p className="kicker">HELLO, I'M</p>
            <h1>Prem<br/><em>Tandan.</em></h1>
            <p className="hero-text">
              Developer building practical web applications with a strong interest
              in <b>AI, education and meaningful technology.</b>
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("projects")}>View my work <ArrowUpRight size={18}/></button>
              <a className="secondary" href="/Prem-Tandan-Resume.pdf"><Download size={17}/> Resume</a>
            </div>
          </div>
          <div className="hero-art">
            <div className="orb orb1" /><div className="orb orb2" />
            <div className="code-card">
              <div className="window"><i/><i/><i/></div>
              <pre><span className="pink">const</span> developer = {"{"}{"\n"}  name: <span className="green">"Prem"</span>,{"\n"}  focus: <span className="green">"Building"</span>,{"\n"}  stack: [<span className="green">"React"</span>,{"\n"}          <span className="green">"Node"</span>],{"\n"}  mindset: <span className="green">"Learn → Build → Improve"</span>{"\n"}{"}"};</pre>
            </div>
            <div className="floating-badge"><Sparkles size={16}/> Building in public</div>
          </div>
        </section>

        <section className="marquee"><div>REACT • JAVASCRIPT • NODE • SQL • MACHINE LEARNING • EDUCATION • </div></section>

        <section id="about" className="section container">
          <div className="section-head"><span>01 / ABOUT</span><h2>More than<br/><em>just code.</em></h2></div>
          <div className="about-grid">
            <div className="about-big">I like turning <span>ideas</span><br/> into things people<br/> can actually use.</div>
            <div className="about-copy">
              <p>I'm a developer who learns by building. Instead of collecting tutorials, I prefer creating complete, practical products that solve real problems.</p>
              <p>My current focus is full-stack development, while exploring how AI and machine learning can create better experiences in education.</p>
              <div className="stats"><div><strong>01+</strong><span>Major project</span></div><div><strong>∞</strong><span>Curiosity</span></div><div><strong>24/7</strong><span>Learning mode</span></div></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section dark">
          <div className="container">
            <div className="section-head"><span>02 / SKILLS</span><h2>Tools I<br/><em>work with.</em></h2></div>
            <div className="skill-grid">
              {skills.map(({icon: Icon,title,items}) => <div className="skill-card" key={title}>
                <Icon size={28}/><h3>{title}</h3><div className="chips">{items.map(x=><span key={x}>{x}</span>)}</div>
              </div>)}
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-head projects-head"><span>03 / SELECTED WORK</span><h2>Things I've<br/><em>been building.</em></h2><p>Practical projects made to learn, solve problems and demonstrate real development skills.</p></div>
          <div className="project-list">
            {projects.map(p => <article className={`project ${p.featured ? "featured":""}`} key={p.number}>
              <div className="project-number">{p.number}</div>
              <div className="project-info"><span className="tag">{p.tag}</span><h3>{p.title}</h3><p>{p.description}</p><div className="chips">{p.tech.map(t=><span key={t}>{t}</span>)}</div></div>
              <button className="project-arrow" aria-label="Open project"><ArrowUpRight/></button>
            </article>)}
          </div>
        </section>

        <section className="statement">
          <div className="container statement-inner">
            <p>THE GOAL</p>
            <h2>Build useful things.<br/><em>Keep getting better.</em></h2>
          </div>
        </section>

        <section id="contact" className="section contact container">
          <div className="section-head"><span>04 / CONTACT</span><h2>Let's build<br/><em>something.</em></h2></div>
          <div className="contact-box">
            <div><p>Have a project, opportunity or idea?</p><a className="email" href="mailto:premtandanpt@gmail.com">premtandanpt@gmail.com <ArrowUpRight size={22}/></a></div>
            <div className="socials">
              <a href="#" aria-label="GitHub">GH</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="mailto:premtadnanpt@gmail.COM" aria-label="Email">
                <Mail/>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container footer-inner"><span>© 2026 Prem Tandan</span><span>Designed & built with React</span></div></footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
