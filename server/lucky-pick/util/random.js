import Chance from 'chance';
const chance = new Chance();

/**
 * An adapter for chance rng
 * @param min
 * @param max
 * @returns {Number}
 */
const random = (min, max) => {
    return chance.integer({min: min, max: max})
};

export default random;