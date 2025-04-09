import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label
} from 'recharts';
import './CasualLeave.css'; // External CSS import

const LeaveCard = () => {
  const accrued = 4;
  const usedTillDate = 2;
  const usedStar = 2.0;
  const requested = 0;
  const balance = accrued - usedTillDate - requested;

  const chartData = [
    { name: 'Used Till Date', value: usedTillDate, color: '#28a745' },
    { name: 'Used*', value: usedStar, color: '#fd7e14' },
    { name: 'Requested', value: requested, color: '#6f42c1' },
    { name: 'Balance', value: balance, color: '#007bff' },
  ];

  return (
    <div className="leave-card card shadow-sm p-3">
      <div className="card-header-section d-flex justify-content-between align-items-start">
        <h6 className="fw-bold">Casual Leave</h6>
        <Button size="sm" variant="outline-primary">Apply Leave</Button>
      </div>

      <div className="d-flex align-items-center mt-3">
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={40}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  value={`${balance}\nBalance`}
                  position="center"
                  fontSize="12"
                  className="fw-bold center-label"
                />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="ms-4">
          <Row className="text-center">
            <Col>
              <div>
                <strong className="stat-blue">{accrued}</strong>
                <div className="stat-label">Accrued</div>
              </div>
            </Col>
            <Col>
              <div className="left-spaced">
                <strong className="stat-green">{usedTillDate}</strong>
                <div className="stat-label">Used Till date</div>
              </div>
            </Col>
          </Row>
          <Row className="text-center mt-2">
            <Col>
              <div>
                <strong className="stat-orange">{usedStar}</strong>
                <div className="stat-label">Used ⓘ</div>
              </div>
            </Col>
            <Col>
              <div>
                <strong className="stat-purple">{requested}</strong>
                <div className="stat-label">Requested</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LeaveCard;
