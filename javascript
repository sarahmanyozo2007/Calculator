let display = document.getElementById("display");

function addValue(value){
    display.value += value;
}
function clearDisplay(){
    display.value = "";
}

function deleteNumber(){
    display.value = display.value.slice(0,-1);
}