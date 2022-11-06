import '../../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import "./Admission.css";


export default function Admission() {
  const [show, setShow] = useState(false);
  let name=useState({value:''})

  const handleClose = (event) => {
    setShow(false)};
  const handleShow = () => setShow(true);
  
  return (
    <div className='text-center' style={{marginTop:'10%'}}>
      <h2> Admission</h2>
    
    <h1>
      Admission procedure
    </h1>
    <p>{name.value}</p>
    <p>
      In our school Admission process is simple
    </p>
    <p>
      You have to fill the form by clicking on below button and Our staff will contact you shortly
    </p>
    <button type="button" className="btn btn-primary" onClick={handleShow} >
      Admission Enquiry Form
    </button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Admission Enquiry Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" value={name.value} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="childName">
        <Form.Label>Child Name</Form.Label>
        <Form.Control type="text" placeholder="Child Name" />
      </Form.Group>
      <Form.Label>Child Grade</Form.Label>
      <Form.Select className="mb-3" aria-label="Default select example">
      <option>select Grade</option>
      <option value="1">One Grade</option>
      <option value="2">Two Grade</option>
      <option value="3">Three Grade</option>
      <option value="4">Four Grade</option>
      <option value="5">Five Grade</option>
      <option value="6">Six Grade</option>
      <option value="7">Seven Grade</option>
      <option value="8">Eight Grade</option>
      <option value="9">Nine Grade</option>
      <option value="10">Tenth Grade</option>
      <option value="11">Eleventh Grade</option>
      <option value="12">Twelfth Grade</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group
            className="mb-3"
            controlId="commentsBox"
          >
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
    
  )
}
