'use client';

import { Suspense, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function GateInner() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const check = async () => {
      const res = await fetch('/api/check-auth');
      if (res.ok) {
        const dest = searchParams.get('redirect') || '/profile';
        router.replace(dest);
      }
    };
    check();
  }, [router, searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });

    if (res.ok) {
      const dest = searchParams.get('redirect') || '/profile';
      router.push(dest);
    } else {
      setError('Incorrect access code.');
      setLoading(false);
    }
  };

  return (
    <div className="gate">
      <h1>Patrick Kelly</h1>
      <p>Career portfolio and resume materials. Enter access code to continue.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Access code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          autoFocus
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Checking...' : 'Enter'}
        </button>
        {error && <p className="error-msg">{error}</p>}
      </form>
    </div>
  );
}

export default function GatePage() {
  return (
    <Suspense fallback={
      <div className="gate">
        <h1>Patrick Kelly</h1>
        <p>Loading...</p>
      </div>
    }>
      <GateInner />
    </Suspense>
  );
}
