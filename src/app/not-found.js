import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1>404</h1>
      <p>This page could not be found.</p>
      <Link href="/" style={{ color: '#2b5f8a', textDecoration: 'underline' }}>
        Return to home
      </Link>
    </div>
  );
}
