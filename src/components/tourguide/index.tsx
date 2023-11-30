import React, { useContext, useEffect, useState } from 'react';
import SessionContext from '../../api/session/context';
import tour from './library/tour';
import 'shepherd.js/dist/css/shepherd.css';
import './index.css';
import { IStep } from './interfaces/step';
import { Step } from 'react-shepherd';
import ModalTour from './components/modal-tour';
import t from '../../utils/translate';
import { trackGTMEventActionTourGuide } from '../../utils/analytics';

interface TourProps {
  enableTourGuide: boolean;
  steps: IStep[];
  canSkip: boolean;
  setEnableTourGuide: React.Dispatch<React.SetStateAction<boolean>>;
  onFinish: () => void;
}

const TourGuide: React.FC<TourProps> = props => {
  const {
    auth: { sellerName },
  } = useContext(SessionContext);
  const { enableTourGuide, steps, canSkip, setEnableTourGuide, onFinish } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(enableTourGuide);
  }, [enableTourGuide]);

  useEffect(() => {
    if (steps) {
      steps.forEach((step: IStep, i) => {
        const buttonsStep: Step.StepOptionsButton[] = [];

        if (canSkip) {
          buttonsStep.push(
            {
              classes: 'tour-count-text',
              text: `${step.position}/${steps.length}`,
            },
            {
              classes: 'tour-button-secondary',
              text: t('tourGuideSkip'),
              action: () => {
                closeTour(false, step);
              },
            },
            {
              classes: 'tour-button-primary',
              text: t('tourGuideNext'),
              action:
                steps.length === step.position
                  ? () => {
                      closeTour(true, step);
                    }
                  : () => {
                      nextStep(step);
                    },
            },
          );
        } else {
          buttonsStep.push(
            {
              classes: 'tour-count-text',
              text: `${step.position}/${steps.length}`,
            },
            {
              classes: 'tour-button-secondary',
              text: '',
            },
            {
              classes: 'tour-button-primary',
              text: t('tourGuideNext'),
              action:
                steps.length === step.position
                  ? () => {
                      closeTour(true, step);
                    }
                  : () => {
                      nextStep(step);
                    },
            },
          );
        }

        tour.addStep({
          id: `step-${i}`,
          text: getTextStep(step),
          attachTo: {
            element: step.classAttach,
            on: step.placement,
          },
          buttons: buttonsStep,
          beforeShowPromise: async () => {
            return await new Promise<void>((resolve, reject) => {
              if (i > 0) {
                tour.removeStep(`step-${i - 1}`);
              }
              resolve();
            });
          },
        });
      });
    }
  }, []);

  const nextStep = (step: IStep):void => {
    tour.next();
    const position = step.position + 1;
    trackGTMEventActionTourGuide({
      action: `Step ${position}: ${step.title} - Clic en botón siguiente`,
      category: 'Interacciones Tour Guide',
      tag: sellerName,
      tourGuide: canSkip ? 'Revisualizar' : 'Ingresa por primera vez',
    });
  };

  const closeTour = (endTour: boolean, step: IStep):void => {
    tour.cancel();
    const position = step.position + 1;
    if (endTour) {
      setOpen(true);
      trackGTMEventActionTourGuide({
        action: `Step ${position}: ${step.title} -Clic en botón siguiente`,
        category: 'Interacciones Tour Guide',
        tag: sellerName,
        tourGuide: canSkip ? 'Revisualizar' : 'Ingresa por primera vez',
      });
    } else {
      trackGTMEventActionTourGuide({
        action: `Step ${position}: ${step.title} - Clic en botón saltar`,
        category: 'Interacciones Tour Guide',
        tag: sellerName,
        tourGuide: canSkip ? 'Revisualizar' : 'Ingresa por primera vez',
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const getCloseStep = (step: IStep):string => {
    let response = '';
    if (canSkip) {
      response = `<div style="display:flex; justify-content:end; margin-right:20px" onclick="closed('Step  ${step.position +
        1}: ${
        step.title
      } - Clic en botón saltar &${sellerName}')"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd"clip-rule="evenodd" d="M13.4141 12.5002L17.7071 8.20725C18.0981 7.81625 18.0981 7.18425 17.7071 6.79325C17.3161 6.40225 16.6841 6.40225 16.2931 6.79325L12.0001 11.0862L7.70713 6.79325C7.31613 6.40225 6.68413 6.40225 6.29313 6.79325C5.90213 7.18425 5.90213 7.81625 6.29313 8.20725L10.5861 12.5002L6.29313 16.7933C5.90213 17.1843 5.90213 17.8162 6.29313 18.2072C6.48813 18.4022 6.74413 18.5002 7.00013 18.5002C7.25613 18.5002 7.51213 18.4022 7.70713 18.2072L12.0001 13.9142L16.2931 18.2072C16.4881 18.4022 16.7441 18.5002 17.0001 18.5002C17.2561 18.5002 17.5121 18.4022 17.7071 18.2072C18.0981 17.8162 18.0981 17.1843 17.7071 16.7933L13.4141 12.5002Z" fill="#166DC2"/>
      </svg></div>`;
    }
    return response;
  };

  const getTextStep = (step: IStep):string => {
    const newScript = document.createElement('script');
    newScript.innerHTML = `
    function closed(action){
      dataLayer.push({
        'accion': action.split('&')[0] ,
        'category': 'Interacciones Tour Guide',
        'tag': action.split('&')[1],
        'tourGuide':'Revisualizar',
        'event': 'event-interactive'
      } );
      tour.cancel();
      window.location.reload();
    }`;
    document.body.appendChild(newScript);
    return `<script>
    dataLayer = [];
  </script><div><div class='content-title'><div class='item-title'><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.49976 10C1.24376 10 0.987762 9.902 0.792762 9.707C0.401762 9.316 0.401762 8.684 0.792762 8.293L4.09776 4.988L0.917762 1.695C0.534762 1.297 0.545762 0.663997 0.942762 0.280997C1.34076 -0.102003 1.97376 -0.0910028 2.35676 0.304997L6.21876 4.305C6.59776 4.698 6.59276 5.321 6.20676 5.707L2.20676 9.707C2.01176 9.902 1.75576 10 1.49976 10Z" fill="#FF8A00"/>
    </svg></div><div style="display:flex; flex-direction:row;" class='item-title'><p class='title-content'>${
      step.title
    }${getCloseStep(
      step,
    )}</p></div></div><div  class='content-title'> <div class='item-title'><svg style=' visibility: hidden;' width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.49976 10C1.24376 10 0.987762 9.902 0.792762 9.707C0.401762 9.316 0.401762 8.684 0.792762 8.293L4.09776 4.988L0.917762 1.695C0.534762 1.297 0.545762 0.663997 0.942762 0.280997C1.34076 -0.102003 1.97376 -0.0910028 2.35676 0.304997L6.21876 4.305C6.59776 4.698 6.59276 5.321 6.20676 5.707L2.20676 9.707C2.01176 9.902 1.75576 10 1.49976 10Z" fill="#FF8A00"/>
    </svg></div><div class='item-title'><p id="demo"  class='description-content'>${
      step.description
    }</p></div></div></div>`;
  };

  return (
    <div>
      {steps.length > 0 ? (
        <ModalTour
          start={enableTourGuide}
          tour={tour}
          onFinish={onFinish}
          setEnableTourGuide={setEnableTourGuide}
          openModal={open}
          canSkip={canSkip}
          sizeTour={steps.length}
          lengthTour={steps.length + 1}
        />
      ) : null}
    </div>
  );
};

export default TourGuide;
