import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Header: FC = () => {

  const { t } = useTranslation();

  return (
    <Grid container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: 'lightgray' }}>
      <Grid item>
        <Link  href="/projects" underline="none" color="black" sx={{ margin: 1 }}>{t('projects')}</Link>
        <Link  href="#" underline="none" color="black" sx={{ margin: 1 }}>{t('about_us')}</Link>
        <Link  href="/projects/new" underline="none" color="black" sx={{ margin: 1 }}>{'Новий проєкт'}</Link>
      </Grid>
      <Grid item>
        <Typography variant="h6" align="center">KEY POINTS</Typography>
      </Grid>
      <Grid item>
        <Button href="/sign-in" variant="outlined" sx={{ margin: 1 }}>{t('log_in')}</Button>
        <Button href="/sign-up" variant="contained" sx={{ margin: 1 }}>{t('sign_in')}</Button>
      </Grid>
    </Grid>
  );
};

export { Header };
