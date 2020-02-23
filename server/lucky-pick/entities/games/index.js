import Lotto645 from './lotto645';
import Lotto649 from './lotto649';
import Lotto655 from './lotto655';
import Lotto658 from './lotto658';
import Powerball69 from './powerball69';
import MegaMillions from './megamillions';
import MarkSix from './marksix';
import Standard from './standard';

export default {
    Lotto645,
    Lotto649,
    Lotto655,
    Lotto658,
    Powerball69,
    MegaMillions,
    MarkSix,
    Standard,

    toVoice: {
        'lotto645': "six forty-five",
        'lotto649': "six forty-nine",
        'lotto655': "six fifty-five",
        'lotto658': "six fifty-eight",
        'marksix': "mark six",
        'powerball69': "Powerball",
        'megamillions': "MegaMillions",
    },

    toCode: {
        "six forty-five": 'lotto645',
        "forty-five": 'lotto645',
        "six forty-nine": 'lotto649',
        "forty-nine": 'lotto649',
        "six fifty-five": 'lotto655',
        "fifty-five": 'lotto655',
        "six fifty-eight": 'lotto658',
        "fifty-eight": 'lotto658',
        "mark six": 'marksix',
        "Powerball": 'powerball69',
        "MegaMillions": 'megamillions',
    },
};