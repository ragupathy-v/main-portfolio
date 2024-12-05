
import './Css/Skills.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skills() {

  const skills = [
    {
      id: '1',
      skill: 'HTML',
      percentage: '100'
    },
    {
      id: '2',
      skill: 'CSS',
      percentage: '100'
    },
    {
      id: '7',
      skill: 'Javascript',
      percentage: '80'
    },
    {
      id: '8',
      skill: 'Bootstrap',
      percentage: '100'
    },
    {
      id: '3',
      skill: 'React.js',
      percentage: '80'
    },
    {
      id: '4',
      skill: 'Django',
      percentage: '80'
    },
    {
      id: '5',
      skill: 'sql',
      percentage: '80'
    },
    {
      id:'6',
      skill:'Git and Github',
      percentage:'60'
    }
  ]
  return (
    <>
      <section id='skills'>

        <h1 className='skill-head'>Skills</h1>
        <div className='skills-div'>
          {skills.map((skill) => (
            <div key={skill.id} className='progessbar'>
              <label className='lable'>{skill.skill} <span className='percentage-tag'>{skill.percentage}%</span></label>
              <ProgressBar now={skill.percentage} variant='custom-color' />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Skills