import express from "express"
import path from "path"
// import api from "./api"

const router = express.Router()

/**
 * API routes
 */
// router.use("/api", api)

/**
 * If no API routes are hit, send the React Client
 */
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"))
})

export default router
