import React, { useState, useEffect } from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const PolicyDetailsComponent = () => {
  const [policies, setPolicies] = useState([]);
  const [activeKey, setActiveKey] = useState("0");

  useEffect(() => {
    // Simulate API call
    const fetchPolicies = async () => {
      // You can replace this with API call like:
      // const res = await fetch('/api/policies');
      // const data = await res.json();
      const data = [
        {
          title: "Work from Home Policy",
          details: [
            { label: "Entitlement", value: "2 Day in 1 Month" },
            { label: "Request raising for past dates", value: "Allowed" },
          ],
        },
        {
          title: "Sick Leave Policy",
          details: [
            { label: "Entitlement", value: "5 Days in 6 Months" },
            { label: "Medical Proof", value: "Required after 2 days" },
          ],
        },
      ];
      setPolicies(data);
    };

    fetchPolicies();
  }, []);
  return (
    <>
      <Accordion activeKey={activeKey} className="mt-3">
        {policies.map((policy, idx) => (
          <Accordion.Item
            eventKey={String(idx)}
            key={idx}
            className="mb-2 shadow-sm rounded-3"
          >
            <Accordion.Header
              onClick={() =>
                setActiveKey(activeKey === String(idx) ? null : String(idx))
              }
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <span className="fw-semibold">{policy.title}</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {policy.details.map((item, index) => (
                <Row key={index} className="mb-2">
                  <Col xs={6} className="fw-semibold text-muted">
                    {item.label}
                  </Col>
                  <Col xs={6}>{item.value}</Col>
                </Row>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default PolicyDetailsComponent;
