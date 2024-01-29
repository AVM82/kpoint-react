import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ProjectType } from 'common/types/projects/project.type';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { generateGoogleMapsLink } from 'utils/function-generate-google-maps-link';
import { getSocialMediaIcon } from 'utils/function-social-media-icons';

import { CustomTimeline } from '../common/time-line/time-line';

interface ProjectPageProps {
  project: ProjectType;
  allStatuses: string[];
}

const ProjectPage: FC<ProjectPageProps> = ({ project, allStatuses }) => {
  const { t } = useTranslation();

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia sx={{ height: 140 }} image={project.logoImgUrl} title={project.title} />
      {Object.entries(project.networksLinks).map(([network, link]) => (
        <Link key={network} href={link} underline="none" color="black">
          {getSocialMediaIcon(network)}
        </Link>
      ))}
      <CardContent>
        <CardMedia
          sx={{ height: 140 }}
          image="/public/images/Logo.jpg"
          title="logo"
        />
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.summary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t('description')}: {project.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t('owner')}: {project.owner.firstName}     {/*  create user info*/}
        </Typography>
      </CardContent>
      <CustomTimeline allStatuses={allStatuses} currentStatus={project.state} />
      <Link href={generateGoogleMapsLink(project)} underline="none" color="black">
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          {t('buttons.location')}
        </Fab>
      </Link>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="large">{t('buttons.subscribe')}</Button>
        <Button size="large">{t('buttons.donate')}</Button>
        <Button size="large">{t('buttons.support')}</Button>
      </CardActions>
    </Card>
  );
};

export { ProjectPage };
