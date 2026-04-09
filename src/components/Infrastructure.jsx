import './Infrastructure.css';

const images = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=75',
  'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=75',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=75',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=75',
  'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=75',
  'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=400&q=75',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&q=75',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=75',
];

export default function Infrastructure() {
  return (
    <section className="infrastructure">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>Our Strength</p>
        <h2 className="section-title">Infrastructure and Team</h2>
        <p className="section-subtitle">State-of-the-art facilities and skilled craftsmen</p>

        <div className="infra-grid">
          {images.map((src, i) => (
            <div className="infra-item" key={i}>
              <img src={src} alt={`Team ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
