import gameFactory from "./game-factory";
import games from './games';

test('Test can make lotto645', () => {
    let game = gameFactory({name: 'lotto645', games: games});
    expect(game).toBeInstanceOf(games.Lotto645);
});

test('Test can make lotto649', () => {
    let game = gameFactory({name: 'lotto649', games: games});
    expect(game).toBeInstanceOf(games.Lotto649);
});

test('Test can make lotto655', () => {
    let game = gameFactory({name: 'lotto655', games: games});
    expect(game).toBeInstanceOf(games.Lotto655);
});

test('Test can make lotto658', () => {
    let game = gameFactory({name: 'lotto658', games: games});
    expect(game).toBeInstanceOf(games.Lotto658);
});

test('Test can make powerball69', () => {
    let game = gameFactory({name: 'powerball69', games: games});
    expect(game).toBeInstanceOf(games.Powerball69);
});

test('Test can make megamillions', () => {
    let game = gameFactory({name: 'megamillions', games: games});
    expect(game).toBeInstanceOf(games.MegaMillions);
});

test('Test can make marksix', () => {
    let game = gameFactory({name: 'marksix', games: games});
    expect(game).toBeInstanceOf(games.MarkSix);
});

test('Test can make standard', () => {
    let game = gameFactory({name: 'standard', games: games});
    expect(game).toBeInstanceOf(games.Standard);
});

test('Test invalid name throws error', () => {
    const t = () => {
        let game = gameFactory({name: 'xxx', games: games});
    };

    expect(t).toThrow(Error);
});


