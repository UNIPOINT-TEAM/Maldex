/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils";

const api = axios.create({
  baseURL: BASE_URL,
});

export const useFetchHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState<any[]>([]);

  const fetchData = useCallback(async (configobj: AxiosRequestConfig) => {
    try {
      setIsLoading(true);
      const any = await api(configobj);
      const data = any.data as any[];
      setResponse(data);
      setIsError(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, response, fetchData, isError };
};
