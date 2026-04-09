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
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>How It Works</p>
        <h2 className="section-title">Our Work Process</h2>
        <p className="section-subtitle">Five steps is all it takes to elevate your style of living.</p>

        <div className="steps-row">
          {steps.map((s, i) => (
            <div className="step-item" key={s.num}>
              <div className="step-num">{s.num}</div>
              {i < steps.length - 1 && <div className="step-line" />}
              <div className="step-body">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="congratulations-box">
          <div className="congrats-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
          </div>
          <div>
            <h3>Congratulations</h3>
            <p>You have made the right choice</p>
          </div>
        </div>
      </div>
    </section>
  );
}
