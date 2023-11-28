import City from "../../models/City.js";

const createCity = async (req, res) => {
    try {
        const newCity = new City(req.body)
        await newCity.save()
        return res.status(201).json({
            success: true,
            response: newCity,
            message: "City created"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            response: null,
            message: ("City couldn't be created! ", error.message)
        })
    }
}

export default createCity