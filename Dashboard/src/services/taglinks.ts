import { api } from '../axios/Api';

export const GetLinkTagsCategory
 = async () => {
  const response = await api.get(`/link-tags/categories`);
  return response.data;
};


export const PostLinkTagsCategory
 = async (item:any) => {
  const response = await api.post(`/link-tags/categories`,item);
  return response.data;
};

export const DelLinkTagsCategory = async (id:number)   => {
  const response = await api.delete(`/link-tags/categories/${id}`);
  return response.data;
};

export const UpgradeLinkTagsCategory = async (id: number, newData: { title: string }) => {
  const response = await api.put(`/link-tags/categories/${id}`, newData); 
  return response.data;
};

export const GetLinkTags
 = async () => {
  const response = await api.get(`/link-tags/`);
  return response.data;
};


export const PostLinkTags
 = async (item:any) => {
  const response = await api.post(`/link-tags/`,item);
  return response.data;
};



export const DelLinkTags = async (id:number)   => {
  const response = await api.delete(`/link-tags/${id}/`);
  return response.data;
};

export const UpgradeLinkTags = async (id: number, newData: { title: string, }) => {
  const response = await api.put(`/link-tags/${id}/`, newData); 
  return response.data;
};