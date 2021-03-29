import albumMessage from '../models/albums.js';

export const getAlbums = async (req, res) => {
    try {
        const albumMessage = await albumMessage.find()
        res.status(200).json(albumMessage)
    } catch(error) {
        res.status(404).json({ message: error.message })
    } 
}