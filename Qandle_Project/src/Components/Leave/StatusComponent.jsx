// src/components/StatusComponent.js
import { useState } from 'react';
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import './LeaveCompo.css';
import { CiCircleList } from "react-icons/ci";
import { SiGraphql } from "react-icons/si";
import { MdOutlineMessage } from 'react-icons/md';
import LeaveCard from './CasualLeave';
import LeaveWithoutPayCard from './LeaveWithoutPay';
import LeaveTable from './LeaveTable';
import FaqComponent from './FaqComponent';

const StatusComponent = () => {
  const [viewType, setViewType] = useState("graph");
  const [selectedLeave, setSelectedLeave] = useState("Select Leave Type");

  const [showFAQ, setShowFAQ] = useState(false); // Modal open/close state

  return (
    <>
      {/* Leave Type Dropdown & View Toggle */}
      <div className="d-flex justify-content-between align-items-center status-content">
        <Dropdown onSelect={(key) => setSelectedLeave(key)}>
          <Dropdown.Toggle id="dropdown-basic" className="leave-dropdown">
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
        <div className="status-cards">
          <div className="row ">
            <div className="col-md-6 mb-3 d-flex justify-content-center">
              <LeaveCard
                title="Casual Leave"
                accrued={4}
                usedTillDate={2}
                usedStar={2}
                requested={0}
                balance={2}
                chartColor="#00aaff"
              />
            </div>
            <div className="col-md-6 mb-3">
              <LeaveWithoutPayCard />
            </div>
          </div>
        </div>
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
