import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { FC } from 'react';

import { EditProjectsPropsType } from '../../../../common/types/projects/projects';

export const ProjectCreateStep2Form: FC<EditProjectsPropsType> = ({ project, setProject }) => {

  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <TextField
          // error
          type={'text'}
          required
          id="description"
          name="description"
          label="Опис проєкта"
          placeholder={'Ідея. Проблема, яку вирішує проєкт'}
          // value={project.description}
          fullWidth
          multiline
          rows={4}
          // autoComplete="given-name"
          variant="outlined"
          onChange={ (event: React.ChangeEvent<HTMLInputElement>): void => {
            event.preventDefault();
            project.description = event.target.value;
            setProject(project);
          }}
        />
      </Grid>
      <Grid item xs={12} mt={6}>
        <TextField
          // error
          type={'text'}
          // required
          // id="description"
          // name="description"
          label="Фінансування"
          // helperText={'Ідея. Проблема, яку вирішує проєкт'}
          // value={project.description}
          fullWidth
          // autoComplete="given-name"
          variant="outlined"
          // onChange={ (event: React.ChangeEvent<HTMLInputElement>): void => {
          //   event.preventDefault();
          //   project.description = event.target.value;
          //   setProject(project);
          // }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          // error
          type={'text'}
          // required
          // id="description"
          // name="description"
          // label="Опис проєкта"
          // helperText={'Ідея. Проблема, яку вирішує проєкт'}
          // value={project.description}
          fullWidth
          // autoComplete="given-name"
          variant="outlined"
          // onChange={ (event: React.ChangeEvent<HTMLInputElement>): void => {
          //   event.preventDefault();
          //   project.description = event.target.value;
          //   setProject(project);
          // }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          // error
          type={'text'}
          // required
          // id="description"
          // name="description"
          // label="Опис проєкта"
          // helperText={'Ідея. Проблема, яку вирішує проєкт'}
          // value={project.description}
          fullWidth
          // autoComplete="given-name"
          variant="outlined"
          // onChange={ (event: React.ChangeEvent<HTMLInputElement>): void => {
          //   event.preventDefault();
          //   project.description = event.target.value;
          //   setProject(project);
          // }}
        />
      </Grid>
    </Grid>
  );
};
