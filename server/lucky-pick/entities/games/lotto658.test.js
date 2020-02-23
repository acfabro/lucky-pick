import random from "../../util/random";
import Lotto658 from "./lotto658";

test('Test numbers count correct', () => {
    let game = new Lotto658({rng: random});
    let pick = game.pick();

    expect(pick.numbers().length).toBe(6);
});

test('Test numbers do not overflow max', () => {
    let max = 58;
    let game = new Lotto658({rng: random});

    // perform 200 times to be sure
    for (let i = 0; i < 200; i++) {
        let numbers = game.pick().numbers();
        for (let j = 0; j < numbers.length; j++) {
            expect(numbers[j]).toBeLessThanOrEqual(max);
        }
    }
});

test('Test numbers reach max', () => {
    let max = 58;
    let game = new Lotto658({rng: random});

    // perform 200 times to be sure
    for (let i = 0; i < 200; i++) {
        let numbers = game.pick().numbers();
        for (let j = 0; j < numbers.length; j++) {
            if(numbers[j] === max) return;
        }
    }

    throw new Error('Max has not been reached')
});