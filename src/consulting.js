import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    const handleSubmit = event => {
      event.preventDefault();
      alert('You have submitted the form.')
    }
    return (
      <div className="container">
        <h2>GOT QUESTIONS?</h2>
        <p>
          The easiest thing to do is get in contact with us
        </p>
      <div className="wrapper">
      <h1>Tell us about yourself</h1>
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>First Name</p>
           <input name="firstname" />
         </label>
         <label>
           <p>Last Name</p>
           <input name="lastname" />
         </label>
         <label>
           <p>Email Address</p>
           <input name="email" />
         </label>
         <label>
           <p>Occupation</p>
           <input name="occupation" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
      </div>
      </div>
    );
  }
}
 
export default Contact;