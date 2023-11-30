import StepOptionsAttachTo from 'react-shepherd';

export interface IStep {
  title: string;
  description: string;
  classAttach: string;
  placement: StepOptionsAttachTo.Step.PopperPlacement;
  position: number;
}
