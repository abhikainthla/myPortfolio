import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Auth from '../components/Auth'
import Dashboard from '../components/Dashboard'
import { Flex } from '@chakra-ui/react'

const AdminPage = () => {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    </>
  )
}

export default AdminPage