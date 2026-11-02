import { create } from "zustand";
import { combine, persist } from "zustand/middleware";


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


const usePostStore = create(
    persist(
        combine(
            // 1. 초기 상태
            {
                posts: [] as Post[]
            },
            // 2. 상태 변경 함수
            (set) => ({
                addPost: (post: Post) => set((state) => ({
                    posts: state.posts.some((item) => item.id === post.id)
                    ? state.posts
                    : [...state.posts, post]
                })),
                removePost: (id: number) => set((state) => ({
                    posts: state.posts.filter((post) => post.id !== id)
                }))
            })
        ),
        {
            name: "posts-storage"
        }
    )
)

export default usePostStore;



// -----------------------------------------------------------------------------
// 쌤코드


// import { Post } from "@/api/post/post.api";
// import { create } from "zustand";
// import { combine } from "zustand/middleware";
// import { persist } from "zustand/middleware";

// const usePostStore = create(
//     persist(
//         combine(
//             {
//                 post: null as null | Post,
//                 posts: null as null | Post[],
//                 selectedId: null as null | number
//             },
//             (set, get) => ({
//                 setPost: (post: Post | undefined) => set({post: post}),
//                 setPosts: (posts: Post[] | null) => set({posts: posts})
//             })
//         ),
//         {
//             name: "posts-storage"
//         }
//     )
// )

// export default usePostStore