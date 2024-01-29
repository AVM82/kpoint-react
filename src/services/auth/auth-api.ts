import { HttpMethod } from 'common/enums/http/http-method.enum';

import { ContentType } from '../../common/enums/file/content-type.enum';
import { SignInType } from '../../common/types/sign-in/sign-in';
import { Http } from '../http/http.service';
import { SignUpType } from '../../common/types/sign-up/sign-up';

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

  public register(payload: SignUpType): Promise<string> {
    console.log(payload);
    return this.#http.load(`${this.#apiPrefix}/auth/register`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }

  public login(payload: SignInType): Promise<string> {
    return this.#http.load(`${this.#apiPrefix}/auth/login`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }
}

export { AuthApi };
