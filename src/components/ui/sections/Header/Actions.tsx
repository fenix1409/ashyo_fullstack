import { BasketCartIcon, CompareIcon, LikeIcon, ProfileIcon } from '@/public/Icons'
import React from 'react'

const Actions = () => {

    const actionList = [
        {
            id: 1,
            bageCount: 2,
            icon: <CompareIcon />
        },
        {
            id: 2,
            bageCount: 2,
            icon: <LikeIcon />
        },
        {
            id: 3,
            bageCount: 2,
            icon: <BasketCartIcon />
        },
        {
            id: 4,
            bageCount: null,
            icon: <ProfileIcon />
        },
    ]
    return (
        <div></div>
    )
}

export default Actions