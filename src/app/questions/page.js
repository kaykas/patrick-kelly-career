'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function QuestionsPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/');
  };

  const p1 = [
    {
      q: 'Role targeting — which job family first?',
      hint: 'Pick one or two for the initial push: Marketing Operations Manager, Event Marketing/Program Manager, Digital Content/Production Manager, Ecommerce/Marketplace Operations Manager, or General Manager (retail/ops). The CV variants cover all four, but real applications need a specific one-page focus.',
    },
    {
      q: 'Sports Source 2 — revenue numbers',
      hint: 'The resume says "under $1M to $4M." Is that annual or cumulative? Is $4M current or a peak? Safe to publish that exact figure? How directly did your work drive that growth — were you one of two or three people, or a contributor in a larger operation?',
    },
    {
      q: 'Sports Source 2 — actual store name and correct capitalization',
      hint: 'The original resume says "sports source 2" (lowercase). What is the legal or public-facing business name? This matters for ATS and recruiter verification.',
    },
    {
      q: 'PAINWeek email marketing — did you own list performance?',
      hint: 'Did you run the email platform yourself (build, send, monitor)? Approximate list size, typical open rate, click rate, or campaign-level metrics (registrations driven, sponsor leads generated, list growth) would significantly strengthen the marketing operations variant.',
    },
    {
      q: 'Team/contractor management — headcount and scope',
      hint: 'Did you directly supervise anyone at PAINWeek or Sports Source 2? If yes: how many direct reports, titles/functions, employees vs. contractors vs. vendors? This is required for any role listing "management" in the title.',
    },
  ];

  const p2 = [
    {
      q: 'Budget ownership',
      hint: 'Did you manage or oversee budgets at PAINWeek? Approximate size — event budgets, marketing spend, production costs? Same question for Sports Source 2: purchasing/procurement budget, marketing spend?',
    },
    {
      q: 'Sports Source 2 — ecommerce/marketplace specifics',
      hint: 'What platform does the eBay store run on (eBay Seller Hub, third-party lister, custom integration)? Whatnot — how often do you run shows, approximate revenue per show, viewer/follower count? Any other platforms: COMC, StarStock, Facebook Marketplace, Instagram Shop?',
    },
    {
      q: 'Sports Source 2 — inventory systems and tools',
      hint: 'What software do you use for inventory, POS, purchasing, or CRM at Sports Source 2? (Examples: Lightspeed, Shopify, TCGplayer Pro, Excel/Sheets, custom database.) This matters for Ecommerce/Operations roles.',
    },
    {
      q: 'PAINWeek — sponsor/client count and support scope',
      hint: 'Approximately how many sponsors or pharma clients did you support annually? Did you have a revenue, contract, or renewal involvement, or was your role execution-only?',
    },
    {
      q: 'COVID transition — did PAINWeek go hybrid or virtual?',
      hint: 'If yes, what did you build or manage differently (virtual platform, on-demand video, registration migration, etc.)? This is strong for Digital Content and Event Operations roles.',
    },
    {
      q: 'Analytics tools used',
      hint: 'Beyond Cvent and HubSpot reporting: did you use Google Analytics, Adobe Analytics, Excel pivot tables, Tableau, Looker, Data Studio, email platform dashboards, or any other analytics tool?',
    },
    {
      q: 'Email platforms',
      hint: 'At PAINWeek, which email platform did you build and send campaigns from? (Examples: HubSpot email, MailChimp, Salesforce Marketing Cloud, Constant Contact, Campaign Monitor, custom SMTP.) For the Ecommerce variant, did Sports Source 2 use any email platform?',
    },
  ];

  const p3 = [
    {
      q: 'Education — did you graduate and when?',
      hint: 'The resume lists St. Lawrence University but no degree, no graduation year, and "advanced studies" rather than a completed degree. Did you complete a degree? What was it, and approximately when? If no degree, omitting graduation year is the right move.',
    },
    {
      q: 'Laughing Turtle Productions — paid or volunteer?',
      hint: 'Is this paid freelance, an unpaid volunteer role, or a personal creative collaboration? If paid, approximate annual value or project scope. The work described is substantial and may belong under its own section.',
    },
    {
      q: 'LinkedIn URL or portfolio',
      hint: 'Does Patrick have a LinkedIn profile, an online portfolio, a reel, or any samples of the program guide, pitch decks, or video work? Useful for the microsite and recruiter-facing materials.',
    },
    {
      q: 'Geography and work-model preference',
      hint: 'LA-only, open to remote, willing to travel? Any industry preference (healthcare, media, retail, entertainment, sports, other)?',
    },
    {
      q: 'Seniority and compensation target',
      hint: 'What title level (Manager, Senior Manager, Director)? Approximate salary range or floor?',
    },
    {
      q: 'Whatnot channel name and following',
      hint: 'If he has a public Whatnot seller presence with measurable followers or sales, it is a concrete ecommerce credential that can be cited by name.',
    },
  ];

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
        <h1>Questions for Patrick</h1>
        <p style={{ color: '#555', marginBottom: '1.5rem' }}>
          These questions help fill resume gaps and sharpen targeting. They are for Patrick to answer,
          not for job applications. Grouped by priority: P1 (answers unlock the most improvement soonest),
          P2 (significantly improve accuracy and impact), P3 (nice to have).
        </p>

        <h2 className="priority-heading" style={{ borderColor: '#d94a3d' }}>P1 &mdash; Immediate Blockers</h2>
        <p className="priority-desc">Answers needed before final drafts.</p>
        <ol className="q-list">
          {p1.map((item, i) => (
            <li key={i}>
              <span className="q-number priority-p1">{i + 1}</span>
              <strong>{item.q}</strong>
              {item.hint && (
                <p className="q-hint"><em>Hint: {item.hint}</em></p>
              )}
            </li>
          ))}
        </ol>

        <h2 className="priority-heading" style={{ borderColor: '#c99b3b', marginTop: '2rem' }}>P2 &mdash; Important Details</h2>
        <p className="priority-desc">Significantly improve accuracy and impact.</p>
        <ol className="q-list">
          {p2.map((item, i) => (
            <li key={i}>
              <span className="q-number priority-p2">{i + 1}</span>
              <strong>{item.q}</strong>
              {item.hint && (
                <p className="q-hint"><em>Hint: {item.hint}</em></p>
              )}
            </li>
          ))}
        </ol>

        <h2 className="priority-heading" style={{ borderColor: '#2b5f8a', marginTop: '2rem' }}>P3 &mdash; Nice to Have</h2>
        <p className="priority-desc">Strengthen specific CV variants and the microsite.</p>
        <ol className="q-list">
          {p3.map((item, i) => (
            <li key={i}>
              <span className="q-number priority-p3">{i + 1}</span>
              <strong>{item.q}</strong>
              {item.hint && (
                <p className="q-hint"><em>Hint: {item.hint}</em></p>
              )}
            </li>
          ))}
        </ol>

        <div className="questions-quickref" style={{ marginTop: '2.5rem', background: '#eee', padding: '1.25rem', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0 }}>Quick Reference: Questions by Resume Section</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #999' }}>
                <th style={{ textAlign: 'left', padding: '0.4rem 0.5rem', fontWeight: 600 }}>Section</th>
                <th style={{ textAlign: 'left', padding: '0.4rem 0.5rem', fontWeight: 600 }}>Key Unanswered Facts</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Summary</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Role family (P1-1), revenue attribution (P1-2)</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Sports Source 2</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Revenue details (P1-2), store name (P1-3), team size (P1-5), eBay/Whatnot metrics (P2-7), inventory tools (P2-8)</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>PAINWeek</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Email platform + metrics (P1-4), team size (P1-5), budget (P2-6), sponsor count (P2-9), COVID transition (P2-10), analytics (P2-11)</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Skills</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Email platforms (P2-12), inventory/POS tools (P2-8)</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Education</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Degree + year (P3-13)</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Laughing Turtle</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Paid vs. volunteer (P3-14)</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Contact / Portfolio</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>LinkedIn, reel, geography (P3-15, P3-16)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
