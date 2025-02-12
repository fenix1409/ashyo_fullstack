"use client"
import { useQuery } from "@tanstack/react-query"
import { instance } from "../hook/instance"
import getToken from "../hook/getToken"

export const getCarts = () => {
    const {userId} = getToken()
    const { data:cartList = [], isLoading } = useQuery({
        queryKey: ['carts_list'],
        queryFn: () => instance().get(`/users/${userId}`).then(res => res.data.cartItems)
    })
    return {cartList, isLoading}
}
