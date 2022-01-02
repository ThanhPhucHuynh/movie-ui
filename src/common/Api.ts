import axios, { AxiosInstance, AxiosResponse } from "axios";
import config from "../config";


class axiosService {
  private instance: AxiosInstance;

  constructor() {
    const instance: AxiosInstance = axios.create({
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    instance.interceptors.request.use(
      async (conf) => {
        conf.baseURL = config.Host
        // todo something
        return conf;
      },
      (error) => {
        Promise.reject(error);
      }
    );
    this.instance = instance;
  }

  handleSuccess: ((value: AxiosResponse<any, any>) => any) | undefined = (
    response
  ) => {
    return response;
  };

  handleError: ((error: any) => any) | undefined = (error) => {
    return Promise.reject(error);
  };

  get = (url: string): Promise<AxiosResponse<any, any>> => {
    return this.instance.get(url);
  };

  post = (url: string, payload: any): Promise<AxiosResponse<any, any>> => {
    return this.instance.post(``, payload);
  };

  patch = (url: string, payload: any): Promise<AxiosResponse<any, any>> => {
    return this.instance.patch(``, payload);
  };

  put = (url: string, payload: any): Promise<AxiosResponse<any, any>> => {
    return this.instance.put(``, payload);
  };

  delete = (url: string, payload: any): Promise<AxiosResponse<any, any>> => {
    return this.instance.delete(``, { data: payload });
  };

  upload = (url: string, formData: any): Promise<AxiosResponse<any, any>> => {
    return this.instance.post(``, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  export(url: string) {
    return this.instance.get(``, {
      responseType: "blob",
    });
  }
}

export default new axiosService();
