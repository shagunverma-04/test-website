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
          <div className="contact-left">
            <p className="section-label">Get in Touch</p>
            <h2>We would love to<br />speak with you</h2>
            <p className="contact-tagline">Let's start your dream home journey together.</p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>Address</strong>
                  <p>Marathahalli Rd, near Sulikunte Cross bus stop,<br />Sulikunte, Bengaluru, Karnataka 560099</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <p>abc@nivasacraft.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.78h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <strong>Mobile Number</strong>
                  <p>+91 988 661 2007</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            {sent ? (
              <div className="success-msg">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
                <h3>Thank you!</h3>
                <p>We'll reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name..."
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Contact Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address..."
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="time"
                    placeholder="Convenient Time"
                    value={form.time}
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                />
                <button type="submit" className="btn-gold">Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
