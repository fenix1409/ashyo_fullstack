import React, { FormEvent, useContext, useState } from 'react'
import { Context } from '@/context/Context'
import { Toaster } from "react-hot-toast"
import { BasketCartIcon, CompareIcon, LikeIcon, Logo, ProfileIcon } from '@/public/Icons'
import Modal from '../../Modal/Modal'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import { getLikes } from '@/src/service/getLikes'
import { getCarts } from '@/src/service/getCarts'
import { auth } from '@/src/service/auth'
import { useRouter } from 'next/navigation'

const Actions = () => {
    const { likeList } = getLikes()
    const { cartList } = getCarts()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const { setToken } = useContext(Context)
    const [authStatus, setAuthStatus] = useState<"sign_in" | "sign_up">("sign_in")
    const [profileModal, setProfileModal] = useState<boolean>(false)
    const actionList = [
        {
            id: 1,
            bageCount: 2,
            icon: <CompareIcon />
        },
        {
            id: 2,
            bageCount: likeList.length,
            icon: <LikeIcon />
        },
        {
            id: 3,
            bageCount: cartList.length,
            icon: <BasketCartIcon />
        },
        {
            id: 4,
            bageCount: null,
            icon: <ProfileIcon />
        },
    ]

    function handleActionClick(id: number) {
        if (id == 4) {
            setProfileModal(true)
        }
        else if(id == 2){
            router.push('/like')
        }
        else if(id == 3){
            router.push('/cart')
        }
    }

    async function handleAuthSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (authStatus == "sign_in") {
            setIsLoading(true)
            const data = {
                email: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value
            }
            const result = await auth("sign_in", data, setToken);
            console.log(data);
            if (result?.status == 201 || result?.status == 200) {
                setProfileModal(false);
                (e.target as HTMLFormElement).reset()
                setIsLoading(false)
            }
        }
        else if (authStatus == "sign_up") {
            const data = {
                fullname: (e.target as HTMLFormElement).fullname.value,
                email: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value
            }
            const result = await auth("sign_up", data, setToken);
            if (result?.status == 201 || result?.status == 200) {
                setAuthStatus("sign_in");
                (e.target as HTMLFormElement).reset()
            }
        }
    }
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='hidden sm:flex gap-[15px]'>
                {actionList.map(item => (
                    <div onClick={() => handleActionClick(item.id)} key={item.id} className='w-[50px] h-[48px] relative cursor-pointer bg-[#EBEFF3] rounded-[6px] flex items-center justify-center'>
                        {item.icon}
                        {item.bageCount && <div className='absolute w-[20px] h-[20px] bg-[#E81504] text-white font-bold text-[10px] flex items-center justify-center rounded-full -top-[10px] -right-[10px]'>{item.bageCount != 0 && item.bageCount}</div>}
                    </div>
                ))}
            </div>
            <Modal modalClass={`!h-[420px]`} open={profileModal} setOpen={setProfileModal}>
                <div className='flex items-center mt-[20px] justify-center'>
                    <div><Logo /></div>
                    <span className='text-[#0F4A97] font-bold text-[29px]'>Ashyo</span>
                </div>
                <ul className='flex mt-2 items-center justify-center gap-5'>
                    <li onClick={() => setAuthStatus("sign_in")} className={`cursor-pointer text-[20px] text-[#0F4A97] font-semibold border-b-[2px] ${authStatus == "sign_in" ? "border-[#0F4A97]" : "border-transparent"}`}>Sign In</li>
                    <li onClick={() => setAuthStatus("sign_up")} className={`cursor-pointer text-[20px] text-[#0F4A97] font-semibold border-b-[2px] ${authStatus == "sign_up" ? "border-[#0F4A97]" : "border-transparent"}`}>Sign Up</li>
                </ul>
                <form onSubmit={handleAuthSubmit} className='px-5 mt-5 space-y-2'>
                    {authStatus == "sign_in" && <SignIn isLoading={isLoading} />}
                    {authStatus == "sign_up" && <SignUp isLoading={isLoading} />}
                </form>
            </Modal>
        </>
    )
}

export default Actions