import { Box, Button, Container, CssBaseline, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { projectAction } from 'store/actions';

import { ProjectsEditType } from '../../../common/types/projects/projects';
import { useAppDispatch } from '../../../hooks/hooks';
import { projectDefault } from './components/ProgectDefault';
import { ProjectCreateStep1Form } from './components/project-create-step-1';
import { ProjectCreateStep2Form } from './components/project-create-step-2';
import { ProjectCreateStep3Form } from './components/project-create-step-3';

export const ProjectCreate: FC = () => {

  const steps: string[] = [
    'Загальна інформація',
    'Про проєкт',
    'План реалізації'];

  const [
    errors,
    setErrors,
  ] = useState<Record<string, string>>({});

  const [
    activeStep,
    setActiveStep,
  ] = useState(1);

  const [
    projectData,
    setProjectData,
  ] = useState<ProjectsEditType>(projectDefault);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useAppDispatch();

  const handleNext = (): void => {
    const validationErrors = validateForm(projectData);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setErrors(validationErrors);
    }

    if (activeStep === steps.length) {
      dispatch(projectAction.createNew({ projectData }));
    }
  };

  const handleBack = () : void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (field: string, value: string): void => {
    setProjectData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleFieldFocus = (field: string): void => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  const validateForm = (data: ProjectsEditType): Record<string, string> => {
    const errors: Record<string, string> = {};

    switch(activeStep) {
    case 1: {
      if (!data.title.trim() || data.title.trim().length > 30) {
        errors.title = 'Назва проєкту не може бути пуста або мати більше 30 символів';
      } else if (data.tags.length < 1 || data.tags.length > 5) {
        errors.tags = 'Кількість тегів може бути від 1 до 5';
      } else if (!data.summary.trim() || data.summary.trim().length > 150) {
        errors.summary = 'Короткий опис і мета не може бути пуста або мати більше 150 символів';
      }
      break;
    }
    case 2: {
      if (!data.description.trim() || data.description.trim().length > 512) {
        errors.description = 'Опис проєкта не може бути пуста або мати більше 512 символів';
      }
      break;
    }
    case 3: {
      break;
    }
    }

    return errors;
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getStepContent = (
    step: number,
  ) => {
    switch(step) {
    case 1: return <ProjectCreateStep1Form
      projectData={ projectData }
      handleChange={ handleChange }
      handleFieldFocus={ handleFieldFocus }
      errors={ errors }/>;
    case 2: return <ProjectCreateStep2Form
      projectData={ projectData }
      handleChange={ handleChange }
      handleFieldFocus={ handleFieldFocus }
      errors={ errors }/>;
    case 3: return <ProjectCreateStep3Form
      projectData={ projectData }
      handleChange={ handleChange }
      handleFieldFocus={ handleFieldFocus }
      errors={ errors }/>;
    default: throw new Error('Unknown step');
    }
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
              {getStepContent(activeStep)}
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
