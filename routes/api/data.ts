import express from "express"
import { dataController } from "../../controllers"

const router = express.Router()

router.route("/fetch-countries-ppp").get(dataController.fetchPPP)

export default router
