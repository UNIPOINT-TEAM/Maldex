import { api } from '../axios/Api';

export const GetGiftsCategory
 = async () => {
  const response = await api.get(`/gifts/baskets/category/`);
  return response.data;
};



export const PostGiftsCategory = async (data: any) => {
  const response = await api.post(`/gifts/baskets/`, data);
  return response.data;
};

export const delGiftsCategory = async (id:number)   => {
  const response = await api.delete(`/faq/${id}`);
  return response.data;
};


//hooks.ts
export const editGiftsCategory = async (id: number, newData: { title: string, body: string }) => {
  const response = await api.put(`/faq/${id}/`, newData); 
  return response.data;
};