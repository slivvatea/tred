"use strict";
let n = 10;

let str = 'rED dED';
console.log(str.toLowerCase());
console.log(str.indexOf('q'));

// const neCoonst = 'Javass';

let neCoonst = 'Sero Buryi Color'; 
console.log(neCoonst.slice(4));
const calc = (a,b) => { return a+b };

function learn(lang,callback) {  
    console.log(`I learn ${lang}`);
    callback();
}
learn('JS', function () { 
    console.log('Ive learned this');
 })

 const options = {
     name : 'test',
     width : 1024,
     height: 1024,
     colors: {
         border: 'black',
         background: 'red',
     },
     maleTest: function () { 
         console.log("Test");
      }
 }
options.maleTest();

const {border,background} = options.colors;
console.log(border);


// console.log(Object.keys(options).length);


// let counter = 0;
//  for (let key in options){
//      if (typeof(options[key] === 'Object')) {
//          for (let i in options[key]){
//             console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
//             counter++;

//         }
//      }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//      }
//    } 
// console.log(counter);
