import express from "express"
import path from "path"
import routes from "./routes"
import cors from "cors"
import requestIp from "request-ip"
import dotenv from "dotenv"
import { cache as BigMacCache } from "./controllers"
import { parser } from "./supplemental/parser"

const app = express()
const PORT = 8000
dotenv.config()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}
app.use(requestIp.mw())
app.set("trust proxy", true)
app.use(routes)
BigMacCache.flushAll()
console.log("🔧 [SYSTEM] Flushed all dached data")
parser.countries()

app.listen(PORT, () => {
  console.log(`🔧 [SERVER] Server running on http://localhost:${PORT}`)
})
