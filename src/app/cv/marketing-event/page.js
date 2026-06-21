'use client';

import Link from 'next/link';

export default function MarketingEventCV() {
  return (
    <>
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <span className="badge" style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem' }}>Variant 1 of 3</span>
        <Link href="/cv/ecommerce" style={{ color: '#2b5f8a' }}>Ecommerce CV →</Link>
        <Link href="/cv/digital-content" style={{ color: '#2b5f8a' }}>Digital Content CV →</Link>
        <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }} style={{ marginLeft: 'auto', color: '#2b5f8a', fontWeight: 600, cursor: 'pointer' }}>
          Print / Save as PDF
        </a>
      </div>

      <h1>Marketing &amp; Event Operations</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        Target roles: Marketing Operations Manager, Event Marketing Manager, Event Program Manager, Marketing Specialist
      </p>

      <div className="resume-cv">
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '1.35rem', border: 'none', color: '#111' }}>PATRICK S. KELLY</h2>
          <p style={{ fontSize: '0.9rem', color: '#444' }}>
            Los Angeles, CA · (315) 254-9362 · pskell02@yahoo.com
          </p>
        </div>

        <h3>MARKETING OPERATIONS · EVENT PROGRAM MANAGEMENT · DIGITAL CAMPAIGNS</h3>
        <p>
          Marketing and event operations professional with 14+ years of experience running large-scale
          conferences, managing multi-channel digital campaigns, supporting sponsors and clients, and
          producing marketing content across web, email, print, and video. At PAINWeek, the nation&apos;s
          largest conference on pain, progressed from Program Manager to Director of Multimedia Production,
          managing 50+ events per year and daily-to-monthly email campaigns. Currently managing operations
          and revenue growth at a high-volume retail and ecommerce business.
        </p>

        <h3>CORE COMPETENCIES</h3>
        <p>
          Campaign management · Email marketing · Event logistics and attendee communications ·
          Sponsor and client support · CRM and registration systems · Project documentation ·
          Social media advertising · Digital content production · Marketing collateral and print
          production · Vendor and contract resource coordination · Cross-functional project management
        </p>

        <h3>PROFESSIONAL EXPERIENCE</h3>

        <h4>PAINWEEK — Montclair, NJ</h4>
        <p><strong>Director, Multimedia Production</strong> · January 2020–February 2023</p>
        <p><strong>Senior Program Director</strong> · March 2015–January 2020</p>
        <p><strong>Program Manager</strong> · February 2009–March 2015</p>
        <p style={{ fontStyle: 'italic', color: '#555' }}>
          PAINWeek is the nation&apos;s largest annual conference on pain management, serving healthcare
          professionals, faculty, and pharmaceutical sponsors.
        </p>
        <ul>
          <li>Managed digital and live event operations for 50+ events per year ranging from 150 to 2,500 attendees and exhibitors, covering national conferences, regional events, and satellite programs.</li>
          <li>Served as single point of contact for all large-scale company events, national sales meetings, and attendee-facing campaigns from recruitment through post-conference follow-up.</li>
          <li>Produced daily, weekly, and monthly email campaigns supporting event promotion, audience engagement, sponsor activation, and digital recruitment.</li>
          <li>Managed sponsored banner advertising on PAINWeek.org and distributed internal banner placements across partner websites. Served as client POC for all web-based sponsor campaigns.</li>
          <li>Created campaign assets for Facebook, Instagram, and X, and managed organic and paid social presence supporting conference registration.</li>
          <li>Oversaw structure, content, and functionality updates for a rapidly growing healthcare conference website.</li>
          <li>Designed and produced original marketing and event materials in Photoshop, InDesign, and Illustrator: 120-page annual program guide, interactive PDFs, exhibit booth graphics, sales collateral, and sponsor-facing promotional pieces.</li>
          <li>Coordinated contract resources engaged in national and regional conference execution.</li>
          <li>Delivered attendee customer service and technical support through HelpScout, HubSpot, website live chat, and Cvent Event Management.</li>
          <li>Documented all digital projects from intake through delivery.</li>
          <li>Progressed through three roles over 14 years based on expanded responsibility across program management, event leadership, and multimedia production.</li>
        </ul>

        <h4>SPORTS SOURCE 2 — Los Angeles, CA</h4>
        <p><strong>General Manager</strong> · February 2023–Present</p>
        <ul>
          <li>Helped grow annual revenue from under $1M to approximately $4M by expanding sales channels, improving operational execution, and increasing marketplace and customer visibility.</li>
          <li>Manage more than 2 million items in inventory, including intake, organization, procurement, pricing support, and sales readiness.</li>
          <li>Coordinate customer growth through email marketing campaigns and social media advertising.</li>
          <li>Oversee daily retail operations, product procurement, customer service, and cross-channel process improvements.</li>
        </ul>

        <h3>VOLUNTEER / CREATIVE PRODUCTION</h3>
        <h4>LAUGHING TURTLE PRODUCTIONS</h4>
        <p><strong>Creative Production Support</strong> · February 2016–Present</p>
        <ul>
          <li>Editorial and proofreading support for television and film scripts.</li>
          <li>Video editing and story development for legal defense videos connected to nationally televised legal proceedings.</li>
          <li>Pitch decks and presentation materials for network sales conversations.</li>
          <li>Graphic asset production for television productions.</li>
        </ul>

        <h3>EDUCATION</h3>
        <p><strong>St. Lawrence University</strong> — Canton, NY<br />
        Studies in General Management, Marketing and Sales; advanced studies in Computer Sciences</p>

        <h3>CERTIFICATIONS</h3>
        <ul>
          <li>Cvent Event Management Certification, February 2021</li>
        </ul>

        <h3>SOFTWARE AND TOOLS</h3>
        <p><strong>Marketing &amp; CRM:</strong> HubSpot · HelpScout · Asana · eBay Seller · Whatnot</p>
        <p><strong>Design &amp; Production:</strong> Adobe Creative Suite (Photoshop, InDesign, Illustrator, Animate) · Affinity Designer</p>
        <p><strong>Video:</strong> Final Cut Pro X · Avid Media Composer · Adobe Premiere Pro</p>
        <p><strong>Event &amp; Registration:</strong> Cvent</p>
        <p><strong>Productivity:</strong> Microsoft Office</p>
      </div>
    </>
  );
}
