"use client"
import { BasketCartIcon, CompareIcon, LikeIcon } from '@/public/Icons'
import Button from '@/src/components/ui/Button'
import { IMAGE_API } from '@/src/hook/getEnv'
import getToken from '@/src/hook/getToken'
import { instance } from '@/src/hook/instance'
import { getLikes } from '@/src/service/getLikes'
import { ProductItemType } from '@/src/types/ProductsType'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FcLike } from 'react-icons/fc'

const Like = () => {
    const like = getLikes()
    const router = useRouter()
    const { token, userId } = getToken()
    const queryClient = useQueryClient()

    const likeMutation = useMutation({
        mutationFn: (data: { productId: number, userId: number }) => instance().post('/like/toggle', data, {
            headers: { "Authorization": `Bearer ${token}` }
        }),
        onSuccess: (() => {
            queryClient.invalidateQueries({ queryKey: ['products-items'] })
            queryClient.invalidateQueries({ queryKey: ['like_list'] })
        })
    })

    const cartMutation = useMutation({
        mutationFn: (data: { product_id: number, user_id: number }) => instance().post('/cart-item', data, {
            headers: { "Authorization": `Bearer ${token}` }
        }),
        onSuccess: (() => {
            queryClient.invalidateQueries({ queryKey: ['products-items'] })
            queryClient.invalidateQueries({ queryKey: ['carts_list'] })
        })
    })

    function handleCartClick(item: ProductItemType) {
        const newData = { product_id: item.product.id, user_id: userId, quantity: 1, price: 1 }
        cartMutation.mutate(newData)
    }

    function handleLikeClick(productId: number) {
        const data = { productId, userId }
        likeMutation.mutate(data)
    }
    return (
        <div className='px-[130px] flex items-center gap-[30px]'>
            {like && like.likeList.length ? like.likeList.map((item: ProductItemType) => (
                <div key={item.id} className='w-full sm:w-[273px] relative product-item duration-300'>
                    <div className='bg-[#EBEFF3] relative rounded-[8px] mb-[16px] flex items-center justify-center h-[280px]'>
                        <Image onClick={() => router.push(`/products/${item.id}`)} className='product-img duration-300' style={{ width: "202px", height: "202px" }} src={`${IMAGE_API}/${item.image}`} width={202} height={202} alt='Product img' priority />
                    </div>
                    <p className='text-[18px] font-normal leading-[19px] text-[#545D6A] mb-[28px]'>{item.product ? item.product.name : item.name}</p>
                    <div className='flex justify-between'>
                        <strong className='text-[20px] leading-[26px] line-clamp-2 font-bold'>{item.price} usz</strong>
                        <div className='flex gap-[10px]'>
                            <Button extrClass='!w-[52px] !h-[44px] !p-0 !bg-transparent border-[2px] border-[#EBEFF3] !text-slate-500' type='button' icon={<CompareIcon />} iconPostion='left' />
                            <Button onClick={() => handleCartClick(item)} extrClass='!w-[52px] !h-[44px] !p-0 text-white' type='button' icon={<BasketCartIcon />} iconPostion='left' />
                        </div>
                    </div>
                    <button onClick={() => handleLikeClick(item.id)} className={`absolute top-[15px] right-[15px]`}> {item.product?.is_liked ? <FcLike size={25} /> : <LikeIcon />}</button>
                </div>
            ))
                : <p className='text-[30px] font-bold leading-[45px] mx-auto my-[70px]'>There is no liked Products</p>
            }
        </div>
    )
}

export default Like