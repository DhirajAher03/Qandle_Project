import React from "react";
import { Col, Row } from "react-bootstrap";
import sumagoIcon from "../../assets/Sumago_logo.png";
import ProfilePic from "../../assets/Profile_pic.webp";
import {
  SlHome, SlPeople, SlCalender
} from "react-icons/sl";
import {
  IoAlarmOutline, IoKeyOutline
} from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import {
  MdPendingActions, MdOutlinePersonSearch, MdDevicesOther
} from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { TbTopologyRing } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { FaPeopleRobbery } from "react-icons/fa6";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./SidebarComponent.css";

const SidebarComponent = ({ show, closeSidebar }) => {
  const renderSidebarContent = () => (
    <>
      <Col className="d-flex flex-column row-gap-2">
        <div className="img d-flex justify-content-center">
          <img className="Iconimg " src={sumagoIcon} alt="img not Found" />
        </div>
        <div className="profileName mb-4 mt-4 d-flex column-gap-3 align-items-center">
          <img className="Profile-Pic" src={ProfilePic} alt="profile" />
          <span className="fw-bold">Vivek Sanjay Patil</span>
        </div>
      </Col>

      <Col className="menuList pb-4 d-flex flex-column gap-3">
        <Link to="/" onClick={closeSidebar} className="Sidebar-menu">
          <SlHome className="me-3 fs-5 text-primary" /> Overview
        </Link>
        <Link to="/leave" onClick={closeSidebar} className="Sidebar-menu">
          <IoAlarmOutline className="me-2 fs-4 text-danger" /> My Leave
        </Link>
        <Link to="/attendance" onClick={closeSidebar} className="Sidebar-menu">
          <IoKeyOutline className="me-2 fs-4 text-success" /> My Attendance
        </Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><LuFileSpreadsheet className="me-2 fs-4 text-success" /> My Timesheet</Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><MdPendingActions className="me-2 fs-4 text-primary" /> My Compensation</Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><FiTrendingUp className="me-2 fs-4 text-secondary" /> My Performance</Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><MdOutlinePersonSearch className="me-2 fs-3 text-primary" /> Recruitment</Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><SlPeople className="me-2 fs-4 text-success" /> External Recruiter</Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><TbTopologyRing className="me-2 fs-4 text-warning" /> Intranet</Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><MdDevicesOther className="me-2 fs-4 text-secondary" /> My Assets</Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><CiLogout className="me-2 fs-4 text-warning" /> My Exit</Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><FaRegBell className="me-2 fs-4 text-danger" /> Alerts</Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><SlCalender className="me-2 fs-4 text-info" /> My Calendar</Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><FaPeopleRobbery className="me-2 fs-4 text-success" /> People</Link>
        <Link to="#" onClick={closeSidebar} className="Sidebar-menu"><GiLevelFourAdvanced className="me-2 fs-4 text-primary" /> Knowledge Base</Link>
      </Col>
    </>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar-overlay d-lg-none ${show ? "show" : ""}`}>
        <div className="mobile-sidebar shadow p-3">
          <button className="btn-close mb-3" onClick={closeSidebar}></button>
          <Row className="mt-4 ">{renderSidebarContent()}</Row>
        </div>
        <div className="overlay-backdrop" onClick={closeSidebar}></div>
      </div>

      {/* Desktop Sidebar */}
      <Row className="Sidebar pt-4 pb-3 z-1 d-none d-lg-block">
        {renderSidebarContent()}
      </Row>
    </>
  );
};

export default SidebarComponent;
