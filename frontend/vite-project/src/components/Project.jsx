import { Flex, Box, Image, Link, Text, useColorMode, Button } from '@chakra-ui/react';
import { GoLinkExternal } from "react-icons/go";
import React, { useState } from 'react';

const Project = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription = props.description.length > 80 
  ? props.description.substring(0, 80) + '...' 
  : props.description;

const displayDescription = isExpanded ? props.description : truncatedDescription;

  return (
    <Flex className={colorMode ==='dark' ? 'dark-card':'project-card'}  flexDir={'column'}  borderRadius={10} overflow={'hidden'} position={'relative'} gap={5} w={80}>
      <Link href={props.link} textDecor={'none'} isExternal w="100%" h="100%" className='link'>
        <Box w="100%" h={'140px'} overflow={'hidden'}>
          <Image src={props.image} alt={props.title} width="100%" h={'auto'} />
        </Box>
        <Box w="100%" paddingLeft={5} paddingRight={5} paddingBottom={5} h={'140px'} overflow={'hidden'} >
          <Text fontSize={'1.23rem'} fontWeight={'bold'}>{props.title}</Text>
          <Text>{displayDescription}</Text>
          </Box>
        <Flex className='overlay' justifyContent={'center'} alignItems={'center'}>
          <Text className='text'>Visit Link</Text><GoLinkExternal size={25} color='#ffffff' />
        </Flex>
      </Link>
    </Flex>
  );
};

export default Project;

const styles = {
  projectCard: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    position: 'relative',
    '&:hover .overlay': {
      opacity: 0.8,
    },
    '&:hover .text': {
      opacity: 1,
      textDecoration: 'underline',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: '24px',
    fontWeight: 700,
    cursor: 'pointer',
    color: 'white',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
};

