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
        <Link  href="#" underline="none" color="black" sx={{ margin: 1 }}>{t('projects')}</Link>
        <Link  href="#" underline="none" color="black" sx={{ margin: 1 }}>{t('about_us')}</Link>
      </Grid>
      <Grid item>
        <Typography variant="h6" align="center">KEY POINTS</Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" sx={{ margin: 1 }}>{t('log_in')}</Button>
        <Button variant="contained" sx={{ margin: 1 }}>{t('sign_in')}</Button>
      </Grid>
    </Grid>
  );
};

export { Header };
