import { api } from '../axios/Api';

export const GetTagsCategory
 = async () => {
  const response = await api.get(`/gifts/baskets/tag/category/`);
  return response.data;
};


export const PostTagsCategory
 = async (item:any) => {
  const response = await api.post(`/gifts/baskets/tag/category/`,item);
  return response.data;
};

export const DelTagsCategory = async (id:number)   => {
  const response = await api.delete(`/gifts/baskets/tag/category/${id}`);
  return response.data;
};

export const UpgradeTagsCategory = async (id: number, newData: { name: string, body: string, image: any }) => {
  const response = await api.put(`/gifts/baskets/tag/category/${id}/`, newData); 
  return response.data;
};

export const GetTags
 = async () => {
  const response = await api.get(`/gifts/baskets/tags/`);
  return response.data;
};


export const PostTags
 = async (item:any) => {
  const response = await api.post(`/gifts/baskets/tags/`,item);
  return response.data;
};

export const DelTags = async (id:number)   => {
  const response = await api.delete(`/gifts/baskets/tags/${id}`);
  return response.data;
};

export const UpgradeTags = async (id: number, newData: { name: string, body: string, image: any }) => {
  const response = await api.put(`/gifts/baskets/tags/${id}/`, newData); 
  return response.data;
};