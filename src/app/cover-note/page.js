'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CoverNotePage() {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/');
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError('');
    setCoverNote('');

    if (!jobTitle.trim() || !companyName.trim()) {
      setError('Job title and company name are required.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/cover-note', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobTitle: jobTitle.trim(),
          companyName: companyName.trim(),
          jobDescription: jobDescription.trim(),
          additionalNotes: additionalNotes.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to generate cover note.');
      } else {
        setCoverNote(data.coverNote);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav>
        <Link href="/profile">Profile</Link>
        <Link href="/resume">Updated Resume</Link>
        <Link href="/review">Review</Link>
        <Link href="/questions">HR Questions</Link>
        <Link href="/cover-note">Cover Note Generator</Link>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </nav>
      <div className="page-content">
        <h1>Cover Note Generator</h1>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          Paste a job posting below and get a specific, plainspoken cover note grounded in
          Patrick&apos;s real experience. Generated server-side via OpenAI — no API keys exposed to the browser.
        </p>

        <form className="cover-form" onSubmit={handleGenerate}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                Job Title *
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g. Marketing Operations Manager"
                style={{
                  width: '100%', padding: '0.6rem', fontSize: '0.95rem',
                  border: '2px solid #ccc', borderRadius: '6px',
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                Company Name *
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Acme Corporation"
                style={{
                  width: '100%', padding: '0.6rem', fontSize: '0.95rem',
                  border: '2px solid #ccc', borderRadius: '6px',
                }}
              />
            </div>
          </div>

          <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>
            Job Description (optional — paste full posting for best results)
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the full job description here..."
          />

          <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>
            Additional Notes (optional — anything Patrick wants to mention)
          </label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            placeholder="e.g. I know someone who works there, I used their product, etc."
            style={{ minHeight: '80px' }}
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Generating...' : 'Generate Cover Note'}
          </button>
        </form>

        {error && <p className="cover-error">{error}</p>}

        {coverNote && (
          <div className="cover-output">
            {coverNote}
          </div>
        )}
      </div>
    </>
  );
}
