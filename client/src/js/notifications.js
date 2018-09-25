const AlertNotification = require('./notifications/AlertNotification');
const DemoNotification = require('./notifications/DemoNotification');

const notifications = [
  {
    type: "alert",
    label: "Alert",
    defaultValue: "This is a test alert",
    view: AlertNotification,
  },
  {
    type: "base",
    label: "Base",
    defaultValue: "This is a test base notification",
  },
  {
    type: "demo",
    label: "Demo",
    defaultValue: "Our First Notification!",
    view: DemoNotification,
  },
];

module.exports = notifications;
