import React from 'react'
import { Container } from 'react-bootstrap'
import { MdOutlineMoodBad } from "react-icons/md";

const PerformanceComponent = () => {
  return (
    <>
    <Container className='p-3'>
      <div className="bg-white rounded-4 box-shadow pb-2">
        <div className="p-3">
          <h5 className="fw-bold mb-3">Performance Management</h5>
        </div>
        <div className="text-center px-4">
          <div className=''>
          <MdOutlineMoodBad size={100} color="rgb(238 238 238)"/>
          </div>
          <h3 className="mb-1">WOO!</h3>

          <p>
            Seems like there are no performance related activities mapped to you
          </p>
        </div>
      </div>
      </Container>
    </>
  )
}

export default PerformanceComponent

