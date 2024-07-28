import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
const Blogs = ({data}) => {
  return (
    <Flex className="blogs" position={'relative'} flexDir={'column'} justifyContent={'space-around'} gap={'20px'} w={'800px'} border={'1px solid #ccc'} overflow={'hidden'} borderRadius={5} onClick={() => window.open(data.link)}>
      <Flex className='overlay'><h2 className='text'>Find More</h2> <LuExternalLink size={25} /></Flex>
      <Flex alignItems={'center'}>
        <Flex className='blog-left' flexDir={'column'} flex={1} p={'20px'}>
          <Heading fontSize={'28px'} className='blog-heading'>{data.title}</Heading><hr/><br/>
          <Text className='blog-content'>{data.content}</Text>
        </Flex>
        <Flex className='blog-right' w={'200px'}>
          <Image className='blog-image' maxW={'150px'} h={'auto'} src={data.image} alt={data.title}/>
        </Flex>
      </Flex>
      <Flex className='blog-footer' justifyContent={'space-between'} alignItems={'center'} >
        <Flex className='tags' justifyContent={'space-between'} alignItems={'center'} p={'10px'}>
          {data.tag.map((item, index) => (
            <Flex className='blog-tagname' marginRight={'10px'} fontSize={'14px'} p={'5px'} bg={'blue.800'} color={'gray.100'} borderRadius={10} key={index}>{item}</Flex>
          ))}
        </Flex>
        <Flex className='blog-read' marginRight={'30px'}><span color="#666" >{data.readTime}</span></Flex>
      </Flex>
    </Flex>
  )
}

export default Blogs