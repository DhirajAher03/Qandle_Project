import React from 'react'
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import { Container, Card } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './Overview.css';
const LeaveOverviewComponent = () => {
  const data = [
    { month: 'FEB 2025', leave: 2 },
    { month: 'MAR 2025', leave: 4 },
    { month: 'APR 2025', leave: 1 },
    { month: 'MAY 2025', leave: 0 },
    { month: 'JUN 2025', leave: 0 },
    { month: 'JULY 2025', leave: 0 }
  ];

  const currentMonth = 'APR 2025';

  return (
    <Container className='p-3'>
      <Card className="p-3 rounded-4 border-0 box-shadow leave-dashboard-wrapper bg-white d-flex flex-column flex-md-row gap-3">
        {/* Left Side */}
        <div className="flex-grow-1 border-end pe-md-4">
          <h5 className="fw-bold mb-3">Leave</h5>

          {/* Leave Balance */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            {/* Card 1 */}
            <div className="leave-card text-center border rounded-pill bg-light p-3">
              <button className="nav-btn"><IoChevronBackSharp /></button>
              <div>
                <h4 className="mb-1 text-primary fw-bold">02 <span className="small fw-semibold">(Day(s))</span></h4>
                <p className="mb-0 fw-semibold">Casual Leave</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="leave-card text-center">
              <div>
                <h5 className="mb-1 text-primary fw-bold">As per need <span className="small fw-semibold">(Day(s))</span></h5>
                <p className="mb-0 fw-semibold">Leave Without Pay</p>
              </div>
              <button className="nav-btn"><IoChevronForwardSharp /></button>
            </div>
          </div>

          {/* Period Dropdown */}
          <div className="d-flex justify-content-center mb-3">
            <div className="period-selector d-flex align-items-center gap-2 px-3 py-1 rounded-pill border">
              <span className="fw-semibold">Period:</span>
              <select className="border-0 bg-transparent fw-semibold">
                <option>Next 90 Day(s)</option>
                <option>Next 30 Day(s)</option>
                <option>Next 60 Day(s)</option>
              </select>
            </div>
          </div>

          {/* Upcoming Holidays */}
          <div className="text-center">
            <h6 className="mb-1 text-warning fw-bold">01 <span className="text-dark fw-normal">Upcoming Holiday(s)</span></h6>

            <div className="holiday-card mt-2 rounded-3  px-3 py-2">
              <div className="d-flex align-items-center justify-content-between gap-2">
              <button className="nav-btn"><IoChevronBackSharp /></button>
              <div className="text-start">
                <p className="mb-1 fw-bold text-warning">Maharashtra Din/ Labor Day</p>
                <small className="text-muted">Thursday, 01-May-2025</small>
              </div>
              <button className="nav-btn"><IoChevronForwardSharp /></button>
            </div>
            </div>
          </div>
        </div>
        {/* Right Side - Chart */}
        <div className="flex-grow-1 d-flex flex-column justify-content-between">
          {/* Graph Header */}
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <button className="btn btn-light btn-sm rounded-circle p-1">
              <IoChevronBackSharp />
            </button>
            <h6 className="fw-bold mb-0">April 2025</h6>
            <button className="btn btn-light btn-sm rounded-circle p-1">
              <IoChevronForwardSharp />
            </button>
          </div>

          {/* Dynamic Chart */}
          <div className="flex-grow-1 px-3" style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="month" hide />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="leave">
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.month === currentMonth ? '#0d6efd' : '#bee3f8'}
                      radius={[5, 5, 0, 0]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Footer Months */}
          <div className="d-flex justify-content-between text-center text-muted mt-3 px-2 small">
            {data.map((d, i) => (
              <div key={i}>{d.month}</div>
            ))}
          </div>

          <div className="d-flex justify-content-end mt-2">
            <small className="text-info">🟦 Casual Leave</small>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default LeaveOverviewComponent
