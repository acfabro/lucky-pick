import games from '../../lucky-pick/entities/games';

const listGames = (conv) => {
    let data = Object.keys(games.toVoice).map((key) => games.toVoice[key]);
    let gameList = data[data.length-1] = "and " + data[data.length-1];

    conv.ask(`Your choices are: ${gameList}.`);
};

export default listGames;