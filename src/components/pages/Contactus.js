import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Contactus.css";


export default function Contactus() {
  return(
    <div  className='contact_page' >
      <Container>
      <Row>
        <Col>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60912.80068982936!2d78.51658445820316!3d17.409385900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ec06878dd3d%3A0xd7b75419c660a722!2sSiddhartha%20Public%20School!5e0!3m2!1sen!2sin!4v1664708854657!5m2!1sen!2sin" 
    width="600"
    height="450"
    allowFullScreen=""
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    style={{border:0,marginTop:'5%'}}>
    </iframe>
    </Col>
    <Col>
      <p style={{marginTop:'5%'}}>
        <strong>
          Address:
        </strong>
        <br />
          Siddhartha International School,
        <br />
        Near Financial District, Hyderabdad
      </p>
      <p>
        <strong>
          Admissions:
        </strong>
        <br />
          <a>+91 91278739893, 8192773979</a>,
      </p>
      <p>
        <strong>
          Office Phone Number:
        </strong>
        <br />
          <a>+91 9182929734, 9294792896</a>,
      </p>
      <p>
        <strong>
          E-Mail:
        </strong>
        <br />
          <a>siddharthaSchools@edu.in,admissionssiddhartha@edu.in</a>,
      </p>
      </Col>
      </Row>
      </Container>
    </div>
  )
}


