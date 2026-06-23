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
      q: '✓ Role targeting — which job family first?',
      hint: 'Event Program Manager. CV variants should prioritize this role.',
      answer: 'Event Program Manager',
    },
    {
      q: '✓ Sports Source 2 — revenue numbers',
      hint: '$4M was a typo. Should be $2M (annual). Updated in all CV variants.',
      answer: '$4M was a typo. Correct figure is $2M. Growth was driven directly as the General Manager — operated solo for two years, then with one direct report.',
    },
    {
      q: '✓ Sports Source 2 — actual store name and correct capitalization',
      hint: 'Used "Sports Source 2" (capitalized) consistently across all CVs. No legal/dba name provided beyond the operating name.',
      answer: 'Sports Source 2',
    },
    {
      q: '✓ PAINWeek email marketing — did you own list performance?',
      hint: 'Confirmed: owned end-to-end for ~50k active subscribers. MailChimp + HubSpot. Mass campaigns: 10-20% open, ~3% click. Targeted campaigns: 70%+ click, up to 80% open.',
      answer: 'Yes — built, sent, and monitored in MailChimp and HubSpot. List of ~50k active subscribers. Mass marketing: 10-20% open, ~3% click. Targeted sponsor/exhibitor campaigns: 70%+ click, up to 80% open.',
    },
    {
      q: '✓ Team/contractor management — headcount and scope',
      hint: 'Sports Source 2: solo operator for two years, then one direct report for two years. PAINWeek: no direct reports — served as individual contributor reporting to managing partners.',
      answer: 'Sports Source 2: solo operator for 2 years, then 1 direct report for 2 years. PAINWeek: no direct reports. Managed contract creative resources and vendors.',
    },
  ];

  const p2 = [
    {
      q: '✓ Budget ownership',
      hint: 'Confirmed: $500k annual PAINWeek conference production budget; managed $50k recruitment marketing budget and $20k digital production budget. Sports Source 2: $500 daily buying budget, larger purchases escalated to owner.',
      answer: 'PAINWeek: $500k annual production budget, $50k recruitment marketing, $20k digital production. Sports Source 2: $500 daily buying budget, owner handles large purchases.',
    },
    {
      q: '✓ Sports Source 2 — ecommerce/marketplace specifics',
      hint: 'eBay primary sales channel (Seller Hub). Whatnot: weekly shows through dedicated breaker. COMC arbitrage used. Squarespace for inventory listing (non-ecommerce). Bi-weekly Facebook case breaks.',
      answer: 'eBay (Seller Hub) primary; weekly Whatnot shows via dedicated breaker; bi-weekly Facebook case breaks; COMC arbitrage; Squarespace inventory listing site (non-ecommerce).',
    },
    {
      q: '✓ Sports Source 2 — inventory systems and tools',
      hint: 'Square Terminal for in-store POS, Square POS/CRM. Product procurement via Upper Deck, Topps, Panini, supplier, and distributor portals.',
      answer: 'Square Terminal (POS), Square POS/CRM. Vendor portals for Upper Deck, Topps, Panini, plus supplier/distributor portals.',
    },
    {
      q: '✓ PAINWeek — sponsor/client count and support scope',
      hint: 'Approximately 125 exhibitors annually, including 10-20 major pharmaceutical sponsors. Role was execution-focused: campaign production, sponsor activation, digital program management.',
      answer: '~125 exhibitors/year, 10-20 big pharma sponsors. Role: campaign execution, digital program management, banner/reporting delivery.',
    },
    {
      q: '✓ COVID transition — did PAINWeek go hybrid or virtual?',
      hint: 'Yes — transitioned to virtual and hybrid delivery during COVID using a custom-built platform on Cadmium.',
      answer: 'Yes — virtual and hybrid delivery via custom Cadmium platform.',
    },
    {
      q: '✓ Analytics tools used',
      hint: 'Google Analytics confirmed (tracked Google Ads campaign performance). Also SurveyMonkey for audience feedback.',
      answer: 'Google Analytics, SurveyMonkey, plus email platform dashboards (MailChimp, HubSpot reports).',
    },
    {
      q: '✓ Email platforms',
      hint: 'Confirmed: MailChimp and HubSpot at PAINWeek. Square email module at Sports Source 2. SurveyMonkey used for email surveys.',
      answer: 'MailChimp + HubSpot at PAINWeek. Square Email Module at Sports Source 2. SurveyMonkey for surveys.',
    },
  ];

  const p3 = [
    {
      q: '✓ Education — did you graduate and when?',
      hint: 'Did not graduate. Resume now frames St. Lawrence as "studies" rather than a completed degree. No graduation year listed.',
      answer: 'Did not complete a degree. St. Lawrence University — studies. Listed as education without degree.',
    },
    {
      q: '✓ Laughing Turtle Productions — paid or volunteer?',
      hint: 'Volunteer support for partner Taylor&apos;s company. Includes pitch decks, reality TV concepts, legal defense video editing, and graphic production.',
      answer: 'Volunteer. Creative production support for partner Taylor — pitch decks, reality TV concepts, legal defense video editing, graphic production.',
    },
    {
      q: '✓ LinkedIn URL or portfolio',
      hint: 'LinkedIn and YouTube sample portfolio supplied externally. Use these for recruiter-facing materials.',
      answer: 'LinkedIn profile and YouTube sample provided. Not published on this microsite.',
    },
    {
      q: '✓ Geography and work-model preference',
      hint: 'LA-only. Remote PT possible. Prefers entertainment, sports, or high-end event management.',
      answer: 'LA-based, remote PT possible. Targets entertainment, sports, or high-end event management.',
    },
    {
      q: '✓ Seniority and compensation target',
      hint: 'Senior Program Manager+ / Director-level. Starting base: $125k.',
      answer: 'Senior Program Manager+ / Director-level. $125k starting base.',
    },
    {
      q: 'Whatnot channel name and following',
      hint: 'If he has a public Whatnot seller presence with measurable followers or sales, it is a concrete ecommerce credential that can be cited by name. Not yet provided.',
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
        <p className="priority-desc">All P1 questions answered by Patrick and incorporated into CVs.</p>
        <ol className="q-list">
          {p1.map((item, i) => (
            <li key={i}>
              <span className="q-number priority-p1">{i + 1}</span>
              <strong>{item.q}</strong>
              {item.answer && (
                <p className="q-answer" style={{ color: '#1a6b3c', fontWeight: 500, marginTop: '0.25rem', marginBottom: '0.25rem' }}>
                  Answer: {item.answer}
                </p>
              )}
              {item.hint && (
                <p className="q-hint"><em>Hint: {item.hint}</em></p>
              )}
            </li>
          ))}
        </ol>

        <h2 className="priority-heading" style={{ borderColor: '#c99b3b', marginTop: '2rem' }}>P2 &mdash; Important Details</h2>
        <p className="priority-desc">All P2 questions answered by Patrick and incorporated into CVs.</p>
        <ol className="q-list">
          {p2.map((item, i) => (
            <li key={i}>
              <span className="q-number priority-p2">{i + 1}</span>
              <strong>{item.q}</strong>
              {item.answer && (
                <p className="q-answer" style={{ color: '#1a6b3c', fontWeight: 500, marginTop: '0.25rem', marginBottom: '0.25rem' }}>
                  Answer: {item.answer}
                </p>
              )}
              {item.hint && (
                <p className="q-hint"><em>Hint: {item.hint}</em></p>
              )}
            </li>
          ))}
        </ol>

        <h2 className="priority-heading" style={{ borderColor: '#2b5f8a', marginTop: '2rem' }}>P3 &mdash; Nice to Have</h2>
        <p className="priority-desc">Most P3 questions answered. One remaining: Whatnot channel name.</p>
        <ol className="q-list">
          {p3.map((item, i) => (
            <li key={i}>
              <span className="q-number priority-p3">{i + 1}</span>
              <strong>{item.q}</strong>
              {item.answer && (
                <p className="q-answer" style={{ color: '#1a6b3c', fontWeight: 500, marginTop: '0.25rem', marginBottom: '0.25rem' }}>
                  Answer: {item.answer}
                </p>
              )}
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
                <th style={{ textAlign: 'left', padding: '0.4rem 0.5rem', fontWeight: 600 }}>Key Answered Facts</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Summary</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Role family (P1-1): Event Program Manager · revenue attribution (P1-2): $2M</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Sports Source 2</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Core facts answered: $2M revenue, Sports Source 2 capitalization, Jan 2026 end date, solo-to-1-team size, eBay/Whatnot/COMC workflow, Square POS/CRM, vendor portals. Remaining useful detail: any public store links or quantified channel growth.</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>PAINWeek</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Core facts answered: 50k list, MailChimp/HubSpot/SurveyMonkey, campaign metrics, 125 exhibitors, 10-20 big pharma, $50k recruitment / $20k digital / $500k production context, Cadmium virtual/hybrid platform, Google Analytics.</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Skills</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Updated with MailChimp, HubSpot, SurveyMonkey, Square Terminal, Square POS/CRM, Cadmium, Google Analytics, COMC, eBay, Whatnot, and card vendor portals.</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Education</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Answered: did not graduate. Resume now frames St. Lawrence as studies rather than a completed degree.</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Laughing Turtle</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Answered: volunteer support for partner Taylor's company; includes pitch decks, reality TV concepts, legal defense video editing, and graphic production.</td></tr>
              <tr><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Contact / Portfolio</td><td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #ddd' }}>Answered: LinkedIn and YouTube sample portfolio supplied; LA-only, remote PT possible, prefers entertainment, sports, or high-end event management; target Senior Program Manager+ / Director-level, $125k starting base.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
