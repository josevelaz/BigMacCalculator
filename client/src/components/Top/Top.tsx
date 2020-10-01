import styled from "@emotion/styled"
import React, { useContext } from "react"
import { LocalCurrencyContext } from "../../utils/Context"
import { Section } from "../styled"
import { TopProps } from "./Top.props"

const MacInput = styled.input`
  width: 70px;
  height: 30px;
  border-radius: 30px;
  background-color: #e4e4e4;
  border: 0;
  padding: 0 15px;
`

export const Top = (props: TopProps) => {
  const { ammount, changeAmmount } = useContext(LocalCurrencyContext)
  const onChangeQty = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    changeAmmount(parseFloat(target.value))
  }
  return (
    <Section>
      <h1>Big mac Price Converter</h1>
      <h1>You are in {props.country}</h1>
      <div>
        <p>Please enter an amount of money in your local currency</p>
        <MacInput
          name="local_currency_input"
          type="number"
          step="0.01"
          maxLength={3}
          min="0.01"
          value={ammount}
          onChange={onChangeQty}
          onBlur={({ target }) => target.value === "" && changeAmmount(0.01)}
        />
      </div>
    </Section>
  )
}
