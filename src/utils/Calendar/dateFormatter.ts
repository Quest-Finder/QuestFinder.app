import dayjs from 'dayjs';

export function getFormattedDateDetails(date: string) {
  const dayName = dayjs(date).format('dddd');
  const monthName = dayjs(date).format('MMM');
  const day = dayjs(date).format('DD');

  const month = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  return { formattedDateInfo: `${day} ${month}, ${dayName}` };
}
