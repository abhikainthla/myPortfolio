
import { Container, Flex } from '@chakra-ui/react'
import './App.css'
import UserPage from './pages/UserPage'
import { Route, Routes } from 'react-router-dom'
import AdminPage from './pages/AdminPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <UserPage/>} />
      <Route path="/admin" element={ <AdminPage/>} />
    </Routes>
  
    </>
  )
}

export default App
