/**
 * Методы запроса
 */
export const enum RequestMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'  
}

/**
 * Настройки запроса
 */
export interface RequestOptions {
    method: RequestMethods;
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
    get = (url: string, options: RequestOptions) => {		 
        return this.request(url, {...options, method: RequestMethods.GET}, options.timeout);
    };
    request = (url: string, options: RequestOptions, timeout = 5000) => {
        const {method, headers, data} = options;

        return new Promise((resolve, reject) => {
            const isGet = method === RequestMethods.GET || !data; 
            const xhr = new XMLHttpRequest();  
            xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

            if(headers && typeof(headers) === 'object') {
                Object.entries(headers).forEach(([key, value]) => {
                    xhr.setRequestHeader(key, value);
                })
            }

            xhr.timeout = timeout;
        
            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
        
            if (isGet) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };          
}

export default HTTPTransport;
