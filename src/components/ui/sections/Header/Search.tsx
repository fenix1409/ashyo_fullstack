import debounce from '@/src/hook/debounce'
import { Skeleton } from '@heroui/skeleton'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'
import Input from '../../Input'
import Button from '../../Button'
import { SearchIcon } from '@/public/Icons'
import { CategoryType } from '@/src/types/CategoryType'
import { getCategorySearch } from '@/src/service/SearchCategory'

const Search = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string | null>("empty")
  const [search, setSearch] = useState<string>("")
  const name = debounce(searchValue, 1000)
  const {categoriesSearch, isLoading} = getCategorySearch(name)

  function handleSearchChange(e:ChangeEvent<HTMLInputElement>){
    setSearch((e.target as HTMLInputElement).value)
    if((e.target as HTMLInputElement).value){
      setSearchValue((e.target as HTMLInputElement).value)
    }
    else{
      setSearchValue("empty")
    }
  }

  function handleClickSearchList(categoryId:number, categoryName:string){
    setSearch(categoryName)
    router.push(`/category/${categoryId}`)
    setTimeout(() => setSearchValue("empty"),1000)
  }
  return (
    <form className='w-[518px] relative'>
            <Input value={`${search}`} onBlur={() => setTimeout(() => setSearchValue("empty"), 500)} onChange={handleSearchChange} extraClass={`!py-[15px] !px-[21px] !text-[10px] sm:!py-[17px] sm:!px-[20px] sm:!text-[14px]`} type='text' placeholder="What are you looking for?" />
            <Button extrClass='!py-[12px] !px-[10px] sm:!py-[16px] sm:!px-[20px] absolute top-0 right-0 !h-full' iconPostion='left' icon={<SearchIcon classList='!w-[16px] !h-[16px] sm:!w-[20px] sm:!h-[20px]'/>} type='submit'/>
            <ul className={`${searchValue == "empty" && "h-0 opacity-0"} z-50 duration-300 overflow-hidden ${isLoading && "px-5 top-[67px] pt-[39px] pb-[10px]"} absolute w-full bg-white  shadow-md`}>
              {isLoading ? <Skeleton className="h-5 w-full rounded-lg" /> : categoriesSearch.map((item:CategoryType)=> (
                <li onClick={(e) => handleClickSearchList(item.id, item.name)} key={item.id} className='py-[17px] cursor-pointer hover:bg-[#EBEFF3] duration-300 pl-[40px] border-b-[1.5px] border-slate-300'>{item.name}</li>
              ))}
            </ul>
        </form>
  )
}

export default Search 