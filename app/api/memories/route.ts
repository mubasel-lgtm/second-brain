import { NextResponse } from 'next/server';
import { getMemories, createMemory } from '@/lib/db';

export async function GET() {
  try {
    const memories = getMemories();
    return NextResponse.json(memories);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch memories' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, content, tags } = await request.json();
    const id = createMemory(title, content, tags);
    return NextResponse.json({ id, success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create memory' }, { status: 500 });
  }
}
