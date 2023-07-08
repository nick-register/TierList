const bank = document.querySelector('#bank');

const onDropTile = (event) => {
    const id = event.dataTransfer.getData('id');
    bank.appendChild(document.getElementById(id));
}

bank.ondrop = onDropTile;
bank.ondragover = (event) => event.preventDefault();