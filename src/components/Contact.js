import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='cnt_section'>
        <div className='cntimg'>
            <h1>ENQUIRY FORM</h1>
            <h5>For more information about the school, we request you to fill up the enquiry form and our team will reach out to you at the earliest.</h5>

        </div>
        <div className='cnt_form'>
       <form>
        <div class="container">
       
    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" id="name" required/>


    <label for="std"><b> Standard</b></label>
    <select id="std" name="std">
    <option value="1st">1st</option>
    <option value="2nd">2nd</option>
    <option value="3rd">3rd</option>
    <option value="4th">4th</option>
    <option value="1st">5th</option>
    <option value="2nd">6th</option>
    <option value="3rd">7th</option>
    <option value="4th">8th</option>
    <option value="4th">9th</option>
    <option value="4th">10th</option>
  </select>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <hr/>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">SEND  ENQUIRY</button>
    </div>
   
       </form>
            
        </div>


    </div>
  )
}

export default Contact