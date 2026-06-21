import { NextResponse } from 'next/server';

export async function POST(request) {
  const { code } = await request.json();
  const validCode = process.env.SITE_ACCESS_CODE;

  if (!validCode) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
  }

  if (code === validCode) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set('pk_access', code, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return res;
  }

  return NextResponse.json({ error: 'Invalid code' }, { status: 401 });
}
