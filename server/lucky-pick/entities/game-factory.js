import random from '../util/random';
import gamesList from './games';

/**
 * Builder for games
 * @param name
 * @param rng
 * @param numbers
 * @param max
 * @param games
 * @param params
 * @returns {Standard}
 */
const gameFactory = ({
    name,
    rng = random,
    numbers,
    max,
    params,
    games,
}) => {
    if (!games) games = gamesList;

    switch (name) {
        case "lotto645":
            return new games.Lotto645({rng, params});

        case "lotto649":
            return new games.Lotto649({rng, params});

        case "lotto655":
            return new games.Lotto655({rng, params});

        case "lotto658":
            return new games.Lotto658({rng, params});

        case "marksix":
            return new games.MarkSix({rng, params});

        case "megamillions":
            return new games.MegaMillions({rng, params});

        case "powerball69":
            return new games.Powerball69({rng, params});

        case "standard":
            // return a standard game of x numbers of y max
            return new games.Standard({rng, numbers, max, params});

        default:
            throw new Error(`Unrecognized game ${name}`);
    }
};

export default gameFactory;
