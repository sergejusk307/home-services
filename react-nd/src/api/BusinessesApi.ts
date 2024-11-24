import { ServerBusiness, mapBusiness } from '@/type/businessType';
import { axiosInstance } from './AxiosInstance';

export const getBusinessesByCategory = async (categoryId: string) => {
  const {
    data: { data },
  } = await axiosInstance.get<{ data: ServerBusiness[] }>(`business/category/${categoryId}`);

  return data.map(mapBusiness);
};
