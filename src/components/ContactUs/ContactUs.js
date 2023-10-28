import "./ContactUs.css"

import React from 'react'


const ContactUs = () => {

  return (
    <section className="contact-us-section bg-primary-2 flex-column">
      <h2>Contact Us</h2>

      <form className="flex-column contact-us-form" action="">
        <input type="text" name="name" placeholder="Name*" onChange={() => console.log("form input")} />
        <input type="text" name="email" placeholder="Email*" onChange={() => console.log("form input")}/>
        <input type="text" name="company" placeholder="Company*" onChange={() => console.log("form input")}/>
        <input type="text" name="reason" placeholder="Reason for contact*" onChange={() => console.log("form input")}/>
        <input type="text" name="additional" placeholder="Additional info (optional)" onChange={() => console.log("form input")}/>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default ContactUs