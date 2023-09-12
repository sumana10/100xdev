import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Fetch all users
  const users = await prisma.user.findMany({});
  console.log("All users:", users);

  // Fetch a specific user by id
  const userId = 1;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      posts: true, // Assuming you want to include the user's posts
    },
  });

  console.log("User with id 1:", user);
}

main();
