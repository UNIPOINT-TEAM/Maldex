/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils";

const api = axios.create({
  baseURL: BASE_URL,
});

export const useFetchHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any[]>([]);

  const fetchData = useCallback(async (configobj: AxiosRequestConfig) => {
    try {
      setIsLoading(true);
      const any = await api(configobj);
      setIsLoading(false);
      const data = any.data as any[];
      setResponse(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

  return { isLoading, response, fetchData };
};
