import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = () => apiClient.get<T[]>(this.endpoint);
  get = (id: string) => apiClient.get<T>(`${this.endpoint}/${id}`);
}

export default APIClient;
