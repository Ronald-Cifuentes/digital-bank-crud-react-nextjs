import TagManager from 'react-gtm-module';




export const trackGTMEventActionTourGuide = (props: {
  category: string;
  action: string;
  tag: string;
  tourGuide: string;
}): void => {
  const { category, action, tag, tourGuide } = props;

  const tagManagerArgs = {
    dataLayer: {
      category,
      accion: action,
      tag,
      event: 'event-interactive',
      tourGuide,
    },
  };

  TagManager.dataLayer(tagManagerArgs);
};
