import { Flex, Heading, Image, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
const Skills = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isSmallerThan426] = useMediaQuery('(max-width: 426px)');

  return (
    <Flex justifyContent={'center'} flexDir={'column'} alignItems={'center'} gap={7} p={20} id='skills'>
<div className='hexagon' >
<Image src='/profile-pic.jpeg' className='profile-pic' />
</div>
<Flex alignItems={'center'}>
<IoIosArrowForward size={50} />
<Heading >Abhishek Kainthla</Heading>
</Flex>
<Text w={isSmallerThan426 ? 'auto': '700'}>
    I am a Full Stack Developer with a passion for building beautiful and functional websites and applications. I
    have a strong background in web development and have experience working with a variety of technologies and
    frameworks. I am always looking for new challenges and opportunities to learn and grow as a developer.
</Text>
<Heading>Skills</Heading>
<Flex flexWrap={'wrap'} gap={20} alignItems={'center'} justifyContent={'center'}>
    <Flex flexDir={'column'} alignItems={'center'} gap={3}>
    <FaReact size={75} color='#28a9e1'/>
    <Text fontWeight={'bold'}>React.js</Text>
    </Flex>
<Flex flexDir={'column'} alignItems={'center'} gap={3}>
<IoLogoJavascript size={75} color='#e7a021' />
<Text fontWeight={'bold'}>JavaScript</Text>
</Flex>
<Flex flexDir={'column'} alignItems={'center'} gap={3}>
<FaHtml5 size={75} color='#e44f25' />
<Text fontWeight={'bold'}>HTML</Text>
</Flex>
<Flex flexDir={'column'} alignItems={'center'} gap={3}>
<FaCss3Alt size={75} color='#0c73b8' />
<Text fontWeight={'bold'}>CSS</Text>
</Flex>
<Flex flexDir={'column'} alignItems={'center'} gap={3}>
<FaNodeJs size={75} color='#419d5f' />
<Text fontWeight={'bold'}>Node.js</Text>
</Flex>
<Flex flexDir={'column'} alignItems={'center'} gap={3}>
<BiLogoMongodb size={75} color='#51aa42' />
<Text fontWeight={'bold'}>MongoDB</Text>
</Flex>
</Flex>
    </Flex>
  )
}

export default Skills