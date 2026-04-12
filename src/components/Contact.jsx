import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', time: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', time: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">

          {/* Left */}
          <div className="contact-left">
            <p className="section-label">Get in Touch</p>
            <h2>We would love to<br />speak with you</h2>
            <p className="contact-tagline">Let's start your dream home journey together.</p>
          </div>

          {/* Right — form */}
          <div className="contact-right">
            {sent ? (
              <div className="success-msg">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
                <h3>Thank you!</h3>
                <p>We'll reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <input type="text"  name="name"  placeholder="Your Name..."     value={form.name}    onChange={handleChange} required />
                  <input type="tel"   name="phone" placeholder="Contact Number"   value={form.phone}   onChange={handleChange} required />
                </div>
                <div className="form-row">
                  <input type="email" name="email" placeholder="Email Address..."  value={form.email}   onChange={handleChange} required />
                  <input type="text"  name="time"  placeholder="Convenient Time"  value={form.time}    onChange={handleChange} />
                </div>
                <textarea name="message" placeholder="Message..." rows={4} value={form.message} onChange={handleChange} />
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
