

'use strict';

function highlight(table) {


    let tbody = table.getElementsByTagName('tbody')[0];
    let rows = tbody.getElementsByTagName('tr');


    for (let i = 0; i < rows.length; i++) {
      let statusCell = rows[i].cells[3];
        console.log(rows[i]);
      if (statusCell.dataset.available === 'true') {
        rows[i].className = 'available';
      } else if (statusCell.dataset.available === 'false') {
          rows[i].className = 'unavailable';
      } else rows[i].setAttribute('hidden', 'hidden');
    }



    for (let j = 0; j < rows.length; j++) {
        let genderCell = rows[j].cells[2];

        if (genderCell.textContent === 'm') {
            rows[j].className = 'male';
        } else  rows[j].className = 'female';
    }


    for (let k = 0; k < rows.length; k++) {
        let ageCell = rows[k].cells[1];

        if (ageCell.textContent < 18) {
            rows[k].style="text-decoration: line-through";
        }
    }

}

highlight(document.querySelector('.js-teachers'));

/*

'use strict';
/!*

function highlight(table) {
    for (let i = 0; i < cells.length; i++) {
        let a = cells[i];
        if status
        a.classList.add('available');
    }
}
new_row.className = "aClassName";
*!/



let elems = document.getElementsByTagName('td');
alert(elems);
for (let i = 0; i < elems.length; i++) {
    let statusCell = elems[i].cell[2];
    alert (statusCell);
    if (elems.i === 'data-available') {
        console.log('true');
    } else console.log(false);
}*/