// app/api/posts/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { title, content } = await req.json();

    const post = await prisma.post.create({
      data: { title, content },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
    try {
      const posts = await prisma.post.findMany();
      return NextResponse.json(posts, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
  }
  
  export async function PUT(req: NextRequest) {
    try {
      const { id, title, content } = await req.json();
  
      const updatedPost = await prisma.post.update({
        where: { id: Number(id) },
        data: { title, content },
      });
  
      return NextResponse.json(updatedPost, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
  }
  
  export async function DELETE(req: NextRequest) {
    try {
      const { id } = await req.json();
  
      await prisma.post.delete({
        where: { id: Number(id) },
      });
  
      return NextResponse.json({ message: "Post deleted" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
  }
  