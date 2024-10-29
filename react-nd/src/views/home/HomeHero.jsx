import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Input,
  Icon,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from "@chakra-ui/icons";

import { useState } from 'react';
import { services } from "@/consts/services";


const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(''); 
    
  const handleInputChange = ({ target: { value } }) => setSearchQuery(value);
  
  const handleSearch = () => onSearch(searchQuery);
  
  return (
    <form onSubmit={handleSearch}>
      <Stack direction={'row'} spacing={4} mt={10} maxW={'3xl'}>
        <Input
          value={searchQuery}
          onChange={handleInputChange}
          rounded={'full'}
          placeholder="Search"
          size="lg"
          bg="white"
          border="2px solid"
          borderColor="gray.300"
          _focus={{ borderColor: 'primary.500', boxShadow: '0 0 0 1px orange.400' }}
        />
        <Button
          colorScheme="purple"
          rounded={'full'}
          size="lg"
          type="submit"
          bg={'primary.500'}
          _hover={{ bg: 'primary.600' }}>
          <Icon as={SearchIcon} />
        </Button>
      </Stack>
    </form>
  );
};

export default function HomeHero() {
  const navigate = useNavigate();
  
  const handleSearch = (query) => {
    const service = services.find((service) => service.name.includes(query)) || services[0];
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
          lineHeight={'110%'}>
          Find Home{' '}
          <Text as={'span'} color={'primary.500'}>
            Service/Repair{' '}
          </Text>
          <br />
          Near You
        </Heading>
        <Text 
          color={'gray.500'} 
          maxW={'3xl'}
          fontSize={{ base: 'l', sm: 'xl', md: '2xl' }}>
          Explore Best Home Service & Repair near you
        </Text>
        
        <SearchBar onSearch={handleSearch} />
        
      </Stack>
    </Container>
  )
}