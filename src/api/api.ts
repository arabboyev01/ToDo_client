import axiosInstance from "./axiosInstance";
import { AxiosResponse } from "axios";

interface CreateResourceOptions {
  headers?: Record<string, string>;
}

class ApiService {
  async updateResource<T>(
    endpoint: string,
    id: number,
    data: T
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await axiosInstance.put<T>(`${endpoint}/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getResource<T>(
    endpoint: string,
    id?: number
  ): Promise<AxiosResponse<T>> {
    try {
      const url = id !== undefined ? `${endpoint}/${id}` : endpoint;
      const response = await axiosInstance.get<T>(url)
      return response
    } catch (error) {
      throw error
    }
  }

  async createResource<T>(
    endpoint: string,
    data: T,
    options: CreateResourceOptions = {}
  ): Promise<AxiosResponse<T>> {
    try {
      const { headers = {} } = options;
      const response = await axiosInstance.post<T>(endpoint, data, { headers });
      return response
    } catch (error) {
      throw error
    }
  }

  async deleteResource(
    endpoint: string,
    id: number
  ): Promise<AxiosResponse<void>> {
    try {
      const response = await axiosInstance.delete<void>(`${endpoint}/${id}`);
      return response;
    } catch (error) {
      throw error
    }
  }
}
export const api = new ApiService();
