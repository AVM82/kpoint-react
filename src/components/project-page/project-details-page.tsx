import { FC, useEffect } from 'react';
import { projectAction } from 'store/actions';

import { useAppDispatch } from '../../hooks/hooks';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector.hook';
import { ProjectPage } from './project-page';

const ProjectDetailsPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(projectAction.getById({
      id: 1,
    }));
  }, []);

  const { project } = useAppSelector(({ project }) => ({
    project: project.project,
  }));

  return (
    <div>
      {project ? (
        <ProjectPage
          project={project}
          allStatuses={['NEW', 'GATHERING_FOR_START', 'EARNING', 'SUSPENDED', 'FAILED', 'SUCCESSFUL']} />
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export { ProjectDetailsPage };
