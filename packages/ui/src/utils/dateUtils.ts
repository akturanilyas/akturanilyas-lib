import moment from 'moment';

export const dateDiff = (startDate: string, endDate: string | null, unitOfTime: string) =>
  moment(endDate).diff(moment(startDate), 'day');

export const getFormattedDate = (date: string) => moment(date).format('MMM YYYY');

export const getFormattedDiff = (startDate: string, endDate?: string | null) => {
  const start = moment(startDate);
  const end = moment(endDate || moment.now());

  const years = end.diff(start, 'years');

  start.add(years, 'years');

  const months = end.diff(start, 'months');

  if (years === 0) {
    return `${months} mos`;
  }

  return `${years} yrs ${months} mos`;
};
