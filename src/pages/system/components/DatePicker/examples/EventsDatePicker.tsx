import { useState } from "react";
import { DatePicker } from "@gem-org/gem-system";
import "./events-log.css";

const today = new Date();
const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

const pad = (value: number) => String(value).padStart(2, "0");
const fmt = (date: Date | null) =>
  date
    ? `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
    : "null";

type EventsDatePickerProps = { dateTime: string; range: string; empty: string };

export function EventsDatePicker({ dateTime, range, empty }: EventsDatePickerProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const log = (name: string, detail: string) =>
    setLogs((current) => [`${name} · ${detail}`, ...current].slice(0, 12));

  return (
    <>
      <DatePicker
        label={dateTime}
        showTime
        clearable
        defaultValue={today}
        onDateChange={(date) => log("onDateChange", fmt(date))}
        onMonthChange={(month, viewDate) =>
          log("onMonthChange", `${month + 1} (${viewDate.getFullYear()})`)
        }
        onYearChange={(year) => log("onYearChange", String(year))}
        onTimeChange={(date, details) =>
          log("onTimeChange", `${fmt(date)} · ${details.hours}:${pad(details.minutes)}`)
        }
        onHourChange={(hours) => log("onHourChange", String(hours))}
        onMinuteChange={(minutes) => log("onMinuteChange", String(minutes))}
      />
      <DatePicker
        label={range}
        range
        clearable
        defaultValue={{ start: today, end: nextWeek }}
        onRangeChange={(next) => log("onRangeChange", `${fmt(next.start)} → ${fmt(next.end)}`)}
        onMonthChange={(month, viewDate) =>
          log("onMonthChange", `${month + 1} (${viewDate.getFullYear()})`)
        }
        onYearChange={(year) => log("onYearChange", String(year))}
      />
      <ul className="events-log">
        {logs.length === 0 ? (
          <li className="events-log__empty">{empty}</li>
        ) : (
          logs.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
