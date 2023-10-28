
"use client"

import { useProducts } from "@/hooks/useProductys"

interface ProductsListProps {

}
export function ProductsList(props : ProductsListProps){
    const { data } = useProducts();
    console.log(data);
    return(
        <></>
    )
}