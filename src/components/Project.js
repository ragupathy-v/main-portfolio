import './Css/project.css'

const projects = [
  {
    id: '1',
    emoji: '📝',
    gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    tag: 'Django',
    title: 'Blog Application',
    desc: 'Full-featured blog web app using Django and MySQL. Users can manage posts with responsive design and secure session-based authentication.',
    url: 'https://django-blog-webapp.onrender.com/',
  },
  {
    id: '2',
    emoji: '📰',
    gradient: 'linear-gradient(135deg,#0f3460,#533483)',
    tag: 'React',
    title: 'Article Summarizer',
    desc: 'Condenses lengthy articles into concise summaries using NLP. Ideal for quick comprehension by researchers, students, and professionals.',
    url: 'https://article-summarizer-react.netlify.app',
  },
  {
    id: '3',
    emoji: '✅',
    gradient: 'linear-gradient(135deg,#1b4332,#2d6a4f)',
    tag: 'React',
    title: 'TO-DO App',
    desc: 'User-friendly task management app. Features include adding, editing, and deleting tasks with a clean interface for seamless productivity.',
    url: 'https://todos-application-react.netlify.app',
  },
  {
    id: '4',
    emoji: '🚀',
    gradient: 'linear-gradient(135deg,#3d0066,#7b00d4)',
    tag: 'React + Bootstrap',
    title: 'Letsupgrade App',
    desc: 'Responsive UI with React.js and Bootstrap, enhancing cross-platform compatibility by 100%. Pixel-perfect design replication with 95%+ accuracy.',
    url: 'https://letsupgdrade.netlify.app/',
  },
]

function Project() {
  return (
    <section id="project">
      <div className="section-label">My work</div>
      <h2 className="section-title">Featured <em>Projects</em></h2>

      <div className="projects-grid">
        {projects.map(prj => (
          <div className="project-card" key={prj.id}>
            <div className="project-thumb">
              <div
                className="project-thumb-inner"
                style={{ background: prj.gradient }}
              >
                {prj.emoji}
              </div>
              <div className="project-tag">{prj.tag}</div>
            </div>
            <div className="project-body">
              <div className="project-title">{prj.title}</div>
              <p className="project-desc">{prj.desc}</p>
              <div className="project-footer">
                <a
                  href={prj.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project
