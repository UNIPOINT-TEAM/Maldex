import { api } from '../axios/Api';


export const GetArticles = async () => {
  const response = await api.get(`/articles/`);
  return response.data;
};
export const GetArticlesDetail = async (id:number) => {
  const response = await api.get(`/articles/${id}`);
  return response.data;
};


export const PostArticles = async (data:any) => {
  const response = await api.post(`/articles/`, data);
  return response.data;
};

export const UpgradeArticles = async (id: number, newData: { title: string, body: string, image: any }) => {
  const response = await api.put(`/articles/${id}/`, newData); 
  return response.data;
};

export const DeleteArticle = async (id:number) => {
  const response = await api.delete(`/articles/${id}`);
  return response.data;
};
