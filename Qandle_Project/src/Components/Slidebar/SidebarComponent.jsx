import React from "react";
import { Col, NavLink, Row } from "react-bootstrap";
import sumagoIcon from "../../assets/Sumago_logo.png";
import "./SidebarComponent.css";
import ProfilePic from "../../assets/Profile_pic.webp";
import { SlHome, SlPeople, SlCalender } from "react-icons/sl";
import { IoAlarmOutline, IoKeyOutline, IoExitOutline } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import {
  MdPendingActions,
  MdOutlinePersonSearch,
  MdDevicesOther,
} from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { TbTopologyRing } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { FaPeopleRobbery } from "react-icons/fa6";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { Link } from "react-router-dom";

const SidebarComponent = ({ show, closeSidebar }) => {
  return (
    <>
    {/* <div className={`sidebar ${show ? 'show' : ''}`}> */}

      <Row className="Sidebar pt-4 pb-3 z-1">
        <Col className="d-flex flex-column row-gap-2">
          <div className="img d-flex justify-content-center">
            <img className="Iconimg " src={sumagoIcon} alt="img not Found" />
          </div>
          <div as={NavLink} className="profileName mb-4 mt-4 d-flex column-gap-3 align-items-center ">
            <img className="Profile-Pic" src={ProfilePic} />
            <span className="fw-bold ">Vivek Sanjay Patil</span>
          </div>
          </Col>
          <Col className="menuList pb-5 d-flex flex-column column gap-3">
            <Link to="/" onClick={closeSidebar} className="Sidebar-menu">
              <SlHome className="me-3 fs-5 text-primary" />Overview
            </Link>
            <Link to=" " onClick={closeSidebar}  className="Sidebar-menu">
              <IoAlarmOutline className="me-2 fs-4 text-danger" /> My Leave
            </Link>
            <Link to="/Attendance" onClick={closeSidebar} className="Sidebar-menu">
              <IoKeyOutline className="me-2 fs-4 text-success" />My Attendace
            </Link>
            <Link to=" " onClick={closeSidebar} className="Sidebar-menu">
              <LuFileSpreadsheet className="me-2 fs-4 text-success" /> My Timesheet
            </Link>
            <Link to=" " onClick={closeSidebar} className="Sidebar-menu">
              <MdPendingActions className="me-2 fs-4 text-primary" /> My Compensation
            </Link>
            <Link to=" " onClick={closeSidebar} className="Sidebar-menu">
              <FiTrendingUp className="me-2 fs-4 text text-secondary" /> My Performance
            </Link>
            <Link to=" " className="Sidebar-menu">
              <MdOutlinePersonSearch className="me-2 fs-3 text-primary" />Recruitment
            </Link>
            <Link to=" " className="Sidebar-menu">
              <SlPeople className="me-2 fs-4 text-success" /> External Recruiter
            </Link>
            <Link to=" " className="Sidebar-menu">
              <TbTopologyRing className="me-2 fs-4 text-warning" /> Intranet
            </Link>
            <Link to=" " className="Sidebar-menu">
              <MdDevicesOther className="me-2 fs-4 text-Secondary" /> My Assets
            </Link>
            <Link to=" " className="Sidebar-menu">
              <CiLogout className="me-2 fs-4 text-warning" /> My Exit
            </Link>
            <Link to=" " className="Sidebar-menu">
              <FaRegBell className="me-2 fs-4 text-danger" /> Alerts
            </Link>
            <Link to=" " className="Sidebar-menu">
              <SlCalender className="me-2 fs-4 text-info" /> My Calender
            </Link>
            <Link to=" " className="Sidebar-menu">
              <FaPeopleRobbery className="me-2 fs -4 text-success" /> People
            </Link>
            <Link to=" " className="Sidebar-menu">
              <GiLevelFourAdvanced className="me-2fs-4 text-primary" />Knowledge Base
            </Link>
          </Col>
        
      </Row>
      {/* </div> */}
    </>
  );
};

export default SidebarComponent;
