import styled from "@emotion/styled"
import React from "react"
import Emoji from "react-emoji-render"
import { Section, Input, Text } from "../styled"
import { TopProps } from "./Top.props"

export const Top = ({ ammount, changeAmmount, country }: TopProps) => {
  const onChangeQty = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    changeAmmount(parseFloat(target.value))
  }
  return (
    <Section>
      <div style={{ fontSize: 64, marginTop: 15 }}>
        <Emoji text="🍔" />
      </div>
      <h1>Big mac Price Converter</h1>
      <h2>
        You are in {country?.Country} {country?.emoji}
      </h2>
      <div>
        <Text>Please enter an amount of money in your local currency</Text>
        <Input
          center
          value={ammount}
          onChange={onChangeQty}
          onBlur={({ target }) => target.value === "" && changeAmmount(0.01)}
        />
      </div>
    </Section>
  )
}
