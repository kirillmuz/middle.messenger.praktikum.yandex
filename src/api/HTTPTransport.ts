import { ApiHost } from '../constants/commonConstants';

/**
 * Методы запроса
 */
const enum RequestMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'  
}

/**
 * Настройки запроса
 */
export interface RequestOptions {
    headers?: object;
    data?: object;
    timeout?: number;
}

/**
 * Конвертация объекта в строку запроса
 */
const queryStringify = (data: object) => {
    const queryParts = Object.entries(data).map(([key, value]) => {
        return `${key}=${value?.toString()}`
    });
    return `?${queryParts.join('&')}`;
}

/**
 * Класс взаимодействия с API
 */
class HTTPTransport {
    private url: string = '';

    constructor(path: string) {
        this.url = `${ApiHost}${path}`;
    }

    private request = <TResponse>(
        endpoint: string, 
        method: RequestMethods, 
        options: RequestOptions, 
        timeout = 5000
    ) => {
        const {headers, data} = options;

        return new Promise<TResponse>((resolve, reject) => {
            const isGet = method === RequestMethods.GET || !data; 
            const xhr = new XMLHttpRequest();  
            xhr.open(method, isGet && !!data 
                ? `${this.url}${endpoint}${queryStringify(data)}` 
                : `${this.url}${endpoint}`
            );

            if(headers && typeof(headers) === 'object') {
                Object.entries(headers).forEach(([key, value]) => {
                    xhr.setRequestHeader(key, value);
                })
            }
            xhr.timeout = timeout;
            xhr.withCredentials = true;

            xhr.onload = function() {
                if(xhr.status != 200) {
                    reject(xhr.responseText);
                }
                if(xhr.response === 'OK') {
                    resolve(xhr.response as unknown as TResponse);
                } else {
                    resolve(JSON.parse(xhr.response) as unknown as TResponse);
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
        
            if (isGet) {
                xhr.send();
            } else if (data instanceof FormData) {
                xhr.send(data);
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };        

    get = <TResponse>(endpoint: string, options?: RequestOptions) => {		 
        return this.request<TResponse>(
            endpoint,
            RequestMethods.GET,
            {...options}, 
            options?.timeout
        );
    };

    post = <TResponse>(endpoint: string, options?: RequestOptions) => {		 
        return this.request<TResponse>(
            endpoint,
            RequestMethods.POST,
            {...options}, 
            options?.timeout
        );
    };

    put = <TResponse>(endpoint: string, options?: RequestOptions) => {		 
        return this.request<TResponse>(
            endpoint,
            RequestMethods.PUT,
            {...options}, 
            options?.timeout
        );
    };

    delete = <TResponse>(endpoint: string, options?: RequestOptions) => {		 
        return this.request<TResponse>(
            endpoint,
            RequestMethods.DELETE,
            {...options}, 
            options?.timeout
        );
    };      
}

export default HTTPTransport;
