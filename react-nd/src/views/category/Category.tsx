import { businesses } from '@/consts/businesses';
import { BusinessType } from '@/type/businessType';
import { CategoryMain, CategorySidebar } from '@/views/category';
import { ErrorPage } from '@/views/error';
import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getCategories } from '@/api/ServicesApi';
import { getBusinessesByCategory } from '@/api/BusinessesApi';
import React from 'react';
import { ServiceType } from '@/type/serviceType';

export const Category = () => {
  const { category: categoryParam } = useParams();

  const [categories, setCategories] = React.useState<ServiceType[]>([]);
  const [businesses, setBusinesses] = React.useState<BusinessType[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);

        let selectedService = fetchedCategories.find((category) => category.name === categoryParam);

        if (!selectedService) {
          selectedService = fetchedCategories[0];
        }

        const fetchedBusinesses = await getBusinessesByCategory(selectedService.id);
        setBusinesses(fetchedBusinesses);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryParam]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!categories.length) {
    return <ErrorPage />;
  }

  const service = categories.find((category) => category.name === categoryParam) || categories[0];

  return (
    <Flex>
      <CategorySidebar service={service} />
      <CategoryMain service={service} businessList={businesses} />
    </Flex>
  );
};
