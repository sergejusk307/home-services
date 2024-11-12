import { Box, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ServiceType } from '@/type/serviceType';

export const ServiceCard = ({ service }: { service: ServiceType }) => {
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
      <service.icon fontSize={48} color={service.color} width={10} height={10} />
      <Heading textTransform="capitalize" size="md" mb={2}>
        {service.name}
      </Heading>
    </Box>
  );
};
