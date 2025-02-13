"use client"
import React, { FormEvent, useContext } from 'react'
import { Button } from '@heroui/button'
import { Context } from '@/context/Context'
import { instance } from '@/src/hook/instance'
import Input from '../Input'


interface LoginType {
  onClose:() => any
}
const LoginInputs:React.FC<LoginType> = ({onClose}) => {
  const { setToken } = useContext(Context)

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = {
      email: (e.target as HTMLFormElement).email.value,
      password: (e.target as HTMLFormElement).password.value
    }
    instance().post(`/auth/login`, data).then(res => {
        // setToken(res.data.access_token)
        console.log(res.data);
        
      onClose()
    // console.log(res.data.access_token);
    
    })

  }
  return (
    <form onSubmit={handleLogin} className='space-y-5' autoComplete='off'>
      <Input name='email' placeholder='Enter your email' type='email' />
      <Input name='password' placeholder='Enter password' type='password' />
      <Button className='w-full fond-semibold text-[20px] text-white' color='warning' type='submit' size='lg'>Login</Button>
    </form>
  )
}

export default LoginInputs