"use client";

import { useQuery } from "@tanstack/react-query";
import { Todo } from "../../_component/TodoQueryContainer";
import Loading from "@/components/common/Loading";
import ErrorComponent from "@/components/common/ErrorComponent";

interface TodoReadProps {
    id: string;
}

const getTodoById = async (id: string) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
    if (!response.ok) {
        throw new Error("Todo fetching failed");
    }

    return await response.json();
};

export default function TodoRead02({ id }: TodoReadProps) {
    const { data, isLoading, refetch, error } = useQuery<Todo>({
        queryFn: () => getTodoById(id),
        queryKey: ["todo", id],
    });

    if (isLoading) return <Loading />;
    if (error) return <ErrorComponent />;
    if (!data) return <p>데이터가 없습니다.</p>;

    // data가 존재하는 것을 확인한 후 구조 분해
    const { completed, title, userId } = data;

    return (
        <>
            <h1>
                [{id}번 게시글] <br />
                {title}
            </h1>
            <p>{completed ? "할일 완료" : "미완료"}</p>
            <p>사용자 ID: {userId}</p>
        </>
    );
}