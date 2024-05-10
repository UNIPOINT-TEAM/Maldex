import { api } from '../axios/Api';

export const GetFilter
 = async () => {
  const response = await api.get(`/product/filters`);
  return response.data;
}

;
export const GetFilterId
 = async (id:number) => {
  const response = await api.get(`/gifts/baskets/set/catalog/${id}`);
  return response.data;
};



export const PostFilterSet
 = async (item:any) => {
  const response = await api.post(`/product/filters`,item);
  return response.data;
};

export const DelFilterSet = async (id:number)   => {
  const response = await api.delete(`/gifts/baskets/set/catalog/${id}`);
  return response.data;
};

export const EditGiftSet = async (id: number, newData: { title: string, body: string }) => {
  const response = await api.put(`/gifts/baskets/set/catalog/${id}/`, newData); 
  return response.data;
};