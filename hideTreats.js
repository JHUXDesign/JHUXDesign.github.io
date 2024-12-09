const treatsEl = document.querySelectorAll(".treats");
const todaysDate = new Date();

let todaysMonth = todaysDate.getMonth();
console.log(typeof todaysMonth);

console.log(treatsEl);

if (todaysMonth === 11) {
    treatsEl[0].classList.add("hidden");
    console.log(treatsEl);
}
