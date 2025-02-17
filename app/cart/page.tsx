"use client"
import CartProduct from '@/src/components/CartProduct';
import Button from '@/src/components/ui/Button';
import { getCarts } from '@/src/service/getCarts'
import { getUsers } from '@/src/service/getUsers';
import { CartProductType, ProductItemType } from '@/src/types/ProductsType';
import React, { useEffect, useState } from 'react'

const Cart = () => {
    // const { cartList } = getCarts()
    const carts = getUsers()
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({})
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const handleQuantityChange = (productId: number, quantity: number) => {
        setQuantities(prevQuantities => ({ ...prevQuantities, [productId]: quantity }))
    }
    useEffect(() => {
        const total = carts.cartList.reduce((acc: number, item: CartProductType) => {
            const quantity = quantities[item.product.product_id] || item.quantity
            return acc + (item.product.price * item.quantity)
        }, 0)
        setTotalPrice(total)
    }, [quantities, carts.cartList])
    return (
        <div className='px-[130px]'>
            <h2 className='font-bold text-[22px] mb-[36px]'>Savat</h2>
            <div className='flex justify-between'>
                <div className='w-[70%] space-y-[30px]'>
                    {carts.cartList.map((item: CartProductType) => <CartProduct key={item.id} item={item} onQuantityChange={handleQuantityChange} />)}
                </div>
                <div className='w-[25%]'>
                    <div className='w-full bg-[#EBEFF3] p-[40px] rounded-[7px]'>
                        <h2 className='font-bold text-[25px] text-center mb-[42px]'>Sizni haridingiz</h2>
                        <ul className='flex mb-[41px] items-center justify-between'>
                            <li className='text-[12px] font-normal'>Yetkazib berish:</li>
                            <li className='text-[18px] font-semibold'>Bepul</li>
                        </ul>
                        <ul className='flex items-center mb-[39px] justify-between'>
                            <li className='text-[12px] font-normal'>Jami summa:</li>
                            <li className='text-[18px] font-semibold'>{totalPrice} usz</li>
                        </ul>
                        <Button extrClass='!py-[17px] w-[90%] mx-auto' title='Hoziroq sotib olish' type='button' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart