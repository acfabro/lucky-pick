import Standard from "./standard";

export default class Powerball69 extends Standard {
    constructor(props) {
        let {rng, params} = props;

        // game specs
        super({rng,
            params: {
                ...params,
                extraNumber: {
                    max: 29,
                    name: "Powerball"
                },
            }, numbers: 5, max: 69}
        );
    }
}