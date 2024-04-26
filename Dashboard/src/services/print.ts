import { api } from '../axios/Api';


export const GetPrints = async () => {
  const response = await api.get(`/print-categories/`);
  return response.data;
};



export const PostPrints = async (data:any) => {
  const response = await api.post(`/print-categories/`, data);
  return response.data;
};
