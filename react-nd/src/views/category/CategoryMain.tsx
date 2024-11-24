import { BusinessCard } from '@/views/category';
import { Box, Flex, Heading, Icon, Stack } from '@chakra-ui/react';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { ServiceType } from '@/type/serviceType';
import { BusinessType } from '@/type/businessType';

library.add(fas);

type CategoryMainProps = {
  service: ServiceType;
  businessList: BusinessType;
};

export const CategoryMain = ({ service, businessList }: CategoryMainProps) => {
  if (!service) {
    return null;
  }

  if (!businessList) {
    return null;
  }

  console.log(businessList);
  return (
    <Box flex="1" p={8}>
      <Stack spacing={6}>
        <Heading size="lg" color={service.color}>
          {service.icon && <FontAwesomeIcon color={service.color} icon={service.icon} />}
          {service.name.charAt(0).toUpperCase() + service.name.slice(1)} Services
        </Heading>

        <Box p={8}>
          <Flex wrap="wrap" gap={6}>
            {businessList.map((business) => (
              <BusinessCard
                key={business.name}
                name={business.name}
                logo={business.icon}
                category={service.name.charAt(0).toUpperCase() + service.name.slice(1)}
              />
            ))}
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};
