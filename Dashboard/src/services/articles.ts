import { api } from '../axios/Api';


export const GetArticles = async () => {
  const response = await api.get(`/articles/`);
  return response.data;
};


// export const PostArticles = async (item:any) => {
//   const response = await api.post(`/articles/`, item);
//   return response.data;
// };

// services/articles.js
export const PostArticles = async (data:any) => {
  const response = await api.post(`/articles/`, data);
  return response.data;
};
