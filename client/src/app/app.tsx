import React, { useEffect, useState } from "react"
import { Screen, Top, Middle, Bottom, Background } from "../components"
import emojiFlags from "emoji-flags"

const URL = "http://0f35abc17c5d.ngrok.io"

interface FetchCountryDataResponse {
  randomCountry: CountryData
  local: CountryData
}
export type CountryData = {
  Country: string
  Date: string
  LocalPrice: string
  DollarEx: string
  DollarPrice: string
  DollarPPP: string
  DollarValuation: string
  emoji: string
  unicode: string
}

export const App = () => {
  const [ammount, changeAmmount] = useState<number>(1)
  const [randCountry, setRandCountry] = useState<CountryData | null>(null)
  const [userCountry, setUserCountry] = useState<CountryData | null>(null)

  /**
   * Function that runs upon page load. Fetches the list of contries with all its information
   * If successfull, fetch will return a random country and the lcoal country
   */
  const fetchInitialData = async () => {
    try {
      let data = await fetch(`${URL}/api/data/fetch-countries`)
      let { randomCountry, local }: FetchCountryDataResponse = await data.json()
      setRandCountry(randomCountry)
      setUserCountry(local)
    } catch (error) {
      console.log("=====ERROR-FetchCountryData=====")
      console.log(error)
    }
  }
  useEffect(() => {
    fetchInitialData()
    console.log(emojiFlags.data)
  }, [])

  return (
    <Screen>
      <Top country={userCountry} changeAmmount={changeAmmount} ammount={ammount} />
      <Middle
        price={userCountry ? parseFloat(userCountry?.DollarPrice) : 0}
        ammount={ammount}
        ppp={userCountry?.DollarPPP}
      />
      <Bottom
        randomCountry={randCountry}
        changeAmmount={changeAmmount}
        ammount={ammount}
        country={userCountry}
      />
      <Background />
    </Screen>
  )
}
