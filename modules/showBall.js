
function showBall() {
    const button = document.querySelector("button");

    document.addEventListener("click", () => {
        ball.style.display = "block";
    })
}
export default showBall;