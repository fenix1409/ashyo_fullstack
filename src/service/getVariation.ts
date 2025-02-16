"use client"
import { useQuery } from "@tanstack/react-query"
import { instance } from "../hook/instance"

export const getVariation = () => {
    const { data:varation = [], isLoading } = useQuery({
        queryKey: ['variation'],
        queryFn: () => instance().get('/variation-options').then(res => res.data)
    })
    return {varation, isLoading}
}