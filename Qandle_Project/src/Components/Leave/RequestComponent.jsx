import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./LeaveCompo.css";

const RequestComponent = () => {
  const [leaveType, setLeaveType] = useState("All");
  const [selectOption, setSelectOption] = useState("Custom");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const leaveData = [
    {
      type: "Casual Leave",
      requestedOn: new Date("2025-04-10"),
      start: new Date("2025-04-13"),
      end: new Date("2025-04-21"),
      status: "Rejected",
      document: "N/A",
    },
    {
      type: "Casual Leave",
      requestedOn: new Date("2025-03-07"),
      start: new Date("2025-03-13"),
      end: new Date("2025-03-14"),
      status: "Approved",
      document: "N/A",
    },
    {
      type: "Leave Without Pay",
      requestedOn: new Date("2025-01-29"),
      start: new Date("2025-01-29"),
      end: new Date("2025-02-03"),
      status: "Rejected",
      document: "N/A",
    },
    {
      type: "Casual Leave",
      requestedOn: new Date("2025-01-30"),
      start: new Date("2025-01-30"),
      end: new Date("2025-01-30"),
      status: "Pending",
      document: "—",
    },
    {
      type: "Leave Without Pay",
      requestedOn: new Date("2025-01-25"),
      start: new Date("2025-01-30"),
      end: new Date("2025-02-02"),
      status: "Pending",
      document: "—",
    },
    {
      type: "Casual Leave",
      requestedOn: new Date("2025-02-14"),
      start: new Date("2025-02-16"),
      end: new Date("2025-02-19"),
      status: "Approved",
      document: "—",
    },
    {
      type: "Leave Without Pay",
      requestedOn: new Date("2025-02-03"),
      start: new Date("2025-02-04"),
      end: new Date("2025-02-08"),
      status: "Pending",
      document: "N/A",
    },
  ];

  useEffect(() => {
    const today = new Date();
    let start, end;

    switch (selectOption) {
      case "Last Week":
        end = new Date(today);
        start = new Date(today);
        start.setDate(today.getDate() - 7);
        break;
      case "Last Month":
        const firstDayOfCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        start = new Date(firstDayOfCurrentMonth.getFullYear(), firstDayOfCurrentMonth.getMonth() - 1, 1);
        end = new Date(firstDayOfCurrentMonth.getFullYear(), firstDayOfCurrentMonth.getMonth(), 0);
        break;
      case "Last Year":
        end = new Date(today);
        start = new Date(today);
        start.setFullYear(today.getFullYear() - 1);
        break;
      case "Custom":
        start = null;
        end = null;
        break;
      default:
        break;
    }

    if (selectOption !== "Custom") {
      setStartDate(start);
      setEndDate(end);
    }
  }, [selectOption]);

  const filteredData = leaveData.filter((leave) => {
    const matchesType = leaveType === "All" || leave.type === leaveType;
    const matchesDate =
      !startDate || !endDate || (leave.requestedOn >= startDate && leave.requestedOn <= endDate);
    return matchesType && matchesDate;
  });

  const exportToCSV = () => {
    const headers = ["Request Type", "Requested On", "Leave Dates", "Status", "Document"];
    const rows = filteredData.map((leave) => [
      leave.type,
      formatDate(leave.requestedOn),
      `${formatDate(leave.start)} - ${formatDate(leave.end)} (${Math.ceil((leave.end - leave.start) / (1000 * 60 * 60 * 24)) + 1} Days)`,
      leave.status,
      leave.document,
    ]);

    const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "leave_requests.csv";
    link.click();
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-GB").format(date); // dd-mm-yyyy
  };

  return (
    <Container fluid className="p-0 bg-body-tertiary min-vh-100">
      <div className="request p-3">
        <Row className="align-items-center justify-content-between gy-2 gx-3 flex-wrap">
          <Col xs={12} md={3}>
            <Form.Select
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="bg-white border text-dark w-100"
            >
              <option value="All">All</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Leave Without Pay">Leave Without Pay</option>
            </Form.Select>
          </Col>

          <Col xs={12} md={3}>
            <Form.Select
              value={selectOption}
              onChange={(e) => setSelectOption(e.target.value)}
              className="bg-white border text-dark  w-75 text-wrap"
              style={{ whiteSpace: "normal" }}
            >
              <option>Last Week</option>
              <option>Last Month</option>
              <option>Last Year</option>
              <option>Custom</option>
            </Form.Select>
          </Col>

          <Col md={4} sm={12} className="d-flex flex-column flex-md-row gap-2">
            <DatePicker
              placeholderText="Start date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="form-control"
              disabled={selectOption !== "Custom"}
              dateFormat="dd-MM-yyyy"
            />
            <DatePicker
              placeholderText="End date"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="form-control"
              disabled={selectOption !== "Custom"}
              dateFormat="dd-MM-yyyy"
            />
          </Col>

          <Col xs={12} sm={6} md={2}>
            <div className="d-flex justify-content-md-end justify-content-start">
              <Button variant="primary" className="w-100 w-md-auto" onClick={exportToCSV}>
                Export to CSV
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* <div className="request-status bg-white">
        <Row className="p-2">
          <Col>
            <div className="d-flex gap-3 align-items-center">
              <span className="d-inline-flex align-items-center gap-1">
                <span className="status-dot status-approved"></span> Approved
              </span>
              <span className="d-inline-flex align-items-center gap-1">
                <span className="status-dot status-rejected"></span> Rejected
              </span>
              <span className="d-inline-flex align-items-center gap-1">
                <span className="status-dot status-pending"></span> Pending
              </span>
              <span className="d-inline-flex align-items-center gap-1">
                <span className="status-dot status-cancelled"></span> Cancelled
              </span>
            </div>
          </Col>
        </Row>
      </div> */}

      <Row>
        <Col>
          <Table bordered hover responsive className="bg-white">
            <thead className="table-light">
              <tr>
                <th>Request Type</th>
                <th>Requested On</th>
                <th>Leave Dates</th>
                <th>Status</th>
                <th>Document</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No data available for selected range
                  </td>
                </tr>
              ) : (
                filteredData.map((leave, index) => (
                  <tr key={index}>
                    <td>{leave.type}</td>
                    <td>{formatDate(leave.requestedOn)}</td>
                    <td>
                      {formatDate(leave.start)} - {formatDate(leave.end)}<br />
                      ({Math.ceil((leave.end - leave.start) / (1000 * 60 * 60 * 24)) + 1} Days)
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          leave.status === "Approved"
                            ? "bg-success"
                            : leave.status === "Rejected"
                            ? "bg-danger"
                            : leave.status === "Pending"
                            ? "bg-warning text-dark"
                            : "bg-secondary"
                        }`}
                      >
                        {leave.status}
                      </span>
                    </td>
                    <td>{leave.document}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestComponent;
