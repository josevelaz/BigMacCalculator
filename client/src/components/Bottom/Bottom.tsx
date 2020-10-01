import React, { useContext } from "react"
import { LocalCurrencyContext } from "../../utils/Context"
import { Section } from "../styled"
import { BottomProps } from "./Bottom.props"

export const Bottom = ({ randomCountry }: BottomProps) => {
  const { ammount } = useContext(LocalCurrencyContext)
  return <Section>{/* <p>{randomCountry.Country}</p> */}</Section>
}
