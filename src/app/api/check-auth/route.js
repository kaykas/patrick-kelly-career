import { NextResponse } from 'next/server';

export async function GET() {
  // The middleware already authenticated the request to reach this handler.
  // But let's be explicit for the client-side check.
  return NextResponse.json({ ok: true });
}
