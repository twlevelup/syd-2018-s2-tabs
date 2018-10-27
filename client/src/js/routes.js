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
const CallPolicePage = require('./pages/callPolicePage');
const CallHospitalPage = require('./pages/callHospitalPage');
const CallFriendPage = require('./pages/callFriendPage');
const CallFriend2Page = require('./pages/callFriend2Page');
const GamesPage = require('./pages/gamesPage');
const MedicinePage = require('./pages/medicinePage');
const GamesListPage = require('./pages/gamesListPage');
const CalendarPage = require('./pages/calendarPage');
const WalkingListPage = require('./pages/walkingListPage');
const TodayPage = require('./pages/todayPage');
const SuccessMedPage = require('./pages/successMedPage');
const FailMedPage = require('./pages/failMedPage');
const WalkingActivityPage = require('./pages/walkingActivityPage');
const DoneWalkingPage = require('./pages/doneWalkingPage');
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
  'callpolice': CallPolicePage,
  'callhospital': CallHospitalPage,
  'callfriend': CallFriendPage,
  'callfriend2': CallFriend2Page,
  'gamesList':GamesListPage,
  'calendar': CalendarPage,
  'walkingList': WalkingListPage,
  'today':TodayPage,
  'successmed': SuccessMedPage,
  'walkingActivity': WalkingActivityPage,
  'failmed': FailMedPage,
  'takemed': MedicinePage,
  'doneWalking': DoneWalkingPage

};
