import React from 'react'
import './Css/Icons.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Icons() {
  return (
    <div  className='icons'>
      <a href='https://www.linkedin.com/in/ragupathyv'> <LinkedInIcon  fontSize='large'  sx={{color:'#0a58ca'}}/></a>
      <a href='https://github.com/ragupathy-v'> <GitHubIcon  fontSize='large' sx={{font:40,color:'black'}}/></a>
    </div>
  )
}

export default Icons 