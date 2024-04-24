import axios from 'axios';
import { api } from '../axios/Api';

import { BASE_URL } from '../utils/BaseUrl';

export const GetProduct = async () => {
  const response = await api.get(`/product/all`);
  return response;
};
export const GetProductNew = async (id: any) => {
  const response = await api.get(
    `/product/all/?category_id=${id}&is_new=true`,
  );
  return response;
};
export const GetProductHit = async (id: any) => {
  const response = await api.get(
    `/product/all/?category_id=${id}&is_hit=true`,
  );
  return response;
};

export const GetProductDetail = async (id: any) => {
  const response = await api.get(`/product/${id}`);
  return response;
};
export const AddWithFormData = async (url: string, item: any) => {
  const response = await axios.post(url, item, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const data = response;
  return data;
};

export const UpdateWithFormData = async (url: string, item: any) => {
  const response = await axios.put(url, item, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const data = response;
  return data;
};

export const DeleteItem = async (url: any) => {
  await axios.delete(url);
};
