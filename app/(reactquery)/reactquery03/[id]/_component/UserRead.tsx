"use client";

import { getUser, getUsers, User } from "@/api/user/user.api";
import ErrorComponent from "@/components/common/ErrorComponent";
import Loading from "@/components/common/Loading";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface UserReadProps {
    id: string;
}

export default function UserRead({id}: UserReadProps) {
    const {data: user, isLoading, error} = useQuery<User>({
        queryFn: () => getUser(id),
        queryKey: ["user", id],
        retry: 3,
        // enabled: !!id, //아이디가 없을땐 요청을 막는 코드
        // initialData: 
    })
    const router = useRouter()

    if(isLoading) return <Loading/>
    if(error) return <ErrorComponent/>

    
    return (
        <>
            <button 
                className="w-50 h-10 bg-blue-500 text-white rounded-2xl cursor-pointer" 
                onClick={() => router.push("/reactquery03")}>뒤로가기</button>
            <p>{user?.id}번 유저</p>
            <p>이름: {user?.name}</p>
            <p>이메일: {user?.email}</p>
            <p>주소: {user?.company.name}</p>
        </>
    );
}