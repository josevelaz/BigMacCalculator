import React, { useEffect, useState } from "react"
import { Screen, Top, Middle, Bottom } from "../components"
import { LocalCurrencyContext } from "../utils/Context"

const URL = "http://78a5a525930a.ngrok.io"

export interface FetchIPResponse {
  ip: string
  type: string
  continent_code: string
  continent_name: string
  country_code: string
  country_name: string
  location: {
    country_flag: string
    country_flag_emoji: string
    country_flag_emoji_unicode: string
  }
}

function getRandomInt(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min) + min)
}

interface FetchCountryDataResponse {
  data: CountryData[]
}
export type CountryData = {
  Country: string
  Date: string
  "Local-price": string
  "Dollar-ex": string
  "Dollar-price": string
  "Dollar-PPP": string
  "Dollar-valuation": string
}

export const App = () => {
  const [userInfo, setUserInfo] = useState<FetchIPResponse | null>(null)
  const [ammount, changeAmmount] = useState<number>(1)
  const [randCountry, setRandCountry] = useState<CountryData | null>(null)
  const [userCountry, setUserCountry] = useState<CountryData | null>(null)

  const fetchIP = async () => {
    try {
      let data = await fetch(`${URL}/api/ip/fetch-ip`)
      let json: FetchIPResponse = await data.json()
      setUserInfo(json)
    } catch (error) {
      console.log("=====ERROR-FetchIP=====")
      console.log(error)
    }
  }
  const fetchLocalCountry = ({ data }: FetchCountryDataResponse) => {
    // console.log(data)
    console.log(userInfo)

    let localCountry = data.find((v) => v.Country === userInfo?.country_name)
    return localCountry
  }

  const fetchCountryData = async () => {
    try {
      let data = await fetch(`${URL}/api/data/fetch-countries-ppp`)
      let json: FetchCountryDataResponse = await data.json()
      console.log(fetchLocalCountry(json))
      setRandCountry(json.data[getRandomInt(json.data.length, 1)])
    } catch (error) {
      console.log("=====ERROR-FetchCountryData=====")
      console.log(error)
    }
  }
  useEffect(() => {
    fetchIP()
    fetchCountryData()
  }, [])

  return (
    <Screen>
      <LocalCurrencyContext.Provider value={{ ammount, changeAmmount }}>
        <Top country={userInfo?.country_name} />
        <Middle />
        <Bottom randomCountry={randCountry} />
      </LocalCurrencyContext.Provider>
    </Screen>
  )
}
