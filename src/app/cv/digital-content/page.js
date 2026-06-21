'use client';

import Link from 'next/link';

export default function DigitalContentCV() {
  return (
    <>
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <span className="badge" style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem' }}>Variant 3 of 3</span>
        <Link href="/cv/marketing-event" style={{ color: '#2b5f8a' }}>Marketing/Event CV →</Link>
        <Link href="/cv/ecommerce" style={{ color: '#2b5f8a' }}>Ecommerce CV →</Link>
        <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }} style={{ marginLeft: 'auto', color: '#2b5f8a', fontWeight: 600, cursor: 'pointer' }}>
          Print / Save as PDF
        </a>
      </div>

      <h1>Digital Content &amp; Production</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        Target roles: Digital Content Manager, Multimedia Production Manager, Content Operations Manager,
        Creative Operations Manager, Marketing Content Producer
      </p>

      <div className="resume-cv">
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '1.35rem', border: 'none', color: '#111' }}>PATRICK S. KELLY</h2>
          <p style={{ fontSize: '0.9rem', color: '#444' }}>
            Los Angeles, CA · (315) 254-9362 · pskell02@yahoo.com
          </p>
        </div>

        <h3>DIGITAL CONTENT PRODUCTION · MULTIMEDIA · MARKETING CREATIVE OPERATIONS</h3>
        <p>
          Digital content producer and creative operations manager with 14+ years of experience across
          video editing, graphic design, animation, web content management, email campaigns, and print
          production. At PAINWeek, edited 250+ faculty interviews and animations, produced the annual
          120-page program guide and full suite of event marketing materials, managed a healthcare
          conference website, and created video content for keynote presentations. Proficient across
          the full Adobe Creative Suite, Final Cut Pro X, Avid Media Composer, and Affinity Designer.
        </p>

        <h3>CORE COMPETENCIES</h3>
        <p>
          Video editing and post-production · Graphic design and layout · Motion graphics and animation ·
          Interactive PDF and print production · Web content management · Email campaign production ·
          Social media content creation · Brand and asset management · Project documentation and delivery ·
          Creative vendor and resource coordination
        </p>

        <h3>PROFESSIONAL EXPERIENCE</h3>

        <h4>PAINWEEK — Montclair, NJ</h4>
        <p><strong>Director, Multimedia Production</strong> · January 2020–February 2023</p>
        <p><strong>Senior Program Director</strong> · March 2015–January 2020</p>
        <p><strong>Program Manager</strong> · February 2009–March 2015</p>
        <p style={{ fontStyle: 'italic', color: '#555' }}>
          PAINWeek is the nation&apos;s largest annual pain management conference. In the Director,
          Multimedia Production role, served as the primary creative and digital production resource
          for the organization.
        </p>
        <ul>
          <li>Edited 250+ faculty interviews and animations using Avid Media Composer, Final Cut Pro X, Adobe Premiere Pro, and Adobe Animate.</li>
          <li>Produced keynote video content for the PAINWeek National Conference and created graphic animation assets for internal and external digital use.</li>
          <li>Designed and produced original marketing and event materials in Photoshop, InDesign, and Illustrator: 120-page annual program guide, interactive PDFs, exhibit booth structures, sales collateral, and sponsor-facing promotional pieces.</li>
          <li>Managed structure, functionality, and content updates for a rapidly expanding healthcare conference website, including web copy, banner ad placements, and digital promotional inventory.</li>
          <li>Produced daily, weekly, and monthly email campaigns, managing layout, copy, asset production, and send.</li>
          <li>Created and produced social media campaign content for Facebook, Instagram, and X.</li>
          <li>Served as POC for all client-supported web campaigns: banner advertising, high-volume email programs, and digital promotional assets.</li>
          <li>Created interactive PDF promotional pieces and sales materials for business development and sponsor-facing presentations.</li>
          <li>Produced all graphic and visual assets for large-scale events: 50+ per year ranging from 150 to 2,500 attendees and exhibitors.</li>
          <li>Managed project documentation from intake through delivery for all digital, multimedia, and print programs.</li>
          <li>Coordinated contract creative resources for national and regional conference production.</li>
        </ul>

        <h4>SPORTS SOURCE 2 — Los Angeles, CA</h4>
        <p><strong>General Manager</strong> · February 2023–Present</p>
        <ul>
          <li>Support customer acquisition and retention through email marketing campaigns and social media advertising content creation.</li>
          <li>Manage visual presentation and marketplace listing quality across eBay and Whatnot channels.</li>
        </ul>

        <h3>VOLUNTEER / CREATIVE PRODUCTION</h3>
        <h4>LAUGHING TURTLE PRODUCTIONS</h4>
        <p><strong>Creative Production Support</strong> · February 2016–Present</p>
        <ul>
          <li>Video editing and story development for legal defense videos connected to nationally televised legal proceedings.</li>
          <li>Editorial and proofreading support for television and film scripts.</li>
          <li>Pitch deck design and presentation materials for network sales conversations.</li>
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
        <p><strong>Video &amp; Motion:</strong> Final Cut Pro X · Avid Media Composer · Adobe Premiere Pro · Adobe Animate</p>
        <p><strong>Design &amp; Layout:</strong> Adobe Photoshop · Adobe InDesign · Adobe Illustrator · Affinity Designer</p>
        <p><strong>Web &amp; Digital:</strong> CMS content management · Email campaign production · Banner ad production</p>
        <p><strong>CRM &amp; Project:</strong> HubSpot · HelpScout · Asana · Cvent</p>
        <p><strong>Productivity:</strong> Microsoft Office</p>
      </div>
    </>
  );
}
