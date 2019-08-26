'use strict';
alert('Крестики ходят первыми');
let table = document.querySelector('table');
let cells = document.querySelectorAll('td');
let selectedTd;
let moveChecker = 0;
let [c1, c2, c3, c4, c5, c6, c7, c8, c9] = cells;
let line1 = [c1, c2, c3];
let line2 = [c4, c5, c6];
let line3 = [c7, c8, c9];
let col1 = [c1, c4, c7];
let col2 = [c2, c5, c8];
let col3 = [c3, c6, c9];
let diagonal1 = [c1, c5, c9];
let diagonal2 = [c3, c5, c7];

table.addEventListener('click', function(event) {
    let target = event.target;

    if (target.tagName !== 'TD') return;
    if (target.classList.contains('cross') || target.classList.contains('nought')) return;
    highlight(target);
    checkWinner();

});


function highlight(node) {
    selectedTd = node;

    if (moveChecker % 2 === 0) {
        selectedTd.classList.add('cross');
    } else
        selectedTd.classList.add('nought');

    moveChecker++;
}



function isCross(currentValue) {
    return currentValue.className === "cross";
}

function isNought(currentValue) {
    return currentValue.className === "nought";
}

function isFull(currentValue) {
    return currentValue.className !== "";
}


function checkWinner() {
if (line1.every(isCross) || 
    line2.every(isCross) || 
    line3.every(isCross) || 
    col1.every(isCross) || 
    col2.every(isCross) || 
    col3.every(isCross) || 
    diagonal1.every(isCross) || 
    diagonal2.every(isCross))
    {
        alert('Крестики выиграли');
        reset();

    }  else if (line1.every(isNought) || 
                line2.every(isNought) || 
                line3.every(isNought) || 
                col1.every(isNought) || 
                col2.every(isNought) || 
                col3.every(isNought) || 
                diagonal1.every(isNought) || 
                diagonal2.every(isNought))
    {
    alert('Крестики выиграли');
    reset();

    } else if([c1, c2, c3, c4, c5, c6, c7, c8, c9].every(isFull))
    {
        alert('Ничья');
        reset();

    }

}



function reset() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('cross');
        cells[i].classList.remove('nought');
        moveChecker = 0;

    }
    alert('Крестики ходят первыми');
}




