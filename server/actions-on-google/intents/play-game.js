import playGame from '../../lucky-pick/use-cases/play-game';
import random from "../../lucky-pick/util/random";
import games from "../../lucky-pick/entities/games";

// TODO move to lucky-pick/text
const questions = [
    "Okay. What game do you want to play? How many numbers? And what's the highest number?",
    "Sure. What do you feel like playing? How many numbers? And what's the highest number?",
    "Okay. Which game? How many numbers? And what's the highest number?",
];

const answerPrefixes = [
    "Here are your lucky numbers:",
    "Here's your Lucky Pick:",
];

const answerPostfixes = [
    "",
    "Go get lucky!",
    "Have a lucky day.",
    "Fortune favors the brave.",
];

/**
 * the play game intent
 * @param conv
 * @param game
 * @param numbers
 * @param max
 */
const intentPlayGame = (conv, {game, numbers, max}) => {
    // if game not specified
    if (!game && (!numbers || !max)) {
        conv.ask(questions[random(0, questions.length - 1)]);
        return;
    }

    // if game not specified but numbers and max are
    if (!game && (numbers || max)) {
        game = 'standard';
    }

    // get the game code from the textual input
    let gameName = buildCode(game);
    if (!gameName) {
        conv.ask("Sorry, I am not familiar with that game yet. Do you have any other game in mind?");
        return;
    }

    // we have all we need, now play the game
    playGame({
        name: gameName,
        numbers,
        max,
        sendResponse: (response) => {
            console.log('Response:', response);
            conv.ask(buildResponse(response));
        }
    });
};

/**
 * Build the textual response for google assistant
 * @param response
 * @returns {string}
 */
const buildResponse = (response) => {
    let answerPrefix = answerPrefixes[random(0, answerPrefixes.length - 1)];
    let answerPostfix = answerPostfixes[random(0, answerPostfixes.length - 1)];

    // build main numbers
    // insert and before the last number
    let bodyNumbers = response.numbers;
    bodyNumbers.splice(bodyNumbers.length - 1, 0, "and");
    let bodyNumbersText = bodyNumbers.join(",");

    // check for extra number
    let extraNumberText = response.hasExtra ?
        `The ${response.extraName} is ${response.extraNumber}.` :
        '';

    return `${answerPrefix} ${bodyNumbersText}. ${extraNumberText} ${answerPostfix}`;

};

/**
 * Builds a game code from a textual input
 * @param game
 */
const buildCode = (game) => {
    if (game.toLowerCase() === 'standard') {
        return 'standard';
    }

    let gameName = game.replace(/[^\w]/g,'').toLowerCase();
    let myGames = objectMap(games.toCode, (v, k) => [k.replace(/[^\w]/g, '').toLowerCase(), v]);
    console.log(myGames);

    if (!myGames.hasOwnProperty(gameName)) {
        return null;
    }

    return myGames[gameName];
};

const objectMap = (obj, fn) =>
    Object.fromEntries(
        Object.entries(obj).map(
            ([k, v], i) => fn(v, k, i)
        )
    );

export default intentPlayGame;
