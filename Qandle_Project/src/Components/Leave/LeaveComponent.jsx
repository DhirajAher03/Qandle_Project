import { IoPlayCircleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Tabs, Tab, Modal } from 'react-bootstrap';
import { useState } from 'react';
import StatusComponent from "./StatusComponent";

const LeaveComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <div className="leave container pt-4 bg-light">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center pb-3">
                    <p className="d-flex align-items-center mb-0">
                        <span className='leave-icon me-2'><SlCalender size={24} /></span>
                        <span className="fs-3 fw-bold">Leave</span>
                    </p>
                    <button 
                        className="btn btn-link text-decoration-none d-flex align-items-center"
                        onClick={handleShow}
                    >
                        How to use this section? <IoPlayCircleOutline size={20} className="ms-1" />
                    </button>
                </div>

                {/* Tabs */}
                <Tabs defaultActiveKey="status" id="leave-tabs" className="pb-1">
                    <Tab eventKey="status" title="Status">
                        <StatusComponent />
                    </Tab>
                    <Tab eventKey="requests" title="Requests">
                        <p>Tab content for Requests</p>
                    </Tab>
                    <Tab eventKey="holiday" title="Holiday List">
                        <p>Tab content for Holiday List</p>
                    </Tab>
                </Tabs>
            </div>

            {/* Modal for Video How to use Leave section? */}
            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>How to use Leave section?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://player.vimeo.com/video/325407543"
                            title="How to use this section"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default LeaveComponent;
