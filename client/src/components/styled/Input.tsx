import styled from "@emotion/styled"
import React, { InputHTMLAttributes } from "react"

const StyledInput = styled.input`
  width: 70px;
  height: 30px;
  border-radius: 10px;
  border: 3px solid #bababa;
  padding: 0 20px;
  font-size: 14px;
  display: flex;
  font-weight: 500;
  &:focus {
    border: #009fb7 solid 3px;
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`

const StyledLabel = styled.label`
  display: flex;
  position: absolute;
  margin: 1px 0 0 12px;
  font-size: 14px;
  font-weight: 500;
`
type ContainerProps = {
  center?: boolean
}
const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 120px;
  ${(props: ContainerProps) => props.center && "margin: 0 auto;"};
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  center?: boolean
}

export const Input = (props: InputProps) => {
  return (
    <Container center={props.center}>
      <StyledLabel>$</StyledLabel>
      <StyledInput
        id="currency_input"
        type="number"
        step="0.01"
        maxLength={3}
        min="0.01"
        name="currency_input"
        {...props}
      />
    </Container>
  )
}
