const ratingEls = document.querySelectorAll(".rating")
let selectedRating=""

const btnEle = document.getElementById("btn")
// console.log(btnEle)
const containerEle = document.getElementById("container")

// console.log(containerEle)
// console.log(ratingEls);

ratingEls.forEach(ratingEle => {
    // console.log(ratingEle)
    ratingEle.addEventListener("click", (event) => {
        // console.log(event.target.innerText)
        console.log(event.target.innerText || event.target.parentNode.innerText);
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

btnEle.addEventListener("click", (event) => {
//  event.preventDefault()
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