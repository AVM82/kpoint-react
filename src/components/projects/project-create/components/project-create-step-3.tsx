import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { FC } from 'react';

import { EditProjectsPropsType } from '../../../../common/types/projects/projects';

export const ProjectCreateStep3Form: FC<EditProjectsPropsType> = (
  { projectData, handleChange, handleFieldFocus, errors }) => {
  return (
    <Grid container rowSpacing={3}>
      Дедлайн
      <Grid container columnSpacing={10}>
        <Grid item xs={6}>
          <TextField
            label="Дата початку"
            fullWidth
            value={projectData.collectDeadline}
            // defaultValue={project.collectDeadline}
            onChange={(e): void => handleChange('collectDeadline', e.target.value)}
            onFocus={(): void => handleFieldFocus('collectDeadline')}
            error={!!errors.collectDeadline}
            helperText={errors.collectDeadline}
            type={'date'}
            required
            margin={'normal'}
            // autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} mb={3}>
          <TextField
            label="Дата закінчення"
            fullWidth
            value={projectData.goalDeadline}
            // defaultValue={project.goalDeadline}
            onChange={(e): void => handleChange('goalDeadline', e.target.value)}
            onFocus={(): void => handleFieldFocus('goalDeadline')}
            error={!!errors.goalDeadline}
            helperText={errors.goalDeadline}
            type={'date'}
            required
            margin={'normal'}
            // autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
      </Grid>
      Задачі та Етапи Реалізації
      <Grid item xs={12}>
        <TextField
          label="Етап 1"
          fullWidth
          // value={projectData.title}
          // onChange={(e): void => handleChange('title', e.target.value)}
          // onFocus={(): void => handleFieldFocus('title')}
          // error={!!errors.title}
          // helperText={errors.title}
          // type={'text'}
          // required
          // id="description"
          // name="description"
          // helperText={'Ідея. Проблема, яку вирішує проєкт'}
          // value={project.description}
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
          label="Етап 2"
          fullWidth
          // error
          type={'text'}
          // required
          // id="description"
          // name="description"
          // helperText={'Ідея. Проблема, яку вирішує проєкт'}
          // value={project.description}
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
          label="Етап 3"
          fullWidth
          // error
          type={'text'}
          // required
          // id="description"
          // name="description"
          // helperText={'Ідея. Проблема, яку вирішує проєкт'}
          // value={project.description}
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
          label="Етап 4"
          fullWidth
          // error
          type={'text'}
          // required
          // id="description"
          // name="description"
          // helperText={'Ідея. Проблема, яку вирішує проєкт'}
          // value={project.description}
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
