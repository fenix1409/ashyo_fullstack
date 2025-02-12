import { Location } from '@/public/Icons'
import { HeaderTopListType } from '@/src/types/HeaderType'
import Link from 'next/link'
import React from 'react'

const HeaderTop = () => {
    const navlist: HeaderTopListType[] = [
        {
            id: 1,
            title: "Tashkent",
            path: '/',
            icon: <Location />
        },
        {
            id: 2,
            title: "About Us",
            path: '/aboutus',
            icon: null
        },
        {
            id: 3,
            title: "Products",
            path: '/products',
            icon: null
        },
        {
            id: 4,
            title: "Contacts",
            path: '/contact',
            icon: null
        }

    ]
    return (
        <div className='px-[130px] py-[11px] bg-[#EBEFF3] flex items-center justify-between'>
            <ul className='flex items-center gap-[15px]'>
                {navlist.map((item: HeaderTopListType) => (
                    <Link className={`flex items-center text-[14px] text-[#545D6A] leading-[16.41px] ${item.icon && "gap-[11px]"}`} href={item.path}>
                        {item.icon && item.icon}
                        <span>{item.title}</span>
                    </Link>
                ))}
            </ul>
            <div className='flex items-center gap-[25px]'>
                <Link className='text-[14px] font-semibold leading-[18.2px] text-[#545D6A]' href={'tel:+998711234567'}>+998 (71) 123-45-67</Link>
                <select className='bg-[#EBEFF3] outline-none text-[#545D6A]'>
                    <option value="uz">Uz</option>
                    <option value="uz">Ru</option>
                    <option value="uz">Eng</option>
                </select>
            </div>
        </div>
    )
}

export default HeaderTop