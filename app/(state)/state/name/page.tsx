"use client" 

import { useState } from "react";

export default function page() {
    const [name, setName] = useState("")
    const [result, setResult] = useState("")    

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleKeyDown  = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setResult(name)
        } 
    }

    //사용자가 입력한 글자를 화면에 p태그 출력하기
    // 사용자가 입력한 키가 엔터라면 사용자가 입력한 글자를 화면에 p태그 출력하기
    return (
        <>
            <div>
                <span>이름</span>
                <input 
                    type="text" 
                    className="border border-gray-600"
                    placeholder="이름을 입력하세요"
                    onChange={handleNameChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <p>{result}</p>
        </>
    );
}




//쌤 정답

// "use client"

// import { useState } from "react";

// export default function page() {

//     // 사용자가 입력한 key가 Enter라면 
//     // 사용자가 입력한 글자를 화면에 p태그에 출력하기
//     const [name, setName] = useState("")
//     const [displayName, setDisplayName] = useState("")
//     const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setName(e.target.value)
//     }

//     const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if(e.key === "Enter"){
//             // setName(e.currentTarget.value)
//             setDisplayName(name)
//         }
//     }


//     return (
//         <>
//             <div>
//                 <span>이름</span>
//                 <input 
//                     className="border border-gray-600 rounded-lg" 
//                     type="text" 
//                     placeholder="이름을 입력하세요"
//                     onChange={handleNameChange}
//                     onKeyDown={handleNameKeyDown}
//                 />
//             </div>
//             <p>{displayName}</p>
//         </>
//     );
// }