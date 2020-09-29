import express from "express"

const app = express()
const PORT = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

app.get("/", (req, res) => res.send("Express + Typescript"))

app.listen(PORT, () => {
  console.log(`🔧 [SERVER] Server running on http://localhost:${PORT}`)
})
