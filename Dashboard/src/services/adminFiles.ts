import { api } from '../axios/Api';


export const GetAdminFiles
 = async () => {
  const response = await api.get(`/gifts/baskets/admin/files/`);
  return response.data;
};


export const PostAdminFiles
 = async (item:any) => {
  const response = await api.post(`/gifts/baskets/admin/files/` , item);
  return response.data;
};

export const DelAdminFiles = async (id:number)   => {
  const response = await api.delete(`/gifts/baskets/admin/file/${id}`);
  return response.data;
};