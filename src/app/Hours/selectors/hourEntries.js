import moment from 'moment';

export const selectHourEntries = (hourEntries, { sortBy = 'date_desc', startDate, endDate, client, project, invoiced }) => {
  return hourEntries.filter((hourEntry) => {
    const date = moment(hourEntry.date, 'DD-MM-YYYY');

    const startDateMatch = startDate ? startDate.isSameOrBefore(date, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(date, 'day') : true;
    const clientMatch = client ? hourEntry.client === client : true;
    const projectMatch = project ? hourEntry.project === project : true;
    const invoicedMatch = invoiced ? hourEntry.invoiced === invoiced : true;

    return startDateMatch && endDateMatch && clientMatch && projectMatch && invoicedMatch;

  }).sort((a,b) => {
    if (sortBy === 'date_asc') {
      return moment(a.date, 'DD-MM-YYYY').format('X') > moment(b.date, 'DD-MM-YYYY').format('X') ? 1 : -1;
    } else if (sortBy === 'date_desc') {
      return moment(a.date, 'DD-MM-YYYY').format('X') < moment(b.date, 'DD-MM-YYYY').format('X') ? 1 : -1;
    }
  })
};

export const selectTotalHours = (hourEntries, selectedHourEntries) => {

  if (selectedHourEntries.length > 0) {
    hourEntries = selectedHourEntries;
  }

  let totalMinutes = 0;

  hourEntries.map((hourEntry) => {
    const minutes = timeToMinutes(hourEntry.totalTime);
    if (!isNaN(minutes)) {
      totalMinutes = totalMinutes + minutes;
    }
  });

  return minutesToTime(totalMinutes);
};

export const timeToDecimal = (time) => {
  const arr = time.split(':');
  let dec = parseFloat((arr[1] / 60) * 100);
  dec = dec.toString().replace('.', '');
  dec = parseInt(dec);
  time = parseFloat(parseInt(arr[0], 10) + '.' + dec).toFixed(4);
  return time;
};

const minutesToTime = (minutes) => {

  let hours = parseInt(minutes / 60);
  minutes = parseInt(minutes % 60);

  hours.toString().length === 1 ? hours = '0' + hours : hours;
  minutes.toString().length === 1 ? minutes = '0' + minutes : minutes;

  return hours + ':' + minutes;
};

const timeToMinutes = (time) => {
  let minutes = parseInt(time.split(':')[0]) * 60;
  minutes = minutes + parseInt(time.split(':')[1]);
  return minutes;
};

export const selectTotalTime = (startTime, endTime) => {
  let newStartTime = moment('01-07-2018 ' + startTime, 'DD-MM-YYYY HH:mm');
  let newEndTime;

  if (endTime < startTime) {
    newEndTime = moment('02-07-2018 ' + endTime, 'DD-MM-YYYY HH:mm');
  } else {
    newEndTime = moment('01-07-2018 ' + endTime, 'DD-MM-YYYY HH:mm');
  }

  let minutes = newEndTime.diff(newStartTime, 'minutes');

  return minutesToTime(minutes);

};
