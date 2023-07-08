const tiers = document.querySelectorAll('.tier');
const colors = ['lavendar', 'cyan', 'lime', 'yellow', 'orange', 'red'];

const onDragOver = (event) => {
    event.preventDefault();
} 



const onDrop = (event) => {
    event.preventDefault();
    const draggedTileID = event.dataTransfer.getData('id');
    const draggedTile = document.getElementById(draggedTileID);
    event.target.appendChild(draggedTile);
    console.log('dropped');
}

tiers.forEach((tier, index) => {
    const tierLabel = tier.querySelector('.tier-label');
    tierLabel.style.backgroundColor = colors[index];
    tier.ondragover = onDragOver;
    tier.ondrop = onDrop;
})

