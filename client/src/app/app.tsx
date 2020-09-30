import React, { useEffect, useState } from "react"
import { Screen, Section, Top } from "../components"

export interface FetchIPResponse {
  status: string
  data?: {
    ipv4: string
    continent_name: string
    country_name: string
    subdivision_1_name: string
    subdivision_2_name: null
    city_name: string
    latitude: string
    longitude: string
  }
  error?: any
}

export const App = () => {
  const [userInfo, setUserInfo] = useState()

  const fetchIP = async () => {
    try {
      let data = await fetch("/api/ip/fetch-ip")
      let json: FetchIPResponse = await data.json()
      console.log(json.data?.country_name)
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
      <Section>
        <Top />
      </Section>
      <Section>Boop</Section>
      <Section>Bap</Section>
    </Screen>
  )
}
