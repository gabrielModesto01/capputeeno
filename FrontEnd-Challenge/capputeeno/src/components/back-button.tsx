import styled from "styled-components"
import { BackIcon } from "./icons/back-icon"
import { useRouter } from "next/navigation";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    color: var(--secundary-text);
    background: transparent;
    font-family: inherit;
    border: none;
    cursor: pointer;
`
interface BtnProps {
  navigate: string;
}

export function BackBtn({ navigate }: BtnProps){
  const router = useRouter();

  const handleNavigate = () => {
    router.push(navigate)
  }

    return(
      <Button onClick={handleNavigate}>
        <BackIcon/>
        Voltar
      </Button>
    )
}