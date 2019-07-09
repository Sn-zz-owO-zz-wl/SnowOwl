//by Alexander Bulgakov
'use strict';

let a = {
  name: 'Misha',
  order: {
    price: 20
  },
};

let b = {
  name: 'Misha',
  order: {
    price: 20,
  }
};

function deepEqual(a, b){
for (let key in a) {


      if (a[key] !== b[key]){
         
        for (let deepKey in a[key]){
          console.log(a[key][deepKey]);
           if (a[key][deepKey] === b[key][deepKey]){
            return true;
            
            } else return false;
         }
  }
}

//   for (let key in b) {
    

//     if (a[key] !== b[key]){
       
//       for (let deepKey in b[key]){
//         console.log(b[key][deepKey]);
//          if (a[key][deepKey] === b[key][deepKey]){
          
//           return true;
//           } else return false;
//        }
// }
// } 

}
console.log(deepEqual(a, b));