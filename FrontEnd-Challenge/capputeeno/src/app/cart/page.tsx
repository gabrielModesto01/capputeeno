"use client"

import { BackBtn } from "@/components/back-button";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const CartList = styled.div`
  flex-direction: column;
  margin-top: 22px;

  h3 {
    font-size: 24px;
    text-transform: uppercase;
    color: var(--text-dark-2)
  }

  p{
    color: var(--textos-dark-2);
    font-size: 16px;
    span {
    font-weight: bold;
  }
  }

`

export default function CartPage(){
    return(
      <DefaultPageLayout>
        <Container>
        <BackBtn navigate="/"/>

        <CartList>
          <h3>Seu Carrinho</h3>
          <p>Total (3 produtos) <span>R$161,00</span></p>
        </CartList>
        </Container>
      </DefaultPageLayout>
    )
}