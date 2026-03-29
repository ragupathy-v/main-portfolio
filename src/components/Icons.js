import './Css/Icons.css'

function Icons() {
  return (
    <div className="about-socials">
      <a
        href="https://www.linkedin.com/in/ragupathyv"
        target="_blank"
        rel="noreferrer"
        className="social-btn"
        title="LinkedIn"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href="https://github.com/ragupathy-v"
        target="_blank"
        rel="noreferrer"
        className="social-btn"
        title="GitHub"
      >
        <i className="fab fa-github"></i>
      </a>
    </div>
  )
}

export default Icons
