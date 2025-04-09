import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StatusTab from './StatusTab';
import { Container } from 'react-bootstrap';
import './Attendance.css';

const Attendance = () => {
  return (
    <>
      <Container className='bg-light rounded-3 p-2 shadow'>
      <Tabs
        defaultActiveKey="Status"
        transition={false}
        id="noanim-tab-example"
        >
        <Tab eventKey="Status" title="Status" className='pe-4'>
          <StatusTab/>
        </Tab>
        <Tab eventKey="Regularize-Requests" title="Regularize-Requests">
          Regularize Requests Content here...
        </Tab>
        <Tab eventKey="Shift-Details" title="Shift-Details">
          Shift Details Content here...
        </Tab>
        <Tab eventKey="Policy-Details" title="Policy-Details">
          Policy Details Content here...
        </Tab>
      </Tabs>
        </Container>
    </>
  );
};

export default Attendance;
