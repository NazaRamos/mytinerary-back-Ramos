import City from "../../models/City.js";

const updateCity = async (req, res) => {
    const { id } = req.params;
    try {
        const city = await City.findOneAndUpdate(
            {_id:id},
            req.body
        )

        if (!city) {
            return res.status(404).json({error: "City not found"});
        }

        return res.status(200).json({ message: city })

    } catch (error) {
        console.error("City couldn't be updated", error)
        return res.status(500).json({ error: "Server internal error" });
    }
}

export default updateCity