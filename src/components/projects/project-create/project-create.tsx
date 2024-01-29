import { Box, Button, Container, CssBaseline, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { projectAction } from 'store/actions';

import { ProjectsEditType } from '../../../common/types/projects/projects';
import { useAppDispatch } from '../../../hooks/hooks';
import { projectDefault } from './components/ProgectDefault';
import { ProjectCreateStep1Form } from './components/project-create-step-1';
import { ProjectCreateStep2Form } from './components/project-create-step-2';
import { ProjectCreateStep3Form } from './components/project-create-step-3';

const steps: string[] = ['Загальна інформація', 'Про проєкт', 'План реалізації'];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getStepContent = (
  step: number,
  newProject: ProjectsEditType,
  setProject: (project: ProjectsEditType) => void,
) => {
  switch(step) {
  case 1: return <ProjectCreateStep1Form project={ newProject } setProject={ setProject }/>;
  case 2: return <ProjectCreateStep2Form project={ newProject } setProject={ setProject }/>;
  case 3: return <ProjectCreateStep3Form project={ newProject } setProject={ setProject }/>;
  default: throw new Error('Unknown step');
  }
};

export const ProjectCreate: FC = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useAppDispatch();

  const [
    newProject,
    setNewProject,
  ] = useState<ProjectsEditType>(projectDefault);

  const [
    activeStep,
    setActiveStep,
  ] = useState(1);

  const handleNext = (): void => {
    setActiveStep(activeStep + 1);

    setNewProject(newProject);

    if (activeStep === steps.length) {
      dispatch(projectAction.createNew({ newProject }));
    }
  };

  const handleBack = () : void => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" align="center" sx={{ p: 2 }}>
          Новий проєкт
        </Typography>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 1 }, p: { xs: 2, md: 3 } }}>
          <Stepper activeStep={activeStep - 1} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep > steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Новий проект створено.
              </Typography>
              <Typography variant="subtitle1">
                Ми надіслали підтвердження вашого замовлення електронною поштою та надішлемо вам оновлення,
                коли ваше замовлення буде доставлено.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, newProject, setNewProject)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 1 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    НАЗАД
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length ? 'ЗБЕРЕГТИ' : 'ДАЛІ'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
};
