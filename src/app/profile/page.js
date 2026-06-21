'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProfilePage() {
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
        <h1>Patrick Kelly</h1>
        <p style={{ color: '#555', marginBottom: '1.5rem' }}>
          Los Angeles, CA &middot; (315) 254-9362 &middot; pskell02@yahoo.com
        </p>
        <h2>Headline</h2>
        <p>Marketing Operations &middot; Event Program Management &middot; Ecommerce Growth</p>

        <h2>Summary</h2>
        <p>
          Marketing, events, and operations leader with 14+ years of experience building digital campaigns,
          managing large-scale conferences, producing multimedia content, supporting sponsors and clients,
          and running high-volume retail/ecommerce operations. Proven record of growing Sports Source 2 from
          under $1M to $4M in annual revenue and progressing through three roles at PAINWeek, the nation&apos;s
          largest conference on pain. Strong mix of campaign execution, event logistics, CRM/customer support,
          content production, vendor coordination, and hands-on operational management.
        </p>

        <h2>Core Strengths</h2>
        <ul>
          <li>Marketing operations and campaign execution</li>
          <li>Event planning, conference logistics, and attendee communications</li>
          <li>Ecommerce and marketplace operations: eBay, Whatnot, retail inventory</li>
          <li>Digital content production: video, animation, interactive PDFs, program guides</li>
          <li>CRM, registration, and customer support workflows: HubSpot, HelpScout, Cvent</li>
          <li>Sponsor/client support, vendor coordination, and cross-functional project management</li>
          <li>Adobe Creative Suite, Final Cut Pro X, Avid Media Composer, Affinity Designer</li>
          <li>Inventory management, product procurement, and customer growth</li>
        </ul>

        <h2>Quick Navigation</h2>
        <ul>
          <li><Link href="/resume">View Master Resume</Link></li>
          <li><Link href="/cv">CV Variants &amp; Downloads</Link> &mdash; three targeted variants with downloadable TXT files</li>
          <li><Link href="/review">Resume Review &amp; Strategy</Link></li>
          <li><Link href="/questions">HR Interview Questions for Patrick</Link></li>
          <li><Link href="/cover-note">Cover Note Generator</Link></li>
        </ul>
      </div>
    </>
  );
}
