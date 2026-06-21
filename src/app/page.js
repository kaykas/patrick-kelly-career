import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="page-content">
      <h1>Patrick Kelly</h1>
      <p style={{ color: '#555', marginBottom: '1.5rem' }}>
        Career portfolio, resume materials, application questions, and cover-note tool.
      </p>
      <div className="card-grid">
        <Link className="card" href="/profile">
          <span className="badge">Start here</span>
          <h2>Profile</h2>
          <p>Positioning, summary, strengths, and navigation.</p>
        </Link>
        <Link className="card" href="/resume">
          <h2>Master Resume</h2>
          <p>ATS-friendly first-pass revised resume.</p>
        </Link>
        <Link className="card" href="/cv">
          <h2>CV Variants</h2>
          <p>Targeted versions for marketing/event, ecommerce, and digital content roles.</p>
        </Link>
        <Link className="card" href="/review">
          <h2>Resume Review</h2>
          <p>Constructive feedback and visibility strategy.</p>
        </Link>
        <Link className="card" href="/questions">
          <h2>Questions</h2>
          <p>HR-grade questions to tighten the next draft.</p>
        </Link>
        <Link className="card" href="/cover-note">
          <h2>Cover Note Generator</h2>
          <p>Generate specific, plainspoken cover notes for applications.</p>
        </Link>
      </div>
    </div>
  );
}
