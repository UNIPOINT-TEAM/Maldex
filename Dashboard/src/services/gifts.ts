import { api } from '../axios/Api';

export const GetGiftsCategory
 = async () => {
  const response = await api.get(`/gifts/baskets/category/`);
  return response.data;
};

export const GetGiftsCategoryDetail = async (id: any) => {
  const response = await api.get(`/gifts/baskets/category/${id}`);
  return response.data;
};

export const GetGiftsDetail = async (id: any) => {
  const response = await api.get(`/gifts/baskets/${id}`);
  return response.data;
};

export const PostGiftsCategory = async (data: any) => {
  const response = await api.post(`/gifts/baskets/category/`, data);
  return response.data;
};

export const PostGiftsProduct = async (data: any) => {
  const response = await api.post(`/gifts/baskets/`, data);
  return response.data;
};

export const delGiftsCategory = async (id:number)   => {
  const response = await api.delete(`/gifts/baskets/category/${id}`);
  return response.data;
};


//hooks.ts
export const editGiftsCategory = async (id: number, newData: { name: string }) => {
  const response = await api.put(`/gifts/baskets/category/${id}/`, newData); 
  return response.data;
};