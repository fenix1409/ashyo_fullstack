"use client"
import { Context } from '@/src/context/Context'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import Button from '../../Button'
import { ArrowIcon, MenuIcon } from '@/public/Icons'
import Search from './Search'
import Actions from './Actions'

const HeaderMain = () => {
  const {showCategory, setShowCategory} = useContext(Context)
  return (
      <div className='containers !pb-[25px] !pt-[64px] sm:!py-[30px]'>
          <div className='flex items-center justify-between'>
              <Link className='flex items-center' href={'/'}>
                  <Image className='scale-[1.5]' style={{width:"48px", height:"48px"}} src="/logo.svg" alt="Site Logo" width={48} height={48} priority/>
                  <span className='text-[39px] font-extrabold leading-[42.19px] text-[#134E9B]'>Ashyo</span>
              </Link>
              <div className='hidden xl:flex items-center gap-[10px]'>
                  <Button onClick={() => setShowCategory(true)} extrClass='sm:!py-[18px]' type='button' title='Kategorya' iconPostion='right' icon={<ArrowIcon classList={`${showCategory && "rotate-[-180deg]"}`}/>} />
                  <Search/>
              </div>
              <div className='flex items-center gap-[20px]'>
                <Actions/>
                <button className='xl:hidden'> <MenuIcon/> </button>
              </div>
          </div>
    </div>
  )
}

export default HeaderMain