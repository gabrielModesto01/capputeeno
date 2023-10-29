import styled from "styled-components"

interface ProductCardProps {
  image: string,
  title: string,
  price: number,
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 0px 0px 4px 4px;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);

  width: 256px;

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    color: var(--text-dark-2);
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0px;
    
    > div {
    width: 228px;
    height: 1px;
    flex-shrink: 0;
    background: var(--shapes-dark-2);
    margin: 8px 0px;
    padding: 0px;
  }
  }

  
`

export function ProductCard(props : ProductCardProps){
  function formatValue(valueInCents: number) {
    const valueInReais = valueInCents / 100;
    return valueInReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
  }

  const price = formatValue(props.price);

    return(
        <Card>
          <img src={props.image}/>
          <div>
            <h3>{props.title}</h3>
            <div></div>
            <p>{price}</p>
          </div>
        </Card>
    )
}