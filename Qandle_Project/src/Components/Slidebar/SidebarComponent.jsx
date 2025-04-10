import React from 'react'
import { Col, NavLink, Row } from 'react-bootstrap'
import sumagoIcon from '../../assets/Sumago_logo.png'
import './SidebarComponent.css'
import ProfilePic from '../../assets/Profile_pic.webp'
import { SlHome, SlPeople, SlCalender } from "react-icons/sl";
import { IoAlarmOutline, IoKeyOutline, IoExitOutline } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdPendingActions, MdOutlinePersonSearch, MdDevicesOther } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { TbTopologyRing } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { FaPeopleRobbery } from "react-icons/fa6";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { Link } from 'react-router-dom'

const SidebarComponent = () => {
  return (
    <>
      <Row className='Sidebar ps-4 pt-4 '>
        <Col className='d-flex flex-column row-gap-2'>
          <div className="img d-flex justify-content-center">
            <img className='Iconimg ' src={sumagoIcon} alt="img not Found" />
          </div>
          <div as={NavLink} className='profileName m-4 d-flex column-gap-3 ' >
            <img className='Profile-Pic' src={ProfilePic} />
            Vivek Sanjay Patil
          </div>
          <Link to='/'className='Sidebar-menu'>
            <SlHome className='me-3 fs-5 text-primary' />Overview
          </Link>
          <div className='Sidebar-menu'>
            <IoAlarmOutline className='me-2 fs-4 text-danger' /> 
            <Link to='/leave'>My Leave</Link>
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <IoKeyOutline className='me-2 fs-4 text-success' />    My Attendace
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <LuFileSpreadsheet className='me-2 fs-4 text-success' /> My Timesheet
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <MdPendingActions className='me-2 fs-4 text-primary' />    My Compensation
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <FiTrendingUp className='me-2 fs-4 text text-secondary' />    My Performance
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <MdOutlinePersonSearch className='me-2 fs-3 text-primary' />    Recruitment
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <SlPeople className='me-2 fs-4 text-success' />    External Recruiter
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <TbTopologyRing className='me-2 fs-4 text-warning' />    Intranet
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <MdDevicesOther className='me-2 fs-4 text-Secondary' />    My Assets
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <CiLogout className='me-2 fs-4 text-warning' />    My Exit
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <FaRegBell className='me-2 fs-4 text-danger' />    Alerts
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <SlCalender className='me-2 fs-4 text-info' />    My Calender
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <FaPeopleRobbery className='me-2 fs -4 text-success' />    People
          </div>
          <div as={NavLink} className='Sidebar-menu'>
            <GiLevelFourAdvanced className='me-2fs-4 text-primary' />    Knowledge Base
          </div>
        </Col>
      </Row>
    </>
  )
}

export default SidebarComponent
