import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { FC } from 'react';

import { EditProjectsPropsType } from '../../../../common/types/projects/projects';

export const ProjectCreateStep2Form: FC<EditProjectsPropsType> = (
  { projectData, handleChange, handleFieldFocus, errors }) => {

  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <TextField
          label="Опис проєкта"
          fullWidth
          value={projectData.description}
          onChange={(e): void => handleChange('description', e.target.value)}
          onFocus={(): void => handleFieldFocus('description')}
          error={!!errors.description}
          helperText={errors.description}
          // type={'text'}
          required
          placeholder={'Ідея. Проблема, яку вирішує проєкт'}
          multiline
          rows={4}
          // autoComplete="given-name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} mt={6}>
        <TextField
          label="Фінансування"
          fullWidth
          // value={projectData.title}
          // onChange={(e): void => handleChange('title', e.target.value)}
          // onFocus={(): void => handleFieldFocus('title')}
          // error={!!errors.title}
          // helperText={errors.title}
          //
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
          // label="Фінансування"
          fullWidth
          // value={projectData.title}
          // onChange={(e): void => handleChange('title', e.target.value)}
          // onFocus={(): void => handleFieldFocus('title')}
          // error={!!errors.title}
          // helperText={errors.title}
          //
          // type={'text'}
          // required
          // id="description"
          // name="description"
          // label="Опис проєкта"
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
          // error
          // type={'text'}
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
