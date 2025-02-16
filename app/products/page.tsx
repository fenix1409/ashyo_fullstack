"use client"
import ProductFilter from '@/src/components/ProductFilter'
import ProductItemsSkeleton from '@/src/components/ProductItemsSkeleton'
import ProductItem from '@/src/components/ProductsItem'
import { getProductsV2 } from '@/src/service/getProducts'
import { ProductItemType } from '@/src/types/ProductsType'
import React, { useState } from 'react'

const Products = () => {
    const [minPrice, setMinPrice] = useState<number>(0)
    const [maxPrice, setMaxPrice] = useState<number>(0)
    const [brandId, setBrandId] = useState<number | null>(null)

    const { products, isLoading } = getProductsV2(minPrice, maxPrice, brandId)

    return (
        <div className='flex flex-col sm:flex-row px-[130px] gap-[20px]'>
            <div className='sm:w-[75%]  !h-[800px] overflow-y-auto grid grid-cols-2 sm:flex flex-wrap justify-between gap-[20px]'>
                <ProductFilter setBrandId={setBrandId} setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} />
                {isLoading ? <ProductItemsSkeleton extraClass='!flex-wrap !justify-between !gap-[20px] !space-x-0' /> : products.map((item: ProductItemType) => <ProductItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default Products