import { addSong, listSong } from '../controllers/songController.js';
import express from 'express';

const songRouter = express.Router()

songRouter.post('/add', addSong);
songRouter.get('/list',listSong);
//songRouter.post('/remove',removeSong)

export default songRouter;