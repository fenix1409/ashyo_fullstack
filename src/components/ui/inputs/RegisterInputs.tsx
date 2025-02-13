"use client"
import React, { FormEvent, SetStateAction } from 'react'
import { Button } from '@heroui/button'
import { instance } from '@/src/hook/instance'
import Input from '../Input'

interface CreateUserType {
    setIsLogin:React.Dispatch<SetStateAction<"login" | "register">>
}
const CreateUserInputs: React.FC<CreateUserType> = ({setIsLogin}) => {

    function handleCreateUser(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = {
            fullName: (e.target as HTMLFormElement).fullName.value,
            email: (e.target as HTMLFormElement).email.value,
            password: (e.target as HTMLFormElement).password.value
        }
        instance().post('/auth/register', data).then(() => setIsLogin("login"))
        console.log(data)
        
    }
    return (
        <form onSubmit={handleCreateUser} className='space-y-5' autoComplete='off'>
            <Input name='fullName' placeholder='Enter full name' type='text'/>
            <Input name='email' placeholder='Enter email' type='email' />
            <Input name='password' placeholder='Enter password' type='password' />
            <Button className='w-full fond-semibold text-[20px] text-white' color='warning' type='submit' size='lg'>Create User</Button>
        </form>
    )
}

export default CreateUserInputs