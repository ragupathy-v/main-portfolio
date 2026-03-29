import RAGUPATHY_RESUME from '../image/RAGUPATHY_RESUME.pdf'
import photo from '../image/photo.png'
import './Css/About.css'
import Icons from './Icons'

function About() {
  return (
    <section id="about">
      <div className="about-layout">

        {/* Image column */}
        <div className="about-image-wrap">
          <div className="about-image-frame">
            <img src={photo} alt="Ragupathy" />
            <div className="about-image-initials">
              Ragupathy V
              <span>Fullstack Developer</span>
            </div>
          </div>
          <div className="about-corner"></div>
        </div>

        {/* Text column */}
        <div className="about-text">
          <div className="section-label">About me</div>
          <h2 className="section-title">
            Crafting <em>digital</em> experiences
          </h2>

          <p>
            Aspiring Fullstack Developer passionate about creating{' '}
            <strong>dynamic web experiences</strong>. Proficient in front-end
            technologies like HTML, CSS, JavaScript, and React.js for building
            responsive interfaces.
          </p>
          <p>
            Skilled in <strong>Python, Django, and SQL</strong> for robust
            back-end development and efficient database management. Dedicated to
            clean, maintainable code and continuous learning to deliver
            innovative, high-quality solutions.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-num">4+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">7+</div>
              <div className="stat-label">Skills</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">∞</div>
              <div className="stat-label">Curiosity</div>
            </div>
          </div>

          <div className="about-actions">
            <a
              href={RAGUPATHY_RESUME}
              download="RAGUPATHY_V_RESUME"
              className="btn-primary"
            >
              <i className="fas fa-download"></i> Download Resume
            </a>
            <Icons />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
