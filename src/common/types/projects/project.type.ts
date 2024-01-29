import { CoordinatesType } from './coordinates.type';
import { NetworksLinks } from './networks-links.type';
import { OwnerType } from './owner.type';

export type ProjectType = {
  owner: OwnerType,
  projectId: string,
  title: string,
  summary: string,
  description: string,
  tags: string[],
  logoImgUrl: string,
  coordinates: CoordinatesType,
  createdAt: string,
  state: string,
  ownerSum: number,
  collectedSum: number,
  startSum: number,
  collectDeadline: string,
  goalSum: number,
  goalDeadline: string,
  networksLinks:NetworksLinks,
};
