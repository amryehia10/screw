let buttons = document.getElementsByClassName("btns");
let buttonArray = Array.from(buttons);
let popupWindow = document.getElementById("popup-window");
let closeButton = document.getElementById("close-button");
let myForm = document.getElementById("myForm");
let playBtn = document.getElementById("play-button");
let lastBreak = document.getElementById("last");
let inputs = document.querySelectorAll("input");
let currentInput;
let newInputs = [];

function checkInput() {
    var i = 0;
    let flag = false;
    while(i < newInputs.length) { 
        if(newInputs[i].value === '') {
            alert("Please enter player name");
            flag = false;
            break;
        }
        else {
            i++;
            flag = true;
        }
    }
    if(flag) {
        myForm.submit();
        inputs.forEach(element => {
            element.value  = "";
        });
    }
    
}

function hideInputs(currentElement) {
    currentElement = currentElement.nextElementSibling;
    while (currentElement.id !== "play-button") {
        currentElement.style.display = "none";
        currentElement = currentElement.nextElementSibling;
    }
}
function showInputs(currentElement) {
    currentElement = currentElement.nextElementSibling;
    while (currentElement.id !== "play-button") {
        currentElement.style.display = "inline-block";
        currentElement = currentElement.nextElementSibling;
    }
}

function hideButtons() {
    buttonArray.forEach(function(btn) {
        btn.style.display = "none";
    });
}

function showButtons() {
    buttonArray.forEach(function(btn) {
        btn.style.display = "block";
    });
}

function addNewInputs(index) {
    for(let i = 0; i <= index; i++) { 
        newInputs[i] = inputs[i];
    }
}

buttonArray.forEach(function (button) {
    button.addEventListener('click', function (event) {
        if(button.id === 'btn1') {
            event.preventDefault();
            popupWindow.style.display = "block";
            addNewInputs(1);
            currentInput = inputs[1];
            hideInputs(currentInput);
            popupWindow.style.height = "150px";
            hideButtons();
        }
        else if (button.id === 'btn2') { 
            event.preventDefault();
            popupWindow.style.display = "block";
            currentInput = inputs[2];
            addNewInputs(2);
            hideInputs(currentInput);
            popupWindow.style.height = "197px";
            hideButtons();
        }
        else if (button.id === 'btn3') { 
            event.preventDefault();
            popupWindow.style.display = "block";
            currentInput = inputs[3];
            addNewInputs(3);
            hideInputs(currentInput);
            popupWindow.style.height = "244px";
            hideButtons();
        }
        else if (button.id === 'btn4') { 
            event.preventDefault();
            popupWindow.style.display = "block";
            currentInput = inputs[4];
            addNewInputs(4);
            hideInputs(currentInput);
            popupWindow.style.height = "291px";
            hideButtons();
        }
        else if (button.id === 'btn5') { 
            event.preventDefault();
            popupWindow.style.display = "block";
            currentInput = inputs[5];
            addNewInputs(5);
            hideInputs(currentInput);
            popupWindow.style.height = "338px";
            hideButtons();
        }
        else if (button.id === 'btn6') { 
            event.preventDefault();
            popupWindow.style.display = "block";
            currentInput = inputs[6];
            addNewInputs(6);
            hideInputs(currentInput);
            popupWindow.style.height = "385px";
            hideButtons();
        }
    });
}
);

playBtn.addEventListener('click', function (event) {
    event.preventDefault();
    checkInput();
}); 
closeButton.addEventListener("click", function() {
    currentInput = inputs[1];
    showInputs(currentInput);
    popupWindow.style.height = "400px";
    popupWindow.style.display = "none";
    inputs.forEach(element => {
        element.value  = "";
    });
    newInputs = [];
    showButtons()
});