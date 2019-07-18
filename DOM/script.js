

'use strict';

function highlight(table) {


    let tbody = table.getElementsByTagName('tbody')[0];
    let rows = tbody.getElementsByTagName('tr');


    for (let i = 0; i < rows.length; i++) {
      
    let statusCell = rows[i].cells[3];

        if (statusCell.dataset.available === 'true') {
        rows[i].className = 'available';
        } else if (statusCell.dataset.available === 'false') {
          rows[i].className = 'unavailable';
        } else rows[i].setAttribute('hidden', 'hidden');
    
    let genderCell = rows[i].cells[2];

        if (genderCell.textContent === 'm') {
        rows[i].className = 'male';
        } else  rows[i].className = 'female';


    let ageCell = rows[i].cells[1];
        
        if (ageCell.textContent < 18) {
        rows[i].style="text-decoration: line-through";
        }
    }
}   


highlight(document.querySelector('.js-teachers'));

