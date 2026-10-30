"use client";

import { useQuery } from "@tanstack/react-query";
import { Photo } from "../../_component/PhotoContainer";
import Loading from "@/components/common/Loading";
import ErrorComponent from "@/components/common/ErrorComponent";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PhotoReadProps {
    id: string;
}

const gtePhoto = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await response.json()
    return photo
}

export default function PhotoRead({id}: PhotoReadProps) {
    const {data: photo, isLoading, error} = useQuery<Photo>({
        queryFn: () => gtePhoto(id),
        queryKey: ["photo", id],
    })

    const router = useRouter()

    if(isLoading) return <Loading/>
    if(error) return <ErrorComponent/>

    return (
        <>
            <button className="w-50 h-10 bg-blue-500 text-white rounded-2xl cursor-pointer" onClick={() => router.push("/reactquery02/image02")}>뒤로가기</button>
            <p>{photo?.id}번 게시글 제목 : {photo?.title}</p>
            {/* ! : 단언하는것. 이 파일은 무조건 들어오니까 그냥 임포트해 */}
            <Image src={photo?.url!} alt="이미지" width={600} height={600} className="bg-gray-100"/>
        </>
    );
}