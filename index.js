var form = document.getElementById("form");
var inputnum = document.getElementById("input");
var submit = document.getElementById("submit");
var div = document.getElementById("div")

form.addEventListener("submit", function(event){
    event.preventDefault();

    if ((inputnum.value % 3 === 0) && (inputnum.value % 5 === 0)) {
        div.textContent = "FizzBuzz"
    } else if(inputnum.value % 5 === 0) {
        div.textContent = "Buzz"
    } else if(inputnum.value % 3 === 0) {
        div.textContent = "Fizz"
    } else {
        div.textContent = `${inputnum.value}`
    }

})