import { IStep } from './step';

export interface ITourGuideConfiguration {
  steps: IStep[];
  canSkip: boolean;
}
