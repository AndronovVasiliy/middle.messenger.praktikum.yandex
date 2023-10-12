enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type RequestOptions = {
  method: HTTPMethod;
  headers?: Record<string, string>;
  data?: Record<string, any>;
};

function queryStringify(data: Record<string, any>): string {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}

export class HTTPTransport {
  get = (
    url: string,
    options: RequestOptions,
    timeout = 5000,
  ): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.GET }, timeout);

  post = (
    url: string,
    options: RequestOptions,
    timeout = 5000,
  ): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.POST }, timeout);

  put = (
    url: string,
    options: RequestOptions,
    timeout = 5000,
  ): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.PUT }, timeout);

  delete = (
    url: string,
    options: RequestOptions,
    timeout = 5000,
  ): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.DELETE }, timeout);

  request = (url: string, options: RequestOptions, timeout = 5000): Promise<XMLHttpRequest> => {
    const { headers = {}, method, data } = options;

    return new Promise<XMLHttpRequest>((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data ? `${url}${queryStringify(data)}` : url,
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      // eslint-disable-next-line func-names
      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data)); // Может потребоваться сериализация данных
      }
    });
  };
}
