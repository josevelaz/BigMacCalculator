import React from "react"
import { Section, Text } from "../styled"
import { MiddleProps } from "./Middle.props"
import { helperFunctions } from "../../utils/Helpers"

export const Middle = ({ ammount, price, ppp }: MiddleProps) => {
  return (
    <Section>
      <Text>
        You Could Buy <strong>{helperFunctions.calculateAmmount(price, ammount).toFixed(2)}</strong>{" "}
        Big Mac(s) in you country
      </Text>
      <Text>
        Your Dollar Purchasing Parity (PPP) is <span id="highlight">{ppp}</span>
      </Text>
    </Section>
  )
}
