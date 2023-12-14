import { ProductInCart } from "@/types/product"
import styled from "styled-components"

interface CartItemProps {
  product: ProductInCart
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function CartItem({ product } : CartItemProps){
    return(
        <Item>
          <img src={product.image_url} />
          <div>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <div>
              <p>{product.quantity}</p>
              <p>{product.price_in_cents}</p>
            </div>
          </div>
        </Item>
    )
}