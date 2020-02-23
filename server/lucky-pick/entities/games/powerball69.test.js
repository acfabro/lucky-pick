import random from "../../util/random";
import Powerball69 from "./powerball69";
import Standard from "./standard";

test('Test numbers count correct', () => {
    let game = new Powerball69({rng: random});
    let pick = game.pick();

    expect(pick.numbers().length).toBe(5);
});

test('Test numbers do not overflow max', () => {
    let max = 69;
    let game = new Powerball69({rng: random});

    // perform 200 times to be sure
    for (let i = 0; i < 200; i++) {
        let numbers = game.pick().numbers();
        for (let j = 0; j < numbers.length; j++) {
            expect(numbers[j]).toBeLessThanOrEqual(max);
        }
    }
});

test('Test numbers reach max', () => {
    let max = 69;
    let game = new Powerball69({rng: random});

    // perform 200 times to be sure
    for (let i = 0; i < 200; i++) {
        let numbers = game.pick().numbers();
        for (let j = 0; j < numbers.length; j++) {
            if(numbers[j] === max) return;
        }
    }

    throw new Error('Max has not been reached')
});

test('Text extra number within limits', () => {
    let max = 29;

    // perform 200 times to be sure
    for (let i = 0; i < 1000; i++) {
        let standard = new Powerball69({rng: random});
        let number = standard.pick().extras().extra.number;
        if (number > max) {
            throw new Error('Extra number exceeded max');
        }
    }

    // if we reach here then ok
});

test('Text extra number max reached', () => {
    let max = 29;

    // perform 200 times to be sure
    for (let i = 0; i < 1000; i++) {
        let standard = new Powerball69({rng: random});
        let number = standard.pick().extras().extra.number;
        if (number === max) {
            return; // we have reached max
        }
    }

    // if we reach here then we have not reached the max
    throw new Error('Extra number max not reached');
});