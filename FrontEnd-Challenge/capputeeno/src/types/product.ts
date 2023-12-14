export interface Product {
  id: string,
  name: string,
  price_in_cents: number,
  image_url: string,
  description?: string,
  category?: string
}


export interface ProductInCart extends Product {
  quantity: number
}
export interface ProductFetchResponse {
  data: {
    Product: Product
  }
}