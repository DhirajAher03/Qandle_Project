import React from 'react';
import { IoChevronDownSharp } from "react-icons/io5";
import { Container, Card, Dropdown } from 'react-bootstrap';
import './Overview.css';

const RequestSummaryComponent = () => {
  const requestData = [
    { type: 'Provision', progress: 70 },
    { type: 'Leave', progress: 45 },
    { type: 'Attendance Regularization', progress: 85 },
    { type: 'Work from home', progress: 60 }
  ];

  return (
    <>
      <Container className='p-3'>
        <Card className="bg-white rounded-4 border-0 box-shadow p-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-3">Request Status Summary</h5>

            <Dropdown>
              <Dropdown.Toggle
                variant="white"
                id="category-dropdown"
                className="rounded-pill border px-3  btn-sm d-flex align-items-center gap-2"
              >
                Last 7 Day(s)
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Last 1 Day(s)</Dropdown.Item>
                <Dropdown.Item>Last 5 Day(s)</Dropdown.Item>
                <Dropdown.Item>Last 15 Day(s)</Dropdown.Item>
                <Dropdown.Item>Last 30 Day(s)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>
          {/* Cards */}
          <div className="row gy-3">
            {requestData.map((item, index) => (
              <div className="col-12 col-sm-6 col-lg-3" key={index}>
                <div className="card h-100">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="card-title mb-0">{item.type}</h6>
                      <div className="progress-circle" style={{ '--value': item.progress }}>
                        <div className="inner-circle">
                          <span>{item.progress}%</span>
                        </div>
                      </div>
                    </div>

                    <ul className="list-unstyled text-muted mt-1 mb-1">
                      <div className="row row-cols-2 gx-1 gy-1 small">
                        <div className="col p-0 m-0">
                          <li className="mb-1">0 Raised</li>
                        </div>
                        <div className="col p-0 m-0">
                          <li className="mb-1">0 Pending</li>
                        </div>
                        <div className="col p-0 m-0">
                          <li className="mb-1">0 Approved</li>
                        </div>
                        <div className="col p-0 m-0">
                          <li className="mb-1">0 Rejected</li>
                        </div>
                      </div>
                    </ul>

                    <button className="btn btn-outline-primary rounded-4 btn-sm mt-auto ">Raise Request</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </>
  );
};

export default RequestSummaryComponent;
