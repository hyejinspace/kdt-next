"use client"

import { useEffect, useState } from "react";

export default function page() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(seconds)
            setSeconds((prev) => {
                if(prev >= 4){
                    clearInterval(interval)
                }
                return prev + 1
            })
        }, 1000)
    }, [])

    return (
        <>
            <h1>경과 시간: {seconds}초</h1>
        </>
    );
}