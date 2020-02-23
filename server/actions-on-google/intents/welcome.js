import welcomeUseCase from '../../lucky-pick/use-cases/welcome';
import random from "../../lucky-pick/util/random";

const welcomeIntent = (conv) => {
    // to do rotate messages

    const messages = [
        'Hi, do you want today\'s Lucky Pick?"',
        'Hi, wanna Lucky Pick?',
        'Wanna get lucky?',
    ];

    welcomeUseCase();
    conv.ask(messages[random(0,messages.length-1)]);
};

export default welcomeIntent;