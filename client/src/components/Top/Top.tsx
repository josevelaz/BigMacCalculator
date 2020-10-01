import styled from "@emotion/styled"
import React, { useContext } from "react"
import { BigMacContext } from "../../utils/Context"
import { Section } from "../styled"
import { TopProps } from "./Top.props"

const MacInput = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #e4e4e4;
  border: 0;
  padding: 0 15px;
`

export const Top = (props: TopProps) => {
  const { bigMacs, changeBigMacs } = useContext(BigMacContext)
  const onChangeQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeBigMacs(parseInt(e.target.value))
  }
  return (
    <Section>
      <h1>Big mac Price Converter</h1>
      <h1>You are in {props.country}</h1>
      <div>
        <p>Please enter an amount of money in your local currency</p>
        <MacInput
          name="Big-Mac-Input"
          type="number"
          maxLength={3}
          min={1}
          value={bigMacs}
          onChange={onChangeQty}
        />
      </div>
    </Section>
  )
}
