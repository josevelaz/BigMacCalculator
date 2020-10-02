import express from "express"
import { ipController } from "../../controllers"

const router = express.Router()

router.route("/fetch-ip/:ip").get(ipController.fetchIP)

export default router
