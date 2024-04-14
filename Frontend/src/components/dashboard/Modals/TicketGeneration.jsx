import React from "react";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";

function TicketGeneration() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
    images: []
  });

  const [selected_products, set_selected_products] =  
        useState([]); 
    const products =  
        ['TV','AC','Fridge']; 
    const toggleLang = (option) => { 
        if (selected_products.includes(option)) { 
            set_selected_products( 
                selected_products.filter((item) =>  
                    item !== option)); 
        } else { 
            set_selected_products( 
                [...selected_products, option]); 
        } 
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
            // toast.remove()
            // toast.success("Registered Successfully");
          }
          else{
            // toast.error("Error");
          }
        };

  };

  return (
    <div>
      <h1>Ticket Generation</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} required />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} required />
        <br />
        <label htmlFor="phone">Phone</label>
        <input type="mobile" id="phone" name="phone" onChange={handleChange} value={formData.phone} required />
        <br />
        <label htmlFor="image">Images</label>
        <input type="file" name="images" onChange={handleChange} id="images" multiple />
        <br />
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
        <br />
        <label htmlFor="message">Comments</label>
        <textarea id="comments" name="comments" onChange={handleChange} value={formData.comments} required />
        <br />
        <button>Cancel</button>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default TicketGeneration;