import React, { useRef, useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Overview.css";

const LeaveOverviewComponent = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [holidayIndex, setHolidayIndex] = useState(0);

  const leaveData = [
    { month: "FEB 2025", leave: 2 },
    { month: "MAR 2025", leave: 4 },
    { month: "APR 2025", leave: 1 },
    { month: "MAY 2025", leave: 0 },
    { month: "JUN 2025", leave: 0 },
    { month: "JULY 2025", leave: 0 }
  ];

  const holidays = [
    { title: "Good Friday", date: "Friday, 18-Apr-2025" },
    { title: "Maharashtra Din / Labor Day", date: "Thursday, 01-May-2025" },
    { title: "Ramzan Eid", date: "Wednesday, 30-May-2025" }
  ];

  const currentMonth = "APR 2025";

  const leaveCards = [
    {
      title: "Leave Without Pay",
      value: "As per need",
      unit: "(Day(s))"
    },
    {
      title: "Earned Leave",
      value: "10",
      unit: "(Day(s))"
    },
    {
      title: "Sick Leave",
      value: "05",
      unit: "(Day(s))"
    },
    {
      title: "Casual Leave",
      value: "02",
      unit: "(Day(s))"
    }
  ];

  const leaveSliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const handlePrevHoliday = () => {
    if (holidayIndex > 0) setHolidayIndex(holidayIndex - 1);
  };

  const handleNextHoliday = () => {
    if (holidayIndex < holidays.length - 1) setHolidayIndex(holidayIndex + 1);
  };

  return (
    <Container className="p-3">
      <Card
        className="p-3 rounded-4 border-0 box-shadow leave-dashboard-wrapper bg-white d-flex flex-column flex-md-row gap-3"
        style={{
          height: "auto",
          flex: 1,
          maxWidth: "100%"
        }}
      >
        {/* Left Side - Leave Cards */}
        <div className="col-md-6" style={{ maxWidth: "100%" }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">Leave</h5>
          </div>

          {/* Slider with arrows on sides */}
          <div className="position-relative mb-4 px-2">
            {currentSlide > 0 && (
              <button
                className=" btn-sm  top-50 start-0 translate-middle-y  custom-arrow "
                onClick={() => sliderRef.current.slickPrev()}
              >
                <IoChevronBackSharp />
              </button>
            )}

            <Slider {...leaveSliderSettings} ref={sliderRef}>
              {leaveCards.map((card, index) => (
                <div key={index} className="px-2">
                  <div
                    className="d-flex align-items-center justify-content-between bg-light border rounded-pill px-4 py-3 h-100"
                    style={{ minHeight: "80px", flex: 1 }}
                  >
                    <div>
                      <h5 className="mb-1 text-primary fw-bold ">
                        {card.value}{" "}
                        <span className="small fw-semibold">{card.unit}</span>
                      </h5>
                      <p className="mb-0 fw-semibold small">{card.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {currentSlide < leaveCards.length - 1 && (
              <button
                className="btn-sm top-50 end-0 translate-middle-y custom-arrow "
                onClick={() => sliderRef.current.slickNext()}
              >
                <IoChevronForwardSharp />
              </button>
            )}
          </div>

          {/* Period Dropdown */}
          <div className="d-flex justify-content-center mb-3">
            <div
              className="period-selector d-flex align-items-center gap-2 px-3 py-1 rounded-pill border"
              style={{ maxWidth: "210px", width: "100%" }}
            >
              <span className="fw-semibold">Period:</span>
              <select className="border-0 bg-transparent fw-semibold">
                <option>Next 90 Day(s)</option>
                <option>Next 30 Day(s)</option>
                <option>Next 60 Day(s)</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <h6 className="mb-1 text-warning fw-bold">
              {holidays.length.toString().padStart(2, "0")}{" "}
              <span className="text-dark fw-normal">Upcoming Holiday(s)</span>
            </h6>

            <div className="holiday-card mt-2 rounded-3 px-3 py-2">
              <div className="d-flex align-items-center justify-content-between gap-2">
                <button
                  className="btn btn-light btn-sm rounded-circle p-1"
                  onClick={handlePrevHoliday}
                  disabled={holidayIndex === 0}
                >
                  <IoChevronBackSharp />
                </button>
                <div className="text-start">
                  <p className="mb-1 fw-bold text-warning">
                    {holidays[holidayIndex].title}
                  </p>
                  <small className="text-muted">
                    {holidays[holidayIndex].date}
                  </small>
                </div>
                <button
                  className="btn btn-light btn-sm rounded-circle p-1"
                  onClick={handleNextHoliday}
                  disabled={holidayIndex === holidays.length - 1}
                >
                  <IoChevronForwardSharp />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Chart */}
        <div className="col-md-6 d-flex flex-column justify-content-between" style={{ maxWidth: "100%" }}>
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <button className="btn btn-light btn-sm rounded-circle p-1">
              <IoChevronBackSharp />
            </button>
            <h6 className="fw-bold mb-0">April 2025</h6>
            <button className="btn btn-light btn-sm rounded-circle p-1">
              <IoChevronForwardSharp />
            </button>
          </div>

          <div className="flex-grow-1 px-3" style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leaveData}>
                <XAxis dataKey="month" hide />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="leave">
                  {leaveData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.month === currentMonth ? "#0d6efd" : "#bee3f8"}
                      radius={[5, 5, 0, 0]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="d-flex justify-content-between text-center text-muted mt-3 px-2 small">
            {leaveData.map((d, i) => (
              <div key={i}>{d.month}</div>
            ))}
          </div>

          <div className="d-flex justify-content-end mt-2">
            <small className="text-info">🟦 Casual Leave</small>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default LeaveOverviewComponent;
