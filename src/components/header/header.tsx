import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface LogInProps {
  isLoggedIn: boolean;
}

const Header: FC = () => {

  const { t } = useTranslation();

  function HeaderButtons(props: LogInProps): ReactJSXElement {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
      return (
        <>
          <Button href="/sign-in" variant="outlined" sx={{ margin: 1 }}>{t('buttons.create_project')}</Button>
          <Button href="/sign-up" variant="contained" sx={{ margin: 1 }}>{t('buttons.log_out')}</Button>
        </>);
    }

    return (
      <>
        <Button href="/sign-in" variant="outlined" sx={{ margin: 1 }}>{t('buttons.log_in')}</Button>
        <Button href="/sign-up" variant="contained" sx={{ margin: 1 }}>{t('buttons.sign_in')}</Button>
      </>);

  }

  return (
    <Grid container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: 'lightgray' }}>
      <Grid item>
        <Link  href="/" underline="none" color="black" sx={{ margin: 1 }}>{t('projects')}</Link>
        <Link  href="#" underline="none" color="black" sx={{ margin: 1 }}>{t('about_us')}</Link>
        <Link  href="/projects/new" underline="none" color="black" sx={{ margin: 1 }}>{t('new_project')}</Link>
      </Grid>
      <Grid item>
        <Typography variant="h6" align="center">KEY POINTS</Typography>
      </Grid>
      <Grid item>
        <HeaderButtons isLoggedIn={true}/>
      </Grid>
    </Grid>
  );
};

export { Header };
