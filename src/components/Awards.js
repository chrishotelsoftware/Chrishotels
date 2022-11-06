import React, {useState} from 'react'
import "./Awards.css";
import Awd from "./Awd"

const Awards = () => {
    const [items, setItems] = useState(Awd);
    
    const filterItem = (categItem) => {
        const updatedItems = Awd.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }
  return (
    <>
    <div className='Awards_container'>
        <br/>
    <h1>Awards</h1>
    <br/>
    <div className='text'>
    <button className="btno" onClick={() => filterItem('1')}>The Economic Times Best Education Brands Award 2022</button><br/><br/>
                    <button className="btno" onClick={() => filterItem('2')}>e4m Pride of India - The Best of Bharat’ Award 2022</button><br/><br/>
                    <button className="btno" onClick={() => filterItem('3')}>India's Most Respected Early Childhood Education Brand - The Education World - 21-22</button><br/><br/>
                    <button className="btno" onClick={() => filterItem('4')}>The Most Respected Education Brand in India - The Education World - 21-22</button><br/><br/>
                    <button className="btno" onClick={() => filterItem('5')}>Leading School Chain (National) 2022 - ArdorComm Media Group - 2022</button><br/><br/>
                    <button className="btno" onClick={() => filterItem('6')}>Most Distinguished International School Network of the Year - Education Excellence Awards - 2020-21</button><br/>

    </div>
    <div className='images'>

    </div>
    </div>
     {
        items.map((elem) => {
            const { name, image } = elem;

        return (
                    <div className="display">
                        <img src={image} alt={name} className="img"/>
                    </div>
        )
        })
     }
              </>
    )
    
}

export default Awards