import Link from "next/link";
import type { Todo } from "./TodoQueryContainer";

interface TodoQueryProps {
    // key: number;
    todo: Todo;
}

export default function TodoQuery({todo}: TodoQueryProps) {
    const {id, title, completed, userId} = todo
    return <Link href={`/reactquery01/${id}`}>{title}</Link>
}