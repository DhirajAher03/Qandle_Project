import React from 'react'
import TimeAndAttendenceComponent from './TimeAndAttendanceComponent'
import RequestSummaryComponent from './RequestSummaryComponent'
import CalenderComponent from './CalenderComponent'
import LeaveOverviewComponent from './LeaveOverviewComponent'

const Overview = () => {
  return (
    <>
      <div className="bg-light">
        <TimeAndAttendenceComponent />
        <RequestSummaryComponent />
        <CalenderComponent />
        <LeaveOverviewComponent/>
      </div>
    </>
  )
}

export default Overview
