import { HttpMethod } from 'common/enums/http/http-method.enum';
import { ProjectsType } from 'common/types/types';

import { Http } from '../http/http.service';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class ProjectApi {

  #http: Http;

  #apiPrefix: string;

  public constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public getById(payload: { id: number }): Promise<ProjectsType> {
    return this.#http.load(
      `${this.#apiPrefix}/projects/${payload.id}`, {
        method: HttpMethod.GET,
      },
    );
  }

  public getAllProjects(payload:{ size: number, number: number }): Promise<ProjectsPageType> {
    return this.#http.load(
      `${this.#apiPrefix}/projects?size=${payload.size}&number=${payload.number}`, {
        method: HttpMethod.GET,
        queryString: {
          size: payload.size,
          page: payload.number,
        },
      },
    );
  }
}

export { ProjectApi };
