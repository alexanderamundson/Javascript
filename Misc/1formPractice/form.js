const input1 = document.getElementById("text-input-1");
const output = document.getElementById("output-div");
//const input1 = document.getElementById("text-input-1");


input1.addEventListener("keyup", function(event) {
    console.log(event.target.value);
    output.innerHTML = `<p>${event.target.value}</p>`;
});