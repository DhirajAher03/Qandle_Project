import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Form } from 'react-bootstrap';
import { BsPlus, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const EmpTrackerComponent = () => {
  const initialClients = [
    { client: 'Test', job: 'Test 1', disabled: true },
    { client: 'ModeArch Steel', job: 'Website Design and Development', disabled: true },
    { client: 'VAD', job: 'Website Design and Development', disabled: false },
  ];

  const [startDate, setStartDate] = useState(new Date('2025-04-07')); // Monday

  const getWeekDates = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      days.push(day.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })); // e.g., "07 Apr 2025"
    }
    return days;
  };

  const [entries, setEntries] = useState(
    initialClients.map(client => ({
      ...client,
      hours: Array(7).fill(''),
      inputVisible: Array(7).fill(false),
    }))
  );

  const handleAddClick = (rowIdx, dayIdx) => {
    const updated = [...entries];
    updated[rowIdx].inputVisible[dayIdx] = true;
    setEntries(updated);
  };

  const handleChange = (e, rowIdx, dayIdx) => {
    const updated = [...entries];
    updated[rowIdx].hours[dayIdx] = e.target.value;
    setEntries(updated);
  };

  const parseTime = (str) => {
    const match = str.match(/(\d+)h\s*(\d+)?m?/i);
    if (!match) return 0;
    const hours = parseInt(match[1]) || 0;
    const mins = parseInt(match[2]) || 0;
    return hours * 60 + mins;
  };

  const formatTime = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  };

  const calculateTotalRowTime = (row) =>
    row.hours.reduce((acc, val) => acc + parseTime(val), 0);

  const calculateTotalColTime = (dayIdx) =>
    entries.reduce((acc, row) => acc + parseTime(row.hours[dayIdx]), 0);

  const totalMinutes = entries.reduce((acc, row) => acc + calculateTotalRowTime(row), 0);

  const handlePrevWeek = () => {
    const prev = new Date(startDate);
    prev.setDate(startDate.getDate() - 7);
    setStartDate(prev);
  };

  const handleNextWeek = () => {
    const next = new Date(startDate);
    next.setDate(startDate.getDate() + 7);
    setStartDate(next);
  };

  const weekDates = getWeekDates();

  return (
    <Container className="mt-4">
      <div className="mb-3 align-items-center d-flex">
        <div className='me-2'>
          <Button variant="color-secondary" onClick={handlePrevWeek}><BsChevronLeft /></Button>
        </div>
        <div>
          <h6 className="text-center me-2 mb-0 d-flex align-items-center gap-2">
            <strong>{weekDates[0]}</strong> to <strong>{weekDates[6]}</strong>
          </h6>
        </div>
        <div>
          <Button variant="color-secondary" onClick={handleNextWeek}><BsChevronRight /></Button>
        </div>
        <div className="text-end ms-auto d-flex gap-3">
          <div className='d-flex align-items-center'>
            <strong >Total Hours:</strong> <span>{formatTime(totalMinutes)}</span>
            </div>
          <Button type='submit' className='d-none d-md-block'  >Submit Timesheet</Button>
        </div>
      </div>

      <Table bordered responsive>
        <thead className="text-center bg-light">
          <tr>
            <th>Client</th>
            <th>Job</th>
            {weekDates.map((date, i) => (
              <th key={i}>{date.slice(0, 6)}</th> // e.g., "Mon 07"
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {entries.map((entry, rowIdx) => (
            <tr key={rowIdx}>
              <td>{entry.client}</td>
              <td>{entry.job}</td>
              {entry.hours.map((hour, dayIdx) => (
                <td key={dayIdx}>
                  {entry.disabled ? (
                    <div style={{ backgroundColor: '#e5e5e5', height: '100%' }}></div>
                  ) : entry.inputVisible[dayIdx] ? (
                    <Form.Control
                      size="sm"
                      placeholder="e.g. 1h 30m"
                      value={hour}
                      onChange={(e) => handleChange(e, rowIdx, dayIdx)}
                    />
                  ) : (
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => handleAddClick(rowIdx, dayIdx)}
                    >
                      <BsPlus />
                    </Button>
                  )}
                </td>
              ))}
              <td>{formatTime(calculateTotalRowTime(entry))}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2"><strong>Total Task Hours</strong></td>
            {weekDates.map((_, i) => (
              <td key={i}>{formatTime(calculateTotalColTime(i))}</td>
            ))}
            <td><strong>{formatTime(totalMinutes)}</strong></td>
          </tr>
        </tbody>
        
      </Table>
      <div className="timesheet-button">
      <Button type='submit' className='d-block d-md-none float-center'  >Submit Timesheet</Button>
      </div>
    </Container>
  );
};

export default EmpTrackerComponent;

