const tiers = document.querySelectorAll('.tier');

const onDragOver = (event) => {
    event.preventDefault();
} 

const onDrop = (event) => {
    event.preventDefault();

    console.log('dropped');
}

tiers.forEach((tier) => {
    tier.ondragover = onDragOver;
    tier.ondrop = onDrop;
})