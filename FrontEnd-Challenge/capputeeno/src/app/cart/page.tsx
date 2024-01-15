"use client"

import { BackBtn } from "@/components/back-button";
import CartItem from "@/components/cart/cart-item";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 32px;

  @media(min-width: ${props => props.theme.desktopBreakpoint}){
    display: flex;
    align-items: center;
    justify-content: center;
    lex-direction: column;
    height: 100% important;

  }
`

const CartListContainer = styled.div`
  h3 {
    font-size: 24px;
    text-transform: uppercase;
    color: var(--text-dark-2);
    line-height: 150%;
    margin-top: 22px;
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
  gap: 16px;
  margin-top: 24px;
`

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background: white;
  height: 100% important;

`

export default function CartPage(){
    const { value, updatedLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

    const calculateTotal = (value: ProductInCart[]) => {
      return value.reduce((sum, item) => sum += item.price_in_cents * item.quantity, 0)
    }

    const cartTotal = formatPrice(calculateTotal(value))

    const handleUpdateQuantity = (id: string, quantity: number) => {
      const newValue = value.map(item => {
        if (item.id !== id) return item
        return {...item, quantity: quantity}
      })
      updatedLocalStorage(newValue)
    }

    const handleDeleteItem = (id:string) => {
      const newValue = value.filter(item => {
        if (item.id !== id) return item
      })
      updatedLocalStorage(newValue)
    }

    return(
      <DefaultPageLayout>
        <Container>
          <CartListContainer>
          <BackBtn navigate="/"/>
            <h3>Seu Carrinho</h3>
            <p>
              Total {value.length} produtos
              <span> {cartTotal}</span>
            </p>
            <CartLis>
                  {value.map(item => 
                  <CartItem 
                    product={item} 
                    key={item.id} 
                    handleUpdateQuantity={handleUpdateQuantity}
                    handleDelete={handleDeleteItem}
                  />)}
            </CartLis>
          </CartListContainer>
          <CartResultContainer>
            <h1>Ola</h1>
          </CartResultContainer>
        </Container>
      </DefaultPageLayout>
    )
}