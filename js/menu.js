"use strict";

const n = 51;
// (n == 50) ? console.log('==50') : console.log('!!');

switch (n){ //only strict equal
    case 49 :
        console.log('No');
        break;
    case 50:
        console.log('Done');
        break; 
    default :
        console.log('not now');
        break;
}