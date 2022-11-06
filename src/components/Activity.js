import React from 'react';
import  "./Activity.css";
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function Activity() {
    return (
      <div className='Activity_container'>
        <br/>
      <h1>Sidhartha  Initiatives</h1>
      <div className='cards'>
      <Row>
        <Col> <Card className='zoom' style={{ width: '25rem' }}>
      <Card.Img variant="top" src="/images/img5.jpg" />
      <Card.Body >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        <Col> <Card className='zoom' style={{ width: '25rem' }}>
      <Card.Img variant="top" src="/images/img6.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        <Col> <Card className='zoom' style={{ width: '25rem' }}>
      <Card.Img variant="top" src="/images/img7.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      </Row><br/>
      <Row>
      <Col> <Card  className='zoom' style={{ width: '25rem' }}>
      <Card.Img variant="top" src="/images/img8.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      <Col> <Card className='zoom' style={{ width: '25rem' }}>
      <Card.Img variant="top" src="images/img9.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      <Col> <Card  className='zoom' style={{ width: '25rem' }}>
      <Card.Img variant="top" src="images/img10.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      </div>
     
        
     
      
      </div>
    );
  }
  
  export default Activity;
  
