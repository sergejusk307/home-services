import { Box, SimpleGrid } from '@chakra-ui/react';
import { services } from '@/consts/services';
import { ServiceCard } from '@/components/service/ServiceCard';

export const CategoryList = () => {
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
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
