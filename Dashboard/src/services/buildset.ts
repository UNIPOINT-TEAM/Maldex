import { api } from '../axios/Api';

export const GetGiftSet
 = async () => {
  const response = await api.get(`/gifts/baskets/set/catalogs/`);
  return response.data;
};


export const PostGiftSet
 = async () => {
  const response = await api.get(`/gifts/baskets/set/catalogs/`);
  return response.data;
};