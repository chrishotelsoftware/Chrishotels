import React from 'react';
import '../../App.css';
import "./Aboutus.css";
import Footer from '../Footer';

import Carousel from 'react-bootstrap/Carousel';

function  Aboutus() {
  return (
    <div className='about_page'>
      <div className='slider'>
    <Carousel>
      
      <Carousel.Item>
     
        <img
          className="d-block w-100"
          src="/images/img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>About us</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img5.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>About us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Aboutus</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='info'>
      <h3>TRADITION OF EXCELLENCE SINCE 2010</h3>
      <p>
      Established in 1927, by Sheth Anandilal Podar, Podar Education Group has, from the very beginning been focussed driven and motivated by the traditional Indian values of honesty, integrity and service. The father of our nation, Mahatma Gandhi, being the very first President of the Anandilal Podar Trust stands testimony to this fact. (View the minutes of the first Trust meeting).<br/><br/>

With over 95 years of experience within the educational space, the Podar group is now a network of 139 Podar International Schools (completely managed by Podar Education Network) and 89 Podar Partner schools, with a combined student strength of more than 2,00,000 and the support of 7,800 dedicated and loyal staff members.<br/><br/>

Our constantly growing network of education institutions includes a wide spectrum of Pre-Primary schools under the name Podar Prep, Primary and Secondary schools under the name Podar International School, Partner Schools under the brand name Podar Learn School, colleges offering International undergraduate and graduate degrees, Part-Time courses and Teacher Training Institutes.<br/><br/>

The Podar network of schools also offers a wide choice of educational streams such as the Central Board of Secondary Education (CBSE), Council for the Indian School Certificate Examinations (CISCE), Secondary School Certificate (SSC), Cambridge (IGCSE) and International Baccalaureate (IB).<br/><br/>

Our scholastic record, innovative learning methods and strong commitment to delivering quality through integrity has helped us scale heights that few have managed in the field of education.<br/><br/>

As a result, Podar today is a trusted name and an acknowledged leader in the collective effort to shape the future of our children and the nation through its wide network of top schools in India.<br/><br/>

We welcome you to join the Podar family and to give your child the best when it comes to an integrated, holistic and empowering learning experience.<br/><br/>
      </p>
     </div>
     <div className='goal'>
      <div className='item1'>
        <img src='/images/img18.jpg'></img>
        <h1>OUR MISSION</h1>
        <p>To develop and equip the children of India for the challenges of the 21st century.</p>
        </div>
        <div className='item2'>
        <img src='/images/img19.jpg'></img>
        <h1>OUR VISION</h1>
        <p>To be the best and be recognised as raising the traditional standards of educational possibilities and outcomes for students, parents and society.</p>
        </div>
        <div className='item3'>
        <img src='/images/img20.jpg'></img>
        <h1>OUR VALUES</h1>
        <p>
          <ol><b>
            <li> Innovative	</li>
            <li> Committed</li>
            <li>Open</li>	
            <li>Long Term</li>
         </b> </ol>
        </p>
        </div>
</div>
<div className='msg' id='cd'>
      <img src='/images/img21.jpg'></img>
      <h1>CHAIRMAN'S MESSAGE</h1>
      <h5> <b>Our mission is to provide the children of India with the necessary skills to face the challenges of the 21st century. </b></h5>
      <p>
      The Podar Education Group legacy is long and enduring. For over nine decades, the Podar family has made education a mission and quality the fulcrum of their commitment. Today, Podar International Schools across the nation cater to the educational needs of over 2,00,000 learners annually. We have been entrusted with their future, their careers and their lives ahead. We need to nurture them as learners, inculcate values and arm them with the necessary skills that will help them make the nation proud.<br/><br/>

The management of Podar International School brings together a great learning community. We strive to build independent, responsible, global citizens through a widely accepted curriculum and practices that are founded on learner-centric education. Therefore, each Podar school will impart world class education through the best use of modern resources, developing young minds to think, question and create.<br/><br/>

Our network of schools aim to fuse the strong cultural fundamentals of Indian society with advanced learning tools acquired from the world over giving education an exciting and dynamic direction.<br/><br/>

As we open our doors to each new generation of students, expectations run high as we believe that each and every one of them will grow into the stars in our skies. Every day, every year we scale new heights, never standing still.<br/><br/>

Sincerely,<br/><br/>
Dr. Pavan Podar
      </p>
     </div>
     <Footer/>
    </div>
    
  );
}

export default Aboutus;