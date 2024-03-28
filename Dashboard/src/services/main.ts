import { api } from '../axios/Api';

export const GetGiftItem = async () => {
  const response = await api.get(`/gift-item`);
  return response.data;
};
