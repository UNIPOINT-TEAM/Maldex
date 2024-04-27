import { api } from '../axios/Api';

export const GetNewCategory = async () => {
  const response = await api.get(`/product/categories/?is_popular=true`);
  return response.data;
};
export const GetMainBanner = async () => {
  const response = await api.get(`/banner`);
  return response.data;
};
export const GetMainBannerSlider = async () => {
  const response = await api.get(`/banner/carousel`);
  return response.data;
};

export const GetProduct = async () => {
  const response = await api.get(`/product/all`);
  return response.data;
};

export const GetFaqHome = async () => {
  const response = await api.get(`/faq/?type=home`);
  return response.data;
};

export const PostFaqHome = async (data: any) => {
  const response = await api.post(`/faq/?type=home`, data);
  return response.data;
};

export const delFaqHome = async (id: number) => {
  const response = await api.delete(`/faq/${id}`);
  return response.data;
};

//hooks.ts
export const editFaqHome = async (
  id: number,
  newData: { title: string; body: string },
) => {
  const response = await api.put(`/faq/${id}/`, newData);
  return response.data;
};

export const GetPrintCategory = async () => {
  const response = await api.get(`/print-categories/`);
  return response.data;
};
