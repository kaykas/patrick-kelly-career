'use client';

import Link from 'next/link';

export default function EcommerceCV() {
  return (
    <>
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <span className="badge" style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem' }}>Variant 2 of 3</span>
        <Link href="/cv/marketing-event" style={{ color: '#2b5f8a' }}>Marketing/Event CV →</Link>
        <Link href="/cv/digital-content" style={{ color: '#2b5f8a' }}>Digital Content CV →</Link>
        <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }} style={{ marginLeft: 'auto', color: '#2b5f8a', fontWeight: 600, cursor: 'pointer' }}>
          Print / Save as PDF
        </a>
      </div>

      <h1>Ecommerce &amp; Marketplace Operations</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        Target roles: Ecommerce Operations Manager, Marketplace Operations Manager, Retail Operations Manager,
        General Manager (ecommerce-forward retail)
      </p>

      <div className="resume-cv">
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '1.35rem', border: 'none', color: '#111' }}>PATRICK S. KELLY</h2>
          <p style={{ fontSize: '0.9rem', color: '#444' }}>
            Los Angeles, CA · (315) 254-9362 · pskell02@yahoo.com
          </p>
        </div>

        <h3>ECOMMERCE &amp; MARKETPLACE OPERATIONS · RETAIL MANAGEMENT · REVENUE GROWTH</h3>
        <p>
          Operations and ecommerce professional with direct experience growing a high-volume retail and
          marketplace business from under $1M to approximately $2M in annual revenue. Manages more than
          2 million items across physical retail, eBay, and Whatnot marketplace channels. Brings 14+ years
          of background in operations, digital campaign management, CRM, customer support workflows, and
          cross-functional project execution from a prior career managing large-scale healthcare conference
          programs.
        </p>

        <h3>CORE COMPETENCIES</h3>
        <p>
          Ecommerce channel management · Marketplace operations (eBay, Whatnot) · Inventory management
          at scale · Product procurement · Retail operations · Customer acquisition and email marketing ·
          Revenue growth and channel expansion · CRM and customer support workflows · Vendor coordination ·
          Cross-channel operations alignment
        </p>

        <h3>PROFESSIONAL EXPERIENCE</h3>

        <h4>SPORTS SOURCE 2 — Los Angeles, CA</h4>
        <p><strong>General Manager</strong> · February 2023–January 2026</p>
        <p style={{ fontStyle: 'italic', color: '#555' }}>
          High-volume trading card retailer operating across physical storefront, eBay, Whatnot, and
          Facebook marketplace channels. Operated as solo General Manager for two years, then with one
          direct report for a subsequent two-year period. Managed relationships with 8 frequent vendors.
        </p>
        <ul>
          <li>Grew annual revenue from under $1M to approximately $2M by expanding marketplace presence, improving operational execution, and building customer visibility.</li>
          <li>Managed an inventory of more than 2 million items, including intake, organization, pricing support, procurement, and sales readiness across in-store and online channels.</li>
          <li>Operated eBay as primary online sales channel; maintained Squarespace inventory listing site (non-ecommerce due to constant price fluctuations). Ran bi-weekly Facebook case breaks and weekly Whatnot shows through a dedicated breaker. Executed COMC arbitrage for quick in-store resale profit.</li>
          <li>Used Square Terminal and Square POS/CRM for in-store transactions and email marketing through the Square email module. Product procurement through Upper Deck, Topps, Panini, supplier, and distributor portals.</li>
          <li>Managed daily procurement with a $500 buying budget, with larger purchases escalated to the owner.</li>
          <li>Drove customer acquisition and repeat business through Square email marketing module campaigns and organic social media.</li>
          <li>Coordinated across physical retail, eBay, Whatnot, and Facebook workflows to keep inventory aligned with demand.</li>
        </ul>

        <h4>PAINWEEK — Montclair, NJ</h4>
        <p><strong>Director, Multimedia Production</strong> · January 2020–February 2023</p>
        <p><strong>Senior Program Director</strong> · March 2015–January 2020</p>
        <p><strong>Program Manager</strong> · February 2009–March 2015</p>
        <ul>
          <li>Managed CRM, registration, and customer support workflows for 50+ events per year using HubSpot, HelpScout, Cvent, and website live chat. Served as POC for attendees from initial recruitment through post-conference follow-up.</li>
          <li>Owned the email process end-to-end for 50k active subscribers: campaign builds in MailChimp and HubSpot, send execution, and results exporting. Mass campaigns achieved 10-20% open rates; targeted sponsor/exhibitor campaigns achieved over 70% click rates.</li>
          <li>Managed sponsor-facing digital programs including banner advertising, web-based campaigns, and digital promotional pieces.</li>
          <li>Coordinated vendors and contract resources for national and regional conference execution.</li>
          <li>Managed project documentation from intake through delivery across digital, print, and event production.</li>
        </ul>

        <h3>VOLUNTEER / CREATIVE PRODUCTION</h3>
        <h4>LAUGHING TURTLE PRODUCTIONS</h4>
        <p><strong>Creative Production Support</strong> · February 2016–Present</p>
        <ul>
          <li>Graphic assets, video editing, and presentation materials for television production and network sales.</li>
        </ul>

        <h3>EDUCATION</h3>
        <p><strong>St. Lawrence University</strong> — Canton, NY<br />
        Studies in General Management, Marketing and Sales; advanced studies in Computer Sciences</p>

        <h3>CERTIFICATIONS</h3>
        <ul>
          <li>Cvent Event Management Certification, February 2021</li>
        </ul>

        <h3>SOFTWARE AND TOOLS</h3>
        <p><strong>Ecommerce &amp; Marketplaces:</strong> eBay · Whatnot · COMC · Facebook Marketplace</p>
        <p><strong>POS &amp; CRM:</strong> Square Terminal · Square POS/CRM · Square Email Module</p>
        <p><strong>Vendor Portals:</strong> Upper Deck · Topps · Panini · Distributor portals</p>
        <p><strong>Marketing &amp; CRM:</strong> HubSpot · MailChimp · HelpScout · Asana</p>
        <p><strong>Design:</strong> Adobe Creative Suite · Affinity Designer</p>
        <p><strong>Video:</strong> Final Cut Pro X · Avid Media Composer · Adobe Premiere Pro</p>
        <p><strong>Productivity:</strong> Microsoft Office · Cvent</p>
      </div>
    </>
  );
}
