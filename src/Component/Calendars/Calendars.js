import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Calendars = () => {
  const [date, setDate] = useState(new Date());
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const weeksInMonth = Math.ceil((firstDayOfWeek + daysInMonth) / 7);

  const handlePreviousMonth = () => {
    setDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex justify-around items-center">
        <button onClick={handlePreviousMonth}>
          {" "}
          <AiOutlineLeft />{" "}
        </button>
        <div className="text-lg font-semibold">
          {date.toLocaleString("default", { month: "long", year: "numeric" })}
        </div>
        <button onClick={handleNextMonth}>
          {" "}
          <AiOutlineRight />{" "}
        </button>
      </div>
      <div className="flex justify-around  bg-[#E9E9EA] rounded-t-xl py-5">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-[#000] font-semibold text-sm w-1/7">
            <div className=""> {day}</div>
          </div>
        ))}
      </div>
      {Array.from({ length: weeksInMonth }, (_, i) => i + 1).map((week) => (
        <div key={week} className="flex flex-wrap bg-[#E9E9EA]">
          {Array.from({ length: 7 }, (_, i) =>
            i + 1 + (week - 1) * 7 <= daysInMonth + firstDayOfWeek - 1 &&
            i + (week - 1) * 7 >= firstDayOfWeek ? (
              <div
                key={i}
                className=" px-2 py-1 w-1/7 h-12 flex items-center justify-center xl:w-[96px] lg:w-[62px] md:w-[45px] w-[38px]"
              >
                {i + 1 + (week - 1) * 7 - firstDayOfWeek}
              </div>
            ) : (
              <div
                key={i}
                className=" px-2 py-1 xl:w-[96px] lg:w-[62px] md:w-[45px] w-[38px]"
              />
            )
          )}
        </div>
      ))}
    </div>
  );
};
export default Calendars;
