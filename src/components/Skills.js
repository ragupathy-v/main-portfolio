import './Css/Skills.css'

const skills = [
  { id: '1', icon: '🟨', name: 'JavaScript' },
  { id: '2', icon: '⚛️',  name: 'React.js'   },
  { id: '3', icon: '🐍', name: 'Python'      },
  { id: '4', icon: '🎸', name: 'Django'      },
  { id: '5', icon: '🐬', name: 'MySQL'       },
  { id: '6', icon: '🎨', name: 'CSS'         },
  { id: '7', icon: '🌐', name: 'HTML'        },
]

function Skills() {
  return (
    <section id="skills">
      <div className="section-label">What I know</div>
      <h2 className="section-title">Tech <em>Stack</em></h2>

      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-card" key={skill.id}>
            <span className="skill-icon">{skill.icon}</span>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
