import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import './TicketGeneration.css';
import { toast, ToastContainer } from 'react-toastify';

function TicketGeneration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
    devices: [],
    images: []
  });

  const [selected_products, set_selected_products] =
    useState([]);
  const products =
    ['Television', 'Air Conditioner', 'Fridge', 'Washing Machine', 'Microwave', 'Water Purifier'];
  const toggleLang = (option) => {
    console.log(option);
    if (selected_products.includes(option)) {
      set_selected_products(
        selected_products.filter((item) =>
          item !== option));
    } else {
      set_selected_products(
        [...selected_products, option]);
    }
  };

  const [selected_services, set_selected_services] = useState([]);
  const services = 
       ['Disposal of Electronic waste', 'Transportation of Electronic Waste', 'Collection of Waste'];
  const toggle = (option) => {
    console.log(option);
    if (selected_services.includes(option)) {
      set_selected_services(
        selected_services.filter((item) =>
          item !== option));
    } else {
      set_selected_services(
        [...selected_services, option]);
    }

  setFormData({
    ...formData,
    ["devices"]: selected_products,
    ["services"]: selected_services
  });
};

const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === 'images') {
    setFormData({
      ...formData,
      [name]: e.target.files
    });
  } else {
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value
    });
  };
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (handleValidation()) {
    let conn = new XMLHttpRequest();
    conn.open("POST", "http://localhost:3000/ticket/createTicket", true);
    conn.setRequestHeader("Content-Type", "application/json");
    conn.send(JSON.stringify(formData));
    conn.onreadystatechange = function () {
      console.log(this.status);
      if (this.status === 200) {
        console.log(this.responseText);
        window.location.href = "/";
      }
      else {
        toast.error("Error in creating ticket!");
      }
    };
  }
};

const handleCancel = (e) => {
  e.preventDefault();
  window.location.href = "/services";
};

const handleValidation = () => {
  if (formData.name === '' || formData.email === '' || formData.phone === '' || formData.devices.length === 0 || formData.images.length === 0) {
    toast.error("Please fill all the fields!");
    return false;
  }
  return true;
};

return (
  <>
    <div className="Background">
      <div className="ticket-container">
        <ToastContainer />
        <Modal.Dialog>
          <Modal.Header style={{ justifyContent: 'center' }}>

            <Modal.Title>Create Ticket</Modal.Title>

          </Modal.Header>

          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange} placeholder="Name" required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" name="phone" onChange={handleChange} placeholder="Phone" required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-4" controlId="formGroupEmail" style={{ width: '430px' }}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} placeholder="Email" required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="d-flex mb-3" controlId="formGroupEmail" style={{ width: '300px' }}>
                    <Form.Label>Services</Form.Label>
                    <Dropdown>
                      <Dropdown.Toggle className="dropdown-basic">
                        Select Services
                      </Dropdown.Toggle>
                      <Dropdown.Menu >
                        {services.map((option, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={() => toggle(option)}
                            active={
                              selected_services.includes(option)
                            }
                          >
                            {option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    {(selected_services.length != 0) ? selected_services.join(', ') : ""}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="d-flex mb-4" controlId="formGroupEmail" style={{ width: '300px' }}>
                    <Form.Label>Devices</Form.Label>
                    <Dropdown>
                      <Dropdown.Toggle className="dropdown-basic">
                        Select Devices
                      </Dropdown.Toggle>
                      <Dropdown.Menu >
                        {products.map((option, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={() => toggleLang(option)}
                            active={
                              selected_products.includes(option)
                            }
                          >
                            {option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    {(selected_products.length != 0) ? selected_products.join(', ') : ""}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupEmail" style={{ width: '420px' }}>
                    <Form.Label>Upload Images</Form.Label>
                    <Form.Control type="file" name="images" onChange={handleChange} multiple required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupEmail" style={{ width: '420px' }}>
                    <Form.Label>Comments</Form.Label>
                    <Form.Control as="textarea" name="comments" onChange={handleChange} placeholder="Comments" required />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Modal.Body>


          <Modal.Footer>
            <div className="ticket-button">
              <Button variant="secondary" onClick={handleCancel} className="btn-ticket-cancel" >Cancel</Button>
              <Button variant="primary" onClick={handleSubmit} className="btn-ticket-submit">Submit</Button>
            </div>
          </Modal.Footer>
        </Modal.Dialog>

      </div>
    </div>
  </>
);
}

export default TicketGeneration;