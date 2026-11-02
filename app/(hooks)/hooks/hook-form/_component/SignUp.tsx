"use client"

import { useForm } from "react-hook-form";

interface formValues {
    email: string;
    password: string;
    passwordConfirm: string;
    hobbies: string[];
}

//회원가입

export default function SignUp() {

    const {
        register, handleSubmit, getValues,
        formState : {
            isSubmitting, isSubmitted, errors
        }
    } = useForm({mode: "onChange"})

    const onsubmit = async (formValues: any) => {
        console.log("formValues", formValues)
        //데이터 통신(fetch) - react-query
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
    //대소문자특문 포함 8글자이상 비번 설정하는법
    

    return (
        <form 
            onSubmit={handleSubmit(onsubmit)}
            className="flex flex-col gap-2 m-5 w-80"
        >
            <label className="flex flex-col">
                <p className="text-[20px] font-bold">이메일</p>
                <input 
                    type="text" id="email" 
                    className="border rounded-sm  p-2" 
                    placeholder="이메일을 입력하세요."
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: emailRegex,
                            message: "이메일 양식에 맞게 입력해주세요."
                        }
                    })}
                />
                
                {errors?.email?.type === "required" && (
                    <p className="text-red-500">이메일을 입력하세요.</p>
                )}
                {errors?.email?.type === "pattern" && (
                    <p className="text-red-500">이메일을 양식에 맞게 입력하세요.</p>
                )}

            </label>
            <label className="flex flex-col">
                <p className="text-[20px] font-bold">비밀번호</p>
                <input 
                    type="password" id="password" 
                    className="border rounded-sm  p-2" 
                    placeholder="비밀번호를 입력하세요."
                    {...register("password",{
                        required: true,
                        pattern: {
                            value: passwordRegex,
                            message: "올바른 비밀번호를 입력하세요."
                        }
                    })}
                />
                {errors?.password?.type === "required" && (
                    <p className="text-red-500">비밀번호를 입력하세요.</p>
                )}
                {errors?.password?.type === "pasttern" && (
                    <p className="text-red-500">비밀번호는 소문자,숫자,특수문자(!@#)를 각 하나 포함한 8자리 이상이어야 합니다.</p>
                )}
            </label>
            <label className="flex flex-col">
                <p className="text-[20px] font-bold">비밀번호 확인</p>
                <input 
                    type="password" id="password-confirm" 
                    className="border rounded-sm  p-2" 
                    placeholder="비밀번호를 입력하세요."
                    {...register("passwordConfirm", {
                        required: true,
                        validate: {
                            matchPassword: (passwordConfirm) => {
                                const {password} = getValues()
                                console.log(password, passwordConfirm, password === passwordConfirm)
                                return password === passwordConfirm
                            }
                        }
                    })}
                />
                {errors?.passwordConfirm && (
                    <p className="text-red-500">비밀번호가 일치하지 않습니다.</p>
                )}
            </label>

            <div className="border not-only:p-3 border-gray-400 mt-3">
                <p className="text-[20px] font-bold">취미(선택사항)</p>
                <div className="flex gap-2">
                    <label className="flex gap-1 cursor-pointer">
                        <input type="checkbox" value="football" {...register("hobbies")}/>
                        <span>축구</span>
                    </label>
                    <label className="flex gap-1 cursor-pointer">
                        <input type="checkbox" value="drawing" {...register("hobbies")}/>
                        <span>드로잉</span>
                    </label>
                    <label className="flex gap-1 cursor-pointer">
                        <input type="checkbox" value="singing" {...register("hobbies")}/>
                        <span>노래</span>
                    </label>
                </div>
            </div>

            <button 
                type="submit"
                disabled={isSubmitting}
                className="w-40 h-12 bg-purple-400 rounded-2xl text-white hover:bg-purple-500 cursor-pointer font-bold mt-5"
            >
                {isSubmitting ? "제출중" : "회원가입"}
            </button>
        </form>
    );
}