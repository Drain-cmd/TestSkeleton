import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: "Ben" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const { id } = await params;

  // Can use zod or else to validate object
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 403 });
  }

  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  
  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({}, { status: 200 });
}
