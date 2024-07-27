import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import Buttons from './Buttons';

const ResumeDownloader = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/my-resume.pdf';
        link.download = '/my-resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
      return (
        <Flex flexDir={'column'} >
               <Buttons name={'Download Resume'} onClick={() => handleDownload()}  />     </Flex>
      );
}

export default ResumeDownloader