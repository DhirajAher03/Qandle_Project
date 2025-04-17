import React, { useState } from 'react';
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, isSameMonth } from 'date-fns';
import './Overview.css';
import { Container } from 'react-bootstrap';

const CalenderComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const eventTypes = [
    { label: 'My Leave', color: '#E2574C', days: 0 },
    { label: 'Leave Request', color: '#F48C3A', days: 0 },
    { label: 'Notify', color: '#1E1E1E', days: 0 },
    { label: 'Team Leave', color: '#189BFB', days: 0 },
    { label: 'Holiday', color: '#3E843C', days: 0 },
    { label: 'Week Off', color: '#BFBFBF', days: 8 },
  ];

   const renderHeader = () => (
    <div className="d-flex justify-content-between align-items-center mb-3 px-2">
      <h5 className="fw-bold mb-3">Calendar</h5>
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-light btn-sm p-1 rounded-circle" onClick={prevMonth}>
          <IoChevronBackSharp />
        </button>
        <strong>{format(currentMonth, 'MMMM yyyy')}</strong>
        <button className="btn btn-light btn-sm p-1 rounded-circle" onClick={nextMonth}>
          <IoChevronForwardSharp />
        </button>
      </div>
    </div>
  );

   const renderDays = () => (
    <div className="row g-0">
      {daysShort.map((day, idx) => (
        <div key={idx} className="col text-white text-center fw-semibold py-2 calendar-day">
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
        const formatted = format(day, 'd');

        daysRow.push(
          <div
            key={day}
            className={`col calendar-date border-end border-bottom text-center py-3 position-relative
              ${isCurrentMonth ? (isWeekend ? 'text-danger' : 'text-dark') : 'text-muted'}`}
          >
            {isWeekend && isCurrentMonth && (
              <div className="calendar-circle-icon bg-dark text-white rounded-circle">i</div>
            )}
            <div className="fw-medium">{formatted}</div>
            {isCurrentMonth && <div className="calendar-dot"></div>}
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
    <Container className="p-3">
      <div className="p-3 bg-white rounded-4 box-shadow">
        {renderHeader()}
        <div className="d-flex flex-wrap flex-md-nowrap border rounded-4 overflow-hidden calendar-wrapper">
          <div className="flex-grow-1 border-end calendar-grid w-100">
            {renderDays()}
            {renderCells()}
          </div>
          <div className="calendar-events p-3">
            <h6 className="fw-bold mb-3">Filter Events</h6>
            <ul className="list-unstyled small mb-0">
              {eventTypes.map((event, idx) => (
                <li key={idx} className="d-flex justify-content-between align-items-center mb-2">
                  <span>
                    <span className="event-line me-2" style={{ backgroundColor: event.color }}></span>
                    {event.label}
                  </span>
                  <span>{event.days} Day(s)</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
};

export default CalenderComponent;
