const treatsEl = document.querySelectorAll(".treats");
const todaysDate = new Date();

let todaysMonth = todaysDate.getMonth();
console.log(todaysMonth);

if (todaysMonth <= 10) {
    treatsEl.classList.remove("hidden");
}
