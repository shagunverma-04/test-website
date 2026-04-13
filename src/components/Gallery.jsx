import './Gallery.css';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    label: 'Living Room',
  },
  {
    url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80',
    label: 'Bedroom',
  },
  {
    url: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80',
    label: 'Dining Room',
  },
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
    label: 'Study Room',
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title">Crafting Spaces, Creating Experiences</h2>
        <p className="section-subtitle">Spaces that live, breathe, and inspire</p>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img.url} alt={img.label} loading="lazy" />
              <div className="gallery-overlay">
                <span>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
