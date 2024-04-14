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
        ['TV','AC','Fridge']; 
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
        
        setFormData({
          ...formData,
          ["devices"]: selected_products
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
    let conn = new XMLHttpRequest();
        conn.open("POST", "http://localhost:3000/ticket/createTicket", true);
        conn.setRequestHeader("Content-Type", "application/json");
        conn.send(JSON.stringify(formData));
        conn.onreadystatechange = function() {
            console.log(this.status);
          if (this.status === 200) {
            console.log(this.responseText);
            window.location.href = "/customer";
          }
          else{
            // toast.error("Error");
          }
        };

  };


  return (
    <> 
    <div className="Background">
     <div className="ticket-container">
          <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Create Ticket</Modal.Title>
              </Modal.Header>
      
              <Modal.Body>
              <Container>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" onChange={handleChange} placeholder="Name" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="phone" onChange={handleChange} placeholder="Phone" />
          </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} placeholder="Email" />
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Dropdown> 
                <Dropdown.Toggle id="dropdown-basic"> 
                    Select Devices 
                </Dropdown.Toggle> 
                <Dropdown.Menu> 
                    {products.map((option, index) => ( 
                        <Dropdown.Item 
                            key={index} 
                            onClick={() => toggleLang(option)} 
                            active={ 
                                selected_products.includes(option)} 
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
                {(selected_products.length != 0) ? selected_products.join(', ') : 'None'} 
            </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Upload Images</Form.Label>
          <Form.Control type="file" name="images" onChange={handleChange} multiple/>
          </Form.Group>
          </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Comments</Form.Label>
            <Form.Control type="text" name="comments" onChange={handleChange} placeholder="Any Comments" />
            </Form.Group>
            </Col>
          </Row>
          </Container>
              </Modal.Body>
      
              <Modal.Footer>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
              </Modal.Footer>
            </Modal.Dialog>
            </div>
            </div>
    </>
  );
}

export default TicketGeneration;