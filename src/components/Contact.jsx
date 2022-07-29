import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from './Navbar'
import mailIcon from '../images/mail-icon.svg'
import contactArrow from '../images/contact-arrow.svg'
import blob from '../images/contact-blob.svg'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    console.log('sendEmail() triggered')
    e.preventDefault()

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text)
          document.getElementById('contact-form').reset()
          return false
      }, (error) => {
          console.log(error.text)
          return false
      })
  }

  return (
    <div className="contact-container">
      <Navbar />
      <h1 className="contact-headline">Let's get in touch</h1>
      <div className="contact-form--container">
        <h3 className="form--header">Info</h3>
        <form id='contact-form' ref={form} onSubmit={sendEmail} className="contact-form">
          <fieldset>
            <label htmlFor="name" className="contact-form--label">Name</label>
            <input name='name' type="text" className="contact-form--input" />
            <label htmlFor="email" className="contact-form--label">Email</label>
            <input name='email' type="email" className="contact-form--input" />
            <label htmlFor="message" className="contact-form--label">Message</label>
            <textarea className='contact-form--textarea' name='message' type="text" />
          </fieldset>
        </form>
      </div>
      <div className="contact-aside">
        <img src={mailIcon} aria-hidden={true} className="mail-icon" />
        <img src={blob} aria-hidden={true} className="blob" />
      </div>
      <button onClick={sendEmail} className="submit-button">Send</button>
      <img src={contactArrow} aria-hidden={true} className="contact-arrow" />
      <img src={blob} aria-hidden={true} className="blob" />
    </div>
  )
}
