let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let saturday = document.getElementById("saturday");
let sunday = document.getElementById("sunday");

let dsMonday = document.getElementById("ds-monday");
let dsTuesday = document.getElementById("ds-tuesday");
let dsWednesday = document.getElementById("ds-wednesday");
let dsThursday = document.getElementById("ds-thursday");
let dsFriday = document.getElementById("ds-friday");
let dsSaturday = document.getElementById("ds-saturday");
let dsSunday = document.getElementById("ds-sunday");

let closeBtn = document.getElementById("closeBtn");

monday.addEventListener("click", () => {
    if (dsMonday.classList.contains("display-none")) {
    dsMonday.classList.remove("display-none");}
})

closeBtn.addEventListener("click", () => {
    dsMonday.classList.add("display-none");
    dsTuesday.classList.add("display-none");
    dsWednesday.classList.add("display-none");
    dsThursday.classList.add("display-none");
    dsFriday.classList.add("display-none");
    dsSaturday.classList.add("display-none");
    dsSunday.classList.add("display-none");})