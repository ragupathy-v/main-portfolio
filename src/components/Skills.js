
import './Css/Skills.css'

//import images
import python from '../image/python.svg'
import react from '../image/react.svg'
import javascript from '../image/javascript.svg'
import django from '../image/django.svg'
import mysql from '../image/mysql.svg'
import html from '../image/html.svg'
import css from '../image/css.svg'
//mui components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function Skills() {

  const image = [
    
  {
    id: '1',
    image: javascript,
    name: 'Javascript'
  },
    {
      id: '2',
      image: react,
      name: 'React.js'
    },
    {
    id: '3',
    image: python,
    name: 'Python'
  },
  {
    id: '4',
    image: django,
    name: 'Django'
  },
  {
    id: '5',
    image: mysql,
    name: 'Mysql'
  },
  {
    id: '6',
    image:css,
    name: 'Css'
  },
  {
    id: '7',
    image: html,
    name: 'Html'
  },


  ]
  return (
    <>
      <section id='skills'>
      <h1 className='skill-head'>Skills</h1>
        <div className='skills-div'>
          {image.map(((image)=>
           <Card key={image.id} sx={{ maxWidth: 345, padding: 3, margin:5, backgroundColor: '#e9ecef' }}>
           <CardMedia
             sx={{ height: 100, width: 112, margin: '7px' }}
             image={image.image}
             title="python"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div"
               sx={{ textAlign: 'center', color: '#111111', fontFamily: 'serif' }}
             >
               {image.name}
             </Typography>
           </CardContent>
         </Card>
          ))}
         
        </div>
      </section>
    </>
  )
}

export default Skills