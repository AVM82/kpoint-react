import { ENV } from '../common/enums/enums';
import { Http } from './http/http.service';
import { Notification } from './notification/notification.service';
import { ProjectApi } from './projects/project-api';
import { Storage } from './storage/storage.service';

const storage = new Storage({ storage: localStorage });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const http = new Http({ storage });

const projectApi =  new ProjectApi({ http, apiPrefix: ENV.API_PATH });

const notification = new Notification();

export { notification,projectApi,storage };

