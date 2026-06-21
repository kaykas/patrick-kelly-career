'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CoverNotePage() {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [variant, setVariant] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [relevantBullets, setRelevantBullets] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/');
  };

  const handleLoadBullets = (v) => {
    setVariant(v);
    const bullets = {
      'marketing-event': `- Managed digital and live event operations for 50+ events per year at PAINWeek, ranging from 150 to 2,500 attendees
- Ran daily, weekly, and monthly email campaigns; served as attendee POC from recruitment through post-conference follow-up
- Coordinated contract resources and vendors for national and regional conferences
- Designed 120-page program guide, interactive PDFs, and full suite of event marketing materials`,
      'ecommerce': `- Helped grow annual revenue from under $1M to approximately $4M at Sports Source 2
- Manage 2M+ item inventory across physical retail, eBay, and Whatnot marketplace channels
- Expanded ecommerce revenue by increasing eBay store visibility and marketplace selling
- Coordinate email marketing and social media advertising for customer acquisition`,
      'digital-content': `- Edited 250+ faculty interviews and animations at PAINWeek using Avid, Final Cut Pro X, Premiere Pro, and Adobe Animate
- Produced 120-page annual program guide, interactive PDFs, and full suite of event materials in Adobe Creative Suite
- Managed structure and content updates for a rapidly expanding healthcare conference website
- Produced keynote video content and social media campaign assets`,
    };
    setRelevantBullets(bullets[v] || '');
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
          jobDescription: jobDescription.trim() || undefined,
          relevantBullets: relevantBullets.trim() || undefined,
          additionalNotes: additionalNotes.trim() || undefined,
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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(coverNote);
    } catch {
      // fallback
    }
  };

  return (
    <>
      <nav>
        <Link href="/profile">Profile</Link>
        <Link href="/resume">Master Resume</Link>
        <Link href="/cv/marketing-event">Marketing/Event CV</Link>
        <Link href="/cv/ecommerce">Ecommerce CV</Link>
        <Link href="/cv/digital-content">Digital Content CV</Link>
        <Link href="/review">Review</Link>
        <Link href="/questions">Questions</Link>
        <Link href="/cover-note">Cover Note</Link>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </nav>
      <div className="page-content">
        <h1>Cover Note Generator</h1>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          Paste a job posting and get a specific, plainspoken cover note grounded in Patrick&apos;s real
          experience. Generated server-side via OpenAI gpt-5.5 — no API keys exposed to the browser.
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
                style={{ width: '100%', padding: '0.6rem', fontSize: '0.95rem', border: '2px solid #ccc', borderRadius: '6px' }}
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
                style={{ width: '100%', padding: '0.6rem', fontSize: '0.95rem', border: '2px solid #ccc', borderRadius: '6px' }}
              />
            </div>
          </div>

          <div style={{ marginTop: '0.5rem' }}>
            <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>CV Variant (load relevant bullets)</label>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
              {[
                { id: 'marketing-event', label: 'Marketing & Event Ops' },
                { id: 'ecommerce', label: 'Ecommerce & Marketplace' },
                { id: 'digital-content', label: 'Digital Content & Production' },
              ].map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => handleLoadBullets(v.id)}
                  style={{
                    padding: '0.35rem 0.75rem', fontSize: '0.8rem', fontWeight: 600,
                    border: `2px solid ${variant === v.id ? '#2b5f8a' : '#ccc'}`,
                    borderRadius: '6px',
                    background: variant === v.id ? '#2b5f8a' : 'white',
                    color: variant === v.id ? 'white' : '#333',
                    cursor: 'pointer',
                  }}
                >
                  {v.label}
                </button>
              ))}
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
            Most relevant bullets from Patrick&apos;s background
          </label>
          <textarea
            value={relevantBullets}
            onChange={(e) => setRelevantBullets(e.target.value)}
            placeholder="Select a CV variant above or paste your own bullets here..."
            style={{ minHeight: '100px' }}
          />

          <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>
            Additional Notes (optional — anything Patrick wants to emphasize)
          </label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            placeholder="e.g. I know someone who works there, I used their product, open to remote, etc."
            style={{ minHeight: '60px' }}
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Generating...' : 'Generate Cover Note'}
          </button>
        </form>

        {error && <p className="cover-error">{error}</p>}

        {coverNote && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
              <strong>Generated Cover Note</strong>
              <button
                onClick={copyToClipboard}
                style={{
                  padding: '0.35rem 0.75rem', fontSize: '0.8rem',
                  background: 'none', border: '1px solid #aaa', borderRadius: '4px', cursor: 'pointer',
                }}
              >
                Copy
              </button>
            </div>
            <div className="cover-output">
              {coverNote}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
