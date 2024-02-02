const moment = require('moment');

function formatMessage(username, text) {
  return {
    username,
    text,
    // Adding 2 hours to server to get local time
    time: moment().add(2, 'h').format('h:mm a'),
  };
}

module.exports = formatMessage;
