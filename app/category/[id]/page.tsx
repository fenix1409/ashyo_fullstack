"use client"
import ProductFilter from '@/src/components/ProductFilter'
import ProductItemsSkeleton from '@/src/components/ProductItemsSkeleton'
import ProductItem from '@/src/components/ProductsItem'
import { getProductsV2 } from '@/src/service/getProducts'
import { ProductItemType } from '@/src/types/ProductsType'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const CategoryProduct = () => {
    const { id } = useParams()
    const [minPrice, setMinPrice] = useState<number>(0)
    const [maxPrice, setMaxPrice] = useState<number>(0)
    const [brandId, setBrandId] = useState<number | null>(null)
    const { products, isLoading } = getProductsV2(minPrice, maxPrice, brandId, Number(id))
    return (
        <div className='flex px-[130px] gap-[20px]'>
            <ProductFilter setBrandId={setBrandId} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
            <div className='w-[75%] !h-[800px] overflow-y-auto flex flex-wrap justify-between gap-[20px]'>
                {isLoading ? <ProductItemsSkeleton extraClass='!flex-wrap !justify-between !gap-[20px] !space-x-0' /> : products.map((item: ProductItemType) => <ProductItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default CategoryProduct