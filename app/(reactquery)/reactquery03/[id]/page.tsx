export const instant = false

import { Suspense } from "react";
import Loading from "@/components/common/Loading";
import UserRead from "./_component/UserRead";

interface Params {
    params: Promise<{id: string}>
}


export default async function page({params}: Params) {
    const {id} = await params;

    return (
        <Suspense fallback={<Loading/>}>
            <h1>게시글 상세 정보</h1>
            <UserRead id={id}/>
        </Suspense>
    );
}