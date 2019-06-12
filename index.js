const EventEmitter = require('events');

class ozg extends EventEmitter {
    constructor(interval, selectField) {
        super();
        this.queue = {};
        this.interval = interval || 1000;
        this.selectField = selectField || null;
        setInterval(this._remove.bind(this), 1000);
    }

    add(item, ts) {
        if (!this.selectField && !ts) {
            throw Error ("Required param, selectField or ts");
        }

        ts = !ts ? item[this.selectField] : ts;
        const remainder = ts % this.interval;
        const slot = ts + (this.interval - remainder);
        if (!this.queue.hasOwnProperty(slot)) {
            this.queue[slot] = [];
        }
        this.queue[slot].push(item);
    }

    _remove() {
        let now = Date.now();
        now = now + 1000 - (now % 1000);
        if (this.queue.hasOwnProperty(now)) {
            this.emit("event", this.queue[now]);
            delete this.queue[now];
        }
    }
}

module.exports = ozg;