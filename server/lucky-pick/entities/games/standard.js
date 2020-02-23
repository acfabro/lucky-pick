import Pick from '../pick';

export default class Standard {

    /**
     *
     * @param props
     */
    constructor({rng, numbers, max, params = {}}) {
        this.rng = rng;
        this.numbers = numbers;
        this.max = max;
        this.params = params;
    }

    /**
     * generate the picks and return
     */
    pick() {
        let result = [];
        let extras = {};

        // generate the main numbers
        for (let i = 0; i < this.numbers; i++) {
            let currentNumber = this.rng(1, this.max)

            if (result.indexOf(currentNumber) === -1) {
                result.push(currentNumber);
            } else {
                i--;
            }
        }

        // if extra number is required
        if (this.params.extraNumber) {
            extras = {
                extra: {
                    number: this.rng(1, this.params.extraNumber.max),
                    name: this.params.extraNumber.name ?? "extra",
                }
            };
        }

        return new Pick({numbers: result, extras: extras});
    }
}