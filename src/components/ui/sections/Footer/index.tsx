import { AppStoreIcon, FacebookIcon, PlayMarketIcon, TelegramIcon, TwitterIcon, YouTubeIcon } from '@/public/Icons'
import Link from 'next/link'
import React from 'react'
import { GrInstagram } from "react-icons/gr"
import Input from '../../Input'

const Footer = () => {
    const socialList = [
        {
            id: 1,
            icon: <FacebookIcon />,
            path: "#"
        },
        {
            id: 2,
            icon: <YouTubeIcon />,
            path: "#"
        },
        {
            id: 3,
            icon: <TelegramIcon />,
            path: "#"
        },
        {
            id: 4,
            icon: <TwitterIcon />,
            path: "#"
        },
        {
            id: 5,
            icon: <GrInstagram color='#cd2b67' />,
            path: "#"
        }
    ]

    const menuList = [
        {
            id: 1,
            title: "Ashyo haqida",
            path: "/"
        },
        {
            id: 2,
            title: "Foydalanish shartlari",
            path: "/"
        },
        {
            id: 3,
            title: "Maxfiylik va hafsizlik siyosati",
            path: "/"
        },
        {
            id: 4,
            title: "Mahsulotlarni va tovarlarni qaytarish siyosati",
            path: "/"
        },
        {
            id: 5,
            title: "Biz bilan aloqa",
            path: "/"
        }]
    return (
        <footer className='px-[130px] flex items-start justify-between py-[71px]'>
            <div className="w-[400px]">
                <span className='text-[20px] leading-[26px] mb-[21px] block'>Bizning ijtimoiy tarmoqlarda</span>
                <div className="flex items-center gap-[10px] mb-[40px]">
                    {socialList.map(item => (
                        <Link className='w-[44px] h-[40px] flex items-center bg-[#EBEFF3] rounded-[7px] py-[10px] px-[12px]' href={item.path} key={item.id}>{item.icon}</Link>
                    ))}
                </div>
                <span className='text-[20px] leading-[26px] mb-[21px] block'>Mobil ilovani yuklab oling</span>
                <div className='flex justify-center sm:justify-start gap-[12px] mb-[57px]'>
                    <button className='flex items-center gap-[12px] py-[17px] px-[30px] bg-[#EBEFF3] rounded-[10px]'>
                        <AppStoreIcon />
                        <span className='font-bold text-[16px] leading-[17.66px]'>App Store </span>
                    </button>
                    <button className='flex items-center gap-[12px] py-[17px] px-[30px] bg-[#EBEFF3] rounded-[10px]'>
                        <PlayMarketIcon />
                        <span className='font-bold text-[16px] leading-[17.66px]'>Google Play </span>
                    </button>
                </div>
                <p className='text-[12px] leading-[15px] text-[#00000066]'>© 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.</p>
            </div>
            <div className="w-[236px]">
                <span className='text-[20px] leading-[26px] mb-[18px] block'>Menyu</span>
                <div className="space-y-[12px] flex items-start flex-col">
                    {menuList.map(item => (
                        <Link className='text-[16px] leading-[17px] text-[#000000B2]' href={item.path} key={item.id}>{item.title}</Link>
                    ))}
                </div>
            </div>
            <div className="w-[314px]">
                <span className='text-[20px] leading-[26px] mb-[13px] block'>Aloqa</span>
                <Link className='text-[24px] leading-[28px] font-bold text-[#06172D] mb-[32px] block' href={"tel:+998(71)1234567"}>+998 (71) 123-45-67</Link>
                <strong className='text-[16px] leading-[20px] text-[#000000B2] mb-[12px] block'>Savolingiz bormi?</strong>
                <Input placeholder=' O’zingiz qiziqtirgan savollarni bering' type='text' extraClass='w-full'/>
            </div>
        </footer>
    )
}

export default Footer