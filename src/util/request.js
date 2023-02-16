/*
 * @Description:
 * @Autor: weiwei
 * @Date: 2023-02-16 08:48:22
 * @LastEditTime: 2023-02-16 09:22:37
 * @LastEditors: weiwei
 */
import axios from "axios";

const AxiosRequest = axios.create({
    baseURL: '/',
//   baseURL: 'https://api.juejin.cn',
  timeout: 60 * 1000
});
// 拦截器
AxiosRequest.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
AxiosRequest.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
// axios的get请求
export function RequestGet(url, params = {}, options = {}) {
  return new Promise((resolve, reject) => {
    AxiosRequest
      .get(url, {params}, options)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// axios的post请求
export function RequestPost(url, data = {}, options = {}) {
  return new Promise((resolve, reject) => {
    AxiosRequest
      .post(url, data, options)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default AxiosRequest;
