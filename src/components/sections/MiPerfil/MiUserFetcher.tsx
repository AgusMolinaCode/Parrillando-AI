import React, { useEffect, useState } from "react";
import { currentUser } from "@clerk/nextjs";
import { User } from "@/libs/interfaces/User";

async function getUser(): Promise<User[]> {
  const response = await fetch("http://localhost:3000/api/users");
  const users = await response.json();
  return users;
}

export default function UserFetcher() {
  const [matchingUser, setMatchingUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const users = await getUser();
      const user = await currentUser();
      const userCode = user?.id;
      const matchingUser = users.find((user) => user.clerkId === userCode);
      setMatchingUser(matchingUser || null);
    };

    fetchUser();
  }, []);

  return matchingUser ? matchingUser.id : null;
}