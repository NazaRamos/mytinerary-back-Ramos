import { Router } from "express";
import getAllCities from "../controllers/cities/readAllCities.js";
import getCityById from "../controllers/cities/readOneCity.js";
import deleteCity from "../controllers/cities/deleteCity.js";
import createCity from "../controllers/cities/createCity.js";
import updateCity from "../controllers/cities/updateCity.js";

const router = Router()

router.get('/', getAllCities)
router.get('/:id', getCityById)
router.post('/', createCity)
router.put('/:id', updateCity)
router.delete('/:id', deleteCity)

export default router