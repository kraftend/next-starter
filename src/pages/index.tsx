import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import CTASection from '@/components/CTASection';
import SomeText from '@/components/SomeText';

const Home = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Box mb={8} w="full">
        <SomeText />
        <CTASection />
      </Box>
    </>
  );
};

export default Home;
