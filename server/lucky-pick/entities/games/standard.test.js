import Standard from "./standard";
import random from "../../util/random";

test('Test right number of main numbers', () => {
    let standard = new Standard({
        rng: random,
        numbers: 10,
        max: 10
    });

    expect(standard.pick().numbers().length).toBe(10);
});

test('Test max does not go over limit', () => {
    let standard = new Standard({
        rng: random,
        numbers: 5,
        max: 10
    });

    // perform 200 times to be sure
    for (let i = 0; i < 200; i++) {
        let numbers = standard.pick().numbers();
        for (let j = 0; j < numbers.length; j++) {
            expect(numbers[j]).toBeLessThanOrEqual(10);
        }
    }
});

test('Test numbers reach max', () => {
    let max = 10;

    // perform 200 times to be sure
    for (let i = 0; i < 200; i++) {
        let standard = new Standard({
            rng: random,
            numbers: 5,
            max: max
        });

        let numbers = standard.pick().numbers();
        for (let j = 0; j < numbers.length; j++) {
            // if numbers[j] === max then we good
            if (numbers[j] === max) {
                return;
            }
        }
    }

    // if we reach here we have not reached max
    throw new Error('Max was not reached');
});

test('Text extra number within limits', () => {
    let max = 10;

    // perform 200 times to be sure
    for (let i = 0; i < 1000; i++) {
        let standard = new Standard({
            rng: random,
            numbers: 5,
            max: max,
            params: {
                extraNumber: {
                    max: max,
                    name: 'the extra'
                }
            }
        });

        let number = standard.pick().extras().extra.number;
        if (number > max) {
            throw new Error('Extra number exceeded max');
        }
    }

    // if we reach here then ok
});

test('Text extra number max reached', () => {
    let max = 10;

    // perform 200 times to be sure
    for (let i = 0; i < 1000; i++) {
        let standard = new Standard({
            rng: random,
            numbers: 5,
            max: max,
            params: {
                extraNumber: {
                    max: max,
                    name: 'the extra'
                }
            }
        });

        let number = standard.pick().extras().extra.number;
        if (number === max) {
            return; // we have reached max
        }
    }

    // if we reach here then we have not reached the max
    throw new Error('Extra number max not reached');
});