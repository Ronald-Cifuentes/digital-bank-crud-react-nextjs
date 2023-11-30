import Shepherd from 'shepherd.js';

const tourOptions = {
  defaultStepOptions: {
    classes: 'tour-content',
    scrollTo: true,
    showCancelLink: true,
  },
  useModalOverlay: true,
};

const tour = new Shepherd.Tour(tourOptions);

window.tour = tour;

export default tour;
