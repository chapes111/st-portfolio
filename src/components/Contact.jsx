import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from './Navbar'
import mailIcon from '../images/mail-icon.svg'
import contactArrow from '../images/contact-arrow.svg'
import blob from '../images/contact-blob.svg'

export default function Contact() {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const form = useRef()

  const sendEmail = (e) => {
    console.log('sendEmail() triggered')
    e.preventDefault()

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text)
          document.getElementById('contact-form').submit()
      }, (error) => {
          console.log(error.text)
      })
  }

  const handleChange = (e) => {
      setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
      try {
          const { name, email, message } = formData

          console.log(`name: ${name}, email: ${email}, message: ${message}`)

          e.preventDefault();

          if (!name || !email || !message) return

          alert(`name: ${name}, email: ${email}, message: ${message}`)
      } catch (error) {
          console.log(error)
          throw new Error("Form submission failed")
      }
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
            <input onChange={handleChange} name='name' type="text" className="contact-form--input" />
            <label htmlFor="email" className="contact-form--label">Email</label>
            <input onChange={handleChange} name='email' type="email" className="contact-form--input" />
            <label htmlFor="message" className="contact-form--label">Message</label>
            <textarea className='contact-form--textarea' name='message' onChange={handleChange} type="text" />
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
