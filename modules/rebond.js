function hello () {
    let bob = document.createElement('p');
    document.body.append(bob);

    bob.id = "leFameuxBob";
    bob.textContent = "SALUT?";

    bob.addEventListener("click", console.log("coucou"))
}

export default hello;