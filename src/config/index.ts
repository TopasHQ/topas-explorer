const config = {
  PROJECT_TITLE: process.env.REACT_APP_PROJECT_TITLE || 'Project',
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || 'https://service.lisk.com',
  GIT_SHA: process.env.REACT_APP_GIT_SHA,
  VERSION: process.env.REACT_APP_VERSION,
  TICKER: process.env.REACT_APP_TICKER || 'LSK',
};

export default config;
