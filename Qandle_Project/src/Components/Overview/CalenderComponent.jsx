import React from 'react';
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import './Overview.css';
import { Container } from 'react-bootstrap';

const CalenderComponent = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const dates = [
    [30, 31, 1, 2, 3, 4, 5],      
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 1, 2, 3]     
  ];

  const eventTypes = [
    { label: 'My Leave', color: '#E2574C', days: 0 },
    { label: 'Leave Request', color: '#F48C3A', days: 0 },
    { label: 'Notify', color: '#1E1E1E', days: 0 },
    { label: 'Team Leave', color: '#189BFB', days: 0 },
    { label: 'Holiday', color: '#3E843C', days: 0 },
    { label: 'Week Off', color: '#BFBFBF', days: 8 },
  ];

  return (
    <>
    <Container className='p-3'>
    <div className="p-3 bg-white rounded-4 box-shadow">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 px-2">
      <h5 className="fw-bold mb-3">Calendar</h5>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-light btn-sm p-1 rounded-circle">
            <IoChevronBackSharp />
          </button>
          <strong>April 2025</strong>
          <button className="btn btn-light btn-sm p-1 rounded-circle">
            <IoChevronForwardSharp />
          </button>
        </div>
      </div>

      {/* Calendar + Events */}
      <div className="d-flex flex-wrap flex-md-nowrap border rounded-4 overflow-hidden calendar-wrapper">
        <div className="flex-grow-1 border-end calendar-grid w-100">
          <div className="row g-0">
            {days.map((day, i) => (
              <div key={i} className="col text-white text-center fw-semibold py-2 calendar-day">
                {day}
              </div>
            ))}
          </div>

          {dates.map((week, i) => (
            <div className="row g-0 border-top" key={i}>
              {week.map((date, j) => {
                const isWeekend = j === 0 || j === 6;
                const isCurrentMonth =
                  (i === 0 && date <= 10) || (i === 4 && date <= 3) ? false : true;

                return (
                  <div
                    key={j}
                    className={`col calendar-date border-end border-bottom text-center py-3 position-relative ${
                      isWeekend ? 'text-danger' : 'text-dark'
                    }`}
                  >
                    {isWeekend && isCurrentMonth && (
                      <div className="calendar-circle-icon bg-dark text-white rounded-circle">i</div>
                    )}
                    <div className="fw-medium">{date}</div>
                    {isCurrentMonth && <div className="calendar-dot"></div>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Events */}
        <div className="calendar-events p-3">
          <h6 className="fw-bold mb-3">Filter Events</h6>
          <ul className="list-unstyled small mb-0">
            {eventTypes.map((event, i) => (
              <li key={i} className="d-flex justify-content-between align-items-center mb-2">
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
    </>
  );
};

export default CalenderComponent;
