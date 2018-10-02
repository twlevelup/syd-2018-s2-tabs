const HomePage = require('./pages/homePage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const SadPage = require('./pages/sadPage');
const DemoPage = require('./pages/demoPage');
const EmergencyAlertPage = require('./pages/emergencyAlertPage');
const MapsPage = require('./pages/mapsPage');

module.exports = {
  '/': HomePage,
  'team': TeamPage,
  '404': FourOhFour,
  'sad': SadPage,
  'demo': DemoPage,
  'emergencyAlert': EmergencyAlertPage,
  'maps' : MapsPage
};
