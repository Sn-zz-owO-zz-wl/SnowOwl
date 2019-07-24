

'use strict';

function highlight(table) {


    let tbody = table.querySelector('tbody');
    let rows = tbody.querySelectorAll('tr');


    for (let i = 0; i < rows.length; i++) {
      
      let [, ageCell, genderCell, statusCell] = rows[i].cells;

        if (statusCell.dataset.available === 'true') {
        rows[i].className = 'available';
        } else if (statusCell.dataset.available === 'false') {
          rows[i].className = 'unavailable';
        } else rows[i].setAttribute('hidden', 'hidden');
   

        if (genderCell.textContent === 'm') {
        rows[i].className = 'male';
        } else  rows[i].className = 'female';

        
        if (ageCell.textContent < 18) {
        rows[i].style="text-decoration: line-through";
        }
    }
}   


highlight(document.querySelector('.js-teachers'));

