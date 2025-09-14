import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

export interface IHttpClient {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
  post<T, U = unknown>(
    url: string,
    data?: U,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>
  put<T, U = unknown>(
    url: string,
    data?: U,
    config?: AxiosRequestConfig,
  ): Promise<AxiosRequestConfig<T>>
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosRequestConfig<T>>
}

export class HttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string = 'http://localhost:5113/api') {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}` // 修正: "Beare" → "Bearer"
      }
      return config
    })

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API error', error)
        return Promise.reject(error)
      },
    )
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config)
  }

  post<T, U = unknown>(
    url: string,
    data?: U,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config)
  }

  put<T, U = unknown>(
    url: string,
    data?: U,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config)
  }

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config)
  }
}
