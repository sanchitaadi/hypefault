import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

/* ---------------- GET ONE PRODUCT ---------------- */

export async function GET(
  req: NextRequest,
  { params }: Params
) {
  const { id } = await params;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}

/* ---------------- UPDATE PRODUCT ---------------- */

export async function PATCH(
  req: NextRequest,
  { params }: Params
) {
  const { id } = await params;

  try {
    const body = await req.json();

    const { data, error } = await supabase
      .from("products")
      .update({
        name: body.name,
        slug: body.slug,
        description: body.description,

        category: body.category,
        brand: body.brand,

        price: body.price,
        old_price: body.old_price,

        stock: body.stock,

        image_url: body.image_url,
        gallery: body.gallery,

        sizes: body.sizes,
        colors: body.colors,

        featured: body.featured,
        active: body.active,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

/* ---------------- DELETE PRODUCT ---------------- */

export async function DELETE(
  req: NextRequest,
  { params }: Params
) {
  const { id } = await params;

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
  });
}