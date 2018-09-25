const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const SadPage = require('./pages/sadPage');
const DemoPage = require('./pages/demoPage');
const EmergencyAlertPage = require('./pages/emergencyAlertPage');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'sad': SadPage,
  'demo': DemoPage,
  'emergencyAlert': EmergencyAlertPage,

};
