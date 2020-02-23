import random from "../../lucky-pick/util/random";

/**
 * This intent selects a game and keeps in session.
 */
const selectGameIntent = (conv) => {
    // to do rotate messages

    const messages = [
        'Hi, do you want today\'s Lucky Pick?"',
        'Hi, wanna Lucky Pick?',
        'Wanna get lucky?',
    ];

    conv.ask(messages[random(0,messages.length-1)]);
};

export default welcomeIntent;