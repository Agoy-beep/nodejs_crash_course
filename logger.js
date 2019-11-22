const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
    log(msg) {
        //Call Event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listeren', data)); //use an emit to create a file and write to it. (homework)

logger.log('Hello World');
logger.log('Hi')