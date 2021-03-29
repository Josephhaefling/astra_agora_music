import express from 'express';
import { getAlbums } from '../Controllers/albums.js';

const router = express.Router()
router.get('/', getAlbums)

export default router