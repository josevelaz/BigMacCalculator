import express from "express"
import ipRoutes from "./ip"

const router = express.Router()

router.use("/ip", ipRoutes)

export default router
