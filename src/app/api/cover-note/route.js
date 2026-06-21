import { NextResponse } from 'next/server';

const PATRICK_CONTEXT = `
FULL NAME: Patrick S. Kelly
LOCATION: Los Angeles, CA
EMAIL: pskell02@yahoo.com | PHONE: (315) 254-9362

CURRENT ROLE: General Manager at Sports Source 2 (Feb 2023–Present)
  - Grew revenue from under $1M to ~$4M annually over ~3 years.
  - Manages 2M+ item inventory; oversees physical retail, eBay, and Whatnot marketplace.
  - Handles email marketing, social media, product procurement, customer service.

PREVIOUS ROLE: PAINWeek (Montclair, NJ) — 14 years, three promotions
  - Program Manager → Senior Program Director → Director, Multimedia Production
  - Managed 50+ events/year, 150–2,500 attendees.
  - Produced email campaigns, banner ads, social media assets.
  - Edited 250+ faculty videos/animations (Avid, Final Cut Pro X, Premiere Pro, Adobe Animate).
  - Built 120-page program guide, interactive PDFs, sales collateral in Photoshop/InDesign/Illustrator.
  - Used HubSpot, HelpScout, Cvent for CRM and registration.
  - Coordinated website content for a major healthcare conference.
  - Managed contract resources for national and regional events.

VOLUNTEER: Laughing Turtle Productions — script editing, video for legal defense, pitch decks.

EDUCATION: St. Lawrence University — General Management, Marketing & Sales + Computer Sciences.

CERTIFICATIONS: Cvent Event Management Certified (2021).

TOOLS: Adobe Creative Suite, Final Cut Pro X, Avid Media Composer, Affinity Designer, Asana, HubSpot, HelpScout, Cvent, eBay, Whatnot, Microsoft Office.
`;

const SYSTEM_PROMPT = `You are a professional cover-note writer. Your task is to write a concise, specific, plainspoken cover note for Patrick Kelly based on his real background and a job posting the user provides.

RULES:
- Write as Patrick (first person). Do not label it "Cover Letter" or include a header with his name/address. Just the body.
- Ground every sentence in Patrick's real facts from his resume. The context below is all verified facts.
- Do not use any of these phrases: "I am writing to express my interest," "I am excited to apply," "I am confident that," "I believe my skills," "I would welcome the opportunity," "please find attached," "thank you for your time and consideration," "I look forward to hearing from you," "this role aligns perfectly," "I am eager to," "I am passionate about," "thrilled," "delighted," "it would be an honor," "incredible opportunity," "unique blend of skills," "proven track record," "I possess," "well-suited," "I bring to the table," "I am writing to apply," "best qualified candidate," "I would love to," "I am submitting my application," "I am writing regarding."
- Do not use exclamation points.
- Use specific facts: revenue numbers, event scale, tools, years of experience, concrete outcomes.
- Match the job posting's language only where Patrick's experience honestly overlaps.
- Keep it to 4-6 short paragraphs. No fluff. No filler.
- Do not claim to bypass AI detectors. Do not mention AI at all.
- Write like a real human wrote it in 5 minutes: direct, grounded, to the point.
- Start with a natural subject line or greeting based on the job posting context, but keep it simple.`;

export async function POST(request) {
  const openaiKey = process.env.OPENAI_API_KEY;

  if (!openaiKey) {
    return NextResponse.json(
      { error: 'OPENAI_API_KEY not configured on server.' },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { jobTitle, companyName, jobDescription, additionalNotes } = body;

  if (!jobTitle || !companyName) {
    return NextResponse.json(
      { error: 'jobTitle and companyName are required.' },
      { status: 400 }
    );
  }

  const userMessage = [
    `Job Title: ${jobTitle}`,
    `Company: ${companyName}`,
    jobDescription ? `Job Description:\n${jobDescription}` : null,
    additionalNotes ? `Additional Notes from Patrick:\n${additionalNotes}` : null,
  ]
    .filter(Boolean)
    .join('\n\n');

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-5.5',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: `Patrick's background:\n${PATRICK_CONTEXT}\n\n---\n\n${userMessage}` },
        ],
        max_completion_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error('OpenAI API error:', response.status, errBody);
      return NextResponse.json(
        { error: `OpenAI API returned ${response.status}` },
        { status: 502 }
      );
    }

    const data = await response.json();
    const coverNote = data.choices?.[0]?.message?.content?.trim();

    if (!coverNote) {
      return NextResponse.json(
        { error: 'Empty response from OpenAI.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ coverNote, usage: data.usage });
  } catch (err) {
    console.error('Cover note API error:', err);
    return NextResponse.json(
      { error: 'Failed to generate cover note.' },
      { status: 500 }
    );
  }
}
