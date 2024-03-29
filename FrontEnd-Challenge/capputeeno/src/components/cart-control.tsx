import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";

const CartCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  font-size: 12px;

  width: 17px;
  height: 17px;

  background-color: var(--delete-color);
  color: white;

  position: absolute;
  right: -10px;
  top: 50%;
`;
const Container = styled.div`
  position: relative;
  
  :hover {
    cursor: pointer;
  }
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-items", []);

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/cart")
  }

  return (
    <Container onClick={handleNavigate}>
      <CartIcon/>
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
