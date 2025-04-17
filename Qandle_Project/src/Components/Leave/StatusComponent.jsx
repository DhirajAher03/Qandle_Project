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
    <div className="row g-2 status-content align-items-center">
  {/* Dropdown - Always full width on small, shrink on md+ */}
  <div className="col-12 col-md-auto d-flex justify-content-center">
    <Dropdown onSelect={(key) => setSelectedLeave(key)}>
      <Dropdown.Toggle id="dropdown-basic" className="leave-dropdown ">
        {selectedLeave}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="Casual Leave">Casual Leave</Dropdown.Item>
        <Dropdown.Item eventKey="Leave Without Pay">Leave Without Pay</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>

  {/* FAQ Button & View Buttons - Stack on mobile, inline on desktop */}
  <div className="col-12 col-md d-flex justify-content-md-end gap-2 flex-wrap ">
    <Button
      variant="link"
      className="px-0 text-primary mx-4 mx-md-0 "
      onClick={() => setShowFAQ(true)}
    >
      <MdOutlineMessage className="me-1" /> FAQ's
    </Button>
    <FaqComponent show={showFAQ} handleClose={() => setShowFAQ(false)} />

    <ButtonGroup className='leave-button'>
      <Button
        variant={viewType === 'table' ? 'primary' : 'outline-secondary'}
        onClick={() => setViewType('table')}
      >
        <CiCircleList /> Table
      </Button>
      <Button
        variant={viewType === 'graph' ? 'primary' : 'outline-secondary'}
        onClick={() => setViewType('graph')}
      >
        <SiGraphql /> Graph
      </Button>
    </ButtonGroup>
  </div>
</div>


{/* Content below */}
<div className="status-data my-2">
{viewType === 'graph' ? (
  <GraphComponent />
) : (
  <div className="table-responsive mt-3">
    <LeaveTable />
  </div>
)}

</div>

    </>
  );
};

export default StatusComponent;
