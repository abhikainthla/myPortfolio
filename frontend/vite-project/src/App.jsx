
import { Container, Flex } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage'
import More from './pages/More'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'
import SkillsPage from './pages/SkillsPage'

function App() {

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

export default App
