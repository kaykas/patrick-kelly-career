'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CVIndexPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/');
  };

  return (
    <>
      <nav>
        <Link href="/profile">Profile</Link>
        <Link href="/resume">Master Resume</Link>
        <Link href="/cv">CV Variants</Link>
        <Link href="/cv/marketing-event">Marketing/Event CV</Link>
        <Link href="/cv/ecommerce">Ecommerce CV</Link>
        <Link href="/cv/digital-content">Digital Content CV</Link>
        <Link href="/review">Review</Link>
        <Link href="/questions">Questions</Link>
        <Link href="/cover-note">Cover Note</Link>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </nav>
      <div className="page-content">
        <h1>CV Variants & Downloads</h1>
        <p style={{ color: '#555', marginBottom: '1.5rem' }}>
          Three targeted ATS-optimized CV variants based on Patrick's updated master resume.
          Each variant emphasizes different strengths for a specific job family.
          Ready to download as plain text files &mdash; copy, paste into job applications, and
          customize with the job description's terminology.
        </p>

        <div className="cv-variants-grid">

          <div className="cv-variant-card">
            <span className="badge">Variant 1 of 3</span>
            <h2>Marketing &amp; Event Operations</h2>
            <p className="target-roles">Marketing Operations Manager, Event Marketing Manager, Event Program Manager, Marketing Specialist</p>
            <p className="variant-desc">
              Emphasizes campaign management, event logistics, email marketing, sponsor/client support,
              and cross-channel marketing operations from PAINWeek and Sports Source 2.
            </p>
            <div className="variant-links">
              <Link href="/cv/marketing-event" className="variant-link">View on-site</Link>
              <a href="/downloads/patrick-cv-marketing-event.txt" className="variant-link" download>Download TXT</a>
            </div>
          </div>

          <div className="cv-variant-card">
            <span className="badge">Variant 2 of 3</span>
            <h2>Ecommerce &amp; Marketplace Operations</h2>
            <p className="target-roles">Ecommerce Operations Manager, Marketplace Operations Manager, Retail Operations Manager, General Manager</p>
            <p className="variant-desc">
              Leads with Sports Source 2 revenue growth ($1M to $4M), inventory management at scale,
              eBay/Whatnot marketplace operations, and cross-channel operations alignment.
            </p>
            <div className="variant-links">
              <Link href="/cv/ecommerce" className="variant-link">View on-site</Link>
              <a href="/downloads/patrick-cv-ecommerce.txt" className="variant-link" download>Download TXT</a>
            </div>
          </div>

          <div className="cv-variant-card">
            <span className="badge">Variant 3 of 3</span>
            <h2>Digital Content &amp; Production</h2>
            <p className="target-roles">Digital Content Manager, Multimedia Production Manager, Content Operations Manager, Marketing Content Producer</p>
            <p className="variant-desc">
              Highlights 250+ edited faculty interviews and animations, 120-page program guide
              production, full Adobe Creative Suite proficiency, and video/graphic content creation.
            </p>
            <div className="variant-links">
              <Link href="/cv/digital-content" className="variant-link">View on-site</Link>
              <a href="/downloads/patrick-cv-digital-content.txt" className="variant-link" download>Download TXT</a>
            </div>
          </div>

        </div>

        <div className="cv-downloads-section">
          <h2>Base Document Downloads</h2>
          <ul className="dl-list">
            <li>
              <a href="/downloads/patrick-updated-resume.txt" download>Updated Master Resume (TXT)</a>
              <span className="dl-size">6 KB</span>
            </li>
            <li>
              <a href="/downloads/patrick-resume-review.txt" download>Resume Review Notes (TXT)</a>
              <span className="dl-size">3 KB</span>
            </li>
          </ul>
          <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            All files are plain text for ATS compatibility. Copy, paste into job applications, and
            customize with the job description's terms where they match Patrick's experience.
          </p>
        </div>
      </div>
    </>
  );
}
