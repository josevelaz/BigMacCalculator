import express from "express"
import { ipController } from "../../controllers"

const router = express.Router()

/**
 * @param ip
 * IP address from user who created a request
 */
router.route("/fetch-ip/:ip").get(ipController.fetchIP)

export default router
