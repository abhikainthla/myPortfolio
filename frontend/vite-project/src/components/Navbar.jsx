import { Flex, Link, Text, useColorMode } from '@chakra-ui/react'
import { AiOutlineCode } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import React from 'react'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems={'center'} justifyContent={'center'} gap='20' p={10} >
        <Flex>
        <Text fontSize="2xl" fontWeight="bold" ml="2" color={"gray.light"}>
        <AiOutlineCode size={35} />
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color={"gray.light"} ml="2">
        Abhishek Kainthla
        </Text>
        </Flex>
        <Flex gap={5}>
            <Link  fontWeight="bold" color={"gray.light"} ml="2">
                Home
            </Link>
            <Link  fontWeight="bold" color={"gray.light"} ml="2">
                Skills
            </Link>
            <Link  fontWeight="bold" color={"gray.light"} ml="2">
                Projects
            </Link>
            <Link  fontWeight="bold" color={"gray.light"} ml="2">
                Resume
            </Link>
            <Link  fontWeight="bold" color={"gray.light"} ml="2">
                More
            </Link>
            <Link  fontWeight="bold" color={"gray.light"} ml="2">
                Contact
            </Link>
            <Flex justifySelf={'flex-end'} alignSelf={'center'} marginLeft={10} cursor={'pointer'}
            onClick={toggleColorMode}>
                {colorMode === 'light' ? <MdLightMode /> : <MdDarkMode />}
            </Flex>
        </Flex>
        
    </Flex>
  )
}

export default Navbar