//사용자가 이름을 입력하고 엔터를 누르면 이름뒤에 "님"자를 붙여서 p태그에 반영하기
"use client"

import { useRef, useState } from "react";

export default function Name() {
    const [name, setName] = useState("")
    const nameRef = useRef<HTMLParagraphElement>(null)
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const addNim = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            // if(name.endsWith("님")){
            //     return;
            // }
            setName(name + "님") 
            // setName(name.replaceAll("님","") + "님")  //근데 이름끝에 님이있으면 사라짐;; ㄷㄷ
        }
    }
    // null: 초기값 ????????
    // console.log(nameRef.current) //뭔소리야 ㅠㅠ

    const handlePClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(nameRef.current?.innerText)
    }
    return (
        <>
            <input 
                className="border border-black"
                type="text" placeholder="이름을 입력하세요." 
                onChange={handleNameChange}
                onKeyDown={addNim}
            />
            <p ref={nameRef}>{name}</p>
            <button onClick={handlePClick}>버튼 누름!</button>
        </>
    );
}