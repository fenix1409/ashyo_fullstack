"use client"
import { useQuery } from "@tanstack/react-query"
import { instance } from "../hook/instance"

export const getCategorySearch = (name?: string | null) => {
    const { data: categoriesSearch = [], isLoading } = useQuery({
        queryKey: ['categories', name],
        queryFn: () => instance().get('/categories/search', { params: { name } }).then(res => res.data),
        enabled: !!name 
    })
    
    return { categoriesSearch, isLoading }
}