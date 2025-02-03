import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = () => apiClient.get<T[]>(this.endpoint).then((res) => res.data);
  get = (id: string) =>
    apiClient.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
  create = (entity: T, config?: AxiosRequestConfig) => {
    if (this.endpoint !== "/properties") {
      throw new Error(`Create  method is not supported for ${this.endpoint}`);
    }
    return apiClient
      .post<{ message: string; entity: T }>(this.endpoint, entity, config)
      .then((res) => res.data);
  };
  remove = (id: string) => {
    if (this.endpoint !== "/properties") {
      throw new Error(`Remove  method is not supported for ${this.endpoint}`);
    }
    return apiClient.delete<{ message: string }>(`${this.endpoint}/${id}`);
  };
}

export default APIClient;
