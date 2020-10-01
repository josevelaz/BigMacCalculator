import React, { useEffect, useState } from "react"
import { Screen, Section, Top } from "../components"
import { Middle } from "../components/Middle/Middle"
import { BigMacContext } from "../utils/Context"

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

export const App = () => {
  const [userInfo, setUserInfo] = useState<FetchIPResponse | null>(null)
  const [bigMacs, changeBigMacs] = useState<number>(1)

  const fetchIP = async () => {
    try {
      let data = await fetch(`http://78a5a525930a.ngrok.io/api/ip/fetch-ip`)
      let json: FetchIPResponse = await data.json()
      setUserInfo(json)
    } catch (error) {
      console.log("=====ERROR=====")
      console.log(error)
    }
  }
  useEffect(() => {
    fetchIP()
  }, [])

  return (
    <Screen>
      <BigMacContext.Provider value={{ bigMacs, changeBigMacs }}>
        <Top country={userInfo?.country_name} />
        <Middle />
        <Section>Bap</Section>
      </BigMacContext.Provider>
    </Screen>
  )
}
