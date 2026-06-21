'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const P1 = [
  {
    q: 'Role targeting — which job family first?',
    detail: 'Pick one or two for the initial push: Marketing Operations Manager, Event Marketing/Program Manager, Digital Content/Production Manager, Ecommerce/Marketplace Operations Manager, or General Manager (retail/ops). The resume variants here assume all four, but real applications need a specific one-page focus.',
  },
  {
    q: 'Sports Source 2 — revenue numbers',
    detail: 'The resume currently says "under $1M to $4M." Is that annual revenue or cumulative? Is the $4M figure current or a peak? Is it safe to publish that exact figure, or should it be softened to "from under $1M to $4M+ in annual revenue"? And how directly did your work drive that growth — were you one of two or three people, or managing a larger operation where you were one contributor?',
  },
  {
    q: 'Sports Source 2 — actual store name and correct capitalization',
    detail: 'The original resume says "sports source 2" (lowercase). What is the legal or public-facing business name? This matters for any ATS or recruiter who tries to verify the employer.',
  },
  {
    q: 'PAINWeek email marketing — did you own list performance?',
    detail: 'Did you run the email platform yourself (build, send, monitor)? Approximate list size, typical open rate, click rate, or any campaign-level metrics (registrations driven, sponsor leads generated, list growth) would significantly strengthen the marketing operations variant.',
  },
  {
    q: 'Team/contractor management — headcount and scope',
    detail: 'Did you directly supervise anyone at PAINWeek or Sports Source 2? If yes: how many direct reports, what were their titles/functions, and were they employees, contractors, or vendors? This is required for any role that lists "management" in the title.',
  },
];

const P2 = [
  {
    q: 'Budget ownership',
    detail: 'Did you manage or oversee budgets at PAINWeek? Approximate size — event budgets, marketing spend, production costs? Same question for Sports Source 2: purchasing/procurement budget, marketing spend?',
  },
  {
    q: 'Sports Source 2 — ecommerce/marketplace specifics',
    detail: 'What platform does the eBay store run on (eBay Seller Hub, a third-party lister, custom integration)? Whatnot — how often do you run shows, approximate revenue per show, viewer/follower count? Any other platforms: COMC, StarStock, Facebook Marketplace, Instagram Shop?',
  },
  {
    q: 'Sports Source 2 — inventory systems and tools',
    detail: 'What software do you use for inventory, POS, purchasing, or CRM at Sports Source 2? (Examples: Lightspeed, Shopify, TCGplayer Pro, Excel/Sheets, custom database.) This matters for Ecommerce/Operations roles.',
  },
  {
    q: 'PAINWeek — sponsor/client count and support scope',
    detail: 'Approximately how many sponsors or pharma clients did you support annually? Did you have a revenue, contract, or renewal involvement, or was your role execution-only?',
  },
  {
    q: 'COVID transition — did PAINWeek go hybrid or virtual?',
    detail: 'If yes, what did you build or manage differently (virtual platform, on-demand video, registration migration, etc.)? This is strong for Digital Content and Event Operations roles.',
  },
  {
    q: 'Analytics tools used',
    detail: 'Beyond Cvent and HubSpot reporting: did you use Google Analytics, Adobe Analytics, Excel pivot tables, Tableau, Looker, Data Studio, email platform dashboards, or any other analytics tool?',
  },
  {
    q: 'Email platforms',
    detail: 'At PAINWeek, which email platform did you build and send campaigns from? (Examples: HubSpot email, MailChimp, Salesforce Marketing Cloud, Constant Contact, Campaign Monitor, custom SMTP.) For the Ecommerce variant, did Sports Source 2 use any email platform?',
  },
];

const P3 = [
  {
    q: 'Education — did you graduate and when?',
    detail: 'The resume lists St. Lawrence University but no degree, no graduation year, and "advanced studies" rather than a completed degree. Did you complete a degree? What was it, and approximately when?',
  },
  {
    q: 'Laughing Turtle Productions — paid or volunteer?',
    detail: 'Is this paid freelance, an unpaid volunteer role, or a personal creative collaboration? If paid, approximate annual value or project scope. This affects how it\'s framed.',
  },
  {
    q: 'LinkedIn URL or portfolio',
    detail: 'Does Patrick have a LinkedIn profile, an online portfolio, a reel, or any samples of the program guide, pitch decks, or video work?',
  },
  {
    q: 'Geography and work-model preference',
    detail: 'LA-only, open to remote, willing to travel? Any preference on industry (healthcare, media, retail, entertainment, sports, other)?',
  },
  {
    q: 'Seniority and compensation target',
    detail: 'What title level is he targeting (Manager, Senior Manager, Director)? Approximate salary range or range floor.',
  },
  {
    q: 'Whatnot channel name and following',
    detail: 'If he has a public Whatnot seller presence with measurable followers or sales, it\'s a concrete ecommerce credential that can be cited by name.',
  },
];

function QuestionCard({ num, question, detail, priority }) {
  const colors = {
    P1: { bg: '#d94a3d', label: 'P1 — Critical' },
    P2: { bg: '#c99b3b', label: 'P2 — Important' },
    P3: { bg: '#2b5f8a', label: 'P3 — Nice to Have' },
  };
  const c = colors[priority];
  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '1rem 1.25rem',
      marginBottom: '0.75rem',
      background: 'white',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.4rem' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '1.75rem', height: '1.75rem', borderRadius: '50%',
          background: c.bg, color: 'white', fontWeight: 700, fontSize: '0.8rem',
          flexShrink: 0, marginTop: '0.1rem',
        }}>{num}</span>
        <div>
          <strong>{question}</strong>
          <p style={{ color: '#555', fontSize: '0.88rem', marginTop: '0.3rem' }}>{detail}</p>
        </div>
      </div>
      <div style={{ marginTop: '0.4rem', marginLeft: '2.5rem' }}>
        <span className="badge" style={{ background: c.bg, color: 'white' }}>{c.label}</span>
      </div>
    </div>
  );
}

export default function QuestionsPage() {
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
        <Link href="/cv/marketing-event">Marketing/Event CV</Link>
        <Link href="/cv/ecommerce">Ecommerce CV</Link>
        <Link href="/cv/digital-content">Digital Content CV</Link>
        <Link href="/review">Review</Link>
        <Link href="/questions">Questions</Link>
        <Link href="/cover-note">Cover Note</Link>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </nav>
      <div className="page-content">
        <h1>Questions for Patrick</h1>
        <p>
          These questions unlock stronger bullets, better ATS targeting, and credible quantification
          across all three CV variants. Priority order below. Answers will be incorporated into
          final-ready versions.
        </p>

        <h2>P1 — Immediate Blockers</h2>
        {P1.map((item, i) => (
          <QuestionCard key={i} num={i + 1} question={item.q} detail={item.detail} priority="P1" />
        ))}

        <h2>P2 — Important Details</h2>
        {P2.map((item, i) => (
          <QuestionCard key={i} num={P1.length + i + 1} question={item.q} detail={item.detail} priority="P2" />
        ))}

        <h2>P3 — Nice to Have</h2>
        {P3.map((item, i) => (
          <QuestionCard key={i} num={P1.length + P2.length + i + 1} question={item.q} detail={item.detail} priority="P3" />
        ))}

        <div style={{ marginTop: '2rem', padding: '1rem', background: '#eee', borderRadius: '8px', fontSize: '0.88rem' }}>
          <strong>Answer format:</strong> Reply with question number(s) and your answer. Even partial answers
          (e.g. "P1-1: event marketing first") are valuable. Priority 1 answers unlock the most improvement soonest.
        </div>
      </div>
    </>
  );
}
