import City from "../../models/City.js";

const getCityById = async (req, res) => {
    try {
        const cityId = req.params.id;

        const city = await City.findById(cityId);

        if (!city) {
            return res.status(404).json({
                success: false,
                response: 'not found',
                message: 'City not found',
            });
        }

        return res.status(200).json({
            success: true,
            response: 'ok',
            message: `/cities/${cityId}`,
            city: city,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            response: 'internal server error',
            message: 'Error retrieving city',
        });
    }
};

export default getCityById;