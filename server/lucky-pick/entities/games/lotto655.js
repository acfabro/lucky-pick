import Standard from "./standard";

export default class Lotto655 extends Standard {
    constructor(props) {
        let {rng, params} = props;

        // game specs
        super({rng, params, numbers: 6, max: 55});
    }
}