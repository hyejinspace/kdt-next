"use client"

import { useRouter } from "next/navigation";

export default function page() {

    const router = useRouter()

    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-10"></div>
            <div 
                className="
                w-90
                    bg-white
                    fixed left-1/2 top-1/2 -translate-1/2 z-20
                    p-10
                "
            >
                <button 
                    onClick={() => router.push("/modal/login")}
                    className="bg-red-400 p-1"
                >
                    X
                </button><br/>
                모달페이지
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </>
    );
}