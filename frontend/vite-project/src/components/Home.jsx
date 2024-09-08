import { Box, Button, Flex, Heading, Image, Link, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import React from 'react'
import ResumeDownloader from './ResumeDownloader';

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isSmallerThan426] = useMediaQuery('(max-width: 426px)');
  return (
    <Flex justifyContent={'center'} alignItems={'center'} gap={45} p={20} h={'100vh'} id='home'>
        <Flex flexDir={'column'} gap={20}>
            <Box gap={10}>
            <Text fontWeight={'bold'} >Hello World!</Text>
            <Heading size={isSmallerThan426 ? 'xl' : '2xl'} mt={4}>
                I'm a <br/>MERN Stack Developer
            </Heading>
            <Text fontWeight={'bold'}>Welcome to my Portfolio website</Text>
            </Box>
            <Box w={200}>
                <ResumeDownloader/>
            </Box>
            <Flex gap={5}>
                <Link href='https://github.com/abhikainthla'>
                <FaGithub size={35} />
                </Link>
            <Link href='https://www.linkedin.com/in/abhishek-kainthla-321537191/'>
            <FaLinkedin size={35}  />
            </Link>
            <Link href='https://www.instagram.com/abhi._.kainthla/'>
            <FaInstagram size={35}  />
            </Link>
            
            </Flex>
        </Flex>

        <Flex>
            <Image src='/portfolio-dribble.png' w={500} display={isSmallerThan426 ? 'none': 'block'} />
        </Flex>
        
    </Flex>
  )
}

export default Home