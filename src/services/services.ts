import { Http } from './http/http.service';
import { Notification } from './notification/notification.service';
import { Storage } from './storage/storage.service';

const storage = new Storage({ storage: localStorage });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const http = new Http({ storage });

const notification = new Notification();

export { notification,storage };
