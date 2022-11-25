const Enum = require('enum');

const sleepQuality = new Enum({
    Exhausted: 0,
    Tired: 1,
    WellRested: 2
});

const sleepMap = new Enum({
    remOverSDuration: {
        Exhausted: 10,
        Tired: 17,
        WellRested: 18
    },
    sDurationOverRem: {
        Exhausted: 85,
        Tired: 70,
        WellRested: 50
    }
})

const sleepCodes = {...sleepQuality, ...sleepMap}

module.exports = sleepCodes
