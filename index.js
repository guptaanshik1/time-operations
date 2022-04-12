const moment = require("moment");

const getCurrentTime = () => {
  return moment().format("HH:mm");
};

const getHours = (time) => {
  return time.split(':')[0]
}

const getMinutes = (time) => {
  return time.split(':')[1]
}

const checkTimeFormat = (time) => {
  const date = moment().format("YYYY-MM-DD");
  return moment(`${date} ${time}`).isValid();
};

const isTimeValid = (date, time) => {
  const currentDate = moment().format("YYYY-MM-DD");
  const currentTime = moment().format("HH:mm");
  let dateFormatted = moment(new Date(date)).format("YYYY-MM-DD");

  if (currentDate === dateFormatted) {
    if (currentTime < time) return true;
    else return false;
  } else if (currentDate > dateFormatted) {
    return false;
  } else if (currentDate < dateFormatted) {
    return true;
  }
};

const addHours = (time, hrs) => {
  const addTime = moment(time, "HH:mm").add(hrs, "hours");
  return moment(new Date(addTime)).format("HH:mm");
};

const addMinutes = (time, mins) => {
  const addTime = moment(time, "HH:mm").add(mins, "minutes");
  return moment(new Date(addTime)).format("HH:mm");
};

const addTime = (time, hrs, mins) => {
  const addHrs = moment(time, "HH:mm").add(hrs, "hours");
  const addMins = moment(addHrs, "HH:mm").add(mins, "minutes");
  return moment(new Date(addMins)).format("HH:mm");
};

const subtractHours = (time, hrs) => {
  const subtractTime = moment(time, "HH:mm").subtract(hrs, "hours");
  return moment(new Date(subtractTime)).format("HH:mm");
};

const subtractMinutes = (time, mins) => {
  const subtractTime = moment(time, "HH:mm").subtract(mins, "minutes");
  return moment(new Date(subtractTime)).format("HH:mm");
};

const subtractTime = (time, hrs, mins) => {
  const subtractHrs = moment(time, "HH:mm").subtract(hrs, "hours");
  const subtractMins = moment(subtractHrs, "HH:mm").subtract(mins, "minutes");
  return moment(new Date(subtractMins)).format("HH:mm");
};

const isCurrentTimeInRange = (startTime, endTime) => {
  const currentTime = moment().format("HH:mm");

  if (startTime < currentTime && currentTime < endTime) {
    return true;
  } else {
    return false;
  }
};

const isTimeInRange = (time, startTime, endTime) => {
  if (startTime < time && time < endTime) {
    return true;
  } else {
    return false;
  }
};

const timeSum = (...time) => {
  return time.reduce((previousValue, currentValue) => {
    return this.addTime(previousValue, currentValue);
  }, 0);
};

const diff = (time1, time2) => {
  return this.subtractTime(time1, time2.split(":")[0], time2.split(":")[1]);
}

const areTimeEqual = (time1, time2) => {
  return time1 === time2
}

const currentTimeInGMT = () => {
  const GMT = moment().utc()
  const time = moment(GMT).format('HH:mm')
  return time
}

const convertTimeToGMT = (time) => {
  const date = moment().format('YYYY-MM-DD')
  const inGMT = moment(`${date} ${time}`).utc()
  const convertedTime = moment(inGMT).format('HH:mm')
  return convertedTime
}

// const convertTimeTo = (timezone1, time) => {
//   const timezones = {
//     'GMT': convertTimeToGMT(time),
//     'UTC': convertTimeToGMT(time),
//     // 'ECT': 
//     // "EET": 
//     // 'ART': 
//     // 'EAT': 
//     // 'MET': 
//     // 'NET': 
//     // 'PLT': 
//     // 'IST': 
//     // 'BST': 
//     // 'VST': 
//     // 'CTT': 
//     // 'JST': 
//     // 'ACT': 
//     // 'AET': 
//     // 'SST': 
//     // 'NST': 
//     // 'MIT': 
//     // 'HST': 
//     // 'AST': 
//     // 'PST': 
//     // 'PNT': 
//     // 'MST': 
//     // 'CST': 
//     // 'EST': 
//     // 'IET': 
//     // 'PRT': 
//     // 'CNT': 
//     // 'AGT': 
//     // 'BET': 
//     // 'CAT': 
//   }
//   const res = timezones[timezone1]
//   return res
// }

// console.log(subtractTime(convertTimeToGMT('07:30'), '1', '0'))