import Constants from 'expo-constants';

const ENV = {
  dev: {
    apiUrl: 'http://10.0.0.64:3000',
  },
  staging: {
    apiUrl: 'https://instadate-api.herokuapp.com',
  },
  prod: {
    apiUrl: 'https://instadate-api.herokuapp.com',
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (env === undefined) {
    return ENV.dev;
  } else if (env === 'staging') {
    return ENV.staging;
  } else if (env === 'prod') {
    return ENV.prod;
  }
};

export default getEnvVars;
