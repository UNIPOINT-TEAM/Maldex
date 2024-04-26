export const BASE_URL = "http://5.35.82.80:8000/";
import axios from "axios";

export const getData = async (url: any) => {
    const response = await fetch(BASE_URL + url, {
        method: "GET",
    });
    const data = await response.json();
    return data;
};

export const GetCategory = async () => {
    const response = await axios.get(`${BASE_URL}product/categories/`);
    return response.data;
};

export const GetProductNew = async (url: string) => {
    const response = await axios.get(`${BASE_URL}${url}`);
    return response;
};
export const GetProductHit = async (url: string) => {
    const response = await axios.get(`${BASE_URL}${url}`);
    return response;
};

export const GetProjects = async (url: string) => {
    const response = await axios.get(BASE_URL + url);
    return response.data;
};
export const GetTags = async (url: string) => {
    const response = await axios.get(BASE_URL + url);
    return response.data;
};
export const GetFaqs = async (url: string) => {
    const response = await axios.get(BASE_URL + url);
    return response.data;
};
