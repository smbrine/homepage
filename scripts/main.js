const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);

}

for (const card of document.querySelectorAll(".codeblock")) {
    card.onmousemove = e => handleOnMouseMove(e);
}

for (const tile of document.querySelectorAll(".link-tile")) {
    tile.onmousemove = e => handleOnMouseMove(e);
}


const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', login);

function login() {
    const idInput = document.getElementById('id-input').value;
    console.log(idInput)
    if (idInput == "1") {
        
    } else if (idInput == "2") {

    } else if (idInput == "3") {

    }
}
