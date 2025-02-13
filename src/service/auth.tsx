"use client"
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { SignInType, SignUpType } from "../types/Authtype";
import { instance } from "../hook/instance";

export const auth = (status: "sign_in" | "sign_up", data: SignInType | SignUpType, setToken:Dispatch<SetStateAction<string | null>>) => {

    if (status == "sign_in" && setToken) {
        return instance().post(`/auth/login`, data).then(res => {
            setToken(res.data.accessToken);
            localStorage.setItem("userId", res.data.user.id)
            toast.success(`Welcome ${res.data.user.fullname}`)
            return res
        }).catch(() => {
            toast.error("User not found!")
        })
    }
    else{
        return instance().post(`/auth/register`, data).then(res => {
            toast.success(`Welcome ${res.data.user.fullname}`)
            return res
        }).catch(() => {
            toast.error("Something is wrong!")
        })
    }
}