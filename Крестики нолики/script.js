

'use strict';
alert('Крестики ходят первыми');
let table = document.querySelector('table');
let cells = document.querySelectorAll('td');
let selectedTd;
let moveChecker = 0;
let [c1, c2, c3, c4, c5, c6, c7, c8, c9] = cells;



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



function checkWinner() {


    if (c1.className === "cross" &&
        c2.className === "cross" &&
        c3.className === "cross" ||
        c4.className === "cross" &&
        c5.className === "cross" &&
        c6.className === "cross" ||
        c7.className === "cross" &&
        c8.className === "cross" &&
        c9.className === "cross" ||
        c1.className === "cross" &&
        c4.className === "cross" &&
        c7.className === "cross" ||
        c2.className === "cross" &&
        c5.className === "cross" &&
        c8.className === "cross" ||
        c3.className === "cross" &&
        c6.className === "cross" &&
        c9.className === "cross" ||
        c1.className === "cross" &&
        c5.className === "cross" &&
        c9.className === "cross" ||
        c7.className === "cross" &&
        c5.className === "cross" &&
        c3.className === "cross"){

        alert('Крестики выиграли');
        return reset();

    } else if
       (c1.className === "nought" &&
        c2.className === "nought" &&
        c3.className === "nought" ||
        c4.className === "nought" &&
        c5.className === "nought" &&
        c6.className === "nought" ||
        c7.className === "nought" &&
        c8.className === "nought" &&
        c9.className === "nought" ||
        c1.className === "nought" &&
        c4.className === "nought" &&
        c7.className === "nought" ||
        c2.className === "nought" &&
        c5.className === "nought" &&
        c8.className === "nought" ||
        c3.className === "nought" &&
        c6.className === "nought" &&
        c9.className === "nought" ||
        c1.className === "nought" &&
        c3.className === "nought" &&
        c5.className === "nought" ||
        c7.className === "nought" &&
        c5.className === "nought" &&
        c3.className === "nought"){

        alert('Нолики выиграли');
        return reset();

    } else if
       (c1.className !== "" &&
        c2.className !== "" &&
        c3.className !== "" &&
        c4.className !== "" &&
        c5.className !== "" &&
        c6.className !== "" &&
        c7.className !== "" &&
        c8.className !== "" &&
        c9.className !== "" )
    {
        alert('Ничья');
        return reset();
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




