import { authReducer as token } from './auth/reducer';
import { projectReducer as project } from './progects/reducer';

const rootReducer = { project, token };

export { rootReducer };

