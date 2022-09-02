import { message, TablePaginationConfig } from "antd";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getAccessToken } from "@/utils/storage";
import { SorterResult } from "antd/lib/table/interface";

const config: AxiosRequestConfig = {
    baseURL: import.meta.env.BASE_URL,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json'
    },
}

const api = axios.create(config)
api.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.url?.includes('download')) {
        config.responseType = 'blob'
    }

    const token = getAccessToken();
    if (!token) {
        return config
    }

    if (!config.headers) {
        config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;

    return config
},
    (err) => {
        console.error(err);
        return Promise.reject(err);
    })


export interface HttpResponse<T = unknown> {
    status: number;
    msg: string;
    code: number;
    data: T;
}
/**
 * 返回
 */
api.interceptors.response.use((response: AxiosResponse<HttpResponse>) => {
    const res = response;
    const url = response.config.url;
    if (url?.includes('download')) {
        response.headers.responseType = 'blob'
    }
    return res;
},
    error => {
        const { response } = error
        if (response) {
            message.error(response.message)
        } else {

        }
        console.error(error);

    })

export default api; 