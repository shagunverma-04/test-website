import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Suresh R',
    role: 'Homeowner, Sobha Galleria',
    text: 'The team did a fantastic job. They were professional, friendly, and their work was top quality. I highly recommend them for anyone looking for great interior design.',
    rating: 5,
  },
  {
    name: 'Priya M',
    role: 'Homeowner, Brigade Utopia',
    text: 'Absolutely loved working with NivasaCraft! They understood our vision perfectly and delivered a home that exceeded our expectations. Every detail was thoughtfully crafted.',
    rating: 5,
  },
  {
    name: 'Rajesh K',
    role: 'Homeowner, Purva Atmosphere',
    text: 'Outstanding service from start to finish. The 3D design previews helped us visualize everything before execution. The final result was stunning and on time.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>Reviews</p>
        <h2 className="section-title">Voices of Happy Homeowners</h2>
        <p className="section-subtitle">Their trust, our inspiration</p>

        <div className="testimonial-card">
          <div className="testimonial-image">
            <img
              src={`https://i.pravatar.cc/200?img=${active + 10}`}
              alt={t.name}
            />
          </div>
          <div className="testimonial-content">
            <div className="stars">
              {'★'.repeat(t.rating)}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
          </div>
        </div>

        <div className="testimonial-nav">
          <button className="nav-btn" onClick={prev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="nav-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <button className="nav-btn" onClick={next} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
