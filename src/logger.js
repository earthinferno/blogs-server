const EventEmitter = require('events');

var url = 'http://mocklogger.io/log';

class Logger extends EventEmitter {
  log(name, filename = '', message = '', args) {
    // TODO: add logger here
    // args ? console.log(message, args) : console.log(message);

    this.emit(
      'messageLogged',
      args
        ? { Name: name, Filename: filename, Message: message, Data: args }
        : { Name: name, Filename: filename, Message: message }
    );
  }
}

const logger = new Logger();

module.exports = logger;
