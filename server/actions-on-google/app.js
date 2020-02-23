import {dialogflow} from "actions-on-google";
import {listGamesIntent, playGameIntent, welcomeIntent} from "./intents";
const app = dialogflow({debug: true});

app.intent('actions.intent.MAIN', welcomeIntent);
app.intent('Default Welcome Intent', welcomeIntent);
app.intent('Welcome', welcomeIntent);
app.intent('Get Lucky Pick', playGameIntent);
app.intent('List Games', listGamesIntent);

export default app;
