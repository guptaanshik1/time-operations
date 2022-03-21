# Introduction

A JavaScript package to handle time operations

# Installaion

```npm i @guptaanshik/time-operations```

# Usage

```js
    const to = require('time-operations')
```

# Operations

| Methods                   | Description                       |
| -----------------------   | ------------------------------:   |
|                           |                                   |
| getCurrentTime()          | Returns current time.             |
| -----------------------   | ------------------:               |
|                           | Takes time as string as           |
|                           | argument and returns true or      |
| checkTimeFormat(time)     | true or false on whether the      |
|                           | format of time is correct or      |
|                           | not.                              |
|                           | to.checkTimeFormat('12:00')       |
|                           | This is will return true.         |
| -----------------------   | ------------------------------:   |
|                           | Takes and date time as strings    |
|                           | as argumets and returns true if   |
| isTimeValid(date, time)   | true if time and date are         |
|                           | of current date and time          |
|                           | otherwise returns false.          |
|                           | to.isTimeValid('2022-03-21',      |
|                           | '12:00')                          |
| -----------------------   | ------------------------------:   |
|                           | Takes time and hours as string    |
|                           | as argumets and returns           |
| addHours(time, hours)     | the new time by adding the number |
|                           | of hours in the time              |
|                           | to.addHours('12:00', '1')         |
| -----------------------   | ------------------------------:   |
|                           | Takes time and minutes as string  |
|                           | as argumets and returns           |
| addMinutes(time, minutes) | the new time by adding the number |
|                           | of minutes in the time            |
|                           | to.addMinutes('12:00', '20')      |
| -----------------------   | ------------------------------:   |
|                           | Takes time and hours and minutes  |
|                           | as strings as argumets and returns|
| addTime(time, hours,      | the new time by adding the number |
| minutes)                  | of hours and minutes in the time  |
|                           | to.addTime('12:00', '1', '20')    |
| -----------------------   | ------------------------------:   |
|                           | Takes time and hours as string    |
|                           | as argumets and returns           |
| subtractHours(time,       | the new time by subtracting the   |
| hours)                    | number of hours in the time       |
|                           | to.subtractHours('12:00', '1')    |
| -----------------------   | ------------------------------:   |
|                           | Takes time and minutes as string  |
|                           | as argumets and returns           |
| subtractMinutes(time,     | the new time by subtracting the   |
| minutes)                  | number of minutes in the time     |
|                           | to.subtractMinutes('12:00', '20') |
| -----------------------   | ------------------------------:   |
|                           | Takes time and hours and minutes  |
|                           | as strings as argumets and    |
| subtractTime(time,        | returns the new time by           |
| minutes)                  | subtracting number of hours and   |
|                           | minutes from the time             |
|                           | to.subtractTime('12:00', '1',     |
|                           | '20')                             |
| -----------------------   | ------------------------------:   |
|                           | Takes startTime and endTime       |
|                           | as strings as argumets and        |
| isCurrentTimeInRange(     | returns true or false depending   |
| startTime, endTime)       | whether current time is in        | 
|                           | between startTime and endTime     |
|                           | or not.                           |
|                           | to.isCurrentTimeInRange('2:00',   |
|                           | '3:00')                           |
| -----------------------   | ------------------------------:   |
|                           | Takes time and startTime and      |
|                           | endtime as strings as argumets    |
| isTimeInRange(time,       | and returns true or false         |
| startTime, endTime)       | depending upon whether time is    | 
|                           | in between startTime and endTime  |
|                           | or not.                           |
|                           | to.isCurrentTimeInRange('1:30',   |
|                           | '2:00', '3:00')                   |
| -----------------------   | ------------------------------:   |


# Contribute

If you like to contribute, you are really welcome. Clone repository and open a pull request.