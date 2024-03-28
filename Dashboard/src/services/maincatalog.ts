import { api } from '../axios/Api';

export const GetMainCatalog = async () => {
  const response = await api.get(`/product/categories/`);
  return response.data;
};
