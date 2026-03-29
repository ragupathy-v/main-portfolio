import './Css/Home.css'

function Home() {
  return (
    <section id="home">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow-2"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <div className="dot"></div>
          Available for opportunities
        </div>

        <h1 className="hero-title">
          <span className="line-dim">Hi, I am</span>
          <span className="line-accent">Ragupathy</span>
        </h1>

        <p className="hero-subtitle">Fullstack &nbsp;·&nbsp; Web &nbsp;·&nbsp; Developer</p>

        <div className="hero-ctas">
          <a href="#project" className="btn-primary">
            View Projects <i className="fas fa-arrow-right"></i>
          </a>
          <a href="#about" className="btn-outline">
            About Me
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line"></div>
        Scroll
      </div>
    </section>
  )
}

export default Home
