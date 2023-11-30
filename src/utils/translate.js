import objectHasProperty from './objectHasProperty';
import translations from './translations/es.json';

const translate = (key, values = false) => {
  let result = key;
  if (objectHasProperty(translations, key)) {
    result = translations[key];
  } else {
    // if (process.env.NODE_ENV !== 'production') {
    //   console.log('Missing translation', key);
    //   console.trace();
    // }
  }

  if (typeof values === 'object') {
    Object.keys(values).forEach(param => (result = result.replace(`%${param}%`, values[param])));
  }

  return result;
};

export default translate;
