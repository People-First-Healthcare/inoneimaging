import { TimerIcon } from "lucide-react";

const tradingHours = [
  { day: "Monday", open: "09:00", close: "17:00" },
  { day: "Tuesday", open: "09:00", close: "17:00" },
  { day: "Wednesday", open: "09:00", close: "17:00" },
  { day: "Thursday", open: "09:00", close: "17:00" },
  { day: "Friday", open: "09:00", close: "17:00" },
  { day: "Saturday", open: "09:00", close: "17:00" },
  { day: "Sunday", open: "09:00", close: "17:00" },
];

function TradingHoursCard() {
  return (
    <div className="border border-black p-4 h-fit col-span-3 lg:col-span-1">
      <div className="flex flex-row justify-center py-5">
        <TimerIcon />
        <p>Our trading hours</p>
      </div>
      {tradingHours.map((dayOfWeek, i) => (
        <div key={i} className="grid grid-cols-2 border-b p-2 text-center">
          <p>{dayOfWeek.day}</p>
          <p>
            {dayOfWeek.open} - {dayOfWeek.close}
          </p>
        </div>
      ))}
      <div className="grid grid-cols-2 p-2 text-center">
        <p>Holidays</p>
        <p>Close</p>
      </div>
    </div>
  );
}
export default TradingHoursCard;
