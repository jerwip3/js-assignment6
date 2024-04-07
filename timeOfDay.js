// Arrow functions that return true/false based on if the time is in the morning, afternoon, or the evening
const isMorning = time => time >= 4 && time < 12
const isAfternoon = time => time >= 12 && time < 18
const isEvening = time => time >= 18 || time < 4
// Returns a string indicating the time of day based on which function returns true
const getTimeOfDay = time => {
    if (isMorning(time)) return 'morning'
    if (isAfternoon(time)) return 'afternoon'
    if (isEvening(time)) return 'evening'
}
// Exports the functions
module.exports = {
    getTimeOfDay,
    isMorning,
    isAfternoon,
    isEvening
}