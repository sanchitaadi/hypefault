import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabase
      .from("products")
      .insert([
        {
          name: body.name,
          slug: body.slug,
          description: body.description,

          price: body.price,
          old_price: body.old_price,

          stock: body.stock,

          category: body.category,

          brand: body.brand || "HYPEFAULT",

          image_url: body.image_url,

          gallery: body.gallery,

          sizes: body.sizes,

          colors: body.colors,

          featured: body.featured,

          active: body.active,
        },
      ]);

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Product added successfully",
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
}