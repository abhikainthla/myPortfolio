import { Box, Button, Flex, Heading, Image, Link, Text, useColorMode } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import React from 'react'

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={'center'} alignItems={'center'} gap={45} p={20}>
        <Flex flexDir={'column'} gap={20}>
            <Box>
            <Text fontWeight={'bold'} >Hello World!</Text>
            <Heading size={'2xl'}>
                I'm a <br/>MERN Stack Developer
            </Heading>
            <Text fontWeight={'bold'}>Welcome to my Portfolio website</Text>
            </Box>
            <Box>
                <Button className={colorMode === 'light' ? 'home-button-light' : 'home-button-dark' } bg={'blue.800'} color={'#ffffff'}>Find more about me</Button>
            </Box>
            <Flex gap={5}>
                <Link>
                <FaGithub size={35} />
                </Link>
            <Link>
            <FaLinkedin size={35}  />
            </Link>
            <Link>
            <FaInstagram size={35}  />
            </Link>
            
            </Flex>
        </Flex>

        <Flex>
            <Image src='/portfolio-dribble.png' w={500} />
        </Flex>
        
    </Flex>
  )
}

export default Home