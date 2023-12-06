import * as qs from "qs";
import { PathLike } from "fs";
import { AxiosHeaders, AxiosRequestConfig, AxiosResponse, CustomParamsSerializer, ParamsSerializerOptions } from "axios";
import { boolean } from "yup";

export function getRepositoryConfig<T>(): AxiosRequestConfig<T> {
    const config: AxiosRequestConfig<T> = {}
    config.withCredentials = false;
    config.timeout = 1000000;
    config.baseURL = "/"//"https://localhost:7300/data";    
    let common = {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        "Content-Type": "application/json",
        Accept: "*/*",
        'Access-Control-Allow-Origin': '*'
    };
    config.headers = common;
    let serializer: CustomParamsSerializer = ((params: Record<string, any>) => qs.stringify(params, { indices: false }));
    config.paramsSerializer = serializer;
    return config;
}

export interface RepositoryRequest<D = any> extends AxiosRequestConfig<D> { }

export interface RepositoryResponse<T = any, D = any> extends AxiosResponse<T, D> { }