import { Request, Response } from "express"
import nodeCache from "node-cache"
import fetch from "node-fetch"
import emojiFlags from "emoji-flags"

export const cache = new nodeCache()
export type CountryDataType = {
  Country: string
  Date: string
  LocalPrice: string
  DollarEx: string
  DollarPrice: string
  DollarPPP: string
  DollarValuation: string
}

function getRandomInt(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min) + min)
}

export const dataController = {
  /**
   * Fetches cached country data, parsed it and adds necesarry flag emojis.
   * Returns a random country and the user's current country
   */
  fetchCountries: async (req: Request, res: Response) => {
    let cacheVal: CountryDataType[] | null | undefined = cache.get("big-mac-index")
    if (!cacheVal) {
      return res.status(500)
    } else {
      const randomCountryInt = getRandomInt(cacheVal.length, 1)
      let ipData = await fetch(`/api/ip/fetch-ip/${req.clientIp}`)
      let json = await ipData.json()
      let local = cacheVal?.find((v) => v.Country === json.country_name)
      let localEmoji: emojiFlags.CountryData | undefined = emojiFlags.data.find(
        (e) => e.name === local?.Country
      )
      let randomEmoji: emojiFlags.CountryData | undefined = emojiFlags.data.find(
        (e) => cacheVal && e.name === cacheVal[randomCountryInt]?.Country
      )
      return res.json({
        randomCountry: {
          ...cacheVal[randomCountryInt],
          emoji: randomEmoji?.emoji,
          unicode: randomEmoji?.unicode
        },
        local: { ...local, emoji: localEmoji?.emoji, unicode: localEmoji?.unicode }
      })
    }
  }
}
