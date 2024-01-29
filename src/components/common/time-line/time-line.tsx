import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const CustomTimeline: FC<{ allStatuses: string[];
  currentStatus: string }> = ({ allStatuses, currentStatus }) => {
    const { t } = useTranslation();

    return (
      <Timeline position="alternate">
        {allStatuses.map((status, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={status === currentStatus ? 'info' : 'grey'} />
              {index < allStatuses.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography>{t(`statuses.${status}`)}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    );
  };
