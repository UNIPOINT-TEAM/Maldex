import { api } from '../axios/Api';


export const GetAdminFiles
 = async () => {
  const response = await api.get(`/admin/files/`);
  return response.data;
};