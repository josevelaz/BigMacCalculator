import express from "express"
import path from "path"
import ipRoutes from "./ip"
import dataRoutes from "./data"

const router = express.Router()

router.use("/ip", ipRoutes)
router.use("/data", dataRoutes)

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"))
})

export default router
