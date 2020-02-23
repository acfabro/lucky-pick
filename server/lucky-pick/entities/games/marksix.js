import Standard from "./standard";

export default class MarkSix extends Standard {
    constructor(props) {
        let {rng, params} = props;

        // game specs
        super({rng,
            params: {
                ...params,
                extraNumber: {
                    max: 49,
                    name: "Extra Number"
                },
            }, numbers: 6, max: 49}
        );
    }
}