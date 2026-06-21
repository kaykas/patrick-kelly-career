'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function QuestionsPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/');
  };

  const questions = [
    { q: 'What roles is he targeting first: marketing operations, event management, ecommerce/retail operations, digital content, or general manager?', hint: 'Define priority before customizing resumes.' },
    { q: 'What industries does he prefer or want to avoid?', hint: 'Healthcare, retail, entertainment, agencies, tech?' },
    { q: 'For Sports Source 2, what was the exact starting revenue and latest annual revenue? Is "under $1M to $4M" safe to publish?', hint: 'Sharpen the key metric.' },
    { q: 'How much of that revenue growth can he credibly tie to his work?', hint: 'Distinguish contribution from overall company growth.' },
    { q: 'How many employees, contractors, or vendors has he managed directly or indirectly?', hint: 'Team size adds management scope.' },
    { q: 'What systems does Sports Source 2 use for inventory, POS, ecommerce, email, CRM, eBay, Whatnot, or accounting?', hint: 'Tool details boost ATS keyword match.' },
    { q: 'What were his best concrete wins at Sports Source 2 besides revenue: customer list growth, eBay sales, Whatnot sales, margin, inventory turns, average order value, event attendance, social growth?', hint: 'More metrics for bullets.' },
    { q: 'At PAINWeek, did he own or influence email performance metrics: list size, open rates, click rates, registration lift, sponsor renewals, pipeline, attendee growth?', hint: 'Email metrics are valuable for marketing roles.' },
    { q: 'Did he manage budgets? If yes, what size ranges?', hint: 'Budget authority signals seniority.' },
    { q: 'How many clients/sponsors did he support at PAINWeek annually?', hint: 'Scale of stakeholder coordination.' },
    { q: 'Did he supervise a team? Titles/headcount?', hint: 'People management = promotion criteria.' },
    { q: 'Which analytics tools did he use: GA, Cvent reports, HubSpot dashboards, email platform analytics, Excel, Tableau, Looker, etc.?', hint: 'Analytics keywords strengthen applications.' },
    { q: 'Which email marketing platforms did he use?', hint: 'Platform names add keyword density.' },
    { q: 'Was PAINWeek hybrid/virtual during COVID, and did he help transition programming online?', hint: 'COVID pivot stories can be compelling.' },
    { q: 'What is the correct capitalization/name for Sports Source 2?', hint: 'Verify exact business name.' },
    { q: 'Is Laughing Turtle Productions paid, volunteer, freelance, or advisory work?', hint: 'Impacts how it appears on resume.' },
    { q: 'Did he graduate from St. Lawrence University? What degree, major, and year?', hint: 'Education formatting.' },
    { q: 'Does he have a LinkedIn URL, portfolio, reel, or examples of program guides/pitch decks/videos he can show?', hint: 'Link equity in applications.' },
    { q: 'Is he open to relocation, hybrid, remote, or LA-only roles?', hint: 'Set application location filters.' },
    { q: 'What salary/range and seniority level is he aiming for?', hint: 'Target appropriate job levels.' },
  ];

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
        <h1>Questions for Patrick</h1>
        <p>
          These questions help fill resume gaps and sharpen targeting. They are for Patrick to answer,
          not for job applications.
        </p>

        <ol className="q-list">
          {questions.map((item, i) => (
            <li key={i}>
              <span className="q-number">{i + 1}</span>
              <strong>{item.q}</strong>
              {item.hint && (
                <p style={{ color: '#666', fontSize: '0.875rem', marginTop: '0.3rem', marginLeft: '2.35rem' }}>
                  <em>Hint: {item.hint}</em>
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
