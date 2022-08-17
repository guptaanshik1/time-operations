# Introduction

A JavaScript package to handle time operations

# Installaion

```npm i time-operations```

# Usage

```js
const to = require('time-operations')
import to from 'time-operations'
```

# Operations

| Methods                   | Description                       |
| -----------------------   | ------------------------------    |
|                           |                                   |
| getCurrentTime()          | Returns current time.             |
| -----------------------   | ------------------                |
|                           | Takes time as string as           |
|                           | argument and returns true or      |
| checkTimeFormat(time)     | false on whether the format of    |
|                           | time is correct or not.           |
|                           | to.checkTimeFormat('12:00')       |
|                           | This is will return true.         |
| -----------------------   | ------------------------------    |
|                           | Takes and date time as strings    |
|                           | as argumets and returns true if   |
| isTimeValid(date, time)   | time and date are of current      |
|                           | date and time otherwise           |
|                           | returns false.                    |
|                           | to.isTimeValid('2022-03-21',      |
|                           | '12:00')                          |
| -----------------------   | ------------------------------    |
| getHours(time)            | Takes time in string and returns  |
|                           | the hour in the time.             |
| -----------------------   | ------------------------------    |
| getMinutes(time)          | Takes time in string and returns  |
|                           | the minutes in the time.          |
| -----------------------   | ------------------------------    |
|                           | Takes time and hours as string    |
|                           | as argumets and returns           |
| addHours(time, hours)     | the new time by adding the number |
|                           | of hours in the time              |
|                           | to.addHours('12:00', '1')         |
| -----------------------   | ------------------------------    |
|                           | Takes time and minutes as string  |
|                           | as argumets and returns           |
| addMinutes(time, minutes) | the new time by adding the number |
|                           | of minutes in the time            |
|                           | to.addMinutes('12:00', '20')      |
| -----------------------   | ------------------------------    |
|                           | Takes time and hours and minutes  |
|                           | as strings as argumets and returns|
| addTime(time, hours,      | the new time by adding the number |
| minutes)                  | of hours and minutes in the time  |
|                           | to.addTime('12:00', '1', '20')    |
| -----------------------   | ------------------------------    |
|                           | Takes time and hours as string    |
|                           | as argumets and returns           |
| subtractHours(time,       | the new time by subtracting the   |
| hours)                    | number of hours in the time       |
|                           | to.subtractHours('12:00', '1')    |
| -----------------------   | ------------------------------    |
|                           | Takes time and minutes as string  |
|                           | as argumets and returns           |
| subtractMinutes(time,     | the new time by subtracting the   |
| minutes)                  | number of minutes in the time     |
|                           | to.subtractMinutes('12:00', '20') |
| -----------------------   | ------------------------------    |
|                           | Takes time and hours and minutes  |
|                           | as strings as argumets and        |
| subtractTime(time,        | returns the new time by           |
| minutes)                  | subtracting number of hours and   |
|                           | minutes from the time             |
|                           | to.subtractTime('12:00', '1',     |
|                           | '20')                             |
| -----------------------   | ------------------------------    |
|                           | Takes startTime and endTime       |
|                           | as strings as argumets and        |
| isCurrentTimeInRange(     | returns true or false depending   |
| startTime, endTime)       | whether current time is in        | 
|                           | between startTime and endTime     |
|                           | or not.                           |
|                           | to.isCurrentTimeInRange('2:00',   |
|                           | '3:00')                           |
| -----------------------   | ------------------------------    |
|                           | Takes time and startTime and      |
|                           | endtime as strings as argumets    |
| isTimeInRange(time,       | and returns true or false         |
| startTime, endTime)       | depending upon whether time is    | 
|                           | in between startTime and endTime  |
|                           | or not.                           |
|                           | to.isCurrentTimeInRange('1:30',   |
|                           | '2:00', '3:00')                   |
| -----------------------   | ------------------------------    |
|                           | Takes different number of times   |
|                           | in string format as parameters    |
| timeSum(time .....)       | and adds all the time and return  |
|                           | the resultant time.               |
|                           | to.timeSum('12:00', '01:00')      |
| -----------------------   | ------------------------------    |
|                           | Takes time1 and time2 as          |
|                           | in string format as parameters    |
| diff(time1, time2)        | and returns the new time after    |
|                           | subtracting the two times         |
|                           | to.diff('01:00', '02:00')         |
| -----------------------   | ------------------------------    |
|                           | Takes time1 and time2 as          |
|                           | in string format as parameters    |
| areTimeEqual(time1,       | and returns true if the two times |
| time2)                    | are equal or returns false        |
|                           | otherwise.                        |
|                           | to.areTimeEqual('01:00','01:00')  |
| -----------------------   | ------------------------------    |
|                           | Returns the GMT conversion        |
| currentTimeInGMT()        | of the current time               |
|                           | and returns true if the two times |
| -----------------------   | ------------------------------    |
|                           | Takes time in string format and   |
| convertTimeToGMT(time)    | returns the new time after        |
|                           | after converting the time to GMT  |
|                           | to.convertTimeToGMT('20:40')      |
| -----------------------   | ------------------------------    |
|                           | Takes timezone and time in string |
|                           | format and returns the new time   |
|                           | after converting the time into    |
|                           | IST.                              |
| convertTimeToIST(         | Different timezones accepted are: |
| timezone, time)           | {'GMT', 'UTC', 'PST', 'EST',      |
|                           | 'ECT', 'EET', 'MST', 'MET', 'NST' |
|                           | 'CST'}                            |
|                           |                                   |
|                           | to.convertTimeToIST('PST',        |
|                           | '11:30')                          |


# Feedback

Got any feedback? Then do let me know at guptaanshik1@gmail.com

# Contribute

If you like to contribute, you are really welcome. Clone repository and open a pull request.
