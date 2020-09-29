import express from "express"
import path from "path"
import routes from "./routes"

const app = express()
const PORT = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

app.use(routes)

app.listen(PORT, () => {
  console.log(`🔧 [SERVER] Server running on http://localhost:${PORT}`)
})
