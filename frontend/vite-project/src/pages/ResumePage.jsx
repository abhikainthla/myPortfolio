import { Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import ResumeDownloader from '../components/ResumeDownloader';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();
  
  const ResumePage = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    const goToPreviousPage = () => {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    };
  
    const goToNextPage = () => {
      if (pageNumber < numPages) {
        setPageNumber(pageNumber + 1);
      }
    };
  
    return (
      <Flex flexDir={'column'} alignItems={'center'} gap={5}>
        <Heading>Resume</Heading>
        <Flex h={800} overflow={'hidden'}>
        <Document file='/my-resume.pdf' onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        </Flex>
        
        <Text>
          Page {pageNumber} of {numPages}
        </Text>
        <Flex gap={3}>
          <Button onClick={goToPreviousPage} disabled={pageNumber <= 1} className={
          colorMode === "light" ? "home-button-light" : "home-button-dark"
        }
        bg={"blue.800"}
        color={"#ffffff"}>
            Previous Page
          </Button>
          <Button onClick={goToNextPage} disabled={pageNumber >= numPages} className={
          colorMode === "light" ? "home-button-light" : "home-button-dark"
        }
        bg={"blue.800"}
        color={"#ffffff"}>
            Next Page
          </Button>
        </Flex>
        <ResumeDownloader/>
      </Flex>
    );
}

export default ResumePage