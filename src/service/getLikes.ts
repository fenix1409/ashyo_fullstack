"use client"
import { useQuery } from "@tanstack/react-query"
import getToken from "../hook/getToken"
import { instance } from "../hook/instance"

export const getLikes = () => {
    const {userId} = getToken()
    const { data:likeList = [], isLoading } = useQuery({
        queryKey: ['like_list'],
        queryFn: () => instance().get(`/like/user/${userId}`).then(res => res.data)
    })
    return {likeList, isLoading}
}
