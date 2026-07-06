let names = ["Ali", "Ahmed", "Sara", "Fatima"];
let target = "Sara";
let index = -1;

for (let i = 0; i < names.length; i++) {
    if (names[i] === target) {
        index = i;
        break;
    }
}

let resultText;

if (index !== -1) {
    resultText = target + " found at index " + index;
} else {
    resultText = "Element not found";
}

console.log(resultText);
document.getElementById("output").innerText = resultText;