import styled from "styled-components";
import { ArrowIcon } from "./icons/arrow-icon";
import { useContext, useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityType } from "@/types/priority-types";


const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  padding: 12px 16px;
  width: 250px;
  border-radius: 4px;
  background: white;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  z-index: 999;

  list-style: none;

  top: 100%;
  right: 8px;

  li {
    font-family: inherit;
    color: var(--text-dark);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
  }

  li:hover {
    opacity: 0.8;
    transition: 0.2;
  }

  li + li {
    margin-top: 4px;
  }
`;

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleIOpen = () => setIsOpen((prev) => !prev);

  const handleUpdatePrioryti = (value: PriorityType) => {
    setPriority(value) 
    setIsOpen(false)
  };

  return (
    <FilterContainer>
      <button onClick={handleIOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePrioryti(PriorityType.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePrioryti(PriorityType.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatePrioryti(PriorityType.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdatePrioryti(PriorityType.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
