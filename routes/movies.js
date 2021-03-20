const config = require('../config');
const movieCtrl = require('../controllers/movieCtrl');
const authMiddleware = require('../middleware/auth');
const { Router } = require('express');

const router = Router();

router.get('/watch_list', authMiddleware, movieCtrl.getWatchList);
router.post('/watch_list/:id', authMiddleware, movieCtrl.postWatchList);
router.post(
  '/watch_list/delete/:id',
  authMiddleware,
  movieCtrl.deleteFromWatchList
);

router.get('/favorites', authMiddleware, movieCtrl.getFavorites);
router.post('/favorites/:id', authMiddleware, movieCtrl.postFavorites);
router.post(
  '/favorites/delete/:id',
  authMiddleware,
  movieCtrl.deleteFromFavorites
);

module.exports = router;
