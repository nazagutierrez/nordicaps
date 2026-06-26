import { NextResponse } from 'next/server';
import { products } from '@/app/productos/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '8');
  const category = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'default';

  let filtered = [...products];

  // Filter by category
  if (category !== 'All') {
    filtered = filtered.filter((p) => p.category === category);
  }

  // Sort
  switch (sort) {
    case 'price-asc':  filtered.sort((a, b) => a.price - b.price); break;
    case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
    case 'name-asc':   filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'name-desc':  filtered.sort((a, b) => b.name.localeCompare(a.name)); break;
  }

  const total = filtered.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginated = filtered.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginated,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: endIndex < total
    }
  });
}
