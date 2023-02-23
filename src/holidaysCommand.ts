import * as holidayJp from '@holiday-jp/holiday_jp';

/**
 * @returns string
 */

export default function holidaysCommand(
  monthInput?: number,
  yearInput?: number
): string {
  const today = new Date(Date.now());

  const monthValue =
    typeof monthInput === 'number' ? monthInput - 1 : today.getMonth();
  const yearValue =
    typeof yearInput === 'number' ? yearInput : today.getFullYear();

  const startDate = new Date(yearValue, monthValue, 1);
  const endDate =
    monthValue < 11
      ? new Date(yearValue, monthValue + 1, 0)
      : new Date(yearValue + 1, 1, 0);

  const holidays = holidayJp.between(startDate, endDate);
  const holidaysString = holidays
    .map(({ name, week, date }) => `${date}(${week}) ${name}`)
    .join('\n');

  return holidaysString;
}
