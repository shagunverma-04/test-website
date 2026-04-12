import './WorkProcess.css';

const steps = [
  { num: 1, title: 'Meet Us', desc: 'Share your vision and requirements with our design team.' },
  { num: 2, title: 'Scope of Work', desc: 'We define the project scope, timeline, and budget together.' },
  { num: 3, title: 'Design', desc: '3D designs and material selections tailored just for you.' },
  { num: 4, title: 'Execution', desc: 'Our skilled craftsmen bring the design to life flawlessly.' },
  { num: 5, title: 'Happy Handover', desc: 'Move into your dream home, backed by a 10-year warranty.' },
];

export default function WorkProcess() {
  return (
    <section className="work-process">
      <div className="work-process-inner">

        {/* Left — room image */}
        <div className="wp-image-col">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
            alt="Beautiful interior space"
          />
        </div>

        {/* Right — steps */}
        <div className="wp-content-col">
          <p className="section-label">How It Works</p>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Our Work Process</h2>
          <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            Five steps is all it takes to elevate your style of living.
          </p>

          <div className="steps-row">
            {steps.map((s, i) => (
              <div className="step-item" key={s.num}>
                <div className="step-num">{s.num}</div>
                {i < steps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>

          <div className="steps-labels">
            {steps.map((s) => (
              <div className="step-label" key={s.num}>
                <span>{s.title}</span>
              </div>
            ))}
          </div>

          <div className="congratulations-box">
            <div className="congrats-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
            </div>
            <div>
              <h3>Congratulations</h3>
              <p>You have done the right choice</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
