"use client"
import { Context } from '@/context/Context'
import Link from 'next/link'
import React, { useContext } from 'react'
import Button from '../../Button'
import { ArrowIcon, Logo, MenuIcon } from '@/public/Icons'
import Search from './Search'
import Actions from './Actions'

const HeaderMain = () => {
  const {showCategory, setShowCategory} = useContext(Context)
  return (
      <div className='containers !pb-[25px] !pt-[64px] sm:!py-[30px]  px-[130px]'>
          <div className='flex items-center justify-between'>
              <Link className='flex items-center' href={'/'}>
                  <div><Logo/></div>
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