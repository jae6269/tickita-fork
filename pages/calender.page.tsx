import { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import Calendar from "@/components/Calendar/Calendar";
import "react-calendar/dist/Calendar.css";

type SingleDateType = Date | null;
type DateValueType = SingleDateType | [SingleDateType, SingleDateType];
export default function CalenderPage() {
  const [value, setValue] = useState<DateValueType>(new Date());

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <ReactCalendar locale="ko" onChange={setValue} value={value} />
      <Calendar
        selectedDay={value}
        setSelectedDay={setValue}
        isNextMonth={true}
        isPrevMonth={true}
      />
    </div>
  );
}
