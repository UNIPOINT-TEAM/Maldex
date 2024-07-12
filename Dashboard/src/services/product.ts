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

export const GetSites = async (id: number) => {
  const response = await api.get(
    `${BASE_URL}/product/sites-count/?category_id=${id}`,
  );
  return response;
};
export const GetSite = async () => {
  const response = await api.get(`${BASE_URL}/product/sites-count/`);
  return response;
};

export const GetProductCategory = async (
  id: any,
  currentpage: number,
  name: string,
) => {
  const response = await api.get(
    `/product/?category_id=${id}&page=${
      currentpage && currentpage
    }&site=${name}`,
  );
  return response;
};
export const GetProductGifts = async (id: number) => {
  const response = await api.get(`/gifts/baskets/category/${id}/`);
  return response;
};

// export const GetProductSearch = async (
//   item?: string,
//   currentpage?: number,
//   filter_id?: string,
//   categoryId?: number,
//   siteId?: string,
// ) => {
//   const response = await axios.get(
//     `${BASE_URL}/product/?page=${currentpage && currentpage}&search=${
//       item && item
//     }&filter_id=${
//       filter_id && filter_id
//     }&category_id=${categoryId}&site=${siteId}`,
//   );
//   return response;
// };



export const GetProductSearch = async (
  item = '',
  currentPage = 1,
  filter_id = '',
  categoryId = 0,
  siteId = ''
) => {
  const response = await axios.get(
    `${BASE_URL}/product/?page=${currentPage}&search=${item}&filter_id=${filter_id}&category_id=${categoryId}&site=${siteId}`
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
  await axios.delete(BASE_URL + url);
};
