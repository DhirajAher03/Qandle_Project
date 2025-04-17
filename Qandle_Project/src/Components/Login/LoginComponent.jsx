import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './LoginCompo.css';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import company_logo from "../../assets/Sumago_logo.png";// Replace with your logo path
const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isEmployeeCode, setIsEmployeeCode] = useState(false);

  return (
    <>
      <Container fluid className="login-container p-0">
        <Row className="g-0 login-row">
          {/* Left Side - Image */}
          <Col lg={6} className="d-none d-lg-flex login-left">
            <div className="login-left-image"></div>
          </Col>

          {/* Right Side - Login Form */}
          <Col lg={6} xs={12} className="d-flex align-items-center justify-content-center login-right">
            <Card className="login-card p-3 rounded-5 shadow">
              <Card.Body>
                {/* Add Logo here for mobile/tablet view */}
                <div className="text-center mb-4 d-lg-none">
                  <img src={company_logo} alt="Company Logo" className="login-logo" />
                </div>

                <h3 className="mb-1 fs-5 text-dark">Sign in to your Qandle account</h3>

                <Form>
                  <Form.Group className="my-3 p-0">
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        label="Work Email"
                        name="loginType"
                        onChange={() => setIsEmployeeCode(false)}
                        defaultChecked
                      />
                      <Form.Check
                        inline
                        type="radio"
                        label="Employee Code"
                        name="loginType"
                        onChange={() => setIsEmployeeCode(true)}
                      />
                    </div>
                  </Form.Group>

                  {/* Conditionally show input */}
                  {isEmployeeCode ? (
                    <Form.Group controlId="employeeCode" className="mb-3">
                      <Form.Control
                        type="text"
                        name="employeeCode"
                        placeholder="Employee code*"
                        className="custom-placeholder"
                      />
                    </Form.Group>
                  ) : (
                    <Form.Group controlId="email" className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Work email*"
                        className="custom-placeholder"
                      />
                    </Form.Group>
                  )}

                  <div className="position-relative show-password">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password*"
                      className="pe-5 custom-placeholder"
                      autoComplete="new-password"
                      inputMode="text"
                    />

                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                    >
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </span>
                  </div>

                  <div className="text-start mb-3">
                    <a href="#forgot-password" className="forgot-password-link">Forgot Password?</a>
                  </div>

                  <Button variant="primary" type="submit" className="w-100 py-2">
                    Sign In <FaAngleDoubleRight />
                  </Button>
                </Form>

                <div className="mt-4 text-center">
                  <span className="login-footer">
                    © 2025 Qandle (Digital Ecom Techno Pvt. Ltd.)
                  </span>
                  <div>
                    <a href="#privacy-policy" className="privacy-policy-link fw-bold">Privacy Policy</a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginComponent;
