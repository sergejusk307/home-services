import { ServerCategory, mapService } from '@/type/serviceType';
import { axiosInstance } from './AxiosInstance';

export const getCategories = async () => {
  const {
    data: { data },
  } = await axiosInstance.get<{ data: ServerCategory[] }>('category');

  return data.map(mapService);
};
