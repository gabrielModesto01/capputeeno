"use client"

import { DefaultPageLayout } from "@/components/default-page-layout"
import styled from "styled-components"
import { BackBtn } from "@/components/back-button"
import { useProduct } from "@/hooks/useProducts"
import { ShopBagIcon } from "@/components/icons/shopping-bag-icon"

interface ProductProps {

}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 32px;
        margin-top: 24px;

        img {
            max-width: 640px;
            width: 100%
        }

        > div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            button {
                background: #115D8C;
                mix-blend-mode: multiply;
                border-radius: 4px;
                color: #F5F5FA;
                border: none;
                cursor: pointer;
                padding: 10px 0;
                text-align: center;
                font-weight: 500;
                font-size: 16px;
                text-transform: uppercase;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
        }

        @media(min-width: ${props => props.theme.desktopBreakpoint}) {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;

            img {
                width: 50%;
            }
        };
    }
`

const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2)
    }

    h2 {
        font-size: 32px;
        font-weight: 300;
        line-height: 150%;
        color: var(--text-dark-2);
        margin-top: 12px;
    }

    
    span:nth-of-type(2) {
        color: var(--shapes-dark);
        font-size: 20px;
        font-weight: 600;
        line-height: 150%;
        margin-bottom: 24px;
    }
    
    p {
        font-size: 12px;
        font-weight: 500;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    div {

        margin-top: 58px;

        h3 {
            text-transform: uppercase;
            color: var(--text-dark);
            font-weight: 500;
            font-size: 16px;
            margin-top: 8px;
        }

        p {
            font-size: 14px;
            font-weight: 500;
            line-height: 150%;
            color: var(--text-dark-2);

        }
    }

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        section {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;
        }
    };
`


export default function Product({ searchParams }: { searchParams: {id: string}}){
    const { data } = useProduct(searchParams.id);

    function formatPrice(valueInCents: number) {
        const formattedValue = valueInCents / 100;
        return formattedValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return(
        <DefaultPageLayout>
            <Container>
                <BackBtn navigate="/"/>
                <section>
                    <img src={data?.image_url}/>
                    <div>
                        <ProductInfo>
                            <span>{data?.category}</span>
                            <h2>{data?.name}</h2>
                            <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
                            <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                            <div>
                                <h3>DESCRIÇÃO</h3>
                                <p>{data?.description}</p>
                            </div>
                        </ProductInfo>
                        <button>
                            <ShopBagIcon/>
                            ADICIONAR AO CARRINHO
                        </button>
                    </div>
                </section>
            </Container>
        </DefaultPageLayout>
    )
}