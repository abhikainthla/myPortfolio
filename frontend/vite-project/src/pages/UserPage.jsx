import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from './HomePage'
import SkillsPage from './SkillsPage'
import ProjectsPage from './ProjectsPage'
import ResumePage from './ResumePage'
import More from './More'
import Contact from './Contact'

const UserPage = () => {
  return (
    <>
     <Navbar/>
    <HomePage/>
    <SkillsPage/>
    <ProjectsPage/>
    <ResumePage/>
    <More/>
    <Contact/>
    </>
  )
}

export default UserPage