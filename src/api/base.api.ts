import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  Method,
} from 'axios';
import { AppConfig } from '@app/constant/app.config'
import { errorInterceptor } from '@app/api/interceptors/error.interceptor'

export class BaseApi {
  private baseUrl: string;
  private addtionalBaseUrl: string;
  private axiosInstance: AxiosInstance;

  constructor(addtionalBaseUrl = '') {
    this.baseUrl = AppConfig.API_URL || '';
    this.addtionalBaseUrl = addtionalBaseUrl;
    this.axiosInstance = axios.create();


    this.axiosInstance.interceptors.response.use(
      (response) => response.data,
      errorInterceptor,
    );

  }
  make<T>(method: Method, url: string, data: any = {}, addtionalConfig = {}, headers: object = {}): Promise<T> {
    let header: object = {
      'Content-Type': 'application/json'
    }

    if (Object.keys(headers).length > 0) {
      header = headers
    }

    const config: AxiosRequestConfig = {
      baseURL: this.baseUrl,
      method: <Method>method,
      url: `${this.addtionalBaseUrl}${url}`,
      headers: header,
      ...addtionalConfig,
    };

    if (method === 'GET') {
      Object.keys(data).forEach((key) => {
        if (data[key] === null || data[key] === '') {
          delete data[key];
        }
      });
      config.params = data;
    } else {
      config.data = data;
    }

    return this.axiosInstance.request(config);
  }

}