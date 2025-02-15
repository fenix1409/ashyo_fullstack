"use client"
import { getCategories } from '@/src/service/getCategories'
import { useRouter } from 'next/navigation'
import React from 'react'
import './style.css'
import { CategoryType } from '@/src/types/CategoryType'
import Image from 'next/image'
import { IMAGE_API } from '@/src/hook/getEnv'

const CategoryMenu = () => {
    const { categories } = getCategories()
    const router = useRouter()
    return (
        <div className='containers px-[130px]'>
            <div className="category-wrapper">
                {categories.map((item: CategoryType) => (
                    <div onClick={() => router.push(`category/${item.id}`)} key={item.id} className="relative overflow-hidden category-item p-5 bg-slate-400 rounded-md cursor-pointer">
                        <span className='border-[1px] border-white rounded-[30px] px-[10px] sm:px-[15px] text-white absolute top-[9px] sm:top-[14px] left-[10px] text-[11px] sm:text-[14px] py-[4px]'>{item.name}</span>
                        <Image className='object-contain !w-[150px] !h-[151px] sm:!w-[294px] sm:!h-[294px] bottom-[-10px] absolute sm:bottom-[-70px] right-0' style={{width:"294px", height:"294px"}} src={`${IMAGE_API}/${item.image}`} alt='CategoryImg' width={294} height={294} priority/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryMenu