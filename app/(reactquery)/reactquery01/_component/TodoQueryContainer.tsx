// https://jsonplaceholder.typicode.com/todos
// ※ 권장
"use client"

import ErrorComponent from "@/components/common/ErrorComponent"
import Loading from "@/components/common/Loading"
import { useQuery } from "@tanstack/react-query"
import TodoQuery from "./TodoQuery";

export interface Todo {
    userId:    number;
    id:        number;
    title:     string;
    completed: boolean;
}

const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    if(!response.ok) {
        throw new Error("Fetching failed") 
    }
    const datas = await response.json()
    return datas 
}

export default function TodoQueryContainer() {
    const {data, isLoading, error} = useQuery<Todo[]>({
        queryKey: ["todos"], // refetching key
        queryFn: getTodos, // fetch function
    })

    // 1. TodoQuery.tsx 컴포넌트를 만들고 컴포넌트로 분리하기
    // 2. 다이나믹 라우트를 활용해서 데이터 fetch하기

    // 옵셔널 체이닝 ?.: 마운트시 빈배열 또는 데이터 접근이 안되서 생기는 오류를 안전하게 접근하도록 처리
    const todoList = data?.map((todo: Todo, i: number) => (
        <TodoQuery key={i} todo={todo}/>
    ))

    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />

    return (
        <>
            <ul>{todoList}</ul>
        </>
    );
}