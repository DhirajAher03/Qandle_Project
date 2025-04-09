import React from 'react';
import { Button, OverlayTrigger, Tooltip, Row, Col } from 'react-bootstrap';
import { FaUmbrellaBeach } from 'react-icons/fa';
import './LeaveWithoutPay.css'; // External CSS import

const LeaveWithoutPayCard = () => {
  return (
    <div className="leave-card shadow-sm">
      <div className="leave-card-header">
        <h6 className="fw-bold">Leave Without Pay</h6>
        <Button size="sm" variant="outline-primary">Apply Leave</Button>
      </div>

      <div className="leave-card-body">
        <div className="leave-card-icon">
          <FaUmbrellaBeach />
        </div>

        <div className="leave-card-stats ms-4">
          <Row className="text-center">
            <Col>
              <div className="leave-card-label">
                <strong className="text-primary leave-card-value">As per need</strong>{' '}
                Accrued
              </div>
            </Col>
            <Col>
              <div>
                <strong className="text-success leave-card-value">0</strong>
                <div className="leave-card-subtext">Used Till date</div>
              </div>
            </Col>
          </Row>

          <Row className="text-center mt-2">
            <Col>
              <div>
                <strong className="text-warning leave-card-value">-</strong>
                <div className="leave-card-subtext">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Used* includes backdated leaves</Tooltip>}
                  >
                    <span>Used* ⓘ</span>
                  </OverlayTrigger>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <strong className="text-purple leave-card-value">0</strong>
                <div className="leave-card-subtext">Requested</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LeaveWithoutPayCard;
