import { Box, SimpleGrid } from '@chakra-ui/react';
import { ServiceType } from '@/type/serviceType';
import { ServiceCard } from '@/components/service/ServiceCard';
import { getCategories } from '@/api/ServicesApi';
import React from 'react';

export const CategoryList = () => {
  const [categories, setCategories] = React.useState<ServiceType[]>([]);

  React.useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <Box p={{ base: 4, md: 10 }}>
      <Box maxWidth="1200px" mx="auto">
        <SimpleGrid
          marginTop={{ base: '2rem', md: '4rem' }}
          display="grid"
          justifyItems="center"
          alignItems="center"
          gap={{ base: '0.5rem', md: '1rem' }}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(6, 1fr)',
          }}
        >
          {categories.map((category) => (
            <ServiceCard key={category.id} service={category} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
