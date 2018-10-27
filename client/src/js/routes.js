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
const EmergencyMessageSentPage = require('./pages/emergencyMessageSentPage');
const ContactPolicePage = require('./pages/contactPolicePage');
const ContactFriendPage = require('./pages/contactFriendPage');
const ContactFriend2Page = require('./pages/contactFriend2Page');
const ContactHospitalPage = require('./pages/contactHospitalPage');
const GamesPage = require('./pages/gamesPage');
const MedicinePage = require('./pages/medicinePage');
const GamesListPage = require('./pages/gamesListPage');
const CalendarPage = require('./pages/calendarPage');
const WalkingListPage = require('./pages/walkingListPage');
const TodayPage = require('./pages/todayPage');
const SuccessMedPage = require('./pages/successMedPage');
const WalkingActivityPage = require('./pages/walkingActivityPage');

module.exports = {
  '/': HomePage,
  'team': TeamPage,
  '404': FourOhFour,
  'sad': SadPage,
  'happy': HappyPage,
  'games': GamesPage,
  'neutral': NeutralPage,
  'demo': DemoPage,
  'emergencyAlert': EmergencyAlertPage,
  'maps' : MapsPage,
  'direction': DirectionPage,
  'place1': Place1Page,
  'morning': MorningPage,
  'evening': EveningPage,
  'emergencyMessageSentPage' : EmergencyMessageSentPage,
  'contactpolice': ContactPolicePage,
  'contacthospital': ContactHospitalPage,
  'contactfriend': ContactFriendPage,
  'contactfriend2': ContactFriend2Page,
  'takemed': MedicinePage,
  'gamesList':GamesListPage,
  'calendar': CalendarPage,
  'walkingList': WalkingListPage,
  'today':TodayPage,
  'successmed': SuccessMedPage,
  'walkingActivity': WalkingActivityPage
};
