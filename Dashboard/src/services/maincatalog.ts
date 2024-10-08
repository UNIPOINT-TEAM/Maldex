import axios from 'axios';
import { api } from '../axios/Api';
import { BASE_URL } from '../utils/BaseUrl';

export const DeleteItem = async (url: string) => {
  await api.delete(BASE_URL + url);
};

export const GetLogo = async () => {
  const response = await api.get(`/product/site-logos/`);
  return response.data;
};

export const GetMainCatalog = async () => {
  const response = await api.get(`/product/categories/`);
  return response.data;
};
export const GetMainCatalogSite = async (name: string) => {
  const response = await api.get(`/product/categories/?search=${name}`);
  return response.data;
};

export const GetHitNewCategory = async (type: string) => {
  const response = await api.get(`/product/categories/?is_${type}=true`);
  return response.data;
};

export const GetMainCatalogactive = async () => {
  const response = await api.get(`/product/categories/?is_available=true`);
  return response.data;
};
export const GetSubCategories = async (search: string) => {
  const response = await api.get(`/product/categories/subs/?search=${search}`);
  return response.data;
};
export const GetProjects = async (id: number) => {
  const response = await api.get(`/projects/?tag_id=${id}`);
  return response.data;
};
export const GetTags = async () => {
  const response = await api.get(`/projects/tags/`);
  return response.data;
};

export const GetMainCatalogId = async (id: any) => {
  const response = await api.get(`/product/category/${id}/`);
  return response.data;
};
export const GetProjectDetails = async (id: any) => {
  const response = await api.get(`/projects/${id}/`);
  return response.data;
};

export const GetSubSubCatalog = async (url: string) => {
  const response = await api.get(url);
  return response.data;
};
export const GetBanner = async (url: string) => {
  const response = await api.get(url);
  return response.data;
};

export const PutWithFormData = async (url: string, item: any) => {
  console.log(BASE_URL + url);
  const response = await axios.put(BASE_URL + url, item, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  // const data = await response.json();
  return response;
};
export const PutWithJson = async (url: string, item: any) => {
  console.log(BASE_URL + url);
  const response = await axios.put(BASE_URL + url, item, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // const data = await response.json();
  return response;
};

export const PutData = async (url: string, item: any) => {
  const response = await axios.put(BASE_URL + url, item, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const data = response;
  return data;
};
export const PutDataJson = async (url: string, item: any) => {
  const response = await axios.put(BASE_URL + url, item);
  const data = response;
  return data;
};
export const PostDataJson = async (url: string, item: any) => {
  const response = await axios.post(BASE_URL + url, item);
  const data = response;
  return data;
};
export const PostData = async (url: string, item: any) => {
  const response = await axios.post(BASE_URL + url, item);
  const data = response;
  return data;
};

export const TransferCategory = async (url: string, item: any) => {
  const response = await axios.post(BASE_URL + url, item);
  const data = response;
  return data;
};
