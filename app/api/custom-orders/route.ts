import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabaseAdmin
      .from("custom_orders")
      .insert([
        {
          full_name: body.full_name,
          email: body.email,
          phone: body.phone,
          address: body.address,
          notes: body.notes,
          product_type: body.product_type,
          color: body.color,
          size: body.size,
          print_position: body.print_position,
          quantity: body.quantity,
          image_url: body.image_url,
        },
      ]);

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error("API Error:", err);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: "Method Not Allowed",
    },
    {
      status: 405,
    }
  );
}