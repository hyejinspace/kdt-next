// https://jsonplaceholder.typicode.com/users
// 유저 데이터 전체를 fetching하여 유저의 이름만 화면에 목록으로 출력
"use client";

import { getUsers, User } from "@/api/user/user.api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";


export default function UserContainer() {

    const {data: users, isLoading, refetch, error} = useQuery<User[]>({
        queryFn: getUsers,
        queryKey: ["users"]
    })
    const router = useRouter()

    const userNameList = users?.map(({id, name}) => (
        <li 
            key={id}
            className="cursor-pointer"
            onClick={() => {router.push(`/reactquery03/${id}`)}}
            >{name}</li>
    ))

    return (
        <>
            <ul>{userNameList}</ul>
        </>
    );
}