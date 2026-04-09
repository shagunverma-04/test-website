import { useState } from 'react';
import './OurProjects.css';

const categories = ['Complete Gallery', 'TV Wall', 'Living Room', 'Dining Room', 'Pooja Mandir', 'Bed Room', 'Study Room'];

const projects = [
  { category: 'Living Room', title: 'Sobha Galleria', subtitle: '3 BHK, Living Room', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=75' },
  { category: 'Bed Room', title: 'Sobha Galleria', subtitle: '3 BHK, Bed Room', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&q=75' },
  { category: 'Dining Room', title: 'Sobha Galleria', subtitle: '3 BHK, Dining Room', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=75' },
  { category: 'TV Wall', title: 'Sobha Galleria', subtitle: '3 BHK, TV Wall', img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=75' },
  { category: 'Pooja Mandir', title: 'Sobha Galleria', subtitle: '3 BHK, Pooja Mandir', img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&q=75' },
  { category: 'Study Room', title: 'Sobha Galleria', subtitle: '3 BHK, Study Room', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=75' },
];

export default function OurProjects() {
  const [active, setActive] = useState('Complete Gallery');

  const filtered = active === 'Complete Gallery'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section className="our-projects" id="projects">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>Portfolio</p>
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">Beautifully crafted spaces across Bengaluru</p>

        <div className="project-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-img">
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div className="project-info">
                <h4>{p.title}</h4>
                <span>{p.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
