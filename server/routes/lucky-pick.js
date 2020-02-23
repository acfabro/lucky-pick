import express from 'express';
import {playGame, listGames} from '../lucky-pick/use-cases';

const router = express.Router();

/* GET games listing. */
router.get('/games', function (req, res, next) {
    listGames({
        sendResponse: (response) => {
            console.log(response);
            res.send(response);
        }
    });
});

/* POST play a game */
router.post('/play', function (req, res, next) {
    const {session, name, numbers, max, params} = req.body;

    playGame({
        session, name, numbers, max, params,
        sendResponse: (response) => {
            res.send(response);
        }
    });
});

export default router;
