const moment = require("moment");

exports.getCurrentTime = () => {
  return moment().format('HH:mm')
}

exports.checkTimeFormat = (time) => {
  const date = moment().format('YYYY-MM-DD')
  return moment(`${date} ${time}`).isValid();
};

exports.isTimeValid = (date, time) => {
  const currentDate = moment().format("YYYY-MM-DD");
  const currentTime = moment().format("HH:mm");
  let dateFormatted = moment(new Date(date)).format("YYYY-MM-DD");

  if (currentDate === dateFormatted) {
    if (currentTime < time) return true
    else return false
  } else if (currentDate > dateFormatted) {
    return false
  } else if (currentDate < dateFormatted) {
    return true
  }
};

exports.addHours = (time, hrs) => {
  const addTime = moment(time, "HH:mm").add(hrs, "hours");
  return moment(new Date(addTime)).format("HH:mm");
};

exports.addMinutes = (time, mins) => {
  const addTime = moment(time, "HH:mm").add(mins, "minutes");
  return moment(new Date(addTime)).format("HH:mm");
};

exports.addTime = (time, hrs, mins) => {
  const addHrs = moment(time, "HH:mm").add(hrs, "hours");
  const addMins = moment(addHrs, "HH:mm").add(mins, "minutes");
  return moment(new Date(addMins)).format("HH:mm");
};

exports.subtractHours = (time, hrs) => {
  const subtractTime = moment(time, "HH:mm").subtract(hrs, "hours");
  return moment(new Date(subtractTime)).format("HH:mm");
};

exports.subtractMinutes = (time, mins) => {
  const subtractTime = moment(time, "HH:mm").subtract(mins, "minutes");
  return moment(new Date(subtractTime)).format("HH:mm");
};

exports.subtractTime = (time, hrs, mins) => {
  const subtractHrs = moment(time, "HH:mm").subtract(hrs, "hours");
  const subtractMins = moment(subtractHrs, "HH:mm").subtract(mins, "minutes");
  return moment(new Date(subtractMins)).format("HH:mm");
};

exports.isCurrentTimeInRange = (startTime, endTime) => {
  const currentTime = moment().format("HH:mm");

  if (startTime < currentTime && currentTime < endTime) {
    return true;
  } else {
    return false;
  }
};

exports.isTimeInRange = (time, startTime, endTime) => {
  if (startTime < time && time < endTime) {
    return true;
  } else {
    return false;
  }
};