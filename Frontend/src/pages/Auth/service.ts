import axios from "axios";
const BASE_URL = "http://5.35.82.80:8000/";

export const PostData = async (url: string, data: any) => {
    const response = await axios.post(BASE_URL + url, data);
    return response;
};
export const PostDataToken = async (url: string, data: any) => {
    const Token = localStorage.getItem("token");

    const response = await axios.post(BASE_URL + url, data, {
        headers: {
            Authorization: `Bearer ${Token}`,
        },
    });
    return response;
};

export const GetData = async (url: string) => {
    const Token = localStorage.getItem("token");
    const response = await axios.get(BASE_URL + url, {
        headers: {
            Authorization: `Bearer ${Token}`,
        },
    });
    return response.data;
};
export const DeleteData = async (url: string) => {
    const Token = localStorage.getItem("token");
    const response = await axios.delete(BASE_URL + url, {
        headers: {
            Authorization: `Bearer ${Token}`,
        },
    });
    return response.data;
};

export const PutDataJson = async (url: string, data: any) => {
    const Token = localStorage.getItem("token");
    const response = await axios.put(BASE_URL + url, data, {
        headers: {
            Authorization: `Bearer ${Token}`,
        },
    });
    return response.data;
};
