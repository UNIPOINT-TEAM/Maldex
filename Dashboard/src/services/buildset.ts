import { api } from '../axios/Api';

export const GetGiftSet
 = async () => {
  const response = await api.get(`/gifts/baskets/set/catalogs/`);
  return response.data;
};


export const PostGiftSet
 = async (item:any) => {
  const response = await api.post(`/gifts/baskets/set/catalogs/`,item);
  return response.data;
};

export const DelGiftSet = async (id:number)   => {
  const response = await api.delete(`/gifts/baskets/set/catalog/${id}`);
  return response.data;
};