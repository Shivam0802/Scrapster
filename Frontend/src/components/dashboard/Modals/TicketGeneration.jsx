import React from "react";

function TicketGeneration() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);


    let conn = new XMLHttpRequest();
        conn.open("POST", "http://localhost:3000/collectionAgent/registerCollectionAgent", true);
        conn.setRequestHeader("Content-Type", "application/json");
        conn.send(JSON.stringify(formData));
        conn.onreadystatechange = function() {
            console.log(this.status);
          if (this.status === 200) {
            // let data = JSON.parse(this.responseText);
            // console.log(data);
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
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="phone">Phone</label>
        <input type="mobile" id="phone" name="phone" required />
        <br />
        <label htmlFor="image">Images</label>
        <input type="file" name="images" id="images" multiple />
        <br />
        <label htmlFor="message">Comments</label>
        <textarea id="message" name="message" required />
      </form>
    </div>
  );
}

export default TicketGeneration;