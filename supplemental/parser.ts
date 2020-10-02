import fs from "fs"
import path from "path"
import * as csv from "fast-csv"
import { cache, CountryDataType } from "../controllers"

export const parser = {
  countries: () => {
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
          return filter
        }
      })
  }
}
