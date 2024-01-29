import { HttpMethod } from 'common/enums/http/http-method.enum';
import { ProjectsEditType, ProjectsType } from 'common/types/types';

import { ContentType } from '../../common/enums/file/content-type.enum';
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

  public createNew(payload: ProjectsEditType): Promise<ProjectsType> {
    return this.#http.load(
      `${this.#apiPrefix}/projects`, {
        method: HttpMethod.POST,
        payload: JSON.stringify(payload),
        contentType: ContentType.JSON,
      },
    );
  }
}

export { ProjectApi };
