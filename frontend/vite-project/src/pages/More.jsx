import { Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel';
import Blogs from '../components/Blogs';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const More = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isSmallerThan426] = useMediaQuery('(max-width: 426px)');
  const blogs = [
    {
      title: "Enhancing React App Performance With “useCallback” Hook.",
      content: "In React, the useCallback hook is used to memoize callback functions, especially in scenarios where passing new callback functions to child components could lead to unnecessary re-renders.",
      link: "https://medium.com/@abhikainthla001/enhancing-react-app-performance-with-usecallback-hook-6020892d8c47",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*p8YqNTTqGL3ZVAbTCF40iA.png",
      tag:  ["React", "useCallback"],
      readTime: "5 min read",
    },
    {
      title: "Mastering Performance Optimization with useMemo Hook in React",
      content: "In one line, useMemo can be defined as a tool in React used to memoize the result of a function, preventing unnecessary recomputation of that function result on re-renders.",
      link: "https://medium.com/@abhikainthla001/mastering-performance-optimization-with-usememo-hook-in-react-f33fdc020754",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Vq5hG384QrdlGJs8cvpLsQ.png",
      tag: ["React", "useMemo"],
      readTime: "4 min read",
    },
    {
      title: "Boosting Loading Speed and User Experience with Lazy Loading.",
      content: "Lazy loading is a technique used to load resources only when they are needed, helping to shorten page load times by prioritizing critical content. It is also known as code splitting. We can avoid preloading content while it is still out of view, and focus all of the resources on the content that is in the view.",
      link: "https://medium.com/@abhikainthla001/boosting-loading-speed-and-user-experience-with-lazy-loading-5faa7e03c534",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*VEtkfwjwXWze9NdPant28Q.png",
      tag: ["React", "lazy loading"],
      readTime: "3 min read",
    },
    {
      title:"Three-tier architecture in web development",
      content:"When it comes to build good and scalable applications we generally rely on the technique known as Three-tier architecture. It organises application into three different layers. It divides application into three interconnected layers: presentation, application (or business logic), and data.",
      link:"https://medium.com/@abhikainthla001/three-tier-architecture-in-web-development-c0ab0c61b053",
      image:"https://tse2.mm.bing.net/th?id=OIP.opHsqQrb4exqr9-5-bja4AHaFf&pid=Api&P=0&h=180",
      tag : ["Web Development","Three-tier Architecture" ],
      readTime : "3 min read",
    }
  ];
  return (
    <Flex alignItems={'center'} flexDir={'column'} p={isSmallerThan426 ? '0':'20px'} paddingTop={isSmallerThan426?"10":"0"} gap={isSmallerThan426 ? '5px': '10px'} id='more'>
        <Heading>More</Heading>
        <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span ><MdArrowForwardIos style={{marginLeft:"5px"}}/></span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span><MdArrowBackIos style={{marginLeft:"10px"}}/></span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
       {
        blogs.map((blog, index)=>{
          return(
            <Blogs key={index} data={blog}/>
          )
        })
       }
      </ReactSimplyCarousel>
    </div>
    </Flex>
  )
}

export default More