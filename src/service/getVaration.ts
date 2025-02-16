"use client"
import { useQuery } from "@tanstack/react-query"
import { instance } from "../hook/instance"

export const getVaration = () => {
    const { data:varation = [], isLoading } = useQuery({
        queryKey: ['varation'],
        queryFn: () => instance().get('/varation-option').then(res => res.data?.varationOptions)
    })
    return {varation, isLoading}
}