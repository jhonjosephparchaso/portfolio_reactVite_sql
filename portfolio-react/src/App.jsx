import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from './features/profile/profileSlice'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const { data: profile, loading, error } = useSelector((state) => state.profile)

  useEffect(() => {
    dispatch(fetchProfile())
  }, [dispatch])
  return (
    <>
      <header>
        <h2>jhonjosephparchaso</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image">
          <img src="/pp.jpg" alt="Jhon Joseph Parchaso" />
        </div>

        <div className="hero-content">
          <h1>Hi, I’m Jhon Joseph Parchaso</h1>
          <h3>IT Graduate | Web Developer | Tech Support</h3>
          <p>
            I am an IT graduate with a strong interest in web development,
            technical support, and system-related tasks. I enjoy building
            user-friendly systems, solving technical problems, and continuously
            learning new technologies.
          </p>

          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </section>

      <section className="about" id="about">
        <h2 className="section-title">About Me</h2>
        <p>
          I have experience supporting administrative and technical tasks,
          including data entry, online research, file management, system guidance,
          and handling support requests. I also have a background in web development
          through academic projects, especially in building CRUD-based systems with
          front-end, back-end, and database integration.
        </p>
      </section>

      <section className="skills" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          <div className="card">
            <h3>Web Development</h3>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>JavaScript</li>
              <li>React Basics</li>
              <li>PHP</li>
              <li>AJAX</li>
              <li>WordPress Basics</li>
            </ul>
          </div>

          <div className="card">
            <h3>Database & Tools</h3>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Git & GitHub</li>
              <li>npm</li>
              <li>VS Code</li>
            </ul>
          </div>

          <div className="card">
            <h3>Technical Support</h3>
            <ul>
              <li>Client Onboarding Support</li>
              <li>System Guidance</li>
              <li>Manual Testing</li>
              <li>Issue Tracking</li>
              <li>Documentation</li>
            </ul>
          </div>

          <div className="card">
            <h3>Administrative Skills</h3>
            <ul>
              <li>Data Entry</li>
              <li>Email & Calendar Management</li>
              <li>Google Workspace</li>
              <li>Microsoft Office</li>
              <li>Online Research</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Smile-Ify Dental Clinic System</h3>
            <p>
              Led the development of a responsive web application for appointment
              booking, patient records, and dental history management while managing
              team tasks and project progress.
            </p>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="project-card">
            <h3>CRUD Web Application</h3>
            <p>
              Developed a CRUD-based system with front-end design, back-end
              functionality, and database integration for managing records efficiently.
            </p>
            <div>
              <span>PHP</span>
              <span>MySQL</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Android CRUD Application</h3>
            <p>
              Created a basic Android application using Java, XML, and SQLite with
              create, read, update, and delete functionality.
            </p>
            <div>
              <span>Java</span>
              <span>XML</span>
              <span>SQLite</span>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h3>Technical Support / Internship Experience</h3>
            <p>
              Assisted in client onboarding, system guidance, support ticket handling,
              data entry, document generation, and coordination with team members to
              ensure timely issue resolution and client satisfaction.
            </p>
          </div>

          <div className="timeline-item">
            <h3>Academic Capstone Project</h3>
            <p>
              Led and contributed to a major web development project that strengthened
              my confidence in building systems, managing tasks, and solving real-world
              technical problems while continuing to learn and improve.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-card">
          {profile && (
            <>
              <p><strong>Name:</strong> {profile.full_name}</p>
              <p><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
              <p><strong>Phone:</strong> <a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
              <p><strong>Location:</strong> {profile.location}</p>
              <p><strong>Portfolio:</strong> <a href={profile.portfolio_link} target="_blank">View Portfolio</a></p>
              <p><strong>GitHub:</strong> <a href={profile.github_link} target="_blank">View GitHub</a></p>
            </>
          )}
        </div>
      </section>

      <footer>
        <p>© 2026 Jhon Joseph Parchaso. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App