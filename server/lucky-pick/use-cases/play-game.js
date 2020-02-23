import gameFactoryDefault from '../entities/game-factory';

/**
 * This use case plays the game the user has requested
 * @param gameName
 * @param gameFactory gameFactory
 * @param numbers
 * @param max
 */
export default function playGame ({
    session,
    name,
    numbers,
    max,
    params,
    rng,
    sendResponse,
    gameFactory = gameFactoryDefault,
} = {}) {
    // if (!gameFactory) gameFactory = gameFactoryDefault;

    console.log({
        session,
        name,
        numbers,
        max,
        params,
    });

    try {
        // todo if name not specified, use the value in session

        // get a game from the game factory
        let game = gameFactory({
            rng, numbers, max, params,
            name: name? name: 'standard',
        });

        // get the lucky numbers from the game
        let pick = game.pick();

        // return
        sendResponse({
            success: true,
            numbers: pick.numbers(),
            hasExtra: pick.hasExtras(),
            extraNumber: pick.hasExtras()? pick.extraNumber(): null,
            extraName: pick.hasExtras()? pick.extraName(): null,
        });
    } catch (e) {
        sendResponse({
            success: false,
            message: e
        });
    }
};
