import React from "react"
import { TopProps } from "./Top.props"

export const Top = (props: TopProps) => {
  return (
    <>
      <h1>Big mac Price Converter</h1>
      <h1>You are in {props.country}</h1>
      <div>
        <p>Please enter an amount of money in your local currency </p>
      </div>
    </>
  )
}
