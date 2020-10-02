import express from "express"
import { dataController } from "../../controllers"

const router = express.Router()

router.route("/fetch-countries").get(dataController.fetchCountries)

export default router
