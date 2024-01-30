import { ProjectsEditType } from './projects-edit.type';

export type EditProjectsPropsType = {
  project: ProjectsEditType
  setProject: (project: ProjectsEditType) => void
};
