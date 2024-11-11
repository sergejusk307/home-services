import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { services } from '@/consts/Services';
import { SearchBar } from '@/views/home';

export const HomeHero = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    const service = services.find((service) => service.name.includes(query)) || { name: query };
    navigate(`/search/${service.name}`);
  };

  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        paddingTop={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Find Home{' '}
          <Text as={'span'} color={'primary.500'}>
            Service/Repair{' '}
          </Text>
          <br />
          Near You
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'} fontSize={{ base: 'l', sm: 'xl', md: '2xl' }}>
          Explore Best Home Service & Repair near you
        </Text>

        <SearchBar onSearch={handleSearch} />
      </Stack>
    </Container>
  );
};
