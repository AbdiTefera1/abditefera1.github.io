import React from 'react'
import smli from '../../images/smartLibrary-home.png'
import portfolio from '../../images/Portfolio.png'
import focuswku from '../../images/focuswku.png'
import Card from '../common/Card'
const Project = () => {
    const projects = [
        {title: 'Smart Teenagers Book Library', picture: smli, discription: 'This is the project developed by reactjs', link: 'https://github.com/AbdiTefera1/smart-teenagers-library'},
        {title: 'Portfolio', picture: portfolio, discription: 'This is the project developed by reactjs', link: 'https://github.com/AbdiTefera1/portfolio'},
        {title: 'FocusWKU', picture: focuswku, discription: 'This is the project developed by MERN stack', link:'https://focus-wku-frontend-56hvv9dib-abdis-projects-7f21096c.vercel.app/'},
    ]
  return (
    <section id='projects' className='block'>
        <header className='block__header'>
        <h2>Projects</h2>
        </header>
    <div className='container'>
        
    <div className='grid grid--1x3 grid--1x2' style={{gap: "5rem"}}>
        {projects.map((project) => (
            <Card title={project.title} link={project.link} picture={project.picture} discription={project.discription}/>
        ))}
    </div>
    </div>
    </section>
  )
}

export default Project