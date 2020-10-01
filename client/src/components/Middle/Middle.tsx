import React, { useContext } from "react"
import { LocalCurrencyContext } from "../../utils/Context"
import { Section } from "../styled"
import { MiddleProps } from "./Middle.props"

export const Middle = (props: MiddleProps) => {
  const { ammount } = useContext(LocalCurrencyContext)
  return (
    <Section>
      <p>You Could Buy {ammount} of Big Macs in you country</p>
    </Section>
  )
}
