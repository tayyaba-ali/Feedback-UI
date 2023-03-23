const ratingEls = document.querySelectorAll(".rating")
let selectedRating=""

const btnEle = document.getElementById("btn")
const containerEle = document.getElementById("container")


ratingEls.forEach(ratingEle => {
    ratingEle.addEventListener("click", (event) => {
        removeActive()
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
});


function removeActive() {
    ratingEls.forEach((ratingEle) => {
        ratingEle.classList.remove("active")
    })
}

btnEle.addEventListener("click", () => {
    if (selectedRating !== "") {
        containerEle.innerHTML = `
        <strong>Thankyou</strong>
        <br>
        <br>
        <strong>Feedback : ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
        `
    }
})