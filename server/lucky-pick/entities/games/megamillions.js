import Standard from "./standard";

export default class MegaMillions extends Standard {
    constructor(props) {
        let {rng, params} = props;

        // game specs
        super({rng,
            params: {
                ...params,
                extraNumber: {
                    max: 25,
                    name: "MegaBall"
                },
            }, numbers: 5, max: 70}
        );
    }
}