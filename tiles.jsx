const tiles = document.querySelectorAll('.tile');
const addTile = document.querySelector('#add-tile');


/* add cards */

const addTileToBank = (event) => {
    const tile = createTile();
    const bank = document.querySelector('#bank');
    bank.appendChild(tile);
}

addTile.onclick = addTileToBank;

/* reset tiles */



/* cards */


function createTile() {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('draggable', 'true');
    tile.id = Date.now();
    tile.ondragstart = onDragStart;
    tile.ondragend = onDragEnd;
    tile.ondblclick = deleteTile;
    appendImage(tile);
    return tile;
}

const appendImage = (tile) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept','image/x-png,image/PNG,image/gif,image/jpeg');
    input.style.visibility = 'hidden';
    input.onchange = () => {
        const image = new Image(35,35);
        const file = input.files[0];
        console.log(file);

        const reader = new FileReader();
        reader.onload = (event) => {
            image.src = event.target.result;
            image.style.pointerEvents = 'none';
            tile.appendChild(image);
        }
        reader.readAsDataURL(file);
    }
    input.click();
}

const deleteTile = (event) => {
    const willDeleteTile = window.confirm('Do you want to delete this tile?');
    if (willDeleteTile) {
        event.target.remove();
    }
}

const onDragStart = (event) => {
    console.log('dragging');
    event.dataTransfer.setData('id', event.target.id);
    setTimeout(() => {
        event.target.style.visibility = 'hidden';
    }, 50)
}

const onDragEnd = (event) => {
    event.target.style.visibility = 'visible';
    console.log('end');
}

tiles.forEach((tile) => {
    tile.ondragstart = onDragStart;
    tile.ondragend = onDragEnd;
})

function showClass() {
    const e = document.getElementById("dropdown");
    const val = e.value;
    console.log(val);
    if (val == '0') {
        console.log("val is equal to 0");
        $("img.champ").show();
        $("img.fruit").show();
        $(".text").show();
    } else if (val == '1') {
        console.log("val is equal to 1");
        $("img.champ").show();
        $("img.fruit").hide();
        $(".text").hide();
    } else if (val == '2') {
        console.log("val is equal to 2");
        $("img.champ").hide();
        $("img.fruit").show();
        $(".text").hide();
    } else if (val == '3') {
        console.log("val is equal to 3");
        $("img.champ").hide();
        $("img.fruit").hide();
        $(".text").show();
    } else {
        $("img.champ").show();
        $("img.fruit").show();
        $(".text").show();
    }
} 

