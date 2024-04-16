import { api } from '../axios/Api';
import axios from 'axios';
import { BASE_URL } from '../utils/BaseUrl';

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

export const GetProduct = async () => {
  const response = await api.get(`/product`);
  return response.data;
};
