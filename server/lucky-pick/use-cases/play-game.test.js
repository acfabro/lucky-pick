import playGame from "./play-game";

test('Test play game ok', () => {
    playGame({name: 'marksix', sendResponse: (response) => {
        console.log(response);
    }});
});

test('Test play default game', () => {
    playGame({sendResponse: (response) => {
        console.log(response);
    }});
});