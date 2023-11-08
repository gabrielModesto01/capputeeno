import { InputHTMLAttributes } from 'react'

import { styled } from 'styled-components'
import { SearchIcon } from './search-icon'

export const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  background-color: var(--bg-secundary);

  font-family: inherit;
  font-weight: 400;
  font-style: 12px;
  line-height: 20px;
  color: var(--text-dark);

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-style: 14px;
    line-height: 22px;
  }

`

const InputContainer = styled.div`
  position: relative;
  width: 250px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%)
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    width: 352px;
  }

`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  handleChange: (value: string) => void,
}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput onChange={(event) => props.handleChange(event.target.value)}{...props}/>
      <SearchIcon/>
    </InputContainer>
  )
}