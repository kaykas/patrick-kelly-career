'use client';

import Link from 'next/link';

export default function CVIndex() {
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
      </nav>
      <div className="page-content">
        <h1>Targeted CV Variants</h1>
        <p>Three role-specific resumes based on the master resume, each framed for a different job family.</p>
        <ul>
          <li><Link href="/cv/marketing-event">Marketing &amp; Event Operations</Link> — Marketing Ops, Event Marketing, Program Manager roles</li>
          <li><Link href="/cv/ecommerce">Ecommerce &amp; Marketplace Operations</Link> — Ecommerce Ops, Marketplace Ops, GM (retail)</li>
          <li><Link href="/cv/digital-content">Digital Content &amp; Production</Link> — Digital Content, Multimedia Production, Creative Ops</li>
        </ul>
        <p style={{ marginTop: '1rem', color: '#666' }}>
          Each variant is a complete standalone resume. When applying to a specific job, mirror the
          job description&apos;s exact terminology where it truthfully matches Patrick&apos;s experience.
        </p>
      </div>
    </>
  );
}
