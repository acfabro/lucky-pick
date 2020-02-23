import games from '../../lucky-pick/entities/games';

export default function listGames ({
    sendResponse,
}) {

    let data = Object.keys(games.toVoice).map((key) => games.toVoice[key]);
    console.log('Data:', data);

    // send back the list
    sendResponse(data);
}
