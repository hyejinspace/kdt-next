import Image from "next/image";
import catSrc from "@/public/assets/images/reactquery02/cat.jpg"


export default function page() {
    return (
        <>
            {/*
             "/" resource의 "/" 경로는 public 경로를 의미.
            placeholder:로딩중 블러처리 
            priority: 지연모드 방지
            */}
            <Image
                src ={"/assets/images/reactquery02/cat.jpg"}
                alt="애옹" 
                width={600}
                height={300}
                priority
            />

            <Image
                src ={"/assets/images/reactquery02/cat.jpg"}
                alt="애옹" 
                width={600}
                height={300}
                className="bg-gray-200"
            />

            <Image
                src ={catSrc}
                alt="애옹" 
                width={600}
                height={300}
                placeholder="blur"
            />
        </>
    );
}