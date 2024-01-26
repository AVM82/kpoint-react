import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ProjectCard } from './project-card';
import styles from './style.module.scss';

const ProjectsPage: FC = () => {

  const { t } = useTranslation();

  return (
    <div className={styles.div}>
      <Typography variant="h3" align="center">{t('projects')}</Typography>
      <TextField label={t('search_field')} sx={{ margin: 2, display: 'flex', justifyContent: 'center' }}></TextField>
      <Grid container spacing={5} direction="column" justifyContent="center" alignItems="center">
        <Grid container item spacing={5} direction="row" justifyContent="center" alignItems="center">
          <Grid item>
            <ProjectCard/>
          </Grid>
          <Grid item>
            <ProjectCard/>
          </Grid>
          <Grid item>
            <ProjectCard/>
          </Grid>
        </Grid>
        <Grid container item spacing={5} direction="row" justifyContent="center" alignItems="center">
          <Grid item>
            <ProjectCard/>
          </Grid>
          <Grid item>
            <ProjectCard/>
          </Grid>
          <Grid item>
            <ProjectCard/>
          </Grid>
        </Grid>
        <Grid container item spacing={5} direction="row" justifyContent="center" alignItems="center">
          <Grid item>
            <ProjectCard/>
          </Grid>
          <Grid item>
            <ProjectCard/>
          </Grid>
          <Grid item>
            <ProjectCard/>
          </Grid>
        </Grid>
      </Grid>
      <Pagination count={10} showFirstButton showLastButton
        sx={{ margin: 2, display: 'flex', justifyContent: 'center' }} />
    </div>);
};

export { ProjectsPage };
