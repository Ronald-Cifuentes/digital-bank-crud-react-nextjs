import { Tour } from 'react-shepherd';

export interface IModalTourProps {
  start: boolean;
  tour: Tour;
  setEnableTourGuide: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  onFinish: () => void;
  canSkip: boolean;
  sizeTour: number;
  lengthTour: number;
}
