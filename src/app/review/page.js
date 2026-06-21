'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ReviewPage() {
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
        <Link href="/review">Resume Review</Link>
        <Link href="/questions">Questions</Link>
        <Link href="/cover-note">Cover Note</Link>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </nav>
      <div className="page-content">
        <h1>Resume Review</h1>
        <div style={{ marginBottom: '1.25rem' }}>
          <a href="/downloads/patrick-resume-review.txt" className="variant-link" download style={{ fontSize: '0.9rem' }}>
            Download Review Notes (TXT)
          </a>
        </div>

        <h2>Context</h2>
        <p>
          Patrick has not had to use his resume seriously since 2008. He has been applying nonstop for a
          few years, is not getting many interviews, and suspects ATS/ranking systems are not reading or
          prioritizing the resume well.
        </p>

        <h2>What Is Working</h2>
        <ul>
          <li>Real operational scale: grew Sports Source 2 revenue from under $1M to $4M annually.</li>
          <li>Long tenure and progression at PAINWeek: Program Manager &rarr; Senior Program Director &rarr; Director, Multimedia Production.</li>
          <li>Strong hybrid profile: marketing, event operations, digital production, CRM/customer support, analytics, and ecommerce.</li>
          <li>Concrete event scale: 50+ events/year, 150&ndash;2,500 attendees/exhibitors, 120-page program guide, 250+ edited interviews/animations.</li>
          <li>Tool stack is useful: Adobe Creative Suite, Cvent, HubSpot, HelpScout, Asana, video editing tools.</li>
        </ul>

        <h2>Main Issues Hurting Visibility</h2>
        <ol>
          <li><strong>Headline is too broad.</strong> &ldquo;Marketing/Communications/Event Management&rdquo; does not tell an ATS or recruiter what job family to place him in. He needs targeted versions by role: Marketing Operations Manager, Event Marketing Manager, Digital Content Producer, Ecommerce/Marketplace Operations Manager.</li>
          <li><strong>Summary undersells the strongest proof.</strong> The current summary says &ldquo;strong&rdquo; and &ldquo;strategic&rdquo; but does not lead with revenue growth, conference scale, or digital campaign ownership.</li>
          <li><strong>Too many bullets are responsibility-only.</strong> ATS may parse the words, but recruiters respond to outcomes. More bullets need metrics, scope, frequency, stakeholders, budget/vendor/team size, and tools.</li>
          <li><strong>Formatting likely creates parsing problems.</strong> Multiple roles under one employer, tabbed spacing, section labels embedded as bullets, and decorative formatting can confuse ATS imports.</li>
          <li><strong>Sports Source 2 is underdeveloped.</strong> This is the most current role and contains the best metric, but it needs more context: team size, inventory systems, ecommerce channels, campaign cadence, customer growth, margin/profit if available.</li>
          <li><strong>Skills section is incomplete for current roles.</strong> It lists software, but not keyword clusters recruiters search for: campaign operations, event logistics, CRM, marketing automation, ecommerce operations, marketplace management, vendor management, content production, registration systems, attendee communications.</li>
          <li><strong>The resume lacks targeting.</strong> One all-purpose resume will perform poorly against modern ATS ranking. He needs a base resume plus tailored variants.</li>
        </ol>

        <h2>Recommended Strategy</h2>
        <p>Build one clean ATS master resume, then maintain three role-specific versions:</p>
        <ul>
          <li>Marketing &amp; Event Operations</li>
          <li>Ecommerce &amp; Marketplace Operations</li>
          <li>Digital Content &amp; Production</li>
        </ul>
        <p>
          For every job application, mirror the job description&apos;s terms where truthful. <Link href="/cv">View all CV variants &rarr;</Link>
        </p>

        <h2>Changes Made in the Updated Resume</h2>
        <ul>
          <li>Repositioned Patrick as a marketing, event operations, and ecommerce leader.</li>
          <li>Pulled the $1M &rarr; $4M revenue growth into the top summary.</li>
          <li>Converted responsibility lists into achievement bullets.</li>
          <li>Flattened formatting for ATS readability.</li>
          <li>Consolidated skills into keyword-rich groups.</li>
          <li>Made the PAINWeek career progression readable without burying the promotions.</li>
        </ul>
      </div>
    </>
  );
}
