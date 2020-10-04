import { Request, Response } from "express"
import fetch from "node-fetch"
import { baseServerURL } from "../server"
export type IPData = {
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

export const ipController = {
  /**
   * Obtains user geolocation data based on IP address supplued
   */
  fetchIP: async (req: Request, res: Response) => {
    if (!req.clientIp) {
      return res.status(500)
    }
    try {
      let data = await fetch(
        baseServerURL(
          `http://api.ipstack.com/${req.clientIp}?access_key=${process.env.IPSTACK_KEY}`
        )
      )
      console.log(req.clientIp)

      let json = await data.json()
      console.log(json)

      let parse: IPData = {
        ip: json.ip,
        type: json.type,
        continent_code: json.continent_code,
        continent_name: json.continent_name,
        country_code: json.country_code,
        country_name: json.country_name,
        location: {
          country_flag: json.country_flag,
          country_flag_emoji: json.country_flag_emoji,
          country_flag_emoji_unicode: json.country_flag_emoji_unicode
        }
      }
      return res.json(parse)
    } catch (error) {
      console.log("==ERROR==")
      console.log(error)
      return res.status(500)
    }
  }
}
