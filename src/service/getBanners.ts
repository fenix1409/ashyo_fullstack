import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { instance } from '../hook/instance'

const getBanners = () => {
    const { data: banners = [], isLoading } = useQuery({
        queryKey: ["banners"],
        queryFn: () => instance().get('/banners').then(res => res.data)
    })
    return { banners, isLoading }
}

export default getBanners