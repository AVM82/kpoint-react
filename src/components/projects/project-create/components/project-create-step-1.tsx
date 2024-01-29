import { Autocomplete, Avatar, Chip, Grid, ListItem, TextField } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';

import { CitiesType,EditProjectsPropsType } from '../../../../common/types/projects/projects';
import { cities } from './Cities';

const citiesProps = {
  options: cities,
  getOptionLabel: ( option: CitiesType ): string => option.name,
};

type ChipTag = {
  key: number;
  tag: string;
};

export const ProjectCreateStep1Form: FC<EditProjectsPropsType> = ({ project, setProject }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [
    tag,
    setTag,
  ] = useState('');

  const getChipTags = (): ChipTag[] => {
    const result: ChipTag[] = [];
    for (let i = 0; i < project.tags.length; i++) {
      result.push({ key: i, tag: project.tags[i] });
    }

    return result;
  };

  const [
    chipTags,
    setChipTags,
  ] = useState<ChipTag[]>(getChipTags());

  const handleDeleteTag = (chipToDelete: ChipTag) => () => {
    setChipTags((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    project.tags = project.tags.filter((tag) => tag !== chipToDelete.tag);
  };

  return (
    <Grid container rowSpacing={3}>
      <Grid container>
        <Grid item xs={3}>
          <Avatar
            alt="Логотип"
            src="/avatar_default.svg"
            sx={{ width: 116, height: 116, border: 1, mt: 2.5, ml: 4 }}
            variant="rounded"
          >
          </Avatar>
          {/*img*/}
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={true}>
            <TextField
              // placeholder={'1234'}
              // error
              type={'text'}
              required
              id="projectName"
              name="projectName"
              label="Назва проєкту"
              fullWidth
              margin={'normal'}
              // autoComplete="given-name"
              variant="outlined"
              defaultValue={project.title}
              onChange={ (event: React.ChangeEvent<HTMLInputElement>): void => {
                event.preventDefault();
                project.title = event.target.value;
                setProject(project);
              }}
            />
          </Grid>
          <Grid item xs={true}>
            <Autocomplete
              {...citiesProps}
              id="citi"
              // name="citi"
              // defaultValue={project.city}
              // onChange={ (event, newValue: CitiesType | null): void => {
              //   event.preventDefault();
              //   project.city = newValue;
              //   setProject(project);
              // }}
              renderInput={(params): ReactElement => (
                <TextField
                  {...params}
                  required
                  // id="citi"
                  // name="citi"
                  label="Місто"
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          // error
          type={'text'}
          required
          id="projectCategory"
          name="projectCategory"
          label="Категорія"
          fullWidth
          // autoComplete="given-name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          // error
          type={'text'}
          required
          id="projectTags"
          name="projectTags"
          value={tag}
          label="Теги"
          fullWidth
          // autoComplete="given-name"
          variant="outlined"
          onChange={ (event): void => {
            event.preventDefault();
            setTag(event.target.value);
          }}
          onKeyDown={ ( event ):void => {
            if (event.key === 'Enter') {
              if (tag.trim().length > 0 && project.tags.indexOf(tag.trim()) === -1) {
                project.tags.push(tag);
                setChipTags(getChipTags);
                setTag('');
              }
              // eslint-disable-next-line no-console
              console.log(project.tags);
              event.preventDefault();
            }
          }}
        />
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          {chipTags.map((data) => {
            return (
              <ListItem alignItems={'center'} key={data.key}>
                <Chip
                  sx={{
                    height: 'auto',
                    '& .MuiChip-label': {
                      display: 'block',
                      whiteSpace: 'normal',
                    },
                  }}
                  label={data.tag}
                  onDelete={handleDeleteTag(data)}
                />
              </ListItem>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          // error
          type={'text'}
          required
          id="summary"
          name="summary"
          label="Короткий опис і мета"
          fullWidth
          multiline
          rows={4}
          // autoComplete="given-name"
          variant="outlined"
          defaultValue={project.title}
          onChange={ (event: React.ChangeEvent<HTMLInputElement>): void => {
            event.preventDefault();
            project.summary = event.target.value;
            setProject(project);
          }}
        />
      </Grid>
    </Grid>
  );
};
