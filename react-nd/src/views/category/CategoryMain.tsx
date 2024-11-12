import { BusinessCard } from '@/views/category';
import { Box, Flex, Heading, Icon, Stack } from '@chakra-ui/react';

import { ServiceType } from '@/type/serviceType';
import { BusinessType, BusinessesType } from '@/type/businessType';

type CategoryMainProps = {
  service: ServiceType;
  businessList: BusinessesType;
};

export const CategoryMain = ({ service, businessList }: CategoryMainProps) => {
  if (!service) {
    return null;
  }

  if (!businessList) {
    return null;
  }

  return (
    <Box flex="1" p={8}>
      <Stack spacing={6}>
        <Heading size="lg" color={service.color}>
          <Icon as={service.icon} mr={2} />
          {service.name.charAt(0).toUpperCase() + service.name.slice(1)} Services
        </Heading>

        <Box p={8}>
          <Flex wrap="wrap" gap={6}>
            {businessList[service.name].map((business: BusinessType) => (
              <BusinessCard
                key={business.name}
                name={business.name}
                logo={business.logo}
                category={service.name.charAt(0).toUpperCase() + service.name.slice(1)}
              />
            ))}
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};
