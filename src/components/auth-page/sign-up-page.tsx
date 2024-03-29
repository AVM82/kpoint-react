import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Chip, ListItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { SignUpType } from '../../common/types/sign-up/sign-up';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch.hook';
import { authAction } from '../../store/actions';

const defaultTheme = createTheme();

type ChipTag = {
  key: number;
  tag: string;
};

const SignUpPage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignUpType>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    repeatedPassword: '',
    avatarImgUrl: '',
    description: '',
    tags: [],
  });

  const location = useLocation();
  const [userData, setUserData] = useState({
    email: '',
    avatarImgUrl: '',
  });

  useEffect(() => {
    console.log('location.state', location.state);

    if (location.state && location.state.userData) {
      const { email, avatarImgUrl } = location.state.userData;
      setUserData({ email, avatarImgUrl });
    }
  }, [location.state]);

  const [
    tag,
    setTag,
  ] = useState('');

  const getChipTags = (): ChipTag[] => {
    const result: ChipTag[] = [];
    for (let i = 0; i < formData.tags.length; i++) {
      result.push({ key: i, tag: formData.tags[i] });
    }

    return result;
  };

  const [chipTags, setChipTags] = useState<ChipTag[]>(getChipTags());

  const handleDeleteTag = (chipToDelete: ChipTag) => () => {
    setChipTags((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key),
    );
    formData.tags = formData.tags.filter((tag) => tag !== chipToDelete.tag);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('formData');
    console.log(formData);
    const dataToSend = {
      ...formData,
      email: userData.email || formData.email,
      avatarImgUrl: userData.avatarImgUrl || formData.avatarImgUrl,
    };

    dispatch(authAction.register(dataToSend))
      .unwrap()
      .then((user) => {
        console.log(user);

        if (user != null) {
          navigate('/sign-in');
        }
      });
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#757575' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('sign_up')}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label={t('first_name')}
                  onChange={handleOnChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label={t('last_name')}
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleOnChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label={t('username')}
                  name="username"
                  autoComplete="username"
                  onChange={handleOnChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={t('email')}
                  name="email"
                  value={userData.email || formData.email}
                  autoComplete="email"
                  onChange={handleOnChange}
                  disabled={!!userData.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={t('password')}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repeatedPassword"
                  label={t('repeated_password')}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="avatarImgUrl"
                  value={ formData.avatarImgUrl || userData.avatarImgUrl }
                  label={t('avatar_url')}
                  id="avatarImgUrl"
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="description"
                  label={t('description')}
                  id="description"
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type={'text'}
                  id="projectTags"
                  name="projectTags"
                  value={tag}
                  label="Теги"
                  fullWidth
                  variant="outlined"
                  onChange={(event): void => {
                    event.preventDefault();
                    setTag(event.target.value);
                  }}
                  onKeyDown={(event): void => {
                    if (event.key === 'Enter') {
                      if (tag.trim().length > 0 && formData.tags.indexOf(tag.trim()) === -1) {
                        formData.tags.push(tag);
                        setChipTags(getChipTags);
                        setTag('');
                      }
                      console.log(formData.tags);
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#757575' }}
            >
              {t('sign_up')}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href={'/sign-in'} variant="body2">
                  {t('already_have_an_account')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export { SignUpPage };
