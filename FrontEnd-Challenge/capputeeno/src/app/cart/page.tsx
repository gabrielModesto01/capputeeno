"use client"

import { BackBtn } from "@/components/back-button";
import CartItem from "@/components/cart/Cart-item";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const CartListContainer = styled.div`
  flex-direction: column;
  margin-top: 22px;

  h3 {
    font-size: 24px;
    text-transform: uppercase;
    color: var(--text-dark-2);
    line-height: 150%;
  }

  p{
    color: var(--textos-dark-2);
    font-size: 16px;
    span {
    font-weight: bold;
  }
}
`

const CartLis = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default function CartPage(){
    const { value } = useLocalStorage<ProductInCart[]>("cart-items", [])

    const calculateTotal = (value: ProductInCart[]) => {
      return value.reduce((sum, item) => sum += item.price_in_cents * item.quantity, 0)
    }

    const cartTotal = formatPrice(calculateTotal(value))
    return(
      <DefaultPageLayout>
        <Container>
        <BackBtn navigate="/"/>
        <CartListContainer>
          <h3>Seu Carrinho</h3>
          <p>
            Total {value.length} produtos 
            <span>{cartTotal}</span>
          </p>
          <CartLis>
                {value.map(item => <CartItem product={item} key={item.id}/>)}
          </CartLis>
        </CartListContainer>
        </Container>
      </DefaultPageLayout>
    )
}