import City from '../../models/City.js';

const deleteCity = async (req, res) => {
    try {
        const deletedCity = await City.findByIdAndDelete({_id: req.params.id});

        if (!deletedCity) {
            return res.status(404).json({ message: 'City not found' })
        } else {
            res.status(200).json({ message: 'City deleted successfully', deletedCity })
        }
        
    } catch (error) {
        console.error("City couldn't be deleted", error);
        res.status(500).json({ message: 'Server internal error at Delete City instance' })
    }
};

export default deleteCity