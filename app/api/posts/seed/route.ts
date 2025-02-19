import { NextResponse } from "next/server";
import { pushDummyPosts } from "@/lib/dummy";

export async function GET() {
  try {
    await pushDummyPosts();
    return NextResponse.json({ message: "Dummy posts seeded successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to seed dummy posts" }, { status: 500 });
  }
}
