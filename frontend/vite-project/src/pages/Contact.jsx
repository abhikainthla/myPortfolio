import { Box, Button, Flex, Heading, Link, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import useShowToast from '../hooks/useShowToast';

const Contact = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const showToast = useShowToast();
    const [isSmallerThan426] = useMediaQuery('(max-width: 426px)');


    const email = 'abhikainthla001@gmail.com'; 
    const socialLinks = [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishek-kainthla-321537191/', icon:<FaLinkedin size={50}/> }, 
      { name: 'GitHub', url: 'https://github.com/abhikainthla', icon: <FaGithub size={50}/> },
      { name: 'Instagram', url:'https://www.instagram.com/abhi._.kainthla/', icon: <FaInstagram size={50}/>}, 
    ];
  
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email);
        showToast('Email copied to clipboard');
  
    };
  return (
    <Flex flexDir={'column'} alignItems={'center'} p={isSmallerThan426 ? '10':'20'} gap={10} id='contact'>
        <Heading>Contact</Heading>
        <Flex flexDir={'column'} alignItems={'center'} gap={10}>

        <Flex >
            <Text fontSize={'3xl'}>Thankyou for visiting my portfolio</Text>

        </Flex>
        <Flex flexDir={'column'} gap={5} >
            <Text fontSize={'2xl'}>Like what you see? here is how I can be reached.</Text>
            <Flex flexDir={'column'} cursor={'pointer'} onClick={copyEmailToClipboard} className={colorMode === 'light' ? 'email-light' : 'email-dark' } bg={'blue.800'} color={'#ffffff'} borderRadius={5}>
                <Text textAlign={'center'} fontSize={'18px'} fontWeight={'bold'}>{email}</Text>
                <Text textAlign={'center'} fontSize={'18px'} >Copy Email</Text>
            </Flex>
        </Flex>
        <Flex flexDir={'column'} alignItems={'center'} gap={5}>
            <Text fontSize={isSmallerThan426 ? '1l' : '2xl'}>Hit Me Up  On Social Media!</Text>
            <Flex  gap={5}>
  {socialLinks.map((item, index) => (
    <Box key={index}>
      <Link href={item.url} target="_blank" rel="noopener noreferrer">
        {item.icon}
      </Link>
    </Box>
  ))}
</Flex>

        </Flex>
        </Flex>
    </Flex>
  )
}

export default Contact