import React from 'react';
import  "./News.css"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap'



function News() {
    return (
      <div className='News_container'>
        <br/>
        <h1>Latest News</h1><br/>
        <Carousel>
      <Carousel.Item interval={1000}>
      <Row>
        <Col> <Card className='zooma' style={{ width: '25rem' }}>
      <Card.Img variant="top" src="/images/img5.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        <Col> <Card  className='zooma'  style={{ width: '25rem' }}>
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
        <Col> <Card className='zooma'   style={{ width: '25rem' }}>
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
      </Row>
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Row>
        <Col> <Card className='zooma'  style={{ width: '25rem' }}>
      <Card.Img variant="top" src="/images/img5.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        <Col> <Card className='zooma'   style={{ width: '25rem' }}>
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
        <Col> <Card className='zooma'  style={{ width: '25rem' }}>
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
      </Row>
       
      </Carousel.Item>
      
    </Carousel>
       
      </div>
    );
  }
  
  export default News;
  
