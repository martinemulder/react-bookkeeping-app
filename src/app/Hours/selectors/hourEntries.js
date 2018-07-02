import moment from 'moment';

export const selectHourEntries = (hourEntries, { sortBy = 'date_desc', startDate, endDate, client, project, invoiced }) => {
  return hourEntries.filter((hourEntry) => {
    const date = moment(hourEntry.date, 'seconds');
    const formattedDate = moment(hourEntry.date, 'DD-MM-YYYY');

    const startDateMatch = startDate ? startDate.isSameOrBefore(formattedDate, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(formattedDate, 'day') : true;
    const clientMatch = client ? hourEntry.client === client : true;
    const projectMatch = project ? hourEntry.project === project : true;
    const invoicedYesMatch = invoiced === 'yes' ? hourEntry.invoiced : true;
    const invoicedNoMatch = invoiced === 'no' ? !hourEntry.invoiced : true;
    return startDateMatch && endDateMatch && clientMatch && projectMatch && invoicedYesMatch && invoicedNoMatch;
  }).sort((a,b) => {
    if (sortBy === 'date_asc') {
      return moment(a.date, 'DD-MM-YYYY').format('X') > moment(b.date, 'DD-MM-YYYY').format('X') ? 1 : -1;
    } else if (sortBy === 'date_desc') {
      return moment(a.date, 'DD-MM-YYYY').format('X') < moment(b.date, 'DD-MM-YYYY').format('X') ? 1 : -1;
    }
  });
};

export const selectTotalHours = (hourEntries) => {
  let totalMinutes = 0;

  hourEntries.map((hourEntry) => {
    totalMinutes = totalMinutes + timeToMinutes(hourEntry.totalTime)
  });

  return minutesToTime(totalMinutes);
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
