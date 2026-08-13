const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('class started');
        setTimeout(() => {
            this.emit('bellRing', 'first period is done!');
        }, 2000);
    }
}

module.exports = School;