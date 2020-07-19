import {mToY, mToK} from './conversions/meters';
import {yToM, yToK} from './conversions/yards';
import {kToY, kToM} from './conversions/kilometers';
import mirror from './conversions/mirror';

function assignConversion(unitA, unitB) {
    switch (unitA + ' ' + unitB) {
// YARDS // -----------------------------------------
        case 'yards meters':
            return yToM;
        case 'yards kilometers':
            return yToK;
// KILOMETERS // ------------------------------------
        case 'kilometers yards':
            return kToY;
        case 'kilometers meters':
            return kToM;
// METERS // ----------------------------------------
        case 'meters yards':
            return mToY;
        case 'meters kilometers':
            return mToK;
        // DEFAULT // ---------------------------------------
        default:
            return mirror;
    }
}

export default assignConversion;