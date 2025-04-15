import React, { useState } from "react";
import {
  Table,
  Form,
  Row,
  Col,
  Button,
  Pagination,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RequestComponent = () => {
  const [requestType, setRequestType] = useState("All Request");
  const [selectedDay, setSelectedDay] = useState("All Day(s)");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const data = [
    {
      type: "Missed Punch",
      requestFor: "18-Mar-2025",
      requestedOn: "25-Mar-2025",
      inTime: "07:00",
      outTime: "21:05",
      status: "Approved",
    },
    {
      type: "Missed Punch",
      requestFor: "18-April-2025",
      requestedOn: "25-April-2025",
      inTime: "07:00",
      outTime: "21:05",
      status: "Approved",
    },
    {
      type: "On Duty",
      requestFor: "28-Jan-2025",
      requestedOn: "29-Jan-2025",
      inTime: "09:00",
      outTime: "08:10",
      status: "Approved",
    },
    {
      type: "On Duty",
      requestFor: "28-Jan-2024",
      requestedOn: "29-Jan-2024",
      inTime: "09:00",
      outTime: "08:10",
      status: "Approved",
    },
    {
      type: "Missed Punch",
      requestFor: "01-Mar-2025",
      requestedOn: "05-Mar-2025",
      inTime: "07:00",
      outTime: "21:05",
      status: "Approved",
    },
    {
      type: "On Duty",
      requestFor: "28-Feb-2023",
      requestedOn: "29-Feb-2023",
      inTime: "09:00",
      outTime: "08:10",
      status: "Approved",
    },
    {
      type: "On Duty",
      requestFor: "28-Jan-2023",
      requestedOn: "29-Jan-2023",
      inTime: "09:00",
      outTime: "08:10",
      status: "Approved",
    },
  ];

  // Filter logic based on request type, selected day, and date range
  const filteredData = data.filter((item) => {
    const matchesType =
      requestType === "All Request" || item.type === requestType;

    const matchesDay =
      selectedDay === "All Day(s)" ||
      new Date(item.requestFor).getDay() === parseInt(selectedDay);

    const requestDate = new Date(item.requestFor);
    const matchesDateRange =
      (!startDate || requestDate >= startDate) &&
      (!endDate || requestDate <= endDate);

    return matchesType && matchesDay && matchesDateRange;
  });

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="p-3">
      <h4 className="mb-4">Regularize Requests</h4>

      {/* Filter Section */}
      <Row className="mb-3">
        <Col xs={12} md={3} className="mb-2">
          <Form.Select
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
          >
            <option>All Request</option>
            <option>Missed Punch</option>
            <option>On Duty</option>
          </Form.Select>
        </Col>

        <Col xs={12} md={3} className="mb-2">
          <Form.Select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            <option>All Day(s)</option>
            <option value="0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
          </Form.Select>
        </Col>

        <Col xs={12} md={3} className="mb-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start date"
            className="form-control"
          />
        </Col>

        <Col xs={12} md={3} className="mb-2">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End date"
            className="form-control"
          />
        </Col>
      </Row>

      {/* Table Section */}
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Request Type</th>
            <th>Request For</th>
            <th>Requested On</th>
            <th>In Time</th>
            <th>Out Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.requestFor}</td>
              <td>{item.requestedOn}</td>
              <td>{item.inTime}</td>
              <td>{item.outTime}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination>
        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default RequestComponent;
