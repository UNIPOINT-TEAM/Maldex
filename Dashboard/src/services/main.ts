import { api } from '../axios/Api';

export const GetNewCategory = async () => {
  const response = await api.get(`/product/categories/?new_category=true`);
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
