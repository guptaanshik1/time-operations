const moment = require("moment");

exports.getCurrentTime = () => {
  return moment().format("HH:mm");
};

exports.getHours = (time) => {
  return time.split(":")[0];
};

exports.getMinutes = (time) => {
  return time.split(":")[1];
};

exports.checkTimeFormat = (time) => {
  const date = moment().format("YYYY-MM-DD");
  return moment(`${date} ${time}`).isValid();
};

exports.isTimeValid = (date, time) => {
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

exports.timeSum = (...time) => {
  const sm = time.reduce(
    (preValue, nextValue) =>
      this.addTime(preValue, nextValue.split(":")[0], nextValue.split(":")[1]),
    0
  );
  return sm;
};

exports.diff = (time1, time2) => {
  return this.subtractTime(time1, time2.split(":")[0], time2.split(":")[1]);
};

exports.areTimeEqual = (time1, time2) => {
  return time1 === time2;
};

exports.currentTimeInGMT = () => {
  const GMT = moment().utc();
  const time = moment(GMT).format("HH:mm");
  return time;
};

exports.convertTimeToGMT = (time) => {
  const date = moment().format("YYYY-MM-DD");
  const inGMT = moment(`${date} ${time}`).utc();
  const convertedTime = moment(inGMT).format("HH:mm");
  return convertedTime;
};

exports.convertTimeToIST = (toZone, time) => {
  const timezones = {
    GMT: this.convertTimeToGMT(time),
    UTC: this.convertTimeToGMT(time),
    PST: () => {
      return this.addTime(time, "12", "30");
    },
    EST: () => {
      return this.addTime(time, "09", "30");
    },
    ECT: () => {
      return this.addTime(time, "03", "30");
    },
    EET: () => {
      return this.addTime(time, "03", "30");
    },
    MST: () => {
      return this.addTime(time, "11", "30");
    },
    MET: () => {
      return this.addTime(time, "03", "30");
    },
    NST: () => {
      return this.addHours(time, "08");
    },
    CST: () => {
      return this.addTime(time, "11", "30");
    },
  };
  const convertedTime = timezones[toZone];
  return typeof convertedTime === "function" ? convertedTime() : convertedTime;
};

exports.convertTimeToEST = (toZone, time) => {
  const timezones = {
    GMT: this.convertTimeToGMT(time),
    UTC: this.convertTimeToGMT(time),
    IST: () => {
      return this.subtractTime(time, "10", "30");
    },
    PST: () => {
      return this.addHours(time, "03");
    },
    ECT: () => {
      return time;
    },
    EET: () => {
      return this.subtractHours(time, "07");
    },
    MST: () => {
      return this.addHours(time, "02");
    },
    MET: () => {
      return this.subtractHours(time, "06");
    },
    NST: () => {
      return this.subtractTime(time, "01", "30");
    },
    CST: () => {
      return this.addHours(time, "01");
    },
  };
  const convertedTime = timezones[toZone];
  return typeof convertedTime === "function" ? convertedTime() : convertedTime;
};

exports.convertTimeToPST = (toZone, time) => {
  const timezones = {
    GMT: () => {
      return this.subtractHours(time, "08");
    },
    UTC: () => {
      return this.subtractHours(time, "08");
    },
    IST: () => {
      return this.subtractTime(time, "13", "30");
    },
    EST: () => {
      return this.subtractHours(time, "03");
    },
    ECT: () => {
      return this.subtractHours(time, "03");
    },
    EET: () => {
      return this.subtractHours(time, "10");
    },
    MST: () => {
      return this.subtractHours(time, "01");
    },
    MET: () => {
      return this.subtractHours(time, "09");
    },
    NST: () => {
      return this.subtractTime(time, "04", "30");
    },
    CST: () => {
      this.subtractHours(time, "02");
    },
  };
  const convertedTime = timezones[toZone];
  return typeof convertedTime === "function" ? convertedTime() : convertedTime;
};

exports.convertTimeToEET = (toZone, time) => {
  const timezones = {
    GMT: () => {
      return this.addHours(time, "02");
    },
    UTC: () => {
      return this.addHours(time, "02");
    },
    IST: () => {
      return this.subtractTime(time, "03", "30");
    },
    EST: () => {
      return this.addHours(time, "07");
    },
    ECT: () => {
      return this.addHours(time, "07");
    },
    MST: () => {
      return this.addHours(time, "09");
    },
    MET: () => {
      return this.addHours(time, "01");
    },
    NST: () => {
      return this.addTime(time, "05", "30");
    },
    CST: () => {
      return this.addHours(time, "08");
    },
  };
  const convertedTime = timezones[toZone];
  return typeof convertedTime === "function" ? convertedTime() : convertedTime;
};

exports.convertTimeToMST = (toZone, time) => {
  const timezones = {
    GMT: () => {
      return this.subtractHours(time, "07");
    },
    UTC: () => {
      return this.subtractHours(time, "07");
    },
    IST: () => {
      return this.subtractTime(time, "12", "30");
    },
    EST: () => {
      return this.subtractHours(time, "02");
    },
    ECT: () => {
      return this.subtractHours(time, "02");
    },
    PST: () => {
      return this.addHours(time, "01");
    },
    MET: () => {
      return this.subtractHours(time, "08");
    },
    NST: () => {
      return this.subtractTime(time, "03", "30");
    },
    CST: () => {
      return this.subtractHours(time, "01");
    },
  };
  const convertedTime = timezones[toZone];
  return typeof convertedTime === "function" ? convertedTime() : convertedTime;
};

// const convertTimeTo = (timezone1, time) => {
// //   const timezones = {
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
