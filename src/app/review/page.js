'use client';

import Link from 'next/link';

export default function ReviewPage() {
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
        <h1>Resume Review</h1>

        <h2>Context</h2>
        <p>
          Patrick has not had to use his resume seriously since 2008. He has been applying nonstop for a
          few years, is not getting many interviews, and suspects ATS/ranking systems are not reading or
          prioritizing the resume well.
        </p>

        <h2>What Is Working</h2>
        <ul>
          <li>Real operational scale: grew Sports Source 2 revenue from under $1M to $4M annually.</li>
          <li>Long tenure and progression at PAINWeek: Program Manager → Senior Program Director → Director, Multimedia Production.</li>
          <li>Strong hybrid profile: marketing, event operations, digital production, CRM/customer support, analytics, and ecommerce.</li>
          <li>Concrete event scale: 50+ events/year, 150–2,500 attendees/exhibitors, 120-page program guide, 250+ edited interviews/animations.</li>
          <li>Tool stack is useful: Adobe Creative Suite, Cvent, HubSpot, HelpScout, Asana, video editing tools.</li>
        </ul>

        <h2>Main Issues Hurting Visibility</h2>
        <ol>
          <li><strong>Headline is too broad.</strong> &ldquo;Marketing/Communications/Event Management&rdquo; does not tell an ATS or recruiter what job family to place him in. He needs targeted versions by role: Marketing Operations Manager, Event Marketing Manager, Digital Content Producer, Ecommerce/Marketplace Operations Manager.</li>
          <li><strong>Summary undersells the strongest proof.</strong> The current summary says &ldquo;strong&rdquo; and &ldquo;strategic&rdquo; but does not lead with revenue growth, conference scale, or digital campaign ownership.</li>
          <li><strong>Too many bullets are responsibility-only.</strong> More bullets need metrics, scope, frequency, stakeholders, budget/vendor/team size, and tools.</li>
          <li><strong>Formatting likely creates parsing problems.</strong> Multiple roles under one employer, tabbed spacing, section labels embedded as bullets.</li>
          <li><strong>Sports Source 2 is underdeveloped.</strong> Needs more context: team size, inventory systems, ecommerce channels, campaign cadence, customer growth.</li>
          <li><strong>Skills section is incomplete for current roles.</strong> Missing keyword clusters: campaign operations, event logistics, CRM, marketing automation, ecommerce operations, marketplace management.</li>
          <li><strong>The resume lacks targeting.</strong> One all-purpose resume will perform poorly against modern ATS ranking.</li>
        </ol>

        <h2>Recommended Strategy</h2>
        <p>Build one clean ATS master resume, then maintain four role-specific versions:</p>
        <ul>
          <li><Link href="/cv/marketing-event">Marketing Operations / Marketing Specialist</Link></li>
          <li><Link href="/cv/marketing-event">Event Marketing / Program Manager</Link></li>
          <li><Link href="/cv/digital-content">Digital Content / Multimedia Production</Link></li>
          <li><Link href="/cv/ecommerce">Ecommerce / Marketplace Operations Manager</Link></li>
        </ul>

        <h2>Changes Made in the Updated Resume</h2>
        <ul>
          <li>Repositioned Patrick as a marketing, event operations, and ecommerce leader.</li>
          <li>Pulled the $1M → $4M revenue growth into the top summary.</li>
          <li>Converted responsibility lists into achievement bullets.</li>
          <li>Flattened formatting for ATS readability.</li>
          <li>Consolidated skills into keyword-rich groups.</li>
          <li>Made the PAINWeek career progression readable without burying the promotions.</li>
        </ul>
      </div>
    </>
  );
}
