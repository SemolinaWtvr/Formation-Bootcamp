function hello () {
    let bob = document.createElement('p');
    document.body.append(bob);

    bob.textContent = "SALUT?";
}

export default hello;