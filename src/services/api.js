import axios from 'axios';

// 创建axios实例
const apiClient = axios.create({
  baseURL: '/api', // 后端API基础URL，可根据实际情况调整
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
apiClient.interceptors.request.use(
  config => {
    // 可以在这里添加认证信息，如token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  response => {
    // 直接返回响应数据
    return response.data;
  },
  error => {
    // 统一处理错误
    console.error('API请求错误:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
