import {DateTime} from 'luxon';

export function toLuxonDate(input: string): DateTime {
  return DateTime.fromISO(input);
}

export function formatDate(date: DateTime): string {
  return date.toLocaleString(DateTime.DATETIME_HUGE);
}
