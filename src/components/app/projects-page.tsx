import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { projectAction } from 'store/actions';

import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch.hook';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector.hook';
import { ProjectCard } from './project-card';
import styles from './style.module.scss';

const ProjectsPage: FC = () => {

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const maxPageElementIndex = 3;

  useEffect(() => {
    dispatch(projectAction.getAllProjects());
  }, [dispatch]);

  const { projects } = useAppSelector(({ project }) => ({
    projects: project.projects,
  }));

  return (
    <div className={styles.div}>
      <Typography variant="h3" align="center">{t('projects')}</Typography>
      <TextField label={t('search_field')} sx={{ margin: 2, display: 'flex', justifyContent: 'center' }}></TextField>
      <Grid container spacing={5} direction="row" justifyContent="center" alignItems="center">
        {projects.slice(0,maxPageElementIndex).map((project) =>
          <Grid item>
            <ProjectCard project_id={project.projectId} title={project.title}
              summary={project.summary} logoImgUrl={project.logoImgUrl}/>
          </Grid>)}
      </Grid>
      <Pagination count={10} showFirstButton showLastButton
        sx={{ margin: 2, display: 'flex', justifyContent: 'center' }} />
    </div>);
};

export { ProjectsPage };
