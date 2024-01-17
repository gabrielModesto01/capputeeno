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
  flex-direction: column;
  gap: 32px;
  height: 100%;
  

  @media(min-width: ${props => props.theme.desktopBreakpoint}){
    flex-direction: row;
  }
`

const CartListContainer = styled.div`
  h3 {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 24px;
  }

  p{
    color: var(--textos-dark-2);
    font-size: 16px;
    font-weight: 300;
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
  justify-content: space-between;
  min-width: 352px;
  padding: 16px 24px;

  background: white;
  height: 100vh;

`

const ResumeContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div:nth-child(2) {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--shapes-dark-2);
    padding-top: 12px;
  }

  div:nth-child(3) {
    color: var(--text-dark-2);
    font-weight: 600;
    margin-top: 8px
  }
  
  section {
    padding-top: 29px;

  }

  button {
    width: 100%;
    height: 44px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: #F5F5FA;


    border: none;
    border-radius: 4px;
    background-color: #51B853;
    mix-blend-mode: multiply;

    margin-top: 40px;
  }
  
  button:hover {
    cursor: pointer;
    opacity: 80%;
    transition: 5ms;
  }
  `

const LinksCardResume = styled.div`
  ul {
    list-style: none;
  }

  a {
    color: var(--text-dark);
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
  }

  li:not(:last-child){
    margin-bottom: 12px;
  }


  @media(min-width: ${props => props.theme.tabletBreakpoint}){
    flex-direction: row;
  }
`

export default function CartPage(){
    const { value, updatedLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

    const calculateTotal = (value: ProductInCart[]) => {
      return value.reduce((sum, item) => sum += item.price_in_cents * item.quantity, 0)
    }

    const cartTotalValue = calculateTotal(value)

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

    const SubtotalResume = cartTotalValue/100
     
    const DeliveryValue = 40

    const Delivery = DeliveryValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const calculateTotalResume = SubtotalResume + DeliveryValue

    const resuemTotal = calculateTotalResume.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return(
      <DefaultPageLayout>
        <Container>
          <CartListContainer>
          <BackBtn navigate="/"/>
            <h3>Seu Carrinho</h3>
            <p>
              Total {value.length} produtos
              <span>{cartTotal}</span>
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
            <ResumeContainer>
            <h3>Resumo do pedido</h3>
              <section>
                <div>
                  <p>Subtotal de produtos</p>
                  <span>{cartTotal}</span>
                </div>
                <div>
                  <p>Entrega</p>
                  <span>{Delivery}</span>
                </div>
                <div>
                  <p>Total</p>
                  <span>{resuemTotal}</span>
                </div>
              </section>
              <button>Finalizar a compra</button>
            </ResumeContainer>
            <LinksCardResume>
              <ul>
                <li><a href="">Ajuda</a></li>
                <li><a href="">reembolsos</a></li>
                <li><a href="">entregas e frete</a></li>
                <li><a href="">trocas e devoluções</a></li>
              </ul>
            </LinksCardResume>
          </CartResultContainer>
        </Container>
      </DefaultPageLayout>
    )
}