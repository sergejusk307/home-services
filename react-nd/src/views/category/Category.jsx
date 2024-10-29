import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  VStack,
  Text,
  Icon,
  Link,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { services } from "@/consts/services";
import { businesses } from "@/consts/businesses";
import { Link as RouterLink } from "react-router-dom";
import BusinessCard from "@/views/category/BusinessCard";

const Category = () => {
  const { category: categoryParam } = useParams();
  const category = categoryParam || services[0].name;

  const businessList = businesses[category] || [];
  
  const service = services.find((service) => service.name === category);

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        as="nav"
        w="250px"
        bg="gray.50"
        p={5}
        borderRight="1px solid"
        borderColor="gray.200"
        height="100vh"
      >
        <Heading as="h3" size="md" mb={4}>
          Services
        </Heading>
        <VStack spacing={3} align="stretch">
          {services.map((service) => (
            <Link
              as={RouterLink}
              to={`/search/${service.name}`}
              key={service.name}
              _hover={{ textDecoration: "none", bg: "gray.100" }}
              borderRadius="md"
              p={2}
              display="flex"
              alignItems="center"
              color={service.color}
              fontWeight={service.name === category ? "bold" : "normal"}
              bg={service.name === category ? "gray.100" : "transparent"}
            >
              <Icon as={service.icon} mr={3} />
              <Text
                color={service.name === category ? service.color : "gray.600"}
              >
                {service.name.charAt(0).toUpperCase() + service.name.slice(1)}
              </Text>
            </Link>
          ))}
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" p={8}>
        <Stack spacing={6}>
          <Heading size="lg" color={service?.color}>
            <Icon as={service?.icon} mr={2} />
            {category && category.charAt(0).toUpperCase() + category.slice(1)} Services
          </Heading>

          <Box p={8}>
            <Flex wrap="wrap" gap={6}>
              {businessList.map((business) => (
                <BusinessCard
                  key={business.name}
                  name={business.name}
                  logo={business.logo}
                  category={category.charAt(0).toUpperCase() + category.slice(1)}
                />
              ))}
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Category;

