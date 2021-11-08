import { Box, Button, Code, Flex, Image, Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

const repoLink = 'https://github.com/sozonome/nextarter-chakra';

const CTASection = () => {
  return (
    <Box textAlign="center" marginTop={8}>
      <Box marginY={2}>
        <Code>npx degit kraftend/next-starter {'<YOUR_APP_NAME>'}</Code>
        <br />

        <Button
          marginTop={2}
          as="a"
          href="https://github.com/kraftend/next-starter/generate"
          target="_blank"
          size="sm"
        >
          Use This Template
        </Button>
      </Box>

      <Flex justifyContent="center" alignItems="center" gridGap={2}>
        <Button
          as="a"
          href="https://github.com/kraftend/next-starter"
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="sm"
        >
          Open in Github
        </Button>
      </Flex>
    </Box>
  );
};

export default CTASection;
