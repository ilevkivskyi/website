import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { formatInTimeZone } from "date-fns-tz";

export const Datetime = ({
  datetime,
  useUserTimezone,
  format: pattern,
}: {
  datetime: Date;
  useUserTimezone: boolean;
  format: string;
}) => {
  const formattedDate = useUserTimezone
    ? format(datetime, pattern)
    : formatInTimeZone(datetime, "Europe/Dublin", pattern);

  return <time dateTime={datetime.toISOString()}>{formattedDate}</time>;
};
