import Link from "next/link";
import type { Todo } from "./TodoQueryContainer02";

interface TodoQueryProps {
    // key: number;
    todo: Todo;
}

export default function TodoQuery02({ todo }: TodoQueryProps) {
    const { id, title, userId, completed } = todo;
    return (
        // 쿼리 스트링
        <Link href={`/reactquery01/read?id=${id}`}>
            {todo.title}
            <br />
        </Link>
    );
}
