/**
 * Represents a set of numbers calla lucky pick
 */
class Pick {

    constructor({numbers, extras = {}}) {
        this.numbersArray = numbers;
        this.extrasObject = extras;
    }

    /**
     * returns the array of numbers in the pick
     * @returns {*}
     */
    numbers() {
        return this.numbersArray;
    }

    /**
     * if the pick has
     * @returns {boolean}
     */
    hasExtras() {
        return !!this.extrasObject.extra;
    }

    /**
     * return the extras. e.g. powerball
     * @returns {{}}
     */
    extras() {
        return this.extrasObject;
    }

    /**
     * return the extras. e.g. powerball
     * @returns {{}}
     */
    extraNumber() {
        return this.extrasObject.extra.number;
    }

    /**
     * return the extras. e.g. powerball
     * @returns {{}}
     */
    extraName() {
        return this.extrasObject.extra.name;
    }

}

export default Pick;