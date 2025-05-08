import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import Select from "react-select";
import profile_Icon from "../../assets/Profile_pic.webp";
import { IoIosTimer } from "react-icons/io";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Row,
  Form,
  Table,
  Container,
  ButtonGroup,
  Modal,
} from "react-bootstrap";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoCafeOutline,
  IoBarChartSharp,
} from "react-icons/io5";
import { FaRegCalendarAlt, FaDollarSign } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import CountUp from "react-countup";
import { MdOutlineMessage } from "react-icons/md";
import FaqComponent from "../Leave/FaqComponent"; // keep this external

const StatusTab = () => {
  const [selectOptions, setSelectOptions] = useState([]);


  const [showRegularize, setShowRegularize] = useState(false);
  const handleShowRegularize = () => setShowRegularize(true);
  const handleCloseRegularize = () => setShowRegularize(false);

  const [showFAQ, setShowFAQ] = useState(false);
  const [viewType, setViewType] = useState("table");
  const [attendanceData, setAttendanceData] = useState([]);
  const [summary, setSummary] = useState({
    avgWorkingHrs: "00:00",
    avgInTime: "00:00",
    avgOutTime: "00:00",
    avgBreak: "00",
    paidDays: 0,
  });
  const [selectedMonth, setSelectedMonth] = useState("04"); // April

  const [RegularizeNext, setRegularizeNext] = useState(false);
  const handleShowRegularizeNext = () => {setRegularizeNext(true);
    handleCloseRegularize()
  }
  const handleCloseRegularizeNext = () => {
    setRegularizeNext(false);
  };

  const dataSubmittedalert = () => {
    alert("Data Submitted Successfully");
  };
  //Staff Details
  const staffDetails = [
    {
      value: "Satish Krishna Aurange",
      label: "Satish Krishna Aurange",
    },
    {
      value: "Srinivas K",
      label: "Srinivas K",
    },
    {
      value: "Manoj Kumar",
      label: "Manoj Kumar",
    },
    {
      value: "Venkatesh",
      label: "Venkatesh",
    },
  ];

  // Simulated API response
  const fullData = [
    {
      date: "07-Apr-2025",
      in: "09:03:07",
      out: "-",
      hours: "00:45:56",
      remark: "Present",
    },
    {
      date: "06-Apr-2025",
      in: "-",
      out: "-",
      hours: "00:00:00",
      remark: "Week Off",
    },
    {
      date: "05-Apr-2025",
      in: "-",
      out: "-",
      hours: "00:00:00",
      remark: "Week Off",
    },
    {
      date: "04-Apr-2025",
      in: "08:58:52",
      out: "19:38:07",
      hours: "10:39:15",
      remark: "Present",
    },
    {
      date: "03-Apr-2025",
      in: "09:06:44",
      out: "19:06:47",
      hours: "10:00:03",
      remark: "Present",
    },
    {
      date: "02-Apr-2025",
      in: "08:59:29",
      out: "19:13:30",
      hours: "10:14:01",
      remark: "Present",
    },
    {
      date: "12-Mar-2025",
      in: "09:00:00",
      out: "18:00:00",
      hours: "09:00:00",
      remark: "Present",
    },
    {
      date: "15-Mar-2025",
      in: "-",
      out: "-",
      hours: "00:00:00",
      remark: "Week Off",
    },
  ];

  useEffect(() => {
    const filtered = fullData.filter((item) => {
      const month = item.date.split("-")[1]; // "Apr"
      const monthMap = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
      };
      return monthMap[month] === selectedMonth;
    });

    const totalPaid = filtered.filter(
      (item) => item.remark === "Present"
    ).length;
    const avgBreak = 0;
    const avgIn = "09:02";
    const avgOut = "19:19";
    const avgHours = "08:23";

    setAttendanceData(filtered);
    setSummary({
      avgBreak,
      avgInTime: avgIn,
      avgOutTime: avgOut,
      avgWorkingHrs: avgHours,
      paidDays: totalPaid,
    });
  }, [selectedMonth]);

  const chartData = attendanceData.map((item) => {
    const [h, m, s] = item.hours.split(":").map(Number);
    const workHours = h + m / 60 + s / 3600;
    return {
      date: item.date.split("-")[0],
      WORK_HOURS: parseFloat(workHours.toFixed(2)),
      BREAK_DURATION: parseFloat(summary.avgBreak),
      AUTO_CLOCKOUT: item.out === "-" ? 1 : 0,
    };
  });

  const timeToFloat = (time) => {
    const [h, m] = time.split(":").map(Number);
    return h + m / 60;
  };

  return (
    <>
      <Container>
        <Row className="align-items-center record-by-month mb-3">
          <Col xs={7}>
            <Form.Select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              style={{ width: "150px" }}
            >
              <option value="01">Jan 2025</option>
              <option value="02">Feb 2025</option>
              <option value="03">Mar 2025</option>
              <option value="04">Apr 2025</option>
              <option value="05">May 2025</option>
              <option value="06">Jun 2025</option>
              <option value="07">Jul 2025</option>
              <option value="08">Aug 2025</option>
              <option value="09">Sep 2025</option>
              <option value="10">Oct 2025</option>
              <option value="11">Nov 2025</option>
              <option value="12">Dec 2025</option>
            </Form.Select>
          </Col>
          <Col xs={5} className="d-flex ">
            <Button className="ms-auto" variant="link" onClick={() => setShowFAQ(true)}>
              <MdOutlineMessage /> FAQ's
            </Button>
            <Button disabled className="bg-danger me-2 d-none d-lg-block">
              Regularize(0)
            </Button>
            <ButtonGroup className="h-90 align-self-center">
              <Button
                variant={viewType === "table" ? "primary" : "outline-secondary"}
                onClick={() => setViewType("table")}
              >
                <CiBoxList />
              </Button>
              <Button
                variant={viewType === "graph" ? "primary" : "outline-secondary"}
                onClick={() => setViewType("graph")}
              >
                <IoBarChartSharp className="fs-4" />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>

        <Row className="mb-4 avg_parent text-center p-3 gx-3 gy-3">
          <Col xs={6} lg={true} className="d-flex">
            <div className="p-3 avg-Work_Hrs rounded flex-fill">
              <FaRegCalendarAlt className="fs-3 text-success" />
              <h5>
                <CountUp
                  end={timeToFloat(summary.avgWorkingHrs)}
                  decimals={2}
                  duration={1.5}
                />
              </h5>
              <small>Average Working Hours</small>
            </div>
          </Col>
          <Col xs={6} lg={true} className="d-flex">
            <div className="p-3 avg-In-Time rounded flex-fill">
              <IoLogInOutline className="fs-3" />
              <h5>
                <CountUp
                  end={timeToFloat(summary.avgInTime)}
                  decimals={2}
                  duration={1.5}
                />
              </h5>
              <small>Average In Time</small>
            </div>
          </Col>
          <Col xs={6} lg={true} className="d-flex" >
            <div className="p-3 avg-out-time rounded flex-fill">
              <IoLogOutOutline className="fs-3 text-primary" />
              <h5>
                <CountUp
                  end={timeToFloat(summary.avgOutTime)}
                  decimals={2}
                  duration={1.5}
                />
              </h5>
              <small>Average Out Time</small>
            </div>
          </Col>
          <Col xs={6} lg={true} className="d-flex" >
            <div className="p-3 avg-break rounded flex-fill">
              <IoCafeOutline className="fs-3" />
              <h5>
                <CountUp
                  end={parseFloat(summary.avgBreak)}
                  decimals={0}
                  duration={1.5}
                />
              </h5>
              <small>Average Break</small>
            </div>
          </Col>
          <Col xs={6} lg={true} className="d-flex">
            <div className="p-3 paid-days rounded flex-fill">
              <FaDollarSign className="fs-3 text-danger" />
              <h5>
                <CountUp end={summary.paidDays} duration={1.5} />
              </h5>
              <small>Paid Days</small>
            </div>
          </Col>
        </Row>

        <Form className="mb-3 d-flex align-items-center">
          <label htmlFor="group1" className="me-2">
            <strong>Select Dates:</strong>
          </label>
          <Form.Check
            inline
            label="Check/Un-Check All"
            name="group1"
            type="radio"
            defaultChecked
          />
          <Form.Check
            inline
            label="Excluding Week Off"
            name="group1"
            type="radio"
          />
          <div className="ms-auto">
            <Button variant="primary">Export to CSV</Button>
          </div>
        </Form>

        {viewType === "table" ? (
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>
                  <Form.Check />
                </th>
                <th>Date</th>
                <th>Clock In</th>
                <th>Clock Out</th>
                <th>Total Work Hours</th>
                <th>Remark</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((d, idx) => (
                <tr key={idx}>
                  <td>
                    <Form.Check />
                  </td>
                  <td>{d.date}</td>
                  <td>{d.in}</td>
                  <td>{d.out}</td>
                  <td>{d.hours}</td>
                  <td
                    className={
                      d.remark === "Week Off" ? "text-danger" : "text-success"
                    }
                  >
                    {d.remark}
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={handleShowRegularize}
                    >
                      Regularize
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div
            style={{
              width: "100%",
              height: 300,
              background: "#fff",
              padding: "1rem",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="date"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={60}
                  tick={{ fontSize: 11 }}
                />
                <YAxis domain={[0, 12]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend
                  verticalAlign="top"
                  align="right"
                  wrapperStyle={{ fontSize: 12 }}
                />
                <Bar
                  dataKey="BREAK_DURATION"
                  fill="#00b0f0"
                  name="BREAK_DURATION"
                  barSize={6}
                />
                <Bar
                  dataKey="WORK_HOURS"
                  fill="#4b0082"
                  name="WORK_HOURS"
                  barSize={6}
                />
                <Bar
                  dataKey="AUTO_CLOCKOUT"
                  fill="#00c851"
                  name="AUTO_CLOCKOUT"
                  barSize={6}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </Container>

      {/* Modal  */}
      <Modal
        show={showRegularize}
        onHide={handleCloseRegularize}
        size="md"
        centered
      >
        <Modal.Header className="bg-primary" closeButton>
          <Modal.Title className="text-white">
            Regularization Request
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="fw-bold">Select Policy:</span>
          <Form.Select
            className="mb-3 w-50"
            aria-label="Default select example"
            aria-placeholder="Select Policy"
          >
            <option value="1" disabled>Select Policy</option> 
            <option value="2">Missed Punch</option>
            <option value="3">On Duty</option>
            <option value="4">Work From Home</option>
          </Form.Select>
          <Modal.Footer>
            <Button
              className="bg-primary me-auto"
              onClick={handleShowRegularizeNext}
            >
              Next
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
      <Modal
        show={RegularizeNext}
        onHide={handleCloseRegularizeNext}
        size="md"
        centered
      >
        <Modal.Header className="bg-primary" closeButton>
          <Modal.Title className="text-white">
            Regularization Request
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="dateTimeSection container-fluid ">
            <h6>5-2-2025</h6>
            <Row className="time">
              <Col className="intime">
                <span aria-required>In Time: </span>
                <Form.Control type="time" className="fw-2 text-primary" />
              </Col>
              <Col className="outtime">
                <span aria-required>Out Time</span>
                  <Form.Control type="time" />
              </Col>
            </Row>
          </div>
          <Form.Label className="fw-bold mt-3">Comment:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Comment" />
          <h6 className="mt-2">Approve Chain</h6>
          <div className="approver_id d-flex align-items-center mb-3">
            <img className="Prof_img_Regularize" src={profile_Icon} />
            <span className="fw-bold">Satish Krishna Aurange</span>
          </div>
          <div className="notifyTo">
            <Form.Label className="fw-bold text-secondary">
              Notify To:
            </Form.Label>
            <Select options={staffDetails} isMulti value={selectOptions} onChange={setSelectOptions}/>
            {/* <Form.Select
              className="mb-3 w-50 multiple"
              aria-label="Default select example"
              aria-placeholder="Select Policy"
            >
              {staffDetails.map((staff, index) => (
                <option key={index} >{staff.name}</option>
              ))}
            </Form.Select> */}
          </div>
          <div className="d-flex justify-content-end">
            <Button variant="primary" onClick={handleCloseRegularizeNext}>
              Submit
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      {/* FAQ Modal */}
      <FaqComponent show={showFAQ} handleClose={() => setShowFAQ(false)} />
    </>
  );
};

export default StatusTab;
