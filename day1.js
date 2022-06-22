let counter = document.getElementsByClassName("counter")
let addBtn = document.getElementById("add");
let subBtn = document.getElementById("subtract");
let resetBtn = document.getElementById("reset");
let count = 0;

addBtn.addEventListener("click", () => {
    count = count + 1;
    document.getElementById("counter").innerHTML = count;
});

subBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 1;
        document.getElementById("counter").innerHTML = count;
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    document.getElementById("counter").innerHTML = count;
})




