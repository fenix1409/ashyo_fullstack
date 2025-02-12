import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'
import HeaderCategory from './HeaderCategory'

const Header = () => {
    return (
        <header className="sticky top-0 z-[999] bg-white pb-[27px]">
            <HeaderTop />
            <HeaderMain />
            <HeaderCategory />
            {/* <HeaderSearchMobile /> */}
            {/* <CategoryNestedList /> */}
        </header>
    )
}

export default Header