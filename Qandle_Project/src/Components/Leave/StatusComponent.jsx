// src/components/StatusComponent.js
import { useState } from 'react';
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import './LeaveCompo.css';
import { CiCircleList } from "react-icons/ci";
import { SiGraphql } from "react-icons/si";
import { MdOutlineMessage } from 'react-icons/md';
import LeaveTable from './LeaveTable';
import FaqComponent from './FaqComponent';
import GraphComponent from './GraphComponent';

const StatusComponent = () => {
  const [viewType, setViewType] = useState("table");
  const [selectedLeave, setSelectedLeave] = useState("Select Leave Type");

  const [showFAQ, setShowFAQ] = useState(false); // Modal open/close state

  return (
    <>
      {/* Leave Type Dropdown & View Toggle */}
      <div className="d-flex justify-content-between align-items-center status-content">
        <Dropdown onSelect={(key) => setSelectedLeave(key)}>
          <Dropdown.Toggle id="dropdown-basic" className="leave-dropdown z-n1">
            {selectedLeave}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Casual Leave">Casual Leave</Dropdown.Item>
            <Dropdown.Item eventKey="Leave Without Pay">Leave Without Pay</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div>
          <Button variant="link" className='me-2' onClick={() => setShowFAQ(true)}>
            <MdOutlineMessage /> FAQ's
          </Button>

          <ButtonGroup>
            <Button
              variant={viewType === 'table' ? "primary" : "outline-secondary"}
              onClick={() => setViewType('table')}
            >
              <CiCircleList /> Table
            </Button>
            <Button
              variant={viewType === 'graph' ? "primary" : "outline-secondary"}
              onClick={() => setViewType('graph')}
            >
              <SiGraphql /> Graph
            </Button>
          </ButtonGroup>
        </div>
      </div>

      {/* Leave Cards */}
      {viewType === 'graph' ? (
  <GraphComponent />
) : (
  <div className="table-responsive mt-3">
    <LeaveTable />
  </div>
)}


      {/* FAQ Modal */}
      <FaqComponent show={showFAQ} handleClose={() => setShowFAQ(false)} />
    </>
  );
};

export default StatusComponent;
