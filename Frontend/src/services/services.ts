export const BASE_URL = 'http://192.168.0.163:8000/'

export const getData = async (url:any) => {
    const response = await fetch(BASE_URL + url, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  };