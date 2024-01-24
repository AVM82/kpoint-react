import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <Grid container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: 'lightgray' }}>
      <Grid item>
        <Link  href="#" underline="none" color="black" sx={{ margin: 1 }}>Проекти</Link>
        <Link  href="#" underline="none" color="black" sx={{ margin: 1 }}>Про нас</Link>
      </Grid>
      <Grid item>
        <Typography variant="h6" align="center">KEY POINTS</Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" sx={{ margin: 1 }}>Увійти</Button>
        <Button variant="contained" sx={{ margin: 1 }}>Приєднатись</Button>
      </Grid>
    </Grid>
  );
};

export { Header };
