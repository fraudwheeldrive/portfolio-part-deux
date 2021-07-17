import React, { useState } from "react";
import resumeImg from '../../assets/site/resume/0.PNG'

function ContactMe() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  console.log(formState);

  function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
  };

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            defaultValue={name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
        <h4>Resume</h4> 
   <img src={resumeImg} alt= "a screenshot of my linkedIn" ></img>
   <a href="https://www.linkedin.com/in/andrew-c-948745129/"> My LinkedIn</a>
      </form>
      
    </section>
  );
}

export default ContactMe;