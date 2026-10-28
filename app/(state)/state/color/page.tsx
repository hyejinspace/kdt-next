// 사용자가 입력한 색깔을 이용하여 폰트 색상 변경하기
"use client" 

import { useState } from "react";

export default function page() {
    const [color, setColor] = useState("")

    const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    return (
        <>
            <h1 style={{ color: color }}>색상 적용 대상!😎</h1>
            <div>
                <span>색상:</span>
                <input 
                    className="border border-gray-600 rounded-lg" 
                    type="text"
                    placeholder="색상을 입력하세요."
                    onChange={handleColorInput}
                />
            </div>
        </>
    );
}