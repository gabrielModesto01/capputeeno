import { ProductsFetchResponse } from "@/types/products-fetch-response";
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { useFilter } from "./useFilter";
import { FilterType } from "@/types/filter-types";
import { getCategoryByType, getFildByPriority } from "@/utils/graphql-filters";
import { PriorityType } from "@/types/priority-types";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query })
}

const mountQuery = (type: FilterType, priority: PriorityType) =>  {
  if (type ===  FilterType.ALL && priority === PriorityType.POPULARITY) 
  return `
  query {
      allProducts(sortField: "sales", sortOrder: "DSC") {
        id
        name
        price_in_cents
        image_url
      }
    }
  `
  const sortSettings = getFildByPriority(priority)
  const categoryFilter = getCategoryByType(type)
  return `
  query {
    allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}) {
      id
      name
      price_in_cents
      image_url
      category
    }
  }
  `
}

export function useProducts(){
  const { type, priority, search } = useFilter()
  const searchDeferred = useDeferredValue(search)
  const query = mountQuery(type, priority)
  const { data } = useQuery({
    queryFn: () =>  fetcher(query),
    queryKey: [ 'products', type, priority], 
  })

  const products = data?.data?.data?.allProducts
  const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))

  return {
    data: filteredProducts
  }
}