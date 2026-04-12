import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            {/* Left column — brand + contact info */}
            <div className="footer-left">
              <div className="footer-logo">
                <span className="fl-line1">NIVAS</span>
                <span className="fl-line2">CRAFT</span>
              </div>

              <div className="footer-info-blocks">
                <div className="footer-info-item">
                  <h5>Address</h5>
                  <p>Marathahalli Rd, near Sulikunte Cross bus stop,<br />Sulikunte, Bengaluru, Karnataka 560099</p>
                </div>
                <div className="footer-info-item">
                  <h5>Email</h5>
                  <p>abc@nivasacraft.com</p>
                </div>
                <div className="footer-info-item">
                  <h5>Mobile Number</h5>
                  <p>+91 988 661 2007</p>
                </div>
              </div>
            </div>

            {/* Right column — Google Map */}
            <div className="footer-map">
              <iframe
                title="NivasaCraft Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5853131!2d77.7024!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c93d2e94fef%3A0x8e1d1c8d5b9c6c32!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>2025® nivasacraft. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="Twitter / X" className="social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 5.91zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
