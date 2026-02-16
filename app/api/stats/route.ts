import { NextResponse } from 'next/server';
import { getStats, getActivities } from '@/lib/db';

export async function GET() {
  try {
    const stats = getStats();
    const activities = getActivities(10);
    return NextResponse.json({ stats, activities });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
