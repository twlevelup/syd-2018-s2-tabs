const HomePage = require('./pages/homePage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const SadPage = require('./pages/sadPage');
const HappyPage = require('./pages/happyPage');
const NeutralPage = require('./pages/neutralPage');
const DemoPage = require('./pages/demoPage');
const EmergencyAlertPage = require('./pages/emergencyAlertPage');
const MapsPage = require('./pages/mapsPage');
const DirectionPage = require('./pages/directionPage');
const Place1Page = require('./pages/place1Page');
const MorningPage = require('./pages/morningPage');
const EveningPage = require('./pages/eveningPage');


module.exports = {
  '/': HomePage,
  'team': TeamPage,
  '404': FourOhFour,
  'sad': SadPage,
  'happy': HappyPage,
  'neutral': NeutralPage,
  'demo': DemoPage,
  'emergencyAlert': EmergencyAlertPage,
  'maps' : MapsPage,
  'direction': DirectionPage,
  'place1': Place1Page,
  'morning': MorningPage,
  'evening': EveningPage

};
