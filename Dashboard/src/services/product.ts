import axios from 'axios';
import { BASE_URL } from '../utils/BaseUrl';

export const GetProduct = async () => {
  const response = await axios.get(`http://192.168.0.117:8000/product/`);
  return response;
};

export const GetProductDetail = async (id: any) => {
  const response = await axios.get(`http://192.168.0.117:8000/product/${id}`);
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
