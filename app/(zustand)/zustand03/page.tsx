// https://jsonplaceholder.typicode.com/posts
// 데이터를 패칭 후 사용자가 입력한 id 번호의 해당하는 포스트 게시글을 전역 상태에 추가하고 화면에 출력하는 코드 만들기

"use client";

import usePostStore from "@/store/usePostStore";
import { useState } from "react";

const getPosts = async ():Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!response.ok) {
        throw new Error("posts fetching failed")
    }
    const datas = await response.json()
    return datas
}

export default function page() {

    const {addPost, posts, removePost} = usePostStore()
    const [value, setValue] = useState<number>(0)

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value))
    }
    const handleAddPost = async () => {
        const datas = await getPosts();
        const post = datas.find((data) => data.id === value);
        if (post) {
            addPost(post);
        }
    };

    return (
        <>
            <div className="mb-5">
                <input 
                    type="text" 
                    placeholder="가져올 포스트 번호" 
                    onChange={handleValueChange}/>

                <button 
                    className="w-50 h-10 bg-yellow-300" 
                    onClick={handleAddPost}>게시글 추가
                </button>
            </div>

            <div>
                {posts.map((post) => (
                    <div key={post.id} className="bg-amber-50 rounded-xl p-5 mb-5">
                        <span className="text-gray-600 bg-gray-600 text-white text-xs p-1 mb-2 inline-block">게시글 번호 {`${post.id}`}</span>
                        <h3 className="text-2xl">{`제목 : ${post.title}`}</h3>
                        <p>{`내용: ${post.body}`}</p>

                        <button className="w-20 h-7 bg-orange-700 text-white mt-2" onClick={() => removePost(post.id)}>삭제</button>
                    </div>
                ))}
            </div>
        </>
    );
}

// ================================================================================

// 쌤코드

// https://jsonplaceholder.typicode.com/posts
// 데이터를 패칭 후 사용자가 입력한 id 번호의 해당하는
// 포스트 게시글을 전역 상태에 추가하고 화면에 출력하는 코드 만들기
// "use client";
// import { Suspense, useState } from "react";
// import PostComponent from "./_component/PostContainer";
// import Loading from "@/components/common/Loading";

// export default function Page() {
//     return (
//         <>
//             <Suspense fallback={<Loading/>}>
//                 <PostComponent />
//             </Suspense>
            
//         </>
//     );
// }