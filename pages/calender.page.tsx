import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type SingleDateType = Date | null;
type DateValueType = SingleDateType | [SingleDateType, SingleDateType];

export default function CalenderPage() {
  const [value, onChange] = useState<DateValueType>(new Date());

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <Calendar locale="ko" onChange={onChange} value={value} />
    </div>
  );
}
