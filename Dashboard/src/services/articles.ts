import { api } from '../axios/Api';


export const GetNewCategory = async () => {
  const response = await api.get(`/product/categories/?new_category=true`);
  return response.data;
};