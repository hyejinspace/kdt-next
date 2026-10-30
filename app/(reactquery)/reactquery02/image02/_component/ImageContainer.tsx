"use client";

import ErrorComponent from "@/components/common/ErrorComponent";
import Loading from "@/components/common/Loading";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const getImages = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/`)
    if(!response.ok) {
        throw new Error("getImages fetching failed")
    }
    const datas = await response.json()
    return datas
}
// const imagePromise = getImages()

export interface image {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export default function ImageContainer() {
    const { data: images, isLoading, error } = useQuery({
            queryFn: getImages,
            queryKey: ["images"]
        })
    
        if(isLoading) return <Loading />
        if(error) return <ErrorComponent />

    const imageList = images.slice(0, 10).map((image: image, i: any) => (
        <li className={`flex items-center bg-amber-50`}>
            <Image
                className="mr-5"
            
                key={image.id} 
                src={`https://picsum.photos/seed/${i + 1}/600`}
                alt={image.title}
                width={150}
                height={150}
            />
            <p>{image.title}</p>
        </li>
    ))

    return (
        <>
            <ul className="grid grid-cols-2 gap-3">{imageList}</ul>
        </>
    );
}
