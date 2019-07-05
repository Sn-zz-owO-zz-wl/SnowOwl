//by Alexander Bulgakov

let arr = [];
while (true) {
    let x = prompt("введите числовой элемент массива " , 0)
    if (x === "" || x === null || isNaN(x) ) break;
    arr.unshift(+x);
    
}


let arrSum = 0;
for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  alert("Массив = "+ arr);
alert("Сумма элементов массива "+ arrSum);


