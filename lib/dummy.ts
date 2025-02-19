import { prisma } from "./prisma";

// Dummy data
const dummyPosts = [
  {
    title: "Getting Started with Next.js",
    content: "Next.js makes it easy to build fullstack React apps with server-side rendering.",
  },
  {
    title: "Understanding Prisma ORM",
    content: "Prisma is a next-generation ORM for Node.js and TypeScript.",
  },
  {
    title: "TypeScript for Beginners",
    content: "TypeScript helps you write safer and more maintainable JavaScript.",
  },
];

// Function to push dummy data to the database
export async function pushDummyPosts() {
  try {
    // Check if posts already exist to avoid duplicates
    const existingPosts = await prisma.post.findMany();
    if (existingPosts.length === 0) {
      // Insert dummy posts
      await prisma.post.createMany({
        data: dummyPosts,
      });
      console.log("Dummy posts added successfully!");
    } else {
      console.log("Posts already exist, skipping dummy data insertion.");
    }
  } catch (error) {
    console.error("Error inserting dummy posts:", error);
  } finally {
    await prisma.$disconnect();
  }
}
