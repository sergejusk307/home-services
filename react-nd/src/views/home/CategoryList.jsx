import { Box, SimpleGrid, Heading} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { services } from "@/consts/services";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search/${service.name}`);
  };

  return (
    <Box
      p={5}
      width="160px"
      shadow="xs"
      borderWidth="1px"
      borderRadius="md"
      textAlign="center"
      alignItems="center"
      flexDirection="column"
      display="flex"
      bg="primary.100"
      gap="1rem"
      _hover={{
        bg: "primary.200",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <service.icon fontSize={48} color={service.color} w={10} h={10} mb={4} />
      <Heading textTransform="capitalize" size="md" mb={2}>
        {service.name}
      </Heading>
    </Box>
  );
};

const CategoryList = () => {
  return (
    <Box p={{ base: 4, md: 10 }}>
      <Box maxWidth="1200px" mx="auto">
        <SimpleGrid    
          marginTop={{ base: '2rem', md: '4rem' }}
          display="grid"
          justifyItems="center"
          alignItems="center"
          gap={{ base: '0.5rem', md: '1rem' }} 
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(6, 1fr)' }}  
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              width={{ base: '90%', md: 'auto' }} 
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>

  );
};

export default CategoryList;
