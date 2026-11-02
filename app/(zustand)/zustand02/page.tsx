"use client"

import useCountStore from "@/store/useCountStore";

// 전역 상태를 이용한 카운트
export default function page() {

    const count = useCountStore((state) => state.count)

    return (
        <>
            <h1>다른페이지: {count}</h1>
        </>
    );
}