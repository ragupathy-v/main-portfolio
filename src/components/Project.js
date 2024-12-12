import React from 'react'
import './Css/project.css'


import Card from 'react-bootstrap/Card';

import article from '../image/article.png'
import todoimg from '../image/todoimg.png'

function Project() {
  const projects=[
    {
      id:'1',
      title:'Article summarizer',
      content:'Created a tool to condense lengthy articles into concise summaries, retaining key information using natural language processing. Ideal for quick understanding by researchers, students, and professionals.',
      siteurl:'https://article-summarizer-react.netlify.app',
      image:article
      
    },
    {
      id:'2',
      title:'TO-DO App',
      content:'Developed a user-friendly to-do list application to help users manage tasks efficiently. Features include adding, editing, and deleting tasks, with a clean interface for seamless organization and productivity.',
      siteurl:'https://todos-application-react.netlify.app',
      image:todoimg
    }
  ]


  return (
    <section id='project'>
      <h1 className='project-head'>Project</h1>
      <div className='projects-div'>
        {projects.map((prj)=>(
             <Card key={prj.id} style={{ width: '18rem' }}>
             <Card.Img variant="top" src={prj.image} />
             <Card.Body>
               <Card.Title as={'h2'}>{prj.title}</Card.Title>
               <Card.Text>
                {prj.content}
               </Card.Text>
               <a className='download' href={prj.siteurl}> view project </a>
             </Card.Body>
           </Card>
        ))}
       
      </div>
    </section>

  )
}

export default Project