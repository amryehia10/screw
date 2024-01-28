let url = (location.search).split('&');
let table = document.getElementsByTagName("table")[0];
let popupWindow = document.getElementById("popup-window");
let add = document.getElementById("add");
let clear = document.getElementById("clear");
let players = [];
let div= document.getElementById("names");
let rows = 0;
url.forEach(element => {
    let keyValue = element.split('=')[1];
    if(keyValue !== "") {
        players.push(keyValue);
        let th = document.createElement('th');
        th.textContent = keyValue;
        if (table.tHead.rows.length === 0) {
            let tr = table.tHead.insertRow(0);
            tr.appendChild(th);
        } else {
            table.tHead.rows[0].appendChild(th);
        }
        addFooter();
    }
});

function addFooter() {
    let th = document.createElement('th');
    th.textContent = 0;
    if (table.tFoot.rows.length === 0) {
        let tr = table.tFoot.insertRow(0);
        tr.appendChild(th);
    } else {
        table.tFoot.rows[0].appendChild(th);
    }
}

function checkInput(inputs) {
    var i = 0;
    let flag = false;
    while(i < inputs.length) { 
        if(inputs[i].value === '') {
            alert("Please enter player score");
            flag = false;
            break;
        }
        else {
            i++;
            flag = true;
        }
    }
    return flag;
    
}

function showPopAndHide() {
    popupWindow.style.display = "none";
    add.style.display = "flex";
    clear.style.display = "inline";
    table.style.display = "table";
    div.innerHTML = "";
}

add.addEventListener("click",(event) => { 
    event.preventDefault();
    add.style.display = "none";
    clear.style.display = "none";
    table.style.display = "none";
    popupWindow.style.display = "block";
    players.forEach(element => {
        let label = document.createElement("label");
        label.style.display = "inline-block";
        let input = document.createElement('input');
        let br = document.createElement('br');
        let br2 = document.createElement('br');
        label.textContent = element +":";
        input.type = 'number';
        input.className = "numInput";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(br);
        div.appendChild(br2);
    });
    if(players.length == 2) {
        popupWindow.style.height =  "150px"
    }
    else if(players.length == 3) {
        popupWindow.style.height =  "180px"
    }
    else if(players.length == 4) {
        popupWindow.style.height =  "224px"
    }
    else if(players.length == 5) {
        popupWindow.style.height =  "271px"
    }
    else if(players.length == 6) {
        popupWindow.style.height =  "310px"
    }
    else {
        popupWindow.style.height = "345px";
    }
    
});

document.getElementById("close-button").addEventListener("click", function(event) {
    event.preventDefault();
    showPopAndHide();
});

document.getElementById("play-button").addEventListener("click", function (event) { 
    event.preventDefault();
    let inputs = document.getElementsByClassName("numInput");
    let result = Array.from(table.tFoot.rows[0].cells);
    let inputArr = [];
    let tableRaw = table.tBodies[0].insertRow(rows);
    if(checkInput(inputs)) {
        for(let i = 0; i < inputs.length; i++) {
            let td = document.createElement('td');
            td.textContent = inputs[i].value;
            inputArr.push(parseInt(inputs[i].value));
            tableRaw.appendChild(td);
        };  
        
        for(let j = 0; j < result.length; j++) { 
            let value = parseInt(result[j].innerHTML);
            value += inputArr[j];
            table.tFoot.rows[0].cells[j].innerHTML = value;
        }
        rows++;
    }
    showPopAndHide();
    saveTableData();
});

document.getElementById("clear").addEventListener("click", (event) => {
    let choice = confirm("Are you sure you want to clear the data");
    if(choice) {
        rows = 0;
        event.preventDefault();
        table.tBodies[0].innerHTML = " ";
        table.tFoot.rows[0].innerHTML = " ";
        url.forEach(element => {
            let keyValue = element.split('=')[1];
            if(keyValue !== "") {
                addFooter();
            }
        });
    }
});
function populateTable() {
    // Get the stored data from localStorage
    const storedData = sessionStorage.getItem('tableData');
    const restoreData = sessionStorage.getItem('result');

    if (storedData) {
        // If data is found, parse and populate the table
        const table = document.getElementById('myTable');
        table.querySelector('tbody').innerHTML = storedData;
        table.querySelector('tfoot').innerHTML = restoreData;
    }
}

function saveTableData() {
    const table = document.getElementById('myTable');
    const tableData = table.querySelector('tbody').innerHTML;
    const ResultData = table.querySelector('tfoot').innerHTML;

    // Save the table data to localStorage
    sessionStorage.setItem('tableData', tableData);
    sessionStorage.setItem('result', ResultData);
}
document.addEventListener('DOMContentLoaded', function () {
    
    // Function to populate or restore table data from localStorage
 
    // Call the function to populate or restore table data
    
    populateTable();
    // Event listener for the back button
    
    window.addEventListener('popstate', function (event) {
        // Re-populate the table data when navigating back
        populateTable();
    });
});