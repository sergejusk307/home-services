import { Box, Container, Text, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { UfoAnimation } from '@/views/error';
import { ROUTES } from '@/consts/Routes';

export const ErrorPage = () => {
  return (
    <Box bg="white" color="gray.700" py="4.5rem" textAlign="center">
      <Container maxW="md">
        <Box mb="3rem">
          <Heading as="h1" size="2xl" color="gray.800" mb="1.5rem">
            Page not found
          </Heading>
          <Text fontSize="lg" mb="1.5rem">
            Sorry, but the page you were looking for could not be found.
          </Text>
          <Text fontSize="lg">
            <Link as={RouterLink} to="/" color="purple.500" mr="2">
              Go to homepage
            </Link>
            or
            <Link as={RouterLink} to={ROUTES.CONTACT.path} color="purple.500" ml="2">
              get in touch
            </Link>
            .
          </Text>
        </Box>
        <UfoAnimation />
      </Container>
    </Box>
  );
};
