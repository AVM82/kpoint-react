import { HttpMethod } from 'common/enums/http/http-method.enum';

import { Http } from '../http/http.service';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class AuthApi {
  #http: Http;

  #apiPrefix: string;

  public constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public login(payload: { id: number }): Promise<string> {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const body = JSON.stringify({ email, password });

    return this.#http.load(`${this.#apiPrefix}/auth/login`, {
      method: HttpMethod.GET,
    });
  }
}

export { AuthApi };
