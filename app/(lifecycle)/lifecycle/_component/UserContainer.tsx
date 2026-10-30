// "https://jsonplaceholder.typicode.com/users"
// 데이터를 fetching하고, 각각 유저 데이터를 컴포넌트로 분리하여 화면에 이름만 출력하기
"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export default function UserContainer() {
    const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data: User[] = await response.json();

      setUsers(data);
    };
    getUsers();
  }, []);

  return (
        <ul className="p-20">
            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </ul>
    );
}


