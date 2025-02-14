import { useQuery } from '@tanstack/react-query'
import { instance } from '../hook/instance'

const getBrands = () => {
    const { data: brands = [], isLoading } = useQuery({
        queryKey: ["brands"],
        queryFn: () => instance().get("/brands/all").then(res => res.data)
    })
    return { brands, isLoading }
}

export default getBrands