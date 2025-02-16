import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import getToken from '../hook/getToken'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { instance } from '../hook/instance'
import { CartProductType, ProductItemType } from '../types/ProductsType'
import { IMAGE_API } from '../hook/getEnv'
import { RemoveIcon } from '@/public/Icons'

const CartProduct: FC<{ item: CartProductType, onQuantityChange: (productId: number, quantity: number) => void }> = ({ item, onQuantityChange }) => {
    const { token, userId } = getToken()
    const queryClient = useQueryClient()
    const [basketQuantity, setBasketQuantity] = useState<ProductItemType[]>([{ ...item.product, quantity: item.quantity }])

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
        const newData = {
            product_id: item.product_id,
            user_id: userId,
            quantity: item.quantity || 1,
            price: item.price
        }
        cartMutation.mutate(newData)
    }

    const handleIncrement = () => {
        setBasketQuantity(prevState =>
            prevState.map(product =>
                product.product_id === item.product.product_id ? { ...product, quantity: (product.quantity || 0) + 1 } : product)
        )
        item.quantity = (item.quantity || 0) + 1
        onQuantityChange(item.product.product_id, item.quantity)
    }

    const handleDecrement = () => {
        if ((item.quantity || 1) > 1) {
            setBasketQuantity(prevState =>
                prevState.map(product =>
                    product.product_id === item.product.product_id
                        ? { ...product, quantity: (product.quantity || 1) - 1 }
                        : product
                )
            )
            item.quantity = (item.quantity || 1) - 1
            onQuantityChange(item.product.product_id, item.quantity)
        }
    }

    useEffect(() => {
        const product = basketQuantity.find(product => product.product_id === item.product.product_id)
        if (product) {
            onQuantityChange(product.product_id, product.quantity || 0)
        }
    }, [basketQuantity])

    return (
        <div className='flex justify-between gap-[31px]'>
            <div className='w-[202px] h-[170px] bg-[#EBEFF3] rounded-[8px] flex items-center justify-center'>
                <Image src={`${IMAGE_API}/${item.product.image}`} alt='Cart img' width={115} height={115} />
            </div>
            <div className='flex flex-col py-[17px]'>
                <h2 className='text-[18px] text-[#545D6A] mb-[51px]'>{item.product.name}</h2>
                <div className='flex items-center gap-[10px]'>
                    <button onClick={() => handleCartClick(item.product)} className='w-[52px] h-[52px] flex items-center justify-center bg-[#EBEFF3] rounded-[7px]'>
                        <RemoveIcon />
                    </button>
                </div>
            </div>
            <div className='py-[17px] '>
                <div className='flex items-center gap-[10px] mb-[51px]'>
                    <strong className='font-bold text-[24px]'>{item.product.price * item.quantity}</strong> <span className='text-[14px]'>USZ</span>
                </div>
                <div className='flex items-center gap-[28px]'>
                    <button onClick={handleDecrement} className='w-[60px] text-[24px] h-[40px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>-</button>
                    <button className='w-[60px] text-[24px] h-[40px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>{item.quantity}</button>
                    <button onClick={handleIncrement} className='w-[60px] text-[24px] h-[40px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartProduct