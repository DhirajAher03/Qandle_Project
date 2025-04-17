import React, { useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
} from "date-fns";
// import "./Overview.css";
import { Container } from "react-bootstrap";

const ShiftDetailsComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderHeader = () => (
    <div className="d-flex align-items-center mb-3 px-2">
      <div className="d-flex align-items-center gap-2">
        <button
          className="btn btn-light btn-sm p-1 rounded-circle"
          onClick={prevMonth}
        >
          <IoChevronBackSharp />
        </button>
        <strong>{format(currentMonth, "MMMM yyyy")}</strong>
        <button
          className="btn btn-light btn-sm p-1 rounded-circle"
          onClick={nextMonth}
        >
          <IoChevronForwardSharp />
        </button>
      </div>
    </div>
  );

  const renderDays = () => (
    <div className="row g-0">
      {daysShort.map((day, idx) => (
        <div
          key={idx}
          className="col text-white text-center fw-semibold py-2 calendar-day"
        >
          {day}
        </div>
      ))}
    </div>
  );

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    let day = startDate;
    const weeks = [];

    while (day <= endDate) {
      const daysRow = [];

      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isWeekend = i === 0 || i === 6;
        const formatted = format(day, "d");

        daysRow.push(
          <div
            key={day}
            className={`col calendar-date border-start border-end border-bottom text-center py-3 position-relative
                  ${
                    isCurrentMonth
                      ? isWeekend
                      : "text-muted invisible"
                  }`}
          >
            <div className="fw-medium fs-6">{formatted}</div>
          </div>
        );
        day = addDays(day, 1);
      }

      weeks.push(
        <div key={day} className="row g-0 border-top">
          {daysRow}
        </div>
      );
    }

    return <>{weeks}</>;
  };
  return (
    <>
      <Container className="p-3">
        <div className="p-3 bg-white rounded-4 box-shadow">
          {renderHeader()}
          <div className="d-flex flex-wrap flex-md-nowrap border rounded-4 overflow-hidden calendar-wrapper">
            <div className="flex-grow-1 border-end calendar-grid w-100">
              {renderDays()}
              {renderCells()}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShiftDetailsComponent;
