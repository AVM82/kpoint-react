import { ProjectType } from '../common/types/projects/project.type';

export function generateGoogleMapsLink(project: ProjectType): string {
  // const { coordinates } = project;
  // const { latitude, longitude } = coordinates;

  return `https://www.google.com/maps/place/${project.latitude},${project.longitude}`;
}
