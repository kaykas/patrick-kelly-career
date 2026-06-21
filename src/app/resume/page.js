'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ResumePage() {
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
        <h1>Updated Resume</h1>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.25rem' }}>
          <a href="/downloads/patrick-updated-resume.txt" className="variant-link" download style={{ fontSize: '0.9rem' }}>
            Download TXT (ATS-friendly)
          </a>
          <a href="/cv" className="variant-link" style={{ fontSize: '0.9rem' }}>
            View CV Variants &rarr;
          </a>
        </div>
        <p style={{ color: '#666', marginBottom: '1.25rem' }}>
          ATS-optimized master resume. For each application, customize to mirror the job description.
        </p>

        <h2>PATRICK S. KELLY</h2>
        <p>Los Angeles, CA &middot; (315) 254-9362 &middot; pskell02@yahoo.com</p>

        <h3>MARKETING OPERATIONS &middot; EVENT PROGRAM MANAGEMENT &middot; ECOMMERCE GROWTH</h3>
        <p>
          Marketing, events, and operations leader with 14+ years of experience building digital campaigns,
          managing large-scale conferences, producing multimedia content, supporting sponsors and clients,
          and running high-volume retail/ecommerce operations. Proven record of growing Sports Source 2 from
          under $1M to $4M in annual revenue and progressing through three roles at PAINWeek, the nation&apos;s
          largest conference on pain. Strong mix of campaign execution, event logistics, CRM/customer support,
          content production, vendor coordination, and hands-on operational management.
        </p>

        <h3>CORE STRENGTHS</h3>
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

        <h3>PROFESSIONAL EXPERIENCE</h3>

        <h4>SPORTS SOURCE 2 &mdash; Los Angeles, CA</h4>
        <p><strong>General Manager</strong> &middot; February 2023&ndash;Present</p>
        <p>Manage day-to-day operations for a high-volume trading card retailer with a large physical inventory, ecommerce channels, and marketplace-driven revenue streams.</p>
        <ul>
          <li>Helped grow annual revenue from under $1M to approximately $4M by expanding sales channels, improving operational execution, and increasing customer visibility.</li>
          <li>Manage an inventory of more than 2 million items, including product intake, organization, procurement, pricing support, and sales readiness.</li>
          <li>Expanded revenue opportunities through increased eBay visibility and marketplace selling on platforms including Whatnot.</li>
          <li>Support customer growth through email marketing, social media advertising, and improved store visibility.</li>
          <li>Oversee daily retail operations, product procurement, customer service, sales support, and process improvements.</li>
          <li>Coordinate across in-store, ecommerce, and marketplace workflows to keep inventory and customer demand aligned.</li>
        </ul>

        <h4>PAINWEEK &mdash; Montclair, NJ</h4>
        <p><strong>Director, Multimedia Production</strong> &middot; January 2020&ndash;February 2023</p>
        <p><strong>Senior Program Director</strong> &middot; March 2015&ndash;January 2020</p>
        <p><strong>Program Manager</strong> &middot; February 2009&ndash;March 2015</p>
        <p>Progressed through program management, event leadership, and multimedia production roles for PAINWeek, the nation&apos;s largest conference on pain. Served as a key member of the management team reporting directly to managing partners, with responsibility across digital engagement, event coordination, corporate branding, sponsor support, graphic design, and multimedia production.</p>
        <ul>
          <li>Managed digital and live event operations for more than 50 events per year, ranging from 150 to 2,500 attendees and exhibitors.</li>
          <li>Coordinated attendee workflows from recruitment through post-conference follow-up, including communications, support, registration systems, and event logistics.</li>
          <li>Produced daily, weekly, and monthly email campaigns supporting audience engagement, sponsor programs, event promotion, and digital recruitment strategies.</li>
          <li>Served as point of contact for client-supported web campaigns, including banner advertising, high-volume email campaigns, and digital promotional programs.</li>
          <li>Managed sponsored banner ads on PAINWeek.org and internal banner placements across partner websites.</li>
          <li>Produced social media campaign assets and advertising content for Facebook, Instagram, and X.</li>
          <li>Managed structure, functionality, and content updates for a rapidly expanding healthcare conference website.</li>
          <li>Edited 250+ faculty interviews and animations using Avid, Final Cut Pro X, Adobe Premiere Pro, and Adobe Animate.</li>
          <li>Created original marketing and event materials using Photoshop, InDesign, and Illustrator, including a 120-page program guide, interactive PDFs, sales collateral, and exhibit booth assets.</li>
          <li>Created interactive PDF promotional pieces for business development and sponsor-facing sales efforts.</li>
          <li>Produced keynote video content and graphic animation assets for internal and external use.</li>
          <li>Managed project documentation from intake through delivery for digital campaigns, multimedia projects, and conference materials.</li>
          <li>Coordinated contract resources supporting national and regional conferences.</li>
          <li>Provided direct customer service and technical support to registrants using HelpScout, HubSpot, website live chat, and Cvent Event Management.</li>
        </ul>

        <h3>VOLUNTEER / CREATIVE PRODUCTION</h3>
        <h4>LAUGHING TURTLE PRODUCTIONS</h4>
        <p><strong>Creative Production Support</strong> &middot; February 2016&ndash;Present</p>
        <ul>
          <li>Provide proofreading and editorial support for television and film scripts.</li>
          <li>Edit video and support story development for legal defense videos connected to nationally televised legal proceedings.</li>
          <li>Create pitch decks and presentation materials for network sales conversations.</li>
          <li>Produce graphic assets for television production needs.</li>
        </ul>

        <h3>EDUCATION</h3>
        <p><strong>St. Lawrence University</strong> &mdash; Canton, NY<br />Studies in General Management, Marketing and Sales; advanced studies in Computer Sciences</p>

        <h3>CERTIFICATIONS</h3>
        <ul>
          <li>Cvent Event Management Certification, February 2021</li>
        </ul>

        <h3>SOFTWARE AND TOOLS</h3>
        <p>Microsoft Office &middot; Adobe Creative Suite &middot; Photoshop &middot; InDesign &middot; Illustrator &middot; Adobe Animate &middot; Final Cut Pro X &middot; Avid Media Composer &middot; Affinity Designer &middot; Asana &middot; HubSpot &middot; HelpScout &middot; Cvent &middot; eBay &middot; Whatnot</p>
      </div>
    </>
  );
}
