import { NextResponse } from 'next/server';
import { products } from '@/app/productos/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  // Also send related products to avoid a second API call
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  return NextResponse.json({
    product,
    related
  });
}
