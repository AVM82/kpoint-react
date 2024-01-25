import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavigationIcon from '@mui/icons-material/Navigation';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ProjectsType } from 'common/types/projects/projects.type';
import React, { FC } from 'react';

interface ProjectPageProps {
  project: ProjectsType;
  allStatuses: string[];
}

const CustomTimeline: FC<{ allStatuses: string[]; currentStatus: string }> = ({ allStatuses, currentStatus }) => (
  <Timeline position="alternate">
    {allStatuses.map((status, index) => (
      <TimelineItem key={index}>
        <TimelineSeparator>
          <TimelineDot color={status === currentStatus ? 'info' : 'grey'} />
          {index < allStatuses.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Typography>{status}</Typography>
        </TimelineContent>
      </TimelineItem>
    ))}
  </Timeline>
);

const ProjectPage: FC<ProjectPageProps> = ({ project, allStatuses }) => (
  <Card sx={{ maxWidth: '100%' }}>
    <CardMedia sx={{ height: 140 }} image={project.logo} title={project.title} />
    <Link  href="#" underline="none" color="black"><YouTubeIcon sx={{ margin: 1 }}></YouTubeIcon></Link>
    <Link  href="#" underline="none" color="black"><FacebookIcon sx={{ margin: 1 }}></FacebookIcon></Link>
    <Link  href="#" underline="none" color="black"><TwitterIcon sx={{ margin: 1 }}></TwitterIcon></Link>
    <Link  href="#" underline="none" color="black"><InstagramIcon sx={{ margin: 1 }}></InstagramIcon></Link>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {project.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {project.summary}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Description: {project.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Owner: {project.owner}
      </Typography>
    </CardContent>
    <CustomTimeline allStatuses={allStatuses} currentStatus={project.status} />
    <Fab variant="extended">
      <NavigationIcon sx={{ mr: 1 }} />
      Location
    </Fab>
    <CardActions sx={{ justifyContent: 'flex-end' }}>
      <Button size="large">Subscribe</Button>
      <Button size="large">Donate</Button>
      <Button size="large">Support</Button>
    </CardActions>
  </Card>
);

export { ProjectPage };
