/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

class Request {
  instance;
  constructor() {
    const instance = axios.create({
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    instance.interceptors.response.use(
      (response) => response,
      async (error: any) => {
        if (error.response?.status === 401) {
        }

        return Promise.reject(error);
      }
    );

    this.instance = instance;
  }

  get = (url: string, params?: any) => {
    return this.instance.get(url, { params });
  };

  post = (url: string, data: any) => {
    return this.instance.post(url, data);
  };

  put = (url: string, data: any) => {
    return this.instance.put(url, data);
  };

  patch = (url: string, data: any) => {
    return this.instance.patch(url, data);
  };

  delete = (url: string) => {
    return this.instance.delete(url);
  };
}

export default new Request();
