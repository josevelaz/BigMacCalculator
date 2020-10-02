import React from "react"
import { helperFunctions } from "../../utils/Helpers"
import { Input, Section, Text } from "../styled"
import { BottomProps } from "./Bottom.props"

export const Bottom = ({ randomCountry, ammount, changeAmmount, country }: BottomProps) => {
  const onChangeQty = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    changeAmmount(parseFloat(target.value))
  }

  const calculate = () => {
    /**
     * (calculation is (INPUT / local price) * (local dollar price / RAND COUNTRY dollar price)
     */
    if (country && ammount && randomCountry) {
      return (
        (ammount / parseFloat(country?.LocalPrice)) *
        (parseFloat(country?.DollarPrice) / parseFloat(randomCountry?.DollarPrice))
      )
    } else return 0
  }
  const calculateBigMacs = () => {
    /**
     * (Calculation is [INPUT] * (local dollar price / RAND COUNTRY dollar price))
     */
    if (country && ammount && randomCountry)
      return ammount * (parseFloat(country?.DollarPrice) / parseFloat(randomCountry?.DollarPrice))
  }
  return (
    <Section>
      <h2>
        Random Country: {randomCountry?.Country} {randomCountry?.emoji}
      </h2>
      <Text style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: 5 }}>
          You could buy {calculateBigMacs()?.toFixed(2)} Big Mac(s) in {} with
        </span>
        <Input
          value={ammount}
          onChange={onChangeQty}
          onBlur={({ target }) => target.value === "" && changeAmmount(0.01)}
        />
      </Text>

      <Text>
        Your <span id="highlight">$ {ammount}</span> is worth about{" "}
        <span id="highlight">${calculate().toFixed(2)}</span> in {randomCountry?.Country}{" "}
        {randomCountry?.emoji}
      </Text>
    </Section>
  )
}
