import axios from 'axios';
import { api } from '../axios/Api';

import { BASE_URL } from '../utils/BaseUrl';

export const GetProduct = async () => {
  const response = await api.get(`${BASE_URL}/product/`);
  return response;
};
export const GetFilters = async () => {
  const response = await api.get(`${BASE_URL}/product/filters`);
  return response;
};

export const GetProductCategory = async (id: number) => {
  const response = await api.get(`/product/?category_id=${id}`);
  return response;
};
export const GetProductGifts = async (id: number) => {
  const response = await api.get(`/gifts/baskets/category/${id}/`);
  return response;
};

export const GetProductSearch = async (
  item?: string,
  currentpage?: number,
  filter_id?: string,
) => {
  const response = await axios.get(
    `${BASE_URL}/product/?search=${item && item}&page=${
      currentpage && currentpage
    }&filter_id=${filter_id && filter_id}`,
  );
  return response;
};
export const GetProductIsNew = async () => {
  const response = await axios.get(`${BASE_URL}/product/?is_new=true`);
  return response;
};
export const GetProductIsHit = async () => {
  const response = await axios.get(`${BASE_URL}/product/?is_hit=true`);
  return response;
};
export const GetProductNew = async (id: any) => {
  const response = await axios.get(
    `${BASE_URL}/product/?category_id=${id}&is_new=true`,
  );
  return response;
};
export const GetProductHit = async (id: any) => {
  const response = await axios.get(
    `${BASE_URL}/product/?category_id=${id}&is_hit=true`,
  );
  return response;
};

export const GetProductDetail = async (id: any) => {
  const response = await axios.get(`${BASE_URL}/product/${id}`);
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
