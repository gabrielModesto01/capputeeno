"use client"

import styled from "styled-components"

interface ProductProps {

}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    

`
export default function Product(props : ProductProps){
    return(
        <Container>
            <button>voltar</button>
            <section>informações do produto</section>
        </Container>
    )
}