import { Request, Response } from "express"
import fs from "fs"
import path from "path"
import * as csv from "fast-csv"
import nodeCache from "node-cache"

export const cache = new nodeCache()
type CountryDataType = {
  Country: string
  Date: string
  "Local-price": string
  "Dollar-ex": string
  "Dollar-price": string
  "Dollar-PPP": string
  "Dollar-valuation": string
}

export const dataController = {
  fetchCountriesPPP: (req: Request, res: Response) => {
    let cacheVal: CountryDataType[] | null | undefined = cache.get("big-mac-index")
    if (!cacheVal) {
      let rows: CountryDataType[] = []
      fs.createReadStream(path.resolve(__dirname, "../supplemental", "big-mac-index.csv"))
        .pipe(csv.parse({ headers: true }))
        .on("error", (error) => console.error(error))
        .on("data", (row) => (rows = [...rows, row]))
        .on("end", () => {
          const filter: CountryDataType[] = rows.reverse().filter((item, i) => {
            const prevRow = rows[i - 1]
            if (prevRow?.Country !== item.Country) {
              return true
            }
          })

          let success = cache.set("big-mac-index", filter)
          if (success) {
            console.log("🔧 [SYSTEM] Succesfully Cached the Big Mac Index")
            return res.json({ data: filter })
          }
        })
    } else {
      return res.json({ data: cacheVal })
    }
  },
  fetchLocalCountry: (req: Request, res: Response) => {
    const { localCountry } = req.params
    let cacheVal: CountryDataType[] | null | undefined = cache.get("big-mac-index")

    let local = cacheVal?.find((v) => v.Country === localCountry)
    return res.json({ data: local })
  }
}
