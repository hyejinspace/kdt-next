export const instant = false

import { Suspense } from "react";
import TodoRead from "./_component/TodoRead";
import Loading from "@/components/common/Loading";

interface Params {
    params: Promise<{id: string}>
}

export default async function page({params}: Params) {
    const {id} = await params;
    console.log(id)

    return (
        <Suspense fallback={<Loading/>}>
            <TodoRead id={id}/>
        </Suspense>
    );
}