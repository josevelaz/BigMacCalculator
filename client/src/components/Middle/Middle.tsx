import React, { useContext } from "react"
import { BigMacContext } from "../../utils/Context"
import { Section } from "../styled"
import { MiddleProps } from "./Middle.props"

export const Middle = (props: MiddleProps) => {
  const { bigMacs } = useContext(BigMacContext)
  return (
    <Section>
      <p>You Could Buy {bigMacs} of Big Macs in you country</p>
    </Section>
  )
}
