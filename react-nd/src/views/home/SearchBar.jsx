import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Icon,
  Input,
  Stack
} from '@chakra-ui/react';

import { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
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