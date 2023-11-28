import City from "../../models/City.js";

const getAllCities = async (req, res) => {
    try {
        const allCities = await City.find()
            return res.status(200).json({
                success: true,
                response: 'ok',
                message: '/cities',
                allCities: allCities
            })
    } catch (error) {
        console.log(error)
    }
}

export default getAllCities