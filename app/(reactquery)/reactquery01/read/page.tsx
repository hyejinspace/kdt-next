import { Suspense } from "react";
import TodoRead from "./_component/TodoRead";

export default function page() {
    return (
        <Suspense>
            <TodoRead />
        </Suspense>
    );
}