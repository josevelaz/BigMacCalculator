import express from "express"
import { dataController } from "../../controllers"

const router = express.Router()

router.route("/fetch-countries-ppp").get(dataController.fetchCountriesPPP)
router.route("/local/:localCountry").get(dataController.fetchLocalCountry)

export default router
