import { businesses } from "@/consts/businesses";
import { services } from "@/consts/services";
import { CategoryMain, CategorySidebar } from "@/views/category";
import { ErrorPage } from "@/views/error";
import {
  Flex
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category: categoryParam } = useParams();

  const category = categoryParam || services[0].name;
  const service = services.find((service) => service.name === category);

  if (categoryParam && !service) {
    return <ErrorPage />;
  }

  const businessList = businesses[category] || [];

  return (
    <Flex>
      <CategorySidebar service={service} />
      <CategoryMain service={service} businessList={businessList} />
    </Flex>
  );
};

export default Category;

