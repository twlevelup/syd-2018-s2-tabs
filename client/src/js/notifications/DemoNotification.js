const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;
const DemoNotification = require('./notifications/DemoNotification');

module.exports = class DemoNotification extends BaseNotification {
  template = require("../../templates/DemoNotification.hbs");

};
