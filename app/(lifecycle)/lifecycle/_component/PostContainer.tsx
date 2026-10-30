// // "https://jsonplaceholder.typicode.com/users"
// // 데이터를 fetching하고, 각각 유저 데이터를 컴포넌트로 분리하여 화면에 이름만 출력하기
"use client"

import { Suspense, use, useEffect, useState } from "react";
import User from "./User";
import Loading from "@/components/common/Loading";
import Link from "next/link";

export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

const getDatas = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const datas: Post[] = await response.json()
    return datas
}   
const postPromise = getDatas()

export default function PostContainer() {
    const posts = use<Post[]>(postPromise)
    const postList = posts.map((post: Post, i) => (
        // <a key={i} href={`/lifecycle/side-effect/${post.id}`}>{post.title}</a>
        // 페이지 이동시 Link 태그(※필수) 데이터만 불러오는 태그
        <Link key={i} href={`/lifecycle/side-effect/${post.id}`}>{post.title}</Link>
    ))

    return (
        <Suspense fallback={<Loading />}> // 로딩일때 ,데이터 가져오는게 느릴때, 도와주는 함수 suspense
            <ul>{postList}</ul>
        </Suspense>
    );
}