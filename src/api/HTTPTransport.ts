import { ApiHost } from '../constants/commonConstants';

/**
 * Тип метода запроса
 */
type HTTPMethod = <R=unknown>(url: string, options?: RequestOptions) => Promise<R>

/**
 * Контракт для HTTPTransport 
 */
interface IHTTPTransport {
    /**
     * GET запрос
     */
    get: HTTPMethod;
    
    /**
     * POST запрос
     */
    post: HTTPMethod;
    
    /**
     * PUT запрос
     */
    put: HTTPMethod;
    
    /**
     * DELETE запрос
     */
    delete: HTTPMethod;
}

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
class HTTPTransport implements IHTTPTransport {
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
            xhr.open(method, encodeURI(isGet && !!data 
                ? `${this.url}${endpoint}${queryStringify(data)}` 
                : `${this.url}${endpoint}`)
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

    get: HTTPMethod = (endpoint: string, options?: RequestOptions) => {		 
        return this.request(
            endpoint,
            RequestMethods.GET,
            {...options}, 
            options?.timeout
        );
    };

    post: HTTPMethod = (endpoint: string, options?: RequestOptions) => {		 
        return this.request(
            endpoint,
            RequestMethods.POST,
            {...options}, 
            options?.timeout
        );
    };

    put: HTTPMethod = (endpoint: string, options?: RequestOptions) => {		 
        return this.request(
            endpoint,
            RequestMethods.PUT,
            {...options}, 
            options?.timeout
        );
    };

    delete: HTTPMethod = (endpoint: string, options?: RequestOptions) => {		 
        return this.request(
            endpoint,
            RequestMethods.DELETE,
            {...options}, 
            options?.timeout
        );
    };
}

export default HTTPTransport;
