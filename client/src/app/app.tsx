import React, { useEffect } from "react"

export const App = () => {
  const fetchIP = async () => {
    try {
      // console.log(json)
    } catch (error) {
      console.log("=====ERROR=====")
      console.log(error)
    }
  }
  useEffect(() => {
    fetchIP()
  }, [])
  return (
    <div>
      <h1>Hello From Within</h1>
    </div>
  )
}
