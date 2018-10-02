const HomePage = require('./pages/homePage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const SadPage = require('./pages/sadPage');
const HappyPage = require('./pages/happyPage');
const NeutralPage = require('./pages/neutralPage');
const DemoPage = require('./pages/demoPage');
const EmergencyAlertPage = require('./pages/emergencyAlertPage');
const MapsPage = require('./pages/mapsPage');

module.exports = {
  '/': HomePage,
  'team': TeamPage,
  '404': FourOhFour,
  'sad': SadPage,
  'happy': HappyPage,
  'neutral': NeutralPage,
  'demo': DemoPage,
  'emergencyAlert': EmergencyAlertPage,
  'maps' : MapsPage
};
