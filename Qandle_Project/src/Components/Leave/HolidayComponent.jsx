import React, { useState } from "react";
import { Container, Row, Col, Form, Table } from "react-bootstrap";
import './LeaveCompo.css'
const HolidayComponent = () => {
  const [leaveType, setLeaveType] = useState("");

  const holidays = [
    {
      date: "01-May-2025",
      weekday: "Thursday",
      name: "Maharashtra Din/ Labor Day",
      remarks: "",
      type: "Mandatory",
    },
    {
      date: "15-Aug-2025",
      weekday: "Friday",
      name: "Independence Day",
      remarks: "",
      type: "Mandatory",
    },
    {
      date: "27-Aug-2025",
      weekday: "Wednesday",
      name: "Ganesh Chaturthi",
      remarks: "",
      type: "Restricted",
    },
    {
      date: "06-Sep-2025",
      weekday: "Saturday",
      name: "Ganesh Visarjan",
      remarks: "",
      type: "Restricted",
    },
    {
      date: "02-Oct-2025",
      weekday: "Thursday",
      name: "Dussehra/ Gandhi Jayanti",
      remarks: "",
      type: "Mandatory",
    },
  ];

  const getFilteredHolidays = () => {
    const today = new Date();

    switch (leaveType) {
      case "Upcoming":
        return holidays.filter((holiday) => {
          const [day, month, year] = holiday.date.split("-");
          const holidayDate = new Date(`${year}-${month}-${day}`);
          return holidayDate >= today;
        });

      case "Mandatory":
        return holidays.filter((holiday) => holiday.type === "Mandatory");

      case "Restricted":
        return holidays.filter((holiday) => holiday.type === "Restricted");

      default:
        return holidays;
    }
  };

  return (
    
    <Container fluid className="p-0">
      <div className="request p-3">
      <Row className="align-items-center mb-3 flex-column flex-md-row text-center text-md-start gap-2 gap-md-0">
  <Col xs={12} md={3}>
    <Form.Select
      value={leaveType}
      onChange={(e) => setLeaveType(e.target.value)}
      className="bg-white border text-dark"
    >
      <option value="">Select Holiday Type</option>
      <option value="All Holiday">All Holiday</option>
      <option value="Upcoming">Upcoming</option>
      <option value="Mandatory">Mandatory</option>
      <option value="Restricted">Restricted</option>
    </Form.Select>
  </Col>

  <Col xs={12} md={5} className="text-muted d-flex justify-content-center justify-content-md-start align-items-center">
    You Can Choose restricted/Optional holidays only.
  </Col>

  <Col
    xs={12}
    md={4}
    className="d-flex justify-content-center justify-content-md-end gap-3"
  >
    <span className="d-flex align-items-center">
      <span
        className="rounded-circle me-1"
        style={{ width: 10, height: 10, backgroundColor: "#f4a261" }}
      ></span>
      Mandatory
    </span>
    <span className="d-flex align-items-center">
      <span
        className="rounded-circle me-1"
        style={{ width: 10, height: 10, backgroundColor: "#2a9df4" }}
      ></span>
      Restricted/Optional
    </span>
  </Col>
</Row>


</div>
        <Row>
          <Col>
            <Table bordered hover responsive className="bg-white">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Weekday</th>
                  <th>Holiday Name</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {getFilteredHolidays().map((holiday, idx) => (
                  <tr key={idx}>
                    <td>{holiday.date}</td>
                    <td>{holiday.weekday}</td>
                    <td
                      className={
                        holiday.type === "Mandatory"
                          ? "text-warning"
                          : "text-primary"
                      }
                    >
                      {holiday.name}
                    </td>
                    <td>{holiday.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    
    
  );
};

export default HolidayComponent;
