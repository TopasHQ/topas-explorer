import { DateTime } from 'luxon';

export const dateFromIsoDate = (isoDate: string) =>
  DateTime.fromISO(isoDate).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

export const dateFromTimestamp = (timestamp: number) =>
  DateTime.fromSeconds(timestamp).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
