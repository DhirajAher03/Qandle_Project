import React from 'react';
import { Button, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';

const LeaveTable = () => {
  const leaves = [
    {
      type: 'Casual Leave',
      accrued: 4,
      usedTillDate: 2,
      usedStar: 2.0,
      requested: 0,
      balance: 2,
    },
    {
      type: 'Leave Without Pay',
      accrued: 'As Per Need',
      usedTillDate: 0,
      usedStar: '-',
      requested: 0,
      balance: 'As Per Need',
    }
  ];

  return (
    <div className="table-responsive">
      <Table bordered hover className="">
        <thead className="table-light">
          <tr>
            <th>Leave Type</th>
            <th>Accrued</th>
            <th>Used <br /><small>(Till Date)</small></th>
            <th>
              Used
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Used* includes backdated leaves</Tooltip>}
              >
                <sup>*</sup>
              </OverlayTrigger>
              <br />
              <small>(Current Leave Calendar Year)</small>
            </th>
            <th>Requested</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr key={index}>
              <td>{leave.type}</td>
              <td>{leave.accrued}</td>
              <td>{leave.usedTillDate}</td>
              <td>{leave.usedStar}</td>
              <td>{leave.requested}</td>
              <td>{leave.balance}</td>
              <td>
                <Button size="sm" variant="outline-primary">Apply Leave</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LeaveTable;
