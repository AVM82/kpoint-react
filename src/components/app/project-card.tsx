import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectsProps {
  project_id: string;
  title: string;
  summary: string
  logoImgUrl: string
}

const ProjectCard: FC<ProjectsProps> = ({ project_id, title, summary, logoImgUrl }) => {

  const { t } = useTranslation();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ logoImgUrl }
        title={ title }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { summary }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{t('share_button')}</Button>
        <Button size="small" href={'projects/'.concat(project_id)}>
          {t('learn_more_button')}
        </Button>
      </CardActions>
    </Card>);
};

export { ProjectCard };
