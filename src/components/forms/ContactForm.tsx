'use client'
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  massage: string;
}

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !form.name.trim(),
      email: !form.email.trim(),
      phone: !form.phone.trim(),
      subject: !form.subject.trim(),
      message: !form.message.trim(),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        Swal.fire('Success!', 'Your message has been sent.', 'success');
        setForm({ name: '', email: '', subject: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      Swal.fire('Error', 'Something went wrong. Try again.', 'error');
    }
  };
  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-box user-icon mb-30">
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
              <p className="form_error">{errors.name && "Name is required"}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-box email-icon mb-30">
              <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
              <p className="form_error">{errors.email && "Email is required"}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-box phone-icon mb-30">
              <input type="number" name="phone" placeholder="Your Phone" value={form.phone} onChange={handleChange} />
              <p className="form_error">{errors.phone && "Phone is required"}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-box subject-icon mb-30">
              <input type="text" name="subject" placeholder="Your Subject" value={form.subject} onChange={handleChange} />
              <p className="form_error">{errors.subject && "Subject is required"}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box message-icon mb-30">
              <textarea id="message" name="message" cols={30} rows={10} placeholder="Your Message" value={form.message} onChange={handleChange} ></textarea>
              <p className="form_error">{errors.message && "Message is required"}</p>
            </div>
            <div className="contact-btn text-center">
              <button className="btn btn-icon ml-0" type="submit"><span>+</span> get action</button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;