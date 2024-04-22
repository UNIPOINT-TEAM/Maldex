import axios from 'axios';
import { api } from '../axios/Api';
import { BASE_URL } from '../utils/BaseUrl';

export const GetMainCatalog = async () => {
  const response = await api.get(`/product/categories/`);
  return response.data;
};

export const GetMainCatalogId = async (id: any) => {
  const response = await api.get(`/product/category/${id}/`);
  return response.data;
};

export const GetSubSubCatalog = async (url: string) => {
  const response = await api.get(url);
  return response.data;
};

export const PutWithFormData = async (url: string, item: any) => {
  const response = await axios.put(BASE_URL + url, item, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const data = response;
  return data;
};

export const PutData = async (url: string, item: any) => {
  const response = await axios.put(url, item, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const data = response;
  return data;
};
