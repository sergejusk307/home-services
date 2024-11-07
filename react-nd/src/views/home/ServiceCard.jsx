import { Box, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const ServiceCard = ({ service }) => {
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
        bg: 'primary.200',
        cursor: 'pointer',
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
