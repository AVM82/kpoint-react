import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { FC } from 'react';

import { EditProjectsPropsType } from '../../../../common/types/projects/projects';

export const ProjectCreateStep3Form: FC<EditProjectsPropsType> = ({ project, setProject }) => {
  return (
    <Grid container rowSpacing={3}>
      Дедлайн
      <Grid container columnSpacing={10}>
        <Grid item xs={6}>
          <TextField
            // error
            type={'date'}
            required
            id="projectDeadlineStart"
            name="projectDeadlineStart"
            label="Дата початку"
            fullWidth
            margin={'normal'}
            // autoComplete="given-name"
            variant="outlined"
            defaultValue={project.collectDeadline}
            onChange={ (event: React.ChangeEvent<HTMLInputElement>): void => {
              event.preventDefault();
              project.goalDeadline = event.target.value;
              setProject(project);
            }}
          />
        </Grid>
        <Grid item xs={6} mb={3}>
          <TextField
            // error
            type={'date'}
            required
            id="projectDeadlineEnd"
            name="projectDeadlineEnd"
            label="Дата закінчення"
            fullWidth
            margin={'normal'}
            // autoComplete="given-name"
            variant="outlined"
            defaultValue={project.goalDeadline}
            // onChange={ (event: React.ChangeEvent<HTMLInputElement>): void => {
            //   setName(event.target.value);
            // }}
          />
        </Grid>
      </Grid>
      Задачі та Етапи Реалізації
      <Grid item xs={12}>
        <TextField
          // error
          type={'text'}
          // required
          // id="description"
          // name="description"
          label="Етап 1"
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
          label="Етап 2"
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
          label="Етап 3"
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
          label="Етап 4"
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
