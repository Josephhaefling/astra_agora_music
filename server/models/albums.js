import mongoose from 'mongoose';

const albumSchema = mongoose.Schema({
    title: String,
    images: String,
})

const albumMessage = mongoose.model('albumSchema', albumSchema)

export default albumMessage