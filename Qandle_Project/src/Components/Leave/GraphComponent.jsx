import React from 'react';
import { Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import { FaUmbrellaBeach } from 'react-icons/fa';
import './LeaveCompo.css'
const CasualLeaveCard = () => {
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
    <div className="leave-card shadow-sm p-3">
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
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="ms-4">
          <Row className="text-center">
            <Col>
              <strong className="stat-blue">{accrued}</strong>
              <div className="stat-label">Accrued</div>
            </Col>
            <Col>
              <strong className="stat-green">{usedTillDate}</strong>
              <div className="stat-label">Used Till date</div>
            </Col>
          </Row>
          <Row className="text-center mt-2">
            <Col>
              <strong className="stat-orange">{usedStar}</strong>
              <div className="stat-label">Used ⓘ</div>
            </Col>
            <Col>
              <strong className="stat-purple">{requested}</strong>
              <div className="stat-label">Requested</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

const LeaveWithoutPayCard = () => {
  return (
    <div className="leave-card shadow-sm">
      <div className="leave-card-header d-flex justify-content-between align-items-start ">
        <h6 className="fw-bold">Leave Without Pay</h6>
        <Button size="sm" variant="outline-primary">Apply Leave</Button>
      </div>

      <div className="leave-card-body d-flex align-items-center mt-3">
        <div className="leave-card-icon">
          <FaUmbrellaBeach />
        </div>

        <div className="leave-card-stats ms-4">
          <Row className="text-center ">
            <Col>
            <strong className="text-primary leave-card-value text-nowrap">As per need</strong>
              <div className="leave-card-subtext">Accrued</div>
            </Col>
            <Col>
              <strong className="text-success leave-card-value">0</strong>
              <div className="leave-card-subtext">Used Till date</div>
            </Col>
          </Row>

          <Row className="text-center mt-2">
            <Col>
              <strong className="text-warning leave-card-value">-</strong>
              <div className="leave-card-subtext">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Used* includes backdated leaves</Tooltip>}
                >
                  <span>Used ⓘ</span>
                </OverlayTrigger>
              </div>
            </Col>
            <Col>
              <strong className="text-purple leave-card-value">0</strong>
              <div className="leave-card-subtext">Requested</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

const GraphComponent = () => {
  return (
    <div className="status-cards">
      <div className="row">
        <div className="col-md-6 mb-3 d-flex justify-content-center">
          <CasualLeaveCard />
        </div>
        <div className="col-md-6 mb-3 d-flex justify-content-center">
          <LeaveWithoutPayCard />
        </div>
      </div>
    </div>
  );
};

export default GraphComponent;