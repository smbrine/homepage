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

var idInput = document.getElementById('id-input');

var choice = localStorage.getItem(idInput.value)

function login() {
    const div_1 = document.querySelector('.block-1');
    const div_2 = document.querySelector('.block-2');
    const div_3 = document.querySelector('.block-3');

    for (const card of document.querySelectorAll(".codeblock")) {
        card.onmousemove = e => handleOnMouseMove(e);
    }
    
    for (const tile of document.querySelectorAll(".link-tile")) {
        tile.onmousemove = e => handleOnMouseMove(e);
    }

    if (!div_1.hasAttribute('hidden')) {
        div_1.setAttribute('hidden', '');
    }

    if (!div_2.hasAttribute('hidden')) {
        div_2.setAttribute('hidden', '');
    }

    if (div_3.hasAttribute('hidden')) {
        div_3.setAttribute('hidden', '');
    }

    localStorage.setItem('preference', idInput.value);

    if (idInput.value == "1") {
        div_1.removeAttribute('hidden');
    } else if (idInput.value == "2") {
        div_2.removeAttribute('hidden');
    } else if (idInput.value == "3") {
        div_3.removeAttribute('hidden');
    }
}

window.onload = function() {
    console.log('Executed');
    var userId = '1';
    const preference = localStorage.getItem('preference');
    if (preference !== null) {
        userId = preference;
    }
    idInput.value = userId;

    const preload = document.querySelector('.preload');
          preload.setAttribute('hidden', '');
          
    login();
};

