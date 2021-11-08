import { Box, Heading, useBreakpointValue, useColorMode, Center } from '@chakra-ui/react';
import { KLogoLink } from './KLogo';
import MotionBox from './motion/Box';

const SomeText = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: 'xs',
    sm: 'md',
  });

  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Hello
      </Heading>

      <Center marginY={16}>
        <MotionBox
          animate={{ y: 30 }}
          transition={{ repeat: Infinity, duration: 2.5, repeatType: 'reverse' }}
        >
          <KLogoLink fill={colorMode === 'light' ? '#000' : '#fff'} />
        </MotionBox>
      </Center>
      <Box
        backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.500'}
        padding={4}
        borderRadius={4}
      >
        <Box d="flex" alignItems="center" fontSize={textSize}>
          This is a Next.js app with Chakra-UI and TypeScript setup.
        </Box>
      </Box>
    </>
  );
};

export default SomeText;
